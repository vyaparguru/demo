
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoToTop from "@/components/GoToTop";
import ScrollToTop from "@/components/ScrollToTop";


export const metadata = {
  title: "Trivon",
  description: "Your Cargo, our Commitment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <GoToTop/>
        <main>{children}</main>
        <ScrollToTop/>
        <Footer/>
      </body>
    </html>
  );
}
