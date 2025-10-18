// constants/data.js
export const VIDEO_DATA = {
  src: "/videos/hero-video.mp4",
  duration: 15,
  overlay: true
};

export const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" }
];

// Scroll text cues central definition
export const SCROLL_TEXT_CUES = [
  { 
    id: "cue-0",
    title: "نضمن الجودة الفائقة ", 
    text: "", 
    startY: 0, 
    endY: 450,
    useScrollFloat: false,
    titleClassName: "scroll-cue-title-main",
    textClassName: "scroll-cue-text-main",
    button: {
      text: "تعرف على ضماناتنا",
      path: "/quality-guarantees",
      className: "text-videoScroll bg-blue-800 hover:bg-blue-900 border-blue-600"
    }
  },
  { 
    id: "cue-1100",
    title: "حلول مصاعد متكاملة", 
    text: " من المصاعد البانورامية الفاخره الي انظمة النقل العملي نقدم احدث تقنيات المصاعد لتركيب وصيانةامنه و فعاله", 
    startY: 750, 
    endY: 1600,
    titleClassName: "scroll-cue-title-elevators",
    textClassName: "scroll-cue-text-elevators",
    button: {
      text: "استكشاف المصاعد",
      path: "/elevators-solutions",
      className: "text-videoScroll bg-green-800 hover:bg-green-900 border-green-600"
    }
  },
  { 
    id: "cue-2500",
    title: "بناء المستقبل", 
    text: "من المشاريع السكنية و التجارية الي الهياكل الصناعية نضع خبرتنا في كل تفاصيل البناء لتحقيق اعلي معايير اليجودة", 
    startY: 1860, 
    endY: 2650,
    titleClassName: "scroll-cue-title-construction",
    textClassName: "scroll-cue-text-construction",
    button: {
      text: "مشاريع البناء",
      path: "/construction-projects",
      className: "text-videoScroll bg-purple-800 hover:bg-purple-900 border-purple-600"
    }
  },
  { 
    id: "cue-5600",
    title: "مشاريعنا تتحدث عنا", 
    text: "كل مشروع هو قصة نجاح مشتركة,تعكس التزامنا بالتميز والابتكار", 
    startY: 3200, 
    endY: 4340,
    titleClassName: "scroll-cue-title-projects",
    textClassName: "scroll-cue-text-projects",
    marqueeKey: "partners",
    button: {
      text: "رؤية المشاريع",
      path: "/our-projects",
      className: "text-videoScroll bg-red-800 hover:bg-red-900 border-red-600"
    }
    },
  {
    id: "cue-5000",
    title: "عملاؤنا", 
    text: "نفخر بثقة شركائنا وعملائنا",
    startY: 4600,
    endY: 5400,
    marqueeKey: "clients",
    titleClassName: "scroll-cue-title-projects",
    textClassName: "scroll-cue-text-projects",
    className: "fixed left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 z-20 text-center px-6",
    style: { height: "80vh", width: "100%" },
    button: {
      text: "شهادات العملاء",
      path: "/testimonials",
      className: "text-videoScroll bg-orange-800 hover:bg-orange-900 border-orange-600"
    }
  },
  {                           
    id: "cue-about",
    title: "من نحن", 
    text: "في شركة المشرق,نجمع بين الخبرة الهندسية الدقيقة في حلول النقل العمودي والتميز في تنفيذ مشاريع المقاولات الكبري منذ اكثر من عقد,ونحن نلتزم بتقديم جودة استثنائيه ومعايير سلامة لا تهاون فيها لاننا نؤمن بان الجوده الفائقة ليست مجرد وعد بل هي ضمان نقدمه في كل مشروع نحن شريككم الذي يحول رؤاكم الي واقه ملموس,من الاساسات وحتي اعلي قمة", 
    startY: 5510, 
    endY: 7000,
    titleClassName: "scroll-cue-title-about",
    textClassName: "scroll-cue-text-about",
    button: {
      text: "اتصل بنا",
      path: "/contact",
      className: " text-videoScroll bg-gray-800 hover:bg-gray-900 border-gray-600"
    }
  },
];

// src/constants/data.js

export const contactStats = [
  { id: 1, icon: "FaRocket", number: "+11", label: "مشروع مميز" },
  { id: 2, icon: "FaBox", number: "6", label: "دول في الخليج" },
  { id: 3, icon: "FaTrophy", number: "+11", label: "عميل راضي" },
  { id: 4, icon: "FaCode", number: "+11", label: "مشروع مكتمل" }
];

// Centralized logos for marquee sections
export const LOGOS = {
  partners: [
    { id: "p-1", src: "/images/project1.jpg", alt: "Partner 1" },
    { id: "p-2", src: "/images/project2.jpg", alt: "Partner 2" },
    { id: "p-3", src: "/images/project3.jpg", alt: "Partner 3" },
    { id: "p-4", src: "/images/project4.jpg", alt: "Partner 4" },
    { id: "p-5", src: "/images/project5.jpg", alt: "Partner 5" }
  ],
  clients: [
    { id: "c-1", src: "/images/Logo.png", alt: "Client 1" },
    { id: "c-2", src: "/images/Logo.png", alt: "Client 2" },
    { id: "c-3", src: "/images/Logo.png", alt: "Client 3" },
    { id: "c-4", src: "/images/Logo.png", alt: "Client 4" },
    { id: "c-5", src: "/images/Logo.png", alt: "Client 5" }
  ]
};