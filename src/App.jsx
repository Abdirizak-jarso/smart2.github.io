import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './pages/auth/Login';
import Home from './pages/auth/Home';
import About from './pages/auth/About';
import Contact from './pages/auth/Contact';
import RegisterUser from './pages/auth/RegisterUser';
import RegisterDriver from './pages/auth/RegisterDriver';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';

function App() {
  return (
    <LanguageProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
          <Route path="/register/user" element={<RegisterUser />} />
          <Route path="/register/driver" element={<RegisterDriver />} />
      </Routes>
    </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
