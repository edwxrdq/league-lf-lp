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
                        <a href="#" className="block mt-1 px-2 py-1 font-semibold rounded hover:bg-gray-800">LINK 1</a>
                        <a href="/" className="block mt-1 px-2 py-1 font-semibold rounded hover:bg-gray-800">LINK 2</a>
                    </button>
                </li>
            </ul>
            ) : <div></div>}
        </div>

        <br></br>

        <div>
            <p className="italic flex w-full justify-between text-red200 lg:text-lefttext-4xl">
                <a>Players Available</a> 
            </p>

            <br></br>

            <div className="items-center border-2 border-white focus:outline-none">
                <div className="flex justify-center text-center bg-gray-850 rounded-t">
                    <div className="text-3xs font-normal text-gray-200 bg-gray-850 py-2 px-2.5 whitespace-nowrap w-44 rounded-tl text-center first:text-center">Summoner Name</div>
                    <div className="text-3xs font-normal text-gray-200 bg-gray-850 py-2 px-2.5 whitespace-nowrap w-[66px] text-center first:text-center">Position</div>
                    <div className="text-3xs font-normal text-gray-200 bg-gray-850 py-2 px-2.5 whitespace-nowrap w-[66px] text-center first:text-center">Tier</div>
                    <div className="text-3xs font-normal text-gray-200 bg-gray-850 py-2 px-2.5 whitespace-nowrap w-[82px] text-center first:text-center">Looking for</div>
                    <div className="text-3xs font-normal text-gray-200 bg-gray-850 py-2 px-2.5 whitespace-nowrap w-40 text-center first:text-center">WinRate</div>
                    <div className="text-3xs font-normal text-gray-200 bg-gray-850 py-2 px-2.5 whitespace-nowrap w-24 text-center first:text-center">KDA</div>
                    <div className="w-8"></div>
                </div>
            </div>
        </div>

    </main>
  )

}

export default Playground;
