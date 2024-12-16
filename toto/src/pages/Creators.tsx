import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Creators() {
  const creators = [
    {
      name: "Sarah Martin",
      role: "Chef de Projet",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      description: "Organisatrice principale de la chasse au trésor"
    },
    {
      name: "Thomas Dubois",
      role: "Concepteur d'Énigmes",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      description: "Créateur des énigmes et des défis"
    },
    {
      name: "Julie Lambert",
      role: "Responsable Médias",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      description: "En charge des photos et vidéos"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-indigo-900 mb-12">
          L'Équipe des Créateurs
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {creators.map((creator, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-64">
                <img 
                  src={creator.image}
                  alt={creator.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">{creator.name}</h3>
                  <p className="text-indigo-200">{creator.role}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-4">{creator.description}</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-indigo-600">
                    <Mail className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-indigo-600">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-indigo-600">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}