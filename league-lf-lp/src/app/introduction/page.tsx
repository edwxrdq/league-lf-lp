import Image from 'next/image';

export default function aboutPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="left-0 top-0 flex w-full justify-start font-sans text-4xl lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    OUR STORY
                </p>
            </div>

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

            <div className="left-0 top-0 flex w-full justify-center font-sans text-3xl lg:flex">
                <Image
                    src="/LeagueLogo.png"
                    alt="League Picture"
                    className="lg:rounded-xl border-b border-gray-300"
                    width={1200}
                    height={529}
                />
            </div>

        </main>
    )
}