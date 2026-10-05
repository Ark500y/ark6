export interface BrandConfig {
  brand: string;
  name: string;
  title: string;
  focus: string[];
  location: {
    city: string;
    province: string;
    country: string;
    full: string;
    timezone: string;
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    phoneHref: string;
    whatsapp: string;
    email: string;
  };
  summary: string;
  philosophy: string;
  capabilities: {
    category: string;
    description: string;
    deliverables: string[];
  }[];
}

export const brandData: BrandConfig = {
  brand: "ARK",
  name: "Abdul Rehman",
  title: "Graphic Designer & Web Developer",
  focus: [
    "Graphic Design",
    "Web Design",
    "UI/UX Design",
    "Branding",
    "AI Website Development",
    "Digital Experiences"
  ],
  location: {
    city: "Sargodha",
    province: "Punjab",
    country: "Pakistan",
    full: "Sargodha, Punjab, Pakistan",
    timezone: "Asia/Karachi"
  },
  contact: {
    phone: "03141495630",
    phoneFormatted: "0314 1495630",
    phoneHref: "tel:+923141495630",
    whatsapp: "https://wa.me/923141495630",
    email: "ark203777@gmail.com"
  },
  summary: "Graphic designer and web developer crafting high-performance digital systems, distinct visual identities, and interactive web experiences.",
  philosophy: "Merging editorial precision with modern engineering. Every detail serves a functional purpose, balancing bold aesthetics with uncompromising technical performance.",
  capabilities: [
    {
      category: "Digital & Web Development",
      description: "Custom, ultra-fast websites and web applications built with modern architectures, clean codebases, and responsive layout craftsmanship.",
      deliverables: ["Next.js & React Engineering", "Responsive Architecture", "Interactive UI Engineering", "Performance Optimization"]
    },
    {
      category: "Brand & Visual Identity",
      description: "End-to-end visual identity systems that give brands distinctive character, commanding recognition across all digital touchpoints.",
      deliverables: ["Monograms & Logo Suites", "Design Systems", "Typography & Color Architecture", "Brand Guidelines"]
    },
    {
      category: "UI/UX & Product Design",
      description: "Intuitive user interfaces engineered around natural hierarchy, ergonomics, and seamless user conversion flows.",
      deliverables: ["Information Architecture", "Wireframing & Prototyping", "Design System Components", "Conversion-Focused UX"]
    },
    {
      category: "AI Website Development",
      description: "Modern web solutions leveraging AI-accelerated workflows to produce customized, adaptive digital platforms at pace.",
      deliverables: ["AI Workflow Integration", "Dynamic Content Systems", "Rapid Prototyping", "Scalable Digital Assets"]
    }
  ]
};
