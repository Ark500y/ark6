export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  client: string;
  category: "Web Development" | "Creative Engineering" | "Graphic Design" | "Brand Identity" | "UI/UX Design";
  tags: string[];
  description: string;
  excerpt: string;
  servicesProvided: string[];
  imageUrl: string;
  liveUrl: string;
  caseStudyUrl: string;
  year: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "mian-saqib",
    slug: "miansaqib",
    number: "01",
    title: "Mian Saqib Hussain",
    client: "Mian Saqib Hussain",
    category: "Web Development",
    tags: ["Web Design", "Web Development", "Bilingual", "SEO"],
    description:
      "A professional corporate website for an independent boom truck operator based in Dallah Industrial, Dammam, Saudi Arabia. Bilingual English/Arabic with RTL support, serving construction, logistics, and site support industries across KSA.",
    excerpt: "Bilingual corporate web presence for a Saudi-based heavy lifting specialist.",
    servicesProvided: [
      "UI/UX Design",
      "Web Development",
      "Bilingual Support (EN/AR)",
      "SEO & Schema Markup",
    ],
    imageUrl: "/work/mian-saqib-hero.png",
    liveUrl: "https://miansaqib.com/",
    caseStudyUrl: "/work/miansaqib",
    year: "2024",
    featured: true,
  },
  {
    id: "ark-creative-engineering",
    slug: "ark-creative-engineering",
    number: "02",
    title: "ARK — Portfolio & Creative Engineering",
    client: "ARK Studio",
    category: "Creative Engineering",
    tags: ["Creative Engineering", "Interactive Web", "Next.js", "Performance"],
    description:
      "A futuristic, aerospace-grade creative engineering showcase featuring cinematic parallax layers, cosmic visuals, interactive soundscapes, and real-time telemetry systems.",
    excerpt: "Interactive creative engineering portfolio featuring cosmic parallax and telemetry systems.",
    servicesProvided: [
      "Creative Engineering",
      "Interactive 3D / Parallax",
      "Performance Optimization",
      "Sound & Telemetry UI",
    ],
    imageUrl: "/work/ark-creative-engineering.jpg",
    liveUrl: "https://portfolio-alpha-one-ym3ipfauzw.vercel.app/",
    caseStudyUrl: "/work/ark-creative-engineering",
    year: "2024",
    featured: true,
  },
];
