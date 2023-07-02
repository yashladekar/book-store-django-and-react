import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";

function CategoryProducts() {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/books/categories/`
        );
        const data = response.data;
        console.log(data); // For debugging purpose, it will log the entire data received from API

        if (data.hasOwnProperty(name)) {
          setProducts(data[name]);
        } else {
          setProducts([]);
        }

        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [name]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(products);
  return (
    <div>
      <h2>Category: {name}</h2>
      {products.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <p>No products found for this category.</p>
      )}
    </div>
  );
}

export default CategoryProducts;
