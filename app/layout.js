import { Vazirmatn } from "next/font/google";
import Navbar from "../components/Navbar";
import CountDownBanner from "../components/CountDownBanner";
import "./globals.css";
import { NAV_MENU_ITEMS } from "./constants";
import Footer from "@/components/Footer";

const VazirmatnFont = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${VazirmatnFont.className} antialiased`}>
        <CountDownBanner />
        <Navbar items={NAV_MENU_ITEMS} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
