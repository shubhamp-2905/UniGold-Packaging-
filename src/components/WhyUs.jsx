import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaCogs, FaIndustry, FaClock } from "react-icons/fa";

const features = [
  {
    icon: <FaCheckCircle className="text-3xl text-orange-400" />,
    title: "Quality Assurance",
    description:
      "Every product undergoes rigorous quality checks before delivery.",
  },
  {
    icon: <FaCogs className="text-3xl text-orange-400" />,
    title: "Custom Solutions",
    description:
      "We design packaging solutions tailored to your specific needs.",
  },
  {
    icon: <FaIndustry className="text-3xl text-orange-400" />,
    title: "Industry Expertise",
    description:
      "Years of experience in providing packaging solutions across industries.",
  },
  {
    icon: <FaClock className="text-3xl text-orange-400" />,
    title: "Timely Delivery",
    description:
      "We understand the importance of deadlines and always deliver on time.",
  },
];

const WhyUs = () => {
  return (
    <section className="w-full py-24 bg-white font-sans" id="why-us">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-black mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Choose{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">
            Unigold?
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-6 text-left p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition duration-300 bg-gray-50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div>{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
