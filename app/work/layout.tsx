import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ark6.vercel.app";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected portfolio projects by Abdul Rehman (ARK) — corporate web apps, bilingual platforms, brand identity systems, and UI/UX design.",
  alternates: {
    canonical: `${baseUrl}/work`,
  },
  openGraph: {
    title: "Work — Selected Portfolio Projects",
    description:
      "Selected portfolio projects by Abdul Rehman (ARK) — corporate web apps, bilingual platforms, and brand identity systems.",
    url: `${baseUrl}/work`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ARK Selected Work" }],
  },
  twitter: {
    title: "Work — Selected Portfolio Projects",
    description:
      "Selected portfolio projects by Abdul Rehman (ARK) — corporate web apps, bilingual platforms, and brand identity systems.",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
