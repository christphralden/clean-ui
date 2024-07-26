import React, { createContext, useState, useContext} from 'react'

interface SidebarContextProps{
    active: number,
    handleItemClick: ({
        index
    }:{
        index: number
    })=>void
}


const SidebarContext = createContext<SidebarContextProps | null>(null)


export function SidebarContextProvider({
    children
}:{
    children: React.ReactNode
}){
    const [active, setActive] = useState(0)

    function handleItemClick({
        index
    }:{
        index: number
    }){
        setActive(index)
    }


    return(
        <SidebarContext.Provider
            value={{
                active,
                handleItemClick
            }}
        >
            {children}
        </SidebarContext.Provider>
    )
}


export const useSidebarContext = () =>{
    const context = useContext(SidebarContext)

    if(!context){
        throw new Error("useSidebarContext must be used within a SidebarContextProvider")
    }

    return context
}