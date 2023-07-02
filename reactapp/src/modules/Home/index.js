import React, { useEffect } from "react";
import Hero from "../../components/Hero";
import ProductCard from "../../components/ProductCard";
// import Stats from "../../components/StatCard";
import { useState } from "react";
import axios from "axios";
import Categories from "../../components/Categories";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/books/"); // Replace with your Django API endpoint URL
        // const data = await response.json();
        const data = response.data;
        // console.log(data);  
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Hero />
      <Categories />
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-medium title-font mb-1 ">
          Products
        </h2>
        <h1 className=" sm:text-3xl text-2xl font-medium title-font text-gray-900 ">
          MOST POPULAR PRODUCTS
        </h1>
      </div>
      {products.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <div>Loading...</div>
      )}

      {/* <Products /> */}
      {/* <Products  products={products}/> */}
      {/* <Stats /> */}
    </>
  );
};

export default Home;
