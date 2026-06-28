import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Point-to-Point Transfer Service | Flat Rate Pricing",
  description:
    "Reliable flat-rate door-to-door transportation between any two locations. No meter, no surprises. LA, Las Vegas, Miami, Fort Lauderdale. Call 877-427-1777.",
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://apexlimola.com/services/point-to-point/#service",
      "name": "Point-to-Point Transfer Service",
      "description":
        "Flat-rate door-to-door transportation between any two locations with transparent pricing and professional service.",
      "provider": {
        "@type": "Organization",
        "name": "Apex International Transportation",
        "telephone": "877-427-1777",
        "url": "https://apexlimola.com",
      },
      "areaServed": [
        "Los Angeles",
        "Las Vegas",
        "Miami",
        "Fort Lauderdale",
        "Southern California",
      ],
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "priceRange": "$$",
        "description": "Flat-rate point-to-point transfers with transparent pricing",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://apexlimola.com/services/point-to-point/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://apexlimola.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://apexlimola.com/services",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Point-to-Point Transfer",
          "item": "https://apexlimola.com/services/point-to-point",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://apexlimola.com/services/point-to-point/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a point-to-point transfer service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Point-to-point transfer is a flat-rate door-to-door transportation service from one specific location to another. You pay a set price regardless of traffic or route variations, with no meter running.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I book a point-to-point transfer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can book online through our website or call 877-427-1777. Provide your pickup and drop-off locations, and we'll provide an instant flat-rate quote.",
          },
        },
        {
          "@type": "Question",
          "name": "Are the rates guaranteed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Once you confirm your flat-rate quote, that is the price you pay—no hidden fees, no surprises at your destination, regardless of traffic conditions.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I book point-to-point for business travel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Our point-to-point service is ideal for business travel, airport transfers, meetings, and conferences. We offer professional chauffeurs and premium vehicles.",
          },
        },
        {
          "@type": "Question",
          "name": "What vehicle options are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer a full fleet including sedans, SUVs, stretch limousines, and party buses. Choose the vehicle that fits your needs and budget.",
          },
        },
      ],
    },
  ],
};

