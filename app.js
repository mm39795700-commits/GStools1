/**
 * GStools - Elite Combat Sports E-Commerce Web Application
 * Core Application Engine: Catalog, Cart, Audio Synthesizer, Particles Canvas, WhatsApp Checkout & Hidden Admin
 */

// ==========================================
// 1. Initial State & Configuration
// ==========================================
const DEFAULT_PHONE = "201019688435"; // Brand Official WhatsApp: +201019688435
const DEFAULT_PIN = "1234";
const DEFAULT_CURRENCY = "ج.م";
const CATALOG_VERSION = "4.0"; // Bumped to 4.0 for real prices and all 5 categories
const SUPABASE_URL = "https://pbbghmjvckgafnfrpiuu.supabase.co";
const SUPABASE_KEY = "sb_publishable_YkIZ76gzGCglPN0bGx4Uiw_IN9Ckj53";

const gsSupabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
const INITIAL_PRODUCTS = [
  // ==========================================
  // --- 1. أوقية اليد (Hand Wraps & Gloves / قفازات وأربطة) ---
  // ==========================================
  {
    id: "gs-hand-tiger-01",
    name: "قفازات نزال النمر Wolon Tiger Pro الجلدية",
    nameEn: "Wolon Tiger Pro Genuine Leather Boxing Gloves",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 1450,
    oldPrice: 1750,
    rating: 5.0,
    reviews: 68,
    badge: "الأكثر طلباً 🔥",
    badgeType: "gold",
    image: "./assets/products/WhatsApp Image 2026-10-18 at 12.14.06 AM (2).jpeg",
    sizes: ["10oz", "12oz", "14oz", "16oz"],
    colors: ["أبيض ونمر ذهبي", "أسود كربوني"],
    colorImages: {
      "أبيض ونمر ذهبي": "./assets/products/WhatsApp Image 2026-10-18 at 12.14.06 AM (2).jpeg",
      "أسود كربوني": "./assets/products/Gemini_Generated_Image (9).jpeg"
    },
    description: "قفازات نزال احترافية مصنعة من الجلد الطبيعي المعزز مع بطانة رغوية متعددة الطبقات لحماية مفاصل اليد وتشتيت قوة اللكمات العنيفة. حزام معصم فيلكرو مصفح لتثبيت المعصم ضد الالتواء.",
    inStock: true
  },
  {
    id: "gs-hand-topking-gold",
    name: "قفازات Top King Black & Gold الملكية الفاخرة",
    nameEn: "Top King Black & Gold Luxury Boxing Gloves",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 1850,
    oldPrice: 2200,
    rating: 5.0,
    reviews: 84,
    badge: "إصدار النخبة 👑",
    badgeType: "gold",
    image: "./assets/products/Black and Gold Top King Boxing Glove.png",
    sizes: ["12oz", "14oz", "16oz"],
    colors: ["أسود وذهبي", "أسود ملكي"],
    colorImages: {
      "أسود وذهبي": "./assets/products/Black and Gold Top King Boxing Glove.png",
      "أسود ملكي": "./assets/products/Black Top King Boxing Glove.png"
    },
    description: "العلامة التايلاندية الرائدة Top King بجودة تصنيع يدوية لا تُضاهى. مزودة بنظام وسادات جل هلامية لحماية المشط والرسغ في السبارينغ الثقيل ونزالات المواي تاي والملاكمة.",
    inStock: true
  },
  {
    id: "gs-hand-topking-black",
    name: "قفازات TOPKING Stealth Matte Black المطفية",
    nameEn: "TOPKING Stealth Matte Black Combat Gloves",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 1750,
    oldPrice: 2100,
    rating: 4.9,
    reviews: 51,
    badge: "كربون مطفي ⚔️",
    badgeType: "crimson",
    image: "./assets/products/Black TOPKING Boxing Glove.png",
    sizes: ["12oz", "14oz", "16oz"],
    colors: ["أسود مطفي", "أسود وذهبي"],
    description: "تصميم أسود مطفي هجومي عالي الهيبة، خياطة يدوية مزدوجة ومقاومة للتمزق، مع زاوية إبهام تشريحية تمنع إصابات الإبهام أثناء اللكمات السريعة.",
    inStock: true
  },
  {
    id: "gs-hand-excalibur-fight",
    name: "قفازات Excalibur Fight Better الاحترافية",
    nameEn: "Excalibur Fight Better Pro Sparring Gloves",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 1350,
    oldPrice: 1600,
    rating: 4.9,
    reviews: 47,
    badge: "Fight Better ⚔️",
    badgeType: "crimson",
    image: "./assets/products/Excalibur Fight Better Boxing Glove.png",
    sizes: ["10oz", "12oz", "14oz", "16oz"],
    colors: ["أحمر قتالي", "أزرق نزال", "أسود ذهبي"],
    colorImages: {
      "أحمر قتالي": "./assets/products/Red Excalibur Boxing Glove.png",
      "أزرق نزال": "./assets/products/Blue Excalibur Boxing Glove.png",
      "أسود ذهبي": "./assets/products/Excalibur Gold-Dot Boxing Glove.png"
    },
    description: "سلسلة Fight Better الشهيرة من Excalibur. توازن استثنائي بين سرعة حركة اليد وقوة الامتصاص الرغوي، مع فتحات تهوية راحة اليد لمنع التعرق.",
    inStock: true
  },
  {
    id: "gs-hand-excalibur-golddot",
    name: "قفازات Excalibur Gold-Dot الإصدار الفولاذي",
    nameEn: "Excalibur Gold-Dot Limited Edition Boxing Gloves",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 1290,
    oldPrice: 1550,
    rating: 4.8,
    reviews: 39,
    badge: "Gold Dot ✨",
    badgeType: "gold",
    image: "./assets/products/Excalibur Gold-Dot Boxing Glove.png",
    sizes: ["12oz", "14oz", "16oz"],
    colors: ["أسود ذهبي", "أبيض ذهبي"],
    colorImages: {
      "أسود ذهبي": "./assets/products/Excalibur Gold-Dot Boxing Glove.png",
      "أبيض ذهبي": "./assets/products/White and Gold Boxing Glove.png"
    },
    description: "إصدار النقطة الذهبية الأيقوني بتصميم عصري وخامات جلدية مصفحة تتحمل الضرب المتكرر على الأكياس الثقيلة وأهداف السبارينغ لسنوات.",
    inStock: true
  },
  {
    id: "gs-hand-white-gold",
    name: "قفازات White & Gold Pro Champion للبطل",
    nameEn: "White & Gold Pro Champion Boxing Gloves",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 1420,
    oldPrice: 1680,
    rating: 5.0,
    reviews: 43,
    badge: "إصدار الأبطال 🏆",
    badgeType: "gold",
    image: "./assets/products/White and Gold Boxing Glove.png",
    sizes: ["12oz", "14oz", "16oz"],
    colors: ["أبيض وذهبي", "أبيض ناصع"],
    colorImages: {
      "أبيض وذهبي": "./assets/products/White and Gold Boxing Glove.png",
      "أبيض ناصع": "./assets/products/White Excalibur Boxing Glove (1).png"
    },
    description: "لمسة أناقة ملكية ناصعة البياض مع تطريزات ذهبية فاخرة. بطانة داخلية ناعمة مضادة للبكتيريا تمنح راحة قصوى أثناء التمارين العنيفة.",
    inStock: true
  },
  {
    id: "gs-hand-twins-lion",
    name: "قفازات Twins Special Black & Gold Lion",
    nameEn: "Twins Special Black & Gold Lion Sparring Gloves",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 1650,
    oldPrice: 1950,
    rating: 5.0,
    reviews: 72,
    badge: "Twins Special 🥊",
    badgeType: "gold",
    image: "./assets/products/Gemini_Generated_Image (11).jpeg",
    sizes: ["12oz", "14oz", "16oz"],
    colors: ["أسود وذهبي", "أحمر وأسود"],
    colorImages: {
      "أسود وذهبي": "./assets/products/Gemini_Generated_Image (11).jpeg",
      "أحمر وأسود": "./assets/products/Gemini_Generated_Image (1).jpeg"
    },
    description: "أصالة التايلاندي التايلاندي Twins Special بتوزيع رغوي مدمج يوفر حماية لا مثيل لها للمعصم وظهر الكف عند صد الركلات واللكمات المتبادلة.",
    inStock: true
  },
  {
    id: "gs-hand-excalibur-blue",
    name: "قفازات Excalibur Blue ميتاليك الزرقاء",
    nameEn: "Excalibur Metallic Blue Boxing Gloves",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 1250,
    oldPrice: 1500,
    rating: 4.8,
    reviews: 34,
    badge: "أزرق ميتاليك 💙",
    badgeType: "gold",
    image: "./assets/products/Excalibur Blue Boxing Glove.png",
    sizes: ["10oz", "12oz", "14oz"],
    colors: ["أزرق ملكي", "أزرق كهربائي"],
    colorImages: {
      "أزرق ملكي": "./assets/products/Excalibur Blue Boxing Glove.png",
      "أزرق كهربائي": "./assets/products/Gemini_Generated_Image (10).jpeg"
    },
    description: "لون أزرق ميتاليك براق مع بطانة جل إسفنجية مزدوجة توفر ثباتاً محكماً على اليد وتمنع اهتزاز المعصم عند تسديد الضربات القاضية.",
    inStock: true
  },
  {
    id: "gs-hand-classic-bw",
    name: "قفازات Classic Black & White الفولاذية",
    nameEn: "Classic Black-and-White Heavy Boxing Gloves",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 1180,
    oldPrice: 1400,
    rating: 4.7,
    reviews: 29,
    badge: "كلاسيك أصلي ⭐",
    badgeType: "gold",
    image: "./assets/products/Classic Black-and-White Boxing Glove.png",
    sizes: ["12oz", "14oz", "16oz"],
    colors: ["أسود وأبيض", "أبيض وأسود"],
    colorImages: {
      "أسود وأبيض": "./assets/products/Classic Black-and-White Boxing Glove.png",
      "أبيض وأسود": "./assets/products/Gemini_Generated_Image (2).jpeg"
    },
    description: "التصميم الكلاسيكي الخالد المفضل لدى أبطال الملاكمة الإنجليزية. جلد صناعي عالي الكثافة مع حشوة رغوية عالية المقاومة للأوزان الثقيلة.",
    inStock: true
  },
  {
    id: "gs-hand-yalon-blue",
    name: "قفازات تدريب سريعة YALON Blue Striker",
    nameEn: "Blue YALON Fast-Strike Combat Gloves",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 980,
    oldPrice: 1200,
    rating: 4.7,
    reviews: 25,
    badge: "قيمة استثنائية ⚡",
    badgeType: "gold",
    image: "./assets/products/Blue YALON Boxing Glove.png",
    sizes: ["10oz", "12oz", "14oz"],
    colors: ["أزرق نزال", "أسود قتالي"],
    description: "خيار رائع للمقاتلين في فترات الإعداد والتمارين اليومية المكثفة، خفيفة الوزن وتمنح راحة يد سريعة التهوية وسهلة الارتداء والخلع.",
    inStock: true
  },
  {
    id: "gs-hand-wraps-titan",
    name: "أربطة يد ملاكمة فولاذية GS-Titan Wraps (4.5 متر - زوج)",
    nameEn: "GS-Titan Boxing Hand Wraps 4.5m Pair",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 220,
    oldPrice: 290,
    rating: 5.0,
    reviews: 95,
    badge: "حماية العظام ⭐",
    badgeType: "gold",
    image: "./assets/products/1.jpg",
    sizes: ["4.5 متر (زوج)"],
    colors: ["أسود كربوني", "أحمر قتالي", "ذهبي ميتاليك", "أزرق ملكي"],
    description: "أربطة قطنية شبه مرنة (Semi-Elastic) معتمدة للنزال الرسمي، توفر تثبيتاً حديدياً لعظام المشط وعقلات الأصابع والرسغ لحمايتها من الكسر تحت وطأة الضربات.",
    inStock: true
  },
  {
    id: "gs-hand-wraps-gel",
    name: "أربطة ملاكمة سريعة مبطنة بالجل GS-Speed Gel Quick Wraps",
    nameEn: "GS-Speed Gel Padded Quick Hand Wraps",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 320,
    oldPrice: 420,
    rating: 4.9,
    reviews: 58,
    badge: "ارتداء فوري ⚡",
    badgeType: "gold",
    image: "./assets/products/4.jpg",
    sizes: ["S/M", "L/XL"],
    colors: ["أسود ملكي", "أحمر قتالي", "ذهبي فولاذي"],
    description: "قفازات أربطة سريعة مبطنة بطبقة جل سيليكوني ممتص للصدمات لحماية المشط في ثوانٍ دون الحاجة للف اليد الطويل، مع شريط معصم قطني داعم 2 متر.",
    inStock: true
  },

  // ==========================================
  // --- 2. أوقية الرجل (Shin Guards / حماة الساق والقدم) ---
  // ==========================================
  {
    id: "gs-leg-excalibur-gold",
    name: "واقي قصبة الساق والقدم درع تيتان Excalibur Black & Gold",
    nameEn: "Excalibur Black & Gold Pro Muay Thai Shin Guards",
    category: "leg",
    categoryLabel: "أوقية الرجل",
    price: 1250,
    oldPrice: 1550,
    rating: 5.0,
    reviews: 62,
    badge: "درع القصبة 🛡️",
    badgeType: "gold",
    image: "./assets/products/WhatsApp Image 2026-10-18 at 12.14.06 AM.jpeg",
    sizes: ["M", "L", "XL"],
    colors: ["أسود وذهبي", "أبيض وذهبي"],
    colorImages: {
      "أسود وذهبي": "./assets/products/WhatsApp Image 2026-10-18 at 12.14.06 AM.jpeg",
      "أبيض وذهبي": "./assets/products/Gemini_Generated_Image (3).jpeg"
    },
    description: "واقي ساق ومشط قدم احترافي معتمد للكيك بوكسينغ والمواي تاي وMMA. حشوة رغوية مزدوجة الكثافة تحمي عظم الساق من الركلات القاضية وحزامان فيلكرو عريضان مانعان للانزلاق.",
    inStock: true
  },
  {
    id: "gs-leg-excalibur-red",
    name: "واقي ساق Excalibur Striker الأحمر القتالي",
    nameEn: "Excalibur Striker Crimson Shin & Instep Guard",
    category: "leg",
    categoryLabel: "أوقية الرجل",
    price: 1180,
    oldPrice: 1450,
    rating: 4.9,
    reviews: 44,
    badge: "إصدار النزال 🔥",
    badgeType: "crimson",
    image: "./assets/products/Gemini_Generated_Image.jpeg",
    sizes: ["M", "L", "XL"],
    colors: ["أحمر وأبيض", "أسود وأحمر"],
    description: "حماية مقوسة هندسياً تتطابق مع انحناء قصبة الساق ومشط القدم لتوفير تغطية كاملة دون إعاقة سرعة ركلات المقاتل.",
    inStock: true
  },
  {
    id: "gs-leg-excalibur-white",
    name: "واقي ساق Excalibur Velocity الأبيض والذهبي",
    nameEn: "Excalibur Velocity White & Gold Shin Guards",
    category: "leg",
    categoryLabel: "أوقية الرجل",
    price: 1220,
    oldPrice: 1500,
    rating: 4.9,
    reviews: 38,
    badge: "خفة وسرعة ⚡",
    badgeType: "gold",
    image: "./assets/products/Gemini_Generated_Image (3).jpeg",
    sizes: ["M", "L", "XL"],
    colors: ["أبيض وذهبي", "أسود وفضي"],
    description: "وزن فائق الخفة ومقاوم للرطوبة والعرق، مصمم للسبارينغ المكثف بفضل بطانته المبطنة برغوة EVA المعالجة حرارياً ضد الاهتراء.",
    inStock: true
  },
  {
    id: "gs-leg-titan-shield",
    name: "درع الساق التكتيكي المصفح GS-Titan Shield Heavy Guard",
    nameEn: "GS-Titan Shield Heavy Duty Shin Guards",
    category: "leg",
    categoryLabel: "أوقية الرجل",
    price: 1350,
    oldPrice: 1650,
    rating: 5.0,
    reviews: 57,
    badge: "تيتان مصفح 🛡️",
    badgeType: "gold",
    image: "./assets/products/5.jpg",
    sizes: ["S/M", "L/XL"],
    colors: ["أسود كربوني", "رمادي فولاذي"],
    description: "درع ساق ثقيل مصمم للمدربين والمقاتلين المحترفين لتلقي أقوى الركلات الخلفية والدائرية بأقصى درجات الأمان لمفصل الكاحل والركبة.",
    inStock: true
  },
  {
    id: "gs-leg-ankle-supports",
    name: "دعامات كاحل ومفصل القدم المرنة GS-Ankle Armor (زوج)",
    nameEn: "GS-Ankle Armor Elastic Combat Supports",
    category: "leg",
    categoryLabel: "أوقية الرجل",
    price: 190,
    oldPrice: 250,
    rating: 4.8,
    reviews: 79,
    badge: "ثبات المفصل ⚓",
    badgeType: "gold",
    image: "./assets/products/21.jpg",
    sizes: ["M", "L", "XL"],
    colors: ["أسود وذهبي", "أزرق ملكي", "أحمر قتالي"],
    description: "نسيج ضاغط ناعم يدعم أربطة الكاحل ويقلل من خطر الالتواء أو الانزلاق على حلبات النزال وأرضيات التاتامي.",
    inStock: true
  },

  // ==========================================
  // --- 3. أوقية الفم (Mouthguards / حماة الأسنان) ---
  // ==========================================
  {
    id: "gs-mouth-predator-gold",
    name: "واقي أسنان هلامي مزدوج الطبقات GS-Predator Gold Guard",
    nameEn: "GS-Predator Gold Edition Dual-Layer Mouthguard",
    category: "mouth",
    categoryLabel: "أوقية الفم",
    price: 320,
    oldPrice: 420,
    rating: 5.0,
    reviews: 93,
    badge: "تقنية الغلي والعض 🦷",
    badgeType: "gold",
    image: "./assets/products/mouthguard-gold-pro.svg",
    sizes: ["قياس موحد للبالغين (مع علبة حفظ صحية)"],
    colors: ["ذهبي وأسود", "أسود ملكي", "أبيض وأحمر"],
    description: "هيكل مركب من طبقتين: درع خارجي صلب لامتصاص الصدمات وقالب هلامي داخلي بتقنية Boil & Bite يتشكل بدقة حول الأسنان ليمنع خلع الأسنان وارتجاج الفك. مزود بقنوات تنفس أيروديناميكية مدمجة.",
    inStock: true
  },
  {
    id: "gs-mouth-titan-fang",
    name: "واقي فم تيتان كربون GS-Titan Fang Predator Armor",
    nameEn: "GS-Titan Fang Carbon MMA Mouthguard",
    category: "mouth",
    categoryLabel: "أوقية الفم",
    price: 350,
    oldPrice: 480,
    rating: 4.9,
    reviews: 74,
    badge: "إصدار النزال العنيف ⚔️",
    badgeType: "crimson",
    image: "./assets/products/mouthguard-predator-black.svg",
    sizes: ["قياس موحد للبالغين (مع علبة حفظ كربونية)"],
    colors: ["أسود كربوني وناري", "أحمر قتالي"],
    description: "مصمم لنزالات MMA والملاكمة العنيفة، قواطع أمامية مصفحة تحمي عظام الفك السفلي والعلوي وتوزع صدمة اللكمات المباشرة بنسبة 40% أفضل من الواقيات التقليدية.",
    inStock: true
  },
  {
    id: "gs-mouth-aero-clear",
    name: "واقي فم طبي شفاف خفيف الوزن GS-Aero Safe Clear",
    nameEn: "GS-Aero Safe Clear Breathable Mouthguard",
    category: "mouth",
    categoryLabel: "أوقية الفم",
    price: 250,
    oldPrice: 320,
    rating: 4.8,
    reviews: 46,
    badge: "تنفس فائق السرعة 💨",
    badgeType: "gold",
    image: "./assets/products/mouthguard-ice-clear.svg",
    sizes: ["قياس موحد (مع علبة حفظ معقمة)"],
    colors: ["شفاف طبي نقي", "أزرق ثلجي شفاف"],
    description: "خامة طبية مرنة 100% خالية من مادة BPA، نحيف الوزن يمنح المقاتل قدرة على التنفس والتحدث وشرب الماء بين الجولات دون الحاجة لخلع الواقي.",
    inStock: true
  },

  // ==========================================
  // --- 4. أوقية الدماغ / الرأس (Headgear / خوذات وحماة الرأس) ---
  // ==========================================
  {
    id: "gs-head-kango-red",
    name: "خوذة نزال أصلية Kango Red Professional الجلدية",
    nameEn: "Kango Red Pro Genuine Leather Headgear",
    category: "head",
    categoryLabel: "أوقية الرأس",
    price: 1350,
    oldPrice: 1650,
    rating: 5.0,
    reviews: 59,
    badge: "Kango الأصلية 👑",
    badgeType: "gold",
    image: "./assets/products/WhatsApp Image 2026-10-18 at 12.14.06 AM (1).jpeg",
    sizes: ["M", "L", "XL"],
    colors: ["أحمر قتالي", "أسود ملكي", "أزرق نزال"],
    description: "الخوذة الجلدية الرسمية المعتمدة من Kango. حماية ثلاثية للوجنتين والصدغ ومؤخرة الرأس والأذنين مع أربطة رأس علوية وخلفية للتحكم بالقياس الدقيق ومجال رؤية بانورامي كامل.",
    inStock: true
  },
  {
    id: "gs-head-mreda-academy",
    name: "خوذة سبارينغ فولاذية M.Reda Boxing Academy",
    nameEn: "M.Reda Boxing Academy Full-Protection Headgear",
    category: "head",
    categoryLabel: "أوقية الرأس",
    price: 1450,
    oldPrice: 1780,
    rating: 5.0,
    reviews: 48,
    badge: "إصدار الأكاديمية 🥊",
    badgeType: "gold",
    image: "./assets/products/Gemini_Generated_Image (15).jpeg",
    sizes: ["M", "L", "XL"],
    colors: ["أسود وذهبي", "أحمر وأبيض"],
    description: "تم تصميمها بالتعاون مع كبار مدربي الملاكمة لتوفير أقصى امتصاص للارتجاجات الدماغية وحماية منطقة الذقن والأنف في جولات السبارينغ الثقيلة.",
    inStock: true
  },
  {
    id: "gs-head-apex-shield",
    name: "خوذة حماية شاملة 360° GS-Apex Shield Pro المصفحة",
    nameEn: "GS-Apex Shield 360 Full Coverage Combat Headgear",
    category: "head",
    categoryLabel: "أوقية الرأس",
    price: 1290,
    oldPrice: 1590,
    rating: 4.9,
    reviews: 36,
    badge: "حماية 360° 🛡️",
    badgeType: "crimson",
    image: "./assets/products/10.jpg",
    sizes: ["S/M", "L/XL"],
    colors: ["أسود كربوني", "رمادي مدرع"],
    description: "تغطية كاملة من الجبهة حتى الرقبة الخلفية مع بطانة ناعمة تمتص العرق وتمنع انزلاق الخوذة داخل الحلبة.",
    inStock: true
  },

  // ==========================================
  // --- 5. ملابس النزال والتدريب (Fightwear & Combat Apparel) ---
  // ==========================================
  {
    id: "gs-apparel-horse-gorilla",
    name: "شورت مواي تاي أصلي HORSE Gorilla Fight Shorts",
    nameEn: "HORSE Gorilla Muay Thai Elite Battle Shorts",
    category: "apparel",
    categoryLabel: "ملابس قتالية",
    price: 590,
    oldPrice: 750,
    rating: 5.0,
    reviews: 64,
    badge: "HORSE Gorilla 🦍",
    badgeType: "gold",
    image: "./assets/products/WhatsApp Image 2026-10-19 at 11.33.21 AM.jpeg",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["أسود وتطريز ذهبي", "أزرق وفضي"],
    colorImages: {
      "أسود وتطريز ذهبي": "./assets/products/WhatsApp Image 2026-10-19 at 11.33.21 AM.jpeg",
      "أزرق وفضي": "./assets/products/WhatsApp Image 2026-10-19 at 11.33.22 AM.jpeg"
    },
    description: "شورت مواي تاي تايلاندي فاخر من الساتان الثقيل المقاوم للتمزق، مع خصر مطاطي مقوى وشقوق جانبية واسعة لحرية تامة في الركلات العالية والركبيات.",
    inStock: true
  },
  {
    id: "gs-apparel-twins-shorts",
    name: "شورت نزال TWINS Special الأصلي للمواي تاي",
    nameEn: "TWINS Special Muay Thai Combat Shorts",
    category: "apparel",
    categoryLabel: "ملابس قتالية",
    price: 650,
    oldPrice: 820,
    rating: 4.9,
    reviews: 53,
    badge: "TWINS Special 🇹🇭",
    badgeType: "gold",
    image: "./assets/products/WhatsApp Image 2026-10-19 at 11.33.22 AM (1).jpeg",
    sizes: ["S", "M", "L", "XL"],
    colors: ["وردي وأزرق ملكي", "أسود وفضي"],
    colorImages: {
      "وردي وأزرق ملكي": "./assets/products/WhatsApp Image 2026-10-19 at 11.33.22 AM (1).jpeg",
      "أسود وفضي": "./assets/products/WhatsApp Image 2026-10-19 at 11.33.22 AM (4).jpeg"
    },
    description: "الأصالة التايلاندية بألوان جريئة وقماش ساتان فائق النعومة وخفة الوزن، خياطة يدوية بارزة ومقاومة للغسيل المتكرر.",
    inStock: true
  },
  {
    id: "gs-apparel-metalboxe-suit",
    name: "بدلة نزال وتدريب احترافية Metal Boxe / Venum Fight Suit",
    nameEn: "Metal Boxe Pro Heavyweight Combat Training Suit",
    category: "apparel",
    categoryLabel: "ملابس قتالية",
    price: 780,
    oldPrice: 980,
    rating: 4.9,
    reviews: 41,
    badge: "بدلة الأبطال 🥋",
    badgeType: "crimson",
    image: "./assets/products/WhatsApp Image 2026-10-19 at 11.33.22 AM (3).jpeg",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["أسود فولاذي", "كحلي داكن"],
    colorImages: {
      "أسود فولاذي": "./assets/products/WhatsApp Image 2026-10-19 at 11.33.22 AM (3).jpeg",
      "كحلي داكن": "./assets/products/WhatsApp Image 2026-10-19 at 11.43.03 AM.jpeg"
    },
    description: "بدلة تدريب قتالية متكاملة مصممة للإحماء وخسارة الوزن الزائد قبل النزالات، نسيج عالي المرونة يمنع تكتل العرق ويحافظ على دفء العضلات.",
    inStock: true
  },
  {
    id: "gs-apparel-horse-kickbox",
    name: "شورت كيك بوكسينغ تدريبي HORSE Striker Shorts",
    nameEn: "HORSE Striker Pro Kickboxing Shorts",
    category: "apparel",
    categoryLabel: "ملابس قتالية",
    price: 550,
    oldPrice: 700,
    rating: 4.8,
    reviews: 32,
    badge: "خفيف ومريح ⚡",
    badgeType: "gold",
    image: "./assets/products/WhatsApp Image 2026-10-19 at 11.33.23 AM.jpeg",
    sizes: ["M", "L", "XL"],
    colors: ["أسود ومطبوع", "رمادي وأحمر"],
    description: "شورت تدريب حر بألواح تهوية سريعة، مناسب لحصص اللياقة القتالية وتمارين الكيك بوكسينغ والكروس فيت.",
    inStock: true
  }
];

