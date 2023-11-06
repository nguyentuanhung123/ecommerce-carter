import React, { useContext, useState } from "react";
//import Link
import { Link } from "react-router-dom";
//import icons
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
//import components
import CartItem from "./CartItem.jsx";
//import sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
//import cart context
import { CartContext } from "../contexts/CartContext.jsx";


const Sidebar = () => {
    const { isOpen, handleClose } = useContext(SidebarContext);

    const { cart, clearCart } = useContext(CartContext);

    return (
        <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
            <div className="flex justify-between items-center py-6 border-b">
                <div className="uppercase text-sm font-semibold">Shoping Bag (0)</div>
                {/* icon */}
                <div onClick={() => handleClose()} className="cursor-pointer w-8 h-8 flex justify-center items-center">
                    <IoMdArrowForward className="text-2xl" />
                </div>
            </div>
            <div>
                {cart.map((item) => {
                    return <CartItem item={item} key={item.id} />
                })}
            </div>
            <div>
                <div className="bg-pink-200 flex w-full justify-between items-center">
                    {/* total */}
                    <div>
                        <span>Total:</span>$ 1000
                    </div>
                    {/* clear cart icon */}
                    <div onClick={clearCart} className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl">
                        <FiTrash2 />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;