import react, { useState } from "react";


function SearchByPC({ fetchFncProp, sendInputValueFromState}) {
   const [ inputValue, setInputValue ] = useState('');

   const handleChange = (event) => {
      const value = event.target.value
      setInputValue(value);
      sendInputValueFromState(value); 
   };

   return (
      <div>
         <div>
            <h1>
               <a href='#'>Search Post Office Details By PIN Code</a>
            </h1>
            <div>
               <label>
                  Input:
                  <input
                     type='number'
                     value={inputValue}
                     onChange={handleChange}
                  />
               </label>

               <button className='border-2' onClick={fetchFncProp}>Search</button>
            </div>
         </div>
      </div>
   )
}

export default SearchByPC