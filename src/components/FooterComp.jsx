import React from 'react'

function FooterComp() {
  return (
    <>
      <section className='flex justify-center items-center sticky bottom-0 left-0'>
        <div className='w-screen backdrop-blur-md'>
          <ul className='grid grid-cols-2'>
            <div className='number grid place-items-start m-1'>
              <h4>Number</h4>
              <a href="tel:9891355425">989-135-5425</a>
            </div>
            <div className='emailAddress m-1'>
              <h4>Email</h4>
              <a href="mailto:kr.ritik1510@gmail.com">kr.ritik1510@gmail.com</a>
            </div>
          </ul>
        </div>
      </section>
    </>
  )
}

export default FooterComp