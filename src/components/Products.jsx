import React from "react";
import { BiShoppingBag } from "react-icons/bi";
const Products = () => {
  return (
    <div id="products" className=" max-w-[1240px] md:max-w-[900px] mx-auto  mt-10">
      <h1 className=" text-center text-xl tracking-wide ">PRODUCTS</h1>
      <div className="grid md:grid-cols-3 grid-cols-2  my-10 p-10 gap-20">
        <div className=" shadow   w-full flex flex-col items-center  ">
          <img
            className=" w-[150px] text-center"
            src="https://watches-e-commerce.netlify.app/assets/img/product1.png"
            alt=""
          />
          <h1 className=" text-center py-4 font-semibold">SPIRIT ROSE</h1>
          <h1 className=" text-center font-semibold text-orange-300">$1500</h1>

          <BiShoppingBag
            size={35}
            className="ms-auto bg-black py-2 text-white cursor-pointer "
          />
        </div>
        <div className=" shadow   w-full flex flex-col items-center  ">
          <img
            className=" w-[150px] text-center"
            src="https://watches-e-commerce.netlify.app/assets/img/product1.png"
            alt=""
          />
          <h1 className=" text-center py-4 font-semibold">SPIRIT ROSE</h1>
          <h1 className=" text-center font-semibold text-orange-300">$1500</h1>

          <BiShoppingBag
            size={35}
            className="ms-auto bg-black py-2 text-white cursor-pointer "
          />
        </div>
        <div className=" shadow   w-full flex flex-col items-center  ">
          <img
            className=" w-[150px] text-center"
            src="https://watches-e-commerce.netlify.app/assets/img/product1.png"
            alt=""
          />
          <h1 className=" text-center py-4 font-semibold">SPIRIT ROSE</h1>
          <h1 className=" text-center font-semibold text-orange-300">$1500</h1>

          <BiShoppingBag
            size={35}
            className="ms-auto bg-black py-2 text-white cursor-pointer "
          />
        </div>
        <div className=" shadow   w-full flex flex-col items-center  ">
          <img
            className=" w-[150px] text-center"
            src="https://watches-e-commerce.netlify.app/assets/img/product1.png"
            alt=""
          />
          <h1 className=" text-center py-4 font-semibold">SPIRIT ROSE</h1>
          <h1 className=" text-center font-semibold text-orange-300">$1500</h1>

          <BiShoppingBag
            size={35}
            className="ms-auto bg-black py-2 text-white cursor-pointer "
          />
        </div>
        <div className=" shadow   w-full flex flex-col items-center  ">
          <img
            className=" w-[150px] text-center"
            src="https://watches-e-commerce.netlify.app/assets/img/product1.png"
            alt=""
          />
          <h1 className=" text-center py-4 font-semibold">SPIRIT ROSE</h1>
          <h1 className=" text-center font-semibold text-orange-300">$1500</h1>

          <BiShoppingBag
            size={35}
            className="ms-auto bg-black py-2 text-white cursor-pointer "
          />
        </div>
   
      </div>
    </div>
  );
};

export default Products;
