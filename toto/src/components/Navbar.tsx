import React from 'react';
import { MapPinned, Home, Book, Image, Users } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-indigo-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <MapPinned className="h-6 w-6" />
          <span className="text-xl font-bold">Chasse au Trésor</span>
        </div>
        <div className="flex space-x-6">
          <Link to="/" className={`flex items-center space-x-1 hover:text-indigo-200 ${isActive('/') ? 'text-indigo-200 font-bold' : ''}`}>
            <Home className="h-5 w-5" />
            <span>Accueil</span>
          </Link>
          <Link to="/regles" className={`flex items-center space-x-1 hover:text-indigo-200 ${isActive('/regles') ? 'text-indigo-200 font-bold' : ''}`}>
            <Book className="h-5 w-5" />
            <span>Règles</span>
          </Link>
          <Link to="/media" className={`flex items-center space-x-1 hover:text-indigo-200 ${isActive('/media') ? 'text-indigo-200 font-bold' : ''}`}>
            <Image className="h-5 w-5" />
            <span>Médias</span>
          </Link>
          <Link to="/createurs" className={`flex items-center space-x-1 hover:text-indigo-200 ${isActive('/createurs') ? 'text-indigo-200 font-bold' : ''}`}>
            <Users className="h-5 w-5" />
            <span>Créateurs</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}