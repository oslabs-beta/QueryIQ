import  React from "react";
import { useQuery} from 'react-query';
        
interface DBConnectProps {
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
  connection: boolean;
  setConnection: React.Dispatch<React.SetStateAction<boolean>>;
  formData: {
    dbName: string;
    dbURI: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      dbName: string;
      dbURI: string;
    }>
  >;
}



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
}) => {
  // only for display purposes, conditionally renders an artifical "connected to DB" state and "disconnected from DB" state

  const handleConnect = () => {
    setFormData({
      dbName: "",
      dbURI: "",
    });
    openModal(true);
  };

  const handleClick = () => {
    connection ? setConnection(false) : setConnection(true);
  };



  //Connecting using a fake API endpoint with some fake data

  const { isLoading, isError, data, error, refetch,
  } = useQuery<Post[]>('posts',
    async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      return response.json();
    },
    {
      enabled: false,
    }
  );

  const handleClickTestDB = () => {
    //triggers a fresh data fetch for the useQuery above 
    refetch();
  };


  const buttonLabel = () => {
    if (isLoading) {
      return 'Loading...';
    } else if (isError) {
      return `Error: ${error.message}`;
    } else if (!data && !isLoading) {
      return 'Connect to a test db';
    } else {
      console.log('testdata', data)
      return 'Connected to test db';
    }
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
          <button 
            className="my-4 rounded-lg border border-gray-900 bg-indigo-500 p-1 text-gray-900 shadow-xl hover:bg-gray-900 hover:text-indigo-500"
             onClick = {handleClickTestDB} 
          > {buttonLabel()}</button>
        </>
      ) : (
        <>
          <div className="my-4 rounded-lg border border-black bg-gray-900 p-4 text-indigo-300 shadow-xl">
            <span>DB NAME: {formData.dbName}</span>
            <br></br>
            <span>CONNECTION STATUS:</span>
            <br></br>
            <span>ACTIVE</span>
          </div>
          <button
            className="rounded-lg border border-gray-900 bg-indigo-500 p-1 text-gray-900 shadow-xl hover:bg-gray-900 hover:text-indigo-500"
            onClick={handleClick}
          >
            Disconnect
          </button>
        </>
      )}
    </div>
  );
};

export default DBConnect;
