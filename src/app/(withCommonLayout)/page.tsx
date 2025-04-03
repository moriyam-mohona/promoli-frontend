import HomeBanner from "@/components/home/banner/HomeBanner";
import DreamlikeApartments from "@/components/home/dreamlikeApartments/DreamlikeApartments";
import GoodToKnow from "@/components/home/goodToknow/GoodToknow";
import Filtering from "@/components/shared/Filtering";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <Navbar className="bg-transparent shadow-none" />
      <HomeBanner />
      <Filtering />
      <div className="bg-[#FDF8F0]">
        <DreamlikeApartments />
        <GoodToKnow />
      </div>
    </div>
  );
};

export default LandingPage;
