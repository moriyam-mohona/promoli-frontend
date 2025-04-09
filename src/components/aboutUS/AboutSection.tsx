"use client";

import banner from "@/assets/about/about-section.png";
import { motion } from "framer-motion";
import Image from "next/image";
const AboutSection = () => {
  return (
    <div className="container relative mx-auto w-full">
      {/* Content Container */}
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-12 items-center gap-8">
          {/* Text Grid */}
          <div className="col-span-12 lg:col-span-6 flex flex-col items-end">
            <div className="flex flex-col justify-center items-start">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className=" text-primary font-alex text-lg md:text-4xl mb-4 block"
              >
                Über uns
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl font-semibold font-outfit text-black mb-6"
              >
                Urlaub mit Gefühl – Zuhause am Bodensee
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-light text-[#5B5B5B]"
              >
                Herzlich willkommen bei Stays – Feels Like Home,Ihrem Gastgeber
                für stilvolle, hochwertig ausgestattete Ferienunterkünfte rund
                um den Bodensee. 🌿
                <br /> Wir sind der größte Anbieter in der Region mit über 100
                handverlesenen Apartments, Ferienwohnungen und Häusern, die alle
                eines gemeinsam haben: hohen Komfort, liebevolle Einrichtung und
                das Gefühl, wirklich angekommen zu sein. Ob Städtetrip,
                Familienurlaub oder entspannte Auszeit – bei uns finden Sie
                garantiert Ihr perfektes Zuhause auf Zeit.
                <br />
                Unser engagiertes Team ist rund um die Uhr für Sie da –
                persönlich, herzlich und zuverlässig. Ihre Zufriedenheit steht
                bei uns an erster Stelle. Von der ersten Buchung bis zum
                Check-out – wir begleiten Sie mit einem professionellen
                Rundum-Service.
                <br />
                Nachhaltigkeit ist für uns kein Trend, sondern Verantwortung.
                Deshalb achten wir auf umweltfreundliche Standards in Reinigung,
                Ausstattung und Betrieb.
              </motion.p>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
