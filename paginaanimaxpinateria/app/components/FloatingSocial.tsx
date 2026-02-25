"use client";

import { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaPlus } from "react-icons/fa";

export default function FloatingSocial() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* INSTAGRAM */}
      <Link
        href="https://instagram.com/"
        target="_blank"
        className={`
          flex items-center justify-center
          w-12 h-12 rounded-full shadow-lg
          bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600
          text-white
          transition-all duration-300
          ${open
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-75 pointer-events-none"}
        `}
        style={{ transitionDelay: open ? "80ms" : "0ms" }}
      >
        <FaInstagram size={18} />
      </Link>

      {/* FACEBOOK */}
      <Link
        href="https://facebook.com/"
        target="_blank"
        className={`
          flex items-center justify-center
          w-12 h-12 rounded-full shadow-lg
          bg-blue-600 text-white
          transition-all duration-300
          ${open
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-75 pointer-events-none"}
        `}
        style={{ transitionDelay: open ? "140ms" : "0ms" }}
      >
        <FaFacebookF size={18} />
      </Link>

      {/* WHATSAPP */}
      <Link
        href="https://wa.me/573144581356"
        target="_blank"
        className={`
          flex items-center justify-center
          w-12 h-12 rounded-full shadow-lg
          bg-green-500 text-white
          transition-all duration-300
          ${open
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-75 pointer-events-none"}
        `}
        style={{ transitionDelay: open ? "200ms" : "0ms" }}
      >
        <FaWhatsapp size={18} />
      </Link>

      {/* BOTÓN PRINCIPAL */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-14 h-14 rounded-full
          bg-green-500 hover:bg-green-600
          text-white
          shadow-xl
          flex items-center justify-center
          transition-all duration-300
        "
      >
        <FaPlus
          size={22}
          className={`transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        />
      </button>
    </div>
  );
}