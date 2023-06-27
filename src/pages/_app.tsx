import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { type AppType } from 'next/app';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '~/styles/globals.css';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      {/* <Switch> */}
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route path="/about" component={About} /> */}
        {/* Add more routes as needed */}
      {/* </Switch> */}

      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default MyApp;
