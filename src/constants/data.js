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
    // No scroll animation on the first title per user request
    useScrollFloat: false,
    titleClassName: "scroll-cue-title-main",
    textClassName: "scroll-cue-text-main"
  },
  { 
    id: "cue-1100",
    title: "حلول مصاعد متكاملة", 
    text: " من المصاعد البانورامية الفاخره الي انظمة النقل العملي نقدم احدث تقنيات المصاعد لتركيب وصيانةامنه و فعاله", 
    startY: 750, 
    endY: 1600,
    titleClassName: "scroll-cue-title-elevators",
    textClassName: "scroll-cue-text-elevators"
  },
  { 
    id: "cue-2500",
    title: "بناء المستقبل", 
    text: "من المشاريع السكنية و التجارية الي الهياكل الصناعية نضع خبرتنا في كل تفاصيل البناء لتحقيق اعلي معايير اليجودة", 
    startY: 1860, 
    endY: 2650,
    titleClassName: "scroll-cue-title-construction",
    textClassName: "scroll-cue-text-construction"
  },
  { 
    id: "cue-4300",
    title: "مشاريعنا تتحدث عنا", 
    text: "كل مشروع هو قصة نجاح مشتركة,تعكس التزامنا بالتميز والابتكار", 
    startY: 3450, 
    endY: 4100,
    titleClassName: "scroll-cue-title-projects",
    textClassName: "scroll-cue-text-projects", 
  },
  { 
    id: "cue-5600",
    title: "شركائنا", 
    text: "", 
    startY: 4200, 
    endY: 4840,
    titleClassName: "scroll-cue-title-partners",
    textClassName: "scroll-cue-text-partners",
    marqueeKey: "partners"
   
  },
  {
    id: "cue-5000",
    title: "عملاؤنا", 
    text: "نفخر بثقة شركائنا وعملائنا",
    startY: 5000,
    endY: 5400,
    marqueeKey: "clients",
    titleClassName: "text-white text-5xl font-extrabold drop-shadow-lg",
    textClassName: "text-white/90 text-xl",
    className: "fixed left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 z-20 text-center px-6",
    style: { height: "70vh", width: "100%" }
  },
  {                           
    id: "cue-about",
    title: "من نحن", 
    text: "في شركة المشرق,نجمع بين الخبرة الهندسية الدقيقة في حلول النقل العمودي والتميز في تنفيذ مشاريع المقاولات الكبري منذ اكثر من عقد,ونحن نلتزم بتقديم جودة استثنائيه ومعايير سلامة لا تهاون فيها لاننا نؤمن بان الجوده الفائقة ليست مجرد وعد بل هي ضمان نقدمه في كل مشروع نحن شريككم الذي يحول رؤاكم الي واقه ملموس,من الاساسات وحتي اعلي قمة", 
    startY: 5510, 
    endY: 7000,
    titleClassName: "scroll-cue-title-about",
    textClassName: "scroll-cue-text-about"
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
    { id: "p-1", src: "/images/Logo.png", alt: "Partner 1" },
    { id: "p-2", src: "/images/Logo.png", alt: "Partner 2" },
    { id: "p-3", src: "/images/Logo.png", alt: "Partner 3" },
    { id: "p-4", src: "/images/Logo.png", alt: "Partner 4" },
    { id: "p-5", src: "/images/Logo.png", alt: "Partner 5" }
  ],
  clients: [
    { id: "c-1", src: "/images/Logo.png", alt: "Client 1" },
    { id: "c-2", src: "/images/Logo.png", alt: "Client 2" },
    { id: "c-3", src: "/images/Logo.png", alt: "Client 3" },
    { id: "c-4", src: "/images/Logo.png", alt: "Client 4" },
    { id: "c-5", src: "/images/Logo.png", alt: "Client 5" }
  ]
};