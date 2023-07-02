import React from "react";
import ProductCard from "../../components/ProductCard";
import FeatureCard from "../../components/FeatureCard";
const Products = () => {
  const categories = [
    {
      id: 1,
      name: "Fiction",
      image_url:
        "https://images.unsplash.com/photo-1612837017391-0e3b5b5b0b0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmljdGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
      id: 2,
      name: "Non-Fiction",
      image_url:
        "https://images.unsplash.com/photo-1612837017391-0e3b5b5b0b0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmljdGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
      id: 3,
      name: "Science",
      image_url:
        "https://images.unsplash.com/photo-1612837017391-0e3b5b5b0b0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmljdGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
      id: 4,
      name: "Technology",
      image_url:
        "https://images.unsplash.com/photo-1612837017391-0e3b5b5b0b0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmljdGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    },
  ];

  if (categories.length === 0) return <h1>Loading...</h1>;


  return (
    <div>
      <FeatureCard cards={categories} />
      <ProductCard />
    </div>
  );
};

export default Products;
