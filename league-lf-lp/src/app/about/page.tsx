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
                LOOKING FOR US?
            </p>
        </div>


        <div className="flex flex-col items-center justify-between p-12">
            <div className="left-0 top-0 flex w-full justify-center font-sans text-3xl lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <button class="left-0 top-0 flex w-full justify-center font-sans text-3xl lg:flex">
                        <a class="hover:text-red-200" href="https://www.op.gg/summoners/na/solara">Edward</a>
                    </button>
                </p>
            </div>
            
            <div className="left-0 top-0 flex w-full justify-center font-sans text-3xl lg:flex">
                <img
                    src="/EdwardPic.JPG"
                    alt="Edward Picture"
                    className="lg:rounded-xl border-b border-gray-300"
                    width={300}
                    height={24}
                />
            </div>

            <div className="left-0 top-0 flex w-1/2 justify-center font-sans text-md lg:flex">
                <p className="fixed left-0 top-0 flex w-1/2 justify-center text-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    With several years invested in this game, I've played in different roles but found most of my success and enjoyment in either ad or support. Peaking in Masters, I now hover around Diamond with a lack of motivation to maintain a grind for the game and usually
                    just play with friends! Some things are better with the companionship of others; whether it be winning or losing, finding your person(s) to play with is the idea that inspired the creation of this project.
                </p>
            </div>
        </div>

        <div className="flex flex-col items-center justify-between p-12">
            <div className="left-0 top-0 flex w-full justify-center font-sans text-3xl lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <button class="left-0 top-0 flex w-full justify-center font-sans text-3xl lg:flex">
                        <a class="hover:text-red-200" href="https://www.op.gg/summoners/na/JaeZhou">Marjorie</a>
                    </button>
                </p>
            </div>

            <div className="left-0 top-0 flex w-full justify-center font-sans text-3xl lg:flex">
                <img
                    src="/MarjPic.JPG"
                    alt="Marj Picture"
                    className="lg:rounded-xl border-b border-gray-300"
                    width={300}
                    height={24}
                />
            </div>

            <div className="left-0 top-0 flex w-1/2 justify-center font-sans text-md lg:flex">
                <p className="fixed left-0 top-0 flex w-1/2 justify-center text-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Not the best player out there, but I love to meet new people through the game and have fun! 
                    I originally started this game as an ADC main, but have learned to play other lanes due to having too many ADCs in our friend group :>
                
                <br></br>
                <br></br>
                
                    My favorite champs at the moment are Tahm Kench, Samira, and Zeri!
                </p>
            </div>
        </div>

    </main>
  )

}

export default Playground;