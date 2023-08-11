import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const Testimonials = () => {
  return (
    <div className="max-w-[1240px] mt-[-5rem] mx-auto ">
      <div className=" flex md:flex-row flex-col p-6 items-center  ">
        <div  className=" p-5  border">
        <div className=" md:w-[600px] w-full overflow-hidden md:flex gap-5">
          <div id="slide1" className=" duration-700 ease-in-out" >
            <div className=" w-full md:w-[600px] ">
              <BiSolidQuoteAltLeft className=" text-orange-300 text-[44px] shadow-lg p-[10px] " />
              <p className=" text-gray-600 tracking-tighter pt-10 pb-4">
                They are the best watches that one acquires,also they are always
                with the latest news and trends, with a very comfortable price
                and especially with the attention you receive, they are always
                attentive to your questions.
              </p>
              <h4 className="">March 27. 2021</h4>
              <div className="flex my-10 items-center gap-4">
                <img
                  className=" w-14 rounded-[50%]"
                  src="https://watches-e-commerce.netlify.app/assets/img/testimonial2.jpg"
                  alt=""
                />
                <div>
                  <p className="font-semibold ">Samantha Mey</p>
                  <p className=" text-gray-600 text-sm">
                    Director of a company
                  </p>
                </div>
              </div>
              <div>
            <a href="#slide3" data-carousel-prev className="btn btn-circle text-orange-400 ">❮</a> 
      <a href="#slide2" data-carousel-next className="btn btn-circle text-orange-400 ">❯</a>
            </div>
            </div>
          </div>
          <div id="slide2"  className=" duration-700 ease-in-out" >
            <div className=" w-full md:w-[600px]">
              <BiSolidQuoteAltLeft className=" text-orange-300 text-[44px] shadow-lg p-[10px] " />
              <p className=" text-gray-600 tracking-tighter pt-10 pb-4">
                They are the best watches that one acquires,also they are always
                with the latest news and trends, with a very comfortable price
                and especially with the attention you receive, they are always
                attentive to your questions.
              </p>
              <h4 className="">March 27. 2021</h4>
              <div className="flex my-10 items-center gap-4">
                <img
                  className=" w-14 rounded-[50%]"
                  src="https://watches-e-commerce.netlify.app/assets/img/testimonial3.jpg"
                  alt=""
                />
                <div>
                  <p className="font-semibold ">Raul Zaman</p>
                  <p className=" text-gray-600 text-sm">
                    Director of a company
                  </p>
                </div>
              </div>
              <div>
            <a href="#slide1" data-carousel-prev className="btn btn-circle text-orange-400 ">❮</a> 
      <a href="#slide3" data-carousel-next className="btn btn-circle text-orange-400 ">❯</a>
            </div>
            </div>
          </div>
          <div id="slide3"  className=" duration-700 ease-in-out" >
            <div className="w-full md:w-[600px]">
              <BiSolidQuoteAltLeft className=" text-orange-300 text-[44px] shadow-lg p-[10px] " />
              <p className=" text-gray-600 tracking-tighter pt-10 pb-4">
                They are the best watches that one acquires,also they are always
                with the latest news and trends, with a very comfortable price
                and especially with the attention you receive, they are always
                attentive to your questions.
              </p>
              <h4 className="">March 27. 2021</h4>
              <div className="flex my-10 items-center gap-4">
                <img
                  className=" w-14 rounded-[50%]"
                  src="https://watches-e-commerce.netlify.app/assets/img/testimonial1.jpg"
                  alt=""
                />
                <div>
                  <p className="font-semibold ">Lee Doe</p>
                  <p className=" text-gray-600 text-sm">
                    Director of a company
                  </p>
                </div>
              </div>
              <div>
            <a href="#slide2" data-carousel-prev className="btn btn-circle text-orange-400 ">❮</a> 
      <a href="#slide1" data-carousel-next className="btn btn-circle text-orange-400 ">❯</a>
            </div>
            </div>
          </div>
          </div>
        </div>
        <div className=" mb-10 md:mb-0  ">
          <img
            className="lg:w-[800px] md:w-[800px] w-[250px] py-10 ms-auto "
            src="https://watches-e-commerce.netlify.app/assets/img/testimonial.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
