import Head from 'next/head';
import LandingPage from '../components/landing';
import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alex Steve fullstack web developer</title>
        <meta name="description" content="Alex steve portfolio" />
        <meta name="theme-color" content="#FFA600" />
        <meta name="msapplication-TileColor" content="#FFA600" />
        <link rel="icon" type="image/png" href="https://app.spline.design/_assets/_icons/icon_favicon16x16.png" sizes="16x16"></link>
      </Head>
      <LandingPage />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}
