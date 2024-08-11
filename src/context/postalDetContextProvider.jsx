import React, { useState } from "react";
import axios from 'axios'
import SearchByPC from '../components/SearchByPC'
import PostalDetContext from "./PostDetContext";

const PostalDetContextProvider = ({ children }) => {
   const [ noOfPostO, setNoOfPostO ] = useState([]);
   const [ loading, setLoading ] = useState(false);
   const [ InputValue, setInput ] = useState('');

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
      'BranchType',
      'Pincode',
      'District',
      'Country',
   ];

   return (
      <PostalDetContext.Provider value={{fetchPostOffDetails, InputValue, setInput}}>
         <div>
            {loading ? (<h2>Loading...</h2>) : (<h2>Number of postoffices are: {noOfPostO.length}</h2>)}
         </div>

         <SearchByPC />

         <table>

            <thead>
               <tr>
                  {headers.map((header) => {
                     return <th key={header}>{header}</th>
                  })}
               </tr>
            </thead>

            <tbody>

               {noOfPostO.map((item, index) => (
                  <tr key={index}>
                     {headers.map((header) => (
                        <td key={header}>{item[ header ]}</td>
                     ))}
                  </tr>
               ))}

            </tbody>
         </table>
      </PostalDetContext.Provider>
   )
}

export default PostalDetContextProvider