// App State
const state = {
  products: [],
  cart: [],
  selectedCategory: "all",
  searchQuery: "",
  sortBy: "default",
  soundEnabled: true,
  storePhone: DEFAULT_PHONE,
  adminPin: DEFAULT_PIN,
  currency: DEFAULT_CURRENCY,
  orders: [],
  discountRate: 0,
  activeCoupon: ""
};

// ==========================================
// 2. Storage Persistence Engine & Helpers
// ==========================================
function getColorHex(colorName) {
  if (!colorName) return "#d4af37";
  const str = colorName.toLowerCase();
  if (str.includes("ذهب") || str.includes("gold")) return "#d4af37";
  if (str.includes("أسود") || str.includes("كربون") || str.includes("black")) return "#18181b";
  if (str.includes("أحمر") || str.includes("ناري") || str.includes("red")) return "#dc2626";
  if (str.includes("أزرق") || str.includes("كحلي") || str.includes("blue")) return "#2563eb";
  if (str.includes("فضي") || str.includes("رمادي") || str.includes("مدرع") || str.includes("فولاذ") || str.includes("silver") || str.includes("gray")) return "#71717a";
  if (str.includes("أبيض") || str.includes("white")) return "#f4f4f5";
  if (str.includes("وردي") || str.includes("pink")) return "#ec4899";
  if (str.includes("شفاف")) return "rgba(255,255,255,0.4)";
  return "#d4af37";
}

