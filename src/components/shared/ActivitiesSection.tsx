"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

// Define type for the props of ActivitiesCard
interface ActivitiesCardProps {
  image: string | StaticImageData;
  title: string;
  description: string;
  details: string[];
  index: number;
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
    <>
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
        <div className="col-span-full bg-white rounded-lg p-8 mt-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-outfit mb-6">{title}</h2>
            <div className="space-y-6">
              <p className="text-base text-gray-700 leading-relaxed">
                {description}
              </p>
              <div>
                <h4 className="text-lg font-semibold mb-4">Zahlen & Fakten:</h4>
                <ul className="space-y-3">
                  {details.map((item: string, index: number) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <span className="text-primary text-lg">✓</span>
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
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
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ActivitiesSection;
