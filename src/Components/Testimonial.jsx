import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah B",
    img: "https://i.ibb.co/q3jvmDVr/111.jpg",
    text: "HobbyHub allowed me to easily connect with a group of passionate hikers in my area. I love the variety of hobby categories and the ease of discovering new activities. It's a great platform for meeting like-minded people!",
  },
  {
    name: "James L",
    img: "https://i.ibb.co/FkwtQRdW/1.webp",
    text: "I created a painting group on HobbyHub, and the process was so simple! The platform lets me manage group details with ease and keeps everything organized. It's perfect for anyone looking to share their passion with others.",
  },
  {
    name: "Emily K",
    img: "https://i.ibb.co/RGb150v3/Bid1-min.png",
    text: "As a book lover, I was able to find an amazing book club through HobbyHub. The user-friendly interface makes it easy to browse different groups and find one that fits my interests. A must-have for hobby enthusiasts!",
  },
  {
    name: "Michael D.",
    img: "https://i.ibb.co/5g6fkG2K/8.jpg",
    text: "I had a fantastic experience with HobbyHub when I joined a cooking group. It's so easy to interact with other members, and the platform gives me all the tools to stay updated on events. Definitely a game-changer for community building.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

const Testimonial = () => {
  return (
    <section className="my-12 px-2 md:px-0">
      <div className="w-full mx-auto bg-[#f3f4f6] rounded-2xl py-12 px-4 md:px-10 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#4F2FFB]">
          What hobby lovers say!
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="relative bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center border border-[#f3f4f6] hover:shadow-xl transition-shadow duration-300"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <FaQuoteLeft className="absolute left-6 top-6 text-[#4F2FFB] text-2xl opacity-30" />
              <FaQuoteRight className="absolute right-6 bottom-6 text-[#4F2FFB] text-2xl opacity-30" />
              <p className="text-gray-700 italic mb-8 mt-4">{t.text}</p>
              <div className="flex flex-col items-center mt-auto">
                <div className="w-16 h-16 rounded-full border-4 border-[#4F2FFB] -mt-12 mb-2 bg-white overflow-hidden shadow-md">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <span className="font-semibold text-[#4F2FFB] text-lg">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;