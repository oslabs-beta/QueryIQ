import React from 'react';
import QueryContainer from './QueryContainer';
import SideBarContainer from './SideBarContainer';
import { useState, useEffect } from 'react';
import DBModal from '~/components/modal/DBModal';
import type { QueryLogItemObject } from '~/types/types';

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

  //for connecting to test DB
  const [testConnected, setTestConnected] = useState(false);
  const [activeQuery, setActiveQuery] = useState<QueryLogItemObject>({
    query: '',
    data: {},
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

  // will only fire if isFormValid === true
  const handleConnect = async () => {
    console.log("Valid Form:", formData);
    


    // const route = '/api/connect';
    // const body : { graf_name: string; graf_pass: string; graf_port: string; db_name: string; db_url: string; db_username: string; db_server: string; db_password: string } = formData;
    // try {
    //   const response = await fetch(route, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: body,
    //   })
    //   const data = await response.json();
    // } catch (error) {
    //   console.log(error);
    // }
    // using basic auth on a local Grafana instance
    /*
    const username = 'YOUR_USERNAME'; // Replace with your Grafana username
    const password = 'YOUR_PASSWORD'; // Replace with your Grafana password
    const url = 'http://localhost:3000/api/datasources';
    const body = {
      name: formData.dbName,
      type: 'postgres',
      url: 'formData.dbURI',
      access: 'proxy',
      basicAuth: true
    };

    
      */
    // if we're using an env api key
    /* const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
     axios.post(url, body, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        }
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
        */
    setDashboardState('database');
    setConnection(true);
    setIsModalOpen(false);
  };

  //for connecting to test DB

  // function handleTestConnect() {
  //   // Perform the necessary actions to establish the connection
  //   setConnected(true);
  // }

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
      />
    </div>
  );
};

export default MainContainer;
