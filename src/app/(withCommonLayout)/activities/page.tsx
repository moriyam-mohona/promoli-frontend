import banner from "@/assets/activities/activity.png";

import ActivitiesBanner from "@/components/activities/ActivitiesBanner";
import Navbar from "@/components/shared/Navbar";
import Filtering from "@/components/shared/Filtering";
import HolidaysBegin from "@/components/activities/HolidaysBegin";
import DidYouKnow from "@/components/activities/DidYouKnow";
import Image from "next/image";

const Activities = () => {
  return (
    <div className="bg-[#FFF8F0] 2xl:pb-40">
      <Navbar className="bg-transparent shadow-none" />
      <ActivitiesBanner />
      <Filtering />
      <HolidaysBegin />
      <DidYouKnow />

      <Image
        src={banner}
        alt="banner"
        width={2000}
        height={2000}
        className="w-full h-full object-cover transition-transform duration-300 my-10"
        priority={true}
      />
    </div>
  );
};

export default Activities;
