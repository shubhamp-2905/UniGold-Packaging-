import React from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Anita Desai",
    position: "Procurement Head, PackPlus Pvt Ltd",
    review:
      "Unigold’s packaging quality is unmatched. Our products arrive safe and presentable every time. Highly recommended!",
  },
  {
    name: "Ramesh Iyer",
    position: "Owner, Iyer Foods Export",
    review:
      "They customized every box to match our brand perfectly. The team was prompt and very professional throughout.",
  },
  {
    name: "Sunita Kapoor",
    position: "Logistics Manager, CargoCare India",
    review:
      "The delivery timeline and the attention to detail in quality control was excellent. Will definitely continue working with Unigold.",
  },
];

const CustomerReviews = () => {
  return (
    <section
      id="testimonials"
      className="relative w-full py-24 bg-gray-50 overflow-hidden font-sans"
    >
      {/* Decorative Orange Blob */}
      <motion.div
        className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0"
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
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">
            Clients Say
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md hover:shadow-xl transition duration-300 rounded-xl p-6 text-gray-700"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className="italic text-lg mb-4">“{review.review}”</p>
              <div className="text-sm font-semibold text-orange-500">
                {review.name}
              </div>
              <div className="text-sm text-gray-500">{review.position}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
