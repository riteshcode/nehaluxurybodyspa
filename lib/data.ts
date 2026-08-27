export type Branch = {
  slug: string;
  area: string;
  city: string;
  address: string;
  phone: string;
  hours: string;
  mapQuery: string;
  intro: string;
  latitude?: number;  // NEW - add real coordinates when available
  longitude?: number; // NEW - add real coordinates when available
  image?: string;     // NEW - optional image for the branch
};

export const branches: Branch[] = [
  {
    slug: "noida",
    area: "Noida",
    city: "Delhi NCR",
    address: "Noida, Uttar Pradesh", // TODO: add exact address
    phone: "+91-8796519171",
    hours: "10:00 AM – 9:00 PM, All days",
    mapQuery: "Noida, Delhi NCR",
    intro:
      "Our Noida branch offers a full range of body massage and wellness rituals in a calm, private setting.",
    latitude: 28.5355,   // TODO: replace with exact branch coordinates
    longitude: 77.3910,  // TODO: replace with exact branch coordinates,
    image : "/images/branches/noida.jpg",
  },
  {
    slug: "connaught-place",
    area: "Connaught Place",
    city: "Delhi NCR",
    address: "Connaught Place, New Delhi", // TODO: add exact address
    phone: "+91-8796519171",
    hours: "10:00 AM – 9:00 PM, All days",
    mapQuery: "Connaught Place, New Delhi",
    intro:
      "Located in the heart of CP, this branch is a favourite for quick, premium therapy sessions.",
    latitude: 28.6315,
    longitude: 77.2167,
    image : "/images/branches/connaught-place.jpg",
  },
  {
    slug: "aerocity",
    area: "Aerocity",
    city: "Delhi NCR",
    address: "Aerocity, New Delhi", // TODO: add exact address
    phone: "+91-8796519171",
    hours: "10:00 AM – 9:00 PM, All days",
    mapQuery: "Aerocity, New Delhi",
    intro:
      "Our Aerocity branch is trusted by travellers and locals alike for a relaxing session close to the airport.",
    latitude: 28.5562,
    longitude: 77.1180,
    image : "/images/branches/aerocity.jpeg",
  },
  {
    slug: "dwarka",
    area: "Dwarka",
    city: "Delhi NCR",
    address: "Dwarka, New Delhi", // TODO: add exact address
    phone: "+91-8796519171",
    hours: "10:00 AM – 9:00 PM, All days",
    mapQuery: "Dwarka, New Delhi",
    intro:
      "Conveniently located in Dwarka, this branch is known for its deep tissue and couple spa sessions.",
    latitude: 28.5921,
    longitude: 77.0460,
    image : "/images/branches/dwarka.jpg",
  },
  {
    slug: "gurgaon",
    area: "Gurgaon",
    city: "Delhi NCR",
    address: "Gurgaon, Haryana", // TODO: add exact address
    phone: "+91-8796519171",
    hours: "10:00 AM – 9:00 PM, All days",
    mapQuery: "Gurgaon, Haryana",
    intro:
      "Our Gurgaon branch brings the full Neha Luxury experience to the corporate hub of NCR.",
    latitude: 28.4595,
    longitude: 77.0266,
    image : "/images/branches/gurgaon.jpg",
  },
  {
    slug: "karol-bagh",
    area: "Karol Bagh",
    city: "Delhi NCR",
    address: "Karol Bagh, New Delhi", // TODO: add exact address
    phone: "+91-8796519171",
    hours: "10:00 AM – 9:00 PM, All days",
    mapQuery: "Karol Bagh, New Delhi",
    intro:
      "A popular branch in Karol Bagh known for traditional massage therapies.",
    latitude: 28.6519,
    longitude: 77.1909,
    image : "/images/branches/karol-bagh.jpg",
  },
  {
    slug: "green-park",
    area: "Green Park",
    city: "Delhi NCR",
    address: "Green Park, New Delhi", // TODO: add exact address
    phone: "+91-8796519171",
    hours: "10:00 AM – 9:00 PM, All days",
    mapQuery: "Green Park, New Delhi",
    intro:
      "Our Green Park branch offers a quiet, upscale setting for premium wellness rituals.",
    latitude: 28.5595,
    longitude: 77.2065,
    image : "/images/branches/green-park.jpg",
  },
];

