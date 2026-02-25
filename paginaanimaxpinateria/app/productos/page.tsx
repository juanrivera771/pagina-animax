"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import * as THREE from "three";
import Script from "next/script";


type Producto = {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
};

const productosData: Producto[] = [
  {
    id: 1,
    nombre: "Piñata Personalizada",
    precio: 80000,
    imagen: "/hero/hero.jpg",
  },
  {
    id: 2,
    nombre: "Arreglo de Globos Premium",
    precio: 120000,
    imagen: "/hero/hero.jpg",
  },
  {
    id: 3,
    nombre: "Kit Fiesta Completo",
    precio: 200000,
    imagen: "/hero/hero.jpg",
  },
  {
    id: 4,
    nombre: "Decoración Cumpleaños",
    precio: 150000,
    imagen: "/hero/hero.jpg",
  },
];

export default function ProductosPage() {
  const [busqueda, setBusqueda] = useState("");
  const [orden, setOrden] = useState("default");

  const productosFiltrados = useMemo(() => {
    let resultado = productosData.filter((producto) =>
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    if (orden === "menor") {
      resultado.sort((a, b) => a.precio - b.precio);
    }

    if (orden === "mayor") {
      resultado.sort((a, b) => b.precio - a.precio);
    }

    return resultado;
  }, [busqueda, orden]);

  // --- VANTA CELLS ---
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      import("vanta/dist/vanta.cells.min").then((VANTA) => {
        setVantaEffect(
          VANTA.default({
            el: vantaRef.current,
            THREE,
            amplitudeFactor: 1,
            backgroundAlpha: 1,
            backgroundColor: 14155663,
            color1: 6187883,
            color2: 14437584,
            gyroControls: false,
            mouseControls: false,
            ringFactor: 1,
            rotationFactor: 1,
            scale: 1,
            scaleMobile: 3,
            size: 1.5,
            speed: 1,
            touchControls: false,
            minHeight: 200,
            minWidth: 200,
          })
        );
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <main ref={vantaRef} className="min-h-screen p-8 relative z-0">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-10 relative z-10">
        <h1 className="text-4xl font-bold mb-6">
          Nuestros Productos
        </h1>

        {/* FILTROS */}
        <div className="flex flex-col md:flex-row gap-4">

          {/* Buscador */}
          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="px-4 py-3 rounded-xl border border-gray-300 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-rose-400"
          />

          {/* Orden */}
          <select
            value={orden}
            onChange={(e) => setOrden(e.target.value)}
            className="px-4 py-3 rounded-xl border border-gray-300 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-rose-400"
          >
            <option value="default">Ordenar por</option>
            <option value="menor">Precio: menor a mayor</option>
            <option value="mayor">Precio: mayor a menor</option>
          </select>

          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-gray-800 text-white text-center hover:bg-black transition"
          >
            Volver al inicio
          </Link>

        </div>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10">
        {productosFiltrados.map((producto) => (
          <div
            key={producto.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <div className="relative w-full h-60">
              <Image
                src={producto.imagen}
                alt={producto.nombre}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <h2 className="font-semibold text-lg">
                {producto.nombre}
              </h2>

              <p className="text-rose-500 font-bold text-xl mt-2">
                ${producto.precio.toLocaleString()}
              </p>

              <Link
                href={`https://wa.me/573144581356?text=Hola quiero cotizar ${producto.nombre}`}
                target="_blank"
                className="mt-4 block text-center bg-rose-500 hover:bg-rose-600 text-white py-2 rounded-xl font-semibold transition"
              >
                Cotizar
              </Link>
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}