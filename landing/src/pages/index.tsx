import { type NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const LandingHome: NextPage = () => {
  return (
    <>
      <Head>
        <title>Landing</title>
      </Head>
      <h1>Landing</h1>
      <Link href="/about">About</Link>
    </>
  );
};
export default LandingHome;
