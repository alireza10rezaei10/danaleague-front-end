import Image from "next/image";
import Link from "next/link";
import { IMAGES, FOOTER_LINKS } from "@/app/constants";
import { SiInstagram, SiTelegram, SiLinkedin } from "react-icons/si";

const Footer = () => {
  const renderLinks = (links, isInternal = false) =>
    links.map((link) => (
      <li key={link.URL} className="hover:text-[var(--gold-color)]">
        {isInternal ? (
          <Link href={link.URL}>{link.TITLE}</Link>
        ) : (
          <a href={link.URL} target="_blank" rel="noopener noreferrer">
            {link.TITLE}
          </a>
        )}
      </li>
    ));

  return (
    <footer className="mt-32 py-16 bg-[var(--primary-color)] text-white">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Internal Links */}
        <div className="text-center">
          <h3 className="text-lg font-bold mb-4">لینک‌های داخلی</h3>
          <ul className="space-y-2 text-sm">
            {renderLinks(FOOTER_LINKS.INTERNALS, true)}
          </ul>
        </div>

        {/* External Links */}
        <div className="text-center">
          <h3 className="text-lg font-bold mb-4">لینک‌های خارجی</h3>
          <ul className="space-y-2 text-sm">
            {renderLinks(FOOTER_LINKS.EXTERNALS)}
          </ul>
        </div>

        {/* Social + Enamad */}
        <div className="flex flex-col items-center space-y-4 sm:col-span-2 md:col-span-1">
          <h3 className="text-lg font-bold">شبکه‌های اجتماعی</h3>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com/danaleague"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--gold-color)] transition"
              aria-label="Instagram"
            >
              <SiInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://t.me/danaleague"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--gold-color)] transition"
              aria-label="Telegram"
            >
              <SiTelegram className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/company/danaleague"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--gold-color)] transition"
              aria-label="LinkedIn"
            >
              <SiLinkedin className="w-6 h-6" />
            </a>
          </div>

          {/* Enamad */}
          <div className="mt-4">
            <a
              referrerPolicy="origin"
              target="_blank"
              rel="noopener noreferrer"
              href="https://trustseal.enamad.ir/?id=595202&Code=zBetXpfgU7zEIvtunoeNzvS05SJXn7OX"
            >
              <Image
                src={IMAGES.NO_STAR_ENAMAD.URL}
                alt={IMAGES.NO_STAR_ENAMAD.ALT}
                className="cursor-pointer"
                width={70}
                height={70}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
