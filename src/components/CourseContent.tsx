
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
              Módulo 1: Introducción al osciloscopio automotriz
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>¿Qué es un osciloscopio?</li>
                <li>Tipos de osciloscopios: portátiles, de escritorio y para computadora</li>
                <li>Componentes principales: Pantalla, controles, sondas</li>
                <li>Configuración inicial del osciloscopio</li>
                <li>Señales analógicas y señales digitales</li>
                <li>Forma de onda y su importancia</li>
                <li>Osciloscopio requerido en el taller automotriz</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="modulo-2">
            <AccordionTrigger className="text-lg font-medium">
              Módulo 2: Operación básica y ajustes
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Manejo de las escalas horizontal y vertical: visualización correcta de una señal</li>
                <li>Uso del disparador (trigger) para estabilizar la señal</li>
                <li>Interpretación de la forma de onda:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Identificación de picos, caídas y niveles de señal</li>
                    <li>Análisis de frecuencia, ciclo de trabajo y amplitud</li>
                  </ul>
                </li>
                <li>Uso de cursores para facilitar las mediciones de amplitud y/o frecuencia</li>
                <li>Cómo tomar y guardar capturas de pantalla de la forma de onda</li>
                <li>Grabando las señales para referencias futuras</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="modulo-3">
            <AccordionTrigger className="text-lg font-medium">
              Módulo 3: Aplicaciones básicas en el diagnóstico
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>La importancia de contar con el diagrama eléctrico</li>
                <li>Midiendo bobinas de encendido sin necesidad de quitar las bujías, 100% confiable</li>
                <li>Análisis de señales de bobinas de encendido y su diagnóstico</li>
                <li>Medición de la señal de los sensores de posición (CKP, CMP). Correlación</li>
                <li>Medición de señales de inyectores:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Diagnóstico de fallas en el sistema de inyección</li>
                  </ul>
                </li>
                <li>Prueba de sensores comunes con osciloscopio:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Sensor de presión (MAP, MAF)</li>
                    <li>Sensores HO2S, KS, IBS, etc.</li>
                  </ul>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="modulo-4">
            <AccordionTrigger className="text-lg font-medium">
              Módulo 4: Uso del osciloscopio en los sistemas de carga y arranque
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Señales en el sistema de carga (alternador y batería):
                  <ul className="list-disc pl-6 mt-2">
                    <li>Identificación de fallas en el alternador (ruido, fluctuaciones)</li>
                    <li>Prueba de regulación de voltaje</li>
                    <li>Análisis de la corriente de carga y su comportamiento</li>
                  </ul>
                </li>
                <li>Diagnóstico de fallas en el sistema de arranque:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Señales de motores de arranque y relevadores</li>
                    <li>Identificación de fallas como cables de arranque defectuosos o relevadores mal conectados</li>
                  </ul>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="modulo-5">
            <AccordionTrigger className="text-lg font-medium">
              Módulo 5: Visualizando señales más complejas: ECU y LAN interna
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Diagnóstico de los sistemas de control del motor (ECU)</li>
                <li>Prueba de sistemas de comunicación (CAN Bus, LIN Bus)</li>
                <li>Identificación de ruidos eléctricos y señales no deseadas</li>
                <li>Cómo usar filtros para aislar señales relevantes</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="modulo-6">
            <AccordionTrigger className="text-lg font-medium">
              Módulo 6: Más aplicaciones prácticas en el diagnóstico
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mediciones de sensores, actuadores y sistemas de control en vehículos en funcionamiento</li>
                <li>Ejercicios prácticos para interpretar y resolver fallas comunes: ¿El vehículo no acelera? ¿Aparece EPC en el tablero o un rayito?</li>
                <li>Forma de comprobar el cuerpo de aceleración y la computadora con el osciloscopio</li>
                <li>Señales PWM dentro del motor (cuerpo de aceleración, válvulas VVT, cánister, alternador, etc.)</li>
                <li>Compresión relativa: fácil y sencillo</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="modulo-7">
            <AccordionTrigger className="text-lg font-medium">
              Módulo 7: Casos típicos reales
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Localización de Fallas en AVEO con el osciloscopio</li>
                <li>Resolviendo problemas en la electrónica de Nissan usando el osciloscopio</li>
                <li>Use el osciloscopio en Chrysler y localice fallas en el sistema de vacío</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="modulo-8">
            <AccordionTrigger className="text-lg font-medium">
              Módulo 8: Aumentando la capacidad del osciloscopio
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Uso de puntas de prueba especiales (amperimétrica, de pulsos de bujía, de alto voltaje, etc.)</li>
                <li>Hacer más poderoso el osciloscopio con el programa iCúbica</li>
                <li>Convertir el celular Android en una pantalla de osciloscopio</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default CourseContent;
