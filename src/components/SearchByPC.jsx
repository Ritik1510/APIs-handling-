import React, { useState, useContext, useEffect } from 'react'
import PostalDetContext from '../context/PostDetContext'
import PostOfficeTable from './PostOfficeTable';
import PostalDetContextProvider from '../context/postalDetContextProvider';

function SearchByPC({ tabName }) {
   const [ inputValue, setInput ] = useState('');
   const { fetchPostOffDetails, setInputValue, noOfPostOff, loading } = useContext(PostalDetContext)

   const handleChange = (event) => {
      const value = event.target.value
      setInputValue(value);
      setInput(value);
   };

   return (
      <PostalDetContextProvider>
         <section className='min-h-screen'>
            <div className='grid'>
               <div className='flex justify-center items-center p-4'>
                  <p>
                     <a className='text-2xl decoration-sky-200' href='#'>Search Post Office Details By PIN Code</a>
                  </p>
               </div>
               <div className='grid place-content-center gap-3'>
                  <div className='flex justify-center items-center gap-4'>
                     <div className=''>
                        <input
                           type='number'
                           id='pincodeInput'
                           className='border-solid border-[1px] rounded-lg border-stone-500 px-1'
                           name='pincodeInput'
                           value={inputValue}
                           onChange={handleChange}
                           placeholder='Pincode'
                        />
                     </div>
                     <div>
                        <button className="border-solid border-[1px] rounded-lg border-stone-500 px-1" onClick={fetchPostOffDetails}>Search</button>
                     </div>
                  </div>
                  <div className='flex justify-center items-center border-solid border-[1px] rounded-lg border-stone-500 p-3'>
                     {loading ? // Render the spinner when loading
                        <div className="flex justify-center items-center h-24 w-25">
                           <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-stone-500"></div>
                        </div> : <PostOfficeTable noOfPostOff={noOfPostOff} />
                     }
                  </div>
               </div>
            </div>
         </section>

      </PostalDetContextProvider>
   )
}

export default SearchByPC