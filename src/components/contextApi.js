import React, { createContext, useState } from 'react'

export let Context  = createContext()

export const ContextProvider = ({children})=>{
    const [items, setItems] = useState([])
    
    return(
        <Context.Provider value={{items, setItems}}>
        {children}
        </Context.Provider>
    )
}