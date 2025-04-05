"use client";

import React from "react";
import { motion } from "framer-motion";

const HolidaysApartmentFooter = () => {
  return (
    <div className="container mx-auto py-40 space-y-10">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: "easeOut",
        }}
        className="font-outfit text-2xl font-semibold"
      >
        North Sea Holiday in Büsum – Your Perfect Escape
      </motion.h2>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: "easeOut",
        }}
        className="text-gray-500 text-base leading-relaxed mt-4"
      >
        Enjoy your holiday in Büsum just the way you like it! Cycle along the
        scenic dike, take part in a traditional mudflat excursion with live
        music, or cook freshly caught Büsum crabs in your fully equipped holiday
        apartment. Many accommodations offer private balconies, terraces, or
        gardens—perfect for relaxing in the fresh sea air or bringing along your
        dog. Plus, with excellent rail connections, Büsum is ideal for a
        car-free North Sea getaway.
      </motion.p>
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.7,
          ease: "easeOut",
        }}
        className="font-outfit text-2xl font-semibold"
      >
        A Seaside Tradition for Over 100 Years
      </motion.h2>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.9,
          ease: "easeOut",
        }}
        className="text-gray-500 text-base leading-relaxed mt-4"
      >
        For more than a century, Büsum has been a beloved summer destination.
        Once a hidden gem, it has grown into Germany’s largest North Sea resort,
        welcoming families, active travelers, nature lovers, and seniors alike.
        Stroll through the charming harbor, unwind on the town’s spacious green
        beaches, or marvel at the tides in the Schleswig-Holstein Wadden Sea
        National Park. At high tide, the North Sea is perfect for a refreshing
        swim—or for surfers catching the waves. For families, the Perlebucht
        Family Lagoon offers a modern waterfront experience with sandy play
        areas, sports facilities, and two pools where you can swim regardless of
        the tide.
        <br />
        <br />
        Start planning your perfect North Sea holiday in Büsum today!
      </motion.p>
    </div>
  );
};

export default HolidaysApartmentFooter;
