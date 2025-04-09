"use client";

import { motion } from "framer-motion";

const ForOwners = () => {
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
              Für Eigentümerinnen & Eigentümer
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-[40px] font-semibold font-outfit text-black mb-6"
            >
              Schreiben Sie mit uns Erfolgsgeschichte – Die Stays Idee
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-light mb-6"
            >
              Sie besitzen ein Ferienhaus oder eine Ferienwohnung und möchten
              das Objekt gerne an uns fest vermieten oder Sie möchten, dass wir
              das volle Potenzial Ihrer Ferieneinheit ausschöpfen und wir
              übernehmen die professionelle Verwaltung Ihrer Immobilie in
              unseren Rundum-sorglos-Paketen? Ausgezeichnet! Wir sind seit über
              10 Jahren ein verlässlicher Partner rund um die Betreuung und
              Vermittlung von inzwischen über 100 Ferienwohnungen und -häusern
              in der Bodenseeregion. Inzwischen sind wir die größte
              Vermittlungsagentur und längst steht unser Name in der Region für
              besondere Qualität im Tourismus. Lassen Sie uns gemeinsam
              Urlaubsträume verwirklichen!
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-medium text-xl mb-4 "
            >
              Warum bei uns?
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-light mb-6"
            >
              Als Full-Service-Vermietungsagentur vermieten, vermitteln und
              betreuen wir auch Ihr Ferienobjekt. Wir übernehmen ganz
              unkompliziert folgende Leistungen:
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForOwners;
