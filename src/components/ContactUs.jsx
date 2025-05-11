import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const formRef = useRef();
  const [status, setStatus] = useState({ message: "", type: "" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1idoejj", // Replace with your EmailJS service ID
        "template_9wyr2eu", // Replace with your EmailJS template ID
        formRef.current,
        "YewzogT7IYBgCDJKg" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus({ message: "Message sent successfully!", type: "success" });
          formRef.current.reset();

          setTimeout(() => {
            setStatus({ message: "", type: "" });
          }, 5000);
        },
        (error) => {
          setStatus({
            message: "Something went wrong. Please try again.",
            type: "error",
          });
          console.error(error.text);

          setTimeout(() => {
            setStatus({ message: "", type: "" });
          }, 5000);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 bg-white overflow-hidden font-sans"
    >
      {/* Orange Blob */}
      <motion.div
        className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0"
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
          Get In{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">
            Touch
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-6 bg-gray-50 p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {status.message && (
              <div
                className={`text-center p-4 rounded-md font-semibold ${
                  status.type === "success"
                    ? "bg-green-100 text-green-700 border border-green-300"
                    : "bg-red-100 text-red-700 border border-red-300"
                }`}
              >
                {status.message}
              </div>
            )}

            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="How can we help you?"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-orange-400 hover:bg-orange-500 transition duration-300 text-white font-semibold px-6 py-3 rounded-md"
            >
              Send Message
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="space-y-6 text-gray-700"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold text-orange-500">
              Unigold Packaging
            </h3>
            <p>
              <strong>Address:</strong> Plot 12B, Industrial Zone, Pune, India
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+918412015999 "
                className="text-orange-500 hover:underline"
              >
                +91 84120 15999
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:unigoldpackaging@gmail.com"
                className="text-orange-500 hover:underline"
              >
                unigoldpackaging@gmail.com
              </a>
            </p>
            <p>
              We’re here to help with your packaging needs. Reach out for
              quotes, queries, or to schedule a consultation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
