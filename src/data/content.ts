export const SITE = {
  name: "Grace and Hope Children's Home",
  shortName: "Grace & Hope",
  tagline: "We make a life by what we give.",
  location: "Nyabera Got Village, Awendo, Kenya",
  email: "gracehope647@gmail.com",
  facebook: "Grace and Hope Children's Home",
  facebookUrl: "https://www.facebook.com/search/top?q=Grace%20and%20Hope%20Children%27s%20Home",
  whatsapp: "+254718572537",
  whatsappDisplay: "+254 718 572 537",
  website: "www.graceandhopekenya.org",
};

export const waLink = (text: string) =>
  `https://wa.me/254718572537?text=${encodeURIComponent(text)}`;

export const DONATE_METHODS = [
  {
    id: "mpesa",
    name: "M-Pesa",
    badge: "Kenya",
    detail: "+254 718 572 537",
    copyValue: "+254718572537",
    note: "Send directly via M-Pesa — the fastest way for gifts within Kenya.",
  },
  {
    id: "bank",
    name: "National Bank of Kenya",
    badge: "Bank Transfer",
    detail: "ACC: 01503217409300",
    copyValue: "01503217409300",
    note: "Account name: Grace and Hope Children's Home.",
  },
  {
    id: "paypal",
    name: "PayPal",
    badge: "International",
    detail: "graceandhopechildrenhome2024@gmail.com",
    copyValue: "graceandhopechildrenhome2024@gmail.com",
    note: "Send your gift to our PayPal account using this email address.",
  },
  {
    id: "remittance",
    name: "Sendwave · Remitly · Wise",
    badge: "International",
    detail: "+254 718 572 537",
    copyValue: "+254718572537",
    note: "Use Sendwave, Remitly or Wise (transfer) to the number above.",
  },
];

export const IMPACT_LEVELS = [
  { amount: "Any amount", impact: "Provides a meal for a child" },
  { amount: "Small gift", impact: "Covers school supplies for a week" },
  { amount: "Medium gift", impact: "Pays for a child's medical visit" },
  { amount: "Larger gift", impact: "Covers a term of school fees" },
  { amount: "Major gift", impact: "Supports a child's full care for a month" },
];

export const PROGRAMS = [
  {
    id: "rescue",
    icon: "Shield",
    title: "Emergency Rescue & Shelter",
    text: "When a child has nowhere to go, we are the first call. Working with local police and children's offices, we provide immediate, safe housing to children in crisis — 24 hours a day, 7 days a week.",
    image: "/images/gate-entrance.jpg",
  },
  {
    id: "meals",
    icon: "UtensilsCrossed",
    title: "Nutrition & Daily Meals",
    text: "Every child at Grace and Hope receives three nutritious meals a day. Good nutrition is the foundation of good health, learning, and growth. No child in our care goes to bed hungry.",
    image: "/images/meal-time.jpg",
  },
  {
    id: "medical",
    icon: "HeartPulse",
    title: "Medical Care",
    text: "Many of the children who come to us have been neglected or have untreated conditions. We provide urgent medical treatment, routine health check-ups, and emotional healing for every child placed in our care.",
    image: "/images/children-drinking.jpg",
  },
  {
    id: "education",
    icon: "GraduationCap",
    title: "Education Support",
    text: "We believe education is the most powerful tool we can give a child. We enroll every child in school and cover school fees, learning materials, uniforms, and all required school costs — with homework support and mentorship so every child thrives.",
    image: "/images/study-laptops.jpg",
  },
  {
    id: "clothing",
    icon: "Shirt",
    title: "Clothing & Basic Needs",
    text: "We provide every child with proper clothing, hygiene products, and all basic daily necessities — because every child deserves to feel cared for.",
    image: "/images/new-dresses.jpg",
  },
  {
    id: "spirit",
    icon: "Sparkles",
    title: "Emotional & Spiritual Support",
    text: "Beyond physical needs, we nurture hearts and minds. Through counseling, mentorship, faith-based activities, and a loving environment, we help every child heal from past trauma and build confidence for their future.",
    image: "/images/children-joy-cups.jpg",
  },
];

