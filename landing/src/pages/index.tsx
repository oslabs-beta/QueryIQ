import { type NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import FAQ from '../components/FAQ';
import Team from '../components/Team';
import Footer from '../components/Footer';
import '../../../src/styles/globals.css';
// https://cdn.discordapp.com/attachments/1115285712292565056/1126317089712517190/QuIQ_query.gif

const LandingHome: NextPage = () => {
  return (
    <>
      <Head>
        <Header />
        <Image
          src="https://cdn.discordapp.com/attachments/1115285712292565056/1126315338221506640/QuIQ_5-13.gif"
          alt="connect to database and display overall health gif"
          width={500}
          height={500}
        />
        <Image
          src="https://cdn.discordapp.com/attachments/1115285712292565056/1126317089712517190/QuIQ_query.gif"
          alt="individual query gif"
          width={500}
          height={500}
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
