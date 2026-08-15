export const identity = {
  name: "NOUMAN ARSHAD",
  handle: "noman",
  role: "Digital Creator & Marketing Specialist",
  photo: "/images/nouman.jpeg",
  photoAlt: "Portrait of NOUMAN ARSHAD",
  location: {
    city: "Pir Mahal",
    district: "Toba Tek Singh",
    province: "Punjab",
    country: "Pakistan",
  },
  phone: "+92 302 6588766",
  phoneHref: "tel:+923026588766",
  email: "Nomanmasih616@gmail.com",
  emailHref: "mailto:Nomanmasih616@gmail.com",
  objective:
    "Dedicated and hardworking professional with a proven record of honesty and commitment. I always perform my duties with full attention, sincerity, and passion, leaving no room for complaints. Skilled in Web Development, Digital Marketing, SEO, and Graphic Design, with international experience from Big Marketing USA. My goal is to deliver quality results, build trust, and grow with the organization I serve.",
} as const;

export const languages = ["Urdu", "English", "Punjabi"] as const;

export const experience = [
  {
    role: "Supervisor",
    org: "Textile Mill",
    period: "2016 – 2018",
    years: "2 yrs",
    detail:
      "Managing workflow and staff in a textile mill.",
  },
  {
    role: "Marketing Assistant",
    org: "Local businesses",
    period: "2018 – 2019",
    years: "1 yr",
    detail:
      "Marketing field experience working with local businesses.",
  },
  {
    role: "Digital Creator & Marketing Specialist",
    org: "Big Marketing USA (remote)",
    period: "2019 – present",
    years: "3+ yrs",
    detail:
      "Web Development (WordPress), SEO, Blog Services, GoHighLevel funnels, Email Marketing, Social Media Management, Video Editing, Logo & Poster Design, Data Entry. International clients across USA and UK.",
  },
] as const;

export const education = [
  {
    degree: "Bachelor of Arts (BA)",
    org: "Allama Iqbal Open University, Islamabad",
    year: "2017",
  },
  {
    degree: "FA (Intermediate in Arts)",
    org: "Allama Iqbal Open University, Islamabad",
    year: "2015",
  },
] as const;

export const services = [
  {
    id: "web",
    title: "Web Development",
    detail: "WordPress & custom websites",
    status: "LIVE",
  },
  {
    id: "seo",
    title: "SEO & Blog Management",
    detail: "Ranking, content, blog pipelines",
    status: "LIVE",
  },
  {
    id: "funnel",
    title: "GoHighLevel Funnels",
    detail: "Automation pipelines + funnels",
    status: "LIVE",
  },
  {
    id: "email",
    title: "Email Marketing",
    detail: "Campaigns & lifecycle management",
    status: "LIVE",
  },
  {
    id: "social",
    title: "Social Media Management",
    detail: "Scheduling, engagement, growth",
    status: "LIVE",
  },
  {
    id: "design",
    title: "Graphic Design",
    detail: "Logos, posters, branding",
    status: "LIVE",
  },
  {
    id: "data",
    title: "Data Entry & Virtual Assistance",
    detail: "Sheets, admin, client comms",
    status: "LIVE",
  },
] as const;

export const skills = [
  "Client Communication & Project Management",
  "Google Sheets & MS Excel",
  "Web Development (WordPress, Custom Websites)",
  "SEO & Blog Management",
  "GoHighLevel Funnels",
  "Email Marketing & Campaign Management",
  "Social Media Management",
  "Graphic Design (Logos, Posters, Branding)",
  "Data Entry & Virtual Assistance",
] as const;

