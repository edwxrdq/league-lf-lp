import Image from 'next/image';

export default function aboutPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="left-0 top-0 flex w-full justify-start font-mono text-4xl lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Hey! Looking for us?
                </p>
            </div>

            <div className="right-0 flex w-full justify-end font-mono text-3xl lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Edward
                </p>
            </div>

            <div className="left-0 top-0 flex w-full justify-start font-mono text-3xl lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Marjorie
                </p>
            </div>

            <div className="left-0 top-0 flex w-full justify-start font-mono text-3xl lg:flex">
                <Image
                    src="/MarjPic.JPG"
                    alt="Marj Picture"
                    className="lg:rounded-xl border-b border-gray-300"
                    width={300}
                    height={24}
                />
            </div>

            <div className="left-0 top-0 flex w-full justify-start font-mono text-md lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Not the best player out there, but I love to meet new people through the game and have fun! 
                    I originally started this game as an ADC main, but have learned to play other lanes due to having too many ADCs in our friend group :>
                </p>
            </div>

            <div className="left-0 top-0 flex w-full justify-start font-mono text-md lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    My favorite champs at the moment are Tahm Kench, Samira, and Zeri!
                </p>
            </div>
            {/* <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-4xl lg:flex">
                <div>
                    <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                        Hey! Looking for us?
                    </p>
                </div>
                <div>
                    <p className="fixed top-0 flex w-full justify-end border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                        Edward
                    </p>
                </div>
            </div> */}
        </main>
    )
}

/**
 * <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-3xl lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Hi! Looking for us?
                </p>
            </div>

            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-3xl lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Edward
                </p>
            </div>

            <div className="z-10 max-w-5xl w-full justify-between font-mono text-3xl lg:flex">
                <div>
                    <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 padding-bottom: 20px">
                        <p>
                            Marjorie
                        </p>
                    </div>
                    
                    <Image
                        src="/MarjPic.JPG"
                        alt="Marjorie Pic"
                        className="padding-top: 20px"
                        width={300}
                        height={300}
                        priority
                    />
                </div>
            </div>
 */