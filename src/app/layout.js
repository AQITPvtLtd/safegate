import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/header/Navbar";
import Footer from "@/components/common/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Safegate Medical Center",
  description: "Your Health is Our Priority",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
