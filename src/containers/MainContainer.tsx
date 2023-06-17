import React from "react";
import QueryContainer from "./QueryContainer";
import SideBarContainer from "./SideBarContainer";
import { useState, useEffect } from "react";
import DBModal from "~/components/DBModal";

const MainContainer: React.FC = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [connection, setConnection] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState({
    dbName: "",
    dbURI: "",
    dbHost: "",
    dbPort: "",
  });

  useEffect(() => {
    const { dbName, dbURI, dbHost, dbPort } = formData;
    let isValid = false;
    if (dbName && dbURI && dbHost && dbPort) {
      isValid = true; // Check if all fields are filled
    }
    setIsFormValid(isValid);
  }, [formData]);

  // placeHolder for eventual validation of form data
  const validateData = () => {
    if (isFormValid) {
      console.log(formData);
      console.log("connected");
      setConnection(true);
    } else {
      console.log("Invalid Data");
    }
  };

  const handleConnect = () => {
    validateData();
    if (isFormValid) {
      console.log('Valid Form:', formData);
    }
    // will send data to back end if validateData is true
    setIsModalOpen(false);
  };

  return (
    <div className="flex h-full w-full flex-col bg-white md:flex-row">
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
      />
      <QueryContainer />
    </div>
  );
};

export default MainContainer;
