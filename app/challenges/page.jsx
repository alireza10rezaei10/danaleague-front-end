import Section from "@/components/Section";
import { TITLE, CHALLENGES } from "./constants";

const Challenges = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 space-y-10">
      <h1 className="text-3xl text-center font-bold text-[var(--primary-color)] pr-4 leading-tight">
        {TITLE}
      </h1>
      {CHALLENGES.map((challenge, index) => {
        return (
          <Section
            key={index}
            title={challenge.TITLE}
            innerSections={challenge.INNER_SECTIONS}
          />
        );
      })}
    </div>
  );
};

export default Challenges;
