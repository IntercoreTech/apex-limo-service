import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Corporate Transportation Service | Executive Car Service",
  description:
    "Professional executive transportation for business travelers. Sedans, SUVs, and charter buses for roadshows, team travel, and corporate events. PCI-DSS compliant. Call 877-427-1777.",
};

export default function CorporatePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Corporate Transportation",
        provider: {
          "@type": "Organization",
          name: "Apex International Transportation",
          url: "https://apexlimo.com",
          telephone: "+1-877-427-1777",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1234 Executive Ave",
            addressLocality: "Los Angeles",
            addressRegion: "CA",
            postalCode: "90001",
            addressCountry: "US",
          },
        },
        description:
          "Executive transportation for business professionals including sedan service, roadshow transportation, team offsites, and conference shuttles.",
        areaServed: [
          {
            "@type": "City",
            name: "Los Angeles",
          },
          {
            "@type": "City",
            name: "Orange County",
          },
          {
            "@type": "City",
            name: "San Diego",
          },
        ],
        hasOfferingDescription: [
          "Executive Sedan Service",
          "Roadshow Transportation",
          "Team Offsites & Retreats",
          "Conference Shuttles",
          "Employee Shuttle Programs",
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://apexlimo.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://apexlimo.com/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Corporate Transportation",
            item: "https://apexlimo.com/services/corporate",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is corporate transportation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Corporate transportation refers to professional vehicle services for business professionals, including executive sedans, team shuttles, and charter buses for company events and travel.",
            },
          },
          {
            "@type": "Question",
            name: "Does Apex offer billing and invoicing for corporate accounts?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We provide monthly billing, dedicated account managers, corporate rate cards, and streamlined invoicing for all corporate clients.",
            },
          },
          {
            "@type": "Question",
            name: "Are your vehicles PCI-DSS compliant?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Our fleet and operations meet PCI-DSS standards for secure handling of financial information during executive transportation.",
            },
          },
          {
            "@type": "Question",
            name: "Can you handle large team events and roadshows?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. We offer roadshow transportation, team offsites, conference shuttles, and large group charters using our fleet of sedans, SUVs, and charter buses.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer dedicated drivers for corporate accounts?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Corporate clients receive dedicated dispatchers, advance booking options, uniformed professional drivers, and 24/7 account management.",
            },
          },
          {
            "@type": "Question",
            name: "What industries does Apex serve?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We specialize in transportation for Entertainment, Finance/Banking, Tech, Legal, Healthcare, and Real Estate industries.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div style={{ backgroundColor: "#0A0A0A", color: "#FFFFFF" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #0A0A0A 0%, #1a1a1a 100%)",
          borderBottom: "1px solid #2A2A2A",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "56px",
            fontWeight: 700,
            marginBottom: "16px",
            color: "#C9A84C",
            letterSpacing: "2px",
          }}
        >
          CORPORATE TRAVEL
        </h1>
        <p
          style={{
            fontSize: "24px",
            color: "#AAAAAA",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          Executive Transportation for Business Professionals
        </p>
      </section>

      {/* Corporate Services List */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "80px auto",
          padding: "0 20px",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            fontWeight: 700,
            marginBottom: "48px",
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          Our Corporate Services
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px",
          }}
        >
          {[
            {
              title: "Executive Sedan & SUV Service",
              description:
                "Premium transportation for C-suite executives and business travelers with professional drivers.",
            },
            {
              title: "Roadshow Transportation",
              description:
                "Multi-city logistics and transportation for product launches, conferences, and promotional events.",
            },
            {
              title: "Team Offsites & Retreats",
              description:
                "Group transportation for company team building, training sessions, and off-site meetings.",
            },
            {
              title: "Conference & Convention Shuttles",
              description:
                "Professional shuttle services for attendees during corporate conferences and major industry events.",
            },
            {
              title: "Employee Shuttle Programs",
              description:
                "Daily recurring transportation for employee commutes, corporate campuses, and event transfers.",
            },
            {
              title: "Board Member Transportation",
              description:
                "Discreet, confidential transportation for board members, investors, and senior leadership.",
            },
            {
              title: "VIP Client Transfers",
              description:
                "White-glove service for high-value clients, partners, and distinguished guests.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              style={{
                background: "#141414",
                border: "1px solid #2A2A2A",
                borderRadius: "8px",
                padding: "32px",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#C9A84C",
                  marginBottom: "12px",
                }}
              >
                {service.title}
              </h3>
              <p style={{ fontSize: "16px", color: "#AAAAAA", lineHeight: 1.6 }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Corporate Clients Choose Apex */}
      <section
        style={{
          background: "#141414",
          borderTop: "1px solid #2A2A2A",
          borderBottom: "1px solid #2A2A2A",
          padding: "80px 20px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: 700,
              marginBottom: "48px",
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            Why Corporate Clients Choose Apex
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "32px",
            }}
          >
            {[
              {
                title: "On-Time Guarantee",
                text: "100% reliability with GPS tracking and real-time updates.",
              },
              {
                title: "Confidentiality & Discretion",
                text: "Secure, private transportation with non-disclosure protocols.",
              },
              {
                title: "Uniformed Professionals",
                text: "Courteous, background-checked drivers with impeccable standards.",
              },
              {
                title: "Billing & Invoicing",
                text: "Seamless monthly invoicing and flexible payment terms.",
              },
              {
                title: "PCI-DSS Compliant",
                text: "Secure operations meeting financial industry security standards.",
              },
              {
                title: "24/7 Account Manager",
                text: "Dedicated support for booking, scheduling, and special requests.",
              },
              {
                title: "GPS-Tracked Fleet",
                text: "Real-time vehicle tracking and advance ETAs for all rides.",
              },
            ].map((item, idx) => (
              <div key={idx}>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#C9A84C",
                    marginBottom: "8px",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "16px", color: "#AAAAAA", lineHeight: 1.6 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Account Features */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "80px auto",
          padding: "0 20px",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            fontWeight: 700,
            marginBottom: "48px",
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          Corporate Account Features
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {[
            {
              title: "Monthly Billing",
              desc: "Consolidated invoicing with itemized trips and expense tracking.",
            },
            {
              title: "Dedicated Dispatcher",
              desc: "One assigned contact for consistent service and account management.",
            },
            {
              title: "Advance Booking",
              desc: "Scheduled rides with guaranteed availability for recurring trips.",
            },
            {
              title: "Corporate Rate Cards",
              desc: "Custom pricing based on volume, frequency, and vehicle type.",
            },
          ].map((feat, idx) => (
            <div
              key={idx}
              style={{
                background: "#141414",
                border: "1px solid #2A2A2A",
                borderLeft: "3px solid #C9A84C",
                borderRadius: "4px",
                padding: "24px",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#C9A84C",
                  marginBottom: "8px",
                }}
              >
                {feat.title}
              </h3>
              <p style={{ fontSize: "15px", color: "#AAAAAA" }}>{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Served */}
      <section
        style={{
          background: "#141414",
          borderTop: "1px solid #2A2A2A",
          borderBottom: "1px solid #2A2A2A",
          padding: "80px 20px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: 700,
              marginBottom: "48px",
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            Industries We Serve
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              "Entertainment",
              "Finance & Banking",
              "Technology",
              "Legal",
              "Healthcare",
              "Real Estate",
            ].map((industry, idx) => (
              <div
                key={idx}
                style={{
                  textAlign: "center",
                  padding: "24px",
                  background: "#0A0A0A",
                  border: "1px solid #2A2A2A",
                  borderRadius: "8px",
                }}
              >
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#C9A84C",
                  }}
                >
                  {industry}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet for Corporate */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "80px auto",
          padding: "0 20px",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            fontWeight: 700,
            marginBottom: "48px",
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          Our Corporate Fleet
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
          }}
        >
          {[
            {
              vehicle: "Cadillac Escalade",
              seats: "6 Passengers",
              features:
                "Premium leather, climate control, Wi-Fi connectivity, entertainment systems.",
            },
            {
              vehicle: "Mercedes Sprinter",
              seats: "10-12 Passengers",
              features:
                "Spacious interior, luggage capacity, rear seating, perfect for small groups.",
            },
            {
              vehicle: "Executive Minibus",
              seats: "20-24 Passengers",
              features:
                "Large group transportation, conference shuttles, team offsites, charter events.",
            },
          ].map((fleet, idx) => (
            <div
              key={idx}
              style={{
                background: "#141414",
                border: "1px solid #2A2A2A",
                borderRadius: "8px",
                padding: "32px",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#C9A84C",
                  marginBottom: "12px",
                }}
              >
                {fleet.vehicle}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "#AAAAAA",
                  marginBottom: "12px",
                  fontWeight: 600,
                }}
              >
                {fleet.seats}
              </p>
              <p style={{ fontSize: "15px", color: "#AAAAAA", lineHeight: 1.6 }}>
                {fleet.features}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section
        style={{
          background: "#141414",
          borderTop: "1px solid #2A2A2A",
          borderBottom: "1px solid #2A2A2A",
          padding: "80px 20px",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: 700,
              marginBottom: "48px",
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            Frequently Asked Questions
          </h2>
          <div>
            {[
              {
                q: "What is corporate transportation?",
                a: "Corporate transportation refers to professional vehicle services for business professionals, including executive sedans, team shuttles, and charter buses for company events, conferences, and business travel.",
              },
              {
                q: "Does Apex offer billing and invoicing for corporate accounts?",
                a: "Yes. We provide monthly billing, dedicated account managers, corporate rate cards, and streamlined invoicing tailored to your company's needs.",
              },
              {
                q: "Are your vehicles PCI-DSS compliant?",
                a: "Yes. Our fleet and operations meet PCI-DSS standards for secure handling of financial information, making us trusted by finance and banking clients.",
              },
              {
                q: "Can you handle large team events and roadshows?",
                a: "Absolutely. We offer multi-vehicle coordination for roadshows, team offsites, conference shuttles, and large group charters using our fleet of sedans, SUVs, and minibuses.",
              },
              {
                q: "Do you offer dedicated drivers for corporate accounts?",
                a: "Yes. Corporate clients receive dedicated dispatchers, advance booking options, uniformed professional drivers, and 24/7 account management support.",
              },
              {
                q: "What industries does Apex serve?",
                a: "We specialize in transportation for Entertainment, Finance/Banking, Technology, Legal, Healthcare, and Real Estate industries.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  marginBottom: "32px",
                  paddingBottom: "32px",
                  borderBottom: idx < 5 ? "1px solid #2A2A2A" : "none",
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
                  {item.q}
                </h3>
                <p style={{ fontSize: "16px", color: "#AAAAAA", lineHeight: 1.6 }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "80px auto",
          padding: "0 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            fontWeight: 700,
            marginBottom: "24px",
            color: "#FFFFFF",
          }}
        >
          Ready to Book Corporate Transportation?
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "#AAAAAA",
            marginBottom: "32px",
          }}
        >
          Contact our corporate team to discuss your transportation needs and receive a customized quote.
        </p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="tel:+1-877-427-1777"
            style={{
              display: "inline-block",
              background: "#C9A84C",
              color: "#0A0A0A",
              padding: "14px 32px",
              fontSize: "16px",
              fontWeight: 700,
              borderRadius: "4px",
              textDecoration: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            Call 877-427-1777
          </a>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              background: "transparent",
              color: "#C9A84C",
              padding: "14px 32px",
              fontSize: "16px",
              fontWeight: 700,
              borderRadius: "4px",
              textDecoration: "none",
              border: "2px solid #C9A84C",
              cursor: "pointer",
            }}
          >
            Request a Quote
          </Link>
        </div>
      </section>

      {/* Footer Spacing */}
      <div style={{ height: "40px" }} />
    </div>
  );
}
