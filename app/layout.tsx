import type { Metadata } from "next";
import { Syne, Instrument_Sans } from "next/font/google";
import { PageLoader } from "@/components/ui/page-loader";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { CommandPalette } from "@/components/ui/command-palette";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ark6.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Abdul Rehman — Graphic Designer & Web Developer | ARK",
    template: "%s | ARK — Abdul Rehman",
  },
  description:
    "ARK is Abdul Rehman — a graphic designer and full-stack web developer based in Sargodha, Pakistan. Specializing in brand identity systems, UI/UX design, Next.js web applications, and bilingual LTR/RTL experiences.",
  keywords: [
    "Abdul Rehman",
    "ARK",
    "Graphic Designer Sargodha",
    "Web Developer Pakistan",
    "Graphic Designer Pakistan",
    "UI UX Designer Pakistan",
    "Next.js Developer Pakistan",
    "Brand Identity Designer",
    "Bilingual Website Developer",
    "Saudi Arabia Web Developer",
    "AI Website Development",
    "Figma UI UX",
    "Sargodha Web Designer",
  ],
  authors: [{ name: "Abdul Rehman", url: "mailto:ark203777@gmail.com" }],
  creator: "Abdul Rehman",
  publisher: "ARK Studio",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Abdul Rehman — Graphic Designer & Web Developer | ARK",
    description:
      "Editorial graphic design, full-stack Next.js web development, brand identities, and digital experiences from Sargodha, Pakistan.",
    siteName: "ARK",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ARK — Abdul Rehman | Graphic Designer & Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Rehman — Graphic Designer & Web Developer | ARK",
    description:
      "Editorial graphic design, full-stack Next.js web development, and brand identity design.",
    images: ["/og-image.png"],
    creator: "@ark203777",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "ARK — Abdul Rehman",
        "description": "Graphic Designer & Web Developer Portfolio",
        "publisher": {
          "@id": `${baseUrl}/#person`
        }
      },
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        "name": "Abdul Rehman",
        "jobTitle": "Graphic Designer & Full-Stack Web Developer",
        "url": baseUrl,
        "email": "ark203777@gmail.com",
        "telephone": "+923141495630",
        "knowsAbout": [
          "Graphic Design",
          "Web Development",
          "Brand Identity Design",
          "UI/UX Design",
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Figma",
          "Bilingual Web Architecture"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Sargodha",
          "addressRegion": "Punjab",
          "addressCountry": "Pakistan"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "ARK Design & Engineering Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Brand Identity Design",
                "description": "Custom logo design, typography systems, and luxury brand guidelines."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Web Development",
                "description": "Full-stack Next.js, React, and Tailwind web applications."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "UI/UX Design",
                "description": "Figma design systems, responsive wireframing, and user experience flows."
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${syne.variable} ${instrumentSans.variable}`}
    >
      <head>
        <link rel="icon" href="/logo/ark-favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo/ark.png" />
        <meta name="theme-color" content="#050505" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="noise antialiased bg-[#050505] text-white overflow-x-hidden cursor-none md:cursor-auto">
        <PageLoader />
        <CustomCursor />
        <CommandPalette />
        {children}
      </body>
    </html>
  );
}
