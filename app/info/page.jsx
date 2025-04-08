import { STATIC_TEXTS } from "./constants";
import SimpleSection from "@/components/SimpleSection";

const Info = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 space-y-10">
      <SimpleSection
        id="intro"
        title={STATIC_TEXTS.INTRO.TITLE}
        description={STATIC_TEXTS.INTRO.DESCRIPTION}
      />
      <SimpleSection
        id="goals"
        title={STATIC_TEXTS.GOALS.TITLE}
        list={STATIC_TEXTS.GOALS.GOALS_LIST}
      />
      <SimpleSection
        id="pivots"
        title={STATIC_TEXTS.PIVOTS.TITLE}
        items={STATIC_TEXTS.PIVOTS.PIVOTS_LIST}
      />
      <SimpleSection
        id="timing"
        title={STATIC_TEXTS.TIMING.TITLE}
        description={STATIC_TEXTS.TIMING.DESCRIPTION}
      />
      <SimpleSection
        id="location"
        title={STATIC_TEXTS.LOCATION.TITLE}
        description={STATIC_TEXTS.LOCATION.DESCRIPTION}
      />
      <SimpleSection
        id="judgeness"
        title={STATIC_TEXTS.JODGEMENT.TITLE}
        list={STATIC_TEXTS.JODGEMENT.JODGENESS_LIST}
      />
      <SimpleSection
        id="rules"
        title={STATIC_TEXTS.CONDITIONS_AND_RULES.TITLE}
        list={STATIC_TEXTS.CONDITIONS_AND_RULES.CONDITIONS_AND_RULES_LIST}
      />
      <SimpleSection
        id="signup"
        title={STATIC_TEXTS.SIGN_UP.TITLE}
        description={STATIC_TEXTS.SIGN_UP.DESCRIPTION}
        list={STATIC_TEXTS.SIGN_UP.SIGN_UP_LIST}
      />
      <SimpleSection
        id="prizes"
        title={STATIC_TEXTS.PRIZES.TITLE}
        description={STATIC_TEXTS.PRIZES.DESCRIPTION}
      />
      <SimpleSection
        id="contact"
        title={STATIC_TEXTS.CONTAC_US.TITLE}
        description={STATIC_TEXTS.CONTAC_US.DESCRIPTION}
      />
    </div>
  );
};

export default Info;
