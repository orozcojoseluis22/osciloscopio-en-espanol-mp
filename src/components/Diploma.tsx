import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, CheckSquare } from "lucide-react";
const Diploma = () => {
  return <div className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-6">
              Al finalizar el curso recibirás tu diploma
            </h2>
            <p className="text-lg mb-8">
              Reconocemos tu esfuerzo y dedicación con un diploma oficial que certifica 
              tus conocimientos en el uso profesional del osciloscopio.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckSquare className="h-6 w-6 text-amber-300 mr-2 mt-1 flex-shrink-0" />
                <p>Diploma del curso "MANEJO Y APLICACIÓN DEL OSCILOSCOPIO AUTOMOTRIZ" </p>
              </div>
              <div className="flex items-start">
                <CheckSquare className="h-6 w-6 text-amber-300 mr-2 mt-1 flex-shrink-0" />
                <p>Firmado por experto del sector</p>
              </div>
              <div className="flex items-start">
                <CheckSquare className="h-6 w-6 text-amber-300 mr-2 mt-1 flex-shrink-0" />
                <p>Formato digital de alta calidad</p>
              </div>
              <div className="flex items-start">
                <CheckSquare className="h-6 w-6 text-amber-300 mr-2 mt-1 flex-shrink-0" />
                <p>Envío a tu correo electrónico con opción a enviarlo físicamente si se cubren los costos de envío</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <Card className="w-full max-w-md bg-white text-black">
              <CardContent className="pt-6 text-center">
                <Award className="h-16 w-16 mx-auto text-amber-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">DIPLOMA</h3>
                <p className="text-lg mb-2 font-semibold">Aplicaciones del Osciloscopio</p>
                <p className="text-sm text-gray-600 mb-4">
                  Se otorga el presente diploma por haber completado satisfactoriamente 
                  el curso virtual sobre aplicaciones del osciloscopio.
                </p>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <p className="text-sm text-gray-600">Electrónica y Servicio</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>;
};
export default Diploma;