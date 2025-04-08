import Image from "next/image";
import Link from "next/link";

const Gallery = ({ preview }) => {
  // Generate paths dynamically for 1 to 10.jpg
  const images = Array.from(
    { length: preview ? 8 : 10 },
    (_, i) => `/images/gallery/${i + 1}.jpg`
  );

  return (
    <div className="container mx-auto p-4 relative text-gray-900">
      {/* Gallery Grid */}
      <div
        className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 relative ${
          preview ? "max-h-100" : ""
        } overflow-hidden`}
      >
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-40 md:h-60">
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              fill
              className="rounded-lg shadow-lg object-cover"
              priority
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlay & Button */}
      {preview && (
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--primary-color)] to-transparent flex justify-center items-end p-4">
          <Link
            href="gallery"
            className="cursor-pointer bg-white font-semibold px-6 py-2 rounded-full shadow-md hover:bg-gray-200 transition"
          >
            مشاهده ی همه
          </Link>
        </div>
      )}
    </div>
  );
};

export default Gallery;
