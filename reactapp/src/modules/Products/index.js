import React, { useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import Categories from "../../components/Categories";
import { useState } from "react";
import axios from "axios";
const Products = () => {
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
    <div>
      {/* <FeatureCard cards={categories} /> */}
      <Categories  />
      {
        products.length > 0 ? ( 
          <ProductCard products={products} />
        ) : (
          <div>Loading...</div>
        )
      }
      {/* <ProductCard /> */}
    </div>
  );
};

export default Products;
