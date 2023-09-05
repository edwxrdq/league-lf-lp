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

        <div className="left-0 top-0 flex w-full justify-start font-sans text-4xl lg:flex">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                OUR STORY
            </p>
        </div>

        <br></br>

        <div className="left-0 top-0 flex-full justify-left font-sans text-md lg:flex">
            <p className="fixed left-0 top-0 justify-left text-left border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                With intentions of creating a formidable, presentable project to showcase my coding knowledge, my progress here was made possible through the support and encouragement of my co-creator/co-owner, Marjorie (ign: JaeZhou).
                <br></br>
                <br></br>
                This website's purpose is to assist players in their ranked or casual gaming experience. As someone who has played ranked League of Legends for a number of years, there has been countless times where I've preferred to play with a specific champion or playstyle. I want players who use this service to 
                be able to define their champion pools, choose what they're looking for in other players, and establish friendships along the way. Playing alone is definitely a preference,
                but in the creation of lf-lp, it hopefully doesn't have to be. 
            </p>
        </div>

        <br></br>

        <div className="left-0 top-0 flex w-full justify-start font-sans text-4xl lg:flex">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                GAMES WE SUPPORT
            </p>
        </div>

        <br></br>

        <div className="left-0 top-0 flex w-full justify-center font-sans text-3xl lg:flex">
            <p className="fixed w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                <a href="https://www.leagueoflegends.com/en-us/" target="_blank">
                    <img
                        src="/LeagueLogo.png"
                        alt="League Picture"
                        className="lg:rounded-xl border-b border-gray-300"
                        width={1200}
                        height={529}
                    />
                </a>
            </p>
        </div>
        
    </main>
  )

}

export default Playground;

