// constants/data.js
export const VIDEO_DATA = {
  src: "/videos/hero-video.mp4",
  duration: 15,
  overlay: true,
};

export const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
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
      className:
        "text-videoScroll-center bg-blue-800 hover:bg-blue-900 border-blue-600",
      buttonContainerClass: "cue-btn-center",
    },
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
      className:
        "text-videoScroll-right bg-green-800 hover:bg-green-900 border-green-600",
      buttonContainerClass: "cue-btn-right",
    },
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
      className:
        "text-videoScroll-right bg-purple-800 hover:bg-purple-900 border-purple-600",
      buttonContainerClass: "cue-btn-right",
    },
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
      className:
        "text-videoScroll-center bg-red-800 hover:bg-red-900 border-red-600",
      buttonContainerClass: "cue-btn-center",
    },
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
    className:
      "fixed left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 z-20 text-center px-6",
    style: { height: "80vh", width: "100%" },
    button: {
      text: "شهادات العملاء",
      path: "/testimonials",
      className:
        "text-videoScroll-center bg-orange-800 hover:bg-orange-900 border-orange-600",
      buttonContainerClass: "cue-btn-center",
    },
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
      className:
        " text-videoScroll-right bg-gray-800 hover:bg-gray-900 border-gray-600",
      buttonContainerClass: "cue-btn-right",
    },
  },
];

// src/constants/data.js

export const contactStats = [
  { id: 1, icon: "FaRocket", number: "+11", label: "مشروع مميز" },
  { id: 2, icon: "FaBox", number: "6", label: "دول في الخليج" },
  { id: 3, icon: "FaTrophy", number: "+11", label: "عميل راضي" },
  { id: 4, icon: "FaCode", number: "+11", label: "مشروع مكتمل" },
];

// Centralized logos for marquee sections
// =========================
export const LOGOS = {
  partners: [
    {
      id: "p-1",
      src: "/images/project1.jpg",
      alt: "مشروع برج المشرق",
      title: "برج المشرق",
      description:
        "مشروع سكني فاخر في قلب المدينة يبرز دقة التصميم وجودة التنفيذ.",
      link: "/projects/mashriq-tower",

      // 🎨 تحكم كامل بالكلاسات
      className: "box-sizeProjects-scroll custom-project-card",
      imageClassName: "rounded-t-2xl shadow-md",
      titleClassName: "text-title-scroll",
      descriptionClassName: "text-dis-scroll",
      textContainerClass: "p-4 text-right",
    },
    {
      id: "p-2",
      src: "/images/project2.jpg",
      alt: "مشروع الأفق الذهبي",
      title: "الأفق الذهبي",
      description:
        "مركز تجاري متكامل يعتمد أحدث معايير الإنشاء والتصميم العصري.",
      link: "/projects/golden-horizon",
      className: "box-sizeProjects-scroll bg-white/10 hover:bg-white/20",
      imageClassName: "rounded-t-2xl object-cover",
      titleClassName: "text-title-scroll",
      descriptionClassName: "text-dis-scroll",
      textContainerClass: "p-5",
    },
    {
      id: "p-3",
      src: "/images/project3.jpg",
      alt: "مجمع الهدى السكني",
      title: "مجمع الهدى السكني",
      description:
        "تصميم متكامل يجمع بين الراحة والجمال في بيئة عمرانية حديثة.",
      link: "/projects/alhuda-residence",
      className: "box-sizeProjects-scroll border border-yellow-500",
      imageClassName: "img-scroll rounded-t-lg",
      titleClassName: "text-title-scroll",
      descriptionClassName: "text-dis-scroll",
      textContainerClass: "p-4",
    },
  ],

  // ✅ العملاء بدون تغيير
  clients: [
    { id: "c-1", src: "/images/Logo.png", alt: "شركة 1" },
    { id: "c-2", src: "/images/Logo.png", alt: "شركة 2" },
    { id: "c-3", src: "/images/Logo.png", alt: "شركة 3" },
    { id: "c-4", src: "/images/Logo.png", alt: "شركة 4" },
    { id: "c-5", src: "/images/Logo.png", alt: "شركة 5" },
  ],
};
