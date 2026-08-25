export type Branch = {
  slug: string;
  area: string;
  city: string;
  address: string;
  phone: string;
  hours: string;
  mapQuery: string;
  intro: string;
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
  },
];

export type Service = {
  slug: string;
  name: string;
  duration: string;
  price: string;
  description: string;
};

// TODO: Replace with your real services and pricing
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
    duration: "60–90 min",
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
    duration: "75 min",
    price: "₹2,299",
    description:
      "Body-to-body therapy performed by trained professionals in a private, comfortable setting.",
  },
  {
    slug: "couple-massage",
    name: "Couple Massage in Delhi",
    duration: "90 min",
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
  { title: "Foreigner Therapist" },
  { title: "5 Star Hotels Spa" },
  { title: "Home Spa" },
  { title: "Thai Massage" },
  { title: "B2B Therapy" },
  { title: "Full Body Massage" },
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
    features: ["Oil Massage", "Cream Massage", "Private Suite", "B2B Massage", "120 min Session"],
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