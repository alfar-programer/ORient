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
    textClassName: "scroll-cue-text-partners"
  },
  {
    id: "cue-5000",
    title: "عملاؤنا", 
    text: "نفخر بثقة شركائنا وعملائنا",
    startY: 5000,
    endY: 5400,
    imagesWrapperClassName: "mt-6 flex items-center justify-center gap-6 flex-wrap",
    images: [
      { id: "img-1", src: "/images/Logo.png", alt: "Logo", className: "w-24 h-24 object-contain rounded-md bg-white/5 p-2" },
      { id: "img-2", src: "/images/Screenshot 2025-10-06 160853.png", alt: "Screenshot", className: "w-28 h-20 object-cover rounded-md" },
    ],
    titleClassName: "text-white text-5xl font-extrabold drop-shadow-lg",
    textClassName: "text-white/90 text-xl",
    className: "fixed left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 z-20 text-center px-6"
  },
  {                           
    id: "cue-about",
    title: "من نحن", 
    text: "في شركة المشرق,نجمع بين الخبرة الهندسية الدقيقة في حلول النقل العمودي والتميز في تنفيذ مشاريع المقاولات الكبري منذ اكثر من عقد,ونحن نلتزم بتقديم جودة استثنائيه ومعايير سلامة لا تهاون فيها لاننا نؤمن بان الجوده الفائقة ليست مجرد وعد بل هي ضمان نقدمه في كل مشروع نحن شريككم الذي يحول رؤاكم الي واقه ملموس,من الاساسات وحتي اعلي قمة", 
    startY: 5510, 
    endY: 6140,
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