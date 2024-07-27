import React from 'react'
import SearchByPC from '../SearchByPC'
import SearchByLocation from '../SearchByLocation'
import SearchByPostOffice from '../SearchByPostOffice'
import {
   BrowserRouter as Router,
   Route,
   Routes,
   Link,
   NavLink
 } from 'react-router-dom';

function Header() {
   return (
      <>
         <header className='h-20 w-screen bg-[#0098D3] grid px-4'>
            <div>
               <p className='text-[#fff] inline-block no-underline text-lg'>Find post offices of any area by just typing code of city!</p>
            </div>
            <nav>
               <ul className='flex justify-between items-center'>
                  <li>
                     <Link to="/SearchByLocation">Search By Location</Link>
                  </li>
                  <li>
                     <Link to="/SearchByPC">Search By Pincode</Link>
                  </li>
                  <li>
                     <Link to="/SearchByPostOffice">Search By Post Office</Link>
                  </li>
                  <li>
                     <NavLink className={() => {}} to="/Home">Home</NavLink>
                  </li>
               </ul>
            </nav>
         </header>
      </>
   )
}

export default Header