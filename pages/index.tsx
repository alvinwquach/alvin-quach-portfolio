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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
import { profile } from 'console'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <nav>
        <div>
          <label htmlFor="toggle">
            <FontAwesomeIcon icon={faBars} visibility="hidden" />
            <span className="sr-only">Navigation Menu</span>
          </label>
          <input type="checkbox" name="toggle" id="toggle" />
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <Head>
        <title>Alvin Quach - Front End Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        {/* About Section */}
        <section className="text-center text-4xl" id="about">
          <div className="mx-auto w-11/12 max-w-screen-xl">
            <h3 className="py-6 text-center text-5xl text-stone-400">
              About Me
              <Image
                src="/images/profile.jpg"
                alt="Picture of me"
                width={150}
                height={150}
              />
            </h3>
            <p className="text-md text-slate-400">
              Hey there! I'm your friendly neighborhood web developer. I'm a
              Front End developer with a background in Marketing and Community
              Management.My passion for community and storytelling is
              exemplified by creating a great user experience and user
              interface. Check out my{' '}
              <a
                className="text-red-300"
                href="https://medium.com/@alvinwquach/you-create-your-story-648fd1113824"
              >
                blog post
              </a>{' '}
              to learn more about my change from marketing to web development
              and embark through my journey! In my free time, you can catch me
              watching the Golden State Warriors and enjoying a nice cold IPA!
            </p>
          </div>
        </section>
        <section className="p-20">
          <div>
            <h3 className="py-6 text-center text-5xl text-stone-400">Skills</h3>
            <ul className="flex flex-wrap items-center justify-center">
              <li className="m-12 flex w-32 items-center justify-center">
                <FontAwesomeIcon icon={faHtml5} />
                <p className="w-5/6 text-center">HTML5</p>
              </li>
              <li className="m-12 flex w-32 items-center justify-center">
                <FontAwesomeIcon icon={faCss3} />
                <p>CSS3</p>
              </li>
              <li className="m-12 flex w-32 items-center justify-center">
                <FontAwesomeIcon icon={faSass} />
                <p>Sass</p>
              </li>
              <li className="m-12 flex w-32 items-center justify-center">
                <FontAwesomeIcon icon={faJs} />
                <p>JavaScript</p>
              </li>
              <li className="m-12 flex w-32 items-center justify-center">
                <FontAwesomeIcon icon={faReact} />
                <p>React</p>
              </li>
              <li className="m-12 flex w-32 items-center justify-center">
                <FontAwesomeIcon icon={faGithub} />
                <p>GitHub</p>
              </li>
              <li className="m-12 flex w-32 items-center justify-center">
                <FontAwesomeIcon icon={faGithubAlt} />
                <p>Git</p>
              </li>
              <li className="m-12 flex w-32 items-center justify-center">
                <FontAwesomeIcon icon={faTerminal} />
                <p>Command Line</p>
              </li>
              <li className="m-12 flex w-32 items-center justify-center">
                <FontAwesomeIcon icon={faCogs} />
                <p>RESTful APIs</p>
              </li>
              <li className="m-12 flex w-32 items-center justify-center">
                <FontAwesomeIcon icon={faMobileAlt} />
                <p>Responsive Design</p>
              </li>
              <li className="m-12 flex w-32 items-center justify-center">
                <FontAwesomeIcon icon={faUniversalAccess} />
                <p>Web Accessibility</p>
              </li>
            </ul>
          </div>
        </section>
        <section id="projects">
          <div className="mx-auto w-64 max-w-7xl">
            <h3 className="py-6 text-center text-5xl text-stone-400">
              Projects
            </h3>
          </div>
        </section>
        <section id="contact">
          <div className="mx-auto w-64 max-w-7xl">
            <h3 className="py-6 text-center text-5xl text-stone-400">
              Get in touch!
            </h3>
            <p>
              If you have any questions about me or my projects or want to
              debate the hottest shoes, I'm your man! Drop a comment, question,
              concern. Cheers! 🍻
            </p>
            <div>
              <ul>
                <li className="p-12">
                  <a href="http://github.com/alvinwquach" target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li className="p-12">
                  <a
                    href="https://linkedin.com/in/alvin-quach-02a7314b/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li className="p-12">
                  <a href="https://twitter.com/MisterSJC" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
              </ul>
              <form action="https://formspree.io/f/mdobokk" method="post">
                <div>
                  <label htmlFor="name" className="sr-only"></label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required
                  />
                  <input
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
                    className="mt-4 w-4/6 cursor-pointer text-ellipsis rounded-md bg-red-400 p-5 text-center uppercase hover:bg-fuchsia-600	"
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

      <footer className="flex h-24 w-full items-center justify-center border-t">
        Developed by Alvin Quach
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </footer>
    </div>
  )
}

export default Home
