
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CourseDetails from "@/components/CourseDetails";
import CourseContent from "@/components/CourseContent";
import Testimonials from "@/components/Testimonials";
import Diploma from "@/components/Diploma";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <CourseDetails />
      <CourseContent />
      <Testimonials />
      <Diploma />
      <Footer />
      <div className="text-center py-8">
        <Link to="/simulator" className="text-blue-600 underline">
          Ir al simulador 3D
        </Link>
      </div>
    </div>
  );
};

export default Index;
