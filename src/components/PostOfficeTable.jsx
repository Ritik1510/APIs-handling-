import React, { useContext } from 'react';
import PostalDetContext from '../context/PostDetContext';
import PostalDetContextProvider from '../context/postalDetContextProvider';

function PostOfficeTable() {
  const { noOfPostO, myName }=  useContext(PostalDetContext);
  
  const headers = [
    'Name',
    'BranchType',
    'Pincode',
    'District',
    'Country',
  ];
  console.log(noOfPostO);

  return (
    <PostalDetContextProvider>
      <table className='border-2'>
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
                <td key={header}>{item[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {myName()}
    </PostalDetContextProvider>
  )
}

export default PostOfficeTable