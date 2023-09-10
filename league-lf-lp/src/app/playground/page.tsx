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
            <p className="h-8 font-bold text-white text-4xl">
              <a href="/">LFLP.GG</a>
            </p>
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
                <a href="/about" className="block mt-1 px-2 py-1 font-semibold rounded hover:bg-gray-800">ABOUT US</a>
                <a href="/" className="block mt-1 px-2 py-1 font-semibold rounded hover:bg-gray-800">HOME PAGE CHUPAPI MUNYANYO</a>
              </button>
            </li>
          </ul>
        ) : <div></div>}
      </div>

      <header className="bg-red-900">
        <div>
              <div className="items-center border-2 border-white focus:outline-none">
                  <div className="flex justify-between text-center bg-gray-850 rounded-t">
                      <button type="button" onClick={handleOpen} className="text-3xs font-normal text-gray-200 bg-gray-850 py-2 px-2.5 whitespace-nowrap w-44 rounded-tl text-center first:text-center">Summoner Name</button>
                      <button className="text-3xs font-normal text-gray-200 bg-gray-850 py-2 px-2.5 whitespace-nowrap w-[66px] text-center first:text-center">Position</button>
                      <button className="text-3xs font-normal text-gray-200 bg-gray-850 py-2 px-2.5 whitespace-nowrap w-[66px] text-center first:text-center">Tier</button>
                      <button className="text-3xs font-normal text-gray-200 bg-gray-850 py-2 px-2.5 whitespace-nowrap w-[82px] text-center first:text-center">Looking for</button>
                      <button className="text-3xs font-normal text-gray-200 bg-gray-850 py-2 px-2.5 whitespace-nowrap w-40 text-center first:text-center">WinRate</button>
                      <button className="text-3xs font-normal text-gray-200 bg-gray-850 py-2 px-2.5 whitespace-nowrap w-24 text-center first:text-center">KDA</button>
                      <button className="w-8"></button>
                  </div>
              </div>
          </div>

        </header>

<br></br>

        <div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <div className="leading-7 text-sm text-gray-600">
                    Name
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <div className="leading-7 text-sm text-gray-600">
                    Email
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <div className="leading-7 text-sm text-gray-600">
                    Message
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>



    </main>
  )

}

export default Playground;

{/* Line 25 is called a ternary operator. 
                Here is an example of it.
                https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
                Basically it means:
                if handleOpen was set to open, then return a div that has the words "Is Open"
                else, return "Is Closed."

                the onClick function is an element that happens when a user clicks on it
                the handleOpen is the function's logic, when you click on the button, it will set the "open" variable
                in line 7 to the opposite of what it is currently
                
                In line 7, we set the open variable to false,
                the first time the button is clicked - it is set to true, click it again, it will be set back to false.

                Follow this tutorial to finish the rest of the component.
                https://www.robinwieruch.de/react-dropdown/
            */}

  {/* // https://tailwindui.com/components/application-ui/elements/dropdowns


  // ~ 7 min, unable to figure out the function portion and running into errors with main
    // here's logic portion, it's just commented out above in a div class:
    // {/* <div :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4"> */}
  // {/* // https://www.youtube.com/watch?v=5mFGl566wc0&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=17&ab_channel=AdamWathan */} */}
