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

export default function ImageSlider() {
  return (
    <div className="bg-[#FFF8F0]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Text Content */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
            <span className="text-primary font-alex text-4xl">Services</span>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Berge oder See? Warum nicht beides!
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Du kannst dich nicht zwischen Bergen und Wasser entscheiden? Am
              Bodensee und im Allgäu erlebst du beides – kristallklares Wasser
              zum Baden und Segeln sowie atemberaubende Alpenpanoramen zum
              Wandern und Skifahren. Sichere dir jetzt deine Ferienwohnung und
              genieße das Beste aus beiden Welten!
            </p>
          </div>

          {/* Slider */}
          <div className="lg:col-span-8">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1.2}
              breakpoints={{
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2.5 },
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
                  <div className="relative h-[400px] overflow-hidden group cursor-pointer">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="text-white italic  mb-2">
                        {slide.category}
                      </div>
                      <h3 className="font-outfit text-xl font-light mb-2">
                        {slide.title}
                      </h3>
                      <p className="text-sm line-clamp-3">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="custom-pagination flex justify-center gap-2 mt-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
