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

        <div className="left-0 top-0 flex w-full justify-start font-sans text-4xl lg:flex">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                OUR STORY
            </p>
        </div>

        <br></br>

        <div className="left-0 top-0 flex-full justify-left font-sans text-md lg:flex">
            <p className="fixed left-0 top-0 justify-left text-left border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                LfLp's purpose is to enhance a player's experience in their ranked or casual games of league. As someone who has played ranked League of Legends for numerous seasons, there has been countless times where synergy lacks in lobbies due to an incompatibility with certain champions or playstyles. Though I
                understand that this is a part of <i>peak</i> League of Legends gaming, I want players who use this service to be able to define their champion pools and specify what they're looking for in others, all while having fun in a norms or gaining lp in a ranked game. 
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
        
        <br></br>

        <div className="left-0 top-0 flex w-full justify-start font-sans text-4xl lg:flex">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                ABOUT US
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
                    Peaking in Masters S10, I now sit in Diamond with a lack of motivation to grind for higher elo. I've played different roles over my seasons but have found most of my success in ad or support. These days I usually
                    play casually with friends or other games like Minecraft!
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
                    I originally started this game as an ADC main, but have learned to play other roles due to many ADCs in our friend group.
                
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

