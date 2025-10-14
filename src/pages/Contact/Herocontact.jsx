// src/components/Herocontact.jsx

import React from 'react';
import { MdOutlineWork } from "react-icons/md";
import { FaBoltLightning } from "react-icons/fa6";
import '../Contact/Contact.css';

// استيراد بيانات الإحصائيات
import { contactStats } from '../../constants/data';

// استيراد أيقونات الإحصائيات
import { FaRocket, FaBox, FaTrophy, FaCode } from 'react-icons/fa';

// دالة لعرض الأيقونة حسب الاسم
const getIconComponent = (iconName) => {
  const iconProps = {
    className: "text-green-400 text-2xl mb-2 transition-transform hover:scale-110"
  };

  switch (iconName) {
    case 'FaRocket': return <FaRocket {...iconProps} />;
    case 'FaBox': return <FaBox {...iconProps} />;
    case 'FaTrophy': return <FaTrophy {...iconProps} />;
    case 'FaCode': return <FaCode {...iconProps} />;
    default: return null;
  }
};

const Herocontact = () => {
  return (
    <main 
      className="sectioncontact animated-bg bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white relative min-h-screen w-full"
      id="contact"
    >
      <div className="container-contact w-full">
        
        {/* شعار أو أيقونة علوية */}
        <div className="flex justify-center mb-8">
          <div className="icon-contact bg-green-500 p-6 rounded-full shadow-lg">
            <MdOutlineWork className="text-white text-7xl" />
          </div>
        </div>

        {/* العنوان الرئيسي */}
        <div className="text-center mb-8">
          <h2 className="textcontact-title gradient-text text-4xl md:text-5xl font-bold leading-tight text-green-400 mb-4">
            معرض أعمالنا
          </h2>
          <h3 className="textcontact-suptitle text-2xl md:text-3xl font-semibold text-white">
            المتميزة
          </h3>
        </div>

        {/* النص الوصفي */}
        <p className="suptitle-contacttext text-center text-gray-300 text-sm md:text-base leading-relaxed">
          نستعرض لك مجموعة من أفضل مشاريعنا التقنية المبتكرة التي نفذناها بنجاح
          <br />
          <span className="text-green-400 font-medium">مشاريع احترافية تلبي احتياجات العصر</span>
        </p>

        {/* قسم الإحصائيات (الكارتس) */}
        <div className="contact-boxgroup grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactStats.map((stat) => (
            <div
              key={stat.id}
              className="main-box bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 text-center hover:border-green-400/40 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 group"
            >
              <div className="icon-boxcontact flex justify-center">
                {getIconComponent(stat.icon)}
              </div>
              <div className="boxnumb-contact text-green-400 text-xl md:text-2xl font-extrabold mb-2 group-hover:text-green-300 transition-colors">
                {stat.number}
              </div>
              <div className="textsupcontact text-gray-300 text-xs md:text-sm group-hover:text-white transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* الأزرار */}
        <div className="btns-contact flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btncontact-1 px-6 py-3 border border-green-400 text-green-400 rounded-lg font-medium hover:bg-green-400 hover:text-black transition-all duration-300">
            ابدأ مشروعك معنا
          </button>
          <button className="btncontact-2 px-6 py-3 bg-green-500 text-black rounded-lg font-medium hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 flex items-center justify-center gap-2">
            استكشف المشاريع
            <FaBoltLightning className="text-sm" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Herocontact;