export default function PointToPointPage() {
  const benefits = [
    {
      title: "Transparent Flat-Rate Pricing",
      description:
        "Know your exact price before you book. No meter, no surge pricing, no surprises.",
    },
    {
      title: "On-Time Guarantee",
      description:
        "Reliable, punctual service. We track your driver in real time and arrive when promised.",
    },
    {
      title: "Professional Chauffeur",
      description:
        "Experienced, courteous drivers trained in luxury service and passenger safety.",
    },
    {
      title: "All Vehicle Types Available",
      description:
        "Choose from sedans, SUVs, stretch limousines, and party buses for any occasion.",
    },
    {
      title: "No Hidden Fees",
      description:
        "Tolls and gratuity are separate, but all other costs are included in your flat rate.",
    },
    {
      title: "GPS Tracked",
      description:
        "Real-time tracking lets you know exactly where your driver is and when they'll arrive.",
    },
  ];

  const commonRoutes = [
    { label: "LAX to Beverly Hills", city: "Los Angeles" },
    { label: "LAX to West Hollywood", city: "Los Angeles" },
    { label: "LAX to Downtown LA", city: "Los Angeles" },
    { label: "LAX to Anaheim / Disneyland", city: "Orange County" },
    { label: "LAX to San Diego", city: "Southern California" },
    { label: "Las Vegas to Henderson", city: "Las Vegas" },
    { label: "Las Vegas to Summerlin", city: "Las Vegas" },
    { label: "Miami to Fort Lauderdale", city: "South Florida" },
    { label: "FLL to Boca Raton", city: "South Florida" },
    { label: "FLL to Palm Beach", city: "South Florida" },
  ];

  const faqs = [
    {
      question: "What is a point-to-point transfer service?",
      answer:
        "Point-to-point transfer is a flat-rate door-to-door transportation service from one specific location to another. You pay a set price regardless of traffic or route variations, with no meter running.",
    },
    {
      question: "How do I book a point-to-point transfer?",
      answer:
        "You can book online through our website or call 877-427-1777. Provide your pickup and drop-off locations, and we'll provide an instant flat-rate quote.",
    },
    {
      question: "Are the rates guaranteed?",
      answer:
        "Yes. Once you confirm your flat-rate quote, that is the price you pay—no hidden fees, no surprises at your destination, regardless of traffic conditions.",
    },
    {
      question: "Can I book point-to-point for business travel?",
      answer:
        "Absolutely. Our point-to-point service is ideal for business travel, airport transfers, meetings, and conferences. We offer professional chauffeurs and premium vehicles.",
    },
    {
      question: "What vehicle options are available?",
      answer:
        "We offer a full fleet including sedans, SUVs, stretch limousines, and party buses. Choose the vehicle that fits your needs and budget.",
    },
  ];

  return (
    <main style={{ backgroundColor: "#0A0A0A", color: "#FFFFFF" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #141414 0%, #0A0A0A 100%)",
          borderBottom: "1px solid #2A2A2A",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "48px",
              fontWeight: 700,
              color: "#C9A84C",
              marginBottom: "16px",
              letterSpacing: "2px",
            }}
          >
            POINT-TO-POINT
          </h1>
          <p
            style={{
              fontSize: "28px",
              fontWeight: 400,
              color: "#FFFFFF",
              marginBottom: "24px",
              lineHeight: 1.4,
            }}
          >
            Flat-Rate Door-to-Door Transfers — No Meter, No Surprises
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "#AAAAAA",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Book a flat-rate transfer between any two locations. Transparent
            pricing, professional drivers, and reliable service across Los
            Angeles, Las Vegas, Miami, and beyond.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section
        style={{
          padding: "80px 20px",
          backgroundColor: "#0A0A0A",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 700,
              color: "#FFFFFF",
              marginBottom: "60px",
              textAlign: "center",
            }}
          >
            Why Choose Apex Point-to-Point?
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "40px",
            }}
          >
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                style={{
                  padding: "32px",
                  backgroundColor: "#141414",
                  borderLeft: "3px solid #C9A84C",
                  borderRadius: "4px",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#C9A84C",
                    marginBottom: "12px",
                  }}
                >
                  {benefit.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#AAAAAA",
                    lineHeight: 1.6,
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Routes */}
      <section
        style={{
          padding: "80px 20px",
          backgroundColor: "#141414",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 700,
              color: "#FFFFFF",
              marginBottom: "60px",
              textAlign: "center",
            }}
          >
            Popular Routes
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {commonRoutes.map((route, idx) => (
              <div
                key={idx}
                style={{
                  padding: "20px",
                  backgroundColor: "#0A0A0A",
                  border: "1px solid #2A2A2A",
                  borderRadius: "4px",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    color: "#C9A84C",
                    fontWeight: 600,
                    marginBottom: "6px",
                  }}
                >
                  {route.city}
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#FFFFFF",
                    fontWeight: 500,
                  }}
                >
                  {route.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Pricing Works */}
      <section
        style={{
          padding: "80px 20px",
          backgroundColor: "#0A0A0A",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 700,
              color: "#FFFFFF",
              marginBottom: "48px",
              textAlign: "center",
            }}
          >
            How Pricing Works
          </h2>
          <div style={{ display: "grid", gap: "32px" }}>
            {[
              {
                step: "1",
                title: "Book Online or Call",
                desc: "Reserve your transfer through our website or call 877-427-1777 at any time.",
              },
              {
                step: "2",
                title: "Receive Instant Quote",
                desc: "Enter your pickup and drop-off locations and get an immediate flat-rate estimate.",
              },
              {
                step: "3",
                title: "Confirm Your Rate",
                desc: "Review and confirm the quoted price. No hidden fees, no surprises.",
              },
              {
                step: "4",
                title: "Arrive at Your Destination",
                desc: "Your professional driver arrives on time in a premium vehicle. Pay the agreed-upon rate.",
              },
            ].map((item, idx) => (
              <div key={idx} style={{ display: "flex", gap: "24px" }}>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#C9A84C",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    color: "#0A0A0A",
                    flexShrink: 0,
                    fontSize: "20px",
                  }}
                >
                  {item.step}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      marginBottom: "8px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#AAAAAA",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business vs Leisure */}
      <section
        style={{
          padding: "80px 20px",
          backgroundColor: "#141414",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 700,
              color: "#FFFFFF",
              marginBottom: "60px",
              textAlign: "center",
            }}
          >
            Business & Leisure Options
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "40px",
            }}
          >
            <div
              style={{
                padding: "40px",
                backgroundColor: "#0A0A0A",
                border: "2px solid #C9A84C",
                borderRadius: "4px",
              }}
            >
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#C9A84C",
                  marginBottom: "20px",
                }}
              >
                Business Travel
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  "Airport to meetings",
                  "Hotel to conference",
                  "Executive transfers",
                  "Client entertainment",
                  "Corporate accounts available",
                  "Invoice billing option",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontSize: "14px",
                      color: "#AAAAAA",
                      paddingLeft: "24px",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "#C9A84C",
                      }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                padding: "40px",
                backgroundColor: "#0A0A0A",
                border: "2px solid #C9A84C",
                borderRadius: "4px",
              }}
            >
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#C9A84C",
                  marginBottom: "20px",
                }}
              >
                Leisure & Events
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  "Night out & entertainment",
                  "Celebration & special events",
                  "Casino & resort transfers",
                  "Shopping & dining",
                  "Group travel options",
                  "Flexible booking & cancellation",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontSize: "14px",
                      color: "#AAAAAA",
                      paddingLeft: "24px",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "#C9A84C",
                      }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section
        style={{
          padding: "80px 20px",
          backgroundColor: "#0A0A0A",
          borderBottom: "1px solid #2A2A2A",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <img
            src="https://apexlimola.com/wp-content/uploads/2023/02/Mercedes_s-class_w223_black_1.png"
            alt="Point to Point Transfer Service"
            style={{
              width: "100%",
              maxWidth: "600px",
              borderRadius: "8px",
              marginBottom: "32px",
            }}
          />
          <p
            style={{
              fontSize: "14px",
              color: "#AAAAAA",
              lineHeight: 1.6,
            }}
          >
            Premium Mercedes-Benz and luxury vehicles ready for your
            point-to-point transfer. Professional drivers, comfortable rides,
            guaranteed rates.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        style={{
          padding: "80px 20px",
          backgroundColor: "#141414",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 700,
              color: "#FFFFFF",
              marginBottom: "60px",
              textAlign: "center",
            }}
          >
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  padding: "24px",
                  backgroundColor: "#0A0A0A",
                  border: "1px solid #2A2A2A",
                  borderRadius: "4px",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#C9A84C",
                    marginBottom: "12px",
                  }}
                >
                  {faq.question}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#AAAAAA",
                    lineHeight: 1.6,
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: "80px 20px",
          backgroundColor: "#0A0A0A",
          borderBottom: "1px solid #2A2A2A",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 700,
              color: "#FFFFFF",
              marginBottom: "24px",
            }}
          >
            Ready to Book Your Transfer?
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#AAAAAA",
              marginBottom: "40px",
              lineHeight: 1.6,
            }}
          >
            Get an instant flat-rate quote or speak with our team about your
            point-to-point transportation needs.
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <a
              href="/book"
              className="apex-btn-outline-gold-dark"
            >
              BOOK NOW
            </a>
            <p
              style={{
                fontSize: "14px",
                color: "#AAAAAA",
                margin: "16px 0 0 0",
              }}
            >
              Or call us at{" "}
              <a
                href="tel:877-427-1777"
                style={{
                  color: "#C9A84C",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                877-427-1777
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
