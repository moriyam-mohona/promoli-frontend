import banner1 from "@/assets/holidayAppertment/holidays-apartment-details-banner-one.png";
import banner2 from "@/assets/holidayAppertment/holidays-apartment-details-banner-two.png";
import Image from "next/image";

const HolidaysApartmentDetailsBanner = () => {
  return (
    <div className="flex justify-center items-center gap-3">
      <Image
        src={banner1}
        alt="banner-img"
        width={1000}
        height={1000}
        className="w-full h-[680px] object-cover"
      />
      <Image
        src={banner2}
        alt="banner-img"
        width={1000}
        height={1000}
        className="w-full h-[680px] object-cover"
      />
    </div>
  );
};

export default HolidaysApartmentDetailsBanner;
