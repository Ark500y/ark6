import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ark6.vercel.app";

// FIX 1: title is just the page name — template appends "| ARK — Abdul Rehman"
// FIX 1: description ≤ 155 chars, self-referencing canonical
export const metadata: Metadata = {
  title: "About",
  description:
    "Abdul Rehman — graphic designer & web developer based in Sargodha, Pakistan. Brand identity, editorial design, and high-performance web engineering.",
  alternates: { canonical: `${baseUrl}/about` },
  openGraph: {
    title: "About Abdul Rehman",
    description:
      "Graphic designer & web developer in Sargodha, Pakistan. Brand identity, editorial design, and modern web engineering.",
    url: `${baseUrl}/about`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "About ARK — Abdul Rehman" }],
  },
  twitter: {
    title: "About Abdul Rehman",
    description:
      "Graphic designer & web developer in Sargodha, Pakistan. Brand identity and modern web engineering.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
