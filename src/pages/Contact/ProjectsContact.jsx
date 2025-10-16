import React from "react";
import { motion } from "framer-motion"; // for subtle animations

const projects = [
  {
    id: 1,
    title: "تصميم وتطوير مصعد الكتروني حديث",
    description:
      "شركة رائدة في تقديم حلول المصاعد الذكية والتقنيات الحديثة للنقل العمودي.",
    image: "/images/project1.jpg",
  },
  {
    id: 2,
    title: "تصميم وتطوير مصعد كهربائي عالي الجودة",
    description:
      "شركة متخصصة في تصنيع وتركيب المصاعد الكهربائية بأحدث التقنيات العالمية.",
    image: "/images/project2.jpg",
  },
  {
    id: 3,
    title: "تصنيع مصاعد كهربائيه حديثه وراقية",
    description:
      "شركة مبتكرة في مجال تصنيع المصاعد الكهربائية التي تجمع بين الأمان والراحة.",
    image: "/images/project3.jpg",
  },
];

const ProjectsContact = () => {
  return (
    <section className="main-projectsc relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br  text-white px-6 py-20">
      {/* خلفية متحركة خفيفة */}

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
              className="box-sizeProjects backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 flex flex-col"
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
