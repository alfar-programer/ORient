import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Projects from '../pages/Projects/Projects';
import Contact from '../pages/Contact/Contact';
import Navbar from '../components/Ui/Navbar/Navbar';
import Footer from '../components/Ui/Footer/Footer';

const AppRoutes = () => {
  const location = useLocation();
  
  // Check if current path is home page
  const isHomePage = location.pathname === '/home' || location.pathname === '/';

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      {!isHomePage && <Footer />}
    </>
  );
};

export default AppRoutes;