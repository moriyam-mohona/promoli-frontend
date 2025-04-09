"use client";

import banner from "@/assets/about/what-expect.png";
import { motion } from "framer-motion";
import Image from "next/image";
import check from "@/assets/about/checkmark.png";

const WhatYouCanExpect = () => {
  return (
    <div className="container relative mx-auto w-full">
      {/* Content Container */}
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-12 items-center gap-8">
          {/* Image Grid */}
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="overflow-hidden transition-shadow duration-300"
            >
              <Image
                src={banner}
                alt="Luxury Pool Area"
                className="w-full h-full object-cover transition-transform duration-300"
              />
            </motion.div>
          </div>
          {/* Text Grid */}
          <div className="col-span-12 lg:col-span-6 flex flex-col items-end">
            <div className="flex flex-col justify-center items-start">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className=" text-primary font-alex text-lg md:text-4xl mb-4 block"
              >
                Was Sie bei uns erwartet
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl font-semibold font-outfit text-black mb-6"
              >
                7 Gründe, Ihren Urlaub bei uns zu buchen
              </motion.h1>
              <div className="space-y-6">
                {[
                  "Stilvoll & voll ausgestattet",
                  "Zentrale oder naturnahe Lagen",
                  "Schnelles WLAN, bequeme Betten, moderne Küchen",
                  "Persönlicher Kontakt & 24/7 Erreichbarkeit",
                  "Flexible Anreise & digitale Gästemappe",
                  "Sauberkeit auf Hotelniveau",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.5 + index * 0.2,
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    className="flex items-start gap-3"
                  >
                    <Image
                      src={check}
                      alt="checkmark"
                      width={24}
                      height={24}
                      className="w-6 h-5 object-contain"
                    />
                    <p>{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatYouCanExpect;
