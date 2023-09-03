import Image from 'next/image';

export default function aboutPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            
            <header>
                <button>
                <a href="/" class="mt-20 mb-3 text-2xl font-bold hover:text-red-200">LFLP.GG</a> 
                </button>
            </header>

            <div className="left-0 top-0 flex w-full justify-start font-mono text-3xl lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Hey! Looking for us?
                </p>
            </div>

            <br></br>

            <div className="left-0 top-0 flex w-full justify-center font-sans text-3xl lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <button class="left-0 top-0 flex w-full justify-center font-sans text-3xl lg:flex">
                    {/* if want to add color on hover to button: "hover:bg-blue-200", issue is doesn't fill the whole button */}
                    <a class="hover:text-red-200" href="https://www.op.gg/summoners/na/solara">Edward</a>
                    </button>
                </p>
            </div>
            
            <div className="left-0 top-0 flex w-full justify-center font-sans text-3xl lg:flex">
                <Image
                    src="/EdwardPic.JPG"
                    alt="Edward Picture"
                    className="lg:rounded-xl border-b border-gray-300"
                    width={300}
                    height={24}
                />
            </div>

            <div className="left-0 top-0 flex w-1/2 justify-center font-sans text-md lg:flex">
                <p className="fixed left-0 top-0 flex w-1/2 justify-center text-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    With several years committed to this hell called League of Legends, I've played in different roles but found most of my success and enjoyment in either ad or support. Peaking in Masters, I now hover around Diamond with a lack of motivation to maintain a grind for the game and usually
                    just play with friends! Some things are better with the companionship of others; whether it be winning or losing, finding your person(s) to play with is the idea that inspired the creation of this project.
                </p>
            </div>

            <br></br>
            <br></br>

            <div>

            </div>

            <div className="left-0 top-0 flex w-full justify-center font-sans text-3xl lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <button class="left-0 top-0 flex w-full justify-center font-sans text-3xl lg:flex">
                    <a class="hover:text-red-200" href="https://www.op.gg/summoners/na/JaeZhou">Marjorie</a>
                    </button>
                </p>
            </div>

            <div className="left-0 top-0 flex w-full justify-center font-sans text-3xl lg:flex">
                <Image
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

        </main>
    )
}