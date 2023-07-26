import { type NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import FAQ from '../components/FAQ';
import Team from '../components/Team';
import Footer from '../components/Footer';
import '../../../src/styles/globals.css';

const LandingHome: NextPage = () => {
  return (
    <>
      <Head>
        <Header />
        <Image
          src="https://user-images.githubusercontent.com/32769592/256317225-f3c7607f-e661-4d0a-96a1-83665e4918bc.png"
          alt="Query IQ Logo"
          width={300}
          height={200}
        />
      </Head>
      <h1>Query IQ</h1>
      <About />
      <FAQ />
      <Team />
      <Footer />
    </>
  );
};
export default LandingHome;
