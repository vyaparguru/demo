import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-gray-50 py-16 px-4 md:px-8 mt-32 md:mt-10">
      <div className="max-w-7xl mx-auto bg-white p-8 shadow-xl">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl text-black font-bold mb-10 text-center">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-10 md:gap-0 items-start">
          {/* Contact Info */}
          <div>
            <div className="flex items-center mb-4 text-[var(--color-main)] text-lg font-semibold">
              <FaPhoneAlt className="mr-3" />
              <a href="tel:9056690481" className="hover:underline">
                905-669-0481
              </a>
            </div>

            <div className="flex items-center mb-4 text-[var(--color-main)] text-lg font-semibold">
              <FaEnvelope className="mr-3" />
              <a href="mailto:Operations@trivonsolutions.com" className="hover:underline text-black">
                Operations@trivonsolutions.com
              </a>
            </div>

            <div className="flex items-start text-black mt-6">
              <FaMapMarkerAlt className="text-[var(--color-main)] mt-1 mr-3" />
              <p>
                Suite104 9407 NE Vancouver Mall Dr, Vancouver, WA 98662, USA. <br/>
                236 1A-12830 96 Ave, Surrey BC V3V0C2, Canada.
              </p>
            </div>
          </div>

          {/* Embedded Map */}
          <div className="flex justify-center items-center w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.081159868845!2d-79.4901188236596!3d43.78176787109506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2d73d0a24cf1%3A0x734ff1fa8c632fa0!2sET%20Transport!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              className="rounded-md min-h-[300px] md:min-h-[400px]"
              style={{ minWidth: "300px" }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}