import React from 'react'

const Header = () => {
  return ( 
    <header class="container text-gray-400  body-font mycolor">
  <div class=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
  
      <span class="ml-3 text-xl text-gray-400  ">To Do </span>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-white">Add Todo</a>
      <a class="mr-5 hover:text-white">Edit Todo</a>
      <a class="mr-5 hover:text-white">Delete Todo</a>
      <a class="mr-5 hover:text-white">View Todo</a>
    </nav>

  </div>
</header>
  )
}

export default Header