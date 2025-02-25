import React from 'react'

function Home({tabName}) {
  return (
    <section>
      <div className='grid place-content-center'>
        <div className='flex justify-center items-center'>
          <p className='text-2xl'>Sorry!!</p>
        </div>
        <div className='grid'>
          <p className='text-2xl'>At {tabName} - This page is under construction...</p>
          <p className='text-base'>Before using the other components you should make sure about your internet connections, It should be good.</p>
        </div>
      </div>
    </section>
  )
}

export default Home