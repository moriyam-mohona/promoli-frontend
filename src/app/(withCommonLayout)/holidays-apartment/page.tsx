import HolidaysApartmentBanner from "@/components/holidaysApartment/HolidaysApartmentBanner";
import Navbar from "@/components/shared/Navbar";
import Filtering from "@/components/shared/Filtering";
import ExperiencePerfectGetaway from "@/components/holidaysApartment/ExperiencePerfectGetaway";
import HolidayTrendyApartment from "@/components/holidaysApartment/HolidayTrendyApartment";
import HolidayAllApartment from "@/components/holidaysApartment/HolidayAllApartment";
import Services from "@/components/home/services/Services";
import CrabsCutters from "@/components/home/crabsCutters/CrabsCutters";

const HolidaysApartment = () => {
  return (
    <div>
      <Navbar className="bg-transparent shadow-none" />
      <HolidaysApartmentBanner />
      <Filtering />
      <div className="bg-[#FFF8F0]">
        <ExperiencePerfectGetaway />
        <HolidayTrendyApartment />
        <div className="container mx-auto w-2/3 text-gray-300 py-20 ml-48">
          <hr />
        </div>
        <HolidayAllApartment />
        <Services />
        <CrabsCutters />
        {/* <HolidaysApartmentFooter /> */}
      </div>
    </div>
  );
};

export default HolidaysApartment;
