import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Los Angeles Limo & Charter Service | Apex International Transportation",
  description:
    "Premium chauffeured transportation in Los Angeles and Southern California. LAX transfers, corporate travel, group charters. Call (818) 788-5466.",
};

const PHONE_HREF = "tel:+18187885466";
const PHONE = "(818) 788-5466";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://apexlimola.com/locations/los-angeles/#business",
      "name": "Apex International Transportation — Los Angeles",
      "image": {
        "@type": "ImageObject",
        "url": "https://apexlimola.com/wp-content/uploads/2023/02/cadillac_escalade_600_sport_2021_4k_8k-5120x2880-1.png",
        "width": 5120,
        "height": 2880,
      },
      "description":
        "Premium chauffeured transportation services in Los Angeles and Southern California, serving LAX, Burbank, Long Beach, Ontario, Beverly Hills, Santa Monica, Downtown LA, Orange County, Inland Empire, and San Diego.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "14485 Raymer St",
        "addressLocality": "Van Nuys",
        "addressRegion": "CA",
        "postalCode": "91405",
        "addressCountry": "US",
      },
      "telephone": "+1-818-788-5466",
      "url": "https://apexlimola.com/locations/los-angeles/",
      "priceRange": "$$$",
      "areaServed": [
        {
          "@type": "City",
          "name": "Los Angeles",
        },
        {
          "@type": "City",
          "name": "Beverly Hills",
        },
        {
          "@type": "City",
          "name": "Santa Monica",
        },
        {
          "@type": "City",
          "name": "Burbank",
        },
        {
          "@type": "City",
          "name": "Long Beach",
        },
        {
          "@type": "City",
          "name": "Ontario",
        },
        {
          "@type": "City",
          "name": "Orange County",
        },
        {
          "@type": "City",
          "name": "San Diego",
        },
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": 127,
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        "opens": "00:00",
        "closes": "23:59",
      },
      "sameAs": [
        "https://www.facebook.com/ApexLimoLA",
        "https://www.instagram.com/apexlimola",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://apexlimola.com/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Locations",
          "item": "https://apexlimola.com/locations/",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Los Angeles",
          "item": "https://apexlimola.com/locations/los-angeles/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How far in advance should I book LAX airport transportation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We recommend booking at least 24 hours in advance for LAX pickups and dropoffs. For same-day requests, call us at (818) 788-5466 and we'll do our best to accommodate. Our experienced drivers navigate LAX terminals and traffic patterns daily.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you provide service to Beverly Hills and Santa Monica?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, absolutely. Apex serves all of Los Angeles including Beverly Hills, Santa Monica, West Hollywood, Brentwood, and the entire Westside. Our luxury fleet and professional drivers are ideal for entertainment industry clients, special events, and corporate travel in these premium areas.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you service Orange County and San Diego from Los Angeles?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide transportation throughout Orange County, San Diego, and the Inland Empire. Whether you need LAX to Disneyland, Santa Ana to San Diego, or Long Beach to Ontario, our comprehensive Southern California network ensures seamless service.",
          },
        },
        {
          "@type": "Question",
          "name": "What vehicle options are available for Los Angeles events?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer luxury SUVs, sedans, stretch limousines, and group charter coaches for events throughout Los Angeles. Our fleet ranges from elegant town cars for executive travel to spacious Cadillac Escalades for group outings. Custom vehicle selection is available.",
          },
        },
        {
          "@type": "Question",
          "name": "Are your drivers familiar with Los Angeles neighborhoods?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our drivers are extensively trained on Los Angeles geography, traffic patterns, and major destinations. Many are bilingual (Spanish, Mandarin, Korean, Farsi). We know the fastest routes between LAX, Downtown, Beverly Hills, Santa Monica, and all major LA areas.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you offer corporate accounts for Los Angeles businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We provide corporate transportation programs with dedicated accounts, monthly billing, priority dispatch, and preferred pricing for Los Angeles companies. Call (818) 788-5466 to discuss your corporate travel needs.",
          },
        },
      ],
    },
  ],
};

