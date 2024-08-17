import React, { useState } from "react";
import axios from 'axios';
import PostalDetContext from "./PostDetContext";

const PostalDetContextProvider = ({ children }) => {
   const [ noOfPostO, setNoOfPostO ] = useState([]);
   const [ loading, setLoading ] = useState(false);
   const [ InputValue, setInput ] = useState('');

   const fetchPostOffDetails = async () => {
      console.log("Loading....")
      setLoading(true);

      try {
         const response = await axios.get(`https://api.postalpincode.in/pincode/203202`);
         if (response.data && Array.isArray(response.data) && response.data[0].PostOffice) {
            setNoOfPostO(response.data[0].PostOffice);
         } else {
            setNoOfPostO([])
         }
      } catch (error) {
         console.log("Check your internet connectivity, and fetching arror!!", error);
      } finally {
         console.log("Fetching Process Completed !!")
      }
      
      console.log(noOfPostO)
      setLoading(false);
   }

   const myName = () => {
      console.log("hey i am comes from postalDetContextProvider! ");
   }

   return (
      <PostalDetContext.Provider value={{ 
         fetchPostOffDetails, 
         myName, 
         InputValue, 
         setInput, 
         noOfPostO, 
         loading
         }}>
         {children}
      </PostalDetContext.Provider>
   )
}

export default PostalDetContextProvider