function loadSavedState() {
  try {
    const version = localStorage.getItem("gstools_catalog_v");
    const savedProducts = localStorage.getItem("gstools_products");

    if (savedProducts && version === CATALOG_VERSION) {
      state.products = JSON.parse(savedProducts);
    } else {
      // Initialize with fresh catalog containing real prices and all 5 categories
      state.products = [...INITIAL_PRODUCTS];
      localStorage.setItem("gstools_products", JSON.stringify(state.products));
      localStorage.setItem("gstools_catalog_v", CATALOG_VERSION);
    }

    const savedCart = localStorage.getItem("gstools_cart");
    state.cart = savedCart ? JSON.parse(savedCart) : [];

    const savedPhone = localStorage.getItem("gstools_phone");
    state.storePhone = savedPhone || DEFAULT_PHONE;

    const savedPin = localStorage.getItem("gstools_pin");
    state.adminPin = savedPin || DEFAULT_PIN;

    const savedCurrency = localStorage.getItem("gstools_currency");
    state.currency = savedCurrency || DEFAULT_CURRENCY;

    const savedOrders = localStorage.getItem("gstools_orders");
    state.orders = savedOrders ? JSON.parse(savedOrders) : [];

    const savedSound = localStorage.getItem("gstools_sound");
    state.soundEnabled = savedSound !== null ? JSON.parse(savedSound) : true;
  } catch (e) {
    console.error("Failed to load local storage state:", e);
    state.products = [...INITIAL_PRODUCTS];
  }
}

function saveProducts() {
  localStorage.setItem("gstools_products", JSON.stringify(state.products));
  // Sync only when the owner is authenticated in Supabase.
  gsSupabase.auth.getSession().then(({ data }) => {
    if (data.session) syncProductsToSupabase();
  }).catch(error => console.error("Supabase session check failed:", error));
}
function saveCart() {
  localStorage.setItem("gstools_cart", JSON.stringify(state.cart));
}
function saveOrders() {
  localStorage.setItem("gstools_orders", JSON.stringify(state.orders));
  gsSupabase.auth.getSession().then(({ data }) => {
    if (data.session) syncOrdersToSupabase();
  }).catch(error => console.error("Supabase orders session check failed:", error));
}
function saveSettings() {
  localStorage.setItem("gstools_phone", state.storePhone);
  localStorage.setItem("gstools_pin", state.adminPin);
  localStorage.setItem("gstools_currency", state.currency);
  gsSupabase.auth.getSession().then(({ data }) => {
    if (data.session) syncSettingsToSupabase();
  }).catch(error => console.error("Supabase settings session check failed:", error));
}
async function syncSettingsToSupabase() {
  const values = {
    storePhone: state.storePhone,
    currency: state.currency
  };
  const { error } = await gsSupabase.from("gstools_settings").upsert(
    Object.entries(values).map(([key, value]) => ({ key, value, updated_at: new Date().toISOString() })),
    { onConflict: "key" }
  );
  if (error) { console.error("Supabase settings sync error:", error.message); return false; }
  return true;
}
async function loadSettingsFromSupabase() {
  const { data, error } = await gsSupabase.from("gstools_settings").select("key,value");
  if (error) { console.error("Supabase settings load error:", error.message); return false; }
  const values = Object.fromEntries((data || []).map(row => [row.key, row.value]));
  if (typeof values.storePhone === "string" && values.storePhone) state.storePhone = values.storePhone;
  if (typeof values.currency === "string" && values.currency) state.currency = values.currency;
  saveSettingsLocalOnly();
  renderProducts();
  renderCartDrawer();
  return true;
}
function saveSettingsLocalOnly() {
  localStorage.setItem("gstools_phone", state.storePhone);
  localStorage.setItem("gstools_pin", state.adminPin);
  localStorage.setItem("gstools_currency", state.currency);
}
function orderToCloudRow(order) {
  return { order_code: String(order.id), data: order, status: order.status || "pending", total: Number(order.grandTotal) || 0, customer_name: order.customer?.name || "", phone: order.customer?.phone || "", items: order.items || [] };
}
async function syncOrdersToSupabase() {
  const { data: sessionData } = await gsSupabase.auth.getSession();
  if (!sessionData.session) return false;

  const rows = state.orders.map(orderToCloudRow);
  if (rows.length) {
    const { error } = await gsSupabase.from("gstools_orders").upsert(rows, { onConflict: "order_code" });
    if (error) { console.error("Supabase orders sync error:", error.message); return false; }
  }

  // Reconcile deletions so removed orders stay removed after reloads and on other devices.
  const { data: cloudRows, error: readError } = await gsSupabase.from("gstools_orders").select("order_code");
  if (readError) { console.error("Supabase order list sync error:", readError.message); return false; }
  const keepCodes = new Set(rows.map(row => String(row.order_code)));
  const deletedCodes = (cloudRows || []).map(row => String(row.order_code)).filter(code => !keepCodes.has(code));
  for (const code of deletedCodes) {
    const { error } = await gsSupabase.from("gstools_orders").delete().eq("order_code", code);
    if (error) { console.error("Supabase order deletion sync error:", error.message); return false; }
  }
  return true;
}
async function submitOrderToCloud(order) {
  const { error } = await gsSupabase.from("gstools_orders").insert(orderToCloudRow(order));
  if (error) console.error("Supabase order insert error:", error.message);
  return !error;
}
async function loadOrdersFromSupabase() {
  const { data, error } = await gsSupabase.from("gstools_orders").select("data").order("created_at", { ascending: false });
  if (error) { console.error("Supabase orders load error:", error.message); return false; }
  if (data?.length) {
    state.orders = data.map(row => row.data).filter(Boolean);
    localStorage.setItem("gstools_orders", JSON.stringify(state.orders));
    renderAdminOrdersTable();
    renderAdminKPIs();
  }
  return true;
} 
async function syncProductsToSupabase() {
  const { data: sessionData } = await gsSupabase.auth.getSession();
  if (!sessionData.session) return false;

  const rows = state.products.map(product => ({
    id: String(product.id),
    name: product.name || "",
    price: Number(product.price) || 0,
    image_url: product.image || null,
    stock: Number(product.stock) || 0,
    description: product.description || "",
    active: true,
    data: product
  }));

  if (rows.length) {
    const { error } = await gsSupabase.from("gstools_products").upsert(rows, { onConflict: "id" });
    if (error) {
      console.error("Supabase product sync error:", error.message);
      return false;
    }
  }

  // Reconcile deletions too: remove cloud products that no longer exist locally.
  const { data: cloudRows, error: readError } = await gsSupabase.from("gstools_products").select("id");
  if (readError) {
    console.error("Supabase product list sync error:", readError.message);
    return false;
  }
  const keepIds = new Set(rows.map(row => String(row.id)));
  const deletedIds = (cloudRows || []).map(row => String(row.id)).filter(id => !keepIds.has(id));
  for (const id of deletedIds) {
    const { error } = await gsSupabase.from("gstools_products").delete().eq("id", id);
    if (error) {
      console.error("Supabase product deletion sync error:", error.message);
      return false;
    }
  }
  return true;
}
async function uploadProductImageIfNeeded(imageValue) {
  if (!imageValue || !imageValue.startsWith("data:")) return imageValue;
  const { data: sessionData } = await gsSupabase.auth.getSession();
  if (!sessionData.session) return imageValue;
  try {
    const response = await fetch(imageValue);
    const blob = await response.blob();
    const ext = blob.type === "image/png" ? "png" : blob.type === "image/svg+xml" ? "svg" : "jpg";
    const path = "products/" + Date.now() + "-" + Math.random().toString(36).slice(2, 8) + "." + ext;
    const { error } = await gsSupabase.storage.from("gstools-images").upload(path, blob, { contentType: blob.type || "image/jpeg", upsert: false });
    if (error) throw error;
    const { data } = gsSupabase.storage.from("gstools-images").getPublicUrl(path);
    return data.publicUrl;
  } catch (error) {
    console.error("Supabase image upload failed:", error.message);
    showToast("تعذر رفع الصورة للسحابة؛ سيتم الاحتفاظ بها محليًا مؤقتًا.", "warning");
    return imageValue;
  }
}
async function migrateProductImagesToCloud() {
  let changed = false;
  for (const product of state.products) {
    if (product.image && product.image.startsWith("data:")) {
      const uploaded = await uploadProductImageIfNeeded(product.image);
      if (uploaded && !uploaded.startsWith("data:")) { product.image = uploaded; changed = true; }
    }
    if (product.colorImages && typeof product.colorImages === "object") {
      for (const color of Object.keys(product.colorImages)) {
        const value = product.colorImages[color];
        if (typeof value === "string" && value.startsWith("data:")) {
          const uploaded = await uploadProductImageIfNeeded(value);
          if (uploaded && !uploaded.startsWith("data:")) { product.colorImages[color] = uploaded; changed = true; }
        }
      }
    }
  }
  if (changed) {
    localStorage.setItem("gstools_products", JSON.stringify(state.products));
    await syncProductsToSupabase();
    renderProducts();
  }
}
async function loadProductsFromSupabase() {
  const { data, error } = await gsSupabase
    .from("gstools_products")
    .select("data, active")
    .eq("active", true);

  if (error) {
    console.error("Supabase load error:", error.message);
    return false;
  }

  if (data && data.length > 0) {
    state.products = data
      .map(row => row.data)
      .filter(product => product && product.id);

    localStorage.setItem(
      "gstools_products",
      JSON.stringify(state.products)
    );

    renderProducts();
    return true;
  }

  return false;
}
// ==========================================
// 3. Audio Synthesizer (Zero External Files)
// ==========================================
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

