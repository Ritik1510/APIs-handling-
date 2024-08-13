import React, { useContext } from 'react'
import PostalDetContext from '../context/PostDetContext';

function PostOfficeTable() {
  const { dataFromAPI  }=  useContext(PostalDetContext)
  
  const headers = [
    'Name',
    'BranchType',
    'Pincode',
    'District',
    'Country',
  ];

  return (
    <>

      <table className='border-2'>
        <thead>
          <tr>
            {headers.map((header) => {
              return <th key={header}>{header}</th>
            })}
          </tr>
        </thead>

        <tbody>
          {dataFromAPI.map((item, index) => (
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