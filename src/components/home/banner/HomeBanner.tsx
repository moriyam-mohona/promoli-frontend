"use client";

import { motion } from "framer-motion";
import banner from "@/assets/home/banner.png";

const HomeBanner = () => {
  return (
    <div className="relative h-[60vh] md:h-[80vh] w-full">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${banner.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
      </motion.div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center justify-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="text-center max-w-5xl"
        >
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="font-outfit text-4xl md:text-6xl font-semibold text-white mb-4"
          >
            Fantastic holiday apartments on Lake Constance & in the Allgäu
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeBanner;
