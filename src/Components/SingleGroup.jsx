import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const cardVariants = {
  initial: { scale: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" },
  hover: {
    scale: 1.04,
    boxShadow: "0 8px 32px rgba(79,47,251,0.15)",
    y: -8,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const SingleGroup = ({ group }) => {
  return (
    <motion.div
      className="flex flex-col bg-white dark:bg-[#232B3A] rounded-2xl shadow-md overflow-hidden transition-all duration-300"
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
    >
      <img
        src={group.imageURL}
        alt="Group-cover"
        className="object-cover object-center w-full h-[180px] rounded-t-2xl bg-white"
      />
      <div className="flex flex-col justify-between flex-1 p-6 gap-4">
        <div>
          <h2 className="text-xl font-semibold tracking-wide mb-4 dark:text-white">
            {group.groupName}
          </h2>
        </div>
        <Link to={`/groups/${group?._id}`}>
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#4F2FFB",
              color: "#fff",
              transition: { duration: 0.2 },
            }}
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-black text-[#E5D8FF] dark:bg-[#4F2FFB] dark:text-white cursor-pointer mt-4 transition-all"
            type="button"
          >
            See more
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default SingleGroup;