import React from 'react';
import { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import QueryContainer from './QueryContainer';
import SideBarContainer from './SideBarContainer';
import DBModal from '~/components/modal/DBModal';
import Popup from '~/components/Popup';
import type {
  QueryLogItemObject,
  FormData,
  GrafanaUserObject,
} from '~/types/types';

const MainContainer: React.FC = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [query, setQuery] = useState(''); // inputQuery state
  const [queryLog, setQueryLog] = useState<QueryLogItemObject[]>([]);
  const [connection, setConnection] = useState(false);

  const [grafanaUser, setGrafanaUser] = useState<GrafanaUserObject>({
    graf_name: '',
    graf_pass: '',
    graf_port: '',
  });
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
  const [dbUid, setdbUid] = useState({ datasourceUid: '', dashboardUid: '' });

  const [dashboardState, setDashboardState] = useState('database'); // alt state is 'query'
  const [databaseGraphs, setDatabaseGraphs] = useState<string[]>([]);

  const [activeQuery, setActiveQuery] = useState<QueryLogItemObject>({
    query: '',
    data: [],
    name: '',
    dashboardUID: '',
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

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
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
    try {
      // mutation is an object returned by the useMutation hook and mutateAsync is a method provided by mutation object
      // await mutation.mutateAsync waits for the mutation operation to complete before moving to the next line
      const response = (await mutation.mutateAsync(formData)) as void | {
        slug: string;
        uid: string;
        status: number;
        iFrames: string[];
      };
      // if response is NOT 200-299
      if (response.status <= 199 && response.status >= 300) {
        throw new Error('Failed to connect');
      }
      const { iFrames, datasourceuid, dashboarduid } = response;
      setdbUid({ datasourceUid: datasourceuid, dashboardUid: dashboarduid });
      setDatabaseGraphs(iFrames);
      setDashboardState('database');
      setConnection(true);
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  // finds querylog object in array and updates the name property
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

  const deleteQuery = async (index: number): Promise<void> => {
    const queryToDelete = queryLog[index];
    const isDeletingActiveQuery = queryToDelete === activeQuery;
    try {
      // make async call to backend to delete query specific dashboard
      const url = 'http://localhost:3001/api/delete';
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          dashboardUID: queryToDelete.dashboardUID,
          datasourceUID: dbUid,
          GrafanaCredentials: {
            graf_port: grafanaUser.graf_port,
            graf_name: grafanaUser.graf_name,
            graf_pass: grafanaUser.graf_pass,
          },
        }),
      });
      const data = await response.json();
      if (data.status <= 199 && response.status >= 300) {
        throw new Error('Failed to connect');
      }
      setQueryLog((prevQueryLog) => {
        if (prevQueryLog.length > index) {
          const updatedQueryLog = [...prevQueryLog];
          updatedQueryLog.splice(index, 1);
          return updatedQueryLog;
        }
      });
      if (isDeletingActiveQuery) {
        setActiveQuery({
          query: '',
          data: [],
          name: '',
          dashboardUID: '',
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const disconnectDB = async (): Promise<void> => {
    try {
      // make async call to backend to delete query specific dashboard
      const url = 'http://localhost:3001/api/disconnect';
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          dashboardUID: dbUid.dashboardUid,
          datasourceUID: dbUid.datasourceUid,
          GrafanaCredentials: {
            graf_port: grafanaUser.graf_port,
            graf_name: grafanaUser.graf_name,
            graf_pass: grafanaUser.graf_pass,
          },
        }),
      });
      const data = await response.json();
      if (data.status <= 199 && response.status >= 300) {
        throw new Error('Failed to connect');
      }
      setConnection(false);
      setDatabaseGraphs([]);
      setdbUid({ datasourceUid: '', dashboardUid: '' });
      setGrafanaUser({
        graf_name: '',
        graf_pass: '',
        graf_port: '',
      });
    } catch (err) {
      console.log(err);
    }
  };

  // TO DO: want to move this conditional to the return statement and plug in our loading bar component
  //if post request is still loading
  if (mutation.isLoading) {
    return <Popup text="Loading..." />;
  }

  // //if post request fails to fetch
  if (mutation.error) {
    return <Popup text={mutation.error.message} />;
  }

  return (
    <div className="flex h-full w-full flex-col  md:flex-row">
      {/* {!mutation.isLoading ? <></> : <Popup text='Loading...'/>}
      {!mutation.error ? <></> : <Popup text={mutation.error.message}/>} */}
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
            setGrafanaUser={setGrafanaUser}
            grafanaUser={grafanaUser}
          />
        </>
      )}
      <SideBarContainer
        openModal={setIsModalOpen}
        connection={connection}
        setFormData={setFormData}
        formData={formData}
        queryLog={queryLog}
        setQueryLog={setQueryLog}
        editQueryLabel={editQueryLabel}
        deleteQuery={deleteQuery}
        activeQuery={activeQuery}
        setActiveQuery={setActiveQuery}
        setDashboardState={setDashboardState}
        disconnectDB={disconnectDB}
      />
      <QueryContainer
        setQueryLog={setQueryLog}
        setQuery={setQuery}
        query={query}
        activeQuery={activeQuery}
        setActiveQuery={setActiveQuery}
        dashboardState={dashboardState}
        setDashboardState={setDashboardState}
        databaseGraphs={databaseGraphs}
        connection={connection}
        grafanaUser={grafanaUser}
        dbUid={dbUid}
      />
    </div>
  );
};

export default MainContainer;
