import React, { useState, useContext, useEffect } from 'react'
import PostalDetContext from '../context/PostDetContext'
import PostOfficeTable from './PostOfficeTable';
import PostalDetContextProvider from '../context/postalDetContextProvider';

function SearchByPC() {
   const [ inputValue, setInput ] = useState('');
   const { fetchPostOffDetails, setInputValue } = useContext(PostalDetContext)

   const handleChange = (event) => {
      const value = event.target.value
      setInputValue(value);
      setInput(value);
   };

   return (
      <PostalDetContextProvider>
         <div className='grid'>
            <div className='inline-block'>
               <div className='flex justify-center items-center'>
                  <p>
                     <a className='text-2xl' href='#'>Search Post Office Details By PIN Code</a>
                  </p>
               </div>
               <div className='grid, place-content-cente'>
                  <div className='flex justify-center items-center border-2'>
                     <div>
                        <label>
                           Enter:
                           <input
                              type='number'
                              value={inputValue}
                              onChange={handleChange}
                              placeholder='Pincode'
                           />
                        </label>
                     </div>
                     <div>
                        <button className='border-2' onClick={fetchPostOffDetails}>Search</button>
                     </div>
                  </div>
                  <div className='flex justify-center items-center'>
                     <PostOfficeTable />
                  </div>
               </div>
            </div>
         </div>
      </PostalDetContextProvider>
   )
}

export default SearchByPC