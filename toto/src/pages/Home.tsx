import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-indigo-900 mb-6">
            Chasse au Trésor au Lycée Jean Prévost
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Partez à l'aventure dans les couloirs du lycée Jean Prévost à Montivilliers.
            Résolvez des énigmes, découvrez des indices et trouvez le trésor caché !
          </p>
          <div className="space-y-4">
            <Link to="/regles" className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Commencer l'aventure
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-indigo-900 mb-3">Exploration</h3>
            <p className="text-gray-600">Découvrez le lycée sous un nouveau jour à travers une série d'énigmes passionnantes.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-indigo-900 mb-3">Collaboration</h3>
            <p className="text-gray-600">Travaillez en équipe pour résoudre les défis et trouver les indices cachés.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-indigo-900 mb-3">Récompenses</h3>
            <p className="text-gray-600">Des prix exceptionnels attendent les équipes qui parviendront à résoudre toutes les énigmes !</p>
          </div>
        </div>
      </div>
    </div>
  );
}