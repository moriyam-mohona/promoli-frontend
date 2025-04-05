"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import banner from "@/assets/home/fell-the-magic.png";
import bg from "@/assets/home/apartment-bg.png";

const FeelTheMagic = () => {
  return (
    <div className="relative mx-auto w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
        }}
      ></div>

      {/* Content Container */}
      <section className="bg-[#FFF8F0] py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
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

          {/* Text Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-primary font-alex text-3xl mb-2"
            >
              Finally time for a break
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-outfit mb-6 text-black"
            >
              Feel the magic of the North together
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-500 text-base sm:text-lg leading-relaxed mb-6"
            >
              What does your perfect vacation look like? Often, a beautiful
              place, the sea, being completely at peace with yourself and having
              your loved ones around you is enough. Whether you&apos;re
              traveling with friends, your partner, children, or dog, the unique
              North Sea flair in Büsum will perhaps turn your head a little and
              make your hair ruffle. But it&apos;s also sure to make your eyes
              light up!
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeelTheMagic;
