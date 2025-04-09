import Link from "next/link";

const InlineLink = ({ text, url }) => {
  return (
    <>
      <Link
        href={url}
        className="text-blue-500 underline underline-offset-7 hover:text-[var(--gold-color)]"
      >
        {` ${text} `}
      </Link>
    </>
  );
};
export default InlineLink;
