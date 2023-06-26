import type { ChangeEvent } from 'react';

export type FormData = {
  graf_name: string;
  graf_pass: string;
  graf_port: string;
  db_name: string;
  db_url: string;
  db_username: string;
  db_server: string;
  db_password: string;
};

// parent container
export type SideBarContainerProps = {
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
  connection: boolean;
  setConnection: React.Dispatch<React.SetStateAction<boolean>>;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  queryLog: QueryLogItemObject[];
  setQueryLog: React.Dispatch<React.SetStateAction<Array<QueryLogItemObject>>>;
  editQueryLabel: (index: number, label: string) => void;
  setTestConnected: React.Dispatch<React.SetStateAction<boolean>>;
  testConnected: boolean;
  activeQuery: QueryLogItemObject;
  setActiveQuery: React.Dispatch<React.SetStateAction<QueryLogItemObject>>;
  setDashboardState: React.Dispatch<React.SetStateAction<string>>;
  databaseGraphs: string[];
  setDatabaseGraphs: React.Dispatch<React.SetStateAction<string[]>>;
};

// child of SideBarContainer
export type DBConnectProps = {
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
  connection: boolean;
  setConnection: React.Dispatch<React.SetStateAction<boolean>>;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  setTestConnected: React.Dispatch<React.SetStateAction<boolean>>;
  testConnected: boolean;
  setDashboardState: React.Dispatch<React.SetStateAction<string>>;
  databaseGraphs: string[];
  setDatabaseGraphs: React.Dispatch<React.SetStateAction<string[]>>;
};

// child of SideBarContainer
export type QueryLogProps = {
  queryLog: QueryLogItemObject[];
  editQueryLabel: (index: number, label: string) => void;
  activeQuery: QueryLogItemObject;
  setActiveQuery: React.Dispatch<React.SetStateAction<QueryLogItemObject>>;
  setDashboardState: React.Dispatch<React.SetStateAction<string>>;
};

// child of QueryLog
export type QueryLogItemProps = {
  index: number;
  // handleEditHover: (bool: boolean) => void;
  // isHovered: boolean;
  editQueryLabel: (index: number, label: string) => void;
  queryLogObject: QueryLogItemObject;
  setActiveQuery: React.Dispatch<React.SetStateAction<QueryLogItemObject>>;
  activeQuery: QueryLogItemObject;
  setDashboardState: React.Dispatch<React.SetStateAction<string>>;
};

// shape of query log items data
export type QueryLogItemObject = {
  query: string;
  data: string[];
  name: string;
};

// Parent container
export type QueryContainerProps = {
  setQueryLog: React.Dispatch<React.SetStateAction<Array<QueryLogItemObject>>>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  query: string;
  // setTestConnected: React.Dispatch<React.SetStateAction<boolean>>;
  testConnected: boolean;
  activeQuery: QueryLogItemObject;
  setActiveQuery: React.Dispatch<React.SetStateAction<QueryLogItemObject>>;
  dashboardState: string;
  setDashboardState: React.Dispatch<React.SetStateAction<string>>;
  databaseGraphs: string[];
  queryGraphs: string[];
};

// child of QueryContainer
export type InputQueryProps = {
  setQueryLog: React.Dispatch<React.SetStateAction<Array<QueryLogItemObject>>>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  query: string;
  setActiveQuery: React.Dispatch<React.SetStateAction<QueryLogItemObject>>;
  setDashboardState: React.Dispatch<React.SetStateAction<string>>;
  activeQuery: QueryLogItemObject;
};

// child of InputQuery
export type LoadingBarProps = {
  loadingProgress: number;
};

// parent container
export type DashboardContainerProps = {
  testConnected: boolean;
  activeQuery: QueryLogItemObject;
  dashboardState: string;
  setDashboardState: React.Dispatch<React.SetStateAction<string>>;
  databaseGraphs: string[];
  queryGraphs: string[];
};

// parent modal
export type DBModalProps = {
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  formData: FormData;
  handleConnect: React.MouseEventHandler<HTMLButtonElement>;
  isFormValid: boolean;
};

// child of DBModal
export type DBSelectionProps = {
  handleCancel: () => void;
  handleClick: () => void;
};

// child of DBModal
export type GrafanaCredentialsProps = {
  handleCancel: () => void;
  handleClick: () => void;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

// child of DBModal
export type DBCredentialsProps = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  handleConnect: React.MouseEventHandler<HTMLButtonElement>;
  isFormValid: boolean;
  handleCancel: () => void;
};

// input for modals
export type ModalFormInputProps = {
  placeholder: string;
  value: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

// graph cards
export type GraphCardProps = {
  src: string;
  key: number;
};