function playSound(type) {
  if (!state.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    if (type === "click") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(650, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === "punch") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.exponentialRampToValueAtTime(35, now + 0.2);
      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.22);
    } else if (type === "swoosh") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.12);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.15);
    } else if (type === "success") {
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + i * 0.07);
        gain.gain.setValueAtTime(0.15, now + i * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.07 + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.07);
        osc.stop(now + i * 0.07 + 0.35);
      });
    }
  } catch (err) {
    // Autoplay policy fallback
  }
}

// ==========================================
// 4. Hero Animated Particles Canvas
// ==========================================
function initHeroCanvas() {
  const canvas = document.getElementById("heroCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];
  const particleCount = window.innerWidth < 768 ? 35 : 70;

  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  class Spark {
    constructor() {
      this.reset(true);
    }
    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 10;
      this.size = Math.random() * 2.8 + 0.8;
      this.speedY = -(Math.random() * 1.5 + 0.6);
      this.speedX = (Math.random() - 0.5) * 0.8;
      this.life = 0;
      this.maxLife = Math.random() * 180 + 100;
      this.color = Math.random() > 0.4 ? "#d4af37" : (Math.random() > 0.5 ? "#ff5722" : "#f5e7a9");
      this.alpha = Math.random() * 0.7 + 0.3;
    }
    update() {
      this.y += this.speedY;
      this.x += this.speedX + Math.sin(this.life * 0.05) * 0.3;
      this.life++;
      if (this.life > this.maxLife || this.y < -10) {
        this.reset();
      }
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = Math.max(0, this.alpha * (1 - this.life / this.maxLife));
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Spark());
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(loop);
  }
  loop();
}

// ==========================================
// 5. Toast Notification System
// ==========================================
function showToast(message, type = "success") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  const bgColors = {
    success: "bg-zinc-900 border-amber-500/80 text-amber-300",
    error: "bg-zinc-900 border-red-500/80 text-red-300",
    warning: "bg-zinc-900 border-amber-500 text-amber-200"
  };
  const icons = {
    success: "🦁",
    error: "⚠️",
    warning: "🥊"
  };

  toast.className = `flex items-center gap-2.5 px-4 py-3 rounded-xl border shadow-2xl text-xs md:text-sm font-bold transform translate-y-3 opacity-0 transition-all duration-300 pointer-events-auto ${bgColors[type] || bgColors.success}`;
  toast.innerHTML = `
    <span class="text-base">${icons[type] || "🥊"}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.remove("translate-y-3", "opacity-0");
  }, 10);

  setTimeout(() => {
    toast.classList.add("translate-y-3", "opacity-0");
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================
// 6. Products Catalog Engine & Renderer
// ==========================================
function renderProducts() {
  const grid = document.getElementById("productsGrid");
  const countBadge = document.getElementById("productsCountBadge");
  if (!grid) return;

  // Filter & Search
  let filtered = state.products.filter(item => {
    const matchCategory = state.selectedCategory === "all" || item.category === state.selectedCategory;
    const matchQuery = state.searchQuery === "" || 
      item.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      (item.nameEn && item.nameEn.toLowerCase().includes(state.searchQuery.toLowerCase())) ||
      (item.description && item.description.toLowerCase().includes(state.searchQuery.toLowerCase()));
    return matchCategory && matchQuery;
  });

  // Sort
  if (state.sortBy === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (countBadge) {
    countBadge.textContent = `${filtered.length} منتج متوفر`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-500 text-3xl">
          🥊
        </div>
        <h3 class="text-xl font-bold text-zinc-300 mb-2">لا توجد معدات مطابقة للبحث</h3>
        <p class="text-zinc-500 text-sm mb-6">جرب تغيير الفئة أو كلمة البحث للوصول لأفضل عتاد نزال</p>
        <button onclick="resetFilters()" class="px-6 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-amber-400 font-bold text-sm border border-amber-500/30 transition-all cursor-pointer">
          عرض جميع المنتجات
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const badgeClass = product.badgeType === "crimson" ? "badge-crimson" : "badge-gold";
    const discountAmount = product.oldPrice && product.oldPrice > product.price ? product.oldPrice - product.price : 0;

    return `
      <div class="product-card group relative bg-[#121216] rounded-2xl border border-zinc-800/80 hover:border-amber-500/50 flex flex-col justify-between overflow-hidden shadow-lg">
        
        <!-- Top Image & Badges -->
        <div class="relative w-full h-60 bg-zinc-950 overflow-hidden cursor-pointer" onclick="openProductQuickView('${product.id}')">
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            onerror="this.src='./assets/logo.jpeg'"
            class="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500" 
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-black/30 pointer-events-none"></div>
          
          <!-- Badges -->
          <div class="absolute top-3 right-3 flex flex-col gap-1.5 z-10">
            ${product.badge ? `<span class="px-2.5 py-1 rounded-full text-xs font-bold ${badgeClass}">${product.badge}</span>` : ""}
            ${discountAmount > 0 ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">خصم ${discountAmount} ج.م</span>` : ""}
          </div>

          <!-- Quick view hint -->
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
            <span class="px-4 py-2 rounded-xl bg-zinc-900/90 border border-amber-400/50 text-amber-300 text-xs font-black flex items-center gap-1.5 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
              👁️ معاينة سريعة ومقاسات
            </span>
          </div>
        </div>

        <!-- Details -->
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-bold text-amber-500/90 bg-amber-500/10 px-2.5 py-0.5 rounded-md">
                ${product.categoryLabel || getCategoryTitle(product.category)}
              </span>
              <div class="flex items-center gap-1 text-xs text-amber-400 font-bold">
                <span>⭐</span>
                <span class="num-combat">${product.rating}</span>
                <span class="text-zinc-500">(${product.reviews})</span>
              </div>
            </div>

            <h3 class="text-base font-extrabold text-white group-hover:text-amber-400 transition-colors line-clamp-2 mb-1.5">
              ${product.name}
            </h3>
            
            <p class="text-xs text-zinc-400 line-clamp-2 mb-3 leading-relaxed">
              ${product.description}
            </p>

            <!-- Colors Available -->
            ${product.colors && product.colors.length > 0 ? `
              <div class="mb-3 pt-2.5 border-t border-zinc-800/60">
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-[11px] font-bold text-zinc-400">الألوان المتاحة:</span>
                  <span class="text-[10px] text-amber-400 font-bold">${product.colors.length} ألوان</span>
                </div>
                <div class="flex items-center gap-1.5 flex-wrap">
                  ${product.colors.map(col => `
                    <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-zinc-900 border border-zinc-700/80 text-zinc-300 shadow-xs" title="${col}">
                      <span class="w-2.5 h-2.5 rounded-full border border-black/60 shadow-inner shrink-0" style="background: ${getColorHex(col)}"></span>
                      <span>${col}</span>
                    </span>
                  `).join("")}
                </div>
              </div>
            ` : ""}

            <!-- Price in EGP -->
            <div class="mb-3.5 pt-2 border-t border-zinc-800/60 flex items-baseline justify-between">
              <div class="flex items-baseline gap-2">
                <span class="text-xl font-black text-amber-400 num-combat tracking-tight">
                  ${product.price.toLocaleString("ar-EG")} <span class="text-xs font-bold text-zinc-400">${state.currency}</span>
                </span>
                ${product.oldPrice && product.oldPrice > product.price ? `
                  <span class="text-xs text-zinc-500 line-through num-combat">
                    ${product.oldPrice.toLocaleString("ar-EG")} ${state.currency}
                  </span>
                ` : ""}
              </div>
              <span class="text-[11px] font-bold text-emerald-400">
                ✓ متوفر
              </span>
            </div>
          </div>

          <!-- Bottom: Quick Action -->
          <div class="pt-3 border-t border-zinc-800/80">
            <div class="grid grid-cols-5 gap-2">
              <button 
                onclick="quickAddToCart('${product.id}', null, '${product.colors && product.colors.length > 0 ? product.colors[0] : ''}')"
                ${!product.inStock ? 'disabled' : ''}
                class="col-span-4 btn-combat w-full py-2.5 rounded-xl font-black text-xs md:text-sm flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black shadow-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <span>🛒 إضافة للسلة</span>
              </button>
              
              <button 
                onclick="openProductQuickView('${product.id}')"
                title="تفاصيل إضافية ومقاسات"
                class="col-span-1 flex items-center justify-center rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-amber-400 border border-zinc-700/60 transition-colors cursor-pointer"
              >
                <span>🔍</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    `;
  }).join("");
}

function getCategoryTitle(cat) {
  const map = {
    all: "الكل",
    hand: "أوقية اليد",
    leg: "أوقية الرجل",
    mouth: "أوقية الفم",
    head: "أوقية الرأس",
    apparel: "ملابس النزال"
  };
  return map[cat] || cat;
}

function resetFilters() {
  state.selectedCategory = "all";
  state.searchQuery = "";
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";
  updateCategoryTabsUI();
  renderProducts();
  playSound("swoosh");
}

function setCategory(cat) {
  state.selectedCategory = cat;
  updateCategoryTabsUI();
  renderProducts();
  playSound("click");
}

function updateCategoryTabsUI() {
  document.querySelectorAll("[data-category-tab]").forEach(tab => {
    const cat = tab.getAttribute("data-category-tab");
    if (cat === state.selectedCategory) {
      tab.className = "category-tab active px-5 py-2.5 rounded-xl text-sm font-black transition-all bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg shadow-amber-500/20 whitespace-nowrap cursor-pointer";
    } else {
      tab.className = "category-tab px-5 py-2.5 rounded-xl text-sm font-bold transition-all bg-zinc-900/90 text-zinc-300 hover:text-amber-400 border border-zinc-800 hover:border-amber-500/40 whitespace-nowrap cursor-pointer";
    }
  });
}

// ==========================================
// 7. Shopping Cart Drawer System & Totals
// ==========================================
function quickAddToCart(productId, size = null, color = null) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  const selectedSize = size || (product.sizes && product.sizes.length > 0 ? product.sizes[0] : "قياسي");
  const selectedColor = color || (product.colors && product.colors.length > 0 ? product.colors[0] : "");
  const itemKey = `${product.id}_${selectedSize}_${selectedColor}`;

  const existing = state.cart.find(i => i.key === itemKey);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({
      key: itemKey,
      id: product.id,
      name: product.name,
      price: product.price || 0,
      image: (product.colorImages && product.colorImages[selectedColor]) || product.image,
      size: selectedSize,
      color: selectedColor,
      quantity: 1
    });
  }

  saveCart();
  updateCartBadge();
  renderCartDrawer();
  playSound("punch");
  showToast(`تمت إضافة "${product.name}" إلى السلة بنجاح!`);
}

function updateCartBadge() {
  const badge = document.getElementById("cartCountBadge");
  const drawerCount = document.getElementById("cartDrawerCount");
  if (!badge) return;

  const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (count > 0) {
    badge.textContent = count;
    badge.classList.remove("hidden");
    badge.style.transform = "scale(1.25)";
    setTimeout(() => badge.style.transform = "scale(1)", 200);
  } else {
    badge.classList.add("hidden");
  }

  if (drawerCount) {
    drawerCount.textContent = `(${count})`;
  }
}

function changeCartQty(key, delta) {
  const item = state.cart.find(i => i.key === key);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(i => i.key !== key);
  }

  saveCart();
  updateCartBadge();
  renderCartDrawer();
  playSound("click");
}

function removeCartItem(key) {
  state.cart = state.cart.filter(i => i.key !== key);
  saveCart();
  updateCartBadge();
  renderCartDrawer();
  playSound("click");
  showToast("تم حذف المنتج من السلة");
}

function clearCart() {
  if (state.cart.length === 0) return;
  state.cart = [];
  state.discountRate = 0;
  state.activeCoupon = "";
  saveCart();
  updateCartBadge();
  renderCartDrawer();
  playSound("click");
  showToast("تم تفريغ السلة بنجاح");
}

function renderCartDrawer() {
  const container = document.getElementById("cartItemsContainer");
  const subtotalEl = document.getElementById("cartSubtotal");
  const discountRow = document.getElementById("cartDiscountRow");
  const discountEl = document.getElementById("cartDiscountAmount");
  const shippingEl = document.getElementById("cartShipping");
  const totalEl = document.getElementById("cartTotal");
  const checkoutBtn = document.getElementById("btnProceedCheckout");

  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="h-full flex flex-col items-center justify-center text-center p-6 text-zinc-400">
        <div class="w-20 h-20 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-3xl text-amber-500 mb-4 shadow-inner">
          🛒
        </div>
        <h4 class="text-lg font-bold text-zinc-200 mb-1">سلتك فارغة حالياً</h4>
        <p class="text-xs text-zinc-500 mb-6 max-w-xs">جهّز نفسك للنزال القادم واختر أفضل عتاد حماية من متجر GStools</p>
        <button onclick="toggleCartDrawer(false)" class="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-sm transition-all shadow-lg cursor-pointer">
          ابدأ التسوق الآن
        </button>
      </div>
    `;
    const itemsCountEl = document.getElementById("cartItemsCount");
    if (itemsCountEl) itemsCountEl.textContent = `0 قطع`;
    if (subtotalEl) subtotalEl.textContent = `0 ${state.currency}`;
    if (discountRow) discountRow.classList.add("hidden");
    if (shippingEl) shippingEl.textContent = `0 ${state.currency}`;
    if (totalEl) totalEl.textContent = `0 ${state.currency}`;
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  const totalItemsCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = Math.round(subtotal * state.discountRate);
  const shippingCost = subtotal >= 2000 ? 0 : 50;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingCost);

  container.innerHTML = state.cart.map(item => `
    <div class="flex items-center gap-3 p-3.5 bg-zinc-900/90 rounded-xl border border-zinc-800/80 hover:border-amber-500/30 transition-all">
      <img src="${item.image}" alt="${item.name}" onerror="this.src='./assets/logo.jpeg'" class="w-16 h-16 rounded-lg object-cover bg-black border border-zinc-800 shrink-0"/>
      
      <div class="flex-1 min-w-0">
        <h5 class="text-xs font-bold text-zinc-200 truncate mb-1">${item.name}</h5>
        <div class="flex items-center gap-1.5 text-xs text-zinc-400 mb-2 flex-wrap">
          <span class="bg-zinc-800 px-2 py-0.5 rounded text-[11px] text-amber-300 font-semibold">المقاس: ${item.size}</span>
          ${item.color ? `
            <span class="bg-zinc-800 px-2 py-0.5 rounded text-[11px] text-amber-400 font-semibold inline-flex items-center gap-1">
              <span class="w-2 h-2 rounded-full border border-black/40 shrink-0" style="background: ${getColorHex(item.color)}"></span>
              <span>اللون: ${item.color}</span>
            </span>
          ` : ""}
        </div>
        
        <div class="flex items-center justify-between">
          <div class="flex items-center border border-zinc-700 rounded-lg bg-zinc-950 overflow-hidden">
            <button onclick="changeCartQty('${item.key}', -1)" class="w-7 h-7 flex items-center justify-center hover:bg-zinc-800 text-zinc-300 text-xs font-bold transition-colors cursor-pointer">-</button>
            <span class="w-8 text-center text-xs font-bold num-combat text-white">${item.quantity}</span>
            <button onclick="changeCartQty('${item.key}', 1)" class="w-7 h-7 flex items-center justify-center hover:bg-zinc-800 text-zinc-300 text-xs font-bold transition-colors cursor-pointer">+</button>
          </div>

          <div class="flex items-center gap-3">
            <span class="text-xs font-black text-amber-400 num-combat">
              ${(item.price * item.quantity).toLocaleString("ar-EG")} ${state.currency}
            </span>
            <button onclick="removeCartItem('${item.key}')" class="text-zinc-500 hover:text-red-400 text-sm transition-colors p-1 cursor-pointer" title="حذف المنتج">
              🗑️
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join("");

  const itemsCountEl = document.getElementById("cartItemsCount");
  if (itemsCountEl) itemsCountEl.textContent = `${totalItemsCount} قطع`;
  if (subtotalEl) subtotalEl.textContent = `${subtotal.toLocaleString("ar-EG")} ${state.currency}`;

  if (discountRow) {
    if (discountAmount > 0) {
      discountRow.classList.remove("hidden");
      if (discountEl) discountEl.textContent = `-${discountAmount.toLocaleString("ar-EG")} ${state.currency}`;
    } else {
      discountRow.classList.add("hidden");
    }
  }

  if (shippingEl) {
    shippingEl.textContent = shippingCost === 0 ? "مجاني (طلب أكثر من 2000 ج.م) 🎉" : `${shippingCost.toLocaleString("ar-EG")} ${state.currency}`;
  }

  if (totalEl) {
    totalEl.textContent = `${grandTotal.toLocaleString("ar-EG")} ${state.currency}`;
  }

  if (checkoutBtn) checkoutBtn.disabled = false;
}

function applyCoupon() {
  const input = document.getElementById("couponInput");
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  const validCoupons = {
    "CHAMPION": 0.15, // 15% off
    "GS10": 0.10,     // 10% off
    "LION": 0.12      // 12% off
  };

  if (validCoupons[code]) {
    state.discountRate = validCoupons[code];
    state.activeCoupon = code;
    renderCartDrawer();
    playSound("success");
    showToast(`تم تفعيل كوبون الخصم "${code}" بنسبة ${validCoupons[code] * 100}%! 🔥`);
  } else {
    playSound("click");
    showToast("كوبون غير صالح. جرب استخدام CHAMPION أو GS10", "error");
  }
}

function toggleCartDrawer(open) {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  if (!drawer || !backdrop) return;

  if (open) {
    backdrop.classList.remove("hidden");
    setTimeout(() => {
      backdrop.classList.remove("opacity-0");
      drawer.style.transform = "translateX(0)";
    }, 10);
    renderCartDrawer();
    playSound("swoosh");
  } else {
    backdrop.classList.add("opacity-0");
    drawer.style.transform = "translateX(100%)";
    setTimeout(() => {
      backdrop.classList.add("hidden");
    }, 350);
  }
}

// ==========================================
// 8. Checkout Modal & Direct WhatsApp Engine
// ==========================================
function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast("سلتك فارغة، أضف بعض المنتجات أولاً", "warning");
    return;
  }
  toggleCartDrawer(false);

  const modal = document.getElementById("checkoutModal");
  if (!modal) return;

  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = Math.round(subtotal * state.discountRate);
  const shippingCost = subtotal >= 2000 ? 0 : 50;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingCost);

  const checkoutItemsCount = document.getElementById("checkoutItemsCount");
  if (checkoutItemsCount) {
    checkoutItemsCount.textContent = `${totalCount} قطع`;
  }

  const checkoutTotalPrice = document.getElementById("checkoutTotalPrice");
  if (checkoutTotalPrice) {
    checkoutTotalPrice.textContent = `${grandTotal.toLocaleString("ar-EG")} ${state.currency}`;
  }

  modal.classList.remove("hidden");
  setTimeout(() => modal.classList.remove("opacity-0"), 10);
  playSound("swoosh");
}

function closeCheckoutModal() {
  const modal = document.getElementById("checkoutModal");
  if (!modal) return;
  modal.classList.add("opacity-0");
  setTimeout(() => modal.classList.add("hidden"), 300);
}

function submitWhatsAppOrder(event) {
  if (event) event.preventDefault();

  const name = document.getElementById("checkoutName")?.value.trim();
  const phone = document.getElementById("checkoutPhone")?.value.trim();
  const city = document.getElementById("checkoutCity")?.value.trim();
  const address = document.getElementById("checkoutAddress")?.value.trim();
  const notes = document.getElementById("checkoutNotes")?.value.trim();

  if (!name || !phone || !city || !address) {
    playSound("click");
    showToast("يرجى ملء جميع الحقول الإلزامية", "warning");
    return;
  }

  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = Math.round(subtotal * state.discountRate);
  const shippingCost = subtotal >= 2000 ? 0 : 50;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingCost);

  const orderId = `GS-${Date.now().toString().slice(-6)}`;
  const orderDate = new Date().toLocaleString("ar-EG", { dateStyle: "medium", timeStyle: "short" });

  // Items List
  let itemsListText = "";
  state.cart.forEach((item, idx) => {
    const itemTotal = (item.price * item.quantity).toLocaleString("ar-EG");
    itemsListText += `${idx + 1}. *${item.name}*\n   ▫️ اللون: ${item.color || "افتراضي"}\n   ▫️ المقاس: ${item.size}\n   ▫️ الكمية: ${item.quantity} × ${item.price.toLocaleString("ar-EG")} = ${itemTotal} ${state.currency}\n`;
  });

  // Construct Clean Branded WhatsApp Message
  const whatsappMessage = 
`🦁 *طلب شراء رسمي من متجر GStools للعتاد القتالي* 🥊
───────────────────────
📋 *رقم الطلب:* \`#${orderId}\`
📅 *التاريخ:* ${orderDate}

👤 *بيانات البطل / المشتري:*
• *الاسم:* ${name}
• *رقم الهاتف / واتساب:* ${phone}
• *المدينة / المحافظة:* ${city}
• *العنوان بالتفصيل:* ${address}
${notes ? `• *ملاحظات خاصة:* ${notes}\n` : ""}
───────────────────────
📦 *العتاد المطلوب:*
${itemsListText}
───────────────────────
💰 *الملخص المالي:*
• مجموع المنتجات: ${subtotal.toLocaleString("ar-EG")} ${state.currency}
${discountAmount > 0 ? `• خصم الكوبون (${state.activeCoupon}): -${discountAmount.toLocaleString("ar-EG")} ${state.currency}\n` : ""}• مصاريف الشحن: ${shippingCost === 0 ? "مجاني" : shippingCost + " " + state.currency}
• *الإجمالي النهائي المطلق:* *${grandTotal.toLocaleString("ar-EG")} ${state.currency}*
(الدفع نقداً عند الاستلام)
───────────────────────
⚡ أرجو تأكيد توفر العتاد وموعد الشحن والتوصيل. شكراً لكم!`;

  // Log order in state for Admin Tracker
  const orderRecord = {
    id: orderId,
    timestamp: new Date().toISOString(),
    displayDate: orderDate,
    customer: { name, phone, city, address, notes },
    items: [...state.cart],
    itemCount: totalCount,
    subtotal: subtotal,
    grandTotal: grandTotal,
    status: "جديد (New)"
  };

  state.orders.unshift(orderRecord);
  saveOrders();
  submitOrderToCloud(orderRecord).then(ok => {
    if (!ok) console.warn("Order remains in this browser only until Supabase order permissions are configured.");
  });

  // Button Animation Feedback
  const submitBtn = document.getElementById("btnConfirmOrder");
  if (submitBtn) {
    submitBtn.innerHTML = `<span>⏳ جاري فتح محادثة واتساب...</span>`;
    submitBtn.classList.remove("from-amber-500", "to-amber-600");
    submitBtn.classList.add("from-emerald-500", "to-emerald-600");
  }

  playSound("success");

  // Format Clean Phone Number
  let targetPhone = state.storePhone.replace(/[^0-9]/g, "");
  if (!targetPhone) targetPhone = DEFAULT_PHONE;

  const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(whatsappMessage)}`;

  setTimeout(() => {
    // Open WhatsApp
    window.open(waUrl, "_blank");

    // Close checkout modal & clear cart
    closeCheckoutModal();
    state.cart = [];
    state.discountRate = 0;
    state.activeCoupon = "";
    saveCart();
    updateCartBadge();
    renderCartDrawer();

    // Show Success Modal
    openOrderSuccessModal(orderId);

    // Reset button
    if (submitBtn) {
      submitBtn.innerHTML = `<span>✅ تأكيد الطلب وإرساله عبر واتساب</span>`;
      submitBtn.classList.remove("from-emerald-500", "to-emerald-600");
      submitBtn.classList.add("from-amber-500", "to-amber-600");
    }
  }, 600);
}

function openOrderSuccessModal(orderId) {
  const modal = document.getElementById("orderSuccessModal");
  if (!modal) return;
  const idEl = document.getElementById("successOrderId");
  if (idEl) idEl.textContent = `#${orderId}`;

  modal.classList.remove("hidden");
  setTimeout(() => modal.classList.remove("opacity-0"), 10);
  playSound("success");
}

