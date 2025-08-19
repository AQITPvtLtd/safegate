import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/header/Navbar";
import Footer from "@/components/common/footer/Footer";
import Script from "next/script";
import SocialLinks from "@/components/SocialLinks";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Safegate Medical Center",
  description: "Your Health is Our Priority",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js)  */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-4MZYLFVBN1"></Script>
        <Script id="gtag-script">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-4MZYLFVBN1'); `}
        </Script>
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <SocialLinks />
        <Footer />
      </body>
    </html>
  );
}