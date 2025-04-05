"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import couple from "@/assets/home/for-couples.png";
import families from "@/assets/home/for-families.png";
import doglovers from "@/assets/home/for-doglovers.png";

const slides = [
  {
    image: couple,
    category: "Für paare",
    title: "Wellness & Sauna",
    description:
      "Tauche ein in pure Erholung – genieße wohltuende Wärme in der Sauna und lass den Alltagsstress hinter dir. Wellness, Entspannung & neue Energie in deiner Unterkunft.",
  },
  {
    image: families,
    category: "Für Familien",
    title: "Spaziergänge am See",
    description:
      "Erlebe die Ruhe der Natur bei einem entspannten Spaziergang am See – frische Luft, sanfte Wellen und pure Erholung. Perfekt, um den Kopf frei zu bekommen und neue Energie zu tanken.",
  },
  {
    image: doglovers,
    category: "Für Hunde-Liebhaber",
    title: "Mit Hund unterwegs",
    description:
      "Gemeinsam die Natur entdecken – in unseren tierfreundlichen Unterkünften ist dein Hund herzlich willkommen. Endlose Spazierwege und wunderschöne Landschaften warten auf euch!",
  },
  {
    image: couple,
    category: "Für paare",
    title: "Wellness & Sauna",
    description:
      "Tauche ein in pure Erholung – genieße wohltuende Wärme in der Sauna und lass den Alltagsstress hinter dir. Wellness, Entspannung & neue Energie in deiner Unterkunft.",
  },
  {
    image: families,
    category: "Für Familien",
    title: "Spaziergänge am See",
    description:
      "Erlebe die Ruhe der Natur bei einem entspannten Spaziergang am See – frische Luft, sanfte Wellen und pure Erholung. Perfekt, um den Kopf frei zu bekommen und neue Energie zu tanken.",
  },
  {
    image: doglovers,
    category: "Für Hunde-Liebhaber",
    title: "Mit Hund unterwegs",
    description:
      "Gemeinsam die Natur entdecken – in unseren tierfreundlichen Unterkünften ist dein Hund herzlich willkommen. Endlose Spazierwege und wunderschöne Landschaften warten auf euch!",
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
