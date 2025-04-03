"use client";

import React from "react";
import { motion } from "framer-motion";
import bg from "@/assets/call-bg.png";
import banner from "@/assets/call-banner.png";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const CallToAction = () => {
  return (
    <div className="relative w-full pb-40">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat min-h-[130vh]"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
          {/* Text Section */}
          <div className="lg:col-span-6">
            <div className="flex flex-col justify-center items-start">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-bold mb-2 font-outfit text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-white"
              >
                Handlungsaufforderung und soziale Medien
              </motion.h2>

              <div className="w-20 h-1 bg-white mb-4"></div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-sm sm:text-base md:text-lg lg:text-2xl font-normal text-white mb-4"
              >
                Folgen Sie uns in den sozialen Medien für exklusive Angebote und
                Inspiration:
              </motion.p>

              {/* Social Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex gap-3 mb-6"
              >
                <a
                  href="#"
                  className="text-white bg-white/20 hover:bg-white/30 p-2 rounded-full"
                >
                  <FaTwitter className="text-sky-300 text-lg" />
                </a>
                <a
                  href="#"
                  className="text-white bg-white/20 hover:bg-white/30 p-2 rounded-full"
                >
                  <FaInstagram className="text-pink-500 text-lg" />
                </a>
                <a
                  href="#"
                  className="text-white bg-white/20 hover:bg-white/30 p-2 rounded-full"
                >
                  <FaLinkedinIn className="text-blue-300 text-lg" />
                </a>
                <a
                  href="#"
                  className="text-white bg-white/20 hover:bg-white/30 p-2 rounded-full"
                >
                  <FaFacebookF className="text-blue-500 text-lg" />
                </a>
              </motion.div>

              {/* CTA Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-4"
              >
                Jetzt buchen & die schönsten Orte am Bodensee & im Allgäu
                entdecken!
              </motion.p>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white text-primary text-sm sm:text-base font-medium px-6 py-2 rounded hover:bg-gray-100 transition"
              >
                Jetzt buchen!
              </motion.button>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="overflow-hidden"
            >
              <Image
                src={banner}
                alt="Luxury Pool Area"
                className="w-full max-w-[500px] h-auto mx-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