export type Service = {
  slug: string;
  name: string;
  duration: string;
  price: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: "sandwich-massage",
    name: "Sandwich Massage",
    duration: "60 min",
    price: "₹1,999",
    description:
      "A unique two-therapist massage technique that works on both sides of the body simultaneously.",
  },
  {
    slug: "hotel-home-spa",
    name: "Hotel & Home Spa",
    duration: "60 min",
    price: "₹2,499",
    description:
      "Professional spa therapists available at your hotel or home across Delhi NCR.",
  },
  {
    slug: "full-body-massage",
    name: "Full Body Massage",
    duration: "60 min",
    price: "₹1,799",
    description:
      "A complete full-body massage using warm oils to release tension and restore balance.",
  },
  {
    slug: "b2b-therapy",
    name: "B2B Therapy",
    duration: "60 min",
    price: "₹2,299",
    description:
      "Body-to-body therapy performed by trained professionals in a private, comfortable setting.",
  },
  {
    slug: "couple-massage",
    name: "Couple Massage in Delhi",
    duration: "60 min",
    price: "₹4,999",
    description:
      "A shared wellness experience for two in a private suite, with massage and steam.",
  },
];

export const brand = {
  name: "Neha Luxury Body Spa",
  phone: "+91-8796519171",
  whatsapp: "918796519171",
  tagline: "Restore. Renew. Reconnect.",
  address: "Central Market, Lajpat Nagar, Delhi 110024",
  email: "info@nehaluxurybodyspa.in",
  social: {
    linkedin: "#",
    whatsapp: "https://wa.me/918796519171",
    telegram: "#",
  },
};

export const specialties = [
  { title: "Foreigner Therapist", image: "/images/specialties/foreigner-therapist.jpg" },
  { title: "5 Star Hotels Spa", image: "/images/specialties/5-star-hotel-spa.jpg" },
  { title: "Home Spa", image: "/images/specialties/home-spa.jpg" },
  { title: "Thai Massage", image: "/images/specialties/thai-massage.jpg" },
  { title: "B2B Therapy", image: "/images/specialties/b2b-therapy.jpg" },
  { title: "Full Body Massage", image: "/images/specialties/full-body-massage.jpg" },
];

export const pricingPackages = [
  {
    name: "Spa Outlet",
    price: "₹1,499",
    period: "Per session",
    features: ["Oil Massage", "Cream Massage", "Shower", "60 min Consultation"],
    popular: false,
  },
  {
    name: "5 Star Hotel Outlet",
    price: "₹15,999",
    period: "Per session",
    features: ["Oil Massage", "Cream Massage", "Private Suite", "B2B Massage", "60 min Session"],
    popular: true,
  },
];

export const hotelPartners = [
  {
    name: "IBIS New Delhi, Aerocity",
    description:
      "Experience a refreshing massage therapy at the best spa in Aerocity, with premium hotel spa services near Delhi Airport.",
  },
  {
    name: "The Park New Delhi, C.P",
    description:
      "Enjoy rejuvenating massage in Delhi by expert therapists in a serene, elegant ambiance at The Park hotel spa.",
  },
];

export const topLocations = [
  "Aerocity", "Gurgaon", "Karol Bagh", "Rohini",
  "Noida", "Lajpat Nagar", "Dwarka", "Pitampura",
];



export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO format
  readTime: string;
  content: string[]; // array of paragraphs
};

