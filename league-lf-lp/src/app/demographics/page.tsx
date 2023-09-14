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
              Your Profile
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-sans text-red-200">
                - users can set parameters here, which will then populate onto the /players-available page -
            </p>
        </div>

        note:<br></br>
        looking to just create a dropdown/fill out form where people just fill out yk, ign/role/rank etc.
        <br></br> after doing so it should populate onto the other page where they can link their account
        <br></br> think this makes sense and would cut down the work by half
        <br></br> <br></br> // https://www.linkedin.com/pulse/building-form-react-typescript-khaled-bellal-
        
    </div>
    </main>
  )
}

export default Playground;
