import React from "react";
import QueryContainer from "./QueryContainer";
import SideBarContainer from "./SideBarContainer";
import { useState, useEffect } from "react";
import DBModal from "~/components/modal/DBModal";

const MainContainer: React.FC = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [queryLog, setQueryLog] = useState<
    Array<{ query: string; data?: object; name?: string }>
  >([]);
  const [connection, setConnection] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState({
    dbName: "",
    dbURI: "",
  });

  //checking form validation on input changes for credentials
  useEffect(() => {
    const { dbName, dbURI } = formData;
    let isValid = false;
    if (dbName && dbURI) {
      isValid = true;
    }
    setIsFormValid(isValid);
  }, [formData]);

  // will only fire if isFormValid === true
  const handleConnect = () => {
    // console.log("Valid Form:", formData);
    // will send data to back end if validateData is true
    setConnection(true);
    setIsModalOpen(false);
  };

  const editQueryLabel = (index, label) => {

  }

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
        queryLog={queryLog}
        setQueryLog={setQueryLog}
      />
      <QueryContainer
        setQueryLog={setQueryLog}
        setQuery={setQuery}
        query={query}
      />
    </div>
  );
};

export default MainContainer;
