import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/award1.jpg";
import img2 from "../assets/award2.jpg";
import img3 from "../assets/award3.jpg";

const products = [
  {
    title: "Corrugated Sheets",
    description:
      "Durable and reliable sheets perfect for packaging and layering.",
    image: img1,
    tags: ["Durable", "Custom Size", "Eco-Friendly"],
  },
  {
    title: "Export Boxes",
    description: "Tailored for international shipping with maximum protection.",
    image: img3,
    tags: ["Heavy-duty", "Water-Resistant", "Stackable"],
  },
  {
    title: "Corrugated Rolls",
    description:
      "Flexible and protective rolls ideal for wrapping products securely.",
    image: img2,
    tags: ["Flexible", "Protective", "Cost-efficient"],
  },
];

const Products = () => {
  return (
    <section className="w-full py-24 bg-gray-50 font-sans" id="products">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-black mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">
            Products
          </span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 max-w-xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover our range of high-quality corrugated packaging solutions
          crafted to protect and elevate your brand.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col items-center text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {product.title}
              </h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="text-sm bg-orange-100 text-orange-500 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
