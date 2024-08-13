import React, { useState, useContext } from 'react'
import PostalDetContext from '../context/PostDetContext'
import PostOfficeTable from './PostOfficeTable';

function SearchByPC({ sendInputValueFromState }) {
   const [ inputValue, setInputValue ] = useState('');
   const { fetchFncProp } = useContext(PostalDetContext)

   const handleChange = (event) => {
      const value = event.target.value
      setInputValue(value);
      sendInputValueFromState(value);
   };

   console.log(Date.now()); 
   return (
      <PostalDetContext.Provider value={{ inputValue }}>
         <div className='flex justify-center items-center'>
            <p>
               <a className='text-2xl' href='#'>Search Post Office Details By PIN Code</a>
            </p>
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
            <button className='border-2' onClick={fetchFncProp}>Search</button>
         </div>
         <div className=''>
            <PostOfficeTable />
         </div>

      </PostalDetContext.Provider>
   )
}

export default SearchByPC