"use client";

import React, { useState } from "react";
import { FaHome, FaBars } from "react-icons/fa";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { GrFavorite } from "react-icons/gr";
const navigationLinks = [
  { href: "/", label: "Home", icon: <FaHome /> },
  { href: "/", label: "Holidays Apartment" },
  { href: "/", label: "Property Management" },
  { href: "/", label: "Activities" },
  { href: "/", label: "About Us" },
  { href: "/", label: "FAQ's" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-secondary shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src={logo}
              alt="Logo"
              width={1000}
              height={1000}
              className="w-20 h-16 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white font-outfit font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Icons + Hamburger */}
          <div className="flex items-center space-x-4">
            {/* Wishlist */}
            <div className="relative">
              <div className="w-10 h-10 flex items-center justify-center  border-2 border-white rounded-full">
                <GrFavorite size={22} className="text-white" />
              </div>
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                0
              </span>
            </div>

            {/* Hamburger (Mobile only) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <FaBars size={22} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
