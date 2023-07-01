import React from "react";
import { Link } from "react-router-dom";
import SearchComponents from "../SearchComponents";
const navigations = [
  { name: "Home", href: "/", current: true },
  { name: "Products", href: "/products", current: false },
  // { name: "About", href: "/about", current: false },
  // { name: "Contact", href: "/contact", current: false },
];

export default function Header() {
  return (
    <div>
      <header className="text-gray-600 body-font shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to={"/"}
            className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">BooksLabs</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {navigations.map((navigation) => (
              <Link to={navigation.href} className="mr-5 hover:text-gray-900">
                {navigation.name}
              </Link>
            ))}
            <SearchComponents />

            {/* <a className="mr-5 hover:text-gray-900" href="/">
              First Link
            </a>
            <a className="mr-5 hover:text-gray-900" href="/">
              Second Link
            </a>
            <a className="mr-5 hover:text-gray-900" href="/">
              Third Link
            </a>
            <a className="mr-5 hover:text-gray-900" href="/">
              Fourth Link
            </a> */}
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 py-2 ">
            My Cart
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}
