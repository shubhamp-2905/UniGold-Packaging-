import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const email = "unigoldpackaging@gmail.com";
const subject = "Want to know more about Unigold";
const body = "I am interested in your services.";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white pt-24 pb-10 font-sans overflow-hidden">
      {/* Orange Blob at Top */}
      <motion.div
        className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0"
        initial={{ scale: 0 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-10">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-orange-400 mb-3">
              Unigold Packaging
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Providing reliable, sustainable, and innovative packaging
              solutions tailored for your business.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-orange-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-orange-400 transition"
                >
                  Products
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-orange-400 transition">
                  Process
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="flex items-center gap-2 text-gray-400">
              <FaPhoneAlt className="text-orange-400" />{" "}
              <a href="tel:+918412015999">+91 8412015999</a>
            </p>
            <p className="flex items-center gap-2 text-gray-400">
              <FaEnvelope className="text-orange-400" />{" "}
              <a
                href={`mailto:${email}?subject=${encodeURIComponent(
                  subject
                )}&body=${encodeURIComponent(body)}`}
              >
                unigoldpackaging@gmail.com
              </a>
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition text-xl"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition text-xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/hanumant-narute-5116b57a/"
                className="text-gray-400 hover:text-orange-400 transition text-xl"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center text-sm text-gray-500 mt-10">
          © {new Date().getFullYear()} Unigold Packaging. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
