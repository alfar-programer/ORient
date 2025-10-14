// src/components/UI/Navbar/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/globals.css';

const Navbar = () => {
  return (
    <nav className="navbar fixed top-0 left-0 w-full text-white z-50">
      <div className="navbar-main">
        <div className="navbar-container mx-auto px-4 py-3 grid grid-cols-3 items-center">
          <div className="navbar-rightside flex items-center gap-6 text-sm">
            <Link to="/about" className="navbar-link hover:text-blue-400 transition">من نحن</Link>
            <Link to="/contact" className="navbar-link hover:text-blue-400 transition">تواصل معنا</Link>
          </div>
          
          <div className="navbar-logo ">
            <Link to="/" className="inline-flex items-center justify-center">
              <span className="inline-flex items-center justify-center h-22 w-56 ">
                <img src="/images/Logo.png" alt="Logo" className="" />
              </span>
            </Link>
          </div>


          <div className="navbar-leftside flex items-center justify-end gap-6 text-sm">
             <Link to="/projects" className="navbar-link hover:text-blue-400 transition">مشاريعنا</Link>
             <Link to="/" className="navbar-link hover:text-blue-400 transition">الصفحة الرئيسية</Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;