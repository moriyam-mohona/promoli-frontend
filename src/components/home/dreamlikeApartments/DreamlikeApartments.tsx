"use client";

import React from "react";
import { motion } from "framer-motion";
import bg from "@/assets/home/apartment-bg.png";
import banner from "@/assets/home/dreamelike-banner.png";
import subbanner from "@/assets/home/dreamelike-subbanner.png";
import Image from "next/image";

const DreamlikeApartments = () => {
  return (
    <div className="container relative mx-auto w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
        }}
      ></div>

      {/* Content Container */}
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-12 items-center gap-8">
          {/* Text Grid */}
          <div className="col-span-12 lg:col-span-7 flex flex-col items-end">
            <div className="flex flex-col justify-center items-start">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className=" text-primary font-alex text-lg md:text-4xl mb-4 block"
              >
                Urlaub mit Gefühl – Zuhause am Bodensee
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl font-semibold font-outfit text-black mb-6"
              >
                Traumhafte Ferienwohnungen
                <br />
                am Bodensee & im Allgäu 
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-light text-[#5B5B5B]"
              >
                Mehr als 100 liebevoll eingerichtete Ferienunterkünfte, ein
                zuverlässiger Rundum-Service und echte Gastgeberleidenschaft –
                das ist Stays. Als größter Anbieter am Bodensee bieten wir Ihnen
                hochwertige Ferienwohnungen in den schönsten Lagen der Region:
                am Wasser, in der Stadt oder mitten im Grünen.
                <br /> <br /> Unsere Mission ist es, Ihnen ein Zuhause auf Zeit
                zu schenken – mit höchstem Komfort, moderner Ausstattung und
                einem Service, der von Herzen kommt.Ankommen. Durchatmen.
                Wohlfühlen.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10  w-full lg:w-2/3 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src={subbanner}
                alt="Luxury Pool Area"
                className="object-cover"
              />
            </motion.div>
          </div>
          {/* Image Grid */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src={banner}
                alt="Luxury Pool Area"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamlikeApartments;
