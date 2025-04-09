"use client";

import { motion } from "framer-motion";

const ContactPerson = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=" text-primary font-alex text-lg md:text-4xl mb-4 block"
          >
            Jeztz Ferienwohnung buchen!
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-semibold font-outfit text-black mb-6"
          >
            Worauf wartest du ?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-light "
          >
            Jetzt Ihren Lieblingsplatz am Bodensee finden.
            <br />
            Ob romantische Auszeit, Familienurlaub oder Workation – bei Stays –
            Feels Like Home wartet Ihre perfekte Unterkunft.Schnell buchen &
            Vorfreude sichern.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-semibold mt-10"
          >
            We would be happy to help you!
          </motion.p>
        </div>

        <div className="text-center mt-8 flex flex-col items-center gap-5">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-semibold border-2 border-primary px-8 py-3 hover:bg-primary hover:text-white transition-all duration-300"
          >
            Kontakt
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-semibold border-2 border-primary px-8 py-3 hover:bg-primary hover:text-white transition-all duration-300"
          >
            Jetzt buchen
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPerson;
