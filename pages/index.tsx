import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { ReactElement } from 'react'
import {
  faCogs,
  faGrinAlt,
  faMattressPillow,
  faMobileAlt,
  faTerminal,
  faTicketAlt,
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
  faAccessibleIcon,
  faApplePay,
  faCss3Alt,
  faDailymotion,
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

      <main className="bg-slate-300 antialiased">
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
            <h2 className="justify-left mb-3 py-4 text-6xl font-light capitalize leading-tight tracking-tight">
              about
            </h2>
            <br></br>
            <p className="text-neutral-100 justify-left text-base font-normal leading-tight">
              Hey there! I'm Alvin Quach, your friendly neighborhood web
              developer. I'm a Front End developer with a background in
              Marketing and Community Management. User experience and
              accessibility are my top pillars. When I'm not coding, you can
              catch me watching the Golden State Warriors! Go Dubs!
            </p>
            <p className="justify-left text-neutral-100 mt-4 text-base font-normal leading-tight">
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
          </div>
        </section>
        <div className="divider"></div>
        {/* Skills */}
        <section
          className="bg-gradient-to-r from-cyan-400 to-emerald-400 pb-20 shadow-lg"
          id="skills"
        >
          <div className="wrapper">
            <h2 className="pb-32 text-left text-6xl leading-tight tracking-tight">
              Skills
            </h2>
            <ul className="flex flex-wrap items-center justify-center">
              <li className="mx-12 my-8 flex w-40 flex-col items-center">
                <FontAwesomeIcon
                  icon={faHtml5}
                  height={70}
                  width={70}
                  className=""
                  aria-hidden="true"
                />
                <p className="w-4/5 text-center text-base">HTML5</p>
              </li>
              <li className="mx-12 my-8 flex w-40 flex-col items-center">
                <FontAwesomeIcon
                  icon={faCss3}
                  height={70}
                  width={70}
                  className=""
                  aria-hidden="true"
                />
                <p className="w-4/5 text-center text-base">CSS3</p>
              </li>
              <li className="mx-12 my-8 flex w-40 flex-col items-center">
                <FontAwesomeIcon
                  icon={faSass}
                  height={70}
                  width={70}
                  className=""
                  aria-hidden="true"
                />
                <p className="w-4/5 text-center text-base">Sass</p>
              </li>
              <li className="mx-12 my-8 flex w-40 flex-col items-center">
                <FontAwesomeIcon
                  icon={faCss3Alt}
                  height={70}
                  width={70}
                  className=""
                  aria-hidden="true"
                />
                <p className="w-4/5 text-center text-base">TailwindCSS</p>
              </li>
              <li className="mx-12 my-8 flex w-40 flex-col items-center">
                <FontAwesomeIcon
                  icon={faDailymotion}
                  height={70}
                  width={70}
                  className=""
                  aria-hidden="true"
                />
                <p className="w-4/5 text-center text-base">MaterialUI</p>
              </li>
              <li className="mx-12 my-8 flex w-40 flex-col items-center">
                <FontAwesomeIcon
                  icon={faMattressPillow}
                  height={70}
                  width={70}
                  className=""
                  aria-hidden="true"
                />
                <p className="w-4/5 text-center text-base">DaisyUI</p>
              </li>
              <li className="mx-12 my-8 flex w-40 flex-col items-center">
                <FontAwesomeIcon
                  icon={faDailymotion}
                  height={70}
                  width={70}
                  className=""
                  aria-hidden="true"
                />
                <p className="w-4/5 text-center text-base">Flowbite</p>
              </li>
              <li className="mx-12 my-8 flex w-40 flex-col items-center">
                <FontAwesomeIcon
                  icon={faFigma}
                  height={70}
                  width={70}
                  className=""
                  aria-hidden="true"
                />
                <p className="w-4/5 text-center text-base">Figma</p>
              </li>
              <li className="mx-12 my-8 flex w-40 flex-col items-center">
                <FontAwesomeIcon
                  icon={faJs}
                  height={70}
                  width={70}
                  className=""
                  aria-hidden="true"
                />
                <p className="w-4/5 text-center text-base">JavaScript</p>
              </li>
              <li className="mx-12 my-8 flex w-40 flex-col items-center">
                <FontAwesomeIcon
                  icon={faTicketAlt}
                  height={70}
                  width={70}
                  className=""
                />
                <p className="w-4/5 text-center text-base">TypeScript</p>
              </li>
              <li className="mx-12 my-8 flex w-40 flex-col items-center">
                <FontAwesomeIcon
                  icon={faReact}
                  height={70}
                  width={70}
                  className=""
                  aria-hidden="true"
                />
                <p className="w-4/5 text-center text-base">React</p>
              </li>
              <li className="mx-12 my-8 flex w-40 flex-col items-center">
                <FontAwesomeIcon
                  icon={faReact}
                  height={70}
                  width={70}
                  className=""
                  aria-hidden="true"
                />
                <p className="w-4/5 text-center text-base">NextJS</p>
              </li>
              <li className="mx-12 my-8 flex w-40 flex-col items-center">
                <FontAwesomeIcon
                  icon={faGithubAlt}
                  height={70}
                  width={70}
                  className=""
                  aria-hidden="true"
                />
                <p className="w-4/5 text-center text-base">Git</p>
              </li>
              <li className="mx-12 my-8 flex w-40 flex-col items-center">
                <FontAwesomeIcon
                  icon={faTerminal}
                  height={70}
                  width={70}
                  className=""
                  aria-hidden="true"
                />
                <p className="w-4/5 text-center text-base">Command Line</p>
              </li>
              <li className="mx-12 my-8 flex w-40 flex-col items-center">
                <FontAwesomeIcon
                  icon={faCogs}
                  height={70}
                  width={70}
                  className=""
                  aria-hidden="true"
                />
                <p className="w-4/5 text-center text-base">RESTful APIs</p>
              </li>
              <li className="mx-12 my-8 flex w-40 flex-col items-center">
                <FontAwesomeIcon
                  icon={faGrinAlt}
                  height={70}
                  width={70}
                  className=""
                  aria-hidden="true"
                />
                <p className="w-4/5 text-center text-base">GraphQL</p>
              </li>
              <li className="mx-12 my-8 flex w-40 flex-col items-center">
                <FontAwesomeIcon
                  icon={faAccessibleIcon}
                  height={70}
                  width={70}
                  className=""
                  aria-hidden="true"
                />
                <p className="w-4/5 text-center text-base">Cypress</p>
              </li>
              <li className="mx-12 my-8 flex w-40 flex-col items-center">
                <FontAwesomeIcon
                  icon={faApplePay}
                  height={70}
                  width={70}
                  className=""
                  aria-hidden="true"
                />
                <p className="w-4/5 text-center text-base">Storybook</p>
              </li>
              <li className="mx-12 my-8 flex w-40 flex-col items-center">
                <FontAwesomeIcon
                  icon={faMobileAlt}
                  height={70}
                  width={70}
                  className=""
                  aria-hidden="true"
                />
                <p className="w-4/5 text-center text-base">Responsive Design</p>
              </li>
              <li className="mx-12 my-8 flex w-40 flex-col items-center">
                <FontAwesomeIcon
                  icon={faUniversalAccess}
                  height={70}
                  width={70}
                  className=""
                  aria-hidden="true"
                />
                <p className="w-4/5 text-center text-base">Web Accessibility</p>
              </li>
            </ul>
          </div>
        </section>

        <div className="divider"></div>

        <div className="divider"></div>

        {/* Contact */}
        <section className="bg-gray-50 px-8 pt-20 pb-36" id="contact">
          <div className="wrapper">
            <div className="text-left">
              <h1 className="text-6xl font-bold text-gray-800">Contact</h1>
              <p className="pt-2">
                If you have any questions about me or my projects or want to
                debate the hottest shoes, cheers!
              </p>
            </div>
          </div>
          <div className="relative mx-auto mt-16 max-w-4xl">
            <div className="absolute inset-0 z-10 -skew-y-6 transform bg-slate-400 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-lg"></div>
            <div className="relative z-20 rounded-md bg-white p-12 shadow-md">
              <form
                action="https://formspree.io/f/mdobokkz"
                method="POST"
                className="flex flex-col space-y-4"
              >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
                  <label htmlFor="name" className="sr-only text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="rounded-md border border-gray-200 px-4 py-2 outline-none hover:border-gray-400 focus:border-gray-400"
                    required
                  />
                  <label htmlFor="email" className="sr-only text-sm">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Email"
                    className="rounded-md border border-gray-200 px-4 py-2 outline-none hover:border-gray-400 focus:border-gray-400"
                    required
                  />
                  <label htmlFor="email" className="sr-only text-sm">
                    Leave a message for Alvin
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Hi Alvin, I love web development and basketball too! Let's meet for a quick chat over coffee!"
                    className="rounded-md border border-gray-200 px-4 py-2 outline-none hover:border-gray-400 focus:border-gray-400 md:col-span-2"
                  ></textarea>
                </div>
                <button className="inline-block self-end rounded-lg bg-slate-400 px-6 py-2 font-bold uppercase text-white">
                  Send it off!
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer items-center bg-base-content p-4 text-neutral-content">
        <div className="grid-flow-col items-center">
          <p className="text-base font-normal">
            Designed and developed by{' '}
            <span className="capitalize">alvin quach</span>&copy;
          </p>
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