export default function LosAngelesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #0A0A0A 0%, #141414 100%)",
          padding: "80px 20px",
          textAlign: "center",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            fontWeight: "700",
            color: "#FFFFFF",
            margin: "0 0 20px 0",
            letterSpacing: "-1px",
          }}
        >
          LOS ANGELES
        </h1>
        <p
          style={{
            fontSize: "20px",
            color: "#AAAAAA",
            margin: "0",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "1.6",
          }}
        >
          Premium Chauffeured Transportation in Southern California
        </p>
      </section>

      {/* Stats Bar */}
      <section
        style={{
          background: "#141414",
          borderBottom: "1px solid #2A2A2A",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "40px",
            textAlign: "center",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "#C9A84C",
                marginBottom: "8px",
              }}
            >
              25 min avg
            </div>
            <div style={{ fontSize: "14px", color: "#AAAAAA" }}>
              LAX to Downtown LA
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "#C9A84C",
                marginBottom: "8px",
              }}
            >
              20+ Vehicles
            </div>
            <div style={{ fontSize: "14px", color: "#AAAAAA" }}>
              Modern LA Fleet
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "#C9A84C",
                marginBottom: "8px",
              }}
            >
              Since 1994
            </div>
            <div style={{ fontSize: "14px", color: "#AAAAAA" }}>
              30+ Years Service
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "#C9A84C",
                marginBottom: "8px",
              }}
            >
              24/7 Available
            </div>
            <div style={{ fontSize: "14px", color: "#AAAAAA" }}>
              Round-the-Clock Service
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section
        style={{
          background: "#0A0A0A",
          padding: "60px 20px",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#FFFFFF",
              marginBottom: "12px",
              margin: "0 0 12px 0",
            }}
          >
            Southern California Coverage
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#AAAAAA",
              marginBottom: "48px",
              lineHeight: "1.6",
            }}
          >
            Apex serves all major airports, cities, and destinations throughout
            Los Angeles and Southern California.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              { name: "LAX Airport", code: "LAX" },
              { name: "Burbank Airport", code: "BUR" },
              { name: "Long Beach Airport", code: "LGB" },
              { name: "Ontario Airport", code: "ONT" },
              { name: "Beverly Hills", code: "—" },
              { name: "Santa Monica", code: "—" },
              { name: "Downtown LA", code: "—" },
              { name: "Orange County", code: "—" },
              { name: "Inland Empire", code: "—" },
              { name: "San Diego County", code: "—" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#141414",
                  border: "1px solid #2A2A2A",
                  borderRadius: "8px",
                  padding: "24px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#FFFFFF",
                    marginBottom: "8px",
                  }}
                >
                  {item.name}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#C9A84C",
                    fontWeight: "500",
                  }}
                >
                  {item.code}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services in Los Angeles */}
      <section
        style={{
          background: "#141414",
          padding: "60px 20px",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#FFFFFF",
              margin: "0 0 12px 0",
            }}
          >
            Services in Los Angeles
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#AAAAAA",
              marginBottom: "48px",
              lineHeight: "1.6",
            }}
          >
            Comprehensive transportation solutions for every Los Angeles need.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                title: "LAX Airport Transfers",
                href: "/services/airport-transfers",
              },
              {
                title: "Corporate Travel",
                href: "/services/corporate-travel",
              },
              {
                title: "Special Events",
                href: "/services/special-events",
              },
              {
                title: "Group Charters",
                href: "/services/group-charters",
              },
              {
                title: "Entertainment Industry",
                href: "/services/entertainment",
              },
              {
                title: "Hotel & Casino Transfers",
                href: "/services/hotel-transfers",
              },
            ].map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="apex-service-card-link"
                style={{
                  borderRadius: "8px",
                  padding: "28px",
                }}
              >
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#FFFFFF",
                  }}
                >
                  {service.title}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#C9A84C",
                    marginTop: "12px",
                    fontWeight: "500",
                  }}
                >
                  Learn More →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About LA Operation */}
      <section
        style={{
          background: "#0A0A0A",
          padding: "60px 20px",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "40px",
                fontWeight: "700",
                color: "#FFFFFF",
                margin: "0 0 24px 0",
              }}
            >
              Apex in Los Angeles
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#AAAAAA",
                lineHeight: "1.8",
                marginBottom: "20px",
              }}
            >
              Our headquarters in Van Nuys has been serving Los Angeles and
              Southern California since 1994. Apex pioneered the modern SUV
              luxury transportation market in LA, setting the standard for
              premium chauffeured service that the region has come to expect.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "#AAAAAA",
                lineHeight: "1.8",
                marginBottom: "20px",
              }}
            >
              Our drivers are extensively trained on Los Angeles neighborhoods,
              traffic patterns, and major destinations. Many are multilingual,
              fluent in Spanish, Mandarin, Korean, and Farsi — reflecting the
              diversity of our clients and the Los Angeles community.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "#AAAAAA",
                lineHeight: "1.8",
              }}
            >
              From LAX to Beverly Hills, Downtown to Disneyland, we deliver
              reliability, professionalism, and luxury every single time.
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <img
              src="https://apexlimola.com/wp-content/uploads/2023/02/cadillac_escalade_600_sport_2021_4k_8k-5120x2880-1.png"
              alt="Luxury SUV in Los Angeles — Apex International Transportation"
              style={{
                width: "100%",
                maxWidth: "500px",
                borderRadius: "8px",
                border: "1px solid #2A2A2A",
              }}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        style={{
          background: "#141414",
          padding: "60px 20px",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#FFFFFF",
              margin: "0 0 12px 0",
            }}
          >
            Frequently Asked Questions
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#AAAAAA",
              marginBottom: "48px",
              lineHeight: "1.6",
            }}
          >
            Common questions about Los Angeles transportation service.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {[
              {
                q: "How far in advance should I book LAX airport transportation?",
                a: "We recommend booking at least 24 hours in advance for LAX pickups and dropoffs. For same-day requests, call us at (818) 788-5466 and we'll do our best to accommodate. Our experienced drivers navigate LAX terminals and traffic patterns daily.",
              },
              {
                q: "Do you provide service to Beverly Hills and Santa Monica?",
                a: "Yes, absolutely. Apex serves all of Los Angeles including Beverly Hills, Santa Monica, West Hollywood, Brentwood, and the entire Westside. Our luxury fleet and professional drivers are ideal for entertainment industry clients, special events, and corporate travel in these premium areas.",
              },
              {
                q: "Do you service Orange County and San Diego from Los Angeles?",
                a: "Yes, we provide transportation throughout Orange County, San Diego, and the Inland Empire. Whether you need LAX to Disneyland, Santa Ana to San Diego, or Long Beach to Ontario, our comprehensive Southern California network ensures seamless service.",
              },
              {
                q: "What vehicle options are available for Los Angeles events?",
                a: "We offer luxury SUVs, sedans, stretch limousines, and group charter coaches for events throughout Los Angeles. Our fleet ranges from elegant town cars for executive travel to spacious Cadillac Escalades for group outings. Custom vehicle selection is available.",
              },
              {
                q: "Are your drivers familiar with Los Angeles neighborhoods?",
                a: "Our drivers are extensively trained on Los Angeles geography, traffic patterns, and major destinations. Many are bilingual (Spanish, Mandarin, Korean, Farsi). We know the fastest routes between LAX, Downtown, Beverly Hills, Santa Monica, and all major LA areas.",
              },
              {
                q: "Do you offer corporate accounts for Los Angeles businesses?",
                a: "Yes. We provide corporate transportation programs with dedicated accounts, monthly billing, priority dispatch, and preferred pricing for Los Angeles companies. Call (818) 788-5466 to discuss your corporate travel needs.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#0A0A0A",
                  border: "1px solid #2A2A2A",
                  borderRadius: "8px",
                  padding: "24px",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#C9A84C",
                    margin: "0 0 12px 0",
                  }}
                >
                  {item.q}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#AAAAAA",
                    margin: "0",
                    lineHeight: "1.6",
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Address Card */}
      <section
        style={{
          background: "#0A0A0A",
          padding: "60px 20px",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div
            style={{
              background: "#141414",
              border: "1px solid #2A2A2A",
              borderRadius: "8px",
              padding: "40px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "#FFFFFF",
                margin: "0 0 24px 0",
              }}
            >
              Los Angeles Headquarters
            </h2>

            <div
              style={{
                fontSize: "16px",
                color: "#AAAAAA",
                marginBottom: "12px",
                lineHeight: "1.6",
              }}
            >
              <div style={{ fontWeight: "500", marginBottom: "8px" }}>
                Apex International Transportation
              </div>
              <div>14485 Raymer St</div>
              <div>Van Nuys, CA 91405</div>
            </div>

            <div
              style={{
                fontSize: "16px",
                color: "#AAAAAA",
                marginBottom: "32px",
              }}
            >
              <a
                href={PHONE_HREF}
                style={{
                  color: "#C9A84C",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                {PHONE}
              </a>
            </div>

            <div
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href={PHONE_HREF}
                className="apex-btn-lift"
                style={{
                  display: "inline-block",
                  background: "linear-gradient(135deg, #C9A84C, #E0C570)",
                  color: "#0A0A0A",
                  padding: "14px 32px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                Call {PHONE}
              </a>
              <Link
                href="/book"
                className="apex-btn-outline-gold-reverse"
                style={{
                  padding: "14px 32px",
                  fontSize: "14px",
                }}
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, #1A1A1A 0%, #141414 100%)",
          padding: "60px 20px",
          textAlign: "center",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "700",
            color: "#FFFFFF",
            margin: "0 0 16px 0",
          }}
        >
          Ready for Premium Transportation?
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#AAAAAA",
            margin: "0 0 32px 0",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "1.6",
          }}
        >
          Call Apex International Transportation today to reserve your Los
          Angeles experience.
        </p>
        <a
          href={PHONE_HREF}
          className="apex-btn-lift"
          style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #C9A84C, #E0C570)",
            color: "#0A0A0A",
            padding: "16px 40px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "16px",
          }}
        >
          {PHONE}
        </a>
      </section>
    </>
  );
}