export const TEAM = [
  { name: "Stephen Wabuko", role: "Director / CBO Awendo", image: "/images/director-vision-wall.jpg" as string | null },
  { name: "Joseph Omondi", role: "Manager", image: null as string | null },
  { name: "Sarah Beatrice", role: "Cook", image: "/images/sarah-beatrice.jpg" as string | null },
  { name: "Cyprose Ochieng", role: "Cook", image: null as string | null },
  { name: "Viola Wabuko", role: "Staff", image: null as string | null },
];

export const VALUES = [
  { icon: "HeartHandshake", title: "Compassion", text: "Every child is treated with love and dignity." },
  { icon: "Flame", title: "Faith", text: "We trust God to provide and to guide our work." },
  { icon: "Users", title: "Community", text: "We work hand in hand with local authorities and families." },
  { icon: "Award", title: "Excellence", text: "We provide the highest standard of care possible." },
  { icon: "BadgeCheck", title: "Integrity", text: "Every donation is used transparently and purposefully." },
];

export const URGENT_NEEDS = [
  {
    icon: "UtensilsCrossed",
    title: "Food & Daily Meals",
    text: "Daily nutritious meals for all children in our care. Feeding a child every single day is our most consistent and urgent need.",
    image: "/images/meal-queue.jpg",
  },
  {
    icon: "BookOpen",
    title: "School Supplies",
    text: "Exercise books and pens, textbooks and learning materials, school bags and uniforms — everything a child needs to stay in class.",
    image: "/images/books-donation.jpg",
  },
  {
    icon: "HeartPulse",
    title: "Medical Care",
    text: "Some children arrive requiring urgent medical treatment. Funds for doctor visits, medication, and hospital care are always needed.",
    image: "/images/children-drinking.jpg",
  },
  {
    icon: "Shirt",
    title: "Clothing & Hygiene",
    text: "Many children arrive with nothing. We need clothing of all sizes and hygiene products to keep every child clean, healthy, and dignified.",
    image: "/images/new-dresses.jpg",
  },
  {
    icon: "Building2",
    title: "Building Expansion",
    text: "We urgently need to expand our facility to accommodate more children who need rescue.",
    image: "/images/construction-walls.jpg",
  },
];

export const ARRIVAL_STEPS = [
  { title: "The Call", text: "Local police or the children's office contacts us about a child with no safe place to stay." },
  { title: "A Warm Welcome", text: "The child is received warmly by our staff — safe, unafraid, and no longer alone." },
  { title: "A Hot Meal", text: "For many children, it is the first proper meal they have had in days." },
  { title: "Medical Check", text: "We assess the child's health and arrange urgent care immediately when needed." },
  { title: "Clothes & a Bed", text: "Clean clothes, and their own bed — a safe, warm place to rest, often for the first time." },
  { title: "Back to School", text: "Within days we begin school enrollment and settle each child into the rhythms of home." },
];

export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  body: string[];
  quote?: { text: string; author: string };
}

