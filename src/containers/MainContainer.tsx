import React from 'react';
import QueryContainer from './QueryContainer';
import SideBarContainer from './SideBarContainer';
import { useState, useEffect } from 'react';
import DBModal from '~/components/modal/DBModal';
import type { QueryLogItemObject, FormData } from '~/types/types';
import { useMutation } from 'react-query'

const MainContainer: React.FC = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [queryLog, setQueryLog] = useState<QueryLogItemObject[]>([]);
  const [connection, setConnection] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState({
    graf_name: '',
    graf_pass: '',
    graf_port: '',
    db_name: '',
    db_url: '',
    db_username: '',
    db_server: '',
    db_password: '',
  });
  const [dashboardState, setDashboardState] = useState('database');
  const [databaseGraphs, setDatabaseGraphs] = useState<string[]>([]);
  const [queryGraphs, setQueryGraphs] = useState<string[]>([]);

  //for connecting to test DB
  const [testConnected, setTestConnected] = useState(false);
  const [activeQuery, setActiveQuery] = useState<QueryLogItemObject>({
    query: '',
    data: [],
    name: '',
  });

  //checking form validation on input changes for credentials
  useEffect(() => {
    const {
      graf_name,
      graf_pass,
      graf_port,
      db_name,
      db_url,
      db_username,
      db_server,
      db_password,
    } = formData;
    let isValid = false;
    if (
      graf_name &&
      graf_pass &&
      graf_port &&
      db_name &&
      db_url &&
      db_username &&
      db_server &&
      db_password
    ) {
      isValid = true;
    }
    setIsFormValid(isValid);
  }, [formData]);

   //when form is submitted, the function passed to useMutation is executed. It will receive the formData as an argument, which contains the data entered in the form fields. useMutation is used for making POST,PUT,DELETE
   const mutation = useMutation(async (formData: FormData) => {
    const apiUrl = 'http://localhost:3001/api/connect';
    const { graf_name, graf_pass, graf_port, db_name, db_url, db_username, db_server, db_password } = formData;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Basic ${Buffer.from(`${graf_name}:${graf_pass}`).toString('base64')}`,
      },
      body: JSON.stringify({
        graf_name,
        graf_pass,
        graf_port,
        db_name,
        db_url,
        db_username,
        db_server,
        db_password,
      }),
    });
    if (!response.ok) {
      throw new Error('Failed to connect'); // Handle error
    }

    return response.json();
  });

  // will only fire if isFormValid === true
  const handleConnect = async () => {
    console.log('Valid Form:', formData);
    try {
      const { graf_name, graf_pass, graf_port, db_name, db_url, db_username, db_server, db_password } = formData;
      // mutation is an object returned by the useMutation hook and mutateAsync is a method provided by mutation object
      // await mutation.mutateAsync waits for the mutation operation to complete before moving to the next line 
      await mutation.mutateAsync({
        graf_name,
        graf_pass,
        graf_port,
        db_name,
        db_url,
        db_username,
        db_server,
        db_password,
      });
      // setDatabaseGraphs([]) // pass in array of Iframes
      setDashboardState('database');
      setConnection(true);
      setIsModalOpen(false);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  //if post request is still loading 
  if (mutation.isLoading) {
    return <div>Loading...</div>;
  }

  //if post request fails to fetch
  if (mutation.error) {
    return <div>Error: {mutation.error.message}</div>;
  }

  const editQueryLabel = (index: number, label: string): void => {
    setQueryLog((prevQueryLog) => {
      if (prevQueryLog.length > index) {
        const updatedQueryLog = [...prevQueryLog];
        updatedQueryLog[index].name = label; // functionality works but this linter is not being nice!
        return updatedQueryLog;
      }
      return prevQueryLog;
    });
  };

  return (
    <div className="flex h-full w-full flex-col bg-gradient-to-b from-purple-900 to-white md:flex-row">
      {!isModalOpen ? (
        <></>
      ) : (
        <>
          <DBModal
            openModal={setIsModalOpen}
            setFormData={setFormData}
            formData={formData}
            isFormValid={isFormValid}
            handleConnect={handleConnect}
          />
        </>
      )}
      <SideBarContainer
        openModal={setIsModalOpen}
        connection={connection}
        setConnection={setConnection}
        setFormData={setFormData}
        formData={formData}
        queryLog={queryLog}
        setQueryLog={setQueryLog}
        editQueryLabel={editQueryLabel}
        testConnected={testConnected}
        setTestConnected={setTestConnected}
        activeQuery={activeQuery}
        setActiveQuery={setActiveQuery}
        setDashboardState={setDashboardState}
        databaseGraphs={databaseGraphs}
        setDatabaseGraphs={setDatabaseGraphs}
      />
      <QueryContainer
        setQueryLog={setQueryLog}
        setQuery={setQuery}
        query={query}
        testConnected={testConnected}
        activeQuery={activeQuery}
        setActiveQuery={setActiveQuery}
        dashboardState={dashboardState}
        setDashboardState={setDashboardState}
        databaseGraphs={databaseGraphs}
        queryGraphs={queryGraphs}
        setQueryGraphs={setQueryGraphs}
      />
    </div>
  );
};

export default MainContainer;
