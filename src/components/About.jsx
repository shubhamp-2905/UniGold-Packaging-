import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import ceo from "../assets/ceo.jpg";
import { Leaf, Globe, Box, Award, ChevronRight, Star } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const badges = [
    { label: "ISO Certified", icon: Award },
    { label: "Eco-Friendly", icon: Leaf },
    { label: "Premium Quality", icon: Star },
    { label: "Export Ready", icon: Globe },
  ];

  const testimonials = [
    {
      text: "Unigold's packaging solutions have transformed how our products are perceived in the market.",
      author: "Shivam Pawar",
    },
    {
      text: "The durability and eco-friendly nature of Unigold's packaging aligns perfectly with our brand values.",
      author: "Manish Wagh",
    },
    {
      text: "Working with Unigold has streamlined our entire shipping process while elevating our presentation.",
      author: "Sarvesh Mogare",
    },
  ];

  const services = [
    {
      icon: <Box className="text-orange-500 w-10 h-10" />,
      title: "Custom Design",
      description:
        "Tailored packaging solutions that reflect your brand identity",
    },
    {
      icon: <Leaf className="text-green-500 w-10 h-10" />,
      title: "Eco-Friendly",
      description: "Sustainable materials with minimal environmental impact",
    },
    {
      icon: <Globe className="text-blue-500 w-10 h-10" />,
      title: "Global Shipping",
      description: "Export-ready packaging that meets international standards",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-32 overflow-hidden font-sans bg-gradient-to-b from-white to-orange-50"
    >
      {/* Enhanced Decorative Elements */}
      <motion.div
        className="absolute top-1/2 -right-20 w-[600px] h-[600px] bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
        initial={{ scale: 0 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -top-20 -left-20 w-80 h-80 bg-orange-100 rounded-full opacity-30 blur-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/3 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      {/* Golden Accent Line */}
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-300 via-yellow-400 to-orange-300"></div> */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* CEO Photo with Enhanced Frame - SMALLER SIZE */}
        <motion.div
          className="w-full md:w-2/5"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative max-w-xs mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-yellow-300 transform rotate-3 rounded-2xl"></div>
            <div className="rounded-2xl overflow-hidden shadow-xl relative z-10 bg-white p-2 transform hover:-rotate-2 transition duration-500">
              <div className="aspect-square overflow-hidden rounded-xl">
                <img
                  src={ceo}
                  alt="CEO of Unigold"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg">
                <h4 className="font-bold text-gray-800">Hanumant Narute</h4>
                <p className="text-orange-600 text-sm">Founder & CEO</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text Content with Enhanced Styling */}
        <motion.div
          className="w-full md:w-3/5 space-y-6"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">
              About{" "}
            </span>
            <span className="text-gray-800">Unigold</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-300"></div>
          <p className="text-gray-700 text-lg leading-relaxed">
            At Unigold Packaging, we believe packaging is more than just a box —
            it's a statement of your brand's quality and commitment. Since our
            inception, we've been dedicated to delivering strong, eco-friendly,
            and export-ready corrugated solutions to businesses across the
            globe.
          </p>
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 border-l-4 border-orange-400 rounded-r-lg shadow-sm hover:shadow-md transition duration-300">
            <p className="italic text-gray-700">
              "We don't just pack your product, we protect your brand."
            </p>
            <p className="font-semibold text-gray-800 mt-2">
              – CEO, Unigold Packaging
            </p>
          </div>

          {/* <motion.button
            className="mt-4 bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white py-3 px-6 rounded-full flex items-center gap-2 shadow-lg shadow-orange-200 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Services <ChevronRight className="w-4 h-4" />
          </motion.button> */}
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto mt-24 px-6 md:px-12 lg:px-20">
        {/* <h3 className="text-3xl font-bold text-center mb-12">
          Our{" "}
          <span className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">
            Soltuions
          </span>
        </h3> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="mb-4 bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-2">{service.title}</h4>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Animated Counters */}
      <div ref={ref} className="mt-24 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-10 shadow-xl">
          <div className="flex justify-center gap-8 lg:gap-16 flex-wrap text-center">
            {[
              {
                label: "Years of Experience",
                end: 15,
                icon: (
                  <Award className="w-10 h-10 mb-3 mx-auto text-orange-400" />
                ),
              },
              {
                label: "Products Delivered",
                end: 5000,
                icon: (
                  <Box className="w-10 h-10 mb-3 mx-auto text-orange-400" />
                ),
              },
              {
                label: "Global Clients",
                end: 120,
                icon: (
                  <Globe className="w-10 h-10 mb-3 mx-auto text-orange-400" />
                ),
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-orange-400 transition duration-300"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                {item.icon}
                <div className="text-orange-400 text-4xl font-bold">
                  {inView ? (
                    <CountUp end={item.end} duration={3} />
                  ) : (
                    <span>0</span>
                  )}
                  <span className="text-orange-300">+</span>
                </div>
                <div className="text-gray-300 text-base mt-2">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-24 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <h3 className="text-3xl font-bold text-center mb-12">
          Client Testimonials
        </h3>
        <div className="relative bg-white rounded-2xl shadow-xl p-8">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-orange-400 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl">
            "
          </div>
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center px-4 py-8"
          >
            <p className="text-xl text-gray-700 italic mb-6">
              {testimonials[activeTestimonial].text}
            </p>
            <h4 className="font-bold text-gray-800">
              {testimonials[activeTestimonial].author}
            </h4>
            <p className="text-orange-500">
              {testimonials[activeTestimonial].position}
            </p>
          </motion.div>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-3 h-3 rounded-full ${
                  i === activeTestimonial ? "bg-orange-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Timeline */}
      <div className="mt-24 max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12">Our Journey</h3>
        <ol className="relative border-l-2 border-orange-300 space-y-12 ml-4">
          {[
            {
              year: "2009",
              title: "Founded",
              desc: "Started operations with a small team and big vision.",
              icon: <Box className="w-5 h-5" />,
            },
            {
              year: "2014",
              title: "Global Reach",
              desc: "Expanded exports to 10+ countries.",
              icon: <Globe className="w-5 h-5" />,
            },
            {
              year: "2018",
              title: "Eco-friendly Initiative",
              desc: "Switched to 100% recyclable packaging materials.",
              icon: <Leaf className="w-5 h-5" />,
            },
            {
              year: "2023",
              title: "5,000+ Orders",
              desc: "Milestone of over 5000+ products delivered.",
              icon: <Award className="w-5 h-5" />,
            },
          ].map((item, i) => (
            <motion.li
              key={i}
              className="ml-10"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-full -left-4 ring-4 ring-white">
                <span className="text-white">{item.icon}</span>
              </span>
              <div className="p-4 bg-white rounded-lg shadow-md border-l-4 border-orange-400 hover:shadow-lg transition duration-300">
                <div className="mb-1 text-sm font-bold text-orange-500 flex items-center">
                  {item.year}
                </div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>

      {/* Quality Badge Section */}
      <div className="mt-24 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={i}
                className="bg-white/80 backdrop-blur-sm p-4 rounded-lg text-center border border-gray-100 shadow-sm hover:shadow-md transition duration-300"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Icon className="text-orange-500 w-6 h-6" />
                </div>
                <p className="font-medium text-gray-800">{badge.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
