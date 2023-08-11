import React, { useState } from "react";
import { BiSolidWatch } from "react-icons/bi";
import {FiMoon} from 'react-icons/fi';
import {BiShoppingBag,BiGridAlt} from 'react-icons/bi';
import {RxCross2} from 'react-icons/rx';
import { Link } from "react-scroll";
import { CustomState } from "./StateContext";

const Navbar = () => {
  const {cart,setCart,dark,setDark} = CustomState();
    
    const[menu,setMenu] = useState(false);
    const MenuHandler =()=>{
        setMenu(!menu);
    }
    const cartHandler =()=>{
      setCart(!cart);
    }
    const DarkModeHandler =()=>{
      setDark(!dark);
    }
    // change nav color when scrolling
    const[color,setColor] = useState(false);
    const scrollColor =()=>{
      if(window.scrollY >= 80){
        setColor(true);
      }else{
        setColor(false);
      }
    }
    window.addEventListener('scroll',scrollColor)
   
  return (
    <div className={color? "bg-white  sticky duration-300 top-0 text-black": "  duration-300 bg-transparent sticky top-0"}>
    <div  className= "  max-w-[1240px] flex justify-between items-center mx-auto md:px-5  h-20 border-b mb-0">
      <div className="w-full flex gap-10 ">
        
        <div className=" flex items-center gap-1 text-lg text-gray- ms-5">
          <Link to={'home'} spy={true} smooth={true} offset={50} duration={500}>
          <BiSolidWatch size={20} className=" cursor-pointer " />

        </Link> 
          <h1 className=" font-bold ">ROLEX</h1>
        
        </div>
       
        <ul className=" hidden text-lg md:flex font-bold">
          <li   className=" p-8 cursor-pointer">
          <Link to={'home'} spy={true} smooth={true} offset={-100} duration={500}>
            Home
          </Link>
            </li>
          <li   className=" p-8 cursor-pointer">
          <Link to={'feature'} spy={true} smooth={true} offset={-120} duration={500}>

            Featured
          </Link>
            </li>
          <li className=" p-8 cursor-pointer">
          <Link to={'products'} spy={true} smooth={true} offset={-140} duration={500} >

            Products
          </Link>
            </li>
          <li className=" p-8 cursor-pointer">
          <Link to={'newArrivals'} spy={true} smooth={true} offset={-120} duration={500}>

            New
          </Link>
            </li>
        </ul>
      </div>
      <div className=" flex p-8 cursor-pointer ">
        <div onClick={DarkModeHandler}>

        <FiMoon size={20} className=" cursor-pointer " />
        </div>
        <div onClick={cartHandler}>

        <BiShoppingBag size={20} className=" cursor-pointer mx-4 " />
        </div>
        <div onClick={MenuHandler}>

        <BiGridAlt className=" md:hidden cursor-pointer " size={20}/>
        </div>

      </div>
      
        <ul  className={menu?" md:hidden bg-white text-center fixed h-full top-0 right-0 w-full  font-semibold text-xl duration-300 ease-in-out ":"text-center bg-white duration-300 ease-in-out fixed h-full top-0 right-[-100%] w-full   font-semibold text-xl md:hidden " }>
      <div className={dark? "  bg-black h-screen text-white": "  bg-white h-screen text-black"}>
            <div onClick={MenuHandler}>
            <RxCross2  size={20} className="  me-7 ms-auto cursor-pointer"/>
            </div>

            <li className=" pt-20 pb-4 cursor-pointer ">
            <Link onClick={MenuHandler} to={'home'} spy={true} smooth={true} offset={-100} duration={500}>
            Home
          </Link>
            </li>
            <li  className=" p-4 cursor-pointer ">
            <Link onClick={MenuHandler} to={'feature'} spy={true} smooth={true} offset={-100} duration={500}>
            FEATURED
          </Link>
            </li>
            <li className=" p-4 cursor-pointer ">
            <Link onClick={MenuHandler} to={'products'} spy={true} smooth={true} offset={-100} duration={500}>
            PRODUCTS
          </Link>
            </li>
            <li className=" p-4 cursor-pointer ">
            <Link onClick={MenuHandler} to={'newArrivals'} spy={true} smooth={true} offset={-100} duration={500}>
            NEW
          </Link>
            </li>
    </div>
        </ul>
    </div>
    </div>
  );
};

export default Navbar;
