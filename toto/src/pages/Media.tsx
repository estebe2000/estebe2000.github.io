import React from 'react';
import { Play } from 'lucide-react';

export default function Media() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-indigo-900 mb-12">
          Galerie Médias
        </h1>

        <div className="space-y-16">
          {/* Section Photos */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Photos des Lieux</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Remplacez les URLs par vos vraies images */}
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f"
                  alt="Entrée du lycée"
                  className="w-full h-64 object-cover rounded-lg shadow-md transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-4 rounded-b-lg">
                  <p className="text-white">Entrée principale</p>
                </div>
              </div>
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
                  alt="Couloir principal"
                  className="w-full h-64 object-cover rounded-lg shadow-md transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-4 rounded-b-lg">
                  <p className="text-white">Couloir principal</p>
                </div>
              </div>
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6"
                  alt="Bibliothèque"
                  className="w-full h-64 object-cover rounded-lg shadow-md transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-4 rounded-b-lg">
                  <p className="text-white">Bibliothèque</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section Vidéos */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Vidéos de Présentation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((index) => (
                <div key={index} className="relative group cursor-pointer">
                  <div className="bg-gray-200 w-full h-48 rounded-lg flex items-center justify-center">
                    <Play className="w-12 h-12 text-indigo-600" />
                  </div>
                  <p className="mt-2 text-gray-700">Vidéo {index}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section Visite Virtuelle */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Visite Virtuelle</h2>
            <div className="bg-gray-200 w-full h-96 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Visite virtuelle interactive du lycée</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}