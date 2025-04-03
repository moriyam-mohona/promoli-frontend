"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import banner from "@/assets/home/crabs-cutters.png";
import { BsArrowRight } from "react-icons/bs";

const CrabsCutters = () => {
  return (
    <section className="bg-[#FFF8F0] py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Text Content */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-alex text-3xl mb-2"
          >
            Something’s happening here…
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-outfit mb-6 text-black"
          >
            Crabs, cutters, Wadden Sea
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 text-base sm:text-lg leading-relaxed mb-6"
          >
            Büsum is colorful and simply worth every trip. It&apos;s no wonder
            our guests come and go – and come back again. Just like the sea
            itself. Countless beautiful spots with magical charm await here –
            and honestly: We&apos;re already in love! One visit, and you&apos;ll
            know exactly why...
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-primary transition text-white px-8 py-3 rounded font-medium flex items-center gap-2 text-sm sm:text-base"
          >
            Discover Now <BsArrowRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full flex justify-center lg:justify-end"
        >
          {/* Large Background Image */}
          <div className="">
            <Image
              src={banner}
              alt="Crabs and Cutters"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CrabsCutters;
