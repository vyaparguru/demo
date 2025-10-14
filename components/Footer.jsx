"use client";
import Link from "next/link";
import Image from "next/image";

import { FaPhoneSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-300 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-4 gap-10">
        {/* Logo + Phone */}
        <div>
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png" 
              alt="Logo"
              width={180}
              height={50}
              className="cursor-pointer"
            />
          </Link>
          {/* <a
            href="tel:1-877-742-2999"
            className="flex items-center mt-4 text-lg font-semibold text-black"
          >
            <FaPhoneSquare className="mr-2 text-[var(--color-main)] rotate-90" aria-hidden="true" />1-877-742-2999
          </a> */}
        </div>

        {/* Quick Links */}
        <div className="text-black">
          <h3 className="text-[var(--color-main)] font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2">
             <li>
              <Link href="/" className="">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="">
                About us
              </Link>
            </li>
            <li>
              <Link href="/our-services" className="">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/why-us" className="">
                Why us
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="">
                Contact us
              </Link>
            </li>
           
          </ul>
        </div>

        {/* Services */}
        <div className="text-black">
          <h3 className="text-[var(--color-main)] font-bold mb-3">Our Services</h3>
          <ul className="space-y-2">
            <li>Freight Transportation</li>
            <li>Warehousing & Storage</li>
            <li>Supply Chain Solutions</li>
            <li>Logistics Management</li>
            <li>Custom Clearance</li>
          </ul>
        </div>

        {/* Location */}
        <div className="text-black">
          <h3 className="text-[var(--color-main)] font-bold mb-3">Location</h3>
          <p className="flex items-start">
            Suite104 9407 NE Vancouver Mall Dr, Vancouver, WA 98662, USA.
          </p>
          <p className="flex items-start">
          236 1A-12830 96 Ave, Surrey BC V3V0C2, Canada.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-8 pt-4 text-center text-sm text-black space-y-1">
        <p>© {new Date().getFullYear()} Trivon. All rights reserved.</p>
        <p>
          Website developed by{" "}
          <a
            href="https://vyaparguru.com/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            Vyapur Guru Infotech Pvt. Ltd.
          </a>
        </p>
      </div>
    </footer>
  );
}