export const blogPosts: BlogPost[] = [
  {
    slug: "benefits-of-regular-body-massage",
    title: "Benefits of Regular Body Massage",
    excerpt:
      "How consistent massage therapy helps your body and mind recover from daily stress — and why once-in-a-while isn't enough.",
    category: "Wellness",
    date: "2026-01-15",
    readTime: "5 min read",
    content: [
      "Most people think of massage as an occasional treat — something reserved for a birthday or a rough week. But the real benefits of massage therapy show up with consistency, not as a one-time fix. A single session can leave you relaxed for a day or two. A regular practice — every two to four weeks — changes how your body handles stress over the long run.",
      "Physically, massage helps release tension held in muscles that build up from long hours at a desk, poor posture, or repetitive movement. Techniques like kneading and deep pressure improve blood circulation, which helps deliver oxygen and nutrients to tired muscles while flushing out metabolic waste that contributes to soreness and stiffness.",
      "On the mental side, massage activates the parasympathetic nervous system — the part of your body responsible for the 'rest and digest' state, as opposed to 'fight or flight.' This is why people often feel a deep sense of calm during and after a session, along with better sleep quality in the days that follow.",
      "For people managing high-stress jobs or irregular schedules, spacing out sessions every few weeks tends to work better than waiting for stress to peak before booking one. Think of it less like a reward and more like maintenance — the same way you wouldn't wait for your car to break down before servicing it.",
      "If you're new to regular massage, start with a full body session to understand what your body responds to best, then adjust frequency and technique from there based on how you feel in the days after.",
    ],
  },
  {
    slug: "full-body-vs-deep-tissue-massage",
    title: "Full Body vs Deep Tissue Massage",
    excerpt:
      "Not all massages are the same. Here's how to tell which technique actually matches what your body needs right now.",
    category: "Guide",
    date: "2026-01-22",
    readTime: "4 min read",
    content: [
      "'I want a massage' is a bit like saying 'I want food' — technically true, but not specific enough to get you the right result. Full body massage and deep tissue massage are both popular, but they're designed for different needs, and picking the wrong one can leave you disappointed.",
      "A full body massage uses moderate, even pressure across the entire body with long, flowing strokes. It's designed for general relaxation, improved circulation, and stress relief. If your main goal is to unwind, sleep better, or simply reset after a long week, this is usually the better starting point.",
      "Deep tissue massage, on the other hand, targets the deeper layers of muscle and connective tissue. Therapists use slower strokes and firmer pressure to work through chronic tension, muscle knots, or tightness from an old injury. It's more therapeutic than relaxing in the moment — some people feel mild soreness the next day, similar to how you'd feel after a workout.",
      "A simple way to decide: if you're stressed but don't have specific pain points, go full body. If you have a nagging tight spot — a stiff neck from screen time, tight shoulders from lifting, or lower back tension from sitting all day — deep tissue will address it more directly.",
      "Many people alternate between the two depending on the week. It's worth mentioning any specific problem areas to your therapist before the session starts, so they can adjust pressure and technique accordingly.",
    ],
  },
  {
    slug: "couple-massage-wellness-date",
    title: "Couple Massage: The Perfect Wellness Date",
    excerpt:
      "Skip the usual dinner-and-movie routine. Here's why a shared spa session makes for a genuinely different kind of date.",
    category: "Lifestyle",
    date: "2026-01-30",
    readTime: "3 min read",
    content: [
      "Most date nights involve talking — dinner conversations, movie debates, planning the next outing. A couple massage flips that script entirely. It's one of the few experiences where you're together in the same room, sharing the same kind of calm, without needing to fill the silence.",
      "From a practical standpoint, a shared session in a private suite means you don't have to choose between spending time together and getting your own individual treatment. You get both — side-by-side tables, synchronized timing, and a shared post-massage glow that's hard to replicate with a typical outing.",
      "It's also a low-effort way to de-stress as a couple, especially for people managing busy work schedules where quality time often gets squeezed out. An hour of guided relaxation tends to leave couples more present with each other afterward than a meal where phones are half-checked under the table.",
      "If it's your first time booking one together, communicate any preferences beforehand — some people prefer identical pressure and pacing, while others want their own therapist to adjust based on individual tension points. Either way, it works.",
    ],
  },
  {
    slug: "signs-your-body-needs-a-massage",
    title: "5 Signs Your Body Needs a Massage",
    excerpt:
      "Tension doesn't always show up as pain. These quieter signals are worth paying attention to before they become bigger problems.",
    category: "Wellness",
    date: "2026-02-05",
    readTime: "4 min read",
    content: [
      "Muscle tension has a way of becoming background noise — you get used to it and stop noticing until it flares up as actual pain. Here are five quieter signs that your body is overdue for a massage, well before it gets to that point.",
      "1. Tension headaches that show up in the afternoon. If you notice a dull ache creeping in around your temples or the base of your skull by mid-afternoon, it's often linked to tightness in the neck and shoulders from posture, not just screen time or stress alone.",
      "2. Shallow sleep even after a full night in bed. Chronic muscle tension keeps your nervous system slightly activated, which can prevent you from reaching deeper, more restorative sleep stages — even if you're technically getting eight hours.",
      "3. A stiff first few minutes every morning. Waking up and needing to 'warm up' before you feel normal is a sign that muscles aren't fully relaxing overnight, often due to accumulated tightness that hasn't been released.",
      "4. Feeling 'wired but tired.' This combination — mentally alert but physically exhausted — often points to a nervous system stuck in a low-grade stress response, which massage can help shift back toward rest mode.",
      "5. Reduced range of motion you've simply adapted to. If turning your head fully or reaching overhead feels slightly restricted and you've just gotten used to working around it, that's tension your body has quietly accepted as normal.",
    ],
  },
  {
    slug: "thai-massage-101",
    title: "Thai Massage 101: History & Benefits",
    excerpt:
      "A guide to one of the oldest massage traditions in the world — what makes it different, and who it's best suited for.",
    category: "Guide",
    date: "2026-02-12",
    readTime: "5 min read",
    content: [
      "Thai massage has roots going back over two thousand years, drawing from Ayurvedic principles, traditional Chinese medicine, and yoga. Unlike Western-style massage, which typically involves lying still while a therapist works on your muscles, Thai massage is a more active, assisted practice — sometimes described as 'lazy person's yoga.'",
      "The therapist uses their hands, knees, legs, and feet to guide your body through a series of stretches, while also applying rhythmic pressure along energy lines the tradition refers to as 'sen.' Sessions are done fully clothed on a floor mat rather than a table, using loose, comfortable clothing.",
      "The combination of stretching and pressure work makes Thai massage particularly good for improving flexibility and joint mobility, alongside the usual benefits of reduced muscle tension and better circulation. People who sit for long hours or have tight hips and hamstrings often notice more range-of-motion improvement here than with a standard massage.",
      "It can feel more intense than a typical relaxation massage, since stretches are held and pressure is often firm. It's worth communicating your flexibility limits clearly before the session, especially if you have any existing joint issues.",
      "If you've never tried it, expect something different from a typical spa massage — less passive relaxation, more active full-body reset. Many people find it leaves them feeling looser and more mobile for days afterward.",
    ],
  },
  {
    slug: "how-often-should-you-get-a-massage",
    title: "How Often Should You Get a Massage?",
    excerpt:
      "The right frequency depends on your lifestyle, stress levels and goals — here's a practical framework to figure out yours.",
    category: "Guide",
    date: "2026-02-20",
    readTime: "4 min read",
    content: [
      "There's no single correct answer to how often you should get a massage — it depends on what you're trying to achieve. But there are useful starting points based on common goals, which you can adjust over time based on how your body responds.",
      "For general stress relief and maintenance, once every three to four weeks is a common baseline. This is frequent enough to prevent tension from building up significantly, without requiring a heavy time or budget commitment.",
      "If you're dealing with a specific issue — chronic shoulder tightness, recurring lower back tension, or recovering from an old injury — more frequent sessions (weekly or biweekly) for a short stretch of four to six weeks tends to produce better results than infrequent, spread-out visits.",
      "For people with physically demanding jobs, frequent travel, or high-stress work schedules, biweekly sessions often make more sense as an ongoing rhythm rather than a temporary fix, similar to how athletes treat recovery as part of training, not an afterthought.",
      "A simple way to check if your current frequency is working: pay attention to how you feel in the 5–7 days before your next scheduled session. If tension and stress are clearly building back up before then, it's a sign to shorten the gap between visits.",
    ],
  },
];