export const ARTICLES: Article[] = [
  {
    slug: "a-safe-place-to-sleep",
    title: "A Safe Place to Sleep: Why Shelter Changes Everything",
    category: "Our Work",
    date: "July 2026",
    readTime: "3 min read",
    excerpt: "For many children in Nyabera Got Village, the night is the most dangerous time. A safe place to sleep is not a luxury — it is a right.",
    image: "/images/dormitory-beds.jpg",
    body: [
      "For many children in Nyabera Got Village, the night is the most dangerous time. Without a home, a child is exposed to hunger, exploitation, and fear. At Grace and Hope Children's Home, we believe that a safe place to sleep is not a luxury — it is a right.",
      "When local police bring a child to our door, we don't ask questions about whether we have enough room. We open the door. We make a bed. We serve a meal. Because for that child, tonight might be the first night in weeks — or months — that they feel safe.",
      "Our dormitories are simple, but they are full of something no child should live without: peace. New mattresses on sturdy bunk beds. A blanket that belongs to them. The sound of other children breathing steadily in the dark — the sound of not being alone.",
      "This is why your support matters. This is why we exist. Every donation helps us keep our doors open — and keep the light on for every child who needs us.",
      "Will you help a child sleep safely tonight?",
    ],
  },
  {
    slug: "from-the-streets-to-the-classroom",
    title: "From the Streets to the Classroom: The Power of Education",
    category: "Education",
    date: "July 2026",
    readTime: "3 min read",
    excerpt: "For an orphaned child, going to school means having a routine, building friendships, discovering talents, and daring to dream about a future.",
    image: "/images/school-girl.jpg",
    body: [
      "Education is more than reading and writing. For an orphaned child, going to school means having a routine, building friendships, discovering talents, and daring to dream about a future.",
      "At Grace and Hope Children's Home, one of our top priorities is ensuring that every child is enrolled in school and stays in school — no matter what.",
      "But school fees are a real barrier. Without paid fees, a child cannot sit in class. Without learning materials, a child cannot keep up. Without a uniform, a child may be sent home.",
      "This is why we are urgently calling for donations toward school fees. Because a child's education cannot wait. Their future cannot be put on hold.",
      "When you pay a term of school fees, you are not buying books and lessons. You are buying back a childhood. You are telling a child who has lost everything: your future is still worth investing in.",
      "Give today and keep a child in class.",
    ],
  },
  {
    slug: "building-more-than-walls",
    title: "Building More Than Walls: The Story of Our New Storey Building",
    category: "Building Campaign",
    date: "July 2026",
    readTime: "4 min read",
    excerpt: "It started with a heartbreaking reality: more children need rescue than we have space to receive them. So we made a decision rooted in faith — we are going to build.",
    image: "/images/building-render-1.jpg",
    body: [
      "It started with a simple but heartbreaking reality: more children need rescue than we have space to receive them.",
      "At Grace and Hope Children's Home, we have always said yes to a child in need. But our current facility is stretched beyond its limits. Every week, we receive calls from police officers and child welfare workers — another child with nowhere to go.",
      "So we made a decision rooted in faith: we are going to build.",
      "Our goal is to construct a new storey building on Plot 361 — large enough to safely and comfortably house 66 orphaned and vulnerable children. A place with space to sleep, to study, to eat, to grow.",
      "We are believing God for $200,000 to make this building a reality. And we are inviting you to be part of this miracle. Every dollar you give is matched. Every brick you fund is a life changed.",
      "The foundations are already going in. Brick by brick, wall by wall, the dream is taking shape — carried by the hands of local builders and the prayers of our children.",
      "This building is not just a structure. It is a statement — that these children matter, that they are seen, and that they will not be forgotten.",
      "Join us. Give today.",
    ],
  },
  {
    slug: "we-make-a-life-by-what-we-give",
    title: "\u201CWe Make a Life by What We Give\u201D — The Heart Behind Grace and Hope",
    category: "Our Story",
    date: "June 2026",
    readTime: "3 min read",
    excerpt: "Grace and Hope are not just words on a sign. They are the two things every child who walks through our doors desperately needs.",
    image: "/images/director-children.jpg",
    body: [
      "The name says it all: Grace and Hope. These are not just words on a sign. They are the two things every child who walks through our doors desperately needs.",
      "Grace — the unconditional love and acceptance that says: you are welcome here, regardless of where you came from or what has happened to you.",
      "Hope — the belief that tomorrow can be better than today. That this child, despite everything they have faced, has a future worth fighting for.",
      "Since opening our doors in Nyabera Got Village, Kenya, our team — led by Director Stephen Wabuko, Manager Joseph Omondi, and our dedicated cooks and support staff — has worked tirelessly to give every child exactly that: grace and hope.",
      "We are not a perfect organization. But we are a passionate one. And with your support, we are changing lives — one child at a time.",
      "Thank you for believing in what we do. Thank you for giving.",
    ],
    quote: { text: "We make a life by what we give.", author: "The motto of Grace and Hope Children's Home" },
  },
  {
    slug: "the-first-24-hours",
    title: "The First 24 Hours: What Happens When a Child Arrives",
    category: "Our Work",
    date: "June 2026",
    readTime: "4 min read",
    excerpt: "When a police officer calls us about a child in need, the clock starts immediately. Here is what the first 24 hours look like.",
    image: "/images/children-group-home.jpg",
    body: [
      "When a police officer or child welfare worker calls us about a child in need, the clock starts immediately.",
      "Within hours, that child is brought to Grace and Hope Children's Home in Nyabera Got Village. Here is what the first 24 hours look like:",
      "Arrival — The child is welcomed warmly by our staff. We ensure they feel safe and not afraid.",
      "A Warm Meal — The first thing we do is feed them. For many children, this is the first proper meal they have had in days.",
      "Medical Check — Our staff assess the child's health. If urgent medical care is needed, we arrange it immediately.",
      "Clothing — If the child has arrived without adequate clothing, we provide them with clean clothes.",
      "A Bed — Every child gets their own bed — a safe, warm, comfortable place to rest.",
      "The Next Day — We begin the process of enrolling the child in school and integrating them into the routines of the home.",
      "This is what your donation makes possible. This is what grace looks like in action.",
      "Give today and help us be ready for the next child who needs us.",
    ],
  },
  {
    slug: "food-on-the-table",
    title: "Food on the Table: Why Feeding Our Children Is Our Daily Mission",
    category: "Nutrition",
    date: "June 2026",
    readTime: "3 min read",
    excerpt: "For the children at Grace and Hope, a plate of food is so much more than nutrition — it is a sign that someone cares.",
    image: "/images/meal-time.jpg",
    body: [
      "It seems simple. But for the children at Grace and Hope Children's Home, a plate of food is so much more than nutrition.",
      "It is a sign that someone cares. It is a routine that brings stability. It is fuel for a growing mind that needs to learn.",
      "Our dedicated cooks — Sarah Beatrice and Cyprose Ochieng — prepare meals for our children every single day with love and commitment. But keeping food on the table every day, for every child, requires ongoing support.",
      "Food costs are one of our most consistent and pressing needs. As we welcome more children into our home, the need grows. And yet, we have never turned a hungry child away — and with your help, we never will.",
      "Three meals a day. Every child. Every day. That is the promise your giving keeps.",
      "Will you help us set the table again tomorrow?",
    ],
  },
  {
    slug: "the-tommie-dees-library",
    title: "The Tommie Dees Library: A Room Where Dreams Take Root",
    category: "Education",
    date: "May 2026",
    readTime: "3 min read",
    excerpt: "Behind a mint-green door at the edge of our compound sits one of our proudest achievements — a library built for children who once owned nothing.",
    image: "/images/library.jpg",
    body: [
      "Behind a mint-green door at the edge of our compound sits one of the proudest corners of Grace and Hope Children's Home — The Tommie Dees Library.",
      "For a child who has grown up owning nothing, a library is a radical idea. It says: these books are here for you. This room is here for you. Your mind matters.",
      "Every evening, you will find our children here — bent over exercise books, sharing laptops, discovering stories. Older children help younger ones with their reading. Homework gets done. Questions get asked. Dreams get bigger.",
      "The library has become the quiet engine of our education program. Children who arrived unable to read are now devouring books. Children who had never touched a computer are learning digital skills that will carry them into secondary school and beyond.",
      "None of it would exist without friends who gave. Books, shelves, laptops, lighting — every detail was a gift. And every gift is still at work, every single evening.",
    ],
  },
  {
    slug: "clean-water-at-last",
    title: "Clean Water at Last: The Tank That Changed Our Days",
    category: "Milestones",
    date: "May 2026",
    readTime: "3 min read",
    excerpt: "A 10,000-litre water tank now stands at the heart of our compound — ending the daily walk for water and transforming life for dozens of children.",
    image: "/images/water-tank.jpg",
    body: [
      "Water is life — and until recently, water was also one of our heaviest daily burdens.",
      "Cooking for dozens of children, washing clothes, cleaning, bathing, drinking: every drop had to be fetched, carried, and rationed. It cost time, energy, and sometimes health.",
      "Thanks to the generosity of our friends, a 10,000-litre storage tank now stands at the heart of our compound, connected to gutters that harvest the rain from our roofs. What once took hours of carrying now flows from a tap.",
      "It may look like a simple black tank. To us, it is freedom — hours returned to study and play, safer water for drinking and cooking, and the dignity of a home that can care for its children well.",
      "Projects like this are what your giving builds: not handouts, but foundations. Brick by brick, tank by tank, book by book — a childhood rebuilt.",
    ],
  },
];

export const GALLERY = [
  { src: "/images/children-group-home.jpg", caption: "Our family in front of the home" },
  { src: "/images/children-joy-cups.jpg", caption: "Porridge time smiles" },
  { src: "/images/meal-queue.jpg", caption: "Lunch is served" },
  { src: "/images/new-dresses.jpg", caption: "New clothes day" },
  { src: "/images/study-night.jpg", caption: "Evening study in the library" },
  { src: "/images/kitchen-children.jpg", caption: "Outside the God Is Gracious Kitchen" },
  { src: "/images/dormitory-beds.jpg", caption: "A bed for every child" },
  { src: "/images/construction-roof.jpg", caption: "The new building rises" },
];
