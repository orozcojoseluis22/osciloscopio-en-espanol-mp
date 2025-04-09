
import React from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";

const CourseContent = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">
          Contenido del Curso
        </h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="modulo-1">
            <AccordionTrigger className="text-lg font-medium">
              Módulo 1: Principios fundamentales del osciloscopio
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Introducción al osciloscopio y sus aplicaciones</li>
                <li>Tipos de osciloscopios: analógicos y digitales</li>
                <li>Controles básicos y funcionamiento</li>
                <li>Configuración inicial y ajustes</li>
                <li>Primeras mediciones y ejemplos prácticos</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="modulo-2">
            <AccordionTrigger className="text-lg font-medium">
              Módulo 2: Funciones avanzadas
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Análisis de formas de onda complejas</li>
                <li>Uso del trigger avanzado</li>
                <li>Mediciones automáticas</li>
                <li>Función FFT y análisis espectral</li>
                <li>Captura y almacenamiento de datos</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="modulo-3">
            <AccordionTrigger className="text-lg font-medium">
              Módulo 3: Diagnóstico en electrónica analógica
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Medición de señales en amplificadores</li>
                <li>Análisis de fuentes de alimentación</li>
                <li>Verificación de osciladores</li>
                <li>Diagnóstico de etapas analógicas</li>
                <li>Casos prácticos y solución de problemas</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="modulo-4">
            <AccordionTrigger className="text-lg font-medium">
              Módulo 4: Diagnóstico en electrónica digital
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Análisis de señales digitales</li>
                <li>Protocolos de comunicación (I2C, SPI, UART)</li>
                <li>Diagnóstico de microcontroladores</li>
                <li>Análisis lógico y temporización</li>
                <li>Detección de fallos en circuitos digitales</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="modulo-5">
            <AccordionTrigger className="text-lg font-medium">
              Módulo 5: Aplicaciones prácticas específicas
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Diagnóstico en equipos de audio</li>
                <li>Verificación de sistemas de video</li>
                <li>Análisis de fuentes conmutadas</li>
                <li>Diagnóstico en electrodomésticos</li>
                <li>Mantenimiento predictivo con osciloscopio</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default CourseContent;
