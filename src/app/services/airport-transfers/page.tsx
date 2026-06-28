import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Airport Transfer Service | LAX, LAS, MIA, FLL",
  description: "Professional airport limo and charter service. Real-time flight tracking, meet & greet, on-time guarantee at LAX, LAS, MIA, FLL and 20+ airports. Call 877-427-1777.",
};

export default function AirportTransfersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://apexlimo.com/services/airport-transfers/",
        "name": "Airport Transfer Service | LAX, LAS, MIA, FLL",
        "description": "Professional airport limo and charter service. Real-time flight tracking, meet & greet, on-time guarantee at LAX, LAS, MIA, FLL and 20+ airports.",
        "url": "https://apexlimo.com/services/airport-transfers/",
        "isPartOf": { "@id": "https://apexlimo.com/" },
        "breadcrumb": { "@id": "https://apexlimo.com/services/airport-transfers/#breadcrumb" },
        "mainEntity": { "@id": "https://apexlimo.com/services/airport-transfers/#faqpage" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://apexlimo.com/services/airport-transfers/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://apexlimo.com/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://apexlimo.com/services/",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Airport Transfers",
            "item": "https://apexlimo.com/services/airport-transfers/",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://apexlimo.com/services/airport-transfers/#service",
        "name": "Airport Transfer Service",
        "description": "Professional airport transportation with real-time flight tracking, meet & greet, and on-time guarantee.",
        "serviceType": "Ground Transportation",
        "areaServed": [
          {
            "@type": "Place",
            "name": "Los Angeles",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Los Angeles",
              "addressRegion": "CA",
              "postalCode": "90001",
              "addressCountry": "US",
            },
          },
          {
            "@type": "Place",
            "name": "Las Vegas",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Las Vegas",
              "addressRegion": "NV",
              "addressCountry": "US",
            },
          },
          {
            "@type": "Place",
            "name": "Miami",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Miami",
              "addressRegion": "FL",
              "addressCountry": "US",
            },
          },
        ],
        "provider": {
          "@type": "Organization",
          "name": "Apex International Transportation",
          "telephone": "877-427-1777",
          "url": "https://apexlimo.com/",
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Airport Transfer Vehicles",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Sedan & SUV Airport Transfer",
                "description": "Comfortable airport transfers for 1–6 passengers.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Sprinter Airport Transfer",
                "description": "Group airport transfers for up to 14 passengers.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Minibus Airport Transfer",
                "description": "Large group airport transfers for up to 40 passengers.",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://apexlimo.com/services/airport-transfers/#faqpage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How far in advance should I book my airport transfer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We recommend booking at least 24 hours in advance for domestic flights and 48 hours for international flights. However, we can often accommodate same-day bookings depending on availability. For guaranteed service, book as early as possible.",
            },
          },
          {
            "@type": "Question",
            "name": "Does your airport transfer service include real-time flight tracking?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we monitor your flight in real time. Our dispatch team tracks your arrival and adjusts pickup timing automatically to meet you at the optimal time—usually 15 minutes before you reach baggage claim.",
            },
          },
          {
            "@type": "Question",
            "name": "What happens if my flight is delayed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our real-time flight monitoring system automatically detects delays. Your chauffeur will receive updated information instantly, and there is no additional charge for the delay. We guarantee your driver will arrive on time, no matter what.",
            },
          },
          {
            "@type": "Question",
            "name": "What is included in your airport transfer service?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our airport transfers include flight monitoring, chauffeur arrival 15 minutes before your ETA, meet & greet service with name sign at baggage claim, luggage assistance, and 60 minutes of complimentary wait time for domestic flights (90 minutes for international flights).",
            },
          },
          {
            "@type": "Question",
            "name": "Which airports do you serve?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We serve major airports including LAX (Los Angeles International), BUR (Burbank), LGB (Long Beach), ONT (Ontario), LAS (Harry Reid International, Las Vegas), MIA (Miami International), FLL (Fort Lauderdale/Hollywood), SNA (John Wayne, Orange County), and 20+ additional airports nationwide. Contact us for service to your specific airport.",
            },
          },
          {
            "@type": "Question",
            "name": "Can I request a specific vehicle type for my airport transfer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We offer Sedans and SUVs for 1–6 passengers, Sprinter vans for up to 14 passengers, and Minibuses for groups up to 40 passengers. Specify your preferred vehicle at booking, and we will confirm availability.",
            },
          },
        ],
      },
    ],
  };

  const airports = [
    {
      code: "LAX",
      name: "Los Angeles International",
      terminals: "All Terminals",
      airlines: "Delta, United, American, Southwest, International",
    },
    {
      code: "BUR",
      name: "Burbank Hollywood",
      terminals: "Single Terminal",
      airlines: "Southwest, Alaska, Delta, United",
    },
    {
      code: "LGB",
      name: "Long Beach",
      terminals: "Single Terminal",
      airlines: "JetBlue, Delta, Southwest",
    },
    {
      code: "ONT",
      name: "Ontario International",
      terminals: "Terminals 1–2",
      airlines: "Southwest, Alaska, Spirit, United",
    },
    {
      code: "LAS",
      name: "Harry Reid International, Las Vegas",
      terminals: "All Terminals",
      airlines: "All Major Carriers",
    },
    {
      code: "MIA",
      name: "Miami International",
      terminals: "All Terminals",
      airlines: "All Major Carriers",
    },
    {
      code: "FLL",
      name: "Fort Lauderdale/Hollywood",
      terminals: "Terminals 1–4",
      airlines: "All Major Carriers",
    },
    {
      code: "SNA",
      name: "John Wayne, Orange County",
      terminals: "Single Terminal",
      airlines: "Southwest, Frontier, Spirit, United",
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Book Online or by Phone",
      description: "Reserve your airport transfer instantly through our website or call 877-427-1777.",
    },
    {
      number: 2,
      title: "Real-Time Flight Monitoring",
      description: "Our dispatch team automatically tracks your flight and adjusts arrival time accordingly.",
    },
    {
      number: 3,
      title: "Chauffeur Arrives Early",
      description: "Your professional driver arrives 15 minutes before you reach baggage claim.",
    },
    {
      number: 4,
      title: "Meet & Greet",
      description: "We meet you at baggage claim with a name sign and assist with your luggage.",
    },
    {
      number: 5,
      title: "Direct Transfer",
      description: "Relaxed ride to your destination with complimentary wait time included.",
    },
  ];

  const vehicles = [
    {
      type: "Sedan & SUV",
      capacity: "1–6 Passengers",
      description: "Perfect for individuals, couples, and small groups. Comfortable leather interiors, complimentary Wi-Fi, phone chargers, and refreshments.",
    },
    {
      type: "Sprinter Van",
      capacity: "Up to 14 Passengers",
      description: "Ideal for medium-sized groups. Spacious seating, climate control, luggage capacity, and professional service.",
    },
    {
      type: "Minibus",
      capacity: "Up to 40 Passengers",
      description: "Perfect for corporate events, tour groups, and large families. Fully equipped with climate control and luggage storage.",
    },
  ];

  const included = [
    "Real-Time Flight Tracking",
    "Chauffeur Arrives 15 Min Early",
    "Meet & Greet at Baggage Claim",
    "Name Sign Service",
    "Luggage Assistance",
    "60-Min Free Wait (Domestic)",
    "90-Min Free Wait (International)",
    "Professional, Courteous Service",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #0A0A0A 0%, #141414 100%)",
          borderBottom: `1px solid #2A2A2A`,
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "56px",
              fontWeight: "700",
              color: "#FFFFFF",
              marginBottom: "16px",
              letterSpacing: "-1px",
            }}
          >
            AIRPORT TRANSFERS
          </h1>
          <p
            style={{
              fontSize: "20px",
              color: "#C9A84C",
              marginBottom: "32px",
              fontWeight: "500",
            }}
          >
            Real-Time Flight Tracking. Meet & Greet. On-Time Guarantee.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              style={{
                background: "#C9A84C",
                color: "#0A0A0A",
                border: "none",
                padding: "14px 32px",
                fontSize: "16px",
                fontWeight: "600",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Book Now
            </button>
            <a
              href="tel:877-427-1777"
              style={{
                color: "#C9A84C",
                border: `1px solid #C9A84C`,
                padding: "14px 32px",
                fontSize: "16px",
                fontWeight: "600",
                borderRadius: "4px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Call 877-427-1777
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        style={{
          background: "#0A0A0A",
          borderBottom: `1px solid #2A2A2A`,
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#FFFFFF",
              marginBottom: "56px",
              textAlign: "center",
            }}
          >
            How It Works
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "24px",
            }}
          >
            {steps.map((step) => (
              <div
                key={step.number}
                style={{
                  background: "#141414",
                  border: `1px solid #2A2A2A`,
                  borderRadius: "8px",
                  padding: "32px 24px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "#C9A84C",
                    color: "#0A0A0A",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    fontWeight: "700",
                    margin: "0 auto 16px",
                  }}
                >
                  {step.number}
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#FFFFFF",
                    marginBottom: "12px",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#AAAAAA",
                    lineHeight: "1.6",
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Airports Served */}
      <section
        style={{
          background: "#141414",
          borderBottom: `1px solid #2A2A2A`,
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#FFFFFF",
              marginBottom: "56px",
              textAlign: "center",
            }}
          >
            Airports Served
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {airports.map((airport) => (
              <div
                key={airport.code}
                style={{
                  background: "#0A0A0A",
                  border: `1px solid #2A2A2A`,
                  borderRadius: "8px",
                  padding: "28px",
                  borderLeft: `4px solid #C9A84C`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "28px",
                      fontWeight: "700",
                      color: "#C9A84C",
                    }}
                  >
                    {airport.code}
                  </span>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#FFFFFF",
                      margin: "0",
                    }}
                  >
                    {airport.name}
                  </h3>
                </div>
                <div style={{ marginBottom: "12px" }}>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#AAAAAA",
                      margin: "6px 0",
                    }}
                  >
                    <strong style={{ color: "#FFFFFF" }}>Terminals:</strong> {airport.terminals}
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#AAAAAA",
                      margin: "6px 0",
                    }}
                  >
                    <strong style={{ color: "#FFFFFF" }}>Airlines:</strong> {airport.airlines}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Options */}
      <section
        style={{
          background: "#0A0A0A",
          borderBottom: `1px solid #2A2A2A`,
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#FFFFFF",
              marginBottom: "56px",
              textAlign: "center",
            }}
          >
            Vehicle Options
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "28px",
            }}
          >
            {vehicles.map((vehicle, idx) => (
              <div
                key={idx}
                style={{
                  background: "#141414",
                  border: `1px solid #2A2A2A`,
                  borderRadius: "8px",
                  padding: "32px",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#C9A84C",
                    marginBottom: "8px",
                  }}
                >
                  {vehicle.type}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#FFFFFF",
                    marginBottom: "16px",
                  }}
                >
                  {vehicle.capacity}
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#AAAAAA",
                    lineHeight: "1.6",
                  }}
                >
                  {vehicle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section
        style={{
          background: "#141414",
          borderBottom: `1px solid #2A2A2A`,
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#FFFFFF",
              marginBottom: "56px",
              textAlign: "center",
            }}
          >
            What&apos;s Included
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            {included.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: "#0A0A0A",
                  border: `1px solid #2A2A2A`,
                  borderRadius: "6px",
                  padding: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <span
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
                    fontSize: "14px",
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#FFFFFF",
                    margin: "0",
                    fontWeight: "500",
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        style={{
          background: "#0A0A0A",
          borderBottom: `1px solid #2A2A2A`,
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#FFFFFF",
              marginBottom: "56px",
              textAlign: "center",
            }}
          >
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div
              style={{
                background: "#141414",
                border: `1px solid #2A2A2A`,
                borderRadius: "8px",
                padding: "28px",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#C9A84C",
                  marginBottom: "12px",
                  margin: "0 0 12px 0",
                }}
              >
                How far in advance should I book my airport transfer?
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#AAAAAA",
                  lineHeight: "1.6",
                  margin: "0",
                }}
              >
                We recommend booking at least 24 hours in advance for domestic flights and 48 hours for international flights. However, we can often accommodate same-day bookings depending on availability. For guaranteed service, book as early as possible.
              </p>
            </div>

            <div
              style={{
                background: "#141414",
                border: `1px solid #2A2A2A`,
                borderRadius: "8px",
                padding: "28px",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#C9A84C",
                  marginBottom: "12px",
                  margin: "0 0 12px 0",
                }}
              >
                Does your airport transfer service include real-time flight tracking?
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#AAAAAA",
                  lineHeight: "1.6",
                  margin: "0",
                }}
              >
                Yes, we monitor your flight in real time. Our dispatch team tracks your arrival and adjusts pickup timing automatically to meet you at the optimal time—usually 15 minutes before you reach baggage claim.
              </p>
            </div>

            <div
              style={{
                background: "#141414",
                border: `1px solid #2A2A2A`,
                borderRadius: "8px",
                padding: "28px",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#C9A84C",
                  marginBottom: "12px",
                  margin: "0 0 12px 0",
                }}
              >
                What happens if my flight is delayed?
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#AAAAAA",
                  lineHeight: "1.6",
                  margin: "0",
                }}
              >
                Our real-time flight monitoring system automatically detects delays. Your chauffeur will receive updated information instantly, and there is no additional charge for the delay. We guarantee your driver will arrive on time, no matter what.
              </p>
            </div>

            <div
              style={{
                background: "#141414",
                border: `1px solid #2A2A2A`,
                borderRadius: "8px",
                padding: "28px",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#C9A84C",
                  marginBottom: "12px",
                  margin: "0 0 12px 0",
                }}
              >
                What is included in your airport transfer service?
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#AAAAAA",
                  lineHeight: "1.6",
                  margin: "0",
                }}
              >
                Our airport transfers include flight monitoring, chauffeur arrival 15 minutes before your ETA, meet & greet service with name sign at baggage claim, luggage assistance, and 60 minutes of complimentary wait time for domestic flights (90 minutes for international flights).
              </p>
            </div>

            <div
              style={{
                background: "#141414",
                border: `1px solid #2A2A2A`,
                borderRadius: "8px",
                padding: "28px",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#C9A84C",
                  marginBottom: "12px",
                  margin: "0 0 12px 0",
                }}
              >
                Which airports do you serve?
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#AAAAAA",
                  lineHeight: "1.6",
                  margin: "0",
                }}
              >
                We serve major airports including LAX (Los Angeles International), BUR (Burbank), LGB (Long Beach), ONT (Ontario), LAS (Harry Reid International, Las Vegas), MIA (Miami International), FLL (Fort Lauderdale/Hollywood), SNA (John Wayne, Orange County), and 20+ additional airports nationwide. Contact us for service to your specific airport.
              </p>
            </div>

            <div
              style={{
                background: "#141414",
                border: `1px solid #2A2A2A`,
                borderRadius: "8px",
                padding: "28px",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#C9A84C",
                  marginBottom: "12px",
                  margin: "0 0 12px 0",
                }}
              >
                Can I request a specific vehicle type for my airport transfer?
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#AAAAAA",
                  lineHeight: "1.6",
                  margin: "0",
                }}
              >
                Yes. We offer Sedans and SUVs for 1–6 passengers, Sprinter vans for up to 14 passengers, and Minibuses for groups up to 40 passengers. Specify your preferred vehicle at booking, and we will confirm availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Links & Navigation */}
      <section
        style={{
          background: "#141414",
          borderBottom: `1px solid #2A2A2A`,
          padding: "60px 24px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#FFFFFF",
              marginBottom: "24px",
            }}
          >
            Related Services
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
            }}
          >
            <Link
              href="/services/"
              style={{
                color: "#C9A84C",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "500",
                borderBottom: `1px solid #2A2A2A`,
                paddingBottom: "8px",
                display: "block",
              }}
            >
              View All Services
            </Link>
            <Link
              href="/services/corporate-transportation/"
              style={{
                color: "#C9A84C",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "500",
                borderBottom: `1px solid #2A2A2A`,
                paddingBottom: "8px",
                display: "block",
              }}
            >
              Corporate Transportation
            </Link>
            <Link
              href="/services/event-transportation/"
              style={{
                color: "#C9A84C",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "500",
                borderBottom: `1px solid #2A2A2A`,
                paddingBottom: "8px",
                display: "block",
              }}
            >
              Event Transportation
            </Link>
            <Link
              href="/services/charter-service/"
              style={{
                color: "#C9A84C",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "500",
                borderBottom: `1px solid #2A2A2A`,
                paddingBottom: "8px",
                display: "block",
              }}
            >
              Charter Service
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section
        style={{
          background: "linear-gradient(135deg, #0A0A0A 0%, #141414 100%)",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "700",
              color: "#FFFFFF",
              marginBottom: "24px",
            }}
          >
            Ready to Book Your Airport Transfer?
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#AAAAAA",
              marginBottom: "32px",
              lineHeight: "1.6",
            }}
          >
            Call us today at <strong style={{ color: "#C9A84C" }}>877-427-1777</strong> or book online. Real-time flight tracking, professional service, guaranteed on-time arrival.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              style={{
                background: "#C9A84C",
                color: "#0A0A0A",
                border: "none",
                padding: "14px 32px",
                fontSize: "16px",
                fontWeight: "600",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Book Now
            </button>
            <a
              href="tel:877-427-1777"
              style={{
                color: "#C9A84C",
                border: `1px solid #C9A84C`,
                padding: "14px 32px",
                fontSize: "16px",
                fontWeight: "600",
                borderRadius: "4px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Call 877-427-1777
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
