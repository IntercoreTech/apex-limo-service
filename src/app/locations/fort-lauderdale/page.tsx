import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fort Lauderdale Limo & Charter | FLL Airport & Port Everglades",
  description:
    "Premium chauffeured transportation in Fort Lauderdale. FLL airport transfers, Port Everglades cruise service, Las Olas, Boca Raton. Call (305) 707-5837.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Apex International Transportation - Fort Lauderdale",
  image: "https://apexlimola.com/wp-content/uploads/2023/02/A1054_high_res.png",
  description:
    "Premium chauffeured transportation in Fort Lauderdale, FL. FLL airport transfers, Port Everglades cruise service, corporate transportation.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Fort Lauderdale Division",
    addressLocality: "Fort Lauderdale",
    addressRegion: "FL",
    addressCountry: "US",
  },
  telephone: "(305) 707-5837",
  url: "https://www.apexlimoservice.com/locations/fort-lauderdale/",
  areaServed: [
    {
      "@type": "City",
      name: "Fort Lauderdale",
    },
    {
      "@type": "City",
      name: "Boca Raton",
    },
    {
      "@type": "City",
      name: "Delray Beach",
    },
    {
      "@type": "City",
      name: "Pompano Beach",
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.apexlimoservice.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Locations",
      item: "https://www.apexlimoservice.com/locations/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Fort Lauderdale",
      item: "https://www.apexlimoservice.com/locations/fort-lauderdale/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I arrange FLL airport pickup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact us at (305) 707-5837 with your flight details, arrival terminal, and destination. We'll meet you at baggage claim with a nameplate. For departures, we pick up at your location and drop you at your departure terminal—no hassle, no waiting.",
      },
    },
    {
      "@type": "Question",
      name: "What timing do I need for Port Everglades cruise embarkation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend arriving at Port Everglades 2-3 hours before your scheduled departure. We'll drop you at the cruise terminal entrance and handle your luggage. Our drivers know the exact cruise terminal locations and can advise you on optimal timing based on traffic conditions.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve Boca Raton and the business corridor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Boca Raton is a core market for us. We serve corporate offices, the Boca Raton Resort & Club, and the entire business corridor. Flat-rate quotes available for recurring corporate trips.",
      },
    },
    {
      "@type": "Question",
      name: "What's the typical travel time from FLL to Miami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FLL to Downtown Miami is approximately 40-50 minutes depending on traffic. We monitor real-time conditions and route accordingly. Same premium drivers and fleet across the entire Miami-Dade and Broward corridor.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer group charter and special event services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We handle group charters, wedding transportation, corporate events, and multi-vehicle coordination. Call for customized quotes on group bookings of 3+ vehicles.",
      },
    },
    {
      "@type": "Question",
      name: "Are you licensed and insured for Port Everglades?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Apex holds all necessary permits and insurance certifications required by Port Everglades authority. We're a trusted, vetted transportation partner for cruise operations in South Florida.",
      },
    },
  ],
};

const stats = [
  {
    label: "FLL to Downtown",
    value: "~20 min",
  },
  {
    label: "Port Everglades",
    value: "Certified Operator",
  },
  {
    label: "Broward Coverage",
    value: "Complete Service Area",
  },
  {
    label: "Availability",
    value: "24/7 Service",
  },
];

const coverageAreas = [
  "Fort Lauderdale-Hollywood International Airport (FLL)",
  "Port Everglades – World's Largest Cruise Port",
  "Las Olas Boulevard & Downtown Fort Lauderdale",
  "Boca Raton & Delray Beach",
  "Pompano Beach & Coral Springs",
  "Hollywood & Hallandale Beach",
  "Dania Beach & Aventura",
];

const faqItems = [
  {
    question: "How do I arrange FLL airport pickup?",
    answer:
      "Contact us at (305) 707-5837 with your flight details, arrival terminal, and destination. We'll meet you at baggage claim with a nameplate. For departures, we pick up at your location and drop you at your departure terminal—no hassle, no waiting.",
  },
  {
    question: "What timing do I need for Port Everglades cruise embarkation?",
    answer:
      "We recommend arriving at Port Everglades 2-3 hours before your scheduled departure. We'll drop you at the cruise terminal entrance and handle your luggage. Our drivers know the exact cruise terminal locations and can advise you on optimal timing based on traffic conditions.",
  },
  {
    question: "Do you serve Boca Raton and the business corridor?",
    answer:
      "Absolutely. Boca Raton is a core market for us. We serve corporate offices, the Boca Raton Resort & Club, and the entire business corridor. Flat-rate quotes available for recurring corporate trips.",
  },
  {
    question: "What's the typical travel time from FLL to Miami?",
    answer:
      "FLL to Downtown Miami is approximately 40-50 minutes depending on traffic. We monitor real-time conditions and route accordingly. Same premium drivers and fleet across the entire Miami-Dade and Broward corridor.",
  },
  {
    question: "Do you offer group charter and special event services?",
    answer:
      "Yes. We handle group charters, wedding transportation, corporate events, and multi-vehicle coordination. Call for customized quotes on group bookings of 3+ vehicles.",
  },
  {
    question: "Are you licensed and insured for Port Everglades?",
    answer:
      "Yes. Apex holds all necessary permits and insurance certifications required by Port Everglades authority. We're a trusted, vetted transportation partner for cruise operations in South Florida.",
  },
];

