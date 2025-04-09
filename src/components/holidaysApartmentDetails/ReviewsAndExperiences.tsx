"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

interface Review {
  id: number;
  text: string;
  author: string;
  rating: number;
  image: string;
}

const reviews: Review[] = [
  {
    id: 1,
    text: "Top location, modern facilities and sparkling clean. Perfect for our vacation on Lake Constance!",
    author: "Michael K",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=64&h=64",
  },
  {
    id: 2,
    text: "Exceptional apartment with stunning views. The amenities are top-notch and the location is perfect.",
    author: "Sarah M",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=64&h=64",
  },
  {
    id: 3,
    text: "We had an amazing stay! The apartment is beautifully furnished and the host was very accommodating.",
    author: "David R",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=64&h=64",
  },
];

const ReviewsAndExperiences = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  //   const slideVariants = {
  //     enter: (direction: number) => ({
  //       x: direction > 0 ? 1000 : -1000,
  //       opacity: 0,
  //     }),
  //     center: {
  //       zIndex: 1,
  //       x: 0,
  //       opacity: 1,
  //     },
  //     exit: (direction: number) => ({
  //       zIndex: 0,
  //       x: direction < 0 ? 1000 : -1000,
  //       opacity: 0,
  //     }),
  //   };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    const newIndex = currentIndex + newDirection;
    if (newIndex >= 0 && newIndex < reviews.length) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-16"
    >
      <div className="max-w-5xl">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-[40px] font-semibold text-gray-900">
            Reviews & Experiences
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => paginate(-1)}
              disabled={currentIndex === 0}
              className={`p-2 rounded-full transition-colors ${
                currentIndex === 0
                  ? "text-gray-300"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <BsArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => paginate(1)}
              disabled={currentIndex === reviews.length - 1}
              className={`p-2 rounded-full transition-colors ${
                currentIndex === reviews.length - 1
                  ? "text-gray-300"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <BsArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden ">
          <AnimatePresence initial={false} custom={currentIndex}>
            <motion.div
              key={currentIndex}
              custom={currentIndex}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {[0, 1].map((offset) => {
                const reviewIndex = (currentIndex + offset) % reviews.length;
                const review = reviews[reviewIndex];

                if (!review) return null;

                return (
                  <div
                    key={review.id}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      {/* <Image
                      src="https://lh3.googleusercontent.com/a-/ALV-UjXjX6U_wKz7yUh-DjGq5EKwW38cBV4YDGJ1-_DgxQ=w48"
                      alt="Google Reviews"
                      width={1000}
                      height={1000}
                      className="w-6 h-6"
                    /> */}
                      <FcGoogle className="w-6 h-6" />

                      <span className="font-outfit">Google Reviews</span>
                    </div>

                    <p className="text-gray-700 mb-6">{review.text}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Image
                          src={review.image}
                          alt={review.author}
                          width={1000}
                          height={1000}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <span className="font-outfit text-xl font-medium text-gray-900">
                          {review.author}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                        <span className="ml-2 font-medium">
                          {review.rating}.0
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewsAndExperiences;
