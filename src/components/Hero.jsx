import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  ArrowRightCircle,
  PackageCheck,
  Leaf,
  Globe2,
  Shield,
  Award,
  ChevronDown,
  Box,
} from "lucide-react";
import award1 from "../assets/award1.jpg";
import award2 from "../assets/award2.jpg";
import award3 from "../assets/award3.jpg";

// Custom Typewriter component to replace react-simple-typewriter
const CustomTypewriter = ({
  words,
  loop,
  typeSpeed = 70,
  deleteSpeed = 50,
  delaySpeed = 1200,
}) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(typeSpeed);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      // Deleting phase
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
        setTypingSpeed(deleteSpeed);

        // When word is fully deleted
        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(typeSpeed);
        }
      }
      // Typing phase
      else {
        setText(currentWord.substring(0, text.length + 1));
        setTypingSpeed(typeSpeed);

        // When word is fully typed
        if (text === currentWord) {
          setTypingSpeed(delaySpeed);
          setIsDeleting(true);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, delaySpeed]);

  return (
    <span>
      {text || words[0].charAt(0)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Hero = () => {
  const carouselItems = [
    {
      image: award1,
      alt: "Premium packaging solutions",
      title: "Premium Packaging Solutions",
      description: "Custom-designed to perfectly protect your products",
    },
    {
      image: award2,
      alt: "Sustainable materials",
      title: "Eco-Friendly Materials",
      description: "Responsibly sourced and fully recyclable packaging options",
    },
    {
      image: award3,
      alt: "International shipping boxes",
      title: "Export-Ready Packaging",
      description: "Durable solutions that meet global shipping standards",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  // Parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const { clientX, clientY } = e;
        const { width, height, left, top } =
          heroRef.current.getBoundingClientRect();
        const x = (clientX - left) / width;
        const y = (clientY - top) / height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Carousel autoplay
  useEffect(() => {
    let interval;
    if (autoplay && !isHovering) {
      interval = setInterval(() => {
        setCurrentSlide((prev) =>
          prev === carouselItems.length - 1 ? 0 : prev + 1
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, carouselItems.length, isHovering]);

  const nextSlide = () => {
    setAutoplay(false);
    setCurrentSlide((prev) =>
      prev === carouselItems.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setAutoplay(false);
    setCurrentSlide((prev) =>
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );
  };

  // Featured animations variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // Scroll animation
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden bg-white pt-[40px]"
      ref={heroRef}
    >
      {/* Animated Background Elements */}
      <div
        className="absolute inset-0 bg-repeat opacity-5 z-0"
        style={{
          backgroundImage: "url('/src/assets/intro-bg.jpg')",
          backgroundSize: "200px",
        }}
      />

      {/* Dynamic Blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          x: mousePosition.x * 10,
          y: mousePosition.y * 10,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-500 rounded-full blur-2xl opacity-10"
        animate={{
          x: -mousePosition.x * 20,
          y: -mousePosition.y * 20,
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          delay: 0.8,
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute top-1/2 -right-20 w-64 h-64 bg-orange-300 rounded-full blur-3xl opacity-10"
        animate={{
          x: -mousePosition.x * 15,
          y: mousePosition.y * 15,
          opacity: [0.05, 0.2, 0.05],
        }}
        transition={{
          delay: 0.3,
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Floating Box Elements */}
      <motion.div
        className="hidden lg:block absolute top-24 right-32 bg-orange-100 p-2 rounded-lg opacity-70 shadow-lg"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Box size={20} className="text-orange-500" />
      </motion.div>
      <motion.div
        className="hidden lg:block absolute bottom-32 left-16 bg-yellow-100 p-2 rounded-lg opacity-70 shadow-lg"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -7, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1.5,
        }}
      >
        <PackageCheck size={20} className="text-yellow-600" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 sm:px-8 min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-12 relative z-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.h1
              variants={itemVariants}
              className="text-[clamp(2rem,5vw,4rem)] font-extrabold text-black leading-tight mb-6"
            >
              <span className="block relative overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="inline-block"
                >
                  Packaging that
                </motion.span>
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 inline-block relative mt-2">
                <CustomTypewriter
                  words={[
                    "Protects",
                    "Performs",
                    "Impresses",
                    "Delivers",
                    "Lasts",
                  ]}
                  loop={0}
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1200}
                />
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 max-w-md mx-auto lg:mx-0"
            >
              Unigold Packaging manufactures high-quality corrugated sheets,
              export boxes, and rolls tailored to your specific needs.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold flex items-center gap-2 justify-center transition duration-300 shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRightCircle size={20} />
                </motion.span>
              </motion.a>
              <motion.button
                onClick={scrollToProducts}
                className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-50 transition duration-300 inline-block text-center relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Our Products</span>
                <motion.span
                  className="absolute inset-0 bg-orange-100 z-0"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>

            {/* Features */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10"
            >
              {[
                { icon: <Leaf size={24} />, label: "Eco-Friendly" },
                { icon: <PackageCheck size={24} />, label: "Custom Quality" },
                { icon: <Globe2 size={24} />, label: "Export-Ready" },
                { icon: <Shield size={24} />, label: "Guaranteed Protection" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center gap-2 group"
                >
                  <motion.div
                    className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <p className="text-sm text-gray-600 font-medium">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="hidden lg:flex justify-center mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <motion.div
              className="flex flex-col items-center text-gray-400 cursor-pointer"
              onClick={() => scrollToProducts()}
              whileHover={{ scale: 1.1, color: "#f97316" }}
            >
              <p className="text-sm mb-1">Scroll to explore</p>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Carousel */}
        <div className="w-full lg:w-1/2 relative sm:h-[500px] h-[420px] mt-8 sm:mt-0">
          <motion.div
            className="w-full h-full bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl shadow-2xl overflow-hidden relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{
              boxShadow: "0 25px 50px -12px rgba(249, 115, 22, 0.25)",
            }}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
          >
            <div className="relative w-full h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  className="absolute inset-0 flex flex-col"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative h-3/4 overflow-hidden">
                    <motion.img
                      src={carouselItems[currentSlide].image}
                      alt={carouselItems[currentSlide].alt}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      animate={{ scale: isHovering ? 1.05 : 1 }}
                      transition={{ duration: 3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    {/* Image Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-orange-500 mix-blend-overlay"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.1 }}
                      exit={{ opacity: 0 }}
                    />
                  </div>
                  <div className="p-4 bg-white h-1/4 relative">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-base sm:text-lg font-bold text-orange-500">
                        {carouselItems[currentSlide].title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        {carouselItems[currentSlide].description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dots */}
              <div className="absolute bottom-28 left-0 right-0 flex justify-center gap-2 z-10">
                {carouselItems.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setAutoplay(false);
                      setCurrentSlide(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentSlide === index ? "bg-orange-500" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    animate={
                      currentSlide === index
                        ? { width: "1.5rem" }
                        : { width: "0.75rem" }
                    }
                  />
                ))}
              </div>

              {/* Arrows */}
              <motion.button
                onClick={prevSlide}
                className="absolute left-2 top-1/3 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all"
                aria-label="Previous slide"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(255, 255, 255, 1)",
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <ArrowLeft size={20} className="text-orange-500" />
              </motion.button>
              <motion.button
                onClick={nextSlide}
                className="absolute right-2 top-1/3 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all"
                aria-label="Next slide"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(255, 255, 255, 1)",
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <ArrowRight size={20} className="text-orange-500" />
              </motion.button>
            </div>
          </motion.div>

          {/* Award Icon */}
          <motion.div
            className="absolute -bottom-4 -right-4 bg-gradient-to-br from-yellow-400 to-yellow-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: [0, 10, 0] }}
            transition={{
              delay: 1.5,
              duration: 0.5,
              type: "spring",
              rotate: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 10px 25px -5px rgba(234, 179, 8, 0.5)",
            }}
          >
            <Award size={32} />
          </motion.div>

          {/* Quality Seal */}
          <motion.div
            className="absolute -top-2 -left-2 bg-white text-orange-500 text-xs font-bold p-2 rounded-full shadow-md flex items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.7, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="w-16 h-16 rounded-full border-2 border-orange-500 flex items-center justify-center">
              <div className="text-center">
                <div className="text-xs">TOP</div>
                <div className="text-sm font-bold">QUALITY</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
