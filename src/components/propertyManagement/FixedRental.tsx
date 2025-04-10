"use client";

import { motion } from "framer-motion";
import banner from "@/assets/propertyManagement/fixed-rental.png";
import Image from "next/image";

const FixedRental = () => {
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
              Feste Anmietung Ihrer Immobilie durch Stays
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-[40px] font-semibold font-outfit text-black mb-6"
            >
              Ihre Ferienimmobilie in besten Händen – mit fester Miete und ohne
              Aufwand
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-light mb-6"
            >
              Sie besitzen eine Ferienwohnung oder ein Ferienhaus und möchten
              daraus ein sicheres und planbares Einkommen erzielen – ganz ohne
              Stress und Verwaltungsaufwand? Dann ist unser Anmietungsmodell
              genau das Richtige für Sie!
              <br />
              Wir von der Stays Verwaltungs-GmbH bieten Ihnen die Möglichkeit,
              Ihre Ferienimmobilie zu einem fest vereinbarten monatlichen
              Mietpreis anzumieten – unabhängig von der Auslastung oder Saison.
              So profitieren Sie das ganze Jahr über von einem stabilen
              Einkommen, auch in den ruhigeren Wintermonaten.
              <br />
              Das Beste daran: Sie haben keinerlei Aufwand. Wir kümmern uns um
              alles – von der Vermarktung über die Betreuung der Gäste bis hin
              zur professionellen Reinigung und Instandhaltung Ihrer Immobilie.
              Ihre Immobilie ist bei uns in besten Händen. Zögern Sie nicht –
              nehmen Sie Kontakt mit uns auf!
              <br />
              Schreiben Sie uns gerne eine E-Mail oder rufen Sie uns direkt an.
              Wir freuen uns auf Ihre Ferienimmobilie!
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
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedRental;
