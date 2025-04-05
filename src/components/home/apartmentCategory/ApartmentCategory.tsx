"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80",
    category: "Services",
    title: "To make your holiday as you imagine it",
    description:
      "Would you like a personalized offer? Or do you need a taxi to the holiday apartment? Of course! After all, we want you to enjoy your stay here as much as possible. So please contact our contact persons in good time so that we can arrange everything for your vacation.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80",
    category: "Travel Insurance",
    title: "You never know what will happen",
    description:
      "Protect your journey with comprehensive coverage for unexpected events.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80",
    category: "Good to know",
    title:
      "Exclusive insider tips that will make your stay even more enjoyable",
    description:
      "Surf the internet for free, drive a climate-neutral car... There's a lot going on in Büsum!",
  },
  {
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80",
    category: "Services",
    title: "To make your holiday as you imagine it",
    description:
      "Would you like a personalized offer? Or do you need a taxi to the holiday apartment? Of course! After all, we want you to enjoy your stay here as much as possible. So please contact our contact persons in good time so that we can arrange everything for your vacation.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80",
    category: "Travel Insurance",
    title: "You never know what will happen",
    description:
      "Protect your journey with comprehensive coverage for unexpected events.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80",
    category: "Good to know",
    title:
      "Exclusive insider tips that will make your stay even more enjoyable",
    description:
      "Surf the internet for free, drive a climate-neutral car... There's a lot going on in Büsum!",
  },
];

const ApartmentCategory = () => {
  return (
    <div className="relative bg-[#FFF8F0]">
      <div className="container mx-auto px-4 py-12">
        <div>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="pb-12"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden group cursor-pointer">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="p-6 text-black">
                  <div className="text-primary italic mb-5 flex items-center gap-2 text-lg">
                    <hr className="w-12" />
                    {slide.category}
                  </div>
                  <h3 className="font-outfit text-xl font-medium mb-4">
                    {slide.title}
                  </h3>
                  <p className="text-lg text-gray-600 line-clamp-3">
                    {slide.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <div className="bg-red-300 h-20 custom-pagination" /> */}
        </div>
      </div>
    </div>
  );
};

export default ApartmentCategory;
