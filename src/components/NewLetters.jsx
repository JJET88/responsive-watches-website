import React from 'react'

const NewLetters = () => {
  return (
    <div className=' max-w-[1240px] mx-auto p-6  '>
      <div className='grid md:grid-cols-2  bg-orange-300 md:p-12 p-8 md:px-16 md:gap-10 gap-5'>
        <div className=' mb-5'>
            <h1 className=' py-8 text-center md:text-3xl lg:text-5xl text-2xl font-semibold md:text-start'>Subscribe Our <br />Newsletter </h1>
            <p className=' text-gray-800 md:text-xl text-center md:text-start'>Don't miss out on your discounts. Subscribe to our email newsletter to get the best offers, discounts, coupons, gifts and much more.</p>
        </div>
        <div className=' flex flex-col md:flex-row md:gap-0 gap-3 items-center'>
            <input type="email" className='outline-none w-full p-5' placeholder='Enter your email' />
            <button className=' w-full md:w-[50%] bg-black text-white h-[65px] '>SUBSCRIBE</button>
        </div>
      </div>
    </div>
  )
}

export default NewLetters