function closeOrderSuccessModal() {
  const modal = document.getElementById("orderSuccessModal");
  if (!modal) return;
  modal.classList.add("opacity-0");
  setTimeout(() => modal.classList.add("hidden"), 300);
}

// ==========================================
// 9. Product Quick View Lightbox Modal
// ==========================================
let currentQuickViewProduct = null;
let currentQuickViewSize = "";
let currentQuickViewColor = "";

function openProductQuickView(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  currentQuickViewProduct = product;
  currentQuickViewSize = product.sizes && product.sizes.length > 0 ? product.sizes[0] : "قياسي";
  currentQuickViewColor = product.colors && product.colors.length > 0 ? product.colors[0] : "";

  const modal = document.getElementById("quickViewModal");
  if (!modal) return;

  const activeImage = (product.colorImages && product.colorImages[currentQuickViewColor]) || product.image;
  const qvImageEl = document.getElementById("qvImage");
  if (qvImageEl) qvImageEl.src = activeImage;

  document.getElementById("qvCategory").textContent = product.categoryLabel || getCategoryTitle(product.category);
  document.getElementById("qvName").textContent = product.name;
  document.getElementById("qvDescription").textContent = product.description;
  document.getElementById("qvRating").textContent = product.rating;
  document.getElementById("qvReviews").textContent = `(${product.reviews} تقييم مقاتل)`;

  // Price Display in Quick View
  const qvPriceEl = document.getElementById("qvPrice");
  const qvOldPriceEl = document.getElementById("qvOldPrice");
  const qvDiscountBadgeEl = document.getElementById("qvDiscountBadge");

  if (qvPriceEl) {
    qvPriceEl.textContent = `${product.price.toLocaleString("ar-EG")} ${state.currency}`;
  }

  if (qvOldPriceEl) {
    if (product.oldPrice && product.oldPrice > product.price) {
      qvOldPriceEl.textContent = `${product.oldPrice.toLocaleString("ar-EG")} ${state.currency}`;
      qvOldPriceEl.classList.remove("hidden");
    } else {
      qvOldPriceEl.classList.add("hidden");
    }
  }

  if (qvDiscountBadgeEl) {
    if (product.oldPrice && product.oldPrice > product.price) {
      const diff = product.oldPrice - product.price;
      qvDiscountBadgeEl.textContent = `وفر ${diff.toLocaleString("ar-EG")} ${state.currency}`;
      qvDiscountBadgeEl.classList.remove("hidden");
    } else {
      qvDiscountBadgeEl.classList.add("hidden");
    }
  }

  // Sizes
  const sizesContainer = document.getElementById("qvSizesContainer");
  if (sizesContainer) {
    if (product.sizes && product.sizes.length > 0) {
      sizesContainer.innerHTML = product.sizes.map((s, idx) => `
        <button 
          type="button" 
          onclick="selectQuickViewSize('${s}', this)" 
          class="qv-size-btn px-4 py-2 rounded-xl text-xs font-black border transition-all cursor-pointer ${idx === 0 ? 'bg-amber-500 text-black border-amber-400 shadow-md' : 'bg-zinc-900 text-zinc-300 border-zinc-700 hover:border-amber-400'}"
        >
          ${s}
        </button>
      `).join("");
    } else {
      sizesContainer.innerHTML = `<span class="text-xs text-zinc-400">قياس موحد</span>`;
    }
  }

  // Colors
  const colorsContainer = document.getElementById("qvColorsContainer");
  const selectedColorText = document.getElementById("qvSelectedColorText");
  if (selectedColorText) {
    selectedColorText.textContent = currentQuickViewColor || "افتراضي";
  }
  if (colorsContainer) {
    if (product.colors && product.colors.length > 0) {
      colorsContainer.innerHTML = product.colors.map((c, idx) => `
        <button 
          type="button" 
          onclick="selectQuickViewColor('${c}', this)" 
          class="qv-color-btn flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${idx === 0 ? 'bg-amber-500 text-black border-amber-400 shadow-md font-black' : 'bg-zinc-900 text-zinc-300 border-zinc-700 hover:border-amber-400'}"
        >
          <span class="w-3 h-3 rounded-full border border-black/40 shadow-sm shrink-0" style="background: ${getColorHex(c)}"></span>
          <span>${c}</span>
        </button>
      `).join("");
    } else {
      colorsContainer.innerHTML = `<span class="text-xs text-zinc-400">لون موحد</span>`;
    }
  }

  modal.classList.remove("hidden");
  setTimeout(() => modal.classList.remove("opacity-0"), 10);
  playSound("swoosh");
}

