import Image from "next/image";
import Link from "next/link";

const SimpleCard = ({ url, image, alt, title }) => {
  return (
    <Link
      href={url}
      className="block p-4 border border-[var(--primary-color)] rounded-lg shadow-md transition
                 bg-white hover:bg-gradient-to-br hover:from-white hover:to-[var(--primary-color)] hover:text-white"
    >
      <div className="relative w-40 h-50">
        <Image
          src={image}
          alt={alt}
          layout="fill"
          objectFit="contain"
          className="rounded-md"
        />
      </div>
      <h3 className="mt-2 text-lg text-center">{title}</h3>
    </Link>
  );
};

export default SimpleCard;
