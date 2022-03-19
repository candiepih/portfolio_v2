import Head from 'next/head';
import LandingPage from '../components/sections/landing';
import About from '../components/sections/about';
import Projects from '../components/sections/projects';
import Contact from '../components/sections/contact';
import Scroll from '../components/Scroll';
import FixedSections from '../components/minorSections/FixedSections';
import React from 'react';


export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Alex Steve fullstack web developer</title>
        <meta name="description" content="Alex steve portfolio" />
        <meta name="theme-color" content="#FFA600" />
        <meta name="msapplication-TileColor" content="#FFA600" />
        <link rel="icon" type="image/png" href="https://app.spline.design/_assets/_icons/icon_favicon16x16.png" sizes="16x16"></link>
      </Head>
      <FixedSections />
      <LandingPage />
      {/* <Scroll> */}
      <About />
      <Projects />
      <Contact />
      {/* </Scroll> */}
    </React.Fragment>
  )
}
