import React from "react";
const Home = () => {
  return (
    <div id="home" className="max-w-[1240px] md:mt-[-105px] mt-[-24px]  mx-auto  ">
      <div className=" flex md:flex-row flex-col-reverse p-6 items-center  ">
        <div className=" md:p-10 md:ms-12">
          <h1 className=" md:text-5xl text-3xl font-bold ">NEW WATCH <br /> COLLECTIONS B720</h1>
          <p className=" py-4 text-gray-500">Latest arrival of the new imported watches of the B720 series, with a modern and resistant design.</p>
            <h2 className=" pb-12 text-xl font-bold text-orange-300">$1245</h2>
            <div>
                <button className=" bg-gray-400 px-5 py-4 text-sm font-bold  ">Discover</button>
                <button className=" bg-black px-8 py-5 text-sm  font-semibold   text-white">ADD TO CART</button>
            </div>
        </div>
        <div className=" mb-10 md:mb-0 ">
            <img  className=" bg-orange-300 w-[250px]  py-10 ms-auto  md:w-[430px]" src="https://watches-e-commerce.netlify.app/assets/img/home.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
