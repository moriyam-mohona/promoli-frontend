import HomeBanner from "@/components/home/banner/HomeBanner";
import GoodToKnow from "@/components/home/goodToknow/GoodToknow";
import React from "react";

const LandingPage = () => {
  return (
    <div className="container mx-auto w-full h-screen bg-gray-200">
      <HomeBanner />
      <GoodToKnow />
    </div>
  );
};

export default LandingPage;
