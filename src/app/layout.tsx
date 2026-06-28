import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://apexlimousineservice.com"),
  title: {
    default: "Apex International Transportation | Premium Limo & Charter Service",
    template: "%s | Apex International Transportation",
  },
  description:
    "Premium chauffeured transportation since 1994. SUVs, Sprinter Vans, Minibuses & Motorcoaches serving Los Angeles, Las Vegas, Miami & Fort Lauderdale. Available 24/7. Call 877-427-1777.",
  keywords:
    "limo service, limousine, charter bus, sprinter van, transportation, Los Angeles, Las Vegas, Miami, Fort Lauderdale, airport transfer, corporate travel, group charter",
  openGraph: {
    title: "Apex International Transportation",
    description: "Premium Transportation Built on Trust Since 1994. Safe. Reliable. Professional.",
    url: "https://apexlimousineservice.com",
    siteName: "Apex International Transportation",
    type: "website",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["TransportationCompany", "LocalBusiness"],
      "@id": "https://apexlimousineservice.com/#organization",
      "name": "Apex International Transportation",
      "alternateName": ["Apex Limo", "Apex Limo LA"],
      "url": "https://apexlimousineservice.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://apexlimousineservice.com/logo.svg",
        "width": 200,
        "height": 80,
      },
      "description":
        "Premium chauffeured ground transportation company serving Los Angeles, Las Vegas, Miami and Fort Lauderdale since 1994. Professional uniformed drivers, modern fleet of SUVs, Sprinter vans, executive minibuses and motorcoaches.",
      "foundingDate": "1994",
      "telephone": "+18774271777",
      "email": "info@apexlimousineservice.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "14485 Raymer St",
        "addressLocality": "Van Nuys",
        "addressRegion": "CA",
        "postalCode": "91405",
        "addressCountry": "US",
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          "opens": "00:00",
          "closes": "23:59",
        },
      ],
      "priceRange": "$$-$$$",
      "areaServed": [
        { "@type": "City", "name": "Los Angeles", "sameAs": "https://en.wikipedia.org/wiki/Los_Angeles" },
        { "@type": "City", "name": "Las Vegas", "sameAs": "https://en.wikipedia.org/wiki/Las_Vegas" },
        { "@type": "City", "name": "Miami", "sameAs": "https://en.wikipedia.org/wiki/Miami" },
        { "@type": "City", "name": "Fort Lauderdale", "sameAs": "https://en.wikipedia.org/wiki/Fort_Lauderdale,_Florida" },
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Chauffeured Transportation Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Airport Transfers", "url": "https://apexlimousineservice.com/services/airport-transfers/" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Travel", "url": "https://apexlimousineservice.com/services/corporate/" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Weddings & Events", "url": "https://apexlimousineservice.com/services/weddings-events/" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Group Charter", "url": "https://apexlimousineservice.com/services/group-charter/" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "VIP City Tours", "url": "https://apexlimousineservice.com/services/city-tours/" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Point-to-Point Transfer", "url": "https://apexlimousineservice.com/services/point-to-point/" } },
        ],
      },
      "sameAs": [
        "https://www.facebook.com/apexlimousineservice",
        "https://apexlimola.com",
        "https://apexlimofl.com",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://apexlimousineservice.com/#website",
      "name": "Apex International Transportation",
      "url": "https://apexlimousineservice.com",
      "publisher": { "@id": "https://apexlimousineservice.com/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://apexlimousineservice.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
