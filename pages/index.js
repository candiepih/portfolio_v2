import Head from 'next/head';
import LandingPage from '../components/sections/landing';
import About from '../components/sections/about';
import Projects from '../components/sections/projects';
import Contact from '../components/sections/contact';
import Footer from '../components/sections/footer';
import Scroll from '../components/Scroll';
import FixedSections from '../components/sections/FixedSections';
import React from 'react';
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

export default function Home() {
  // gsap.registerPlugin(ScrollTrigger);
  return (
    <React.Fragment>
      <Head>
        <meta name="description" content="Alex steve portfolio" />
        <meta name="theme-color" content="#FFA600" />
        <meta name="msapplication-TileColor" content="#FFA600" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <title>Alex Njagi. Fullstack web developer</title>
      </Head>
      <FixedSections />
      <Scroll>
        <LandingPage />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Scroll>
    </React.Fragment>
  )
}
