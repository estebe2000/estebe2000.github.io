import React from 'react';
import { CheckCircle, Clock, Users, AlertTriangle } from 'lucide-react';

export default function Rules() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-indigo-900 mb-12">
          Règles de la Chasse au Trésor
        </h1>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="h-6 w-6 text-indigo-600" />
              <h2 className="text-2xl font-semibold">Équipes</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Formez des équipes de 3 à 5 personnes</li>
              <li>Désignez un chef d'équipe responsable</li>
              <li>Choisissez un nom d'équipe original</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="h-6 w-6 text-indigo-600" />
              <h2 className="text-2xl font-semibold">Déroulement</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>La chasse dure 2 heures maximum</li>
              <li>Suivez les indices dans l'ordre</li>
              <li>Prenez des photos des indices trouvés</li>
              <li>Respectez les zones autorisées</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="h-6 w-6 text-indigo-600" />
              <h2 className="text-2xl font-semibold">Objectifs</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Trouvez tous les indices cachés</li>
              <li>Résolvez les énigmes</li>
              <li>Localisez le trésor final</li>
              <li>Revenez au point de départ une fois terminé</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="h-6 w-6 text-amber-500" />
              <h2 className="text-2xl font-semibold">Règles importantes</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Respectez les lieux et le matériel</li>
              <li>Pas de course dans les couloirs</li>
              <li>Restez silencieux pendant la chasse</li>
              <li>En cas de problème, contactez un organisateur</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}