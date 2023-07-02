import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/books/${id}/`);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, [id]);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={product.title}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded"
            src={product.image_url}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product?.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>
            <div className="flex mb-4">
              {/* <Rating value={product.ratings} /> */}
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 text-yellow-400 text-justify font-semibold ">
                Rating: {product.ratings}
              </span>
              {/* <span className="text-gray-600 ml-3">{product.ratings}</span> */}
            </div>
            <p className="leading-relaxed">{product.description}</p>
            <div className="flex my-2 border-t-4 p-2 border-opacity-25">
              <span className="title-font font-medium text-2xl text-gray-900">
                ₹{product.price}
              </span>
              <button className="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">
                Buy Now
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
