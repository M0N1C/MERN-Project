import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Importa el componente Navbar
import HomePage from './pages/HomePage';  // Página de inicio
import AboutPage from './pages/AboutPage';  // Página de 'About'
import ToursPage from './pages/ToursPage';  // Página de 'Tours'
import ContactPage from './pages/ContactPage';  // Página de 'Contact'
import LoginPage from './pages/LoginPage';  // Página de login
import SignUpPage from './pages/SignUpPage'; // Asegúrate de importar la página de "Sign Up"
import Footer from './components/Footer';  // Importa el componente Navbar
// Importa las páginas de los tours
import HistoricalPage from './pages/tours/HistoricalPage';
import ColdWarPage from './pages/tours/ColdWarPage';
import StreetArtPage from './pages/tours/StreetArtPage';
import ParksPage from './pages/tours/ParksPage';
import MysteriesAndLegendsPage from './pages/tours/MysteriesAndLegendsPage';
import PotsdamPage from './pages/tours/PotsdamPage';

function App() {
  return (
    <div>
      <Navbar /> {/* Navbar siempre visible */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tours" element={<ToursPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        {/* Rutas para los tours */}
        <Route path="/tours/historical" element={<HistoricalPage />} />
        <Route path="/tours/coldwar" element={<ColdWarPage />} />
        <Route path="/tours/streetalternative" element={<StreetArtPage />} />
        <Route path="/tours/parks" element={<ParksPage />} />
        <Route path="/tours/myl" element={<MysteriesAndLegendsPage />} />
        <Route path="/tours/potsdam" element={<PotsdamPage />} />
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;


