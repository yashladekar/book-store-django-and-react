import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../ProductCard";

const AdvancedSearch = () => {
  const [books, setBooks] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    fetchBooks();
  }, [minPrice, maxPrice]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/books/", {
        params: {
          min_price: minPrice,
          max_price: maxPrice,
        },
      });
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <div>
      <h2> Book List </h2>{" "}
      <div className="my-2">
        <label>
          <span className="text-sm px-10 m-2"> Min Price:</span>
          <input
            className="px-2 py-1 border border-gray-400 rounded-md  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />{" "}
        </label>{" "}
        <label>
          <span className="text-sm px-10 m-2"> Max Price:</span>
          <input
            className=" px-2 py-1 border border-gray-400 rounded-md  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />{" "}
        </label>{" "}
      </div>{" "}
      <ProductCard products={books} />
    </div>
  );
};

export default AdvancedSearch;
