import type { Metadata } from "next";
import { Syne, Instrument_Sans } from "next/font/google";
import { PageLoader } from "@/components/ui/page-loader";
import { CustomCursor } from "@/components/ui/custom-cursor";
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

export const metadata: Metadata = {
  title: "Abdul Rehman — Graphic Designer & Web Developer | ARK",
  description:
    "ARK is Abdul Rehman — a graphic designer and web developer based in Sargodha, Pakistan. Specialising in brand identity, UI/UX design, and high-performance web development.",
  keywords: [
    "ARK",
    "Abdul Rehman",
    "Graphic Designer",
    "Web Developer",
    "UI UX Designer",
    "Branding",
    "Sargodha",
    "Pakistan",
    "AI Website Development",
    "Digital Experiences",
  ],
  authors: [{ name: "Abdul Rehman", url: "mailto:ark203777@gmail.com" }],
  creator: "Abdul Rehman",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ark.design"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Abdul Rehman — Graphic Designer & Web Developer | ARK",
    description:
      "Graphic design, web development, brand identity, and digital experiences from Sargodha, Pakistan.",
    siteName: "ARK",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ARK — Abdul Rehman Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Rehman — Graphic Designer & Web Developer | ARK",
    description:
      "Graphic design, web development, brand identity, and digital experiences.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://ark.design/#website",
                  "url": "https://ark.design/",
                  "name": "ARK — Abdul Rehman",
                  "description": "Graphic Designer & Web Developer",
                  "publisher": {
                    "@id": "https://ark.design/#person"
                  }
                },
                {
                  "@type": "Person",
                  "@id": "https://ark.design/#person",
                  "name": "Abdul Rehman",
                  "jobTitle": "Graphic Designer & Web Developer",
                  "url": "https://ark.design",
                  "email": "ark203777@gmail.com",
                  "telephone": "+923141495630",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Sargodha",
                    "addressRegion": "Punjab",
                    "addressCountry": "Pakistan"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="noise antialiased bg-[#050505] text-white overflow-x-hidden cursor-none md:cursor-auto">
        <PageLoader />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
