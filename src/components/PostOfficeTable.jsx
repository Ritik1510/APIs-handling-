import React, { useContext } from 'react';

function PostOfficeTable({ noOfPostOff }) {

  const headers = [
    'Name',
    'BranchType'
  ];

  const detailsBtn = ['Details']; 

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

            {detailsBtn.map((detailsBtn) => {
              return <th key={detailsBtn}>{detailsBtn}</th>
            })}
          </tr>
        </thead>

        <tbody>
          {noOfPostOff.map((item, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={header}>{item[ header ]}</td>
              ))}
              <td className='flex justify-center items-center'>{<a href='#'>i</a>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default PostOfficeTable