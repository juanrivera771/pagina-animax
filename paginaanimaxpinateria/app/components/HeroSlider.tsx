"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images: string[] = [
  "/imagenes/hero1.jpg",
  "/imagenes/hero2.jpg",
  "/imagenes/hero3.jpg",
  "/imagenes/hero4.jpg",
];

export default function HeroSlider() {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] lg:w-[520px] lg:h-[520px] rounded-full overflow-hidden border-8 border-white shadow-2xl">
      
      {/* Imagen */}
      <Image
        src={images[current]}
        alt="Animax eventos"
        fill
        priority
        className="object-cover transition-all duration-500 ease-in-out"
      />

      {/* Indicadores */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index
                ? "bg-white scale-110"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}