import React from 'react'

function Contact() {
  return (
    <section
      className="max-w-screen-2xl bg-gray-50 px-8 pt-20 pb-36"
      id="contact"
    >
      <div className="wrapper">
        <div className="text-left">
          <h2 className="text-4xl font-bold text-gray-800">Contact</h2>
          <p className="pt-4 text-2xl dark:text-zinc-800">
            If you have any questions about me, my projects or want to debate
            why Steph Curry is the 🐐, please feel free to reach out below!
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
  )
}

export default Contact
