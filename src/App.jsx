import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Products from "./components/Product";
import Process from "./components/Process";
import CustomerReviews from "./components/CustomerReviews";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import ImageGallery from "./components/ImageGallery";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import ScrollToTopButton from "./components/ScrollToTopButton";
import TeamPage from "./components/TeamPage";

// Wrapper component to handle scroll to top on page change
const ScrollToTop = ({ children }) => {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

// Main content layout that includes all sections on homepage
const MainContent = () => {
  return (
    <>
      <Hero />
      <Products />
      <WhyUs />
      <Process />
      <About />
      {/* <CustomerReviews /> */}
      <ContactUs />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/gallery" element={<ImageGallery />} />
        </Routes>
      </ScrollToTop>
      <Footer />
      <ScrollToTopButton />

      <motion.a
        href="https://wa.me/918412015999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition duration-300"
        aria-label="Chat on WhatsApp"
        animate={{
          y: [0, -5, 0], // bounce effect
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <FaWhatsapp className="text-2xl" />
      </motion.a>
    </Router>
  );
};

export default App;
