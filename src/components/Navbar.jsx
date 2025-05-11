import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/nav_logo_2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    setDropdownOpen(false);
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/30 border-b border-white/20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="UniGold Logo"
            className="h-25 w-25 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          <motion.button
            onClick={() => navigate("/")}
            className="relative text-black hover:text-orange-400 font-medium transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Home
            <motion.span
              className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-400"
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {["products", "why-us", "contact"].map((link, index) => (
            <motion.button
              key={index}
              onClick={() => scrollToSection(link)}
              className="relative text-black hover:text-orange-400 font-medium transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {link === "products"
                ? "Products"
                : link === "why-us"
                ? "Why Us"
                : "Contact"}
              <motion.span
                className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-400"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}

          <div className="relative" ref={dropdownRef}>
            <motion.button
              className="flex items-center text-black hover:text-orange-400 font-medium transition-colors duration-300"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              whileHover={{ scale: 1.05 }}
            >
              About
              <ChevronDown
                size={16}
                className={`ml-1 transform transition-transform duration-300 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
              <motion.span
                className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-400"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {dropdownOpen && (
              <motion.div
                className="absolute top-full mt-2 w-56 rounded-lg shadow-xl py-1 bg-gradient-to-br from-orange-400 to-yellow-300 overflow-hidden border border-orange-200"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2 bg-white/90 m-1 rounded-md flex flex-col gap-1">
                  <Link
                    to="/team"
                    className="flex items-center px-3 py-2 text-sm text-gray-800 hover:bg-gradient-to-r hover:from-orange-100 hover:to-yellow-100 hover:text-orange-600 rounded-md transition-all duration-300 font-medium"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Our Team
                  </Link>
                  <Link
                    to="/gallery"
                    className="flex items-center px-3 py-2 text-sm text-gray-800 hover:bg-gradient-to-r hover:from-orange-100 hover:to-yellow-100 hover:text-orange-600 rounded-md transition-all duration-300 font-medium"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Image Gallery
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white/90 backdrop-blur-md px-6 py-4 space-y-4 border-t border-orange-200 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <button
            onClick={() => navigate("/")}
            className="block w-full text-left text-black font-semibold hover:text-orange-500 transition-colors duration-300"
          >
            Home
          </button>

          {["products", "why-us", "contact"].map((link, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(link)}
              className="block w-full text-left text-black font-semibold hover:text-orange-500 transition-colors duration-300"
            >
              {link === "products"
                ? "Products"
                : link === "why-us"
                ? "Why Us"
                : "Contact"}
            </button>
          ))}

          {/* Direct About Links on Mobile */}
          <div className="space-y-2">
            <p className="text-black font-semibold">About</p>
            <div className="ml-4 space-y-2">
              <Link
                to="/team"
                onClick={() => setIsOpen(false)}
                className="block text-gray-800 hover:text-orange-500 transition-colors duration-300"
              >
                Our Team
              </Link>
              <Link
                to="/gallery"
                onClick={() => setIsOpen(false)}
                className="block text-gray-800 hover:text-orange-500 transition-colors duration-300"
              >
                Image Gallery
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
