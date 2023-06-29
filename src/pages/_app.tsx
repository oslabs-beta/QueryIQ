import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { type AppType } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '~/styles/globals.css';

const queryClient = new QueryClient();

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client = {queryClient}>
      {/* <Switch> */}
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route path="/about" component={About} /> */}
        {/* Add more routes as needed */}
      {/* </Switch> */}

      <Component {...pageProps} />
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default MyApp;
