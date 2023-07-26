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
          src="/../../../public/assets/logo-full-no-bg.png"
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
