import React, { useState } from "react";

function SearchComponents() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Perform book search using the searchQuery state
    console.log("Search query:", searchQuery);
    // You can replace the console.log with your actual search logic
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <div className="flex items-center ">
        <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg rounded-r-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 opacity-30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            className="bg-gray-100 outline-none"
            type="text"
            placeholder="Book title or keyword..."
            value={searchQuery}
            onChange={handleInputChange}
          />
        </div>

        <div
          className="bg-red-600 py-4 px-5 text-white font-semibold rounded-lg rounded-l-none hover:shadow-lg transition duration-3000 cursor-pointer"
          onClick={handleSearch}
        >
          <span>Search</span>
        </div>
      </div>
    </div>
  );
}

export default SearchComponents;
