export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  client: string;
  category: string;
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
    category: "Corporate Website",
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
  // PLACEHOLDER — add your next project here
  {
    id: "placeholder-02",
    slug: "placeholder-02",
    number: "02",
    title: "[Project Name]", // TODO: Replace with real project title
    client: "[Client Name]", // TODO: Replace with real client name
    category: "[Category]", // TODO: e.g. E-Commerce, Brand Identity
    tags: ["[Tag 1]", "[Tag 2]"],
    description:
      "[Project description — replace with real copy. Describe the challenge, approach, and value delivered.]",
    excerpt: "[Short one-line project summary.]",
    servicesProvided: ["[Service 1]", "[Service 2]"],
    imageUrl: "", // TODO: Add /work/project-image.png
    liveUrl: "#",
    caseStudyUrl: "#",
    year: "2024",
    featured: false,
  },
];
