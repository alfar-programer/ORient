// src/pages/About/About.jsx
import React from 'react';

const About = () => {
  return (  
    
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            من نحن
          </h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-right">
              <h2 className="text-3xl font-semibold mb-6 text-blue-300">Fortune Code</h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                نحن شركة متخصصة في تطوير الحلول التقنية المبتكرة والتصميم المعماري ثلاثي الأبعاد. 
                نقدم خدماتنا في مجال التطوير البرمجي والتصميم المعماري المتقدم.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                نسعى لتقديم حلول تقنية متطورة تلبي احتياجات عملائنا وتواكب أحدث التطورات التقنية.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full w-64 h-64 mx-auto flex items-center justify-center">
                <span className="text-6xl font-bold text-white">FC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;