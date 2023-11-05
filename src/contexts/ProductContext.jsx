import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

//create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    //products state
    const [products, setProducts] = useState([]);
    //fetch products 
    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
    }

    return (

        <ProductContext.Provider>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;