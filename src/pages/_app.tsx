import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { type AppType } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Reem_Kufi } from 'next/font/google';
import '~/styles/globals.css';

const queryClient = new QueryClient();
const reemKufi = Reem_Kufi({ weight: '700', subsets: ['latin'] })

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <main className=>
        <Component {...pageProps} />
        </main>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default MyApp;
