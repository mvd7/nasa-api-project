import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-900">
      <Fade left>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/NASA_Worm_logo.svg/1280px-NASA_Worm_logo.svg.png"
              className="h-8 mr-3"
              alt="Logo"
            />
          </a>
          <div className="flex md:order-2">
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:bg-gray-900">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4  rounded text-white md:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/pic-of-the-day"
                  className="block py-2 pl-3 pr-4 \ rounded hover:text-blue-700 text-white md:text-white"
                >
                  Picture Of The Day
                </Link>
              </li>
              <li>
                <Link
                  to="mars-rover"
                  className="block py-2 pl-3 pr-4 rounded hover:text-blue-700 text-white md:text-white"
                >
                  Mars Rover
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Fade>
    </nav>
  );
};

export default Navbar;