export default function FortLauderdaleLocationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section
        style={{
          background: "#0A0A0A",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "56px",
            fontWeight: "700",
            color: "#FFFFFF",
            margin: "0 0 16px 0",
            letterSpacing: "-1px",
          }}
        >
          FORT LAUDERDALE
        </h1>
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "600",
            color: "#C9A84C",
            margin: "0 0 32px 0",
            letterSpacing: "0.5px",
          }}
        >
          FLL Airport, Port Everglades & All of Broward County
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "#AAAAAA",
            maxWidth: "750px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Apex International Transportation provides premium chauffeured service
          throughout South Florida's Broward County. From Fort Lauderdale-Hollywood
          International Airport to the world's largest cruise port at Port Everglades,
          we deliver the same luxury experience you expect from Apex.
        </p>
      </section>

      {/* Stats Section */}
      <section
        style={{
          background: "#141414",
          padding: "60px 20px",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "40px",
          }}
        >
          {stats.map((stat, idx) => (
            <div key={idx} style={{ textAlign: "center" }}>
              <p
                style={{
                  fontSize: "14px",
                  color: "#AAAAAA",
                  margin: "0 0 12px 0",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </p>
              <p
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "#C9A84C",
                  margin: "0",
                }}
              >
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage Section */}
      <section
        style={{
          background: "#0A0A0A",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#FFFFFF",
              margin: "0 0 40px 0",
              textAlign: "center",
            }}
          >
            Service Coverage Areas
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {coverageAreas.map((area, idx) => (
              <div
                key={idx}
                style={{
                  background: "#141414",
                  border: "1px solid #2A2A2A",
                  borderRadius: "8px",
                  padding: "24px 28px",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#C9A84C",
                    margin: "0",
                    lineHeight: "1.5",
                  }}
                >
                  {area}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Port Everglades Section */}
      <section
        style={{
          background: "#141414",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#FFFFFF",
              margin: "0 0 32px 0",
              textAlign: "center",
            }}
          >
            Port Everglades Specialist
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "#AAAAAA",
              lineHeight: "1.8",
              margin: "0 0 24px 0",
            }}
          >
            Port Everglades is the world's busiest cruise port, hosting over 30 million
            passengers annually across three massive cruise terminals. Apex International
            Transportation holds all necessary permits and certifications to operate
            within Port Everglades, and our drivers are intimately familiar with every
            terminal, parking area, and access point.
          </p>
          <p
            style={{
              fontSize: "17px",
              color: "#AAAAAA",
              lineHeight: "1.8",
              margin: "0",
            }}
          >
            Whether you're embarking on a Caribbean cruise, returning home after a week
            at sea, or coordinating group cruise transportation, we handle every detail
            with precision. We know the exact drop-off locations, parking procedures, and
            optimal arrival times to ensure you start your vacation stress-free.
          </p>
        </div>
      </section>

      {/* Vehicle Image Section */}
      <section
        style={{
          background: "#0A0A0A",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#FFFFFF",
              margin: "0 0 48px 0",
            }}
          >
            Premium Fleet
          </h2>
          <img
            src="https://apexlimola.com/wp-content/uploads/2023/02/A1054_high_res.png"
            alt="Charter Transportation Fort Lauderdale"
            style={{
              width: "100%",
              maxWidth: "600px",
              borderRadius: "8px",
              display: "block",
              margin: "0 auto",
            }}
          />
          <p
            style={{
              fontSize: "16px",
              color: "#AAAAAA",
              margin: "32px auto 0",
              maxWidth: "600px",
              lineHeight: "1.6",
            }}
          >
            Our fleet includes luxury sedans, SUVs, and group transport vehicles—all
            meticulously maintained to the highest standards. Every vehicle is regularly
            inspected, professionally detailed, and equipped with the amenities you expect
            from Apex.
          </p>
        </div>
      </section>

      {/* Corporate Section */}
      <section
        style={{
          background: "#141414",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#FFFFFF",
              margin: "0 0 32px 0",
              textAlign: "center",
            }}
          >
            Corporate Transportation
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "#AAAAAA",
              lineHeight: "1.8",
              margin: "0 0 24px 0",
              textAlign: "center",
            }}
          >
            Fort Lauderdale and Boca Raton are thriving corporate centers. Apex serves
            as the preferred ground transportation partner for major corporations,
            investment firms, law offices, and executive teams across the Broward
            business corridor.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "32px",
              marginTop: "40px",
            }}
          >
            <div
              style={{
                background: "#0A0A0A",
                border: "1px solid #2A2A2A",
                borderRadius: "8px",
                padding: "32px 28px",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#C9A84C",
                  margin: "0 0 16px 0",
                }}
              >
                FLL Airport
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  color: "#AAAAAA",
                  margin: "0",
                  lineHeight: "1.6",
                }}
              >
                Executive arrivals and departures with white-glove service. Real-time
                flight tracking and flexible pickup/dropoff scheduling.
              </p>
            </div>

            <div
              style={{
                background: "#0A0A0A",
                border: "1px solid #2A2A2A",
                borderRadius: "8px",
                padding: "32px 28px",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#C9A84C",
                  margin: "0 0 16px 0",
                }}
              >
                Boca Raton Corridor
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  color: "#AAAAAA",
                  margin: "0",
                  lineHeight: "1.6",
                }}
              >
                Regular service to corporate offices, the Boca Raton Resort & Club, and
                meeting venues. Contract pricing for recurring trips.
              </p>
            </div>

            <div
              style={{
                background: "#0A0A0A",
                border: "1px solid #2A2A2A",
                borderRadius: "8px",
                padding: "32px 28px",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#C9A84C",
                  margin: "0 0 16px 0",
                }}
              >
                Executive Accounts
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  color: "#AAAAAA",
                  margin: "0",
                  lineHeight: "1.6",
                }}
              >
                Dedicated account management, consistent driver assignments, and unified
                billing for multi-vehicle corporate programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Card Section */}
      <section
        style={{
          background: "#0A0A0A",
          padding: "60px 20px",
          borderTop: "1px solid #2A2A2A",
        }}
      >
        <div
          style={{
            maxWidth: "500px",
            margin: "0 auto",
            background: "#141414",
            border: "1px solid #2A2A2A",
            borderRadius: "12px",
            padding: "48px 40px",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "28px",
              fontWeight: "700",
              color: "#FFFFFF",
              margin: "0 0 12px 0",
            }}
          >
            Fort Lauderdale Division
          </h3>
          <p
            style={{
              fontSize: "14px",
              color: "#AAAAAA",
              margin: "0 0 32px 0",
              letterSpacing: "0.5px",
            }}
          >
            Available 24/7 for Bookings
          </p>

          <a
            href="tel:3057075837"
            style={{
              display: "inline-block",
              fontSize: "32px",
              fontWeight: "700",
              color: "#C9A84C",
              textDecoration: "none",
              marginBottom: "24px",
            }}
          >
            (305) 707-5837
          </a>

          <p
            style={{
              fontSize: "15px",
              color: "#AAAAAA",
              margin: "0",
              lineHeight: "1.6",
            }}
          >
            Call for immediate bookings, corporate contracts, group charters, and
            special event transportation.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        style={{
          background: "#141414",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#FFFFFF",
              margin: "0 0 60px 0",
              textAlign: "center",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div style={{ display: "grid", gap: "32px" }}>
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: "#0A0A0A",
                  border: "1px solid #2A2A2A",
                  borderRadius: "8px",
                  padding: "28px 32px",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#C9A84C",
                    margin: "0 0 16px 0",
                  }}
                >
                  {item.question}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#AAAAAA",
                    margin: "0",
                    lineHeight: "1.6",
                  }}
                >
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          background: "#0A0A0A",
          padding: "80px 20px",
          textAlign: "center",
          borderTop: "1px solid #2A2A2A",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            fontWeight: "700",
            color: "#FFFFFF",
            margin: "0 0 20px 0",
          }}
        >
          Ready to Book Your Transportation?
        </h2>
        <p
          style={{
            fontSize: "17px",
            color: "#AAAAAA",
            margin: "0 0 40px 0",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Contact the Fort Lauderdale Division today for airport pickups, Port
          Everglades cruise service, corporate transportation, or special event
          bookings.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <a
            href="tel:3057075837"
            style={{
              display: "inline-block",
              fontSize: "15px",
              fontWeight: "700",
              color: "#000000",
              background: "linear-gradient(90deg, #9A8540 0%, #C9A84C 50%, #9A8540 100%)",
              padding: "16px 40px",
              borderRadius: "9999px",
              textDecoration: "none",
              transition: "opacity 0.3s ease",
              letterSpacing: "0.5px",
            }}
          >
            CALL (305) 707-5837
          </a>
          <Link
            href="/locations/"
            style={{
              display: "inline-block",
              fontSize: "15px",
              fontWeight: "700",
              color: "#FFFFFF",
              background: "#2A2A2A",
              padding: "16px 40px",
              borderRadius: "9999px",
              textDecoration: "none",
              transition: "background 0.3s ease",
              letterSpacing: "0.5px",
            }}
          >
            View All Locations
          </Link>
        </div>
      </section>
    </>
  );
}
