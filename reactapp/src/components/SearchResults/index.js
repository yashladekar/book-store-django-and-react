import React from "react";
import { useLocation } from "react-router-dom";

function SearchResults() {
  const location = useLocation();
  const results = location.state?.results || [];
  // console.log("Results:", results);
  return (
    <div>
      {results.map((book) => (
        <div key={book.id}>
          <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  {/* Before they sold out
                  <br class="hidden lg:inline-block" />
                  readymade gluten */}
                  {book.title}
                </h1>
                <p class="mb-8 leading-relaxed text-gray-600">
                  By: {book.author}
                  <br />
                  <span className=" text-yellow-400 font-semibold capital ">
                    {" "}
                    Ratings {book.ratings}
                  </span>
                </p>
                <p class="mb-8 leading-relaxed">{book.description}</p>
                <div class="flex justify-center">
                  <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    ₹{book.price}
                  </button>
                  <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                  class="object-cover object-center rounded"
                  alt="hero"
                  src={book.image_url}
                />
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
