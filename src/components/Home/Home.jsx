import React from "react";
import "./Home.css";
import { Fade } from "react-reveal";

const Home = () => {
  return (
    <div className="bg-gray-800 text-white flex min-h-screen overflow-hidden">
      <div className="w-1/2 p-4 flex flex-col items-center justify-center">
        <Fade left>
          <h1 className="text-3xl font-extrabold mb-4 text-blue-400">
            Explore the Universe with NASA's API
          </h1>

          <p className="text-lg">
            Explore the cosmos with stunning images and descriptions of the
            universe's wonders.
          </p>
        </Fade>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <a
          href="https://www.nasa.gov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Fade right>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1224px-NASA_logo.svg.png"
              alt="NASA Logo"
              className="max-w-full h-auto"
            />
          </Fade>
        </a>
      </div>
    </div>
  );
};

export default Home;
