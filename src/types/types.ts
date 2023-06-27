
export type QueryLogItemObject = {
    query: string;
    data: object;
    name: string;
}

export type RequestBodyConnect = {
  graf_name: string;
  graf_pass: string;
  graf_port: string;
  db_name: string;
  db_url: string;
  db_username: string;
  db_server: string;
  db_password: string;
}