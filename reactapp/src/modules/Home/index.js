import React, { useEffect } from "react";
import Hero from "../../components/Hero";
import Products from "../../components/Products";
import FeatureCard from "../../components/FeatureCard";
import Stats from "../../components/StatCard";
import { useState } from "react";
import axios from "axios";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/books/"); // Replace with your Django API endpoint URL
        // const data = await response.json();
        const data = response.data;
        console.log(data);
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
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-medium title-font mb-1 ">
          Products
        </h2>
        <h1 className=" sm:text-3xl text-2xl font-medium title-font text-gray-900 ">
          MOSt POPULAR PRODUCTS
        </h1>
      </div>
      {products.length > 0 ? (
        <Products products={products} />
      ) : (
        <div>Loading...</div>
      )}

      <Products />
      {/* <Products  products={products}/> */}
      <FeatureCard />
      <Stats />
    </>
  );
};

export default Home;
