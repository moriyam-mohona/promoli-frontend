"use client";

import React from "react";
import { FaArrowUp } from "react-icons/fa";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#171818] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Logo and Note */}
        <div>
          <div className="mb-8">
            <Image
              src={logo}
              alt="Logo"
              width={1000}
              height={1000}
              className="w-48 h-40 mb-4"
            />
          </div>
          {/* <p className="text-base max-w-xs font-outfit">
            IMPORTANT NOTICE: You and your contractor are responsible for
            meeting the terms and conditions of this contract.
          </p> */}
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-2xl mb-8">Quick Link:</h4>
          <ul className="space-y-2 text-gray-200 font-outfit">
            <li>Home</li>
            <li>Holiday Apartment</li>
            <li>Apartment Management</li>
            <li>About Us</li>
            <li>FAQ’s</li>
          </ul>
        </div>

        {/* More Links */}
        <div>
          <h4 className="font-semibold text-2xl mb-8">More</h4>
          <ul className="space-y-2 text-gray-200 font-outfit">
            <li>Privacy Policy</li>
            <li>Logel Notice</li>
            <li>Terms & Condition</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-right md:text-left lg:text-right">
          <h2 className="text-4xl font-bold text-white font-outfit">
            123-456-7890
          </h2>
          <p className="mt-2 font-outfit">contact@bookonline.com</p>
        </div>

        {/* Scroll to Top Button */}
        <div className="absolute top-0 right-4 -translate-y-1/2">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-primary hover:bg-primary/80 text-white w-18 h-18 rounded-full flex items-center justify-center shadow-md transition"
          >
            <FaArrowUp className="text-3xl text-white" />
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#050505] font-outfit text-white py-4 gap-2">
        <div className="container mx-auto ">
          <span className="font-semibold">Holidays Apartment Today!</span>
          <span className="text-sm">
            Copyright © 1953 - 2024 - All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
