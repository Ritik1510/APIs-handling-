import React, { useContext } from 'react'
import PostOfficeTable from './PostOfficeTable'
import PostalDetContext from '../context/PostDetContext'

function SearchByLocation({ tabName }) {
  const { noOfPostOff } = useContext(PostalDetContext)
  return (
    <>
      {noOfPostOff ? <section className='grid w-auto min-h-screen'>
        <div className='flex justify-center items-center'>
          <p className='text-2xl'>At {tabName} - This page is under construction...</p>
        </div>
        <div className='flex justify-center items-center'>
          <PostOfficeTable noOfPostOff={noOfPostOff} />
        </div>
      </section> : <section className='grid place-content-center'>
        <div className='flex justify-center items-center'>
          <p className='text-2xl'>Sorry!!</p>
        </div>
        <div className='flex justify-center items-center'>
          <p className='text-2xl'>At {tabName} - This page is under construction...</p>
        </div>
      </section>}
    </>
  )
}

export default SearchByLocation