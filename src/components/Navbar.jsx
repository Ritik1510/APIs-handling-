import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-start items-center gap-4 text-[#fff]'>
      <div><a href='#'>Search By Location</a></div>
      <div><a href='#'>Search By Pincode</a></div>
      <div><a href='#'>Search By Post Office</a></div>
      <div><a href='#'>GitHub</a></div>
    </div>
  )
}

export default Navbar