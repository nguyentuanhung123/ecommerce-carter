import React, { useContext, useEffect, useState } from "react";
//import product context
import { ProductContext } from "../contexts/ProductContext";
//import components
import Loading from "../components/Loading.jsx";
import Product from "../components/Product.jsx";
import Hero from "../components/Hero.jsx";
import ThemeBtn from "../components/ThemeBtn.jsx";

const Home = () => {
    //loading
    const [isLoading, setIsLoading] = useState(true);
    //get products from product context
    const { products } = useContext(ProductContext);
    // console.log(products);

    //get only men's & women's clothing category
    const filteredProducts = products.filter((item) => {
        return (
            item.category === "men's clothing" || item.category === "women's clothing"
        )
    });

    console.log(filteredProducts);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000)
    }, []);

    return (
        <div>
            <Hero />
            <div className="w-full flex justify-end my-4">
                <ThemeBtn />
            </div>
            <section className="pb-16 pt-4">
                <div className="container mx-auto">
                    {
                        isLoading ? <Loading /> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
                            {
                                filteredProducts.map((product) => {
                                    return (
                                        <Product key={product.id} product={product} />
                                    )
                                })
                            }
                        </div>
                    }
                </div>
            </section>
        </div>
    )
}

export default Home;