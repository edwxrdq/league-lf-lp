export default function playground() {
    return (

        // to change background color, add "ex: bg-gray-300"
        <main className=" flex min-h-screen flex-col items-center justify-between p-24">
            <div className="left-0 top-0 flex w-full justify-start font-mono text-4xl lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    PLAYGROUND
                </p>
            </div>

            <div class="relative">
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
            </div>
   

        </main>


    )

    // https://tailwindui.com/components/application-ui/elements/dropdowns
}

{/* <template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        Options
        <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
      </MenuButton>
    </div>

    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Account settings</a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Support</a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">License</a>
          </MenuItem>
          <form method="POST" action="#">
            <MenuItem v-slot="{ active }">
              <button type="submit" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block w-full px-4 py-2 text-left text-sm']">Sign out</button>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
</script> */}