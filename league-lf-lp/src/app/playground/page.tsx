export default function playground() {
    return (

        // to change background color, add "ex: bg-gray-300"
    <main>
      {/* <div className="left-0 top-0 flex w-full justify-start font-mono text-4xl lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          PLAYGROUND
        </p>
      </div> */}


      <header class="bg-gray-900">

        <div class="flex items-center justify-between px-4 py-3">
          <div>
            <p class="h-8 font-bold text-white text-4xl">
              <a>LFLP.GG</a> 
            </p>
          </div>

          <div class="px-4 pt-2 pb-4">
            <button type="button" class="block text-white focus:text-white hover:text-gray-300 focus:outline-none">
              <svg class="h-6 w-6"></svg><b>=</b>
            </button>
          </div>
        </div>

        {/* <div :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4"> */}

        <div class="px-2 pt-2 pb-4">
          <a href="#" class="block mt-1 px-2 py-1 text-red font-semibold rounded hover:bg-gray-800">LINK 1</a>
          <a href="#" class="block mt-1 px-2 py-1 text-red font-semibold rounded hover:bg-gray-800">LINK 2</a>
          <a href="#" class="block mt-1 px-2 py-1 text-red font-semibold rounded hover:bg-gray-800">LINK 3</a>
        </div>
        

      </header>














{/* in order to round border: rounded-full */}
{/* amazing gap in between for whatever reason */}
    {/* <div class="items-center border-2 border-white focus:outline-none">
        <div class="flex justify-center text-center bg-gray-850 rounded-t">
          <div class="text-3xs font-normal text-gray-200 bg-gray-850 py-2 px-2.5 whitespace-nowrap w-44 rounded-tl text-center first:text-center">Summoner Name</div>
          <div class="text-3xs font-normal text-gray-200 bg-gray-850 py-2 px-2.5 whitespace-nowrap w-[66px] text-center first:text-center">Position</div>
          <div class="text-3xs font-normal text-gray-200 bg-gray-850 py-2 px-2.5 whitespace-nowrap w-[66px] text-center first:text-center">Tier</div>
          <div class="text-3xs font-normal text-gray-200 bg-gray-850 py-2 px-2.5 whitespace-nowrap w-[82px] text-center first:text-center">Looking for</div>
          <div class="text-3xs font-normal text-gray-200 bg-gray-850 py-2 px-2.5 whitespace-nowrap w-40 text-center first:text-center">WinRate</div>
          <div class="text-3xs font-normal text-gray-200 bg-gray-850 py-2 px-2.5 whitespace-nowrap w-24 text-center first:text-center">KDA</div>
          <div class="w-8"></div>
        </div>
    </div> */}



      {/* <div class="relative">
          <button class="block h-20 w-20">
              <img class="h-full w-full object-cover rounded-full overflow-hidden border-2 border-blue-500 focus:outline-none focus:border-white" 
                  src="/EdwardPic.JPG"
                  alt="Edward Picture"
                  className="lg:rounded-xl border-b border-gray-300"
                  width={300}
                  height={24}
              />
          </button>
          <div v-if="isOpen" class="absolute right-4 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
              <a href="#"class="block px-4 py-2 text-gray-800 hover:bg-blue-200 hover:text-white"> Account settings</a>
              <a href="#"class="block px-4 py-2 text-gray-800 hover:bg-blue-200 hover:text-white"> Support</a>
              <a href="#"class="block px-4 py-2 text-gray-800 hover:bg-blue-200 hover:text-white"> Sign out</a>
          </div>
      </div> */}


      {/* { <script>
        export default {
          data() {
            return {
              isOpen: false,
            }
          }
        }
      </script> } */}
      


        </main>



    )

    // https://tailwindui.com/components/application-ui/elements/dropdowns


    // ~ 7 min, unable to figure out the function portion and running into errors with main
      // here's logic portion, it's just commented out above in a div class:
      // {/* <div :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4"> */}
    // https://www.youtube.com/watch?v=5mFGl566wc0&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=17&ab_channel=AdamWathan
}