import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Navbar from './api/components/Navbar'
import About from './api/components/About'
import Skills from './api/components/Skills'
import Projects from './api/components/Projects'
import Contact from './api/components/Contact'
import Footer from './api/components/Footer'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-300 py-2">
      <Navbar />
      <Head>
        <title>Alvin Quach - Front End Developer</title>
        <a className="skip-link sr-only" href="#main">
          Skip to content
        </a>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </Head>
      <main className="bg-slate-300 antialiased">
        <About />
        <div className="divider"></div>
        <Skills />
        <div className="divider"></div>
        <Projects />
        <div className="divider"></div>
        {/* Contact */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home