function selectQuickViewSize(size, btnEl) {
  currentQuickViewSize = size;
  document.querySelectorAll(".qv-size-btn").forEach(b => {
    b.className = "qv-size-btn px-4 py-2 rounded-xl text-xs font-black border transition-all bg-zinc-900 text-zinc-300 border-zinc-700 hover:border-amber-400 cursor-pointer";
  });
  btnEl.className = "qv-size-btn px-4 py-2 rounded-xl text-xs font-black border transition-all bg-amber-500 text-black border-amber-400 shadow-md cursor-pointer";
  playSound("click");
}

function selectQuickViewColor(color, btnEl) {
  currentQuickViewColor = color;
  const selectedColorText = document.getElementById("qvSelectedColorText");
  if (selectedColorText) selectedColorText.textContent = color;

  document.querySelectorAll(".qv-color-btn").forEach(b => {
    b.className = "qv-color-btn flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all bg-zinc-900 text-zinc-300 border-zinc-700 hover:border-amber-400 cursor-pointer";
  });
  btnEl.className = "qv-color-btn flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-black border transition-all bg-amber-500 text-black border-amber-400 shadow-md cursor-pointer";

  // Swap product image if colorImages mapping exists
  if (currentQuickViewProduct && currentQuickViewProduct.colorImages && currentQuickViewProduct.colorImages[color]) {
    const imgEl = document.getElementById("qvImage");
    if (imgEl) {
      imgEl.style.transition = "opacity 0.25s ease";
      imgEl.style.opacity = "0";
      setTimeout(() => {
        imgEl.src = currentQuickViewProduct.colorImages[color];
        imgEl.style.opacity = "1";
      }, 250);
    }
  }

  playSound("click");
}

function addQuickViewToCart() {
  if (!currentQuickViewProduct) return;
  quickAddToCart(currentQuickViewProduct.id, currentQuickViewSize, currentQuickViewColor);
  closeProductQuickView();
}

function closeProductQuickView() {
  const modal = document.getElementById("quickViewModal");
  if (!modal) return;
  modal.classList.add("opacity-0");
  setTimeout(() => modal.classList.add("hidden"), 300);
}

// ==========================================
// 10. Hidden Admin Dashboard System
// ==========================================
let secretClickCount = 0;
let secretClickTimer = null;

function setupAdminSecretTriggers() {
  // 1. Keyboard Shortcut: Ctrl + Alt + A
  window.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.altKey && (e.key === "a" || e.key === "A" || e.key === "ش")) {
      e.preventDefault();
      openAdminAuthModal();
    }
  });

  // 2. URL Hash: #admin-gs
  if (window.location.hash === "#admin-gs") {
    openAdminAuthModal();
  }
  window.addEventListener("hashchange", () => {
    if (window.location.hash === "#admin-gs") {
      openAdminAuthModal();
    }
  });
}

function onSecretBadgeClick() {
  secretClickCount++;
  clearTimeout(secretClickTimer);
  playSound("click");

  if (secretClickCount >= 5) {
    secretClickCount = 0;
    openAdminAuthModal();
  } else {
    secretClickTimer = setTimeout(() => {
      secretClickCount = 0;
    }, 2500);
  }
}

function openAdminAuthModal() {
  const modal = document.getElementById("adminAuthModal");
  if (!modal) return;
  const pinInput = document.getElementById("adminPinInput");
  if (pinInput) pinInput.value = "";
  
  modal.classList.remove("hidden");
  setTimeout(() => modal.classList.remove("opacity-0"), 10);
  playSound("swoosh");
}

function closeAdminAuthModal() {
  const modal = document.getElementById("adminAuthModal");
  if (!modal) return;
  modal.classList.add("opacity-0");
  setTimeout(() => modal.classList.add("hidden"), 300);
}

function appendPin(num) {
  const pinInput = document.getElementById("adminPinInput");
  if (!pinInput || pinInput.value.length >= 6) return;
  pinInput.value += num;
  playSound("click");
}

function clearPin() {
  const pinInput = document.getElementById("adminPinInput");
  if (pinInput) pinInput.value = "";
  playSound("click");
}

async function verifyAdminPin() {
  const pinInput = document.getElementById("adminPinInput");
  if (!pinInput) return;

  if (pinInput.value === state.adminPin) {
    try {
      let { data: sessionData, error: sessionError } = await gsSupabase.auth.getSession();
      if (sessionError) throw sessionError;

      if (!sessionData.session) {
        const email = window.prompt("أدخل البريد الإلكتروني لحساب Supabase الخاص بمالك المتجر:");
        if (!email) return;
        const password = window.prompt("أدخل كلمة مرور حساب Supabase:");
        if (!password) return;

        const result = await gsSupabase.auth.signInWithPassword({ email: email.trim(), password });
        if (result.error) throw result.error;
        sessionData = { session: result.data.session };
      }

      const loaded = await loadProductsFromSupabase();
      if (!loaded) {
        const synced = await syncProductsToSupabase();
        if (!synced) throw new Error("تعذر حفظ المنتجات في قاعدة البيانات. راجع سياسات Supabase.");
      }
      await migrateProductImagesToCloud();
      await loadSettingsFromSupabase();
      await loadOrdersFromSupabase();

      closeAdminAuthModal();
      openAdminDashboard();
      playSound("success");
      showToast("تم فتح لوحة التحكم وربط المنتجات بقاعدة البيانات ✅");
    } catch (error) {
      console.error("GStools admin/Supabase error:", error);
      showToast("تعذر الاتصال بحساب Supabase. راجع البريد وكلمة المرور وسياسات قاعدة البيانات.", "error");
    }
  } else {
    playSound("punch");
    showToast("الرمز السري غير صحيح!", "error");
    pinInput.value = "";
    
    // Shake animation
    const card = document.getElementById("adminAuthCard");
    if (card) {
      card.style.animation = "shake 0.4s ease";
      setTimeout(() => card.style.animation = "", 400);
    }
  }
}

function openAdminDashboard() {
  const panel = document.getElementById("adminDashboardPanel");
  if (!panel) return;

  renderAdminKPIs();
  renderAdminProductsTable();
  renderAdminOrdersTable();
  populateAdminSettings();

  panel.classList.remove("hidden");
  setTimeout(() => panel.classList.remove("opacity-0"), 10);
  playSound("swoosh");
}

function closeAdminDashboard() {
  const panel = document.getElementById("adminDashboardPanel");
  if (!panel) return;
  panel.classList.add("opacity-0");
  setTimeout(() => panel.classList.add("hidden"), 300);
}

function switchAdminTab(tabName) {
  // Update Buttons
  document.querySelectorAll("[data-admin-tab-btn]").forEach(btn => {
    btn.className = "px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 transition-all cursor-pointer";
  });
  const activeBtn = document.getElementById(`adminTabBtn-${tabName}`);
  if (activeBtn) {
    activeBtn.className = "px-5 py-2.5 rounded-xl font-black text-xs md:text-sm text-black bg-gradient-to-r from-amber-500 to-amber-600 shadow-lg shadow-amber-500/20 cursor-pointer";
  }

  // Update Content Sections
  document.querySelectorAll("[data-admin-tab-content]").forEach(el => {
    el.classList.add("hidden");
  });
  const activeContent = document.getElementById(`adminTabContent-${tabName}`);
  if (activeContent) {
    activeContent.classList.remove("hidden");
  }

  playSound("click");
}

function renderAdminKPIs() {
  const totalProducts = state.products.length;
  const totalOrders = state.orders.length;
  const totalRevenue = state.orders.reduce((sum, o) => sum + (o.grandTotal || 0), 0);
  const outOfStock = state.products.filter(p => !p.inStock).length;

  document.getElementById("kpiTotalProducts").textContent = totalProducts;
  document.getElementById("kpiTotalOrders").textContent = totalOrders;
  document.getElementById("kpiTotalRevenue").textContent = `${totalRevenue.toLocaleString("ar-EG")} ${state.currency}`;
  document.getElementById("kpiOutOfStock").textContent = outOfStock;
}

function renderAdminProductsTable() {
  const tbody = document.getElementById("adminProductsTableBody");
  if (!tbody) return;

  tbody.innerHTML = state.products.map(p => `
    <tr class="border-b border-zinc-800/60 hover:bg-zinc-800/30 transition-colors">
      <td class="p-3 text-right">
        <div class="flex items-center gap-3">
          <img src="${p.image}" alt="" onerror="this.src='./assets/logo.jpeg'" class="w-10 h-10 rounded-lg object-cover bg-black border border-zinc-800 shrink-0"/>
          <div>
            <div class="font-bold text-xs text-white">${p.name}</div>
            <div class="text-[10px] text-zinc-500 font-mono">${p.id}</div>
          </div>
        </div>
      </td>
      <td class="p-3 text-right">
        <span class="text-xs bg-zinc-800 px-2 py-0.5 rounded text-amber-300 font-semibold">${getCategoryTitle(p.category)}</span>
      </td>
      <td class="p-3 text-right">
        <span class="text-xs font-black text-amber-400 num-combat">${p.price ? p.price.toLocaleString("ar-EG") : 0} ${state.currency}</span>
      </td>
      <td class="p-3 text-right">
        <div class="flex items-center gap-1 flex-wrap max-w-xs">
          ${p.colors && p.colors.length > 0 ? p.colors.map(c => `
            <span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] bg-zinc-900 border border-zinc-700 text-zinc-300">
              <span class="w-2 h-2 rounded-full border border-black/50 shrink-0" style="background:${getColorHex(c)}"></span>
              <span>${c}</span>
            </span>
          `).join("") : `<span class="text-[10px] text-zinc-500">-</span>`}
        </div>
      </td>
      <td class="p-3 text-center">
        <button onclick="toggleProductStock('${p.id}')" class="px-2.5 py-1 rounded-full text-[11px] font-bold cursor-pointer ${p.inStock ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-red-950 text-red-400 border border-red-800'}">
          ${p.inStock ? 'متوفر' : 'غير متوفر'}
        </button>
      </td>
      <td class="p-3 text-center">
        <div class="flex items-center justify-center gap-2">
          <button onclick="editProductModal('${p.id}')" class="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-amber-400 text-xs cursor-pointer" title="تعديل">
            ✏️
          </button>
          <button onclick="deleteProduct('${p.id}')" class="p-1.5 rounded-lg bg-zinc-800 hover:bg-red-900/60 text-red-400 text-xs cursor-pointer" title="حذف">
            🗑️
          </button>
        </div>
      </td>
    </tr>
  `).join("");
}

