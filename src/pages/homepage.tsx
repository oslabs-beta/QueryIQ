// import { type NextPage } from "next";
import Header from '../components/Header';
import MainContainer from '../containers/MainContainer';
// import { useSession } from "next-auth/react";
import Head from 'next/head';
// import Link from "next/link";
// import { api } from "~/utils/api";

const Homepage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Query IQ Homepage</title>
        <meta name="Query IQ" content="SQL Query Performance Metrics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-h-full w-screen min-w-full max-w-full">
        <Header />
        <MainContainer />
      </main>
    </>
  );
};

export default Homepage;
