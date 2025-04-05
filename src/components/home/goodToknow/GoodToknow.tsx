"use client";

import React from "react";
import { motion } from "framer-motion";
import promotion from "@/assets/home/good-to-know.png";
import Image from "next/image";

const GoodToKnow = () => {
  return (
    <div className="bg-primary/20 relative">
      <div className="container mx-auto px-4 py-6 md:py-10 lg:py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-2 lg:gap-12">
          {/* Text Content */}
          <div className="w-full lg:max-w-3xl xl:max-w-4xl relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-outfit text-xl sm:text-2xl md:text-3xl font-semibold mb-4"
            >
              Beste Ferienwohnungen & Top-Verwaltung – Bestpreis garantiert!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-base sm:text-sm lg:text-base font-light leading-relaxed"
            >
              Ob für Ihren Urlaub oder zur Verwaltung Ihrer Ferienwohnung – die
              Stay Verwaltung bietet erstklassige Unterkünfte am Bodensee und im
              Allgäu. Unsere zufriedenen Kunden profitieren von professionellem
              Management und besten Preisen. Buchen oder verwalten Sie jetzt mit
              Stay!
            </motion.p>
          </div>

          {/* Badge/Promotion Image */}
          <motion.div
            initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative lg:absolute lg:top-20 lg:right-10 xl:right-12 2xl:right-40 lg:-translate-y-1/2"
          >
            <div className="w-60 h-60 md:w-72 md:h-72">
              <div className="text-center text-white">
                <Image src={promotion} alt="Promotion" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GoodToKnow;
