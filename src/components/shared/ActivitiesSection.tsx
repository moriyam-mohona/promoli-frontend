"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

// Define type for the props of ActivitiesCard
interface ActivitiesCardProps {
  image: string | StaticImageData; // Accept both string (URL) and StaticImageData
  title: string;
  description: string;
  details: string[];
}

const ActivitiesCard = ({
  image,
  title,
  description,
  details,
}: ActivitiesCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="space-y-4">
      {/* Card Section */}
      <div
        className="cursor-pointer bg-white"
        onClick={handleClick}
        style={{ transition: "transform 0.3s ease" }}
      >
        <div className="relative w-full h-80">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>
        <h3 className="font-outfit text-center text-xl font-medium py-3">
          {title}
        </h3>
      </div>

      {/* Details Section - Hidden by default */}
      {isOpen && (
        <div className="p-6 bg-white shadow-lg mt-4 transition-all ease-in-out">
          <h4 className="text-xl font-bold mb-2">Details:</h4>
          <p className="text-base mb-4">{description}</p>
          <div className="text-sm text-gray-700">
            <ul className="list-disc pl-6">
              {details.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

// Define type for the props of ActivitiesSection
interface Activity {
  image: string | StaticImageData;
  title: string;
  description: string;
  details: string[];
}

interface ActivitiesSectionProps {
  topTitle: string;
  title: string;
  subTitle: string;
  locations: Activity[];
}

const ActivitiesSection = ({
  topTitle,
  title,
  subTitle,
  locations,
}: ActivitiesSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-16"
    >
      <div className="container mx-auto px-4 mb-10">
        {/* Top title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-alex text-primary text-4xl mb-6"
        >
          {topTitle}
        </motion.h2>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-outfit text-5xl font-semibold mb-6"
        >
          {title}
        </motion.h2>

        {/* Subsection Title */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-gray-700 mb-6"
        >
          {subTitle}
        </motion.p>
      </div>

      <div className="bg-primary/30 py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((location, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.5 + index * 0.2,
              }}
            >
              <ActivitiesCard
                image={location.image}
                title={location.title}
                description={location.description}
                details={location.details}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ActivitiesSection;