export const projects = [
  {
    id: "demo-wordpress-one",
    slug: "wordpress-business-site",
    kind: "WEB",
    title: "Sample — WordPress Business Site",
    stack: "WordPress · SEO · Content",
    scope: "Custom theme, service pages, on-page SEO, blog pipeline",
    brief:
      "A sample case study showing how a service business site would be built and wired for SEO growth. Deliberately generic until the owner supplies a real client project.",
    deliverables: [
      "Custom WordPress theme aligned to brand",
      "Service pages with on-page SEO structure",
      "Blog pipeline setup",
      "Site speed + mobile pass",
    ],
    outcome:
      "No real metrics claimed — sample only. Replace with owner-supplied results.",
    note: "SAMPLE PLACEHOLDER — replace with real client deliverable",
  },
  {
    id: "demo-funnel-one",
    slug: "ghl-booking-funnel",
    kind: "FUNNEL",
    title: "Sample — GoHighLevel Booking Funnel",
    stack: "GoHighLevel · Email · Automation",
    scope: "Multi-step funnel, automation triggers, email nurturing",
    brief:
      "A sample funnel architecture: capture → nurture → book. Shows the automation wiring pattern used for client acquisition systems.",
    deliverables: [
      "Multi-step landing funnel in GoHighLevel",
      "Automation triggers + SMS/email steps",
      "Booking integration",
      "Lead scoring + pipeline view",
    ],
    outcome:
      "No real metrics claimed — sample only. Replace with owner-supplied results.",
    note: "SAMPLE PLACEHOLDER — replace with real client deliverable",
  },
  {
    id: "demo-campaign-one",
    slug: "email-campaign-series",
    kind: "EMAIL",
    title: "Sample — Email Campaign Series",
    stack: "Email Marketing · Copy · Analytics",
    scope: "Welcome + promo series, segmentation, campaign reporting",
    brief:
      "A sample lifecycle email build: list, segments, series, and reporting loop. The measurement step is what closes the loop.",
    deliverables: [
      "Welcome series",
      "Promo campaign with segmentation",
      "Subject-line + copy pass",
      "Campaign report template",
    ],
    outcome:
      "No real metrics claimed — sample only. Replace with owner-supplied results.",
    note: "SAMPLE PLACEHOLDER — replace with real client deliverable",
  },
  {
    id: "demo-brand-one",
    slug: "logo-brand-kit",
    kind: "DESIGN",
    title: "Sample — Logo & Brand Kit",
    stack: "Logo Design · Branding · Posters",
    scope: "Logo system, colour palette, poster set for promotions",
    brief:
      "A sample brand identity build: logo system, palette, and promotional poster set. Visual direction is placeholder until real brand exists.",
    deliverables: [
      "Primary + alternate logo marks",
      "Colour palette + type pairing",
      "Poster set",
      "Asset files for print/web",
    ],
    outcome:
      "No real metrics claimed — sample only. Replace with owner-supplied results.",
    note: "SAMPLE PLACEHOLDER — replace with real client deliverable",
  },
  {
    id: "demo-social-one",
    slug: "social-media-management",
    kind: "SOCIAL",
    title: "Sample — Social Media Management",
    stack: "Content Calendar · Engagement · Posts",
    scope: "Weekly calendar, post creation, audience engagement",
    brief:
      "A sample social operating rhythm: content calendar, post assets, and engagement workflow across the week.",
    deliverables: [
      "Weekly content calendar",
      "Post + story assets",
      "Engagement + reply workflow",
      "Monthly review summary",
    ],
    outcome:
      "No real metrics claimed — sample only. Replace with owner-supplied results.",
    note: "SAMPLE PLACEHOLDER — replace with real client deliverable",
  },
  {
    id: "demo-data-one",
    slug: "data-entry-va-ops",
    kind: "DATA",
    title: "Sample — Data Entry & VA Ops",
    stack: "Google Sheets · MS Excel · Admin",
    scope: "Sheet pipelines, data clean-up, virtual assistance tasks",
    brief:
      "A sample ops build: structured sheets, data hygiene, and repeatable VA task runbooks keeping client workflows clean.",
    deliverables: [
      "Structured Google Sheets/Excel pipelines",
      "Data clean-up + validation",
      "Task runbooks for recurring work",
      "Weekly status handoff",
    ],
    outcome:
      "No real metrics claimed — sample only. Replace with owner-supplied results.",
    note: "SAMPLE PLACEHOLDER — replace with real client deliverable",
  },
] as const;