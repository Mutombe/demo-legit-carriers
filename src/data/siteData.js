export const designTokens = {
  heroStyle: "cinematic",
  typography: { heading: "Playfair Display", body: "DM Sans", display: "Playfair Display" },
  effects: { noise: true, glassmorphism: "none", floatingShapes: false, scrollProgress: true, meshGradient: false, gradientBorders: false, cursorGlow: false },
  animationPreset: "dramatic", serviceCardStyle: "overlay", projectGridStyle: "masonry", testimonialStyle: "carousel", statsStyle: "overlay", bgPattern: "none",
  homeSectionOrder: ["hero","marquee","services","portfolio","stats","about","whyChooseUs","testimonials","cta"],
};

const siteData = {
  business: {
    name: "Legit Carriers", legalName: "Legit Carriers", tagline: "Moving Zimbabwe Forward",
    description: "Moving Zimbabwe Forward",
    phone: "+263 78 535 9413", phoneRaw: "+263785359413", whatsappNumber: "263785359413", email: "info@legitcarriers.co.zw",
    address: "Suite 13, 11th Floor, Causeway Building, Harare, Zimbabwe", country: "Zimbabwe", city: "Harare",
    rating: 5.0, ratingRounded: 5, reviewCount: 10, established: "2019", yearsExperience: "5+", projectsCompleted: "1000+", employees: "20+",
    coordinates: { lat: -17.83, lng: 31.05 },
    hours: [{ day: "Monday - Friday", time: "8:00 AM - 5:00 PM" }, { day: "Saturday", time: "8:00 AM - 1:00 PM" }, { day: "Sunday", time: "Closed" }],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.05!3d-17.83",
    cookieConsentKey: "legit-carriers-consent",
    socialLinks: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  navbar: { logoImage: null, logoLine1: "Legit", logoLine2: "Carriers" },
  hero: {
    badge: "Harare's Trusted Freight & Logistics Partner",
    titleParts: [{ text: "MOVING " }, { text: "ZIMBABWE", highlight: true }, { text: " FORWARD." }],
    subtitle: "Moving Zimbabwe Forward.",
    ctaPrimary: "Request a Quote", ctaSecondary: "Track a Shipment", trustBadge: "1,000+ Deliveries",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=1920&q=85", alt: "Legit Carriers - professional service" },
      { url: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=1920&q=85", alt: "Legit Carriers - professional service" },
      { url: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=1920&q=85", alt: "Legit Carriers - professional service" }
    ],
  },
  stats: [
    { number: "1000+", label: "Deliveries Completed" },
    { number: "5+", label: "Years Operating" },
    { number: "99%", label: "On-Time Rate" },
    { number: "15+", label: "Fleet Vehicles" }
  ],
  servicesPreview: [
    { title: "Freight & Haulage", desc: "Long-distance freight transport across Zimbabwe, Zambia, Mozambique, and South Africa with GPS-tracked fleets.", icon: "Rocket" },
    { title: "Warehousing", desc: "Secure, climate-controlled storage facilities with inventory management and fulfilment services.", icon: "Star" },
    { title: "Distribution", desc: "Last-mile delivery and regional distribution networks for FMCG, industrial, and agricultural clients.", icon: "ShieldCheck" },
    { title: "Customs Clearance", desc: "Licensed clearing agents handling all documentation, duties, and border procedures for import and export.", icon: "Buildings" },
    { title: "Cross-Border Transport", desc: "Dedicated SADC corridor services with experienced drivers and compliant documentation.", icon: "Target" },
    { title: "Express Delivery", desc: "Same-day and next-day delivery within Harare and major Zimbabwean cities.", icon: "Lightbulb" }
  ],
  services: {
    heroTitle: "Our Services", heroSubtitle: "Comprehensive solutions delivered with expertise and care.",
    items: [
      { title: "Freight & Haulage", slug: "freight-haulage", desc: "Long-distance freight transport across Zimbabwe, Zambia, Mozambique, and South Africa with GPS-tracked fleets. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80" },
      { title: "Warehousing", slug: "warehousing", desc: "Secure, climate-controlled storage facilities with inventory management and fulfilment services. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80" },
      { title: "Distribution", slug: "distribution", desc: "Last-mile delivery and regional distribution networks for FMCG, industrial, and agricultural clients. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80" },
      { title: "Customs Clearance", slug: "customs-clearance", desc: "Licensed clearing agents handling all documentation, duties, and border procedures for import and export. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80" },
      { title: "Cross-Border Transport", slug: "cross-border-transport", desc: "Dedicated SADC corridor services with experienced drivers and compliant documentation. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80" },
      { title: "Express Delivery", slug: "express-delivery", desc: "Same-day and next-day delivery within Harare and major Zimbabwean cities. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80" }
    ],
  },
  projects: {
    heroTitle: "Our Portfolio", heroSubtitle: "A selection of our finest work.",
    items: [
      { title: "Cross-Border Freight", slug: "cross-border--freight", category: "Freight", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80", images: ["https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80"] },
      { title: "Warehouse Setup", slug: "warehouse--setup", category: "Warehouse", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80", images: ["https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80"] },
      { title: "City Distribution", slug: "city--distribution", category: "Distribution", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80", images: ["https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80"] },
      { title: "Customs Clearance", slug: "customs--clearance", category: "Cross-Border", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80", images: ["https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80"] },
      { title: "Express Delivery", slug: "express--delivery", category: "Express", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80", images: ["https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80"] },
      { title: "Fleet Deployment", slug: "fleet--deployment", category: "Customs", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80", images: ["https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80"] },
      { title: "Agricultural Transport", slug: "agricultural--transport", category: "Industrial", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80", images: ["https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80"] },
      { title: "Industrial Logistics", slug: "industrial--logistics", category: "Agricultural", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80", images: ["https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80"] }
    ],
  },
  homeTestimonials: [
    { text: "Outstanding service from Legit Carriers. Professional, thorough, and delivered exactly what was promised. I would not hesitate to recommend them to anyone.", name: "Tendai Moyo", role: "Satisfied Client", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
    { text: "We have been using Legit Carriers for years and the quality has never dropped. Consistent excellence and genuine care for their clients.", name: "Grace Mutasa", role: "Business Owner", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
    { text: "From the initial consultation to final delivery, every step was handled with professionalism. Legit Carriers sets the standard in their industry.", name: "James Karonga", role: "Property Owner", rating: 5, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" },
    { text: "The team at Legit Carriers went above and beyond our expectations. Their expertise and attention to detail are truly impressive.", name: "Patricia Sibanda", role: "Corporate Client", rating: 5, avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80" },
    { text: "I have referred Legit Carriers to everyone I know. Their combination of skill, integrity, and fair pricing is unmatched in Harare.", name: "Michael Chigwedere", role: "Repeat Client", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" }
  ],
  reviews: {
    heroTitle: "Client Reviews", heroSubtitle: "What our clients say about our work.",
    items: [
      { text: "Outstanding service. Professional and delivered exactly what was promised.", name: "Tendai Moyo", role: "Satisfied Client", rating: 5 },
      { text: "Consistent excellence over years of working together. Genuine care for clients.", name: "Grace Mutasa", role: "Business Owner", rating: 5 },
      { text: "Every step handled with professionalism. Legit Carriers sets the standard.", name: "James Karonga", role: "Property Owner", rating: 5 },
      { text: "Above and beyond expectations. Expertise and attention to detail are impressive.", name: "Patricia Sibanda", role: "Corporate Client", rating: 5 },
      { text: "Skill, integrity, and fair pricing unmatched in Harare. Highly recommended.", name: "Michael Chigwedere", role: "Repeat Client", rating: 5 },
      { text: "Exceptional quality and service. Will definitely use again.", name: "Angela Mhembere", role: "New Client", rating: 5 }
    ],
  },
  about: {
    heroTitle: "Our Story", heroSubtitle: "Built on expertise, driven by quality.",
    story: ["Legit Carriers launched in 2019 with a fleet of three trucks and an unwavering commitment to on-time delivery. Today, from our 11th-floor office in Causeway Building, we manage logistics across the SADC region.", "Over 1,000 deliveries with a perfect 5.0 Google rating proves our promise: your cargo, on time, every time.", "We are committed to delivering results that exceed expectations, every single time."],
    values: [
      { title: "Quality First", desc: "Every project meets our exacting standards before we consider it complete." },
      { title: "Client Focus", desc: "Your satisfaction is our measure of success. We listen, we deliver, we follow up." },
      { title: "Expert Team", desc: "Certified professionals with years of specialised experience in their craft." },
      { title: "Fair Pricing", desc: "Transparent quotes with no hidden costs. The price we quote is the price you pay." },
    ],
    team: [
      { name: "David Moyo", role: "Managing Director", bio: "Over 15 years of industry experience.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Sarah Mutasa", role: "Operations Manager", bio: "Ensures every project runs smoothly.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
      { name: "Peter Chimwanda", role: "Lead Specialist", bio: "Master craftsman with decades of expertise.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
      { name: "Lisa Karonga", role: "Client Relations", bio: "Dedicated to ensuring every client receives premium service.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    ],
  },
  whyChooseUs: { title: "Why Legit", points: [{ title: "Perfect Track Record", desc: "5.0 Google rating and 99% on-time delivery rate." },{ title: "GPS Tracked Fleet", desc: "Real-time visibility on every shipment." },{ title: "SADC Coverage", desc: "Zimbabwe, Zambia, Mozambique, South Africa, and Botswana." },{ title: "Licensed & Insured", desc: "Full cargo insurance and customs clearing licences." }] },
  featuredProjects: [{ title: "Cross-Border Freight", image: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80", category: "Freight" },{ title: "Warehouse Setup", image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80", category: "Warehouse" },{ title: "City Distribution", image: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80", category: "Distribution" }],
  careers: { heroTitle: "Join Our Team", heroSubtitle: "We are always looking for talented people.", positions: [
    { title: "Specialist", department: "Operations", location: "Harare", type: "Full-time", desc: "Join our team of skilled professionals." },
    { title: "Client Consultant", department: "Sales", location: "Harare", type: "Full-time", desc: "Help clients with expert advice." },
  ] },
  contact: { heroTitle: "Get In Touch", heroSubtitle: "Visit us or reach out for a free consultation.", branches: [
    { name: "Harare Office", address: "Suite 13, 11th Floor, Causeway Building, Harare, Zimbabwe", phone: "+263 78 535 9413", email: "info@legitcarriers.co.zw" },
  ] },
  homeCta: {
    title: "YOUR CARGO. OUR COMMITMENT.", subtitle: "Freight, warehousing, customs clearance, and cross-border transport. Legit Carriers moves Zimbabwe forward.",
    ctaPrimary: "Request a Quote", ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Legit Carriers! I need a logistics quote.",
    backgroundImage: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=1920&q=85",
  },
  footer: { description: "Harare's trusted freight and logistics partner since 2019.", copyright: "Legit Carriers" },
};

export default siteData;
