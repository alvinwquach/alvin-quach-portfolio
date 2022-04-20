import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { ReactElement } from 'react'
import {
  faBars,
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
        <section className="p-4 text-center text-4xl" id="about">
          <div className="wrapper flex justify-center">
            <Image
              className="h-32 w-32 rounded-full"
              src="/images/profile.jpg"
              alt="Picture of me"
              width={150}
              height={150}
            />
          </div>
          <div>
            <h3 className="py-6 text-center text-5xl text-stone-600">
              About Me
            </h3>
            <p className="px-8 text-xl text-slate-400">
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
        <section className="p-20" id="skills">
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
                <FontAwesomeIcon icon={faSass} height={100} width={100} />
                <p className="w-5/6 text-center font-bold">TailwindCSS</p>
              </li>
              <li className="m-12 w-32 items-center justify-center">
                <FontAwesomeIcon icon={faSass} height={100} width={100} />
                <p className="w-5/6 text-center font-bold">MaterialUI</p>
              </li>
              <li className="m-12 w-32 items-center justify-center">
                <FontAwesomeIcon icon={faSass} height={100} width={100} />
                <p className="w-5/6 text-center font-bold">DaisyUI</p>
              </li>
              <li className="m-12 w-32 items-center justify-center">
                <FontAwesomeIcon icon={faSass} height={100} width={100} />
                <p className="w-5/6 text-center font-bold">Flowbite</p>
              </li>
              <li className="m-12 w-32 items-center justify-center">
                <FontAwesomeIcon icon={faSass} height={100} width={100} />
                <p className="w-5/6 text-center font-bold">Figma</p>
              </li>
              <li className="m-12 w-32 items-center justify-center">
                <FontAwesomeIcon icon={faJs} height={100} width={100} />
                <p className="w-5/6 text-center font-bold">JavaScript</p>
              </li>
              <li className="m-12 w-32 items-center justify-center">
                <FontAwesomeIcon icon={faJs} height={100} width={100} />
                <p className="w-5/6 text-center font-bold">TypeScript</p>
              </li>
              <li className="m-12 w-32 items-center justify-center">
                <FontAwesomeIcon icon={faReact} height={100} width={100} />
                <p className="w-5/6 text-center font-bold">React</p>
              </li>
              <li className="m-12 w-32 items-center justify-center">
                <FontAwesomeIcon icon={faReact} height={100} width={100} />
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
                <FontAwesomeIcon icon={faCogs} height={100} width={100} />
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

            {/* Project One*/}
            <div className="">
              <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                  {' '}
                  <img
                    src="https://api.lorem.space/image/shoes?w=400&h=225"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Loopin Thru Hoops!</h2>
                  <h4 className="text-lg">
                    JavaScript | Firebase | RESTful API | Sass | HTML5
                  </h4>
                  <p>
                    Want to see how the stars of the 2021 - 2022 NBA season fare
                    against each other? Using the Ball Don't Lie API (it really
                    doesn't), Loopin Thru Hoops is a must have for those fantasy
                    basketball leagues! Paired programming project with{' '}
                    <a
                      href="https://github.com/aileenunez"
                      className="text-orange-400 hover:text-red-600"
                    >
                      Aileen Nunez
                    </a>
                    .
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                      <a href="https://loopinthruhoops.netlify.app/">
                        View Live
                      </a>
                    </button>
                    <button className="btn btn-primary">
                      <a href="https://github.com/CLTWO/loopinThruHoops">
                        GitHub
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              {/* Project Two */}
              <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                  {' '}
                  <img
                    src="https://api.lorem.space/image/shoes?w=400&h=225"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Expense Analyzer</h2>
                  <h4 className="text-lg">
                    React | JavaScript | Firebase | Sass | HTML5
                  </h4>
                  <p>
                    An expense analyzer allowing the user to filter expenses by
                    category. Firebase is being used to store the data.
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                      <a href="https://expenseanalyzer.netlify.app/">
                        View Live
                      </a>
                    </button>
                    <button className="btn btn-primary">
                      <a href="https://github.com/CLTWO/loopinThruHoops">
                        GitHub
                      </a>
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Three */}
              <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                  {' '}
                  <img
                    src="https://api.lorem.space/image/shoes?w=400&h=225"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Not So Trivial Pursuit</h2>
                  <h4 className="text-lg">
                    React | JavaScript | Firebase | RESTful API | Sass | HTML5
                  </h4>
                  <p>
                    {' '}
                    Are you ready to test your knowledge of trivia? Check out
                    Not So Trivial Pursuit! Not So Trivial Pursuit uses the Open
                    Trivia DB API generates quizzes based on a wide range of
                    categories to choose from. Take on Darth Maul in this
                    friendly and family fun game! Paired programming project
                    with{' '}
                    <a
                      href="https://github.com/Hughzhoutrt/"
                      className="text-orange-400 hover:text-red-600"
                    >
                      Yuhui (Hugh) Zhou
                    </a>
                    , and{' '}
                    <a
                      href="https://github.com/Spencer-Lukens"
                      className="text-orange-400 hover:text-red-600"
                    >
                      Spencer Lukens
                    </a>
                    .
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                      <a href="https://not-so-trivial-pursuit-star-war.netlify.app/">
                        View Live
                      </a>
                    </button>
                    <button className="btn btn-primary">
                      <a href="https://github.com/Cohort-37-Group7/Not-So-Trivial-Pursuit">
                        GitHub
                      </a>
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Four */}
              <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                  {' '}
                  <img
                    src="https://api.lorem.space/image/shoes?w=400&h=225"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Brewmate</h2>
                  <h4 className="text-lg">
                    React | TypeScript | GraphQL | MaterialUI | HTML5
                  </h4>
                  <p>
                    Using the punk api, Brewmate is a web application that
                    allows users to search for beers and food items to pair them
                    with. Users can also create their own recipes and share them
                    with others.
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                      <a href="https://brewmate.netlify.app/">View Live</a>
                    </button>
                    <button className="btn btn-primary">
                      <a href="https://github.com/alvinwquach/beer-mate">
                        GitHub
                      </a>
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Five */}
              <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                  {' '}
                  <img
                    src="https://api.lorem.space/image/shoes?w=400&h=225"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Nothing But Buckets!</h2>
                  <h4 className="text-lg">
                    NextJS | TypeScript | TailwindCSS | Flowbite | GraphQL |
                    Sass | HTML5
                  </h4>
                  <p>
                    Using the Ball Don't Lie API (it really doesn't), nothing
                    but buckets allows you to view a player's profile as well as
                    their stats and season averages. Users can also view the top
                    players in the league and the top teams in the league.
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                      <a href="https://loopinthruhoops.netlify.app/">
                        View Live
                      </a>
                    </button>
                    <button className="btn btn-primary">
                      <a href="https://github.com/CLTWO/loopinThruHoops">
                        GitHub
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
              <ul className="flex justify-center">
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
              </ul>
              <form
                action="https://formspree.io/f/mdobokk"
                method="post"
                className="bg-slate-200 text-center text-white"
              >
                {/* flex flex-col md:flex-row */}
                <div>
                  <label htmlFor="name" className="sr-only"></label>
                  <input
                    className="my-2.5 mx-1.5 inline w-2/6 rounded-md bg-white p-5 text-xl text-black hover:outline-primary"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required
                  />
                  <input
                    className="my-2.5 mx-1.5 inline w-2/6 rounded-md bg-white p-5 text-xl text-black hover:outline-primary"
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
                    className="w-4/6 rounded-md bg-white p-5 text-xl leading-6 text-black hover:outline-primary-focus"
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
