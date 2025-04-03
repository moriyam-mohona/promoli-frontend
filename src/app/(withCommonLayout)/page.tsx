import HomeBanner from "@/components/home/banner/HomeBanner";
import CrabsCutters from "@/components/home/crabsCutters/CrabsCutters";
import DreamlikeApartments from "@/components/home/dreamlikeApartments/DreamlikeApartments";
import GoodToKnow from "@/components/home/goodToknow/GoodToknow";
import CallToAction from "@/components/shared/CallToAction";
import Filtering from "@/components/shared/Filtering";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <Navbar className="bg-transparent shadow-none" />
      <HomeBanner />
      <Filtering />
      <div className="mb-40">
        <DreamlikeApartments />
        <GoodToKnow />
        <CrabsCutters />
        <CallToAction />
      </div>
    </div>
  );
};

export default LandingPage;
