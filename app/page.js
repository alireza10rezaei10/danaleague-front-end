import Hero from "./sections/Hero";
import Intro from "./sections/Intro";
import Last from "./sections/Last";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Intro />
      <Last />
      <Footer />
    </div>
  );
}
