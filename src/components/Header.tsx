
import React from "react";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-[#003366] text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <h1 className="text-xl font-bold">Electrónica y Servicio</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <div className="flex items-center">
            <PhoneCall className="h-4 w-4 mr-2" />
            <span className="text-sm">Contacto: +52 55 1234 5678</span>
          </div>
          <Button className="bg-[#FF5733] hover:bg-[#E64A19] text-white">
            Más Información
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
