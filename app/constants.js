export const STATIC_TEXTS = {
  INTRO_SECTION: {
    TITLE: "اولین جشنواره (علمی-پژوهشی) دانش‌آموزی",
    SIGN_UP_BUTTON: "ثبت نام در جشنواره",
    DESCRIPTION:
      "مؤسسه داناشو با همکاری دانشگاه تهران، در راستای ارتقای فرهنگ تحقیق و پژوهش، کشف استعدادهای علمی و تقویت مهارتهایپژوهشی دانشآموزان، جشنواره علمی دانالیگ را برگزار میکند. این جشنواره فرصتی برای دانشآموزان علاقهمند به علم و پژوهش است تا تواناییهای خود را در یک فضای رقابتی و علمی به نمایش بگذارند و با محیط دانشگاهی و مسیرهای آکادمیک بیشتر آشنا شوند. این جشنواره در قالب ارسال پروژه هایعلمی برگزار شده و پس از داوری اولیه، برگزیدگان به مرحله داوری حضوری راه پیدا خواهند کرد. برترینهای هر بخش مدال طلای جشنواره را دریافت خواهند کرد.",
  },
};

export const IMAGES = {
  POSTER: { URL: "/images/poster.jpg", ALT: "پوستر جشنواره دانالیگ" },
  PENCIL: { URL: "/images/icons/pencil.svg", ALT: "مداد کارتونی" },
  NO_STAR_ENAMAD: { URL: "/images/no-star-enamad.png", ALT: "لوگوی ای نماد" },
};

export const MEHVARS = [
  {
    URL: "/info",
    IMG_URL: "/images/icons/festival.svg",
    ALT: "جعبه ای که درش باز شده و ازش کلی ستاره اومده بیرون",
    TITLE: "معرفی جشنواره",
  },
  {
    URL: "/info#timing",
    IMG_URL: "/images/icons/timing.svg",
    ALT: "یک تقویم با یک ساعت در بالای سمت چپ آن",
    TITLE: "زمان بندی",
  },
  {
    URL: "/info#pivots",
    IMG_URL: "/images/icons/flowchart.svg",
    ALT: "فلوچارت",
    TITLE: "محورها",
  },
];

export const SIGN_UP_URL = "https://zarinp.al/697053";

export const NAV_MENU_ITEMS = [
  { name: "خانه", path: "/" },
  { name: "ثبت نام", path: SIGN_UP_URL },
  { name: "اطلاعات جشنواره", path: "/info" },
  { name: "چالش های علمی", path: "/challenges" },
  { name: "درباره ما", path: "/about-us" },
  { name: "تماس با ما", path: "/contact-us" },
];

export const FOOTER_LINKS = {
  EXTERNALS: [
    { TITLE: "داناشو", URL: "https://danasho-edu.ir/" },
    { TITLE: "خانه فیزیک تهران", URL: "https://tphyc.ir" },
    { TITLE: "خانه علم ایران", URL: "https://elmic.org" },
    { TITLE: "دانشکده فیزیک دانشگاه تهران", URL: "https://physics.ut.ac.ir" },
  ],
  INTERNALS: [
    { TITLE: "درباره ما", URL: "/about-us" },
    { TITLE: "ثبت نام", URL: SIGN_UP_URL },
    { TITLE: "چالشکده", URL: "/challenges" },
    { TITLE: "زمانبندی", URL: "/info#timing" },
    { TITLE: "محورهای جشنواره", URL: "/info#pivots" },
  ],
};
