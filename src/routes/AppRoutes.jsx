// // src/routes/AppRoutes.jsx
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from '../pages/Home/Home';
// import About from '../pages/About/About';        // ✅
// import Projects from '../pages/Projects/Projects';  // ✅
// import Contact from '../pages/Contact/Contact';    // ✅

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/projects" element={<Projects />} />
//       <Route path="/contact" element={<Contact />} />
//     </Routes>
//   );
// };

// export default AppRoutes;

// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Projects from '../pages/Projects/Projects';
import Contact from '../pages/Contact/Contact';
import Navbar from '../components/Ui/Navbar/Navbar';
import AnimationCanva from '../components/AnimationCanvas'
import Footer from '../components/Ui/Footer/Footer';

const AppRoutes = () => {
  return (
    <>
      <AnimationCanva />
      <Navbar />     
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
    </>
  );
};

export default AppRoutes;