import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img  className="h-20 w-20 border-none " src={logo} alt='logo'  />
          <span className="text-white ml-3 text-2xl text-bold">RS.</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:decoration-white	flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-white">Home</a>
          <a className="mr-5 hover:text-white">About</a>
          <a className="mr-5 hover:text-white">Services</a>
          <a className="mr-5 hover:text-white">Recherche</a>
        </nav>  
        <button className="bg-primary border-primary border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-[#00df9a]  hover:border-[#00df9a] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-[#00df9a] active:border-[#00df9a]">
          login in
        </button>
      </div>
    </header>

  )
}

export default Navbar