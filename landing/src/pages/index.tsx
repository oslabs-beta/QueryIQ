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
      
      <div
        className="relative bg-cover bg-no-repeat bg-center w-screen h-screen"
        style={{
        backgroundImage: 'url("https://user-images.githubusercontent.com/108748353/256665415-02a9be39-db1b-4058-8d8e-47e9ea3fab57.png")',
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full z-10">
        <Hero/>
        <About />
        <Features />
        <FAQ />
        <Team />
        <Footer />
        </div>
      </div>
      <div
        className="relative bg-cover bg-no-repeat bg-center w-screen h-screen opacity-40"
        style={{
        backgroundImage: 'url("https://user-images.githubusercontent.com/108748353/256679338-7ec11ad9-4ec4-4506-8695-defba5e40aab.png")',
        }}
      >
      </div>
      <div
        className="relative bg-cover bg-no-repeat bg-center w-screen h-screen mt-11 opacity-40"
        style={{
        backgroundImage: 'url("https://user-images.githubusercontent.com/108748353/256680290-21f4e5a9-f248-4a3a-a290-52865bc90063.png")',
        }}
      >
      </div>
    </>
  );
};

export default LandingHome;