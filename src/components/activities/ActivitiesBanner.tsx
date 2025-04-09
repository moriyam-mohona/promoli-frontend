"use client";

import { motion } from "framer-motion";
import banner from "@/assets/activities/activities-banner.png";

const ActivitiesBanner = () => {
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
          className="text-center max-w-7xl"
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
            Erleben, Entdecken, Genießen – Aktivitäten am Bodensee & im Allgäu
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="font-outfit text-lg text-white mb-4"
          >
            Urlaub ist mehr als nur Entspannen – es geht darum, unvergessliche
            Momente zu sammeln. Ob Naturerlebnis, Familienabenteuer, sportliche
            Herausforderung oder kulturelle Entdeckung: Die Regionen Bodensee
            und Allgäu bieten dir das volle Programm. StaysVerwaltung hilft dir
            dabei, die schönsten Aktivitäten zu finden – individuell,
            inspirierend und genau auf deinen Urlaub abgestimmt.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default ActivitiesBanner;
