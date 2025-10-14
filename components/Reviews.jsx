"use client";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Testimonials() {
  const testimonials = [
    {
      text: `Trivon has been a trusted logistics partner for years. Their timely service, communication, and professionalism are unmatched. We can always rely on them to deliver our goods safely and on time.`,
      author: "XYZ",
    },
    {
      text: `Trivon has been a trusted logistics partner for years. Their timely service, communication, and professionalism are unmatched. We can always rely on them to deliver our goods safely and on time.`,
      author: "XYZ",
    },
    {
      text: `Trivon has been a trusted logistics partner for years. Their timely service, communication, and professionalism are unmatched. We can always rely on them to deliver our goods safely and on time.`,
      author: "XYZ",
    },
  ];

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl text-black font-bold mb-3">Client Reviews</h2>
        <p className="text-md md:text-lg text-[var(--color-main)] mb-10">
          Trivon works with professional partners and suppliers to ensure
          successful project completions.
        </p>

        {/* Testimonial Box */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 p-3 text-black hover:text-[var(--color-main)] cursor-pointer transition"
          >
            <FiChevronLeft size={28} />
          </button>

          <div className="border border-black bg-white p-14 max-w-3xl">
            <p className="text-black mb-6 leading-relaxed">{current.text}</p>
            <p className="font-bold text-black">{current.author}</p>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 p-3 text-black hover:text-[var(--color-main)] cursor-pointer transition"
          >
            <FiChevronRight size={28} />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-[var(--color-main)] cursor-pointer" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
