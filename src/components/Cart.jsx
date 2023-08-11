import { RxCross2 } from 'react-icons/rx';
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai';
import {BiTrashAlt} from 'react-icons/bi';
import { CustomState } from './StateContext';
const Cart = () => {
  const {cart,setCart,dark} = CustomState();

  const cartHandler =()=>{
    setCart(!cart);
  }
   
  return (
    
    
    <div className={ cart? " md:w-[34%]  text-center fixed h-full top-0 right-0 w-full bg-white  font-semibold text-xl duration-300 ease-in-out ":"text-center duration-300 ease-in-out fixed h-full md:w-[34%] top-0 md:right-[-34%] right-[-100%]  w-full bg-white  font-semibold text-xl " }>
      <div className={dark? "  bg-black h-screen text-white": "  bg-white h-screen text-black"}>
            <div onClick={cartHandler}  >
            <RxCross2 size={20} className=" me-7 ms-auto cursor-pointer"/>
            </div>
            <h1 className=" text-center text-xl tracking ">My Cart</h1>

           <div className=' px-10  pt-10 flex flex-col gap-5'>
            <div className=' flex  gap-5'>
              <img className='w-[90px] p-3 shadow ' src="https://dev.tirinfo.com/responsive-watches-website/featured1.png" alt="" />
              <div className=' w-[35%] '>
                <h1 className=' py-2 text-[17px] text-start '>Jazzmaster</h1>
                <p className='text-start text-orange-400 text-[15px]'>$1050</p>
                <div className=' py-2 flex items-center justify-between '>
                  <div className=' flex items-center gap-5 '>

                  <AiOutlineMinus size={18} className='cursor-pointer shadow p-1'/>
                  <p className=' text-[16px]'>1</p>
                  <AiOutlinePlus size={18} className='cursor-pointer shadow p-1'/>
                  </div>
                  <BiTrashAlt className='text-orange-400 cursor-pointer' size={17}/>
                </div>
              </div>

            </div>
            <div className=' flex  gap-5'>
              <img className='w-[90px] p-3 shadow ' src="https://dev.tirinfo.com/responsive-watches-website/featured3.png" alt="" />
              <div className=' w-[35%] '>
                <h1 className=' py-2 text-[17px] text-start '>Rose Gold</h1>
                <p className='text-start text-orange-400 text-[15px]'>$850</p>
                <div className=' py-2 flex items-center justify-between '>
                  <div className=' flex items-center gap-5 '>

                  <AiOutlineMinus size={18} className='cursor-pointer shadow p-1'/>
                  <p className=' text-[16px]'>1</p>
                  <AiOutlinePlus size={18} className='cursor-pointer shadow p-1'/>
                  </div>
                  <BiTrashAlt className='text-orange-400 cursor-pointer' size={17}/>
                </div>
              </div>

            </div>
            <div className=' flex  gap-5'>
              <img className='w-[90px] p-3 shadow ' src="https://dev.tirinfo.com/responsive-watches-website/new1.png" alt="" />
              <div className=' w-[35%] '>
                <h1 className=' py-2 text-[17px] text-start '>Longines Rose</h1>
                <p className='text-start text-orange-400 text-[15px]'>$980</p>
                <div className=' py-2 flex items-center justify-between '>
                  <div className=' flex items-center gap-5 '>

                  <AiOutlineMinus size={18} className='cursor-pointer shadow p-1'/>
                  <p className=' text-[16px]'>1</p>
                  <AiOutlinePlus size={18} className='cursor-pointer shadow p-1'/>
                  </div>
                  <BiTrashAlt className='text-orange-400 cursor-pointer' size={17}/>
                </div>
              </div>

            </div>
         
           </div>
           <div className=' p-10 px-15 flex items-center justify-between'>
            <h1 className=' text-sm'>Total: 3 items</h1>
            <h1 className=' '>$2880</h1>
           </div>
        </div>
      
    </div>
  )
}

export default Cart
