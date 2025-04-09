
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const mercadoPagoButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mercadoPagoButtonRef.current) {
      const script = document.createElement("script");
      script.src = "https://www.mercadopago.com.mx/integrations/v1/web-payment-checkout.js";
      script.setAttribute("data-preference-id", "113010244-fbd6c4bc-3ce5-4bcc-ae23-4510a6b965b8");
      script.setAttribute("data-source", "button");
      
      // Limpiar el contenedor antes de agregar el script
      if (mercadoPagoButtonRef.current.childNodes.length > 0) {
        mercadoPagoButtonRef.current.innerHTML = '';
      }
      
      mercadoPagoButtonRef.current.appendChild(script);
    }
    
    return () => {
      if (mercadoPagoButtonRef.current) {
        mercadoPagoButtonRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Curso Virtual: Aplicaciones del Osciloscopio
            </h1>
            <p className="text-xl mb-6">
              Aprende a usar profesionalmente el osciloscopio para diagnóstico y reparación electrónica
            </p>
            <div className="space-y-4">
              <div ref={mercadoPagoButtonRef} className="inline-block"></div>
              <p className="text-amber-300 font-medium">
                ¡Hasta 12 meses sin intereses con tarjeta de crédito!
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img 
                src="/public/placeholder.svg" 
                alt="Osciloscopio en uso" 
                className="w-full h-auto rounded"
                style={{ maxWidth: "400px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
