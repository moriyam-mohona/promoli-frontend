"use client";

import { motion } from "framer-motion";
import { BsTelephoneFill } from "react-icons/bs";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const PersonalContact = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="container mx-auto px-4 py-8 "
    >
      <div className="bg-primary/20 rounded-xl p-6 md:p-8 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-gray-200 pb-4 md:mb-6">
          <motion.h2
            variants={fadeIn}
            className="w-full text-2xl font-semibold text-gray-900 "
          >
            Persönlicher Kontakt
          </motion.h2>

          <motion.a
            variants={fadeIn}
            href="#contact"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2 mt-2 md:mt-0"
          >
            Kontakt
            <span className="text-xl">→</span>
          </motion.a>
        </div>

        <motion.div
          variants={fadeIn}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <div className="flex-shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces&q=80"
              alt="Sven Clusen"
              width={1000}
              height={1000}
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>

          <div className="flex-grow">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Sven Clusen
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-4">
                <BsTelephoneFill className="w-5 h-5 text-[#1FB3D3]" />
                <p>
                  <span className="font-medium">Phone: </span> (650) 123-1212
                </p>
              </div>

              <div className="flex items-center gap-4">
                <BsTelephoneFill className="w-5 h-5 text-[#1FB3D3]" />
                <p className="font-medium">Buchungsanfrage</p>
              </div>

              <div className="flex items-center gap-4">
                <BsTelephoneFill className="w-5 h-5 text-[#1FB3D3]" />
                <p>
                  <span className="font-medium">Object No: </span> 174276
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PersonalContact;
