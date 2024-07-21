import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function PostOffDetTab() {
   const [ noOfPostO, setNoOfPostO ] = useState([]);
   const [ loading, setLoading ] = useState(false);
   const [ inputValue, setInputValue ] = useState('');

   const fetchPostOffDetails = async () => {
      setLoading(true);

      try {
         const response = await axios.get(`https://api.postalpincode.in/pincode/${inputValue}`)
         if (response.data && Array.isArray(response.data) && response.data[ 0 ].PostOffice) {
            setNoOfPostO(response.data[ 0 ].PostOffice);
            console.log(response.data);
         } else {
            setNoOfPostO([])
         }
      }

      catch (error) {
         console.log("check, and fetching arror!!", error);
      }
      setLoading(false);
   }


   const headers = [
      'Name',
      'Block',
      'Circle',
      'Country',
      'District',
      'Division',
      'Pincode',
      'Region',
      'State'
   ];



   const handleChange = (event) => {
      setInputValue(event.target.value);
   };

   return (
      <>
         <div>
            {loading ? (<h2>Loading...</h2>) : (<h2>Number of postoffices are: {noOfPostO.length}</h2>)}
         </div>

         <div>
            <label>
               Input:
               <input
                  type='number'
                  value={inputValue}
                  onChange={handleChange}
               />
            </label>

            <button className='border-2' onClick={fetchPostOffDetails}>Search</button>
         </div>

         <table>

            <thead>
               <tr>
                  {
                     headers.map((header) => {
                        return <th key={header}>{header}</th>
                     })
                  }
               </tr>
            </thead>

            <tbody>
               {
                  noOfPostO.map((item, index) => (
                     <tr key={index}>
                        {headers.map((header) => (
                           <td key={header}>{item[ header ]}</td>
                        ))}
                     </tr>
                  ))
               }
            </tbody>
         </table>
      </>
   )
}

export default PostOffDetTab