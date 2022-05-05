import React from 'react'
import { faBasketball } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function About() {
  return (
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
          Hey there! I'm Alvin Quach, your friendly neighborhood web developer.
          Prior to web development, I was in Marketing and that's where I fell
          in love with storytelling. I hope to tell more stories through
          accessible code. Here's my{' '}
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
          User experience and accessibility are key to a great user interface
          and I thrive to be able to be able to provide that experience for all.
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
  )
}

export default About
