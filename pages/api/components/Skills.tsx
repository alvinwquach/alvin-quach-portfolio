import React from 'react'
import { ReactElement } from 'react'
import {
  faCogs,
  faMobileAlt,
  faTerminal,
  faUniversalAccess,
} from '@fortawesome/free-solid-svg-icons'
import {
  faCss3,
  faHtml5,
  faReact,
  faSass,
  faFigma,
} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Skills() {
  return (
    <section className="bg-gray-50 px-8 pt-20 shadow-lg" id="skills">
      <div className="wrapper">
        <h2 className="text-4xl font-bold text-gray-800">Skills</h2>
        <ul className="flex flex-wrap items-center justify-center">
          <li className="mx-12 my-8 flex w-40 flex-col items-center">
            <FontAwesomeIcon
              icon={faHtml5}
              className="fa-5x"
              aria-hidden="true"
            />
            <p className="w-4/5 text-center text-base">HTML5</p>
          </li>
          <li className="mx-12 my-8 flex w-40 flex-col items-center">
            <FontAwesomeIcon
              icon={faCss3}
              className="fa-5x"
              aria-hidden="true"
            />
            <p className="w-4/5 text-center text-base">CSS3</p>
          </li>
          <li className="mx-12 my-8 flex w-40 flex-col items-center">
            <FontAwesomeIcon
              icon={faSass}
              className="fa-5x"
              aria-hidden="true"
            />
            <p className="w-4/5 text-center text-base">Sass</p>
          </li>
          <li className="mx-12 my-8 flex w-40 flex-col items-center">
            <i className="devicon-tailwindcss-plain fa-5x"></i>
            <p className="w-4/5 text-center text-base">TailwindCSS</p>
          </li>
          <li className="mx-12 my-8 flex w-40 flex-col items-center">
            <i className="devicon-materialui-plain fa-5x"></i>
            <p className="w-4/5 text-center text-base">MaterialUI</p>
          </li>
          <li className="mx-12 my-8 flex w-40 flex-col items-center">
            <FontAwesomeIcon
              icon={faFigma}
              className="fa-5x"
              aria-hidden="true"
            />
            <p className="w-4/5 text-center text-base">Figma</p>
          </li>
          <li className="mx-12 my-8 flex w-40 flex-col items-center">
            <i className="devicon-javascript-plain fa-5x"></i>
            <p className="w-4/5 text-center text-base">JavaScript</p>
          </li>
          <li className="mx-12 my-8 flex w-40 flex-col items-center">
            <i className="devicon-typescript-plain fa-5x"></i>
            <p className="w-4/5 text-center text-base">TypeScript</p>
          </li>
          <li className="mx-12 my-8 flex w-40 flex-col items-center">
            <FontAwesomeIcon
              icon={faReact}
              className="fa-5x"
              aria-hidden="true"
            />
            <p className="w-4/5 text-center text-base">React</p>
          </li>
          <li className="mx-12 my-8 flex w-40 flex-col items-center">
            <i className="devicon-nextjs-plain-wordmark colored fa-5x"></i>
            <p className="w-4/5 text-center text-base">NextJS</p>
          </li>
          <li className="mx-12 my-8 flex w-40 flex-col items-center">
            <i className="devicon-git-plain fa-5x"></i>
            <p className="w-4/5 text-center text-base">Git</p>
          </li>
          <li className="mx-12 my-8 flex w-40 flex-col items-center">
            <FontAwesomeIcon
              icon={faTerminal}
              className="fa-5x"
              aria-hidden="true"
            />
            <p className="w-4/5 text-center text-base">Command Line</p>
          </li>
          <li className="mx-12 my-8 flex w-40 flex-col items-center">
            <i className="devicon-firebase-plain fa-5x"></i>
            <p className="w-4/5 text-center text-base">Firebase</p>
          </li>
          <li className="mx-12 my-8 flex w-40 flex-col items-center">
            <FontAwesomeIcon
              className="fa-5x"
              icon={faCogs}
              aria-hidden="true"
            />
            <p className="w-4/5 text-center text-base">RESTful APIs</p>
          </li>
          <li className="mx-12 my-8 flex w-40 flex-col items-center">
            <i className="devicon-graphql-plain fa-5x"></i>
            <p className="w-4/5 text-center text-base">GraphQL</p>
          </li>
          <li className="mx-12 my-8 flex w-40 flex-col items-center">
            <i className="devicon-jest-plain fa-5x"></i>
            <p className="w-4/5 text-center text-base">Jest</p>
          </li>
          <li className="mx-12 my-8 flex w-40 flex-col items-center">
            <i className="devicon-storybook-plain fa-5x"></i>
            <p className="w-4/5 text-center text-base">Storybook</p>
          </li>
          <li className="mx-12 my-8 flex w-40 flex-col items-center">
            <FontAwesomeIcon
              icon={faMobileAlt}
              className="fa-5x"
              aria-hidden="true"
            />
            <p className="w-4/5 text-center text-base">Responsive Design</p>
          </li>
          <li className="mx-12 my-8 flex w-40 flex-col items-center">
            <FontAwesomeIcon
              icon={faUniversalAccess}
              className="fa-5x"
              aria-hidden="true"
            />
            <p className="w-4/5 text-center text-base">Web Accessibility</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Skills
