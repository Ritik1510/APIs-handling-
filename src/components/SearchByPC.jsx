import React, { useState, useContext } from 'react'
import PostalDetContext from '../context/PostDetContext'

function SearchByPC({ fetchFncProp, sendInputValueFromState }) {
   const [ inputValue, setInputValue ] = useState('');

   const handleChange = (event) => {
      const value = event.target.value
      setInputValue(value);
      sendInputValueFromState(value);
   };

   return (
      <PostalDetContext.Provider value={{ inputValue }}>
         <div>
            <p>
               <a className='text-2xl' href='#'>Search Post Office Details By PIN Code</a>
            </p>
         </div>
         <div className='grid place-content-start top-0 left-1/2 border-2 box-border h-screen w-auto'>
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

      </PostalDetContext.Provider>
   )
}

export default SearchByPC