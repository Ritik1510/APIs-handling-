import React, { useContext } from 'react';
import PostalDetContext from '../context/PostDetContext';

function PostOfficeTable() {
  const { noOfPostO }=  useContext(PostalDetContext);
  
  const headers = [
    'Name',
    'BranchType',
    'Details'
  ];
  
  if(noOfPostO && noOfPostO > 0){
    console.log(noOfPostO);
  }

  return (
    <>
      <table className='border-2'>
        <thead className='gap-3'>
          <tr>
            {headers.map((header) => {
              return <th key={header}>{header}</th>
            })}
          </tr>
        </thead>

        <tbody>
          {(noOfPostO && noOfPostO > 0)}
          {noOfPostO.map((item, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={header}>{item[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default PostOfficeTable