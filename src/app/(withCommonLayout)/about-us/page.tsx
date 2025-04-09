import AboutBanner from "@/components/aboutUS/AboutBanner";
import Navbar from "@/components/shared/Navbar";
import Filtering from "@/components/shared/Filtering";
import AboutSection from "@/components/aboutUS/AboutSection";
import TheRightAccommodation from "@/components/aboutUS/TheRightAccommodation";
import ContactPerson from "@/components/aboutUS/ContactPerson";

const AboutUs = () => {
  return (
    <div className="bg-[#FFF8F0]">
      <Navbar className="bg-transparent shadow-none" />
      <AboutBanner />
      <Filtering />
      <AboutSection />
      <TheRightAccommodation />
      <ContactPerson />
    </div>
  );
};

export default AboutUs;
