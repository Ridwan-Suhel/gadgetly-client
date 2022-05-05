import React from "react";
import "./Footer.css";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="mt-5 py-2">
      <div className="container">
        <p className=" mb-0">
          copyright &copy; {year} gadgetly. All rights reserved{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
