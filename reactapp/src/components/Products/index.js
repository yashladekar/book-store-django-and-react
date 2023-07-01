import React from "react";

const Products = ({ products = [] }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product) => {
              console.log(product);
              return (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-sm border border-opacity-40 mb-1 cursor-pointer ">
                  <a
                    className="block relative h-48 rounded overflow-hidden"
                    href="/"
                  >
                    <img
                      alt="ecommerce"
                      className="object-contain object-center w-full h-full block"
                      src={product.image_url}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {product.author}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {product.title}
                    </h2>
                    <p className="mt-1 text-md font-semibold ">₹{product.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
