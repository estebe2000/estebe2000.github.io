import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Rules from './pages/Rules';
import Media from './pages/Media';
import Creators from './pages/Creators';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/regles" element={<Rules />} />
          <Route path="/media" element={<Media />} />
          <Route path="/createurs" element={<Creators />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;