import React from 'react'
import {
   BrowserRouter as Router,
   NavLink,
} from 'react-router-dom';

function Header() {
   return (
      <>
         <header className='h-20 w-screen bg-[#0098D3] grid px-4 mb-1'>
            <div>
               <p className='text-[#fff] inline-block no-underline text-lg'>Find post offices details of any area by just bit of information!</p>
            </div>
         </header>
         <div className='flex justify-start items-start w-screen border-solid border-[1px] rounded-lg border-stone-500'>
            <nav className=''>
               <ul className='flex justify-between items-center gap-8 p-2'>
                  <li>
                    <span className=''><NavLink className={() => { }} to="/">Home</NavLink></span>
                  </li>
                  <li>
                     <span className=''><NavLink to="/SearchByLocation">Search By Location</NavLink></span>
                  </li>
                  <li>
                     <span className=''><NavLink to="/SearchByPC">Search By Pincode</NavLink></span>
                  </li>
                  <li>
                     <span className=''><NavLink to="/SearchByPostOffice">Search By Post Office</NavLink></span>
                  </li>
               </ul>
            </nav>
         </div>
      </>
   )
}

export default Header