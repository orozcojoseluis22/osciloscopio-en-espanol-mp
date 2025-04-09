
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, Clock, Calendar, Users, BookOpen } from "lucide-react";

const CourseDetails = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">
          Detalles del Curso
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">Duración</CardTitle>
              <Clock className="h-5 w-5 text-blue-600" />
            </CardHeader>
            <CardContent>
              <p>20 horas de contenido en video</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">Inicio</CardTitle>
              <Calendar className="h-5 w-5 text-blue-600" />
            </CardHeader>
            <CardContent>
              <p>Acceso inmediato</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">Modalidad</CardTitle>
              <Users className="h-5 w-5 text-blue-600" />
            </CardHeader>
            <CardContent>
              <p>100% virtual con acceso ilimitado</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">Material</CardTitle>
              <BookOpen className="h-5 w-5 text-blue-600" />
            </CardHeader>
            <CardContent>
              <p>Incluye material de apoyo descargable</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-blue-800">Beneficios del curso</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <BadgeCheck className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
              <p>Aprenderás a medir y diagnosticar circuitos electrónicos con precisión</p>
            </div>
            <div className="flex items-start">
              <BadgeCheck className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
              <p>Dominarás todas las funciones del osciloscopio digital moderno</p>
            </div>
            <div className="flex items-start">
              <BadgeCheck className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
              <p>Interpretarás correctamente las formas de onda y diagnósticos</p>
            </div>
            <div className="flex items-start">
              <BadgeCheck className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
              <p>Aprenderás técnicas avanzadas de medición y solución de problemas</p>
            </div>
            <div className="flex items-start">
              <BadgeCheck className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
              <p>Recibirás un diploma que certifica tu conocimiento al finalizar el curso</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
