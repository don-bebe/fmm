"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = "#f4f4f4";

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`sticky top-0 z-50 shadow-lg transition-colors duration-300 ${
        isScrolled ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo & Name */}
          <div className="flex items-center space-x-2">
            {isMobile ? (
                <span className="text-lg font-semibold uppercase sm:hidden">
                  FMM
                </span>
            ) : (
              <span className="text-lg font-semibold uppercase hidden sm:block">
                Flobert Mutsa
              </span>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:block">
            <div className="flex space-x-6">
              <Link
                href="/"
                className="hover:text-orange-500 px-3 py-2 text-sm font-semibold uppercase"
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="hover:text-orange-500 px-3 py-2 text-sm font-semibold uppercase"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="hover:text-orange-500 px-3 py-2 text-sm font-semibold uppercase"
              >
                Projects
              </Link>
              <Link
                  href=""
                  className="hover:text-orange-500 px-3 py-2 text-sm font-semibold uppercase"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              type="button"
              className="focus:ring-2 focus:ring-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={handleMobileMenuToggle}
            >
              <svg
                className={`size-6 ${isMobileMenuOpen ? "hidden" : "block"}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`size-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } sm:hidden px-4 pb-3 ${
          isScrolled ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <Link
          href="/"
          className="block px-3 py-2 rounded-md text-base font-semibold uppercase hover:text-orange-500"
        >
          Home
        </Link>
        <Link
          href="/#about"
          className="block px-3 py-2 rounded-md text-base font-semibold uppercase hover:text-orange-500"
        >
          About
        </Link>
        <Link
          href="/projects"
          className="block px-3 py-2 rounded-md text-base font-semibold uppercase hover:text-orange-500"
        >
          Projects
        </Link>
        <Link
            href=""
            className="block px-3 py-2 rounded-md text-base font-semibold uppercase hover:text-orange-500"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
