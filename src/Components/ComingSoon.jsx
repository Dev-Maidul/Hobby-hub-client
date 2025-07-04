import React from "react";
import { motion } from "framer-motion";
import { FaRegClock } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const ComingSoon = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-white">
      <motion.div
        className="bg-[#232B3A] rounded-2xl shadow-xl p-10 flex flex-col items-center max-w-lg w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <FaRegClock size={60} className="text-[#4F2FFB]" />
        </motion.div>
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-white mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Coming Soon
        </motion.h1>
        <motion.p
          className="text-lg text-[#E5D8FF] text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          We’re working hard to bring you something amazing. Stay tuned for updates!
        </motion.p>
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="h-2 w-32 rounded-full bg-gradient-to-r from-[#4F2FFB] to-[#A084FF] animate-pulse"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ComingSoon;