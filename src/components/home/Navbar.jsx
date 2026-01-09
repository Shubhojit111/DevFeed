import React from 'react'
import { Linkedin, Github, Search } from 'lucide-react'

const Navbar = () => {
  return (
    <div className=' h-16 w-full bg-gray-700 text-white flex items-center justify-between px-10 fixed top-0 left-0 z-10'>
      <div className="logo text-4xl font-semibold italic flex gap-4">
        <div className="logo">
          DevFeeD
        </div>

        <div className="search rounde px-2 hover:border-b-2 hover:border-b-orange-600 active:border-b-orange-600 borde  flex items-center ">
         
          <input type="text"
            placeholder='Search here'
            className=' text-2xl rounded-xl w-50 py-2 outline-none' />

          <div className="searchbtn hover:scale-120 hover:text-red-500 transition">
            <Search />
          </div>

        </div>

      </div>


      <div className="socials flex gap-4">
        <a><Linkedin /></a>
        <a><Github /></a>
      </div>
    </div>
  )
}

export default Navbar
