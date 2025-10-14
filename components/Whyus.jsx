"use client";
import { FiTruck, FiCheckCircle } from "react-icons/fi";
import { FaCanadianMapleLeaf } from "react-icons/fa";

export default function WhyUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">
          Why Ship With Trivon
        </h2>

        {/* Top Row: Features */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <FaCanadianMapleLeaf className="text-[var(--color-main)] text-6xl mb-4" />
            <h3 className="text-xl font-bold mb-3 text-black">
              Asset-Based & Canadian
            </h3>
            <p className="text-black">
              We are a Canadian-based company with 2 locations in Canada
              (Ontario & New Brunswick) with a large fleet of trucks
              available to transport your goods within Canada and the USA.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <FiTruck className="text-[var(--color-main)] text-6xl mb-4" />
            <h3 className="text-xl font-bold mb-3 text-black">
              Dry, Cool, Heated, Flatbed
            </h3>
            <p className="text-black">
              Whether your load requires heating, cooling, custom-tailored
              delivery options – we’ve got you covered. We ensure your goods
              are delivered to the right place on time.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <FiCheckCircle className="text-[var(--color-main)] text-6xl mb-4" />
            <h3 className="text-xl font-bold mb-3 text-black">Fully Certified</h3>
            <p className="text-black">
              Certified with CBSA, C-TPAT, PIP, CSA, FAST, ACE, ACI,
              HAZMAT, and SmartWay – ensuring your goods are delivered
              without delays, hidden fees, or unnecessary inspections.
            </p>
          </div>
        </div>

        {/* Bottom Row: Stats */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Stat 1 */}
          <div className="text-center">
            <p className="text-4xl font-bold text-[var(--color-main)] mb-2">100+</p>
            <h4 className="text-lg font-bold mb-2 text-black">Over 100 Trucks</h4>
            <p className="text-black">
              We own a fleet of modern trucks to transport goods in Canada
              and across the border, ensuring reliable service each time.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <p className="text-4xl font-bold text-[var(--color-main)] mb-2">200+</p>
            <h4 className="text-lg font-bold mb-2 text-black">Over 200 Trailers</h4>
            <p className="text-black">
              Our 200+ trailers support perishable and non-perishable goods
              transport, including Vans, Reefers, Heated trailers, and
              Flatbeds.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <p className="text-4xl font-bold text-[var(--color-main)] mb-2">98%</p>
            <h4 className="text-lg font-bold mb-2 text-black">On-time Delivery</h4>
            <p className="text-black">
              With an industry-leading 98% on-time delivery rate, we ensure
              your goods reach their destination reliably and promptly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
