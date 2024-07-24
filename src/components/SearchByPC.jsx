import React, { useState, useContext } from 'react'
import PostalDetContext from '../context/PostDetContext'

function SearchByPC() {
   const [ inputValue, setInputValue ] = useState('');
   const {setInput} = useContext(PostalDetContext)
   const {InputValue} = useContext(PostalDetContext)
   const {fetchPostOffDetails} = useContext(PostalDetContext)

   const handleSubmit = (e) => {
      e.preventDefault()
      setInput(inputValue)
      fetchPostOffDetails(); 
   }

   return (
      <PostalDetContext.Provider value={{inputValue}}>
         <div>
            <label>
               Input:
               <input type='number'
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className='text-[#000]'
               />
            </label>
            <button className='' onClick={handleSubmit}>Get Details</button>
         </div>

      </PostalDetContext.Provider>
   )
}

export default SearchByPC