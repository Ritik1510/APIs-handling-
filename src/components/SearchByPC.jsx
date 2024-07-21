import React, { useState, useContext } from 'react'
import PostalDetContext from '../context/PostDetContext'

function SearchByPC() {
   const [ inputValue, setInputValue ] = useState('');
   // const { fetchPostOffDetails } = useContext(FetchPostalDetFuncContext);

   const handleChange = (event) => {
      setInputValue(event.target.value);
   };

   return (
      <PostalDetContext.Provider value={inputValue}>

         <div>
            <label>
               Input:
               <input type='number'
                  value={inputValue}
                  onChange={handleChange}
               />
            </label>
            {/* <button onClick={fetchPostOffDetails}>Get Details</button> */}
         </div>

      </PostalDetContext.Provider>
   )
}

export default SearchByPC