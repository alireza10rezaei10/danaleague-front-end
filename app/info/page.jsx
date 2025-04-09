import ScheduleTable from "@/components/ScheduleTable";
import { STATIC_TEXTS, TIMING } from "./constants";
import Section from "@/components/Section";

const Info = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 space-y-10">
      <Section
        id="intro"
        title={STATIC_TEXTS.INTRO.TITLE}
        description={STATIC_TEXTS.INTRO.DESCRIPTION}
      />
      <Section
        id="goals"
        title={STATIC_TEXTS.GOALS.TITLE}
        list={STATIC_TEXTS.GOALS.GOALS_LIST}
      />
      <Section
        id="prizes"
        title={STATIC_TEXTS.PRIZES.TITLE}
        list={STATIC_TEXTS.PRIZES.PRIZES_LIST}
      />
      <Section
        id="pivots"
        title={STATIC_TEXTS.PIVOTS.TITLE}
        items={STATIC_TEXTS.PIVOTS.PIVOTS_LIST}
      />
      <Section
        id="fields"
        title={STATIC_TEXTS.FIELDS.TITLE}
        items={STATIC_TEXTS.FIELDS.FIELDS_LIST}
      />
      <Section id="timing" title={STATIC_TEXTS.TIMING.TITLE}>
        <ScheduleTable data={TIMING} />
      </Section>
      <Section
        id="location"
        title={STATIC_TEXTS.LOCATION.TITLE}
        description={STATIC_TEXTS.LOCATION.DESCRIPTION}
      />
      <Section
        id="judgeness"
        title={STATIC_TEXTS.JODGEMENT.TITLE}
        list={STATIC_TEXTS.JODGEMENT.JODGEMENT_LIST}
      />
      <Section
        id="rules"
        title={STATIC_TEXTS.CONDITIONS_AND_RULES.TITLE}
        list={STATIC_TEXTS.CONDITIONS_AND_RULES.CONDITIONS_AND_RULES_LIST}
      />
      <Section
        id="signup"
        title={STATIC_TEXTS.SIGN_UP.TITLE}
        description={STATIC_TEXTS.SIGN_UP.DESCRIPTION}
        items={STATIC_TEXTS.SIGN_UP.SIGN_UP_LIST}
      />
      <Section
        id="documents"
        title={STATIC_TEXTS.DOCUMENTS.TITLE}
        description={STATIC_TEXTS.DOCUMENTS.DESCRIPTION}
        items={STATIC_TEXTS.DOCUMENTS.DOCUMENTS_LIST}
      />
      <Section
        id="contact"
        title={STATIC_TEXTS.CONTAC_US.TITLE}
        description={STATIC_TEXTS.CONTAC_US.DESCRIPTION}
      />
    </div>
  );
};

export default Info;
