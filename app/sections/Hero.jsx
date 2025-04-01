import Image from "next/image";
import { IMAGES } from "../constants";

const Hero = () => {
  return (
    <section className="relative h-[400px]">
      <Image
        src={IMAGES.PENCIL.URL}
        alt={IMAGES.PENCIL.ALT}
        width={100}
        height={100}
        className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2"
      />
    </section>
  );
};

export default Hero;
