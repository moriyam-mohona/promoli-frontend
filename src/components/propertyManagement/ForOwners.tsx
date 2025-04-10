"use client";

import { motion } from "framer-motion";
import check from "@/assets/about/checkmark.png";
import Image from "next/image";

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
              className="font-semibold text-xl mb-4 "
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
            <div className="space-y-6">
              {[
                "Vertragsabschluss Mit Den Gästen",
                "Abrechnung Und Komplette Abwicklung Der Aufenthalte",
                "Zwischen- Und Endreinigung Der Wohnungen Und Häuser",
                "Schlüsselübergabe",
                "Beratung Rund Um Preisgestaltung & Ausstattung",
                "Qualitätsmanagement",
                "Abwicklung Von Reklamationen",
                "Professionelle Vermarktung Ihres Objekts Über Unterschiedliche Onlineportale",
                "Wohnungsfotos",
                "Kostenminimierung Dank Gemeinschaftlichem Marketing",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5 + index * 0.2,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="flex items-start gap-3"
                >
                  <Image
                    src={check}
                    alt="checkmark"
                    width={24}
                    height={24}
                    className="w-6 h-5 object-contain"
                  />
                  <p>{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForOwners;
