import Image from 'next/image';

export default function navbarPage() {
    return (
<main className="flex min-h-screen flex-col items-center justify-between p-24">

    <header>
        <button>
            <a href="/" class="mt-20 mb-3 text-2xl font-bold hover:text-red-200">LFLP.GG</a> 
        </button>
    </header>

    <div>
            <p className="italic flex w-full justify-between text-red200 lg:text-lefttext-4xl">
            <a>Players Available</a> 
            </p>
            <br></br>
            <div class="items-center border-2 border-white focus:outline-none">
                <div class="flex justify-center text-center bg-gray-850 rounded-t">
                <div class="text-3xs font-normal text-gray-200 bg-gray-850 py-2 px-2.5 whitespace-nowrap w-44 rounded-tl text-center first:text-center">Summoner Name</div>
                <div class="text-3xs font-normal text-gray-200 bg-gray-850 py-2 px-2.5 whitespace-nowrap w-[66px] text-center first:text-center">Position</div>
                <div class="text-3xs font-normal text-gray-200 bg-gray-850 py-2 px-2.5 whitespace-nowrap w-[66px] text-center first:text-center">Tier</div>
                <div class="text-3xs font-normal text-gray-200 bg-gray-850 py-2 px-2.5 whitespace-nowrap w-[82px] text-center first:text-center">Looking for</div>
                <div class="text-3xs font-normal text-gray-200 bg-gray-850 py-2 px-2.5 whitespace-nowrap w-40 text-center first:text-center">WinRate</div>
                <div class="text-3xs font-normal text-gray-200 bg-gray-850 py-2 px-2.5 whitespace-nowrap w-24 text-center first:text-center">KDA</div>
                <div class="w-8"></div>
            </div>
        </div>
    </div>

{/* for dropdown: https://www.youtube.com/watch?v=ZT5vwF6Ooig&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=16&ab_channel=AdamWathan */}


</main>
)
}