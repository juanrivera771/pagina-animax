"use client";

import Image from "next/image";
import Link from "next/link";
import HeroSlider from "./components/HeroSlider";
import Script from "next/script";
import VantaBackground from "./components/VantaBackground";
import FloatingSocial from "./components/FloatingSocial";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-100 via-amber-100 to-emerald-100 relative">

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" strategy="beforeInteractive"/>
      <Script src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.clouds.min.js" strategy="beforeInteractive"/>      

      {/* NAVBAR */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          {/* Logo como botón de volver arriba */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex items-center gap-3 cursor-pointer"
      >
        <Image
          src="/imagenes/logo-animax.jpg"
          alt="ANIMAX"
          width={42}
          height={42}
          priority
        />
        <span className="font-bold text-lg">
          ANIMAX{" "}
          <span className="text-gray-500 font-normal">
            Diversión para Todos
          </span>
        </span>
      </button>

          {/* Menú */}
          <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
            <Link
              href="/productos"
              className="border border-gray-400 px-6 py-3 rounded-full font-semibold hover:bg-white transition"
            >
              Ver productos
            </Link>

            <a
              href="#como-funciona"
              className="border border-gray-400 px-6 py-3 rounded-full font-semibold hover:bg-white transition"
            >
              Cómo funciona
            </a>

            <a
              href="#Quienes-somos"
              className="border border-gray-400 px-6 py-3 rounded-full font-semibold hover:bg-white transition"
            >
              Quienes somos
            </a>

            <a
              href="#contacto"
              className="border border-gray-400 px-6 py-3 rounded-full font-semibold hover:bg-white transition"
            >
              Contacto
            </a>
          </nav>

          {/* Botón principal */}
          <Link
            href="https://wa.me/573144581356"
            target="_blank"
            className="hidden md:block bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full font-semibold shadow-md transition"
          >
            Pedir por WhatsApp
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-36 pb-20 px-6 min-h-screen flex items-center">
        <VantaBackground />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 relative z-10">

          {/* TEXTO */}
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Celebra en grande con{" "}
              <span className="bg-gradient-to-r from-rose-500 via-amber-500 to-emerald-500 text-transparent bg-clip-text">
                ANIMAX
              </span>
            </h1>

            <p className="mt-6 text-gray-700 text-lg">
              Piñatas personalizadas, arreglos de globos y kits de fiesta.
              Haz tu pedido por WhatsApp y recibe asesoría inmediata.
            </p>

            {/* BOTONES */}
            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                href="https://wa.me/573144581356"
                target="_blank"
                className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition"
              >
                Cotizar por WhatsApp
              </Link>

              <a
                href="#productos"
                className="border border-gray-400 px-6 py-3 rounded-full font-semibold hover:bg-white transition"
              >
                Ver productos
              </a>
            </div>

            {/* TARJETAS */}
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
              <div className="bg-white rounded-2xl shadow-md p-5 text-center">
                <p className="text-sm text-gray-500">Respuesta</p>
                <p className="font-bold text-lg">Rápida</p>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-5 text-center">
                <p className="text-sm text-gray-500">Personalización</p>
                <p className="font-bold text-lg">100%</p>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-5 text-center">
                <p className="text-sm text-gray-500">Atención</p>
                <p className="font-bold text-lg">WhatsApp</p>
              </div>
            </div>
          </div>

          <HeroSlider />
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section
        id="como-funciona"
        className="relative w-full py-20 px-6 bg-[url('/imagenes/fondo-como-funciona.WEBP')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-6xl mx-auto text-center text-white">

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Cómo funciona?
          </h2>

          <p className="mb-14 text-lg text-white/80">
            Organizar tu fiesta con ANIMAX es súper fácil
          </p>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="p-8 rounded-2xl shadow-2xl bg-white text-gray-800">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-2xl font-semibold mb-3">Cotizas</h3>
              <p>
                Escríbenos y te enviamos toda la información de nuestros paquetes y precios.
              </p>
            </div>

            <div className="p-8 rounded-2xl shadow-2xl bg-white text-gray-800">
              <div className="text-5xl mb-4">💳</div>
              <h3 className="text-2xl font-semibold mb-3">Separas</h3>
              <p>
                Reservas tu fecha con un anticipo y aseguramos tu evento.
              </p>
            </div>

            <div className="p-8 rounded-2xl shadow-2xl bg-white text-gray-800">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-semibold mb-3">Disfruta</h3>
              <p>
                Nosotros nos encargamos de todo mientras tú solo disfrutas la fiesta.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <FloatingSocial />
    </main>
  );
}