import { useRouter } from 'next/router'

export default function Header() {
  return (
    <><nav class="bg-white shadow dark:bg-gray-800">
      <div class="md:container md:mx-auto">
      <div
        class="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center"
      >
        <div class="flex items-center justify-between">
          <div>
            <a
              class="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300"
              href="#"
            >Brand</a>
          </div>


          <div class="flex md:hidden">
            <button
              type="button"
              class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>


        <div class="items-center md:flex">
          <div class="flex flex-col md:flex-row md:mx-6">
            <a
              class="my-1 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
              href="#"
            >Home</a>
            <a
              class="my-1 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
              href="#"
            >Shop</a>
            <a
              class="my-1 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
              href="#"
            >Contact</a>
            <a
              class="my-1 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
              href="/about"
            >About</a>
          </div>

          <div class="flex justify-center md:block">
            <a
              class="relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
              href="#"
            >
              <i class="fas fa-shopping-cart"></i>

              <span
                class="absolute top-0 left-0 p-1 text-xs text-white bg-indigo-500 rounded-full"
              ></span>
            </a>
          </div>
        </div>
      </div>
      </div>
    </nav><div
      class="container w-full p-20 m-4 mx-auto my-16 text-center bg-white border-2 border-gray-300 border-dashed h-96 rounded-xl bg-indigo-200 bg-opacity-25"
    >
        <p class="mt-20 italic text-gray-500 text-md">
          -- Abdulwahed Mansour --
        </p>
        
      </div></>

  )
}


const Link = ({ children, href }) => {
  const router = useRouter()
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault()
        // typically you want to use `next/link` for this usecase
        // but this example shows how you can also access the router
        // and use it manually
        router.push(href)
      }}
    >
      {children}
      <style jsx>{`
        a {
          margin-right: 10px;
        }
      `}</style>
    </a>
  )
}