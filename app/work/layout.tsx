import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ark6.vercel.app";

export const metadata: Metadata = {
  title: "Selected Work & Portfolio",
  description:
    "Explore selected portfolio projects by Abdul Rehman (ARK) — featuring corporate web apps, bilingual Saudi Arabian platforms, graphic design series, and brand identities.",
  keywords: [
    "Abdul Rehman Portfolio",
    "ARK Selected Work",
    "Mian Saqib Hussain Case Study",
    "Web Design Portfolio Pakistan",
    "Graphic Design Portfolio",
  ],
  alternates: {
    canonical: `${baseUrl}/work`,
  },
  openGraph: {
    title: "Selected Work — Abdul Rehman | ARK Portfolio",
    description:
      "Curated client projects across Web Development, Brand Identity, and UI/UX Design.",
    url: `${baseUrl}/work`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ARK Selected Work" }],
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
