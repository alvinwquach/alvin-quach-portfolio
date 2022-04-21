import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { ReactElement } from 'react'
import {
  faBars,
  faCogs,
  faLadderWater,
  faMagic,
  faMobileAlt,
  faSadTear,
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
  faStackOverflow,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="navbar bg-base-100">
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
              className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
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
            className="btn btn-ghost text-xl uppercase"
            href="https://alvinsblog.netlify.app/"
            target="_blank"
          >
            Blog
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
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
        <div className="navbar-end">
          <a href="#contact" className="btn text-xl uppercase">
            Contact
          </a>
        </div>
      </div>
      <Head>
        <title>Alvin Quach - Front End Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-slate-200">
        {/* About */}
        <section className="p-4 text-center" id="about">
          <div className="wrapper flex justify-center">
            {/* <Image
              className="h-32 w-32 rounded-full"
              src="/images/profile.jpg"
              alt="Picture of me"
              width={150}
              height={150}
            /> */}
          </div>
          <div>
            <h3 className="py-4 text-center text-5xl text-stone-600">
              About Me
            </h3>
            <p className="px-8 text-xl text-success-content">
              Hey there! I'm Alvin Quach, your friendly neighborhood web
              developer. I'm a Front End developer with a background in
              Marketing and Community Management.My passion for community and
              storytelling is exemplified by creating a great user experience
              and user interface. Here's my{' '}
              <a
                className="text-slate-600 hover:text-white"
                href="https://medium.com/@alvinwquach/you-create-your-story-648fd1113824"
              >
                story
              </a>{' '}
              about my change from marketing to web development! In my free
              time, you can catch me watching the Golden State Warriors! Go
              Dubs!
            </p>
          </div>
        </section>
        {/* Skills */}
        <section className="p-24" id="skills">
          <div>
            <h3 className="py-6 text-center text-5xl text-stone-600">Skills</h3>
            <ul className="flex flex-wrap items-center justify-center text-xl">
              <li className="m-12 w-32 items-center justify-center">
                <FontAwesomeIcon icon={faHtml5} height={100} width={100} />
                <p className="w-5/6 text-center font-bold">HTML5</p>
              </li>
              <li className="m-12 w-32 items-center justify-center">
                <FontAwesomeIcon icon={faCss3} height={100} width={100} />
                <p className="w-5/6 text-center font-bold">CSS3</p>
              </li>
              <li className="m-12 w-32 items-center justify-center">
                <FontAwesomeIcon icon={faSass} height={100} width={100} />
                <p className="w-5/6 text-center font-bold">Sass</p>
              </li>
              <li className="m-12 w-32 items-center justify-center">
                <FontAwesomeIcon icon={faSadTear} height={100} width={100} />
                <p className="w-5/6 text-center font-bold">TailwindCSS</p>
              </li>
              <li className="m-12 w-32 items-center justify-center">
                <FontAwesomeIcon icon={faMagic} height={100} width={100} />
                <p className="w-5/6 text-center font-bold">MaterialUI</p>
              </li>
              <li className="m-12 w-32 items-center justify-center">
                <FontAwesomeIcon icon={faBars} height={100} width={100} />
                <p className="w-5/6 text-center font-bold">DaisyUI</p>
              </li>
              <li className="m-12 w-32 items-center justify-center">
                <FontAwesomeIcon icon={faLinkedin} height={100} width={100} />
                <p className="w-5/6 text-center font-bold">Flowbite</p>
              </li>
              <li className="m-12 w-32 items-center justify-center">
                <FontAwesomeIcon icon={faFigma} height={100} width={100} />
                <p className="w-5/6 text-center font-bold">Figma</p>
              </li>
              <li className="m-12 w-32 items-center justify-center">
                <FontAwesomeIcon icon={faJs} height={100} width={100} />
                <p className="w-5/6 text-center font-bold">JavaScript</p>
              </li>
              <li className="m-12 w-32 items-center justify-center">
                <FontAwesomeIcon
                  icon={faStackOverflow}
                  height={100}
                  width={100}
                />
                <p className="w-5/6 text-center font-bold">TypeScript</p>
              </li>
              <li className="m-12 w-32 items-center justify-center">
                <FontAwesomeIcon icon={faReact} height={100} width={100} />
                <p className="w-5/6 text-center font-bold">React</p>
              </li>
              <li className="m-12 w-32 items-center justify-center">
                <FontAwesomeIcon icon={faNodeJs} height={100} width={100} />
                <p className="w-5/6 text-center font-bold">NextJS</p>
              </li>
              <li className="m-12 w-32 items-center justify-center">
                <FontAwesomeIcon icon={faGithubAlt} height={100} width={100} />
                <p className="w-5/6 text-center font-bold">Git</p>
              </li>
              <li className="m-12 w-32 items-center justify-center">
                <FontAwesomeIcon icon={faTerminal} height={100} width={100} />
                <p className="w-5/6 text-center font-bold">Command Line</p>
              </li>
              <li className="m-12 w-32 items-center justify-center">
                <FontAwesomeIcon icon={faCogs} height={100} width={100} />
                <p className="w-5/6 text-center font-bold">RESTful APIs</p>
              </li>
              <li className="m-12 w-32 items-center justify-center">
                <FontAwesomeIcon
                  icon={faLadderWater}
                  height={100}
                  width={100}
                />
                <p className="w-5/6 text-center font-bold">GraphQL</p>
              </li>
              <li className="m-12 w-32 items-center justify-center">
                <FontAwesomeIcon icon={faMobileAlt} height={100} width={100} />
                <p className="w-5/6 text-center font-bold">Responsive Design</p>
              </li>
              <li className="m-12 w-32 items-center justify-center">
                <FontAwesomeIcon
                  icon={faUniversalAccess}
                  height={100}
                  width={100}
                />
                <p className="w-5/6 text-center font-bold">Web Accessibility</p>
              </li>
            </ul>
          </div>
        </section>
        {/* Projects */}
        <section className="p-20" id="projects">
          <div>
            <h3 className="py-6 text-center text-5xl text-stone-600">
              Projects
            </h3>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <div className="wrapper">
            <h3 className="py-6 text-center text-5xl text-stone-600">
              Let's get in touch!
            </h3>
            <p className="text-center text-4xl leading-10">
              If you have any questions about me or my projects or want to
              debate the hottest shoes, I'm your man! Drop a comment, question,
              concern. Cheers!
            </p>
            <div>
              {/* <ul className="flex justify-center">
                <li className="p-12">
                  <a href="http://github.com/alvinwquach" target="_blank">
                    <FontAwesomeIcon
                      icon={faGithub}
                      width={80}
                      height={80}
                      className="hover:text-white"
                    />
                  </a>
                </li>
                <li className="p-12">
                  <a
                    href="https://linkedin.com/in/alvin-quach-02a7314b/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      width={80}
                      height={80}
                      className="hover:text-white"
                    />
                  </a>
                </li>
                <li className="p-12 ">
                  <a href="https://twitter.com/MisterSJC" target="_blank">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      width={80}
                      height={80}
                      className="hover:text-white"
                    />
                  </a>
                </li>
              </ul> */}
              <form
                action="https://formspree.io/f/mdobokk"
                method="post"
                className="bg-slate-200 text-center text-white"
              >
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
                    // mt-4 w-4/6 cursor-pointer text-ellipsis rounded-md bg-stone-700 p-5 text-center uppercase
                    className="hover:btn-primary-500 btn mt-4 w-4/6 rounded-md"
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

      <footer className="flex h-24 w-full items-center justify-center border-t bg-slate-200 uppercase">
        Developed by Alvin Quach &copy;
      </footer>
    </div>
  )
}

export default Home
