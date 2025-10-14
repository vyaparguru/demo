"use client";
import { useState } from "react";

export default function GetQuote() {
  const [form, setForm] = useState({
    companyName: "",
    city: "",
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!form.companyName || !form.city || !form.email || !form.firstName || !form.lastName) {
      setStatus("⚠️ Please fill in all required fields.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus("⚠️ Enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("⏳ Sending your request...");

    try {
      const res = await fetch("/api/sendQuote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Quote request sent successfully!");
        setForm({
          companyName: "",
          city: "",
          email: "",
          phone: "",
          firstName: "",
          lastName: "",
        });
      } else {
        setStatus("❌ Failed to send. Try again later.");
      }
    } catch {
      setStatus("❌ Network error. Please retry.");
    }
  };

  return (
    <section className="bg-gray-50 py-12 px-6 lg:px-20 mt-32 md:mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Info Section */}
        <div>
          <h2 className="text-black text-4xl font-bold mb-4">Get a Quote</h2>
          <p className="text-lg text-[var(--color-main)] font-semibold mb-4">
            Get Shipping Quotes for Dry Van, Reefer, Flatbed, and Rail.
          </p>
          <p className="text-gray-800 mb-6">
            Your request will be processed within 2 hours during regular business days. 
            Once you submit your form, a shipping specialist will review availability and 
            contact you with full details.
          </p>
          <p className="text-gray-800">
            For assistance, please contact us at{" "}
            <a
              href="tel:9056690481"
              className="text-[var(--color-main)] font-bold"
            >
              905-669-0481
            </a>
          </p>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md border "
        >
          <p className="text-sm mb-4 text-gray-600">
            <span className="text-red-500">*</span> indicates required fields
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="font-medium text-black">Company Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="companyName"
                value={form.companyName}
                onChange={handleChange}
                className="w-full text-gray-600 p-2 border rounded-md mt-1 focus:outline-none focus:ring focus:ring-[var(--color-main)]"
              />
            </div>

            <div>
              <label className="font-medium text-black">City <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                className="w-full text-gray-600 p-2 border rounded-md mt-1 focus:outline-none focus:ring focus:ring-[var(--color-main)]"
              />
            </div>

            <div>
              <label className="font-medium text-black">Email <span className="text-red-500">*</span></label>
              <input
                type="text" 
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full text-gray-600 p-2 border rounded-md mt-1 focus:outline-none focus:ring focus:ring-[var(--color-main)]"
                autoComplete="off"
              />
            </div>

            <div>
              <label className="font-medium text-black">Contact Phone</label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full text-gray-600 p-2 border rounded-md mt-1 focus:outline-none focus:ring focus:ring-[var(--color-main)]"
              />
            </div>

            <div>
              <label className="font-medium text-black">First Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="w-full text-gray-600 p-2 border rounded-md mt-1 focus:outline-none focus:ring focus:ring-[var(--color-main)]"
              />
            </div>

            <div>
              <label className="font-medium text-black">Last Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="w-full text-gray-600 p-2 border rounded-md mt-1 focus:outline-none focus:ring focus:ring-[var(--color-main)]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full  mt-6 bg-[var(--color-main)] cursor-pointer text-white px-6 py-2 rounded-md transition-all"
          >
            Submit
          </button>

          {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
        </form>
      </div>
    </section>
  );
}
