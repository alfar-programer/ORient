import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // for hamburger icon
import "../../../styles/globals.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar fixed top-0 left-0 w-full bg-[#0e1626]/90 backdrop-blur-md text-white z-50">
      <div className="navbar-main">
        <div className="navbar-container mx-auto px-4 py-3 grid grid-cols-3 items-center">
          {/* Right side links (hidden on tablet & smaller) */}
          <div className="navbar-rightside hidden lg:flex items-center gap-6 text-sm">
            <Link to="/about" className="navbar-link hover:text-blue-400 transition">
              من نحن
            </Link>
            <Link to="/contact" className="navbar-link hover:text-blue-400 transition">
              مشاريعنا
            </Link>
          </div>

          {/* Logo (always visible) */}
          <div className="navbar-logo flex items-center justify-center">
            <Link to="/" className="inline-flex items-center justify-center">
              <span className="inline-flex items-center justify-center h-22 w-56">
                <img src="/images/Logo.png" alt="Logo" className="max-h-16 object-contain" />
              </span>
            </Link>
          </div>

          {/* Left side links (hidden on tablet & smaller) */}
          <div className="navbar-leftside hidden lg:flex items-center justify-end gap-6 text-sm">
            <Link to="/projects" className="navbar-link hover:text-blue-400 transition">
              تواصل معنا
            </Link>
            <Link to="/" className="navbar-link hover:text-blue-400 transition">
              الصفحة الرئيسية
            </Link>
          </div>

          {/* Menu button (only visible on tablet & mobile) */}
          <div className="flex items-center justify-end lg:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Dropdown Menu (for mobile/tablet) */}
        {menuOpen && (
          <div className="lg:hidden bg-[#0e1626] border-t border-gray-700">
            <div className="flex flex-col items-center py-4 space-y-4 text-sm">
              <Link
                to="/"
                className="hover:text-blue-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                الصفحة الرئيسية
              </Link>
              <Link
                to="/projects"
                className="hover:text-blue-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                تواصل معنا
              </Link>
              <Link
                to="/about"
                className="hover:text-blue-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                من نحن
              </Link>
              <Link
                to="/contact"
                className="hover:text-blue-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                مشاريعنا
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
