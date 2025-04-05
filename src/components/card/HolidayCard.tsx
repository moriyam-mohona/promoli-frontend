"use client";

import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion
import Image, { StaticImageData } from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

interface HolidayCardProps {
  id: string;
  imageSrc: string | StaticImageData;
  title: string;
  rating: number;
  guests: number;
  length: string;
  bedRoom: number;
  bathroom: number;
  wifi: string;
  price: string;
}

const HolidayCard: React.FC<HolidayCardProps> = ({
  id,
  imageSrc,
  title,
  rating,
  guests,
  length,
  bedRoom,
  bathroom,
  wifi,
  price,
}) => {
  return (
    <div className="w-full mx-auto rounded-lg shadow-lg overflow-hidden bg-white">
      {/* Image Section with animation */}
      <div className="relative p-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src={imageSrc}
            alt={title}
            className="w-full h-72 object-cover"
            width={1000}
            height={1000}
          />
        </motion.div>
      </div>

      {/* Info Section */}
      <div className="p-4">
        <h3 className="text-xl font-medium">{title}</h3>
        <div className="flex items-center text-yellow-500 mb-2">
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className={`${
                index < Math.floor(rating)
                  ? "text-yellow-500 text-2xl"
                  : "text-gray-300 text-2xl"
              }`}
            >
              ★
            </span>
          ))}
          <span className="ml-2 text-sm text-gray-500">({rating})</span>
        </div>

        <div className="flex justify-between items-baseline gap-5 text-gray-600 font-outfit border-t-2 border-b-2 py-4 border-primary">
          <div className="border-r-2 border-primary pr-3 flex flex-col items-center">
            <p className="font-medium">Guests</p>
            <p>{guests} People</p>
          </div>
          <div className="border-r-2 border-primary pr-3 flex flex-col items-center">
            <p className="font-medium">Length</p>
            <p>{length}</p>
          </div>
          <div className="border-r-2 border-primary pr-3 flex flex-col items-center">
            <p className="font-medium">Bed Room</p>
            <p>{bedRoom}</p>
          </div>
          <div className="border-r-2 border-primary pr-3 flex flex-col items-center">
            <p className="font-medium">Bathroom</p>
            <p>{bathroom}</p>
          </div>
          <div>
            <p className="font-medium">WiFi</p>
            <p>{wifi}</p>
          </div>
        </div>

        {/* Price & Book Button */}
        <div className="mt-4 flex justify-between items-center">
          <p className="text-base text-gray-400">
            <span className="text-4xl font-semibold text-primary">{price}</span>
            /Per Night
          </p>
          <Link
            href={`/booking/${id}`}
            className="bg-primary text-white py-3 px-8 hover:bg-primary/80 transition flex items-center gap-2"
          >
            Book Now <BsArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HolidayCard;
