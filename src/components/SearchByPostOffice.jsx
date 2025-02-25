import React, { useContext } from 'react'
import PostalDetContext from '../context/PostDetContext'
import PostOfficeTable from './PostOfficeTable'


function SearchByPostOffice({tabName}) {
  const {noOfPostOff} = useContext(PostalDetContext); 
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

export default SearchByPostOffice