"use client";

import banner from "@/assets/activities/holidays-begin.png";
import { motion } from "framer-motion";
import Image from "next/image";

const HolidaysBegin = () => {
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
                Urlaub beginnt mit Inspiration
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl font-semibold font-outfit text-black mb-6"
              >
                Dein Erlebnisguide für Bodensee & Allgäu
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-light"
              >
                Bei StaysVerwaltung bekommst du mehr als nur eine Ferienwohnung
                – du erhältst Zugang zu handverlesenen Tipps und persönlichen
                Empfehlungen rund um deine Urlaubsregion. Egal ob du am Bodensee
                entspannte Seemomente suchst oder im Allgäu die Berge erobern
                willst – wir zeigen dir, wo’s am schönsten ist. Unsere Gastgeber
                kennen nicht nur die beliebtesten Sehenswürdigkeiten, sondern
                auch echte Geheimtipps fernab der Touristenpfade. Von
                familienfreundlichen Ausflügen über sportliche Highlights bis
                hin zu kulinarischen Erlebnissen: Wir helfen dir, deine Zeit
                optimal zu nutzen. So wird dein Aufenthalt nicht nur erholsam,
                sondern unvergesslich. StaysVerwaltung verbindet komfortables
                Wohnen mit echtem Urlaubsgefühl – genau da, wo’s am schönsten
                ist.
                <br />
                <br />
                <span className="font-medium">
                  Lass dich inspirieren und entdecke, was deinen Urlaub am
                  Bodensee oder im Allgäu wirklich besonders macht – mit
                  StaysVerwaltung an deiner Seite.
                </span>
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
                priority
                width={1000}
                height={1000}
                className="w-full h-full object-cover transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolidaysBegin;
