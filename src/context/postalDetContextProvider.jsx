import React, { useState, useEffect } from "react";
import axios from 'axios';
import PostalDetContext from "./PostDetContext";

const PostalDetContextProvider = ({ children }) => {
   const [ postOffices, setPostOffices ] = useState([]);
   const [ loading, setLoading ] = useState(false);
   const [ InputValue, setInputValue ] = useState('');

   const fetchPostOffDetails = async () => {
      setLoading(true);

      try {
         const response = await axios.get(`https://api.postalpincode.in/pincode/${InputValue}`);
         if (response.status !== 200) {
            throw new Error('Request failed with status ' + response.status);
         }
         if (response.data && Array.isArray(response.data) && response.data[ 0 ].PostOffice) {
            const data = response.data[ 0 ].PostOffice;
            if (data.length === 0) {
               setPostOffices([]);
            } else {
               setPostOffices(data);
            }
         } else {
            throw new Error('Request failed with status: ' + response.Message);
         }
         console.log(noOfPostOff)
      } catch (error) {
          throw new Error('An error occured while get the request using axios...);
      } finally { 
         setLoading(false);
      }
   };
   
   return (
      <PostalDetContext.Provider value={{
         fetchPostOffDetails,
         setPostO,
         loading,
         setInputValue
      }}>
         {children}
      </PostalDetContext.Provider>
   )
}

export default PostalDetContextProvider
