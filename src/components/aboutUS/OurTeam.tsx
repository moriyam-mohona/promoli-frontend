"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Team member details function
const teamMembers = [
  {
    name: "Felix Lutz",
    role: "Geschäftsführer",
    description:
      "With my many years of experience in real estate management, I ensure that your holiday apartment is well looked after.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=1800&h=1800",
  },
  {
    name: "Selina Lutz",
    role: "Inhaberin",
    description:
      "Guest care is particularly important to me – because a happy guest always comes back!",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=1800&h=1800",
  },
  {
    name: "Nathalie Heinke",
    role: "Inhaberin",
    description:
      "With my many years of experience in real estate management, I ensure that your holiday apartment is well looked after.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=1800&h=1800",
  },
  {
    name: "Marco Heinke",
    role: "Geschäftsführer",
    description:
      "My focus is on digital marketing and optimization of our booking processes.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=1800&h=1800",
  },
];

const OurTeam = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-alex text-lg md:text-4xl mb-4 block"
          >
            Our team – personal & professional
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-semibold font-outfit text-black mb-6"
          >
            Lerne das Team hinter Stays kennen!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-light"
          >
            We are one family-run company, which is committed to providing
            first-class holiday accommodation and providing owners with a
            professional management solution.
          </motion.p>
        </div>

        <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.2 }}
              className="p-6 text-center w-[400px] rounded-xl"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={1000}
                height={1000}
                className="bg-[#FFF8F0] w-[400px] h-[384px] mx-auto mb-4 object-cover rounded-xl"
              />
              <div className="flex flex-col items-start gap-2 font-outfit">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-lg font-medium">{member.role}</p>
                <p className="mt-2 text-start text-[#666666] font-light">
                  &ldquo;{member.description}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default OurTeam;
