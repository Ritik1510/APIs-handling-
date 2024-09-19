import React from 'react'
import {
   BrowserRouter as Router,
   NavLink,
} from 'react-router-dom';

function Header() {
   return (
      <>
         <header className='h-20 bg-[#0098D3] grid px-4 mb-1'>
            <div>
               <p className='text-[#fff] inline-block no-underline text-lg'>Find post offices details of any area by just bit of information!</p>
            </div>
         </header>
         <section className='sticky top-0 backdrop-blur-md w-auto'>
            <div className='flex justify-start items-start w-auto border-solid border-[1px] rounded-lg border-stone-500 '>
               <nav className=''>
                  <ul className='flex justify-between items-center gap-8 p-2'>
                     <li>
                        <NavLink className={({ isActive }) => `${isActive ? "text-orange-700 underline-offset-1" : "text-inherit"}`} to="/">Home</NavLink>
                     </li>
                     <li>
                        <NavLink className={({ isActive }) => `${isActive ? "text-orange-700 underline-offset-1" : "text-inherit"}`} to="/SearchByLocation">Search By Location</NavLink>
                     </li>
                     <li>
                        <NavLink className={({ isActive }) => `${isActive ? "text-orange-700 underline-offset-1" : "text-inherit"}`} to="/SearchByPC">Search By Pincode</NavLink>
                     </li>
                     <li>
                        <NavLink className={({ isActive }) => `${isActive ? "text-orange-700 underline-offset-1" : "text-inherit"}`} to="/SearchByPostOffice">Search By Post Office</NavLink>
                     </li>
                  </ul>
               </nav>
            </div>
         </section>
      </>
   )
}

export default Header