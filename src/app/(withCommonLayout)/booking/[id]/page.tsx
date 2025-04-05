import BookingForm from "@/components/booking/BookingForm";
import CallToAction from "@/components/shared/CallToAction";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const Booking = () => {
  return (
    <div className="bg-[#FFF8F0]">
      <Navbar />
      <div className="pt-10 pb-40 space-y-36">
        <BookingForm />
        <CallToAction />
      </div>
    </div>
  );
};

export default Booking;
