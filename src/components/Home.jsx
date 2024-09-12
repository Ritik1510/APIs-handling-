import React from 'react'

function Home({tabName}) {
  return (
    <>
      <div className='grid place-content-center'>
        <div className='flex justify-center items-center'>
          <p className='text-2xl'>Sorry!!</p>
        </div>
        <div className='flex justify-center items-center'>
          <p className='text-2xl'>At {tabName} - This page is under construction...</p>
        </div>
      </div>
    </>
  )
}

export default Home