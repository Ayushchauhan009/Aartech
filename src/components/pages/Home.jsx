import React from "react";
import { Navbar, Footer } from "../layout";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex h-screen pt-[88px] justify-center">
        <Link
          to="/industries"
          className="w-[336px] h-[176px] font-bold text-black hover:text-white flex justify-center items-center font-barlow text-[18px] link"
        >
          INDUSTRIES
        </Link>
        <Link
          to="/products"
          className="w-[336px] h-[176px] font-bold text-black hover:text-white flex justify-center items-center font-barlow text-[18px] link"
        >
          PRODUCTS
        </Link>
        <Link
          to="/solutions"
          className="w-[336px] h-[176px] font-bold text-black hover:text-white flex justify-center items-center font-barlow text-[18px] link"
        >
          SOLUTIONS
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
