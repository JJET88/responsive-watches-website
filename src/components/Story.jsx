import React from 'react'

const Story = () => {
  return (
    <div className="max-w-[1240px] w-full mx-auto ">
      <div className=" flex md:flex-row-reverse flex-col p-6 items-center  ">
        <div className=" md:p-10 md:ms-12  space-y-1">
            <h1 className='text-xl tracking-wide text-center mb-10' >OUR STORY</h1>
          <h1 className=" md:text-5xl text-3xl font-semibold ">Inspirational Watch of <br />this year</h1>
          <p className=" py-4 text-gray-500">The latest and modern watches of this year, is available in various presentations in this store, discover them now.</p>
            <div>
                <button className=" bg-gray-800 px-7 py-4   font-semibold   text-white">Discover</button>
            </div>
        </div>
        <div className=" mt-20 ">
            <img  className=" lg:w-[550px] md:w-[330px] w-[280px] h-auto py-10 ms-auto " src="https://watches-e-commerce.netlify.app/assets/img/story.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Story
