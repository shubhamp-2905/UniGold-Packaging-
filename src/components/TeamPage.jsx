import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TeamPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  // Team member data
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Hammad Nizam",
      position: "Founder & CEO",
      image: "/api/placeholder/400/500",
      department: "leadership",
      bio: "Dr. Hammad Nizam is the visionary behind UniGold, bringing over 15 years of industry experience and leadership."
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Head of Operations",
      image: "/api/placeholder/400/500",
      department: "leadership",
      bio: "Sarah oversees all operational aspects of UniGold with exceptional organizational skills and strategic insight."
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "Lead Developer",
      image: "/api/placeholder/400/500",
      department: "technical",
      bio: "Michael leads our development team with innovative solutions and cutting-edge technical expertise."
    },
    {
      id: 4,
      name: "Priya Patel",
      position: "Marketing Director",
      image: "/api/placeholder/400/500",
      department: "marketing",
      bio: "Priya drives our brand strategy with creative campaigns and market-leading initiatives."
    },
    {
      id: 5,
      name: "James Wilson",
      position: "Product Manager",
      image: "/api/placeholder/400/500",
      department: "product",
      bio: "James ensures our products meet the highest standards of quality and innovation."
    },
    {
      id: 6,
      name: "Aisha Mohammed",
      position: "Customer Success Manager",
      image: "/api/placeholder/400/500",
      department: "support",
      bio: "Aisha leads our customer success initiatives, ensuring client satisfaction at every interaction."
    }
  ];

  // Filter options
  const filters = [
    { id: "all", label: "All" },
    { id: "leadership", label: "Leadership" },
    { id: "technical", label: "Technical" },
    { id: "marketing", label: "Marketing" },
    { id: "product", label: "Product" },
    { id: "support", label: "Support" }
  ];

  // Filter team members based on active filter
  const filteredMembers = activeFilter === "all" 
    ? teamMembers 
    : teamMembers.filter(member => member.department === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white pt-24 pb-16">
      {/* Back button */}
      <Link to="/" className="inline-flex items-center ml-8 mb-6 text-orange-500 hover:text-orange-600 transition-colors">
        <ArrowLeft size={20} className="mr-1" />
        <span>Back to Home</span>
      </Link>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-black">Our</span>
          <span className="text-orange-400"> Team</span>
        </h1>
        <div className="h-1 w-24 bg-orange-400 mx-auto"></div>
        <p className="mt-6 text-gray-700 max-w-2xl mx-auto px-4">
          Meet the passionate experts behind UniGold. Our diverse team combines industry knowledge, 
          technical expertise, and creative vision to deliver exceptional results.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-12 px-4">
        {filters.map((filter) => (
          <motion.button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === filter.id 
                ? "bg-orange-400 text-white" 
                : "bg-white text-gray-700 hover:bg-orange-100"
            } shadow-md`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter.label}
          </motion.button>
        ))}
      </div>

      {/* Team Members Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredMembers.map((member) => (
          <motion.div
            key={member.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            <div className="h-64 overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-1">{member.name}</h3>
              <p className="text-orange-500 font-medium mb-3">{member.position}</p>
              <div className="w-12 h-1 bg-orange-400 mb-4"></div>
              <p className="text-gray-600">{member.bio}</p>
              
              <div className="mt-6 flex justify-center space-x-3">
                <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto mt-16 p-8 bg-gradient-to-r from-orange-400 to-yellow-300 rounded-xl shadow-xl text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Join Our Team</h2>
        <p className="text-white mb-6">
          We're always looking for talented individuals to join our growing team. Check out our current openings!
        </p>
        <motion.button
          className="px-8 py-3 bg-white text-orange-500 font-bold rounded-full shadow-lg"
          whileHover={{ scale: 1.05, backgroundColor: "#f8fafc", color: "#f97316" }}
          whileTap={{ scale: 0.95 }}
        >
          View Careers
        </motion.button>
      </div>
    </div>
  );
};

export default TeamPage;