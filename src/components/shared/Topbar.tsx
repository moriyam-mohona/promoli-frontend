"use client";

import React from "react";
import { FaPhone } from "react-icons/fa6";
import { TbMail } from "react-icons/tb";
import { motion } from "framer-motion";

const Topbar = () => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full relative"
    >
      <div
        className="w-full py-2 md:py-3"
        style={{
          background: "linear-gradient(133deg, #7EE3F9 30%, #FDF8F0 30%)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex gap-5 md:justify-end items-center space-y-2 md:space-y-0 md:space-x-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-2"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-primary md:bg-white border-2 border-white md:border-primary rounded-full"
              >
                <FaPhone
                  size={20}
                  className="font-primary text-white md:text-primary"
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-sm md:text-base font-medium text-[#001F3F] ">
                  Telefonnummer
                </span>
                <span className="text-sm text-[#808080]">(850) 123-1212</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center space-x-2 text-white"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white border-2 border-primary rounded-full"
              >
                <TbMail size={26} className="font-primary text-primary" />
              </motion.div>

              <div className="flex flex-col">
                <span className="text-sm md:text-base font-medium text-[#001F3F] ">
                  Email
                </span>
                <span className="text-sm text-[#808080]">
                  info@stays-bodensee.de
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Topbar;
