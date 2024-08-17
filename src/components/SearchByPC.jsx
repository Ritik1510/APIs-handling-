import React, { useState, useContext } from 'react'
import PostalDetContext from '../context/PostDetContext'
import PostOfficeTable from './PostOfficeTable';
import PostalDetContextProvider from '../context/postalDetContextProvider';

function SearchByPC({ sendInputValueFromState }) {
   const [ inputValue, setInputValue ] = useState('');
   const { fetchPostOffDetails } = useContext(PostalDetContext)

   const handleChange = (event) => {
      const value = event.target.value
      setInputValue(value);
      sendInputValueFromState(value);
   };

   return (
      <PostalDetContextProvider>
         <div className='flex justify-center items-center'>
            <p>
               <a className='text-2xl' href='#'>Search Post Office Details By PIN Code</a>
            </p>
         </div>
         <div className='flex justify-center gap-2'>
            <div className='flex justify-center items-center'>
               <PostOfficeTable />
            </div>
            <div className='flex justify-center items-center border-2'>
               <label>
                  Enter:
                  <input
                     type='number'
                     value={inputValue}
                     onChange={handleChange}
                     placeholder='Pincode'
                  />
               </label>
               <button className='border-2' onClick={fetchPostOffDetails}>Search</button>
            </div>
         </div>
      </PostalDetContextProvider>
   )
}

export default SearchByPC