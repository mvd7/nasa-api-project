import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} NASA. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
