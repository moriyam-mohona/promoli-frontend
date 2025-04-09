// import PropertyManagementBanner from "@/components/propertyManagement/PropertyManagementBanner";
// import Navbar from "@/components/shared/Navbar";
// import Filtering from "@/components/shared/Filtering";
// import ForOwners from "@/components/propertyManagement/ForOwners";
// import ProfessionalMarketing from "@/components/propertyManagement/ProfessionalMarketing";
// import ProfessionalSetup from "@/components/propertyManagement/ProfessionalSetup";
// import FixedRental from "@/components/propertyManagement/FixedRental";
// import GuestReviews from "@/components/propertyManagement/GuestReviews";
// import WaitingFor from "@/components/propertyManagement/WaitingFor";
// import CallToAction from "@/components/shared/CallToAction";

// const PropertyManagement = () => {
//   return (
//     <div className="bg-[#FFF8F0] 2xl:pb-40">
//       <Navbar className="bg-transparent shadow-none" />
//       <PropertyManagementBanner />
//       <Filtering />
//       <ForOwners />
//       <ProfessionalMarketing />
//       <ProfessionalSetup />
//       <FixedRental />
//       <GuestReviews />
//       <WaitingFor />
//       <CallToAction />
//     </div>
//   );
// };

// export default PropertyManagement;

import Navbar from "@/components/shared/Navbar";
import React from "react";

const PropertyManagement = () => {
  return (
    <div className="h-screen flex items-center justify-center  text-gray-800 container mx-auto px-4">
      {" "}
      <Navbar />
      <h2 className="text-2xl font-bold">
        Property management page is under construction
      </h2>
    </div>
  );
};

export default PropertyManagement;
