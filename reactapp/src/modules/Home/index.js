import React from "react";
import Hero from "../../components/Hero";
// import Products from "../../components/Products";
import FeatureCard from "../../components/FeatureCard";
import Stats from "../../components/StatCard";
const Home = () => {
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
      {/* <Products /> */}
      <FeatureCard />
      <Stats />
    </>
  );
};

export default Home;
