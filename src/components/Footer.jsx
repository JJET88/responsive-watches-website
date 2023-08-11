import React from 'react'
import {BiLogoFacebook} from 'react-icons/bi';
import {AiOutlineTwitter,AiOutlineInstagram} from 'react-icons/ai';

const Footer = () => {

  return (
    <div className=' max-w-[1240px] mx-auto h-96'>
        <div className=' p-7 md:flex items-center justify-between '>
            <div className=' py-5 tracking-tight'>
                <h1 className=' text-gray-900 mb-6 font-semibold text-[23px]'>Our information</h1>
                <ul className=' text-gray-600 text-[17px]'>
                    <li className=' '>1234 - Peru</li>
                    <li className=' py-3'>La Libertad 43210</li>
                    <li className=' '>123-456-789</li>
                </ul>
            </div>
            <div className=' py-5 tracking-tight'>
                <h1 className=' text-gray-900 mb-6 font-semibold text-[23px]'>About Us</h1>
                <ul className=' text-gray-600 text-[17px]'>
                    <li className=' '>Support Center</li>
                    <li className=' py-3'>Customer Support</li>
                    <li className=' '>About Us</li>
                    <li className=' '>Copy Right</li>
                </ul>
            </div>
            <div className=' py-5 tracking-tight'>
                <h1 className=' text-gray-900 mb-6 font-semibold text-[23px]'>Product</h1>
                <ul className=' text-gray-600 text-[17px]'>
                    <li className=' '>Road bikes</li>
                    <li className=' py-3'>Mountain bikes</li>
                    <li className=' '>Electric</li>
                    <li className=' '>Accesories</li>
                </ul>
            </div>
            <div className=' py-5 tracking-tight'>
                <h1 className=' text-gray-900 mb-6 font-semibold text-[23px]'>Social</h1>
                <ul className='ms-2 flex gap-5 text-gray-600'>
                   <BiLogoFacebook size={20}/>
                   <AiOutlineTwitter size={20}/>
                   <AiOutlineInstagram size={20}/>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
