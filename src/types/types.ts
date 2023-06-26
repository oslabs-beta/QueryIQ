// parent container
export type SideBarContainerProps = {
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
  connection: boolean;
  setConnection: React.Dispatch<React.SetStateAction<boolean>>;
  formData: {
    graf_name: string;
    graf_pass: string;
    db_name: string;
    db_url: string;
    db_username: string;
    db_server: string;
    db_password: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      dbName: string;
      dbURI: string;
    }>
  >;
  queryLog: { query: string; data: object; name: string }[];
  setQueryLog: React.Dispatch<
    React.SetStateAction<Array<{ query: string; data: object; name: string }>>
  >;
  editQueryLabel: (index: number, label: string) => void;
  setTestConnected: React.Dispatch<React.SetStateAction<boolean>>;
  testConnected: boolean;
  activeQuery: QueryLogItemObject;
  setActiveQuery: React.Dispatch<React.SetStateAction<QueryLogItemObject>>;
}

// child of SideBarContainer
export type DBConnectProps = {
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
  connection: boolean;
  setConnection: React.Dispatch<React.SetStateAction<boolean>>;
  formData: {
    graf_name: string;
    graf_pass: string;
    db_name: string;
    db_url: string;
    db_username: string;
    db_server: string;
    db_password: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      graf_name: string;
      graf_pass: string;
      db_name: string;
      db_url: string;
      db_username: string;
      db_server: string;
      db_password: string;
    }>
  >;
  setTestConnected: React.Dispatch<React.SetStateAction<boolean>>;
  testConnected: boolean;
}

// child of SideBarContainer
export type QueryLogProps = {
  queryLog: { query: string; data: object; name: string }[];
  editQueryLabel: (index: number, label: string) => void;
  activeQuery: QueryLogItemObject;
  setActiveQuery: React.Dispatch<React.SetStateAction<QueryLogItemObject>>;
}

// child of QueryLog
export type QueryLogItemProps = {
  index: number;
  handleEditHover: (bool: boolean) => void;
  isHovered: boolean;
  editQueryLabel: (index: number, label: string) => void;
  queryLogObject: QueryLogItemObject;
  setActiveQuery: React.Dispatch<React.SetStateAction<QueryLogItemObject>>;
  activeQuery: QueryLogItemObject;
}

// shape of query log items data
export type QueryLogItemObject = {
  query: string;
  data: object;
  name: string;
}

// Parent container
export type QueryContainerProps = {
  setQueryLog: React.Dispatch<
    React.SetStateAction<Array<{ query: string; data: object; name: string }>>
  >;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  query: string;
  // setTestConnected: React.Dispatch<React.SetStateAction<boolean>>;
  testConnected: boolean;
  activeQuery: QueryLogItemObject;
  setActiveQuery: React.Dispatch<React.SetStateAction<QueryLogItemObject>>;
}

// child of QueryContainer
export type InputQueryProps = {
  setQueryLog: React.Dispatch<
    React.SetStateAction<Array<{ query: string; data: object; name: string }>>
  >;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  query: string;
  setActiveQuery: React.Dispatch<React.SetStateAction<QueryLogItemObject>>;
}

// child of InputQuery
export type LoadingBarProps = {
  loadingProgress: number;
}

// parent container
export type DashboardContainerProps = {
  testConnected: boolean;
  activeQuery: QueryLogItemObject;
}

// parent modal
export type DBModalProps = {
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
  setFormData: React.Dispatch<
    React.SetStateAction<{
      graf_name: string;
      graf_pass: string;
      db_name: string;
      db_url: string;
      db_username: string;
      db_server: string;
      db_password: string;
    }>
  >;
  formData: {
    graf_name: string;
    graf_pass: string;
    db_name: string;
    db_url: string;
    db_username: string;
    db_server: string;
    db_password: string;
  };
  handleConnect: React.MouseEventHandler<HTMLButtonElement>;
  isFormValid: boolean;
}

// child of DBModal
export type DBSelectionProps = {
  handleCancel: () => void;
  handleClick: () => void;
}

// child of DBModal
export type GrafanaCredentialsProps = {
  handleCancel: () => void;
  handleClick: () => void;
  formData: {
    graf_name: string;
    graf_pass: string;
    db_name: string;
    db_url: string;
    db_username: string;
    db_server: string;
    db_password: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      graf_name: string;
      graf_pass: string;
      db_name: string;
      db_url: string;
      db_username: string;
      db_server: string;
      db_password: string;
    }>
  >;
};

// child of DBModal
export type DBCredentialsProps = {
  formData: {
    graf_name: string;
    graf_pass: string;
    db_name: string;
    db_url: string;
    db_username: string;
    db_server: string;
    db_password: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      graf_name: string;
      graf_pass: string;
      db_name: string;
      db_url: string;
      db_username: string;
      db_server: string;
      db_password: string;
    }>
  >;
  handleConnect: React.MouseEventHandler<HTMLButtonElement>;
  isFormValid: boolean;
  handleCancel: () => void;
}











