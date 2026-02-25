"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    VANTA: any;
  }
}

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA) {
      setVantaEffect(
        window.VANTA.CLOUDS({          // <-- Aquí cambiamos a CLOUDS
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 600,
          minWidth: 300,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0xffffff,   // fondo base
          skyColor: 0x68b8d7,           // color del cielo
          cloudColor: 0xadcd1de,        // color de las nubes
          cloudShadowColor: 0x183550,   // sombras de nubes
          sunColor: 0xff9919,
          sunGlareColor: 0xff6633,
          sunlightColor: 0xff9933,
          speed: 1
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="absolute inset-0 z-0" />;
}