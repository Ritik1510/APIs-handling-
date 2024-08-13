import React, { useState } from "react";
import axios from 'axios'
import PostalDetContext from "./PostDetContext";

const PostalDetContextProvider = ({ children }) => {
   const [ noOfPostO, setNoOfPostO ] = useState([]);
   const [ loading, setLoading ] = useState(false);
   const [ InputValue, setInput ] = useState('');

   const fetchPostOffDetails = async () => {
      setLoading(true);

      try {
         const response = await axios.get(`https://api.postalpincode.in/pincode/203202}`)
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

   return (
      <PostalDetContext.Provider value={{fetchPostOffDetails, InputValue, setInput, noOfPostO}}>
         <div>
            {loading ? (<h2>Loading...</h2>) : (<h2>Number of postoffices are: {noOfPostO.length}</h2>)}
         </div>
         {children}
      </PostalDetContext.Provider>
   )
}

export default PostalDetContextProvider