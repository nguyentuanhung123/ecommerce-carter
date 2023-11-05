import React, { useContext } from "react";
//import product context
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
    //get products from product context
    const { products } = useContext(ProductContext);
    console.log(products);

    return (
        <div>Home</div>
    )
}

export default Home;