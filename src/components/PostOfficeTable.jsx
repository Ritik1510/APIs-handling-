import React, { useContext } from 'react';

function PostOfficeTable({ noOfPostOff }) {

  const headers = [
    'Name',
    'BranchType'
  ];

  if (noOfPostOff && noOfPostOff > 0) {
    console.log(noOfPostOff);
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
          {(noOfPostOff && noOfPostOff > 0)}
          {noOfPostOff.map((item, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={header}>{item[ header ]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default PostOfficeTable