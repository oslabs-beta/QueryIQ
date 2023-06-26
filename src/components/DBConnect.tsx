import React from 'react';
import DBCard from './DBCard';
import type { DBConnectProps } from '~/types/types';

// type Post =  {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

const DBConnect: React.FC<DBConnectProps> = ({
  openModal,
  connection,
  setConnection,
  formData,
  setFormData,
  setTestConnected,
  testConnected,
}) => {
  // only for display purposes, conditionally renders an artifical "connected to DB" state and "disconnected from DB" state

  const handleConnect = () => {
    setFormData({
      graf_name: '',
      graf_pass: '',
      graf_port: '',
      db_name: '',
      db_url: '',
      db_username: '',
      db_server: '',
      db_password: '',
    });
    openModal(true);
  };

  const handleClick = () => {
    connection ? setConnection(false) : setConnection(true);
  };

  // USEQUERY TESTING BELOW COMMENTED OUT TEMPORARILY
  //   const { isLoading, isError, data, error, refetch } = useQuery('posts', () =>
  //   fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()),
  //   {
  //     enabled: false,
  //   }
  // );

  //   const handleClickTestDB = () => {
  //     //triggers a fresh data fetch for the useQuery above
  //     refetch();
  //   };

  // const { isLoading, isError, data, error, refetch,
  // } = useQuery<Post[]>('posts',
  //   async () => {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch posts');
  //     }
  //     return response.json();
  //   },
  //   {
  //     enabled: false,
  //   }
  // );

  //
  // const buttonLabel = () => {
  //   if (isLoading) {
  //     return 'Loading...';
  //   } else if (isError) {
  //     return `Error: ${error.message}`;
  //   } else if (!data && !isLoading) {
  //     return 'Connect to a test db';
  //   } else {
  //     console.log('testdata', data)
  //     return 'Connected to test db';
  //   }
  // };

  //KT's code for connecting to a test DB

  // const [testConnected, setTestConnected] = useState(false);

  const handleClickTestDB = () => {
    setTestConnected((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/**conditionally renders DB disconnected or DB connected**/}
      {!connection ? (
        <>
          <button
            className="my-4 rounded-lg border border-gray-900 bg-indigo-500 p-1 text-gray-900 shadow-xl hover:bg-gray-900 hover:text-indigo-500"
            onClick={handleConnect}
          >
            Connect to Database
          </button>
          <span>OR</span>
          {/* <span>Use Test Data</span> */}
          <button
            className="my-4 rounded-lg border border-gray-900 bg-indigo-500 p-1 text-gray-900 shadow-xl hover:bg-gray-900 hover:text-indigo-500"
            onClick={handleClickTestDB}
          >
            {' '}
            {testConnected ? 'Disconnect from test DB' : 'Connect to test DB'}
          </button>
          {testConnected && (
            <div className="flex flex-col items-center justify-center">
              <DBCard />
            </div>
          )}
        </>
      ) : (
        <>
          <div className="my-8 flex w-full flex-col items-center justify-start overflow-y-auto rounded-lg border border-gray-900 shadow-xl">
            <span className="w-full border-black bg-gray-900 p-1 text-center text-indigo-300">
              Active Connection
            </span>
            <div className="bg-gray-800 p-4 text-indigo-300 shadow-xl">
              <span>
                DB NAME:{' '}
                <span className="text-cyan-200">{formData.db_name}</span>
              </span>
              <br></br>
              <span>
                DB SERVER:{' '}
                <span className="text-cyan-200">{formData.db_server}</span>
              </span>
              <br></br>
              <button
                className="mt-2 ml-5 justify-self-center rounded-lg border border-gray-900 bg-indigo-500 p-1 text-gray-900 shadow-xl hover:bg-gray-900 hover:text-indigo-500"
                onClick={handleClick}
              >
                Disconnect
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DBConnect;
