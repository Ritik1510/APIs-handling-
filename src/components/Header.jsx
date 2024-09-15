import React from 'react'
import {
   BrowserRouter as Router,
   Route,
   Routes,
   NavLink,
} from 'react-router-dom';

function Header() {
   return (
      <>
         <header className='h-20 w-screen bg-[#0098D3] grid px-4'>
            <div>
               <p className='text-[#fff] inline-block no-underline text-lg'>Find post offices details of any area by just bit of information!</p>
            </div>
         </header>
         <div className='flex
          justify-center items-center'>
            <nav className='border-2 border-red-500 p-[1.5px] rounded-md w-1/2 block'>
               <ul className='flex justify-between items-center'>
                  <li>
                     <NavLink className={() => { }} to="/">Home</NavLink>
                  </li>
                  <li>
                     <NavLink to="/SearchByLocation">Search By Location</NavLink>
                  </li>
                  <li>
                     <NavLink to="/SearchByPC">Search By Pincode</NavLink>
                  </li>
                  <li>
                     <NavLink to="/SearchByPostOffice">Search By Post Office</NavLink>
                  </li>
               </ul>
            </nav>
         </div>
      </>
   )
}

export default Header