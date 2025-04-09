"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const HolidaysApartmentFeatures = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col-reverse lg:flex-row gap-12">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-8 w-full"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-3xl md:text-3xl font-semibold text-gray-900"
          >
            Inselzeit Wohnung 1 – Luxury Between The Harbor & Town Center
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-gray-600">
            Welcome To Elsi Deluxe, Your Perfect Second Home In Büsum! This 94m²
            Penthouse Apartment, Newly Built In 2023, Offers Modern Comfort And
            High-End Amenities For A Truly Relaxing Stay.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-medium text-gray-900 mb-6">
              Apartment Features:
            </h2>
            <motion.ul
              variants={staggerContainer}
              className="space-y-6 list-disc pl-6"
            >
              <motion.li variants={fadeInUp}>
                2 Spacious Bedrooms – Each With An En-Suite Bathroom For Added
                Privacy And Convenience.
              </motion.li>
              <motion.li variants={fadeInUp}>
                Fully Equipped Kitchen – Featuring A Dishwasher, A
                Three-Compartment Freezer, And Everything Needed For Home-Cooked
                Meals.
              </motion.li>
              <motion.li variants={fadeInUp}>
                Modern Living Space – Stylish Furnishings, A Cozy Dining Area,
                And Smart TVs For Entertainment.
              </motion.li>
              <motion.li variants={fadeInUp}>
                Private Utility Room – Includes A Washing Machine And Dryer For
                Your Convenience.
              </motion.li>
              <motion.li variants={fadeInUp}>
                Premium Extras – External Blinds For Comfort, Bicycle Charging
                Stations, And A Southwest-Facing Balcony To Enjoy The Sun.
              </motion.li>
            </motion.ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4 pt-8">
            <p>
              Located Between The Harbor And The Town Center, Elsi Deluxe Offers
              The Perfect Combination Of Relaxation And Easy Access To
              Büsum&apos;s Attractions.
            </p>
            <p>We Look Forward To Welcoming You!</p>
          </motion.div>
        </motion.div>

        {/* Right Content - Booking Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:pl-8"
        >
          <div className="bg-[#0A2342] max-w-96 sm:w-96 text-white p-8 shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <h3 className="text-xl font-semibold">Your Travel Dates</h3>
              </div>
              <p className="text-gray-300">
                Please First Select Your Travel Period.
              </p>
              <Link
                href={`/booking/1`}
                className="w-full bg-primary hover:bg-primary/80 text-white font-semibold py-3 px-3 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Book Now
                <span className="text-xl">→</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HolidaysApartmentFeatures;
