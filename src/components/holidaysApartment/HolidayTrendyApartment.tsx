"use client";

import img from "@/assets/holiday.png";
import { motion } from "framer-motion";
import HolidayCard from "@/components/card/HolidayCard";

const HolidayTrendyApartment = () => {
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

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-5">
        <h2 className="text-4xl font-semibold">Holiday Trendy Apartment</h2>
        <p className="text-base sm:text-lg leading-relaxed mb-6 mt-4 max-w-4xl">
          Exclusive holiday apartments for every requirement. No matter whether
          you are planning a romantic weekend on Lake Constance or want to enjoy
          an active holiday in the Allgäu
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
  );
};

export default HolidayTrendyApartment;
