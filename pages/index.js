import Head from 'next/head'
import Loader from '../src/components/Loader/index.jsx'
import { useState } from 'react'
import Navbar from '../src/components/Navbar/index.jsx'
import Header from '../src/components/Header/index.jsx'
import Projects from '/src/components/Projects'
import Courses from '/src/components/Courses'
import SmoothScroll from '/src/utils/SmoothScroll'
import TechSkills from '../src/components/TechSkills/index.jsx'
import Contact from '../src/components/Contact/index.jsx'
import Cursor from '../src/components/Cursor/index.jsx'

export default function Home() {
  const [ isLoading, setIsLoading ] = useState(true)
  const [ stateHeaderDone, setStateHeaderDone ] = useState(true)

  return (
    <div>
      <Head>
        <title>Oddy Chance | Frontend Dev</title>
        <meta name="portfolio" content="Odlanier Chance, Frontent develope.r" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <SmoothScroll>
        <Loader isLoading={isLoading} setIsLoading={setIsLoading} />
        <Navbar isLoading={isLoading} />
        <Header isLoading={isLoading} setStateHeaderDone={setStateHeaderDone} stateHeaderDone={stateHeaderDone} />
        <Projects />
        <Courses />
        <TechSkills />
        <Contact />
        <Cursor />
      </SmoothScroll>
    </div>
  )
}
