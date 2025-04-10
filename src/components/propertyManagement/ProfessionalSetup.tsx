"use client";

import { motion } from "framer-motion";
import banner from "@/assets/propertyManagement/professional-setup.png";
import Image from "next/image";

const ProfessionalSetup = () => {
  return (
    <div className="container relative mx-auto w-full">
      {/* Content Container */}
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        {/* Text Grid */}
        <div className="flex flex-col items-end">
          <div className="flex flex-col justify-center items-start">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className=" text-primary font-alex text-lg md:text-4xl mb-4 block"
            >
              Professionelle Einrichtung
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-[40px] font-semibold font-outfit text-black mb-6"
            >
              Mit unserer Unterstützung zum gelungenen Interieur
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-light mb-6"
            >
              Suchen Sie Inspiration beim Einrichten? Auch da sind Sie bei uns
              an der richtigen Adresse! Wir lassen frischen Wind in Ihre
              Ferienunterkunft einziehen. Urban Style oder Skandi-Look? Landhaus
              oder Shabby Chic? Wir finden den passenden Stil für Ihre
              Zielgruppe.
              <br />
              Mehr noch: Wir treffen die richtige Auswahl der Bodenbeläge, der
              Wandfarben oder Motivtapeten, wir installieren atmosphärische
              Beleuchtungskonzepte, moderne Soundlösungen und sorgen für eine
              stimmige Möblierung … Wenn Sie mögen, kümmern wir uns um die
              komplette Gestaltung Ihrer Urlaubsimmobilie. In Absprache mit
              Ihnen holen wir in kürzester Zeit das Beste aus ihr heraus – damit
              sich Ihre Gäste rundum wohlfühlen und immer wieder gerne zu uns an
              den Bodensee kommen.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="my-10 mx-auto w-full flex justify-center items-center"
            >
              <Image
                src={banner}
                alt="banner"
                width={2000}
                height={2000}
                className="w-full object-cover transition-transform duration-300"
                priority={true}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSetup;
