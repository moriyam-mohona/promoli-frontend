import AboutBanner from "@/components/aboutUS/AboutBanner";
import Navbar from "@/components/shared/Navbar";
import Filtering from "@/components/shared/Filtering";
import AboutSection from "@/components/aboutUS/AboutSection";
import TheRightAccommodation from "@/components/aboutUS/TheRightAccommodation";
import ContactPerson from "@/components/aboutUS/ContactPerson";
import OurTeam from "@/components/aboutUS/OurTeam";
import WhatAreYouWaitingFor from "@/components/aboutUS/WhatAreYouWaitingFor";
import WhatYouCanExpect from "@/components/aboutUS/WhatYouCanExpect";
import CallToAction from "@/components/shared/CallToAction";

const AboutUs = () => {
  return (
    <div className="bg-[#FFF8F0] 2xl:pb-40">
      <Navbar className="bg-transparent shadow-none" />
      <AboutBanner />
      <Filtering />
      <AboutSection />
      <TheRightAccommodation />
      <ContactPerson />
      <OurTeam />
      <WhatAreYouWaitingFor />
      <WhatYouCanExpect />
      <CallToAction />
    </div>
  );
};

export default AboutUs;
