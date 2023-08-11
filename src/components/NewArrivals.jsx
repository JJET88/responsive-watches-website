import React from "react";

const NewArrivals = () => {
  return (
    <div id="newArrivals" className=" max-w-[1240px] mx-auto  mt-10">
      <h1 className=" text-center text-xl tracking-wide ">NEW ARRIVALS</h1>
      <div className="hidden md:grid md:grid-cols-4 grid-cols-2  my-10 p-10 gap-20">
        <div className="  shadow  w-full flex flex-col items-center hover:bg-orange-300 duration-300">
          <span className="ms-auto mt-4 mr-4 bg-orange-300 text-white font-medium  px-3.5 py-1 border ">
            New
          </span>
          <img
            className=" w-[130px] text-center"
            src="https://watches-e-commerce.netlify.app/assets/img/new1.png"
            alt=""
          />
          <h1 className=" text-center py-4 font-semibold">LONGINGS ROSE</h1>
          <h1 className=" text-center font-semibold text-orange-300">$980</h1>
          <button className="mx-auto mt-8  mb-10 bg-black text-white text-sm w-[150px] h-[50px]  hover:text-orange-500">
            ADD TO CART
          </button>
        </div>
        <div className="  shadow  w-full flex flex-col items-center hover:bg-orange-300 duration-300">
          <span className="ms-auto mt-4 mr-4 bg-orange-300 text-white font-medium  px-3.5 py-1 border ">
            New
          </span>
          <img
            className=" w-[130px] text-center"
            src="https://watches-e-commerce.netlify.app/assets/img/new2.png"
            alt=""
          />
          <h1 className=" text-center py-4 font-semibold">JAZZMASTER</h1>
          <h1 className=" text-center font-semibold text-orange-300">$1050</h1>
          <button className="mx-auto mt-8  mb-10 bg-black text-white text-sm w-[150px] h-[50px]  hover:text-orange-500">
            ADD TO CART
          </button>
        </div>
        <div className="  shadow  w-full flex flex-col items-center hover:bg-orange-300 duration-300">
          <span className="ms-auto mt-4 mr-4 bg-orange-300 text-white font-medium  px-3.5 py-1 border ">
            New
          </span>
          <img
            className=" w-[130px] text-center"
            src="https://watches-e-commerce.netlify.app/assets/img/new3.png"
            alt=""
          />
          <h1 className=" text-center py-4 font-semibold">DREYFUSS GOLD</h1>
          <h1 className=" text-center font-semibold text-orange-300">$750</h1>
          <button className="mx-auto mt-8  mb-10 bg-black text-white text-sm w-[150px] h-[50px]  hover:text-orange-500">
            ADD TO CART
          </button>
        </div>
        <div className="  shadow  w-full flex flex-col items-center hover:bg-orange-300 duration-300">
          <span className="ms-auto mt-4 mr-4 bg-orange-300 text-white font-medium  px-3.5 py-1 border ">
            New
          </span>
          <img
            className=" w-[130px] text-center"
            src="https://watches-e-commerce.netlify.app/assets/img/new1.png"
            alt=""
          />
          <h1 className=" text-center py-4 font-semibold">PORTUGUESE ROSE</h1>
          <h1 className=" text-center font-semibold text-orange-300">$1590</h1>
          <button className="mx-auto mt-8  mb-10 bg-black text-white text-sm w-[150px] h-[50px]  hover:text-orange-500">
            ADD TO CART
          </button>
        </div>
      </div>

      <div className=" md:hidden carousel w-screen carousel-center  rounded-box">
        <div className=" carousel-item shadow  w-full flex flex-col items-center hover:bg-orange-300 duration-300">
          <span className="ms-auto mt-4 mr-4 bg-orange-300 text-white font-medium  px-3.5 py-1 border ">
            New
          </span>
          <img
            className=" w-[130px] "
            src="https://watches-e-commerce.netlify.app/assets/img/new1.png"
            alt=""
          />
          <h1 className=" text-center py-4 font-semibold">LONGINGS ROSE</h1>
          <h1 className=" text-center font-semibold text-orange-300">$980</h1>
          <button className="mx-auto mt-8  mb-10 bg-black text-white text-sm w-[150px] h-[50px]  hover:text-orange-500">
            ADD TO CART
          </button>
        </div>
        <div className=" carousel-item shadow  w-full flex flex-col items-center hover:bg-orange-300 duration-300">
          <span className="ms-auto mt-4 mr-4 bg-orange-300 text-white font-medium  px-3.5 py-1 border ">
            New
          </span>
          <img
            className=" w-[130px] text-center"
            src="https://watches-e-commerce.netlify.app/assets/img/new2.png"
            alt=""
          />
          <h1 className=" text-center py-4 font-semibold">JAZZMASTER</h1>
          <h1 className=" text-center font-semibold text-orange-300">$1050</h1>
          <button className="mx-auto mt-8  mb-10 bg-black text-white text-sm w-[150px] h-[50px]  hover:text-orange-500">
            ADD TO CART
          </button>
        </div>
        <div className=" carousel-item shadow  w-full flex flex-col items-center hover:bg-orange-300 duration-300">
          <span className="ms-auto mt-4 mr-4 bg-orange-300 text-white font-medium  px-3.5 py-1 border ">
            New
          </span>
          <img
            className=" w-[130px] text-center"
            src="https://watches-e-commerce.netlify.app/assets/img/new3.png"
            alt=""
          />
          <h1 className=" text-center py-4 font-semibold">DREYFUSS GOLD</h1>
          <h1 className=" text-center font-semibold text-orange-300">$750</h1>
          <button className="mx-auto mt-8  mb-10 bg-black text-white text-sm w-[150px] h-[50px]  hover:text-orange-500">
            ADD TO CART
          </button>
        </div>
        <div className=" carousel-item shadow  w-full flex flex-col items-center hover:bg-orange-300 duration-300">
          <span className="ms-auto mt-4 mr-4 bg-orange-300 text-white font-medium  px-3.5 py-1 border ">
            New
          </span>
          <img
            className=" w-[130px] text-center"
            src="https://watches-e-commerce.netlify.app/assets/img/new1.png"
            alt=""
          />
          <h1 className=" text-center py-4 font-semibold">PORTUGUESE ROSE</h1>
          <h1 className=" text-center font-semibold text-orange-300">$1590</h1>
          <button className="mx-auto mt-8  mb-10 bg-black text-white text-sm w-[150px] h-[50px]  hover:text-orange-500">
            ADD TO CART
          </button>
        </div>
      </div>
      {/* 
 <div className="carousel carousel-center rounded-box">
  <div className="carousel-item">
    <img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Pizza" />
  </div>
</div>
 */}
    </div>
  );
};

export default NewArrivals;
