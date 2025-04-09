"use client";

import banner from "@/assets/about/right-accommodation.png";
import { motion } from "framer-motion";
import Image from "next/image";

const TheRightAccommodation = () => {
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
                Unsere Werte
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl font-semibold font-outfit text-black mb-6"
              >
                Was uns wichtig ist
              </motion.h1>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <p>
                    ✅ Professionalität: Vom Check-in bis zum Check-out – alles
                    läuft rund.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="flex items-start gap-3"
                >
                  <p>
                    🧼 Qualität: Gepflegt, stilvoll, durchdacht. Jede Unterkunft
                    erfüllt höchste Standards.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                  className="flex items-start gap-3"
                >
                  <p>
                    🌱 Nachhaltigkeit: Umweltfreundliche Reinigungsmittel, faire
                    Prozesse, regionale Partner.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1 }}
                  className="flex items-start gap-3"
                >
                  <p>
                    🫶 Gastfreundschaft: Unser Team ist für Sie da – rund um die
                    Uhr, persönlich & hilfsbereit.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.3 }}
                  className="flex items-start gap-3"
                >
                  <p>
                    ❤️ Leidenschaft: Stays ist kein Job – es ist unsere
                    Berufung.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheRightAccommodation;
