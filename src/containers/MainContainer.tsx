import React from "react";
import QueryContainer from "./QueryContainer";
import SideBarContainer from "./SideBarContainer";
import { useState, useEffect } from "react";
import DBModal from "~/components/modal/DBModal";

interface QueryLogItem {
  query: string;
  data: object;
  name: string;
}

const MainContainer: React.FC = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [queryLog, setQueryLog] = useState<QueryLogItem[]>([]);
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
        editQueryLabel={editQueryLabel}
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
