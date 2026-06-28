import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Miami Limo & Charter Service | MIA Airport Transfers",
  description:
    "Premium chauffeured transportation in Miami. MIA airport transfers, PortMiami cruise service, South Beach, Brickell. Call (305) 707-5837.",
};

export default function MiamiPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://apexlimola.com/#business",
        name: "Apex International Transportations — Miami",
        url: "https://apexlimola.com",
        logo: "https://apexlimola.com/logo.png",
        telephone: "(305) 707-5837",
        email: "contact@apexlimola.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "3911 NW 26th St",
          addressLocality: "Miami",
          addressRegion: "FL",
          postalCode: "33142",
          addressCountry: "US",
        },
        areaServed: [
          "Miami, FL",
          "Miami Beach, FL",
          "Coral Gables, FL",
          "Coconut Grove, FL",
          "Brickell, FL",
          "Wynwood, FL",
          "Key Biscayne, FL",
        ],
        priceRange: "$$$",
        image: "https://apexlimola.com/wp-content/uploads/2023/03/minicoacch2.png",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          ratingCount: "342",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://apexlimola.com/locations/miami#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://apexlimola.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Locations",
            item: "https://apexlimola.com/locations",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Miami",
            item: "https://apexlimola.com/locations/miami",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://apexlimola.com/locations/miami#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How far in advance should I book a ride from Miami International Airport?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We recommend booking 24–48 hours in advance for airport transfers, especially during peak travel season. For immediate needs, call (305) 707-5837 and our dispatcher will confirm availability.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer transfers to and from PortMiami cruise terminals?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Apex holds seaport permits and specializes in PortMiami transfers. We coordinate with major cruise lines and handle tight timing for early embarkation. Arrive 2–3 hours before departure for domestic cruises.",
            },
          },
          {
            "@type": "Question",
            name: "What is the average travel time from MIA to South Beach?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Average travel time from Miami International Airport to South Beach is 25 minutes under normal traffic conditions. During peak hours (5–7 PM) or weekends, allow 35–45 minutes. Our drivers monitor real-time traffic and choose optimal routes.",
            },
          },
          {
            "@type": "Question",
            name: "Do you service corporate accounts in Brickell and downtown Miami?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We serve Brickell's financial district extensively with corporate account pricing, recurring transportation, and dedicated drivers for executive clients. Contact us for corporate rate packages.",
            },
          },
          {
            "@type": "Question",
            name: "Are your vehicles available 24/7 in Miami?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We maintain 24/7 service throughout Miami-Dade County. Call (305) 707-5837 anytime or book online. Late-night and early-morning airport transfers, events, and special occasions are our specialty.",
            },
          },
          {
            "@type": "Question",
            name: "What types of vehicles are available for Miami service?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We offer sedans for 1–3 passengers, Sprinter vans for groups up to 14, and full-size coaches for 40+ passenger events. All vehicles are premium, climate-controlled, and equipped with Wi-Fi.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div style={{ backgroundColor: "#0A0A0A", color: "#FFFFFF", minHeight: "100vh" }}>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero */}
      <section
        style={{
          backgroundImage: "linear-gradient(135deg, #0A0A0A 0%, #141414 100%)",
          padding: "80px 24px",
          textAlign: "center",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <h1 style={{ fontSize: "56px", fontWeight: "700", margin: "0 0 16px", color: "#C9A84C" }}>
          MIAMI
        </h1>
        <p style={{ fontSize: "24px", color: "#AAAAAA", margin: "0", fontWeight: "300" }}>
          Premium Chauffeured Transportation in Greater Miami
        </p>
      </section>

      {/* Stats Bar */}
      <section
        style={{
          backgroundColor: "#141414",
          padding: "40px 24px",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "32px",
            textAlign: "center",
          }}
        >
          <div>
            <p style={{ fontSize: "28px", fontWeight: "700", color: "#C9A84C", margin: "0 0 8px" }}>
              25 min
            </p>
            <p style={{ fontSize: "14px", color: "#AAAAAA", margin: "0" }}>
              MIA to South Beach (avg)
            </p>
          </div>
          <div>
            <p style={{ fontSize: "28px", fontWeight: "700", color: "#C9A84C", margin: "0 0 8px" }}>
              Seaport Certified
            </p>
            <p style={{ fontSize: "14px", color: "#AAAAAA", margin: "0" }}>
              PortMiami transfers
            </p>
          </div>
          <div>
            <p style={{ fontSize: "28px", fontWeight: "700", color: "#C9A84C", margin: "0 0 8px" }}>
              Miami-Dade
            </p>
            <p style={{ fontSize: "14px", color: "#AAAAAA", margin: "0" }}>
              Full county coverage
            </p>
          </div>
          <div>
            <p style={{ fontSize: "28px", fontWeight: "700", color: "#C9A84C", margin: "0 0 8px" }}>
              24/7 Service
            </p>
            <p style={{ fontSize: "14px", color: "#AAAAAA", margin: "0" }}>
              Around the clock
            </p>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 24px",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "700",
            marginBottom: "40px",
            color: "#FFFFFF",
          }}
        >
          Miami Service Areas
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          {[
            "Miami International Airport (MIA)",
            "PortMiami — Cruise Terminals",
            "South Beach / Miami Beach",
            "Brickell & Financial District",
            "Coral Gables",
            "Coconut Grove",
            "Wynwood Arts District",
            "Key Biscayne",
          ].map((area) => (
            <div
              key={area}
              style={{
                backgroundColor: "#141414",
                border: "1px solid #2A2A2A",
                borderRadius: "8px",
                padding: "24px",
              }}
            >
              <p style={{ fontSize: "16px", fontWeight: "600", margin: "0", color: "#C9A84C" }}>
                {area}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Cruise Port Specialization */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 24px",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "700",
                marginBottom: "24px",
                color: "#FFFFFF",
              }}
            >
              PortMiami Specialization
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#AAAAAA", marginBottom: "16px" }}>
              Apex holds seaport permits and specializes in PortMiami cruise transfers. We coordinate
              seamlessly with major cruise lines, manage tight embarkation windows, and handle
              return ground transportation for thousands of passengers annually.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#AAAAAA", marginBottom: "16px" }}>
              <strong style={{ color: "#C9A84C" }}>Service Includes:</strong>
              <br />
              • On-time MIA-to-terminal coordination
              <br />
              • Group transfers for cruise groups
              <br />
              • Early morning & late evening availability
              <br />
              • Luggage handling & curbside assistance
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              src="https://apexlimola.com/wp-content/uploads/2023/03/minicoacch2.png"
              alt="Sprinter Van Miami — Apex International Transportation"
              style={{
                width: "100%",
                maxWidth: "600px",
                borderRadius: "8px",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 24px",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "700",
            marginBottom: "40px",
            color: "#FFFFFF",
          }}
        >
          Our Services
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "24px",
          }}
        >
          {[
            { name: "Airport Transfers", slug: "airport-transfers" },
            { name: "Cruise Transfers", slug: "cruise-transfers" },
            { name: "Corporate Accounts", slug: "corporate" },
            { name: "Event Transportation", slug: "events" },
            { name: "Group Charters", slug: "group-charters" },
            { name: "Special Occasions", slug: "special-occasions" },
          ].map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="apex-service-card-link"
              style={{
                padding: "24px",
                backgroundColor: "#141414",
              }}
            >
              <p style={{ fontSize: "16px", fontWeight: "600", margin: "0", color: "#C9A84C" }}>
                {service.name}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 24px",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "700",
            marginBottom: "40px",
            color: "#FFFFFF",
          }}
        >
          Frequently Asked Questions
        </h2>
        <div style={{ display: "grid", gap: "24px" }}>
          {[
            {
              q: "How far in advance should I book a ride from Miami International Airport?",
              a: "We recommend booking 24–48 hours in advance for airport transfers, especially during peak travel season. For immediate needs, call (305) 707-5837 and our dispatcher will confirm availability.",
            },
            {
              q: "Do you offer transfers to and from PortMiami cruise terminals?",
              a: "Yes. Apex holds seaport permits and specializes in PortMiami transfers. We coordinate with major cruise lines and handle tight timing for early embarkation. Arrive 2–3 hours before departure for domestic cruises.",
            },
            {
              q: "What is the average travel time from MIA to South Beach?",
              a: "Average travel time from Miami International Airport to South Beach is 25 minutes under normal traffic conditions. During peak hours (5–7 PM) or weekends, allow 35–45 minutes. Our drivers monitor real-time traffic and choose optimal routes.",
            },
            {
              q: "Do you service corporate accounts in Brickell and downtown Miami?",
              a: "Yes. We serve Brickell's financial district extensively with corporate account pricing, recurring transportation, and dedicated drivers for executive clients. Contact us for corporate rate packages.",
            },
            {
              q: "Are your vehicles available 24/7 in Miami?",
              a: "Yes. We maintain 24/7 service throughout Miami-Dade County. Call (305) 707-5837 anytime or book online. Late-night and early-morning airport transfers, events, and special occasions are our specialty.",
            },
            {
              q: "What types of vehicles are available for Miami service?",
              a: "We offer sedans for 1–3 passengers, Sprinter vans for groups up to 14, and full-size coaches for 40+ passenger events. All vehicles are premium, climate-controlled, and equipped with Wi-Fi.",
            },
          ].map((faq, idx) => (
            <details
              key={idx}
              style={{
                backgroundColor: "#141414",
                border: "1px solid #2A2A2A",
                borderRadius: "8px",
                padding: "24px",
                cursor: "pointer",
              }}
            >
              <summary style={{ fontSize: "16px", fontWeight: "600", color: "#C9A84C" }}>
                {faq.q}
              </summary>
              <p
                style={{
                  fontSize: "14px",
                  color: "#AAAAAA",
                  marginTop: "16px",
                  marginBottom: "0",
                  lineHeight: "1.6",
                }}
              >
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact Card */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 24px",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "700",
            marginBottom: "40px",
            color: "#FFFFFF",
          }}
        >
          Miami Office
        </h2>
        <div
          style={{
            backgroundColor: "#141414",
            border: "1px solid #2A2A2A",
            borderRadius: "8px",
            padding: "40px",
            maxWidth: "600px",
          }}
        >
          <p style={{ fontSize: "16px", color: "#AAAAAA", margin: "0 0 12px" }}>
            <strong style={{ color: "#C9A84C" }}>Address</strong>
            <br />
            3911 NW 26th St
            <br />
            Miami, FL 33142
          </p>
          <p style={{ fontSize: "16px", color: "#AAAAAA", margin: "24px 0 0" }}>
            <strong style={{ color: "#C9A84C" }}>Phone</strong>
            <br />
            <a
              href="tel:+13057075837"
              style={{ color: "#C9A84C", textDecoration: "none" }}
            >
              (305) 707-5837
            </a>
          </p>
          <p style={{ fontSize: "16px", color: "#AAAAAA", margin: "24px 0 0" }}>
            <strong style={{ color: "#C9A84C" }}>Hours</strong>
            <br />
            24/7 Service Available
          </p>
        </div>
      </section>

      {/* CTA Footer */}
      <section
        style={{
          backgroundColor: "#141414",
          padding: "60px 24px",
          textAlign: "center",
          borderTop: "1px solid #2A2A2A",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "700",
            marginBottom: "24px",
            color: "#FFFFFF",
          }}
        >
          Ready to Book?
        </h2>
        <p style={{ fontSize: "16px", color: "#AAAAAA", marginBottom: "32px" }}>
          Call us now or book online for premium transportation in Miami.
        </p>
        <a
          href="tel:+13057075837"
          className="apex-btn-gold-light"
        >
          (305) 707-5837
        </a>
      </section>
    </div>
  );
}