function toggleProductStock(id) {
  const product = state.products.find(p => p.id === id);
  if (!product) return;
  product.inStock = !product.inStock;
  saveProducts();
  renderAdminProductsTable();
  renderAdminKPIs();
  renderProducts();
  playSound("click");
  showToast(`تم تحديث حالة توفر "${product.name}"`);
}

function deleteProduct(id) {
  if (!confirm("هل أنت متأكد من حذف هذا المنتج نهائياً من المتجر؟")) return;
  state.products = state.products.filter(p => p.id !== id);
  saveProducts();
  renderAdminProductsTable();
  renderAdminKPIs();
  renderProducts();
  playSound("punch");
  showToast("تم حذف المنتج من المتجر بنجاح");
}

let editingProductId = null;

function appendColorToForm(colorName) {
  const input = document.getElementById("prodFormColors");
  if (!input) return;
  const current = input.value.trim();
  if (current === "") {
    input.value = colorName;
  } else {
    const list = current.split(",").map(c => c.trim());
    if (!list.includes(colorName)) {
      input.value = `${current}, ${colorName}`;
    }
  }
}

// ==========================================
// 10.B. Drag & Drop Image Uploader Engine
// ==========================================
function optimizeAndProcessImage(file, callback) {
  if (!file) return;

  // If SVG format, keep clean SVG data directly
  if (file.type === "image/svg+xml" || file.name.toLowerCase().endsWith(".svg")) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;
      const sizeKb = Math.round(file.size / 1024);
      callback(dataUrl, file.name, sizeKb);
    };
    reader.readAsDataURL(file);
    return;
  }

  // Raster Image: Resize and Compress via Canvas to avoid localStorage quota limits
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const maxDim = 900;
      let w = img.width;
      let h = img.height;

      if (w > maxDim || h > maxDim) {
        if (w > h) {
          h = Math.round((h * maxDim) / w);
          w = maxDim;
        } else {
          w = Math.round((w * maxDim) / h);
          h = maxDim;
        }
      }

      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0, w, h);

      // Preserve PNG transparency if PNG, else optimal JPEG
      const isPng = file.type === "image/png" || file.name.toLowerCase().endsWith(".png");
      const mime = isPng ? "image/png" : "image/jpeg";
      const quality = isPng ? undefined : 0.88;
      const optimizedDataUrl = canvas.toDataURL(mime, quality);

      // Estimate compressed size in KB
      const approxKb = Math.round((optimizedDataUrl.length * 3 / 4) / 1024);
      callback(optimizedDataUrl, file.name, approxKb);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function handleImageFileSelect(files) {
  if (!files || files.length === 0) return;
  const file = files[0];

  if (!file.type.startsWith("image/") && !file.name.match(/\.(png|jpg|jpeg|webp|svg|bmp)$/i)) {
    playSound("punch");
    showToast("يرجى اختيار ملف صورة صالح (PNG, JPG, WEBP, SVG)", "error");
    return;
  }

  showToast("جاري معالجة وضبط أبعاد الصورة... ⏳");

  optimizeAndProcessImage(file, async (dataUrl, fileName, sizeKb) => {
    const cloudUrl = await uploadProductImageIfNeeded(dataUrl);
    if (cloudUrl && !cloudUrl.startsWith("data:")) dataUrl = cloudUrl;
    const hiddenInput = document.getElementById("prodFormImage");
    const previewBox = document.getElementById("dropZonePreview");
    const promptBox = document.getElementById("dropZonePrompt");
    const previewImg = document.getElementById("dropZonePreviewImg");
    const nameEl = document.getElementById("dropZoneFileName");
    const sizeEl = document.getElementById("dropZoneFileSize");

    if (hiddenInput) hiddenInput.value = dataUrl;
    if (previewImg) previewImg.src = dataUrl;
    if (nameEl) nameEl.textContent = fileName;
    if (sizeEl) sizeEl.textContent = `${sizeKb} KB • تم ضبط الحجم بنجاح`;

    if (promptBox) promptBox.classList.add("hidden");
    if (previewBox) previewBox.classList.remove("hidden");

    playSound("success");
    showToast(`تم تحميل الصورة بنجاح (${sizeKb} KB) 📸`);
  });
}

function removeDroppedImage() {
  const hiddenInput = document.getElementById("prodFormImage");
  const previewBox = document.getElementById("dropZonePreview");
  const promptBox = document.getElementById("dropZonePrompt");
  const previewImg = document.getElementById("dropZonePreviewImg");
  const fileInput = document.getElementById("prodFormFileInput");
  const presetSelect = document.getElementById("prodFormImagePreset");
  const manualInput = document.getElementById("prodFormImageManual");

  if (hiddenInput) hiddenInput.value = "";
  if (fileInput) fileInput.value = "";
  if (previewImg) previewImg.src = "";
  if (presetSelect) presetSelect.value = "";
  if (manualInput) manualInput.value = "";

  if (previewBox) previewBox.classList.add("hidden");
  if (promptBox) promptBox.classList.remove("hidden");

  playSound("click");
}

function handlePresetImageSelect(path) {
  if (!path) return;
  const hiddenInput = document.getElementById("prodFormImage");
  const previewBox = document.getElementById("dropZonePreview");
  const promptBox = document.getElementById("dropZonePrompt");
  const previewImg = document.getElementById("dropZonePreviewImg");
  const nameEl = document.getElementById("dropZoneFileName");
  const sizeEl = document.getElementById("dropZoneFileSize");

  if (hiddenInput) hiddenInput.value = path;
  if (previewImg) previewImg.src = path;
  if (nameEl) nameEl.textContent = path.split("/").pop();
  if (sizeEl) sizeEl.textContent = "صورة معتمدة من مكتبة الكتالوج";

  if (promptBox) promptBox.classList.add("hidden");
  if (previewBox) previewBox.classList.remove("hidden");

  playSound("click");
  showToast("تم اختيار صورة من مكتبة المتجر! ✓");
}

function handleManualImageInput(url) {
  if (!url || url.trim() === "") return;
  const cleanUrl = url.trim();
  const hiddenInput = document.getElementById("prodFormImage");
  const previewBox = document.getElementById("dropZonePreview");
  const promptBox = document.getElementById("dropZonePrompt");
  const previewImg = document.getElementById("dropZonePreviewImg");
  const nameEl = document.getElementById("dropZoneFileName");
  const sizeEl = document.getElementById("dropZoneFileSize");

  if (hiddenInput) hiddenInput.value = cleanUrl;
  if (previewImg) previewImg.src = cleanUrl;
  if (nameEl) nameEl.textContent = "رابط صورة خارجي";
  if (sizeEl) sizeEl.textContent = "رابط مباشر";

  if (promptBox) promptBox.classList.add("hidden");
  if (previewBox) previewBox.classList.remove("hidden");
}

function initDragAndDropListeners() {
  const dropZone = document.getElementById("prodDropZone");
  if (dropZone) {
    ["dragenter", "dragover"].forEach(eventName => {
      dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.add("dragover");
      });
    });

    ["dragleave", "dragend"].forEach(eventName => {
      dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.remove("dragover");
      });
    });

    dropZone.addEventListener("drop", (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropZone.classList.remove("dragover");
      if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleImageFileSelect(e.dataTransfer.files);
      }
    });
  }

  // Global Window Drag & Drop Overlay
  let dragCounter = 0;
  const overlay = document.getElementById("globalDragOverlay");

  window.addEventListener("dragenter", (e) => {
    if (e.dataTransfer && e.dataTransfer.types && Array.from(e.dataTransfer.types).includes("Files")) {
      dragCounter++;
      if (overlay) {
        overlay.classList.remove("opacity-0", "pointer-events-none");
      }
    }
  });

  window.addEventListener("dragover", (e) => {
    if (e.dataTransfer && e.dataTransfer.types && Array.from(e.dataTransfer.types).includes("Files")) {
      e.preventDefault();
    }
  });

  window.addEventListener("dragleave", (e) => {
    dragCounter--;
    if (dragCounter <= 0) {
      dragCounter = 0;
      if (overlay) {
        overlay.classList.add("opacity-0", "pointer-events-none");
      }
    }
  });

  window.addEventListener("drop", (e) => {
    e.preventDefault();
    dragCounter = 0;
    if (overlay) {
      overlay.classList.add("opacity-0", "pointer-events-none");
    }

    const files = e.dataTransfer ? e.dataTransfer.files : null;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type.startsWith("image/") || file.name.match(/\.(png|jpg|jpeg|webp|svg|bmp)$/i)) {
        // Open modal if not open
        const modal = document.getElementById("adminProductFormModal");
        if (!modal || modal.classList.contains("hidden")) {
          openAddProductModal();
        }
        handleImageFileSelect([file]);
        playSound("punch");
        showToast("تم إفلات الصورة بنجاح! أكمل بيانات العتاد 🦁");
      }
    }
  });
}

function openAddProductModal() {
  editingProductId = null;
  document.getElementById("productModalTitle").textContent = "إضافة منتج قتالي جديد";
  
  document.getElementById("prodFormName").value = "";
  document.getElementById("prodFormNameEn").value = "";
  document.getElementById("prodFormCategory").value = "hand";
  document.getElementById("prodFormPrice").value = "";
  document.getElementById("prodFormOldPrice").value = "";
  document.getElementById("prodFormBadge").value = "";
  document.getElementById("prodFormSizes").value = "12oz, 14oz, 16oz";
  document.getElementById("prodFormColors").value = "أسود ملكي, ذهبي ميتاليك";
  document.getElementById("prodFormDesc").value = "";

  // Reset drag and drop image state
  removeDroppedImage();

  const modal = document.getElementById("adminProductFormModal");
  modal.classList.remove("hidden");
  setTimeout(() => modal.classList.remove("opacity-0"), 10);
  playSound("swoosh");
}

function editProductModal(id) {
  const p = state.products.find(item => item.id === id);
  if (!p) return;

  editingProductId = id;
  document.getElementById("productModalTitle").textContent = `تعديل عتاد: ${p.name}`;

  document.getElementById("prodFormName").value = p.name || "";
  document.getElementById("prodFormNameEn").value = p.nameEn || "";
  document.getElementById("prodFormCategory").value = p.category || "hand";
  document.getElementById("prodFormPrice").value = p.price || "";
  document.getElementById("prodFormOldPrice").value = p.oldPrice || "";
  document.getElementById("prodFormBadge").value = p.badge || "";
  document.getElementById("prodFormSizes").value = (p.sizes || []).join(", ");
  document.getElementById("prodFormColors").value = (p.colors || []).join(", ");
  document.getElementById("prodFormDesc").value = p.description || "";

  // Display existing product image in Drag & Drop preview
  const hiddenInput = document.getElementById("prodFormImage");
  const previewBox = document.getElementById("dropZonePreview");
  const promptBox = document.getElementById("dropZonePrompt");
  const previewImg = document.getElementById("dropZonePreviewImg");
  const nameEl = document.getElementById("dropZoneFileName");
  const sizeEl = document.getElementById("dropZoneFileSize");

  if (p.image) {
    if (hiddenInput) hiddenInput.value = p.image;
    if (previewImg) previewImg.src = p.image;
    if (nameEl) nameEl.textContent = p.name;
    if (sizeEl) sizeEl.textContent = "الصورة المعتمدة للعتاد";
    if (promptBox) promptBox.classList.add("hidden");
    if (previewBox) previewBox.classList.remove("hidden");
  } else {
    removeDroppedImage();
  }

  const modal = document.getElementById("adminProductFormModal");
  modal.classList.remove("hidden");
  setTimeout(() => modal.classList.remove("opacity-0"), 10);
  playSound("swoosh");
}

function closeProductFormModal() {
  const modal = document.getElementById("adminProductFormModal");
  if (!modal) return;
  modal.classList.add("opacity-0");
  setTimeout(() => modal.classList.add("hidden"), 300);
}

