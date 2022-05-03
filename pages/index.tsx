import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { ReactElement } from 'react'
import {
  faBasketball,
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
              <li>
                <a href="#contact">Contact</a>
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
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end bg-neutral">
          <a
            href="/resume.pdf"
            className="btn text-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
      <Head>
        <title>Alvin Quach - Front End Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </Head>

      <main className="bg-slate-300 antialiased">
        {/* About */}
        <section className="px-8 pt-20 " id="about">
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
            <h2 className="text-4xl font-bold text-gray-800">About</h2>
            <br></br>
            <p className="text-neutral-100 justify-left text-2xl font-normal leading-tight">
              Hey there! I'm Alvin Quach, your friendly neighborhood web
              developer. Previously, I was in Marketing and Community
              Management, where I fell in love with storytelling. I hope to tell
              more stories through accessible code. Here's my{' '}
              <a
                className="from-blue-400 to-yellow-500 text-blue-500 hover:bg-gradient-to-r"
                href="https://medium.com/@alvinwquach/you-create-your-story-648fd1113824"
                aria-label="open link to alvin quach's story"
              >
                story
              </a>{' '}
              about my change from marketing to web development!
            </p>
            <p className="text-neutral-100 justify-left mt-3 text-2xl font-normal leading-tight">
              User experience and accessibility are key to a great user
              interface and I thrive to be able to be able to provide that
              experience for all.
            </p>
            <p className="justify-left text-neutral-100 mt-4 text-2xl font-normal leading-tight">
              When I'm not coding, you can catch me watching the Golden State
              Warriors!{' '}
              <span>
                Go Dubs!{' '}
                <FontAwesomeIcon
                  icon={faBasketball}
                  height={24}
                  width={24}
                  aria-hidden="true"
                  className="inline bg-gradient-to-r from-blue-400 to-yellow-500"
                />
              </span>
            </p>
          </div>
        </section>
        <div className="divider"></div>
        {/* Skills */}
        <section className="bg-gray-50 px-8 pt-20 shadow-lg" id="skills">
          <div className="wrapper">
            <h2 className="text-4xl font-bold text-gray-800">Skills</h2>
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
                <svg height={70} width={70} viewBox="0 0 128 128">
                  <path
                    d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                    fill="text-neutral-100"
                  ></path>
                </svg>
                <p className="w-4/5 text-center text-base">TailwindCSS</p>
              </li>
              <li className="mx-12 my-8 flex w-40 flex-col items-center">
                <svg height={70} width={70} viewBox="0 0 128 128">
                  <path
                    fill="text-neutral-100"
                    d="M.2 68.6V13.4L48 41v18.4L16.1 41v36.8L.2 68.6z"
                  ></path>
                  <path
                    fill="text-neutral-100"
                    d="M48 41l47.9-27.6v55.3L64 87l-16-9.2 32-18.4V41L48 59.4V41z"
                  ></path>
                  <path
                    fill="text-neutral-100"
                    d="M48 77.8v18.4l32 18.4V96.2L48 77.8z"
                  ></path>
                  <path
                    fill="text-neutral-100"
                    d="M80 114.6L127.8 87V50.2l-16 9.2v18.4L80 96.2v18.4zM111.9 41V22.6l16-9.2v18.4l-16 9.2z"
                  ></path>
                </svg>
                <p className="w-4/5 text-center text-base">MaterialUI</p>
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
                <svg height={70} width={70} viewBox="0 0 128 128">
                  <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
                  <path
                    data-name="original"
                    fill="#text-neutral-100"
                    d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
                  ></path>
                </svg>
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
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                  height={70}
                  width={70}
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
                <svg height={70} width={70} viewBox="0 0 128 128">
                  <path
                    fill="#text-neutral-100"
                    d="M27.35 80.52l10.68-68.44c.37-2.33 3.5-2.89 4.6-.8l11.48 21.48-26.76 47.76zm75.94 16.63L93.1 34.11c-.31-1.96-2.76-2.76-4.17-1.35L24.71 97.15l35.54 19.95a7.447 7.447 0 007.18 0l35.86-19.95zm-28.85-55L66.21 26.5c-.92-1.78-3.44-1.78-4.36 0L25.7 90.95l48.74-48.8z"
                  ></path>
                </svg>
                <p className="w-4/5 text-center text-base">Firebase</p>
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
                <svg height={70} width={70} viewBox="0 0 128 128">
                  <g fill="#text-neutral-100">
                    <path d="M18.39 96.852l-4.6-2.657L65.04 5.434l4.597 2.656zm0 0"></path>
                    <path d="M12.734 87.105H115.23v5.31H12.734zm0 0"></path>
                    <path d="M66.031 119.688L14.766 90.09l2.656-4.602 51.266 29.602zm0 0M110.566 42.543L59.301 12.941l2.656-4.597 51.266 29.597zm0 0"></path>
                    <path d="M17.434 42.523l-2.657-4.601 51.27-29.598 2.656 4.598zm0 0"></path>
                    <path d="M109.621 96.852L58.375 8.09l4.598-2.656 51.25 88.761zm0 0M16.8 34.398h5.313v59.204h-5.312zm0 0"></path>
                    <path d="M105.887 34.398h5.312v59.204h-5.312zm0 0"></path>
                    <path d="M65.129 117.441l-2.32-4.02 44.586-25.745 2.32 4.02zm0 0"></path>
                    <path d="M118.238 95.328c-3.07 5.344-9.918 7.168-15.261 4.098-5.344-3.074-7.168-9.922-4.098-15.266 3.074-5.344 9.922-7.168 15.266-4.097 5.375 3.105 7.199 9.921 4.093 15.265M29.09 43.84c-3.074 5.344-9.922 7.168-15.266 4.097-5.344-3.074-7.168-9.921-4.097-15.265 3.074-5.344 9.921-7.168 15.265-4.098 5.344 3.106 7.168 9.922 4.098 15.266M9.762 95.328c-3.075-5.344-1.25-12.16 4.093-15.266 5.344-3.07 12.16-1.246 15.266 4.098 3.07 5.344 1.246 12.16-4.098 15.266-5.375 3.07-12.191 1.246-15.261-4.098M98.91 43.84c-3.07-5.344-1.246-12.16 4.098-15.266 5.344-3.07 12.16-1.246 15.265 4.098 3.07 5.344 1.247 12.16-4.097 15.266-5.344 3.07-12.192 1.246-15.266-4.098M64 126.656a11.158 11.158 0 01-11.168-11.168A11.158 11.158 0 0164 104.32a11.158 11.158 0 0111.168 11.168c0 6.145-4.992 11.168-11.168 11.168M64 23.68a11.158 11.158 0 01-11.168-11.168A11.158 11.158 0 0164 1.344a11.158 11.158 0 0111.168 11.168A11.158 11.158 0 0164 23.68"></path>
                  </g>
                </svg>
                <p className="w-4/5 text-center text-base">GraphQL</p>
              </li>
              <li className="mx-12 my-8 flex w-40 flex-col items-center">
                <svg height={70} width={70} viewBox="0 0 128 128">
                  <path
                    fill="#text-neutral-100"
                    d="M124.129 63.02c0-7.692-5.828-14.165-13.652-16.012L128 .113H41.16l17.563 47.043c-7.578 1.996-13.164 8.356-13.164 15.903 0 5.546 3.058 10.464 7.703 13.496-1.832 2.367-3.953 4.55-6.356 6.62-4.523 3.848-9.539 6.805-14.957 8.766-4.89-2.996-7.008-8.285-5.094-13.02 7.457-2.07 12.88-8.394 12.88-15.827 0-9.133-8.192-16.532-18.22-16.532-10.066 0-18.253 7.434-18.253 16.57 0 4.513 2.035 8.653 5.297 11.61-.286.52-.57 1.035-.856 1.59C4.973 81.438 1.875 87.207.691 93.68c-2.363 12.941 1.508 23.336 10.84 29.215 5.258 3.293 11.047 4.957 17.282 4.957 10.714 0 21.597-4.883 32.109-9.618 7.5-3.363 15.242-6.879 22.863-8.578 2.813-.629 5.746-1 8.844-1.406 6.273-.813 12.754-1.664 18.582-4.734 6.805-3.586 11.45-9.579 12.797-16.457 1.015-5.29 0-10.614-2.61-15.274a15.35 15.35 0 002.73-8.765zm-7.945 0c0 5.14-4.606 9.32-10.27 9.32s-10.27-4.18-10.27-9.32c0-1.665.489-3.254 1.344-4.622.325-.52.735-1.035 1.14-1.48a8.517 8.517 0 011.427-1.219l.043-.039c.324-.222.691-.445 1.058-.664 0 0 .04 0 .04-.039.163-.074.327-.184.492-.258.039 0 .078-.039.12-.039.165-.07.368-.144.57-.219a8.78 8.78 0 00.571-.222c.04 0 .082-.04.121-.04.164-.034.328-.109.489-.144.043 0 .125-.039.164-.039.203-.035.367-.074.57-.11h.043l.61-.113c.042 0 .12 0 .163-.035.164 0 .325-.039.489-.039h.203c.203 0 .41-.035.652-.035h.531c.16 0 .286 0 .446.035h.082c.328.04.652.074.98.149 4.645.886 8.192 4.66 8.192 9.172zM52.527 7.508h64.102l-14.711 39.387c-.61.113-1.223.296-1.832.48l-15.484-28.66L69.074 47.19c-.613-.183-1.265-.296-1.914-.406zM81.664 59.8c-.773-3.477-2.73-6.582-5.5-8.875l8.438-15.457 8.515 15.789c-2.527 2.293-4.36 5.215-5.094 8.543zM61.25 53.96c.203-.04.367-.074.57-.113h.121c.164-.035.329-.035.489-.075h.164c.164 0 .285-.035.449-.035h1.59c.16 0 .285.035.406.035.082 0 .121 0 .203.04.164.035.285.035.45.074.038 0 .081 0 .163.035.204.039.407.074.57.113h.04c.164.035.328.07.488.145.043 0 .082.039.164.039.121.035.285.074.406.148.043 0 .082.035.125.035.16.075.325.114.489.188h.039c.203.07.367.144.531.258h.04c.163.074.327.183.491.257.04 0 .04.04.078.04.164.07.286.183.45.257l.043.035c.488.333.937.704 1.382 1.075l.043.035c.407.406.813.851 1.141 1.332 1.059 1.48 1.672 3.219 1.672 5.105 0 5.141-4.606 9.317-10.27 9.317s-10.27-4.176-10.27-9.317c-.042-4.328 3.259-7.988 7.743-9.023zm-40.102-.262c5.665 0 10.27 4.18 10.27 9.32 0 5.141-4.605 9.32-10.27 9.32-5.664 0-10.27-4.179-10.27-9.32 0-5.14 4.606-9.32 10.27-9.32zm94.79 32.067c-.895 4.73-4.118 8.875-8.844 11.351-4.442 2.332-9.903 3.07-15.649 3.809-3.136.406-6.437.851-9.617 1.554-8.476 1.887-16.625 5.586-24.531 9.133-10.106 4.551-19.645 8.84-28.484 8.84-4.606 0-8.723-1.183-12.633-3.66-8.965-5.621-8.52-16.16-7.457-21.93.976-5.402 3.707-10.468 6.316-15.312.16-.297.285-.555.445-.852.899.297 1.836.52 2.813.668-1.547 7.84 2.851 15.938 11.41 19.934l1.55.738 1.669-.555c7.133-2.293 13.734-6.027 19.562-11.02 3.301-2.812 6.114-5.843 8.477-9.136.937.149 1.875.188 2.812.188 8.477 0 15.606-5.29 17.645-12.391h6.844c2.039 7.137 9.171 12.39 17.648 12.39 3.383 0 6.52-.85 9.207-2.292 1.063 2.773 1.387 5.656.817 8.543zm0 0"
                  ></path>
                </svg>
                <p className="w-4/5 text-center text-base">Jest</p>
              </li>

              <li className="mx-12 my-8 flex w-40 flex-col items-center">
                <svg height={70} width={70} viewBox="0 0 128 128">
                  <path
                    d="M107.346 2.012l-6.914.431.539 14.377c.028.795-.889 1.259-1.514.766l-4.63-3.65-5.485 4.162a.934.934 0 01-1.498-.784l.617-14.123L19.873 7.48a6.264 6.264 0 00-5.87 6.488l3.86 102.838a6.264 6.264 0 005.98 6.023l83.612 3.754a6.273 6.273 0 004.609-1.73 6.255 6.255 0 001.936-4.526V8.264a6.258 6.258 0 00-1.975-4.566 6.257 6.257 0 00-4.679-1.686zm-41.46 21.187c16.308 0 25.214 8.723 25.214 25.319-2.204 1.713-18.62 2.88-18.62.443.346-9.3-3.817-9.707-6.13-9.707-2.198 0-5.899.662-5.899 5.644 0 12.288 31.69 11.625 31.69 36.424 0 13.95-11.335 21.655-25.791 21.655-14.92 0-27.957-6.036-26.485-26.963.578-2.457 19.545-1.873 19.545 0-.23 8.635 1.735 11.175 6.707 11.175 3.817 0 5.553-2.103 5.553-5.646 0-12.621-31.227-13.063-31.227-36.201 0-13.285 9.138-22.143 25.444-22.143z"
                    fill="text-neutral-100"
                  ></path>
                </svg>

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

        <section
          className="bg-gray-50 px-8 pt-20 pb-36 shadow-lg"
          id="projects"
        >
          <div className="wrapper">
            <div className="text-left">
              <h2 className="pb-24 text-4xl font-bold text-gray-800">
                Projects
              </h2>
              <p className="text-2xl">Soon come...</p>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* Contact */}
        <section
          className="max-w-screen-2xl bg-gray-50 px-8 pt-20 pb-36"
          id="contact"
        >
          <div className="wrapper">
            <div className="text-left">
              <h2 className="text-4xl font-bold text-gray-800">Contact</h2>
              <p className="pt-4 text-2xl">
                If you have any questions about me, my projects or want to
                debate why Steph Curry is the 🐐, please feel free to reach out
                below!
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
                    className="rounded-md border border-slate-200 px-4 py-2 outline-none hover:border-slate-400 focus:border-slate-400"
                    required
                  />
                  <label htmlFor="email" className="sr-only text-sm">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Email"
                    className="rounded-md border border-slate-200 px-4 py-2 outline-none hover:border-slate-400 focus:border-slate-400"
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
                <button className="inline-block self-end rounded-lg bg-slate-500 px-6 py-2 font-bold uppercase text-white hover:bg-slate-700">
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
        </div>
      </footer>
    </div>
  )
}

export default Home
