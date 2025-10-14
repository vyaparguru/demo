"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { FaPhoneSquare } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about-us" },
    { name: "OUR SERVICES", path: "/our-services" },
    { name: "WHY US", path: "/why-us" },
    { name: "CONTACT US", path: "/contact-us" },
  ];

  return (
    <header className="w-full shadow bg-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-3 md:py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png" 
            alt="Logo"
            width={180}
            height={50}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`font-semibold text-sm ${
                pathname === link.path
                  ? "text-[var(--color-main)] border-b-2 border-[var(--color-main)] pb-1"
                  : "text-black "
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right side (phone + button) desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="tel:1-877-742-2999"
            className="flex items-center text-black font-semibold text-md"
          >
            <FaPhoneSquare className="mr-2 text-[var(--color-main)]  rotate-90" aria-hidden="true" />
            905-669-0481
          </a>
          <Link
            href="/get-a-quote"
            className="bg-[var(--color-main)]  text-white text-sm px-4 py-3 rounded  font-semibold"
          >
            GET A QUOTE
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-black cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-xs transition-all duration-300 md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu (slide-in from right, above blur) */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
        style={{ willChange: "transform" }}
      >
        <button
          className="absolute top-4 right-4 text-2xl text-black"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <FiX />
        </button>
        <nav className="flex flex-col mt-16 space-y-6 px-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="font-semibold text-lg text-black"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Phone + Quote button mobile (always visible) */}
      <div className="md:hidden flex justify-between space-x-10 bg-gray-50 border-t-2 shadow">
        <a
          href="tel:1-877-742-2999"
          className="flex items-center text-black font-semibold text-md mx-auto"
        >
          <FaPhoneSquare className="mr-2 text-[var(--color-main)] rotate-90" aria-hidden="true" />
          905-669-0481
        </a>
        <Link
          href="/get-a-quote"
          className="bg-[var(--color-main)] text-white px-14 py-2 font-semibold"
        >
          GET A QUOTE
        </Link>
      </div>
    </header>
  );
}
