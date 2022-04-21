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
            <h2 className="mb-3 py-4 text-center text-4xl uppercase text-stone-600">
              About
            </h2>
            <h3 className="mb-4 text-3xl capitalize">get to know alvin!</h3>
            <p className="px-8 text-left text-base leading-6 text-success-content">
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
            <p className="px-8 text-left text-base leading-6 text-success-content">
              Hey there! I'm Alvin Quach, your friendly neighborhood web
              developer. I'm a Front End developer with a background in
              Marketing and Community Management. User experience and
              accessibility are my top pillars. Here's my{' '}
              <a
                className="text-slate-600 hover:text-white"
                href="https://medium.com/@alvinwquach/you-create-your-story-648fd1113824"
                aria-label="open link to alvin quach's story"
              >
                story
              </a>{' '}
              about my change from marketing to web development! In my free
              time, you can catch me watching the Golden State Warriors! Go
              Dubs!
            </p>

            <p className="px-8 text-left text-base leading-6 text-success-content"></p>
          </div>
        </section>
        {/* Skills */}
        <section className="py-12" id="skills">
          <div className="wrapper">
            <h2 className="mb-4 text-center text-4xl capitalize">Skills</h2>
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
                icon={faHtml5}
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

        {/* Projects */}
        <section className="p-20" id="projects">
          <div className="wrapper">
            <h2 className="mb-3 py-4 text-center text-4xl uppercase text-stone-600">
              Projects
            </h2>
            {/* Project One */}
            <div>
              <div className="flex flex-row">
                <img
                  src="https://alvinquach.me/assets/alvinQuach.jpg"
                  alt="loopin thru hoops"
                  className="w-1/2"
                />
                <div>
                  <h3 className="font-semi-bold mt-4 -mb-2 text-2xl leading-5 tracking-wide">
                    Loopin Thru Hoops
                  </h3>
                  <h4>JavaScript | Firebase | RESTful API | Sass | HTML5</h4>
                  <p className="text-base leading-6">
                    Want to see how the stars of the 2021 - 2022 NBA season fare
                    against each other? Using the Ball Don't Lie API (it really
                    doesn't), Loopin Thru Hoops is a must have for those fantasy
                    basketball leagues! Paired programming project with{' '}
                    <a
                      href="https://github.com/aileenunez"
                      className="hover:text-white"
                    >
                      Aileen Nunez
                    </a>
                    .
                  </p>
                  <button className="btn btn-sm m-5">
                    <a
                      href="https://loopinthruhoops.netlify.app/"
                      target="_blank"
                      aria-label="Link to Loopin Thru Hoops"
                    >
                      View Live
                    </a>
                  </button>
                  <button className="btn btn-sm m-5">
                    <a
                      href="https://github.com/CLTWO/loopinThruHoops"
                      target="_blank"
                      aria-label="Link to Loopin Thru Hoops Github"
                    >
                      Github
                    </a>
                  </button>
                </div>
              </div>
            </div>

            {/* Project Two */}
            <div>
              <div>
                <div className="flex flex-row-reverse">
                  <img
                    src="https://alvinquach.me/assets/alvinQuach.jpg"
                    alt="loopin thru hoops"
                    className="w-1/2"
                  />
                  <div>
                    <h3 className="font-semi-bold mt-4 -mb-2 text-2xl leading-5 tracking-wide">
                      Expense Analyzer
                    </h3>
                    <h4>React | JavaScript | Firebase | Sass | HTML5</h4>
                    <p className="text-base leading-6">
                      An exzpense analyzer that allows a user to filter by
                      category. Firebase is being used to store the data.
                    </p>
                    <button className="btn btn-sm m-5">
                      <a
                        href="https://expenseanalyzer.netlify.app/"
                        target="_blank"
                        aria-label="Link to Expense Analyzer"
                      >
                        View Live
                      </a>
                    </button>
                    <button className="btn btn-sm m-5">
                      <a
                        href="https://github.com/alvinwquach/alvin-quach-project-three"
                        target="_blank"
                        aria-label="Link to Expense Analyzer Github"
                      >
                        Github
                      </a>
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Three */}
              <div>
                <div className="flex flex-row">
                  <img
                    src="https://alvinquach.me/assets/alvinQuach.jpg"
                    alt="loopin thru hoops"
                    className="w-1/2"
                  />
                  <div>
                    <h3 className="font-semi-bold mt-4 -mb-2 text-2xl leading-5 tracking-wide">
                      Loopin Thru Hoops
                    </h3>
                    <h4>JavaScript | Firebase | RESTful API | Sass | HTML5</h4>
                    <p className="text-base leading-6">
                      Want to see how the stars of the 2021 - 2022 NBA season
                      fare against each other? Using the Ball Don't Lie API (it
                      really doesn't), Loopin Thru Hoops is a must have for
                      those fantasy basketball leagues! Paired programming
                      project with{' '}
                      <a
                        href="https://github.com/aileenunez"
                        className="hover:text-white"
                      >
                        Aileen Nunez
                      </a>
                      .
                    </p>
                    <button className="btn btn-sm m-5">
                      <a
                        href="https://loopinthruhoops.netlify.app/"
                        target="_blank"
                        aria-label="Link to Loopin Thru Hoops"
                      >
                        View Live
                      </a>
                    </button>
                    <button className="btn btn-sm m-5">
                      <a
                        href="https://github.com/CLTWO/loopinThruHoops"
                        target="_blank"
                        aria-label="Link to Loopin Thru Hoops Github"
                      >
                        Github
                      </a>
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Four */}
              <div>
                <div className="flex flex-row-reverse">
                  <img
                    src="https://alvinquach.me/assets/alvinQuach.jpg"
                    alt="loopin thru hoops"
                    className="w-1/2"
                  />
                  <div>
                    <h3 className="font-semi-bold mt-4 -mb-2 text-2xl leading-5 tracking-wide">
                      Brewmate
                    </h3>
                    <h4>
                      React | TypeScript | GraphQL | Sass | MaterialUI | HTML5
                    </h4>
                    <p className="text-base leading-6">
                      Want to see how the stars of the 2021 - 2022 NBA season
                      fare against each other? Using the Ball Don't Lie API (it
                      really doesn't), Loopin Thru Hoops is a must have for
                      those fantasy basketball leagues! Paired programming
                      project with{' '}
                    </p>
                    <button className="btn btn-sm m-6">
                      <a
                        href="https://brewmate.netlify.app/"
                        target="_blank"
                        aria-label="Link to Brewmate"
                      >
                        View Live
                      </a>
                    </button>
                    <button className="btn btn-sm m-6">
                      <a
                        href="https://github.com/alvinwquach/beer-mate"
                        target="_blank"
                        aria-label="Link to Brewmate github"
                      >
                        Github
                      </a>
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Five */}
              <div>
                <div className="flex flex-row">
                  <img
                    src="https://alvinquach.me/assets/alvinQuach.jpg"
                    alt="loopin thru hoops"
                    className="w-1/2"
                  />
                  <div>
                    <h3 className="font-semi-bold mt-4 -mb-2 text-2xl leading-5 tracking-wide">
                      Nothin But Net
                    </h3>
                    <h4>
                      React | TypeScript | GraphQL | Sass | Flowbite | HTML5
                    </h4>
                    <p className="text-base leading-6">
                      Want to see how the stars of the 2021 - 2022 NBA season
                      fare against each other? Using the Ball Don't Lie API (it
                      really doesn't), Loopin Thru Hoops is a must have for
                      those fantasy basketball leagues! Paired programming
                      project with{' '}
                    </p>
                    <button className="btn btn-sm m-5">
                      <a
                        href="https://loopinthruhoops.netlify.app/"
                        target="_blank"
                        aria-label="Link to Loopin Thru Hoops"
                      >
                        See Live
                      </a>
                    </button>
                    <button className="btn btn-sm m-5">
                      <a
                        href="https://github.com/CLTWO/loopinThruHoops"
                        target="_blank"
                        aria-label="Link to Loopin Thru Hoops Github"
                      >
                        Github
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
