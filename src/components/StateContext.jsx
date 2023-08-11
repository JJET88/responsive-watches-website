import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateContextProvider =({children})=>{

    const[cart,setCart] =useState(false);
    const[dark,setDark] = useState(false);

  
    const data ={cart,setCart,dark,setDark};


    return (
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}

export const CustomState = ()=> useContext(StateContext);