import React from "react";
import banner from "@/assets/home/banner.png";

const HomeBanner = () => {
  return (
    <div className="relative h-[60vh] md:h-[80vh] w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${banner.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center justify-center">
        <div className="text-center max-w-5xl">
          <h1 className="font-outfit text-4xl md:text-6xl font-semibold text-white mb-4">
            Fantastic holiday apartments on Lake Constance & in the Allgäu
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
