import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    q: "How do I join a group on HobbyHub?",
    a: `To join a group on HobbyHub, simply visit the "All Groups" page where you'll find a list of available hobby groups. Click on the "See More" button for a group you're interested in. On the group details page, if the group is still accepting members, you'll see a "Join Group" button. Click it, and you'll become a part of the group. If the group’s start date has already passed, a message will appear indicating that the group is no longer active. You can then explore other groups or create a new one! Make sure you're logged in to join or create a group. Enjoy meeting like-minded people!`
  },
  {
    q: "How can I create my own hobby group?",
    a: `To create your own hobby group, navigate to the "Create Group" page. Here, you'll fill in the group details, including the group name, hobby category (like painting, photography, etc.), a description, and other important information such as meeting location, max members, and start date. After filling out the form, click "Create" to submit your group. Once approved, your group will be live on HobbyHub, allowing others to join. You can manage your group from the "My Groups" page. Creating a group is a great way to connect with people who share your passion!`
  },
  {
    q: "What if I forget my password or face login issues?",
    a: `If you're having trouble logging in, make sure you're entering the correct email and password. If you’ve forgotten your password, you can use the reset feature to get back into your account. However, at the moment, HobbyHub doesn’t support password recovery or email verification for the assignment's requirements. If you’re still having trouble, you can contact support for assistance. We recommend setting a strong, memorable password with a mix of letters and numbers to ensure easy access. For any other login-related issues, please feel free to reach out to our helpdesk team.`
  }
];

const FAQ = () => {
  const [open, setOpen] = React.useState(null);

  const toggle = idx => setOpen(open === idx ? null : idx);

  return (
    <section className="py-12 mb-8 bg-[#f3f4f6] rounded-2xl">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#4F2FFB]">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center px-6 py-5 text-lg font-semibold text-left text-[#232B3A] focus:outline-none transition-colors"
                style={{ borderRadius: open === idx ? "1rem 1rem 0 0" : "1rem" }}
              >
                <span>{faq.q}</span>
                <FaChevronDown
                  className={`ml-2 text-[#4F2FFB] transition-transform duration-300 ${open === idx ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === idx && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-700">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;