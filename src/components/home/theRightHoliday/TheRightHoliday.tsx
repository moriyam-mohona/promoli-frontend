"use client";

import React from "react";
import { motion } from "framer-motion";
import HolidayCard from "@/components/card/HolidayCard";
import img from "@/assets/holiday.png";

// Sample holiday card data
const holidayData = [
  {
    imageSrc: img,
    title: "Inselzeit Wohnung 1",
    rating: 4.8,
    guests: 6,
    length: "1620 Sq Ft",
    bedRoom: 3,
    bathroom: 2,
    wifi: "Free",
    price: "$120",
  },
  {
    imageSrc: img,
    title: "Inselzeit Wohnung 2",
    rating: 4.9,
    guests: 4,
    length: "1200 Sq Ft",
    bedRoom: 2,
    bathroom: 1,
    wifi: "Free",
    price: "$100",
  },
  {
    imageSrc: img,
    title: "Inselzeit Wohnung 3",
    rating: 4.7,
    guests: 5,
    length: "1400 Sq Ft",
    bedRoom: 2,
    bathroom: 2,
    wifi: "Paid",
    price: "$110",
  },
];

const TheRightHoliday = () => {
  return (
    <div className="bg-[#FFF8F0]">
      <div className="container mx-auto py-20">
        <div className="space-y-5">
          <h2 className="text-5xl font-semibold">
            The right holiday accommodation for everyone
          </h2>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-6 mt-4">
            A holiday apartment with a sea view, an apartment with a large sofa
            for relaxing, accommodation with plenty of space for your dog…
            Whatever you value most in your holiday home, we&apos;re sure
            you&apos;ll find it here. Enjoy browsing!
          </p>
        </div>

        {/* Map holidayData to render HolidayCard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {holidayData.map((holiday, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <HolidayCard
                imageSrc={holiday.imageSrc}
                title={holiday.title}
                rating={holiday.rating}
                guests={holiday.guests}
                length={holiday.length}
                bedRoom={holiday.bedRoom}
                bathroom={holiday.bathroom}
                wifi={holiday.wifi}
                price={holiday.price}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheRightHoliday;
