import HomeBanner from "@/components/home/banner/HomeBanner";
import GoodToKnow from "@/components/home/goodToknow/GoodToknow";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <Navbar className="bg-transparent shadow-none" />
      <HomeBanner />
      <div className="container mx-auto w-full h-screen bg-[#FDF8F0]">
        <GoodToKnow />
      </div>
    </div>
  );
};

export default LandingPage;
