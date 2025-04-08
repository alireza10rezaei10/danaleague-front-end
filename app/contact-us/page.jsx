import Section from "@/components/Section";
import { CONTACT_INFO, GOOGLE_MAP_URLS } from "./constants";

const ContactUs = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800 font-sans space-y-10">
      <Section
        title={CONTACT_INFO.ADDRESS.TITLE}
        description={CONTACT_INFO.ADDRESS.DESCRIPTION}
      >
        <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-md">
          <iframe
            src={GOOGLE_MAP_URLS.UT}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Section>

      <Section
        title={CONTACT_INFO.SECRETARIAT.TITLE}
        description={CONTACT_INFO.SECRETARIAT.DESCRIPTION}
      />
      <Section
        title={CONTACT_INFO.PHONE.TITLE}
        description={CONTACT_INFO.PHONE.DESCRIPTION}
        ltr={true}
      />
      <Section
        title={CONTACT_INFO.EMAIL.TITLE}
        description={CONTACT_INFO.EMAIL.DESCRIPTION}
        ltr={true}
      />
    </div>
  );
};

export default ContactUs;
