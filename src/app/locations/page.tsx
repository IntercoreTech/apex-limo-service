import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Locations",
  description: "Apex International Transportation operates across 4 premium markets: Los Angeles, Las Vegas, Miami, and Fort Lauderdale with premium ground transportation services.",
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
  ],
};

interface LocationCard {
  city: string;
  state: string;
  address: string;
  phone: string;
  href: string;
  coverage: string[];
}

const locations: LocationCard[] = [
  {
    city: "Los Angeles",
    state: "CA",
    address: "14485 Raymer St, Van Nuys, CA 91405",
    phone: "(818) 788-5466",
    href: "/locations/los-angeles/",
    coverage: [
      "LAX, BUR, LGB, ONT airport service",
      "Beverly Hills & Santa Monica",
      "Downtown LA, Orange County & Inland Empire",
      "San Diego & surrounding areas",
    ],
  },
  {
    city: "Las Vegas",
    state: "NV",
    address: "Las Vegas Division",
    phone: "(877) 427-1777",
    href: "/locations/las-vegas/",
    coverage: [
      "Harry Reid International Airport",
      "The Strip hotels & casinos",
      "LVCC convention center",
      "Day trips to Hoover Dam & Grand Canyon",
    ],
  },
  {
    city: "Miami",
    state: "FL",
    address: "3911 NW 26th St, Miami, FL 33142",
    phone: "(305) 707-5837",
    href: "/locations/miami/",
    coverage: [
      "Miami International Airport (MIA)",
      "PortMiami cruise terminals",
      "South Beach, Brickell & Coral Gables",
      "Coconut Grove & surrounding areas",
    ],
  },
  {
    city: "Fort Lauderdale",
    state: "FL",
    address: "Fort Lauderdale Division",
    phone: "(305) 707-5837",
    href: "/locations/fort-lauderdale/",
    coverage: [
      "Fort Lauderdale-Hollywood Int'l Airport",
      "Port Everglades cruise terminals",
      "Las Olas Boulevard & downtown",
      "Boca Raton & Palm Beach",
    ],
  },
];

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Can I book transportation across multiple markets?",
    answer:
      "Yes. Apex International Transportation coordinates seamlessly across all four markets. Whether you need service in Los Angeles, Las Vegas, Miami, or Fort Lauderdale, our integrated dispatch and fleet management ensure consistent, premium service wherever you travel.",
  },
  {
    question: "What areas do you serve from each location?",
    answer:
      "Los Angeles covers LAX, BUR, LGB, ONT airports and surrounding Southern California. Las Vegas serves Harry Reid Airport and The Strip. Miami covers MIA airport and PortMiami. Fort Lauderdale serves FLL airport and Port Everglades cruise terminals. Each location provides service to major business and hospitality districts.",
  },
  {
    question: "How do I book across different markets?",
    answer:
      "Contact any of our locations and provide your itinerary. Our team coordinates multi-market bookings from initial contact through completion. You'll have one consistent point of contact and unified billing for all legs of your journey.",
  },
  {
    question: "Do you offer corporate contracts across all markets?",
    answer:
      "Absolutely. We offer enterprise-level service agreements, consistent pricing, and dedicated account management across all four markets. Contact our corporate services team to discuss custom solutions for your organization.",
  },
];

export default function LocationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
          OUR LOCATIONS
        </h1>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#C9A84C",
            margin: "0 0 32px 0",
            letterSpacing: "0.5px",
          }}
        >
          Premium Service Across 4 Markets
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "#AAAAAA",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Apex International Transportation operates strategically across Los
          Angeles, Las Vegas, Miami, and Fort Lauderdale. Each market delivers
          the same premium service standard, professional drivers, and luxury
          fleet you expect from us.
        </p>
      </section>

      {/* Location Cards Grid */}
      <section
        style={{
          background: "#141414",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(520px, 1fr))",
            gap: "40px",
          }}
        >
          {locations.map((location) => (
            <div
              key={location.city}
              style={{
                background: "#0A0A0A",
                border: "1px solid #2A2A2A",
                borderRadius: "8px",
                padding: "40px 32px",
              }}
            >
              <div style={{ marginBottom: "24px" }}>
                <h3
                  style={{
                    fontSize: "28px",
                    fontWeight: "700",
                    color: "#FFFFFF",
                    margin: "0 0 8px 0",
                  }}
                >
                  {location.city}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#C9A84C",
                    margin: "0",
                    fontWeight: "600",
                    letterSpacing: "0.5px",
                  }}
                >
                  {location.state}
                </p>
              </div>

              <div style={{ marginBottom: "28px" }}>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#AAAAAA",
                    margin: "0 0 12px 0",
                    lineHeight: "1.5",
                  }}
                >
                  {location.address}
                </p>
                <a
                  href={`tel:${location.phone.replace(/\D/g, "")}`}
                  style={{
                    fontSize: "15px",
                    color: "#C9A84C",
                    textDecoration: "none",
                    fontWeight: "600",
                  }}
                >
                  {location.phone}
                </a>
              </div>

              <div style={{ marginBottom: "32px" }}>
                <ul
                  style={{
                    listStyle: "none",
                    padding: "0",
                    margin: "0",
                  }}
                >
                  {location.coverage.map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        fontSize: "15px",
                        color: "#AAAAAA",
                        marginBottom: idx < location.coverage.length - 1 ? "12px" : "0",
                        paddingLeft: "20px",
                        position: "relative",
                        lineHeight: "1.5",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: "0",
                          color: "#C9A84C",
                          fontWeight: "700",
                        }}
                      >
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={location.href}
                style={{
                  display: "inline-block",
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#000000",
                  background: "linear-gradient(90deg, #9A8540 0%, #C9A84C 50%, #9A8540 100%)",
                  padding: "14px 28px",
                  borderRadius: "9999px",
                  textDecoration: "none",
                  transition: "opacity 0.3s ease",
                  letterSpacing: "0.5px",
                }}
              >
                View {location.city} Transportation
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why We Operate Section */}
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
              margin: "0 0 32px 0",
              textAlign: "center",
            }}
          >
            Why We Operate Across 4 Markets
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "#AAAAAA",
              lineHeight: "1.8",
              margin: "0",
            }}
          >
            Strategic market selection allows us to serve high-value business corridors
            and hospitality hubs. Los Angeles anchors our West Coast presence with
            comprehensive Southern California coverage. Las Vegas captures the premium
            event and convention market. Miami and Fort Lauderdale extend our reach into
            the Southeast, serving cruise ports, airports, and major business centers.
            This geographic footprint enables us to maintain the highest service
            standards while building deep relationships in each market. Whether you're a
            frequent traveler, corporate accounts, or special event organizer, you'll
            find consistent, luxury transportation across all four locations.
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

      {/* CTA Bar */}
      <section
        style={{
          background: "#0A0A0A",
          padding: "60px 20px",
          textAlign: "center",
          borderTop: "1px solid #2A2A2A",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#FFFFFF",
            margin: "0 0 20px 0",
          }}
        >
          Ready to Experience Premium Transportation?
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#AAAAAA",
            margin: "0 0 32px 0",
          }}
        >
          Contact your local Apex office or book online today.
        </p>
        <a
          href="tel:8187885466"
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
          CALL (818) 788-5466
        </a>
      </section>
    </>
  );
}
