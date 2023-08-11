import React from "react";

const Feature = () => {
  return (
    <div id="feature" className=" max-w-[1240px] mx-auto  mt-10">
      <h1 className=" text-center text-xl tracking-wide ">FEATURED</h1>
      <div className="grid md:grid-cols-3  my-10 p-10 gap-20">
        <div className=" shadow  w-full flex flex-col items-center hover:scale-105 duration-300">
          <img
            className=" w-[150px] text-center"
            src="https://watches-e-commerce.netlify.app/assets/img/featured1.png"
            alt=""
          />
          <h1 className=" text-center py-4 font-semibold">JAZZMASTER</h1>
          <h1 className=" text-center font-semibold text-orange-300">$1050</h1>
          <button className="mx-auto mt-8  mb-10 bg-orange-300 text-black text-sm w-[150px] h-[50px] hover:bg-black hover:text-orange-500">
            ADD TO CART
          </button>
        </div>
        <div className=" shadow w-full flex flex-col items-center hover:scale-105 duration-300">
          <img
            className=" w-[150px] text-center"
            src="https://watches-e-commerce.netlify.app/assets/img/featured2.png"
            alt=""
          />
          <h1 className=" text-center py-4 font-semibold">INGERSOLL</h1>
          <h1 className=" text-center font-semibold text-orange-300">$250</h1>
          <button className="mx-auto mt-8  mb-10 bg-orange-300 text-black text-sm w-[150px] h-[50px] hover:bg-black hover:text-orange-500">
            ADD TO CART
          </button>
        </div>
        <div className=" shadow w-full flex flex-col items-center hover:scale-105 duration-300">
          <img
            className=" w-[150px] text-center"
            src="https://watches-e-commerce.netlify.app/assets/img/featured3.png"
            alt=""
          />
          <h1 className=" text-center py-4 font-semibold">ROSE GOLD</h1>
          <h1 className=" text-center font-semibold text-orange-300">$890</h1>
          <button className="mx-auto mt-8  mb-10 bg-orange-300 text-black text-sm w-[150px] h-[50px] hover:bg-black hover:text-orange-500">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
