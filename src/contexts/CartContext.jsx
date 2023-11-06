import React, { createContext, useState, useEffect } from "react";

//create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
    //cart state
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;