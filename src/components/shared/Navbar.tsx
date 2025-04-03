"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FaHome, FaBars } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import Image from "next/image";
import logo from "@/assets/logo.png";

const navigationLinks = [
  { href: "/", label: "Home", icon: <FaHome /> },
  { href: "/holidays", label: "Holidays Apartment" },
  { href: "/property", label: "Property Management" },
  { href: "/activities", label: "Activities" },
  { href: "/about", label: "About Us" },
  { href: "/faqs", label: "FAQ's" },
];

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  className = "bg-secondary shadow-sm",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className={`absolute top-16 md:top-20 left-0 w-full z-50 ${className} transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src={logo}
              alt="Logo"
              width={1000}
              height={1000}
              className="w-16 h-12 md:w-20 md:h-16 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-white font-outfit font-medium relative transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-white after:transition-all after:duration-300 ${
                  pathname === link.href
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Icons + Hamburger */}
          <div className="flex items-center space-x-4">
            {/* Wishlist */}
            <div className="relative">
              <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border-2 border-white rounded-full">
                <GrFavorite size={22} className="text-white" />
              </div>
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                0
              </span>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-gray-200 focus:outline-none"
            >
              <FaBars size={22} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="bg-white md:hidden px-5 py-4">
            <div className="flex flex-col space-y-4">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-black/70 font-medium relative transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-white after:transition-all after:duration-300 ${
                    pathname === link.href
                      ? "after:w-full"
                      : "after:w-0 hover:after:w-full"
                  }`}
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
