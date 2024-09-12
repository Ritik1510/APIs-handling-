import React, { useState, useEffect } from "react";
import axios from 'axios';
import PostalDetContext from "./PostDetContext";

const PostalDetContextProvider = ({ children }) => {
   const [ noOfPostOff, setNoOfPostO ] = useState([]);
   const [ loading, setLoading ] = useState(false);
   const [ InputValue, setInputValue ] = useState('');

   const fetchPostOffDetails = async () => {
      console.log("Loading....");
      setLoading(true);

      try {
         const response = await axios.get(`https://api.postalpincode.in/pincode/${InputValue}`);

         if (response.status !== 200) {
            throw new Error('Request failed with status ' + response.status);
         }

         if (response.data && Array.isArray(response.data) && response.data[ 0 ].PostOffice) {
            const data = response.data[ 0 ].PostOffice;
            console.log('data: ', data);

            if (data.length === 0) {
               console.log('No Post Office data available');
               setNoOfPostO([]);
            } else {
               setNoOfPostO(data);
            }
         } else {
            throw new Error('Request failed with status: ' + response.Message);
         }
         console.log(noOfPostOff)
      } catch (error) {
         console.error('An error occurred:', error);
      } finally {
         console.log("Fetching Process Completed !!");
         setLoading(false);
      }
   };

   const myName = () => {
      console.log("hey i am comes from postalDetContextProvider! -- function for some test on context");
   }

   return (
      <PostalDetContext.Provider value={{
         fetchPostOffDetails,
         noOfPostOff,
         loading,
         setInputValue
      }}>
         {children}
      </PostalDetContext.Provider>
   )
}

export default PostalDetContextProvider