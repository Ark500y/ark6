import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ark6.vercel.app";

export const metadata: Metadata = {
  title: "Contact & Hire",
  description:
    "Get in touch with Abdul Rehman (ARK) for brand identity design, UI/UX design, or full-stack web development projects. Available for worldwide commissions.",
  keywords: [
    "Hire Abdul Rehman",
    "Contact ARK Graphic Designer",
    "Web Developer Sargodha Contact",
    "Hire Next.js Developer",
  ],
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
  openGraph: {
    title: "Contact — Abdul Rehman | ARK",
    description:
      "Start something remarkable. Reach out via Email, WhatsApp, or Direct Inquiry.",
    url: `${baseUrl}/contact`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Contact ARK" }],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
