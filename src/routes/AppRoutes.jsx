import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";
import Navbar from "../components/Ui/Navbar/Navbar";
import Footer from "../components/Ui/Footer/Footer";

const AppRoutes = () => {
  const location = useLocation();

  // ✅ تحديد إذا كنا في الصفحة الرئيسية
  const isHomePage =
    location.pathname === "/" || location.pathname.toLowerCase() === "/home";

  return (
    <>
      {/* ✅ الـ Navbar ثابت في كل الصفحات */}
      <Navbar />

      {/* ✅ نظام التوجيه */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* ✅ أي مسار غير معروف يرجع للـ Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* ✅ الـ Footer يظهر في كل الصفحات ما عدا الـ Home */}
      {!isHomePage && <Footer />}
    </>
  );
};

export default AppRoutes;
