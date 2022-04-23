import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { ReactElement } from 'react'
import {
  faCogs,
  faMobileAlt,
  faTerminal,
  faUniversalAccess,
} from '@fortawesome/free-solid-svg-icons'
import {
  faCss3,
  faGithub,
  faGithubAlt,
  faHtml5,
  faJs,
  faLinkedin,
  faReact,
  faSass,
  faTwitter,
  faFigma,
} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-300 py-2">
      <div className="navbar bg-neutral text-neutral-content">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-neutral-content p-2 text-neutral shadow"
            >
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
            </ul>
          </div>
          <a
            className="btn btn-ghost bg-neutral text-xl uppercase"
            href="https://alvinsblog.netlify.app/"
            target="_blank"
          >
            Blog
          </a>
        </div>
        <div className="navbar-center hidden bg-neutral lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end bg-neutral">
          <a href="#contact" className="btn text-xl uppercase">
            Contact
          </a>
        </div>
      </div>
      <Head>
        <title>Alvin Quach - Front End Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-slate-300">
        {/* About */}
        <section className="p-4" id="about">
          <div className="wrapper flex justify-center">
            {/* <Image
              className="h-32 w-32 rounded-full"
              src="/images/profile.jpg"
              alt="Picture of me"
              width={150}
              height={150}
            /> */}
          </div>
          <div className="wrapper">
            <h2 className="mb-3 py-4 text-left text-6xl leading-tight tracking-tighter">
              About
            </h2>
            <br></br>
            <h3 className="mb-4 text-3xl capitalize">get to know alvin!</h3>
            <p className="text-neutral-100 text-left text-base leading-tight tracking-tight">
              Hey there! I'm Alvin Quach, your friendly neighborhood web
              developer. I'm a Front End developer with a background in
              Marketing and Community Management. User experience and
              accessibility are my top pillars.
            </p>
            <p className="text-neutral-100 text-left text-base leading-tight tracking-tight">
              When I'm not coding, you can catch me watching the Golden State
              Warriors! Go Dubs!
            </p>

            <p className="justify-left text-neutral-100 mt-4 px-8 text-base leading-tight tracking-wide">
              Here's my{' '}
              <a
                className="text-slate-600 hover:text-white"
                href="https://medium.com/@alvinwquach/you-create-your-story-648fd1113824"
                aria-label="open link to alvin quach's story"
              >
                story
              </a>{' '}
              about my change from marketing to web development!
            </p>

            {/* Education */}
            <p className="justify-left text-neutral-100 mt-4 px-8 text-base leading-tight tracking-wide">
              I have a B.S. in Managerial Economics from
              <a href="https://www.ucdavis.edu/">{''} UC Davis</a>(go Aggies!),
              and a certificate in Web Development from{' '}
              <a
                href="https://junocollege.com/"
                className="hover:text-white"
                aria-label="open link to juno college website"
              >
                Juno College
              </a>
              .
            </p>
          </div>
        </section>
        <div className="divider"></div>
        {/* Skills */}
        <section className="py-12" id="skills">
          <div className="wrapper">
            <h2 className="mb-3 py-4 text-left text-6xl tracking-tighter">
              Skills
            </h2>
            <div className="mb-3 flex flex-row flex-wrap text-center">
              <FontAwesomeIcon icon={faHtml5} height={75} width={75} />
              <p className="text-3xl">HTML5</p>
              <FontAwesomeIcon
                icon={faCss3}
                height={75}
                width={75}
                className=""
              />
              <p className="text-3xl">CSS3</p>
              <FontAwesomeIcon
                icon={faJs}
                height={75}
                width={75}
                className=""
              />
              <p className="text-3xl">Sass</p>
              <FontAwesomeIcon
                icon={faSass}
                height={75}
                width={75}
                className=""
              />
              <p className="text-3xl">TailwindCSS</p>
              <FontAwesomeIcon
                icon={faSass}
                height={75}
                width={75}
                className=""
              />
              <p className="text-3xl">MaterialUI</p>
              <FontAwesomeIcon
                icon={faHtml5}
                height={75}
                width={75}
                className=""
              />
              <p className="text-3xl">DaisyUI</p>
              <FontAwesomeIcon
                icon={faHtml5}
                height={75}
                width={75}
                className=""
              />
              <p className="text-3xl">Flowbite</p>
              <FontAwesomeIcon
                icon={faHtml5}
                height={75}
                width={75}
                className=""
              />
              <p className="text-3xl">Figma</p>
              <FontAwesomeIcon
                icon={faFigma}
                height={75}
                width={75}
                className=""
              />
              <p className="text-3xl">JavaScript</p>
              <FontAwesomeIcon
                icon={faJs}
                height={75}
                width={75}
                className=""
              />
              <p className="text-3xl">TypeScript</p>
              <FontAwesomeIcon
                icon={faJs}
                height={75}
                width={75}
                className=""
              />
              <p className="text-3xl">React</p>
              <FontAwesomeIcon
                icon={faReact}
                height={100}
                width={100}
                className=""
              />
              <p className="text-3xl">NextJS</p>
              <FontAwesomeIcon
                icon={faGithubAlt}
                height={75}
                width={75}
                className=""
              />
              <p className="text-3xl">Git</p>
              <FontAwesomeIcon
                icon={faGithubAlt}
                height={75}
                width={75}
                className=""
              />
              <p className="text-3xl">Command Line</p>
              <FontAwesomeIcon
                icon={faTerminal}
                height={75}
                width={75}
                className=""
              />
              <p className="text-3xl">RESTful APIs</p>
              <FontAwesomeIcon
                icon={faCogs}
                height={75}
                width={75}
                className=""
              />
              <p className="text-3xl">GraphQL</p>
              <FontAwesomeIcon
                icon={faMobileAlt}
                height={75}
                width={75}
                className=""
              />
              <p className="text-3xl">Responsive Design</p>
              <FontAwesomeIcon
                icon={faUniversalAccess}
                height={75}
                width={75}
                className=""
              />
              <p className="text-3xl">Web Accessibility</p>
            </div>
          </div>
        </section>
        <div className="divider"></div>
        {/* Projects */}
        <section id="projects">
          <div className="wrapper">
            <h2 className="mb-3 py-4 text-left text-6xl leading-tight tracking-tighter">
              Projects
            </h2>
          </div>
        </section>

        <div className="divider"></div>
        {/* Contact */}
        <section id="contact">
          <div className="wrapper">
            <h4 className="mb-3 py-4 text-left text-4xl capitalize leading-tight tracking-tight">
              Let's get in touch!
            </h4>
            <p className="text-left text-xl leading-tight">
              If you have any questions about me or my projects or want to
              debate the hottest shoes, I'm your man! Drop a comment, question,
              concern. Cheers!
            </p>
            <div>
              <form
                action="https://formspree.io/f/mdobokk"
                method="post"
                className="text-neutral-100 bg-slate-300 text-center"
              >
                {/* <div>
                  <label htmlFor="name" className="sr-only"></label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="input input-bordered input-lg w-full max-w-xs"
                  />
                  <label htmlFor="email" className="sr-only"></label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="input input-bordered input-lg w-full max-w-xs"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only"></label>
                  <textarea
                    className="textarea textarea-bordered mt-4"
                    name="message"
                    id="message"
                    cols={80}
                    rows={10}
                    placeholder="Bio"
                  ></textarea>
                </div> */}
                {/* flex flex-col md:flex-row */}
                <div>
                  <label htmlFor="name" className="sr-only"></label>
                  <input
                    className="my-3.5 w-2/6 rounded-md bg-white p-6 text-xl text-black hover:outline-primary"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required
                  />
                  <input
                    className="my-3.5 w-2/6 rounded-md bg-white p-6 text-xl text-black hover:outline-primary"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only"></label>
                  <textarea
                    className="my-3.5 w-4/6 rounded-md bg-white p-6 text-xl leading-6 text-black hover:outline-primary-focus"
                    name="message"
                    id="message"
                    cols={80}
                    rows={10}
                    placeholder="Hi Alvin, I love web development and basketball too! Let's meet for a quick chat over coffee!"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    className="btn mt-4 w-4/6 rounded-md bg-base-content"
                    type="submit"
                  >
                    Send it off!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer items-center bg-base-content p-4 text-neutral-content">
        <div className="grid-flow-col items-center capitalize">
          <p>developed by alvin quach&copy;</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a
            href="https://twitter.com/MisterSJC"
            target="_blank"
            aria-label="open link to alvins twitter profile"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              width={24}
              height={24}
              className="hover:text-neutral"
            />
          </a>
          <a
            href="https://linkedin.com/in/alvin-quach-02a7314b/"
            target="_blank"
            aria-label="open link to alvins linkedin profile"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              width={24}
              height={24}
              className="hover:text-neutral"
            />
          </a>
          <a
            href="http://github.com/alvinwquach"
            target="_blank"
            aria-label="open link to alvins github profile"
          >
            <FontAwesomeIcon
              icon={faGithub}
              width={24}
              height={24}
              className="hover:text-neutral"
            />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Home
