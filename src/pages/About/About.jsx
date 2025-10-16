// src/pages/About/About.jsx
import React from 'react';
import Footer from '../../components/Ui/Footer/Footer';
import "./about.css";
const About = () => {
  return (  
    
    <div className="main-aboutus bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
      <div className="container">
        <div className="min-container text-center text-white">
          <h1 className="text-titleabout text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            من نحن
          </h1>
          <div className="minmin-container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-right order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-blue-300">ORIENT</h2>
              <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 text-gray-300">
                في شركة المشرق,نجمع بين الخبرة الهندسية الدقيقة في حلول النقل العمودي والتميز في تنفيذ مشاريع المقاولات الكبري منذ اكثر من عقد,ونحن نلتزم بتقديم جودة استثنائيه ومعايير سلامة لا تهاون فيها لاننا نؤمن بان الجوده الفائقة ليست مجرد وعد بل هي ضمان نقدمه في كل مشروع نحن شريككم الذي يحول رؤاكم الي واقه ملموس,من الاساسات وحتي اعلي قم 

              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              
              </p>
            </div>
            <div className="text-center order-1 md:order-2">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto flex items-center justify-center">
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"><img src="/images/Logo.png" alt="ORIENT Logo" className="w-full h-full object-contain" /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;