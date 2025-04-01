import Galary from "@/components/Galary";
import SimpleCard from "@/components/SimpleCard";
import { MEHVARS } from "../constants";

const Last = () => {
  return (
    <section>
      <h2 className="text-center text-2xl font-bold mb-6 mt-12 ">
        توضیحات تکمیلی
      </h2>
      <div className="flex flex-wrap justify-evenly gap-5 sm:gap-0">
        {MEHVARS.map((MEHVAR, index) => (
          <SimpleCard
            key={index}
            image={MEHVAR.IMG_URL}
            alt={MEHVAR.ALT}
            title={MEHVAR.TITLE}
            url={MEHVAR.URL}
          />
        ))}
      </div>

      <h2 className="text-center text-2xl font-bold mb-6 mt-12">
        گالری تصاویر
      </h2>
      <Galary />
    </section>
  );
};

export default Last;
