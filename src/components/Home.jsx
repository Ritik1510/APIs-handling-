import React from 'react'

function Home({tabName}) {
  return (
    <section>
      <div className='grid place-content-center'>
        <div className='flex justify-center items-center'>
          <p className='text-2xl'>Sorry!!</p>
        </div>
        <div className='flex justify-center items-center'>
          <p className='text-2xl'>At {tabName} - This page is under construction...</p>
        </div>
      </div>
    </section>
  )
}

export default Home