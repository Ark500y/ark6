import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ark6.vercel.app";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Brand identity, UI/UX design, Next.js web development, e-commerce, Framer/Webflow, and AI-assisted web builds by Abdul Rehman (ARK).",
  alternates: { canonical: `${baseUrl}/services` },
  openGraph: {
    title: "Services — Brand Identity, UI/UX & Web Development",
    description:
      "Brand identity, UI/UX design, Next.js web development, e-commerce, and AI-assisted web builds by ARK.",
    url: `${baseUrl}/services`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ARK Services" }],
  },
  twitter: {
    title: "Services — Brand Identity, UI/UX & Web Development",
    description:
      "Brand identity, UI/UX design, Next.js web development, and AI-assisted builds by ARK.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
