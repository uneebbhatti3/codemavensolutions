import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { serviceGroups } from "@/data/services-menu-data";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const polySans = localFont({
  src: [
    {
      path: "./fonts/polysanstrial-neutral.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/polysanstrial-median.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/polysanstrial-bulky.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-polysan",
});

const siteUrl = "https://codemavensolutions.com";
const siteName = "Codemaven Solutions";

const siteTitle =
  "Codemaven Solutions | Software Development & Digital Marketing";

const siteDescription =
  "Codemaven Solutions helps businesses thrive online with end-to-end services. We design and develop high-performance websites, custom mobile apps, and scalable SaaS platforms tailored to your needs. Streamline your business operations by integrating AI-powered automation and workflow optimization. Our marketing experts help you reach and retain customers with SEO, content strategy, social media management, branding, and stunning design. Partner with Codemaven Solutions for full-spectrum digital growth and reliable technical support.";

const socialImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Codemaven Solutions — Development, Design & Digital Marketing",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },

  description: siteDescription,
  applicationName: siteName,

  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,

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

  // Set canonical and Open Graph URLs in each page's metadata.
  // A homepage URL here would be inherited by child pages.
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [socialImage],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [socialImage],
    site: "@_codemaven",
    creator: "@_codemaven",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: siteDescription,
  email: "hello@codemavensolutions.com",
  telephone: "+923147257787",

  // Add sameAs with your real company profile URLs once published.

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Codemaven Solutions Services",
    itemListElement: serviceGroups.map((group) => ({
      "@type": "OfferCatalog",
      name: group.title,
      itemListElement: group.services.map((service) => ({
        "@type": "Offer",
        url: `${siteUrl}${service.href}`,
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          url: `${siteUrl}${service.href}`,
          provider: {
            "@id": `${siteUrl}/#organization`,
          },
        },
      })),
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full font-sans antialiased",
        inter.variable,
        polySans.variable,
      )}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <a
          href="#main-content"
          className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:m-0 focus:h-auto focus:w-auto focus:overflow-visible focus:whitespace-normal focus:rounded-md focus:bg-background focus:px-4 focus:py-3 focus:text-foreground focus:[clip:auto] focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Skip to main content
        </a>

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          <main id="main-content" tabIndex={-1} className="flex-1">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
