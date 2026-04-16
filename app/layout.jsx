import { Cormorant_Garamond, Manrope } from "next/font/google";
import SiteHeader from "../components/site-header";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://www.mayagmurtextile.com"),
  title: {
    default: "MA Yagmur Textile",
    template: "%s | MA Yagmur Textile",
  },
  description:
    "MA Yagmur Textile is an Istanbul-based shirt manufacturer specializing in private label production, wholesale development, and export-ready textile programs.",
  icons: {
    icon: "/assets/favicon.png",
  },
  openGraph: {
    siteName: "MA Yagmur Textile",
    images: ["/assets/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/logo.png"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MA Yagmur Textile",
    url: "https://www.mayagmurtextile.com",
    logo: "https://www.mayagmurtextile.com/assets/logo.png",
    email: "mailto:info@mayagmurtextile.com",
    telephone: "+90 212 230 13 16",
    sameAs: [],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MA Yagmur Textile",
    image: "https://www.mayagmurtextile.com/assets/logo.png",
    url: "https://www.mayagmurtextile.com",
    telephone: "+90 212 230 13 16",
    email: "info@mayagmurtextile.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Caglayan Mahallesi, Park Sokak No:11/5, Ahmet Bilgin Is Hani Kat:5",
      addressLocality: "Sisli",
      addressRegion: "Istanbul",
      addressCountry: "TR",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MA Yagmur Textile",
    url: "https://www.mayagmurtextile.com",
    description:
      "Private label shirt manufacturing, wholesale textile development, and export-ready production from Istanbul.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.mayagmurtextile.com/contact?query={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <div className="page-shell">
          <SiteHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
