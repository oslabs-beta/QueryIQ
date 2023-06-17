import React from "react";
import QueryContainer from "./QueryContainer";
import SideBarContainer from "./SideBarContainer";
import { useState, useEffect } from "react";
import DBModal from "~/components/modal/DBModal";

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
      isValid = true;
    }
    setIsFormValid(isValid);
  }, [formData]);

  // will only fire if isFormValid === true
  const handleConnect = () => {
    console.log('Valid Form:', formData);
    // will send data to back end if validateData is true
    setConnection(true);
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
