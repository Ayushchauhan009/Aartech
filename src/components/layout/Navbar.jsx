import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { logo } from "../../assets/images";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [selectedStock, setSelectedStock] = useState("BSE");
  const [realTimeValue, setRealTimeValue] = useState("");

  const stockSymbols = [
    "GOOGL",
    "AMZN",
    "SENSEX",
    "AAPL",
    "MSFT",
    "TCS",
    "ATGL",
  ]; // Add more symbols as needed

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${selectedStock}&apikey=8U6JWYMP6AWMOSO9`
        );
        const globalQuote = response.data["Global Quote"];

        // Find the key that represents the real-time price
        const priceKey = Object.keys(globalQuote).find((key) =>
          key.includes("price")
        );

        if (priceKey) {
          const realTimePrice = globalQuote[priceKey];
          setRealTimeValue(realTimePrice);
        } else {
          console.error("Real-time price property not found.");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [selectedStock]);

  const handleStockChange = (event) => {
    setSelectedStock(event.target.value);
    setRealTimeValue("");
  };

  return (
    <div className="navbar-bg fixed inset-0 h-[88px] flex items-center justify-between ">
      <div className="flex items-center justify-between w-full px-5 md:px-20">
        <Link to="/">
          <img
            src={logo}
            alt=""
            className="w-[71px] h-[49px] md:w-auto md:h-auto"
          />
        </Link>
        <div className="flex items-center  flex-row-reverse lg:flex-row">
          <button
            className="md:hidden z-50 text-white ml-4"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div className="flex items-center space-x-4">
            <select
              value={selectedStock}
              onChange={handleStockChange}
              className="inline-block lg:hidden ouline-none text-white ml-4 py-1 px-3 font-barlow font-semibold bse-bg "
            >
              {stockSymbols.map((symbol) => (
                <option key={symbol} value={symbol}>
                  {symbol}
                </option>
              ))}
            </select>
            <p className="font-medium block lg:hidden text-white">
              {realTimeValue}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${
          isMenuOpen
            ? "flex flex-col py-20 px-8 text-[24px] space-y-4 fixed h-screen z-20 inset-0 bg-blue-900"
            : "hidden lg:flex"
        } flex md:items-center font-barlow md:space-x-7 mt-0 px-5 md:px-20`}
      >
        <Link
          to="/about"
          className="text-white font-bold hover:opacity-75"
          onClick={() => setIsMenuOpen(false)}
        >
          ABOUT
        </Link>
        <Link
          to="/brands"
          className="text-white font-bold hover:opacity-75"
          onClick={() => setIsMenuOpen(false)}
        >
          BRANDS
        </Link>
        <Link
          to="/media"
          className="text-white font-bold hover:opacity-75"
          onClick={() => setIsMenuOpen(false)}
        >
          MEDIA
        </Link>
        <Link
          to="/investors"
          className="text-white font-bold hover:opacity-75"
          onClick={() => setIsMenuOpen(false)}
        >
          INVESTORS
        </Link>
        <Link
          to="/contact"
          className="text-white font-bold hover:opacity-75"
          onClick={() => setIsMenuOpen(false)}
        >
          CONTACT
        </Link>
        <div className="flex items-center space-x-4">
          <select
            value={selectedStock}
            onChange={handleStockChange}
            className="lg:inline-block hidden ouline-none text-white ml-4 py-1 px-3 font-barlow font-semibold bse-bg "
          >
            {stockSymbols.map((symbol) => (
              <option key={symbol} value={symbol}>
                {symbol}
              </option>
            ))}
          </select>
          <p className="font-medium text-white">{realTimeValue}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
