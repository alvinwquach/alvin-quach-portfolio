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
        <section className="bg-slate-400 pb-20 shadow-lg" id="skills">
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
        {/* Projects */}
        <section id="projects">
          <div className="wrapper">
            <h2 className="mb-3 py-4 text-left text-6xl leading-tight tracking-tight">
              Projects
            </h2>
            {/* Project One */}
            <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src="https://api.lorem.space/image/movie?w=260&h=400"
                  className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                  <h4 className="text-4xl font-normal">Loopin Thru Hoops</h4>
                  {/* Replace Skills with Icons */}
                  <p className="py-6 text-base font-normal">
                    Want to see how the stars of the 2021 - 2022 NBA season fare
                    against each other? Using the Ball Don't Lie API (it really
                    doesn't), Loopin Thru Hoops is a must have for those fantasy
                    basketball leagues! Paired programming project with {''}
                    <a
                      href="https://github.com/aileenunez"
                      target="_blank"
                      aria-label="open link to aileennunez github profile"
                      className="hover:text-teal-400"
                    >
                      Aileen Nunez
                    </a>
                  </p>
                  <a
                    href="https://loopinthruhoops.netlify.app/"
                    target="_blank"
                    aria-label="open link to view loopin thru hoops"
                    className="btn uppercase"
                  >
                    View Live
                  </a>
                  <a
                    href=""
                    target="_blank"
                    aria-label="open link to view loopin thru hoops github"
                    className="btn uppercase"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>

            {/* Project Two */}
            <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                  src="https://api.lorem.space/image/movie?w=260&h=400"
                  className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                  <h4 className="text-4xl font-normal">Expense Analyzer</h4>
                  {/* Replace Skills with Icons */}
                  <p className="py-6 text-base font-normal">
                    An expense analyzer allowing the user to filter expenses by
                    category. Firebase is being used to store the data.
                  </p>
                  <a
                    href="https://loopinthruhoops.netlify.app/"
                    target="_blank"
                    aria-label="open link to view loopin thru hoops"
                    className="btn uppercase"
                  >
                    View Live
                  </a>
                  <a
                    href=""
                    target="_blank"
                    aria-label="open link to view loopin thru hoops github"
                    className="btn uppercase"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>

            {/* Project Three */}
            <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src="https://api.lorem.space/image/movie?w=260&h=400"
                  className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                  <h4 className="text-4xl font-normal">
                    Not So Trivial Pursuit
                  </h4>
                  <p className="py-6 text-base font-normal">
                    Are you ready to test your knowledge of trivia? Check out
                    Not So Trivial Pursuit! Not So Trivial Pursuit uses the Open
                    Trivia DB API generates quizzes based on a wide range of
                    categories to choose from. Take on Darth Maul in this
                    friendly and family fun game! Paired programming project
                    with Yuhui (Hugh) Zhou, and Spencer Lukens.
                  </p>
                  <a
                    href="https://loopinthruhoops.netlify.app/"
                    target="_blank"
                    aria-label="open link to view loopin thru hoops"
                    className="btn uppercase"
                  >
                    View Live
                  </a>
                  <a
                    href=""
                    target="_blank"
                    aria-label="open link to view loopin thru hoops github"
                    className="btn uppercase"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
            {/* Project Four */}
            <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                  src="https://api.lorem.space/image/movie?w=260&h=400"
                  className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                  <h4 className="text-4xl font-normal">Brewmate</h4>
                  {/* Replace Skills with Icons */}
                  <p className="py-6 text-base font-normal">
                    Brewmate is an application that allows users to search for a
                    beer and discover the food pairings that go with it. Users
                    are able to learn more about the beer by clicking on the
                    image of the beer.
                  </p>
                  <a
                    href="https://loopinthruhoops.netlify.app/"
                    target="_blank"
                    aria-label="open link to view loopin thru hoops"
                    className="btn uppercase"
                  >
                    View Live
                  </a>
                  <a
                    href=""
                    target="_blank"
                    aria-label="open link to view loopin thru hoops github"
                    className="btn uppercase"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>

            {/* Project Five */}
            <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src="https://api.lorem.space/image/movie?w=260&h=400"
                  className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                  <h4 className="text-4xl font-normal">Tip The Ball Up</h4>
                  {/* Replace Skills with Icons */}
                  <p className="py-6 text-base font-normal">
                    Tip the ball up allows the user to search for a player by
                    name and view their stats for any given season. The user can
                    also learn more about the player by clicking on their image.
                    The user can also view the players career stats by clicking
                    on the player.
                  </p>
                  <a
                    href="https://loopinthruhoops.netlify.app/"
                    target="_blank"
                    aria-label="open link to view loopin thru hoops"
                    className="btn uppercase"
                  >
                    View Live
                  </a>
                  <a
                    href=""
                    target="_blank"
                    aria-label="open link to view loopin thru hoops github"
                    className="btn uppercase"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
            {/* Project Six */}
            <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                  src="https://api.lorem.space/image/movie?w=260&h=400"
                  className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                  <h4 className="text-4xl font-normal">Expense Tracker</h4>
                  {/* Replace Skills with Icons */}
                  <p className="py-6 text-base font-normal">
                    The expense tracker allows the user to track their expenses
                    by a category. The user can also view their expenses by
                    month. The user can also view their expenses by year. The
                    user can also view their expenses by category.
                  </p>
                  <a
                    href="https://loopinthruhoops.netlify.app/"
                    target="_blank"
                    aria-label="open link to view loopin thru hoops"
                    className="btn uppercase"
                  >
                    View Live
                  </a>
                  <a
                    href=""
                    target="_blank"
                    aria-label="open link to view loopin thru hoops github"
                    className="btn uppercase"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        {/* Contact */}
        <section id="contact">
          <div className="wrapper">
            <h4 className="justify-left mb-3 py-4 text-4xl capitalize leading-tight">
              Let's get in touch!
            </h4>
            <p className="justify-left text-base font-normal leading-tight">
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
                <div>
                  <label htmlFor="name" className="sr-only"></label>
                  <input
                    className="my-3.5 w-2/6 rounded-md bg-white p-6 text-black hover:outline-primary"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required
                  />
                  <input
                    className="my-3.5 w-2/6 rounded-md bg-white p-6 text-black hover:outline-primary"
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
                    className="my-3.5 w-4/6 rounded-md bg-white p-6 leading-6 text-black hover:outline-primary-focus"
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
                    className="btn rounded-md bg-base-content text-sm font-medium"
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
