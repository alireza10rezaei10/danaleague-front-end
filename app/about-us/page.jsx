import Section from "@/components/Section";
import { ABOUT_US } from "./constants";

const AboutUs = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800 font-sans space-y-6 leading-loose text-justify">
      <Section title={ABOUT_US.TITLE}>
        {ABOUT_US.PARAGRAPHS.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </Section>
    </div>
  );
};

export default AboutUs;
