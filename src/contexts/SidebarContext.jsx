import React, { useState, createContext } from "react";

//create context
export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
    //sidebar state
    const [isOpen, setIsOpen] = useState(false);

    const hanldeClose = () => {
        setIsOpen(false);
    }

    return (
        <SidebarContext.Provider value={{ isOpen, setIsOpen, hanldeClose }}>
            {children}
        </SidebarContext.Provider>
    )
}

export default SidebarProvider;