function saveProductFromForm(e) {
  if (e) e.preventDefault();

  const name = document.getElementById("prodFormName")?.value.trim();
  const nameEn = document.getElementById("prodFormNameEn")?.value.trim();
  const category = document.getElementById("prodFormCategory")?.value;
  const price = parseFloat(document.getElementById("prodFormPrice")?.value) || 0;
  const oldPriceVal = document.getElementById("prodFormOldPrice")?.value.trim();
  const oldPrice = oldPriceVal ? parseFloat(oldPriceVal) : null;
  const badge = document.getElementById("prodFormBadge")?.value.trim();
  const image = document.getElementById("prodFormImage")?.value.trim() || "./assets/logo.jpeg";
  const sizesRaw = document.getElementById("prodFormSizes")?.value.trim();
  const colorsRaw = document.getElementById("prodFormColors")?.value.trim();
  const desc = document.getElementById("prodFormDesc")?.value.trim();

  if (!name || price <= 0) {
    showToast("يرجى إدخال اسم المنتج وسعر صحيح", "warning");
    return;
  }

  const sizes = sizesRaw ? sizesRaw.split(",").map(s => s.trim()).filter(Boolean) : ["قياسي"];
  const colors = colorsRaw ? colorsRaw.split(",").map(c => c.trim()).filter(Boolean) : [];

  if (editingProductId) {
    // Update existing
    const p = state.products.find(item => item.id === editingProductId);
    if (p) {
      p.name = name;
      p.nameEn = nameEn;
      p.category = category;
      p.categoryLabel = getCategoryTitle(category);
      p.price = price;
      p.oldPrice = oldPrice;
      p.badge = badge;
      p.image = image;
      p.sizes = sizes;
      p.colors = colors;
      p.description = desc;
    }
    showToast("تم تحديث بيانات المنتج بنجاح");
  } else {
    // Create new
    const newProduct = {
      id: `gs-${category}-${Date.now().toString().slice(-4)}`,
      name,
      nameEn,
      category,
      categoryLabel: getCategoryTitle(category),
      price,
      oldPrice,
      rating: 5.0,
      reviews: 1,
      badge: badge || "جديد ⭐",
      badgeType: "gold",
      image,
      sizes,
      colors,
      description: desc,
      inStock: true
    };
    state.products.unshift(newProduct);
    showToast("تمت إضافة المنتج الجديد للكتالوج بنجاح! 🥊");
  }

  saveProducts();
  renderProducts();
  renderAdminProductsTable();
  renderAdminKPIs();
  closeProductFormModal();
  playSound("success");
}

function renderAdminOrdersTable() {
  const tbody = document.getElementById("adminOrdersTableBody");
  if (!tbody) return;

  if (state.orders.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="p-8 text-center text-zinc-500">
          لا توجد طلبات مسجلة بعد. عند إتمام طلب عبر واتساب، سيظهر هنا تلقائياً.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = state.orders.map(order => `
    <tr class="border-b border-zinc-800/60 hover:bg-zinc-800/30 transition-colors">
      <td class="p-3 text-right">
        <div class="font-black text-xs text-amber-400 font-mono">#${order.id}</div>
        <div class="text-[10px] text-zinc-500">${order.displayDate}</div>
      </td>
      <td class="p-3 text-right">
        <div class="font-bold text-xs text-white">${order.customer.name}</div>
        <div class="text-[11px] text-emerald-400 font-mono" dir="ltr">${order.customer.phone}</div>
        <div class="text-[10px] text-zinc-400">${order.customer.city}</div>
      </td>
      <td class="p-3 text-right max-w-xs">
        <div class="text-xs text-zinc-300 line-clamp-2">
          ${order.items.map(i => `${i.name} (${i.size}${i.color ? ' - ' + i.color : ''}) × ${i.quantity}`).join(" • ")}
        </div>
      </td>
      <td class="p-3 text-right">
        <span class="text-xs font-black text-amber-400 num-combat">
          ${order.grandTotal ? order.grandTotal.toLocaleString("ar-EG") : 0} ${state.currency}
        </span>
      </td>
      <td class="p-3 text-center">
        <select 
          onchange="updateOrderStatus('${order.id}', this.value)" 
          class="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-700 text-xs font-bold text-zinc-300 focus:outline-none focus:border-amber-400 cursor-pointer"
        >
          <option value="جديد (New)" ${order.status === "جديد (New)" ? "selected" : ""}>جديد</option>
          <option value="قيد التجهيز" ${order.status === "قيد التجهيز" ? "selected" : ""}>قيد التجهيز</option>
          <option value="تم الشحن" ${order.status === "تم الشحن" ? "selected" : ""}>تم الشحن</option>
          <option value="مكتمل" ${order.status === "مكتمل" ? "selected" : ""}>مكتمل</option>
        </select>
      </td>
      <td class="p-3 text-center">
        <button onclick="deleteOrder('${order.id}')" class="p-1.5 rounded-lg bg-zinc-800 hover:bg-red-900/60 text-red-400 text-xs cursor-pointer" title="حذف الطلب">
          🗑️
        </button>
      </td>
    </tr>
  `).join("");
}

function updateOrderStatus(orderId, newStatus) {
  const order = state.orders.find(o => o.id === orderId);
  if (!order) return;
  order.status = newStatus;
  saveOrders();
  playSound("click");
  showToast(`تم تحديث حالة الطلب #${orderId} إلى "${newStatus}"`);
}

function deleteOrder(orderId) {
  if (!confirm("هل أنت متأكد من حذف هذا السجل نهائياً؟")) return;
  state.orders = state.orders.filter(o => o.id !== orderId);
  saveOrders();
  renderAdminOrdersTable();
  renderAdminKPIs();
  playSound("punch");
  showToast("تم حذف سجل الطلب");
}

function clearAllOrders() {
  if (state.orders.length === 0) return;
  if (!confirm("هل أنت متأكد من مسح جميع سجلات الطلبات؟")) return;
  state.orders = [];
  saveOrders();
  renderAdminOrdersTable();
  renderAdminKPIs();
  playSound("punch");
  showToast("تم مسح كافة الطلبات");
}

function populateAdminSettings() {
  const phoneInput = document.getElementById("settingsPhoneInput");
  const pinInput = document.getElementById("settingsPinInput");
  const currencyInput = document.getElementById("settingsCurrencyInput");

  if (phoneInput) phoneInput.value = state.storePhone;
  if (pinInput) pinInput.value = state.adminPin;
  if (currencyInput) currencyInput.value = state.currency;
}

function saveStoreSettings(e) {
  if (e) e.preventDefault();

  const phone = document.getElementById("settingsPhoneInput")?.value.trim();
  const pin = document.getElementById("settingsPinInput")?.value.trim();
  const currency = document.getElementById("settingsCurrencyInput")?.value.trim();

  if (phone) state.storePhone = phone.replace(/[^0-9]/g, "");
  if (pin && pin.length >= 4) state.adminPin = pin;
  if (currency) state.currency = currency;

  saveSettings();
  renderProducts();
  renderCartDrawer();
  playSound("success");
  showToast("تم حفظ إعدادات المتجر ورقم الواتساب بنجاح! ✅");
}

function resetCatalogToDefault() {
  if (!confirm("تحذير: هل أنت متأكد من استعادة المنتجات الأصلية؟ سيتم تحديث الكتالوج لكافة المنتجات بالأسعار الحقيقية.")) return;

  state.products = [...INITIAL_PRODUCTS];
  saveProducts();
  localStorage.setItem("gstools_catalog_v", CATALOG_VERSION);
  renderProducts();
  renderAdminProductsTable();
  renderAdminKPIs();
  playSound("punch");
  showToast("تمت استعادة الكتالوج الأصلي المعتمد بالكامل! 🦁");
}

function exportStoreData() {
  const data = {
    version: CATALOG_VERSION,
    store: "GStools Elite Combat Sports",
    exportDate: new Date().toISOString(),
    phone: state.storePhone,
    products: state.products,
    orders: state.orders
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `GStools-Backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  playSound("success");
  showToast("تم تنزيل النسخة الاحتياطية بنجاح 📁");
}

// ==========================================
// 11. Audio Toggle & Modals
// ==========================================
function toggleSound() {
  state.soundEnabled = !state.soundEnabled;
  localStorage.setItem("gstools_sound", JSON.stringify(state.soundEnabled));
  updateSoundIcon();
  if (state.soundEnabled) {
    playSound("click");
    showToast("تم تفعيل المؤثرات الصوتية 🔊");
  } else {
    showToast("تم كتم المؤثرات الصوتية 🔇", "warning");
  }
}

function updateSoundIcon() {
  const btn = document.getElementById("soundToggleBtn");
  if (!btn) return;
  btn.textContent = state.soundEnabled ? "🔊" : "🔇";
  btn.title = state.soundEnabled ? "كتم الصوت" : "تفعيل الصوت";
}

function toggleSizeGuideModal(open) {
  const modal = document.getElementById("sizeGuideModal");
  if (!modal) return;
  if (open) {
    modal.classList.remove("hidden");
    setTimeout(() => modal.classList.remove("opacity-0"), 10);
    playSound("swoosh");
  } else {
    modal.classList.add("opacity-0");
    setTimeout(() => modal.classList.add("hidden"), 300);
  }
}

// Available Image Assets in assets/products
const AVAILABLE_IMAGE_ASSETS = [
  "1.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg",
  "2.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg","26.jpg","27.jpg","28.jpg","29.jpg",
  "3.jpg","30.jpg","31 (2).png","31 (3).png","31 (4).png","31 (5).png","31 (6).png","31 (7).png","31 (8).png","31 (9).png",
  "31.jpg","31.png","32.jpg","34.jpg","35.jpg","36.jpg","37.jpg","38.jpg","39.jpg","4.jpg","40.jpg","41.jpg","42.jpg","43.jpg",
  "5.jpg","6.jpg","7.jpg","8.jpg","9.jpg",
  "Black and Gold Top King Boxing Glove.png","Black Top King Boxing Glove.png","Black TOPKING Boxing Glove.png",
  "Blue Excalibur Boxing Glove (1).png","Blue Excalibur Boxing Glove.png","Blue YALON Boxing Glove.png",
  "Classic Black-and-White Boxing Glove.png","Excalibur Blue Boxing Glove.png","Excalibur Fight Better Boxing Glove.png",
  "Excalibur Gold-Dot Boxing Glove.png","Red Excalibur Boxing Glove.png","White and Gold Boxing Glove.png","White Excalibur Boxing Glove (1).png",
  "Gemini_Generated_Image (1).jpeg","Gemini_Generated_Image (10).jpeg","Gemini_Generated_Image (11).jpeg","Gemini_Generated_Image (12).jpeg",
  "Gemini_Generated_Image (14).jpeg","Gemini_Generated_Image (15).jpeg","Gemini_Generated_Image (2).jpeg","Gemini_Generated_Image (3).jpeg",
  "Gemini_Generated_Image (4).jpeg","Gemini_Generated_Image (5).jpeg","Gemini_Generated_Image (6).jpeg","Gemini_Generated_Image (9).jpeg",
  "Gemini_Generated_Image.jpeg",
  "mouthguard-gold-pro.svg","mouthguard-ice-clear.svg","mouthguard-predator-black.svg",
  "WhatsApp Image 2026-10-18 at 12.14.06 AM (1).jpeg","WhatsApp Image 2026-10-18 at 12.14.06 AM (2).jpeg","WhatsApp Image 2026-10-18 at 12.14.06 AM.jpeg",
  "WhatsApp Image 2026-10-19 at 11.33.21 AM.jpeg","WhatsApp Image 2026-10-19 at 11.33.22 AM (1).jpeg","WhatsApp Image 2026-10-19 at 11.33.22 AM (2).jpeg",
  "WhatsApp Image 2026-10-19 at 11.33.22 AM (3).jpeg","WhatsApp Image 2026-10-19 at 11.33.22 AM (4).jpeg","WhatsApp Image 2026-10-19 at 11.33.22 AM.jpeg",
  "WhatsApp Image 2026-10-19 at 11.33.23 AM.jpeg","WhatsApp Image 2026-10-19 at 11.43.03 AM.jpeg","WhatsApp Image 2026-10-19 at 11.43.04 AM.jpeg"
];

function initAdminImagePresets() {
  const select = document.getElementById("prodFormImagePreset");
  if (!select) return;
  AVAILABLE_IMAGE_ASSETS.forEach(file => {
    const opt = document.createElement("option");
    opt.value = `./assets/products/${file}`;
    opt.textContent = file;
    select.appendChild(opt);
  });
}

// ==========================================
// 12. Application Initialization
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Load Persistence
  loadSavedState();

  // 2. Render local UI immediately; replace with cloud catalog when available.
  renderProducts();
  loadProductsFromSupabase().catch(error => console.error("Supabase catalog load failed:", error));
  // Store settings are public-readable so every visitor gets the same WhatsApp number and currency.
  loadSettingsFromSupabase().catch(error => console.error("Supabase settings load failed:", error));
  updateCartBadge();
  updateSoundIcon();
  initAdminImagePresets();
  initDragAndDropListeners();

  // 3. Init Sparks Canvas
  initHeroCanvas();

  // 4. Setup Admin Secret Triggers
  setupAdminSecretTriggers();

  // 5. Search & Sort Listeners
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value.trim();
      renderProducts();
    });
  }

  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      renderProducts();
      playSound("click");
    });
  }

  // 6. Close modals on backdrop click or Escape key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProductQuickView();
      closeCheckoutModal();
      closeOrderSuccessModal();
      toggleSizeGuideModal(false);
      toggleCartDrawer(false);
      closeAdminAuthModal();
      closeProductFormModal();
    }
  });

  // 7. Ensure User Interaction unlocks Audio Context
  document.body.addEventListener("click", () => {
    getAudioContext();
  }, { once: true });
});
