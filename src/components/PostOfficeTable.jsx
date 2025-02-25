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
      <table className='border m-1'>
        <thead className='gap-3'>
          <tr className='border px-8 py-8'>
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
            <tr 
              key={index}
              className='border px-8 py-8'
            >
              {headers.map((header) => (
                <td key={header}>{item[ header ]}</td>
              ))}
              <td className='flex justify-center items-center'>{<a href='#'><i className="fas fa-file" style={{ color: '#7c8885' }}></i></a>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default PostOfficeTable