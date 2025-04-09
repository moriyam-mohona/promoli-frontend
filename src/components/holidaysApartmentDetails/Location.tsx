"use client";

import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Location = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="container mx-auto px-4 py-16"
    >
      <motion.div variants={fadeIn} className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-900">The Location</h2>
      </motion.div>

      <motion.div
        variants={fadeIn}
        className="relative rounded-xl overflow-hidden shadow-lg max-w-5xl"
      >
        {/* Map Controls */}
        {/* <div className="absolute top-4 left-4 z-10 flex gap-2">
          <button className="bg-white px-4 py-2 rounded-md shadow-md text-sm font-medium hover:bg-gray-50 transition-colors duration-200">
            Map
          </button>
          <button className="bg-white px-4 py-2 rounded-md shadow-md text-sm font-medium hover:bg-gray-50 transition-colors duration-200">
            Satellite
          </button>
        </div> */}

        {/* Map Container */}
        <div className="relative h-[500px] w-full bg-gray-100 max-w-5xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.8088025254456!2d-122.41941708479227!3d37.77492977975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjciTiAxMjLCsDI1JzA3LjQiVw!5e0!3m2!1sen!2sus!4v1635959573619!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          ></iframe>

          {/* Location Marker Popup */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white rounded-lg shadow-xl p-4 w-64">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=300&q=80"
                  alt="Inselzeit Wohnung 1"
                  width={1000}
                  height={1000}
                  className="w-full h-32 object-cover rounded-md"
                />
                <button className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200">
                  <RxCross2 className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-3">
                <h3 className="font-medium text-gray-900">
                  Inselzeit Wohnung 1
                </h3>
                <a
                  href="#more-info"
                  className="text-blue-500 hover:text-blue-600 text-sm mt-1 inline-block"
                >
                  More Information
                </a>
              </div>
            </div>
          </div>

          {/* Fullscreen Button */}
          <button className="absolute bottom-4 right-4 bg-white p-2 rounded-md shadow-md hover:bg-gray-50 transition-colors duration-200">
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Location;
