"use client";

import { motion } from "framer-motion";
import banner from "@/assets/propertyManagement/professional-marketing.png";
import Image from "next/image";
const ProfessionalMarketing = () => {
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
              Professionelle Vermarktung
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-[40px] font-semibold font-outfit text-black mb-6"
            >
              Mit unserer Unterstützung sofort die Reichweite signifikant
              steigern
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-light mb-6"
            >
              Wir bringen Ihr Objekt auf allen bekannten Onlineportalen groß
              raus und übernehmen darüber hinaus die komplette Abwicklung mit
              den jeweiligen Anbietern. So erhöhen Sie mit wenig Aufwand die
              Reichweite für die Vermittlung Ihrer Ferienimmobilie.
              <br />
              Unserem Organigramm entnehmen Sie, mit welchen Onlineportalen wir
              aktuell zusammenarbeiten.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-light my-10 mx-auto w-full flex justify-center items-center"
            >
              <Image
                src={banner}
                alt="banner"
                width={2000}
                height={2000}
                className="w-2/3"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalMarketing;
