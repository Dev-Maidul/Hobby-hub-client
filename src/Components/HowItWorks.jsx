import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaUsers, FaPlusCircle } from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch size={32} className="text-[#4F2FFB]" />,
    title: "Discover Groups",
    desc: "Browse and find hobby groups that match your interests in your local area.",
  },
  {
    icon: <FaPlusCircle size={32} className="text-[#4F2FFB]" />,
    title: "Create Your Own",
    desc: "Start a new group, set your preferences, and invite others to join your passion.",
  },
  {
    icon: <FaUsers size={32} className="text-[#4F2FFB]" />,
    title: "Join & Connect",
    desc: "Join groups, attend meetups, and connect with like-minded people.",
  },
];

const HowItWorks = () => (
  <section className="py-16 bg-[#f3f4f6] mb-12 rounded-3xl">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#4F2FFB]">
        How It Works
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            className="bg-white  rounded-2xl shadow-md p-8 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-[#4F2FFB]">{step.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;