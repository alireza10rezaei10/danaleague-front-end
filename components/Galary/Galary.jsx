"use client";

import Image from "next/image";

const Gallery = () => {
  // Generate paths dynamically for 1 to 10.jpg
  const images = Array.from({ length: 10 }, (_, i) => `/images/${i + 1}.jpg`);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-center text-2xl font-bold mb-4">Image Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-40 md:h-60">
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
