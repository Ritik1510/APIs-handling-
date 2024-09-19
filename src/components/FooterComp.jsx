import React from 'react'

function FooterComp() {
  return (
    <>
      <section className='sticky bottom-0 left-0'>
        <div className='backdrop-blur-md'>
          <ul className='grid grid-cols-2'>
            <div className='number grid place-items-start'>
              <h4>Number</h4>
              <a href="tel:9891355425">989-135-5425</a>
            </div>
            <div className='emailAddress'>
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