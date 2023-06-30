import React from 'react';
import type { DBCredentialsProps } from '~/types/types';
import ModalFormInput from './ModalFormInput';
import { useMutation } from 'react-query';



const DBCredentials: React.FC<DBCredentialsProps> = ({
  formData,
  setFormData,
  handleConnect,
  isFormValid,
  handleCancel,
}) => {

  //when form is submitted, the function passed to useMutation is executed. It will receive the formData as an argument, which contains the data entered in the form fields. useMutation is used for making POST,PUT,DELETE
  const mutation = useMutation(async (formData) => {
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


//Valid inputs from KT
//{"graf_name":"admin",
// "graf_pass":"Codesmith23*",
// "graf_port":3000,
// "db_name":"Dev_db_test_1",
// "db_url":"localhost:5432",
// "db_username":"postgres",
// "db_server":"postgres",
// "db_password":"Codesmith23*"}

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { graf_name, graf_pass, graf_port, db_name, db_url, db_username, db_server, db_password } = formData;


      //mutation is an object returned by the useMutation hook and mutateAsync is a method provided by mutation object
      //await mutation.mutateAsync waits for the mutation operation to complete before moving to the next line 
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

      handleConnect();

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

  return (
    <form onSubmit={handleSubmit} className="flex h-auto w-auto flex-col items-center justify-center space-y-2">
      <label>Database Name</label>
      <ModalFormInput
        placeholder="Database Name"
        type="text"
        value={formData.db_name}
        onChange={(e) => setFormData({ ...formData, db_name: e.target.value })}
      />
      <label>Database URL</label>
      <ModalFormInput
        placeholder="Database URL"
        type="text"
        value={formData.db_url}
        onChange={(e) => setFormData({ ...formData, db_url: e.target.value })}
      />
      <label>Database Username</label>
      <ModalFormInput
        placeholder="Database Username"
        type="text"
        value={formData.db_username}
        onChange={(e) =>
          setFormData({ ...formData, db_username: e.target.value })
        }
      />
      <label>Database Server</label>
      <ModalFormInput
        placeholder="Database Server"
        type="text"
        value={formData.db_server}
        onChange={(e) =>
          setFormData({ ...formData, db_server: e.target.value })
        }
      />
      <label>Database Password</label>
      <ModalFormInput
        placeholder="Database Password"
        type="password"
        value={formData.db_password}
        onChange={(e) =>
          setFormData({ ...formData, db_password: e.target.value })
        }
      />
      <div className="h-45 w-45 flex justify-center">
        <button type = "submit"
          className="m-4 rounded-lg border border-gray-900 bg-indigo-500 p-2 text-gray-900 shadow-xl hover:bg-gray-900 hover:text-indigo-500"
          disabled={!isFormValid}
          //  onClick={handleConnect}
        >
          Connect
        </button>
        <button
          className="m-4 rounded-lg border border-gray-900 bg-red-400 p-2 text-gray-900 shadow-xl hover:bg-gray-900 hover:text-indigo-500"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default DBCredentials;
