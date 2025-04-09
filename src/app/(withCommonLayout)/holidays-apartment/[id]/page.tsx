import Calender from "@/components/holidaysApartmentDetails/Calender";
import HolidaysApartmentDetailsBanner from "@/components/holidaysApartmentDetails/HolidaysApartmentDetailsBanner";
import HolidaysApartmentFeatures from "@/components/holidaysApartmentDetails/HolidaysApartmentFeatures";
import Location from "@/components/holidaysApartmentDetails/Location";
import NotRightOne from "@/components/holidaysApartmentDetails/NotRightOne";
import PersonalContact from "@/components/holidaysApartmentDetails/PersonalContact";
import ReviewsAndExperiences from "@/components/holidaysApartmentDetails/ReviewsAndExperiences";
import Navbar from "@/components/shared/Navbar";

const HolidaysApartmentDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#FFF8F0]">
        <HolidaysApartmentDetailsBanner />
        <HolidaysApartmentFeatures />
        <PersonalContact />
        <Location />
        <Calender />
        <ReviewsAndExperiences />
        <NotRightOne />
      </div>
    </div>
  );
};

export default HolidaysApartmentDetails;
