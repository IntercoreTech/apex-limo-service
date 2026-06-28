import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VIP City Tours | Los Angeles, Las Vegas & Miami",
  description: "Curated luxury city tours with professional chauffeurs. LA studio tours, Vegas Strip experiences, Miami Beach tours. Private and group options. Call 877-427-1777.",
};

export default function CityToursPage() {
  const laToursJson = [
    "Celebrity Home Tour",
    "Hollywood Studio Tour",
    "Beverly Hills Shopping Tour",
    "Malibu Coastal Drive",
    "Universal/Disney Area",
    "Santa Monica & Venice Beach",
  ];

  const vegasToursJson = [
    "Strip Highlights Tour",
    "Fremont Street Experience",
    "Hoover Dam Day Trip",
    "Grand Canyon Express",
    "Red Rock Canyon",
    "Valley of Fire",
  ];

  const miamiToursJson = [
    "South Beach Art Deco Tour",
    "Wynwood Murals Tour",
    "Key Biscayne Scenic",
    "Little Havana Cultural Tour",
    "Brickell & Coconut Grove",
  ];

  const tourFormats = [
    { name: "Private Half-Day", duration: "4 hours", desc: "Perfect for quick sightseeing" },
    { name: "Private Full-Day", duration: "8 hours", desc: "Comprehensive city experience" },
    { name: "Custom Multi-Day", duration: "Flexible", desc: "Tailored regional tours" },
    { name: "Group Charter Tours", duration: "Flexible", desc: "Professional charter bus experience" },
  ];

  const whatsIncluded = [
    "Professional Licensed Chauffeur",
    "Luxury Vehicle (Cadillac Escalade, Mercedes S-Class)",
    "Flexible Itinerary",
    "Local Insider Knowledge",
    "Water & Refreshments",
  ];

  const faqs = [
    {
      q: "How far in advance should I book a city tour?",
      a: "We recommend booking at least 48 hours in advance. For peak seasons (holidays, events), we suggest 1-2 weeks ahead.",
    },
    {
      q: "Can I customize my tour itinerary?",
      a: "Absolutely. Our professional chauffeurs can adapt routes based on your interests, weather, or timing preferences.",
    },
    {
      q: "What's included in the tour price?",
      a: "Professional chauffeur, luxury vehicle, bottled water, and flexible routing. Attractions, meals, and gratuities are separate.",
    },
    {
      q: "Do you offer group tour discounts?",
      a: "Yes, we offer competitive pricing for groups of 6+. Contact us at 877-427-1777 for a custom quote.",
    },
    {
      q: "Can I book tours in multiple cities?",
      a: "Yes, our multi-day tour packages can span Los Angeles, Las Vegas, and Miami with coordinated scheduling.",
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://apexlimola.com/services/city-tours/#service",
        name: "VIP City Tours",
        description: "Curated luxury city tours with professional chauffeurs in Los Angeles, Las Vegas, and Miami",
        provider: {
          "@type": "LocalBusiness",
          name: "Apex International Transportation",
          telephone: "+1-877-427-1777",
          address: {
            "@type": "PostalAddress",
            addressCountry: "US",
          },
        },
        areaServed: [
          { "@type": "City", name: "Los Angeles" },
          { "@type": "City", name: "Las Vegas" },
          { "@type": "City", name: "Miami" },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          ratingCount: "187",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Apex Limo",
            item: "https://apexlimola.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://apexlimola.com/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "VIP City Tours",
            item: "https://apexlimola.com/services/city-tours",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <main style={{ background: "#0A0A0A", color: "#FFFFFF", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #141414 0%, #0A0A0A 100%)",
          padding: "80px 20px",
          textAlign: "center",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "700",
            letterSpacing: "2px",
            marginBottom: "12px",
            color: "#FFFFFF",
          }}
        >
          VIP CITY TOURS
        </h1>
        <p
          style={{
            fontSize: "20px",
            color: "#C9A84C",
            marginBottom: "32px",
          }}
        >
          Curated Luxury Experiences with Professional Chauffeurs
        </p>
        <p
          style={{
            fontSize: "16px",
            color: "#AAAAAA",
            maxWidth: "600px",
            margin: "0 auto 32px",
            lineHeight: "1.6",
          }}
        >
          Explore iconic landmarks, hidden gems, and exclusive attractions in Los Angeles, Las Vegas, and Miami with an expert chauffeur.
        </p>
      </section>

      {/* Featured Image */}
      <section style={{ padding: "60px 20px", background: "#141414", textAlign: "center" }}>
        <img
          src="https://apexlimola.com/wp-content/uploads/2023/02/cadillac_escalade_600_sport_2021_4k_8k-5120x2880-1.png"
          alt="VIP City Tour Los Angeles"
          style={{
            width: "100%",
            maxWidth: "600px",
            borderRadius: "8px",
            border: "1px solid #2A2A2A",
          }}
        />
      </section>

      {/* Tour Formats */}
      <section style={{ padding: "60px 20px", background: "#0A0A0A", borderTop: "1px solid #2A2A2A" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "700",
              marginBottom: "48px",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            Tour Formats
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "24px",
            }}
          >
            {tourFormats.map((format, i) => (
              <div
                key={i}
                style={{
                  background: "#141414",
                  padding: "28px",
                  borderRadius: "8px",
                  border: "1px solid #2A2A2A",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#C9A84C",
                    marginBottom: "8px",
                  }}
                >
                  {format.name}
                </h3>
                <p style={{ fontSize: "14px", color: "#AAAAAA", marginBottom: "12px" }}>
                  {format.duration}
                </p>
                <p style={{ fontSize: "14px", color: "#AAAAAA", lineHeight: "1.6" }}>
                  {format.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Los Angeles Tours */}
      <section style={{ padding: "60px 20px", background: "#141414", borderTop: "1px solid #2A2A2A" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "700",
              color: "#C9A84C",
              marginBottom: "32px",
              paddingBottom: "16px",
              borderBottom: "2px solid #2A2A2A",
            }}
          >
            Los Angeles City Tours
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {laToursJson.map((tour, i) => (
              <div
                key={i}
                style={{
                  background: "#0A0A0A",
                  padding: "20px",
                  borderRadius: "6px",
                  border: "1px solid #2A2A2A",
                  cursor: "pointer",
                  transition: "border-color 0.2s",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#FFFFFF",
                  }}
                >
                  {tour}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Las Vegas Tours */}
      <section style={{ padding: "60px 20px", background: "#0A0A0A", borderTop: "1px solid #2A2A2A" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "700",
              color: "#C9A84C",
              marginBottom: "32px",
              paddingBottom: "16px",
              borderBottom: "2px solid #2A2A2A",
            }}
          >
            Las Vegas City Tours
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {vegasToursJson.map((tour, i) => (
              <div
                key={i}
                style={{
                  background: "#141414",
                  padding: "20px",
                  borderRadius: "6px",
                  border: "1px solid #2A2A2A",
                  cursor: "pointer",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#FFFFFF",
                  }}
                >
                  {tour}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Miami Tours */}
      <section style={{ padding: "60px 20px", background: "#141414", borderTop: "1px solid #2A2A2A" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "700",
              color: "#C9A84C",
              marginBottom: "32px",
              paddingBottom: "16px",
              borderBottom: "2px solid #2A2A2A",
            }}
          >
            Miami City Tours
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {miamiToursJson.map((tour, i) => (
              <div
                key={i}
                style={{
                  background: "#0A0A0A",
                  padding: "20px",
                  borderRadius: "6px",
                  border: "1px solid #2A2A2A",
                  cursor: "pointer",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#FFFFFF",
                  }}
                >
                  {tour}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section style={{ padding: "60px 20px", background: "#0A0A0A", borderTop: "1px solid #2A2A2A" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "700",
              marginBottom: "32px",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            What's Included
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {whatsIncluded.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "16px",
                  background: "#141414",
                  borderRadius: "6px",
                  border: "1px solid #2A2A2A",
                }}
              >
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    background: "#C9A84C",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0A0A0A",
                    fontWeight: "700",
                    flexShrink: 0,
                  }}
                >
                  ✓
                </div>
                <p style={{ fontSize: "15px", color: "#FFFFFF" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "60px 20px", background: "#141414", borderTop: "1px solid #2A2A2A" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "700",
              marginBottom: "48px",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {faqs.map((faq, i) => (
              <details
                key={i}
                style={{
                  background: "#0A0A0A",
                  border: "1px solid #2A2A2A",
                  borderRadius: "6px",
                  padding: "20px",
                  cursor: "pointer",
                }}
              >
                <summary
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#C9A84C",
                    userSelect: "none",
                  }}
                >
                  {faq.q}
                </summary>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#AAAAAA",
                    marginTop: "12px",
                    lineHeight: "1.6",
                  }}
                >
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "60px 20px",
          background: "linear-gradient(135deg, #C9A84C 0%, #A68339 100%)",
          borderTop: "1px solid #2A2A2A",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#0A0A0A",
            marginBottom: "16px",
          }}
        >
          Ready to Explore?
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#141414",
            marginBottom: "32px",
          }}
        >
          Book your VIP city tour today and experience luxury travel at its finest.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="tel:+1-877-427-1777"
            style={{
              display: "inline-block",
              padding: "14px 36px",
              background: "#0A0A0A",
              color: "#C9A84C",
              textDecoration: "none",
              borderRadius: "6px",
              fontWeight: "700",
              fontSize: "15px",
              border: "2px solid #0A0A0A",
            }}
          >
            ☎ Call 877-427-1777
          </a>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              padding: "14px 36px",
              background: "transparent",
              color: "#0A0A0A",
              textDecoration: "none",
              borderRadius: "6px",
              fontWeight: "700",
              fontSize: "15px",
              border: "2px solid #0A0A0A",
            }}
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
