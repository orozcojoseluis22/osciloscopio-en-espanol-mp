import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
const Testimonials = () => {
  return <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">
          Lo que opinan nuestros estudiantes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-l-4 border-blue-500 shadow-lg">
            <CardContent className="pt-6">
              <div className="mb-4">
                <Quote className="h-8 w-8 text-blue-500 opacity-50" />
              </div>
              <p className="mb-4 italic">"Buenos días ingeniero. Muchísimas gracias a usted y a su bonito equipo por no sólo compartir el conocimiento sino por preocuparse por el aprendizaje de los estudiantes. Estoy en otras clases pero nada que ver con la empatía de ustedes. Mil gracias por este bonito curso que terminamos. Que Jehová los bendiga en abundancia. Sólo me falta esperar con emoción mi diploma "</p>
              <div className="flex items-center">
                <img src="/public/lovable-uploads/d8377329-af1a-44ca-b35d-0e5b8a663036.png" alt="Testimonio de estudiante con mensaje" className="h-auto w-48 object-contain mr-4" />
                <div>
                  <h4 className="font-semibold">Juan Carlos</h4>
                  <p className="text-sm text-gray-600">Estudiante del curso</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500 shadow-lg">
            <CardContent className="pt-6">
              <div className="mb-4">
                <Quote className="h-8 w-8 text-blue-500 opacity-50" />
              </div>
              <p className="mb-4 italic">"Como en todo trabajo diariamente se aprenden muchas cosas hay mucho que aprender mucho que estudiar si uno tiene el deseo y el empeño lo que aprendes lo pones en práctica allí se ve el progreso y la satisfacción personal. Gracias profesor por compartir su conocimiento."</p>
              <div className="flex items-center">
                <img src="/public/lovable-uploads/dbbf7e2f-11bf-439a-99d7-da9cb4899377.png" alt="Testimonio de estudiante" className="h-14 w-14 object-cover rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold">Víctor</h4>
                  <p className="text-sm text-gray-600">Estudiante del curso</p>
                </div>
              </div>
            </CardContent>
          </Card>

          
        </div>
      </div>
    </div>;
};
export default Testimonials;