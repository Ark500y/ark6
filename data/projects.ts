export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  client: string;
  category: "Web Development" | "Graphic Design" | "Brand Identity" | "UI/UX Design";
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
    id: "ark-branding",
    slug: "ark-identity",
    number: "02",
    title: "ARK Visual Identity System",
    client: "ARK",
    category: "Brand Identity",
    tags: ["Brand Identity", "Logo Design", "Typography", "Style Guide"],
    description:
      "Complete visual identity design for ARK, featuring custom minimalist typography, luxury gold & obsidian color palette, and digital brand guidelines.",
    excerpt: "Luxury dark-mode brand identity system for a digital artisan.",
    servicesProvided: [
      "Logo Design",
      "Brand Guidelines",
      "Typography System",
      "Social Assets",
    ],
    imageUrl: "/logo/ark-transparent.png",
    liveUrl: "#",
    caseStudyUrl: "/about",
    year: "2024",
    featured: true,
  },
  {
    id: "editorial-graphics",
    slug: "editorial-design",
    number: "03",
    title: "Minimalist Graphic Series",
    client: "Studio ARK",
    category: "Graphic Design",
    tags: ["Graphic Design", "Editorial", "Poster Art", "Vector Art"],
    description:
      "A series of high-contrast typographic posters and digital artwork exploring geometric minimalism, gold gradients, and brutalist layout structures.",
    excerpt: "High-contrast poster design exploring geometric minimalism.",
    servicesProvided: [
      "Graphic Design",
      "Poster Art",
      "Digital Illustration",
    ],
    imageUrl: "/logo/ark.png",
    liveUrl: "#",
    caseStudyUrl: "/work",
    year: "2024",
    featured: true,
  },
  {
    id: "ui-ux-design-system",
    slug: "ui-ux-system",
    number: "04",
    title: "Dark Luxury Web Concept",
    client: "ARK Studio",
    category: "UI/UX Design",
    tags: ["UI/UX Design", "Figma", "Design System", "Prototyping"],
    description:
      "High-end web application design system built in Figma, featuring micro-interactions, responsive grid rules, and component libraries.",
    excerpt: "Figma design system tailored for high-conversion web applications.",
    servicesProvided: [
      "Figma UI/UX",
      "Design Systems",
      "Interactive Prototyping",
    ],
    imageUrl: "/work/mian-saqib-hero.png",
    liveUrl: "#",
    caseStudyUrl: "/services",
    year: "2024",
    featured: true,
  },
];
