import React from "react";
import { motion } from "framer-motion"; // for subtle animations

const projects = [
  {
    id: 1,
    title: "تصميم وتطوير موقع Z4YTON",
    description:
      "موقع شخصي لمهندس برمجيات متخصص في تطوير تطبيقات الويب الحديثة والحلول الأمنية.",
    image: "/images/Screenshot 2025-10-06 160853.png",
  },
  {
    id: 2,
    title: "تصميم وتطوير موقع إيمـاكو",
    description:
      "شركة متخصصة في تصنيع وتركيب منتجات الألمنيوم والزجاج بجودة عالية.",
    image: "/images/Screenshot 2025-10-06 160853.png",
  },
  {
    id: 3,
    title: "موقع وكالة منطقة الأفكار للدعاية والإعلان",
    description:
      "وكالة متخصصة في تصميم وتنفيذ الحلول الإعلانية بجودة عالية.",
    image: "/images/Screenshot 2025-10-06 160853.png",
  },
];

const ProjectsContact = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#0e1626] via-[#1a2236] to-[#0e1626] text-white px-6 py-20">
      {/* خلفية متحركة خفيفة */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #3b82f6 0%, transparent 40%), radial-gradient(circle at 80% 80%, #10b981 0%, transparent 40%)",
          backgroundSize: "200% 200%",
        }}
      ></motion.div>

      <div className="relative z-10 w-full max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="projects-name text-4xl md:text-5xl font-bold mb-4 tracking-wide">
            المشاريع المميزة
          </h2>
          <p className="project-sup text-gray-300 text-lg  mx-auto leading-relaxed">
            مجموعة من أبرز مشاريعنا التي حققت نجاحًا باهرًا وحصلت على جوائز وتقديرات
          </p>
        </div>

        <div className="project-box grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="box-sizeProjects bg-[#1c2333]/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-t-2xl"
              />
              <div className="box-textprojexts p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
                <button className="btn-project mt-auto w-full bg-gradient-to-r from-blue-600 to-green-500 hover:opacity-90 text-white font-semibold py-2 rounded-lg transition-all duration-300 shadow-md">
                  احجز معنا
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsContact;
