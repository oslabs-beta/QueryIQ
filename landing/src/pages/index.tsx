import { type NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import Hero from '../components/Hero';
import Header from '../components/Header';
import About from '../components/About';
import FAQ from '../components/FAQ';
import Team from '../components/Team';
import Footer from '../components/Footer';
import Features from '../components/Features'
import '../../../src/styles/globals.css';
// https://cdn.discordapp.com/attachments/1115285712292565056/1126317089712517190/QuIQ_query.gif

const LandingHome: NextPage = () => {


  return (
    <>

      <Head>
      </Head>
      <Header />
      <Hero/>
      <About />
      <Features />
      <FAQ />
      <Team />
      <Footer />
    </>
  );
};

export default LandingHome;