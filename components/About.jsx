"use client";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        {/* Text Box */}
        <div className="border border-black py-8 px-4 md:px-8 bg-white shadow-sm relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-black">Meet Trivon</h2>
          <h3 className="text-[var(--color-main)] font-semibold mb-4 text-md md:text-lg">
            Your Transportation Solutions Partner
          </h3>
          <p className="text-black leading-relaxed mb-6">
            Your transportation challenge is our opportunity to showcase our
            expertise. Our dedicated staff, and safe, professional drivers
            provide a wide range of transportation and logistics services
            throughout North America. Our focus is flexible, reliable, and prompt
            service to improve your supply chain management. We never say no. You
            can count on Trivon for your transportation solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            <Link
              href="/our-services"
              className="w-full md:w-auto px-6 py-3 bg-[var(--color-main)] border-2 border-[var(--color-main)] text-white rounded-md font-medium transition text-center"
            >
              View Services
            </Link>
            <Link
              href="/get-a-quote"
              className="w-full md:w-auto px-6 py-3 border-2 hover:border-black hover:bg-black border-black rounded-md font-medium text-gray-800 hover:text-white transition text-center"
            >
              Get A Quote
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative md:ml-0">
          <Image
            src="/banner.jpg"
            alt="about"
            width={600}
            height={200}
            className=" shadow-xl relative z-0"
          />
        </div>
      </div>
    </section>
  );
}
