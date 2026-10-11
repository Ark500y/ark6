import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ark6.vercel.app";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Abdul Rehman (ARK) for brand identity design, UI/UX design, or full-stack web development projects. Available worldwide.",
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
  openGraph: {
    title: "Contact — Abdul Rehman | ARK",
    description:
      "Start something remarkable. Reach out via Email, WhatsApp, or direct project inquiry.",
    url: `${baseUrl}/contact`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Contact ARK" }],
  },
  twitter: {
    title: "Contact — Abdul Rehman | ARK",
    description:
      "Start something remarkable. Reach out via Email, WhatsApp, or direct project inquiry.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
