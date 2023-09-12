'use client'

import * as React from 'react';


const Playground = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  
  return (
    <main>
        <header className="bg-gray-900">
            <div className="flex items-center justify-between px-4 py-3">
                <div>
                    <button>
                        <a href="/" class="mt-20 mb-3 text-2xl font-bold font-size-2xl hover:text-red-200">LFLP.GG</a> 
                    </button>
                </div>

                <div>
                    <button type="button" onClick={handleOpen}>=</button>
                </div>
            </div>
        </header>

        <div className='bg-gray-900 flex items-center justify-end px-4'>
            {open ? (
            <ul className="menu">
                <li className="menu-item ">
                    <button>
                        <a href="/" className="block mt-1 px-2 py-1 font-semibold rounded hover:bg-gray-800">LINK 1</a>
                        <a href="/" className="block mt-1 px-2 py-1 font-semibold rounded hover:bg-gray-800">LINK 2</a>
                    </button>
                </li>
            </ul>
            ) : <div></div>}
        </div>

    <br></br>


    <div>

        <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-sans font-medium title-font mb-4 text-white">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-sans text-red-200">
                - be kind -
            </p>
        </div>

        <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">

                <div className="p-2 w-1/2">
                    <div className="relative font-sans">
                        <div className="leading-7 text-sm text-white">
                        Name
                        </div>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                </div>

                <div className="p-2 w-1/2">
                <div className="relative font-sans">
                    <div className="leading-7 text-sm text-white">
                    Email
                    </div>

                    <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>

                </div>
                <div className="p-2 w-full">
                <div className="relative font-sans">
                    <div className="leading-7 text-sm text-white">
                    Message
                    </div>
                        <textarea
                        id="message"
                        name="message"
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        ></textarea>
                    </div>

                </div>

                <div className="p-2 w-full"> 
                    <button className="flex mx-auto text-white bg-gray-900 border-0 py-2 px-8 font-semibold rounded hover:bg-gray-800 focus:outline-none text-lg">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </div>
    </main>
  )
}

export default Playground;
