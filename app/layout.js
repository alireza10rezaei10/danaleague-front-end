import { Vazirmatn } from "next/font/google";
import Navbar from "../components/Navbar";
import CountDownBanner from "../components/CountDownBanner";
import "./globals.css";

const VazirmatnFont = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
});

const navMenuItems = [
  { name: "خانه", path: "/" },
  { name: "درباره ما", path: "/about" },
  { name: "تماس با ما", path: "/contact" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${VazirmatnFont.className} antialiased`}>
        <CountDownBanner />
        <Navbar items={navMenuItems} />
        {children}
      </body>
    </html>
  );
}
