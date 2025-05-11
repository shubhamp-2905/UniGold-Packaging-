import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Consultation",
    description: "Understanding your packaging needs and specifications.",
  },
  {
    title: "Design & Sampling",
    description: "Crafting custom packaging designs and samples for approval.",
  },
  {
    title: "Production",
    description: "Manufacturing with precision using high-quality materials.",
  },
  {
    title: "Quality Check & Delivery",
    description: "Rigorous checks followed by safe, on-time delivery.",
  },
];

const Process = () => {
  return (
    <section
      className="relative w-full py-24 bg-gray-50 overflow-hidden font-sans"
      id="process"
    >
      {/* Orange Decorative Blob - Bottom Right */}
      <motion.div
        className="absolute -bottom-32 -right-20 w-[500px] h-[500px] bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0"
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
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">
            Packaging Process
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative bg-white border border-gray-200 hover:border-orange-400 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-orange-400 text-white font-bold rounded-full flex items-center justify-center text-lg shadow-lg">
                {index + 1}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
