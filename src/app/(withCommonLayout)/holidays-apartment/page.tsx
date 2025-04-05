import HolidaysApartmentBanner from "@/components/holidaysApartment/HolidaysApartmentBanner";
import Navbar from "@/components/shared/Navbar";
import Filtering from "@/components/shared/Filtering";
import ExperiencePerfectGetaway from "@/components/holidaysApartment/ExperiencePerfectGetaway";
import HolidayTrendyApartment from "@/components/holidaysApartment/HolidayTrendyApartment";
import HolidayAllApartment from "@/components/holidaysApartment/HolidayAllApartment";
import HolidaysApartmentFooter from "@/components/holidaysApartment/HolidaysApartmentFooter";

const HolidaysApartment = () => {
  return (
    <div>
      <Navbar className="bg-transparent shadow-none" />
      <HolidaysApartmentBanner />
      <Filtering />
      <div className="bg-[#FFF8F0]">
        <ExperiencePerfectGetaway />
        <HolidayTrendyApartment />
        <div className="container mx-auto w-2/3 text-gray-300 py-20">
          <hr />
        </div>
        <HolidayAllApartment />
        <HolidaysApartmentFooter />
      </div>
    </div>
  );
};

export default HolidaysApartment;
