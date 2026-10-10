import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ark6.vercel.app";

export const metadata: Metadata = {
  title: "Services & Capabilities",
  description:
    "Explore the 6 core services offered by Abdul Rehman (ARK): Brand Identity Design, UI/UX Design, Full-Stack Web Development, E-Commerce Solutions, Framer/Webflow, and AI Web Systems.",
  keywords: [
    "Brand Identity Services",
    "Web Development Services Pakistan",
    "UI UX Design Services",
    "Next.js Development",
    "E-Commerce Solutions",
    "Bilingual Website Development",
  ],
  alternates: {
    canonical: `${baseUrl}/services`,
  },
  openGraph: {
    title: "Services & Capabilities — Abdul Rehman | ARK",
    description:
      "End-to-end digital services: Brand Identity, UI/UX Design, Next.js Web Development, and AI Web Systems.",
    url: `${baseUrl}/services`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ARK Services" }],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
