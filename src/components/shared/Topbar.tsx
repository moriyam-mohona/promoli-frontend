import React from "react";
import { FaPhone } from "react-icons/fa6";
import { TbMail } from "react-icons/tb";

const Topbar = () => {
  return (
    <div className="w-full relative">
      <div
        className="w-full py-2 md:py-3"
        style={{
          background: "linear-gradient(133deg, #7EE3F9 30%, #FDF8F0 30%)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex gap-5 md:justify-end items-center space-y-2 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2 ">
              <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-primary md:bg-white border-2 border-white md:border-primary rounded-full">
                <FaPhone
                  size={20}
                  className="font-primary text-white md:text-primary"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm md:text-base font-medium text-[#001F3F] ">
                  Phone Number
                </span>
                <span className="text-sm text-[#808080]">(850) 123-1212</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white border-2 border-primary rounded-full">
                <TbMail size={26} className="font-primary text-primary" />
              </div>

              <div className="flex flex-col">
                <span className="text-sm md:text-base font-medium text-[#001F3F] ">
                  Email Us Here
                </span>
                <span className="text-sm text-[#808080]">
                  example@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
