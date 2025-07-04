import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AboutUs = () => {
  return (
    <motion.section
      className="w-full mx-auto px-6 py-16 bg-[#f3f4f6] mt-12 rounded-3xl"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-4xl font-bold mb-4 text-center"
        style={{ color: "#4F2FFB" }}
        variants={itemVariants}
      >
        About HobbyHub
      </motion.h1>
      <motion.p
        className="text-lg mb-10 text-center"
        style={{ color: "#A3A3C2" }}
        variants={itemVariants}
      >
        HobbyHub is your gateway to discovering, joining, and creating local hobby groups. Whether you’re passionate about books, hiking, painting, or any other interest, our platform helps you connect with like-minded people and build meaningful communities.
      </motion.p>
      <motion.div
        className="grid md:grid-cols-2 gap-8"
        variants={containerVariants}
      >
        <motion.div
          className="rounded-lg shadow-md p-6"
          style={{ background: "#232B3A" }}
          variants={itemVariants}
        >
          <h2 className="text-2xl font-semibold mb-2 text-white">
            Our Mission
          </h2>
          <p className="text-white">
            We believe everyone deserves a space to share their passions. HobbyHub empowers individuals to create and join groups, fostering real-world connections and vibrant local communities.
          </p>
        </motion.div>
        <motion.div
          className="rounded-lg shadow-md p-6"
          style={{ background: "#232B3A" }}
          variants={itemVariants}
        >
          <h2 className="text-2xl font-semibold mb-2 text-white">
            What We Offer
          </h2>
          <ul className="list-disc pl-5 text-white space-y-1">
            <li>Discover and join local hobby groups</li>
            <li>Create your own group with custom details</li>
            <li>Secure authentication (Email, Google, GitHub)</li>
            <li>Personal dashboard for group management</li>
            <li>Modern, responsive, and accessible design</li>
            <li>Dark/Light mode for your comfort</li>
          </ul>
        </motion.div>
      </motion.div>
      <motion.div
        className="mt-12 text-center"
        variants={itemVariants}
      >
        <h3 className="text-xl font-semibold mb-2" style={{ color: "#4F2FFB" }}>
          Join us and turn your passion into a community!
        </h3>
        <p className="text-[#A3A3C2]">
          HobbyHub is built by hobbyists, for hobbyists. We’re always improving—your feedback and ideas are welcome!
        </p>
      </motion.div>
    </motion.section>
  );
};

export default AboutUs;