import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Group Charter Bus & Minibus Service | 14-56 Passengers",
  description:
    "Group charter transportation for conventions, retreats, sports teams, and events. Sprinter vans, minibuses, and motorcoaches seating 14-56. Call 877-427-1777.",
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://apexlimola.com/services/group-charter/#service",
      name: "Group Charter Bus & Minibus Service",
      description:
        "Professional charter transportation for groups of 14 to 56 passengers",
      provider: {
        "@type": "Organization",
        name: "Apex International Transportation",
        url: "https://apexlimola.com",
        telephone: "+1-877-427-1777",
      },
      serviceArea: "Los Angeles, California",
      areaServed: {
        "@type": "City",
        name: "Los Angeles",
      },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: "https://apexlimola.com/services/group-charter/",
      },
      offers: [
        {
          "@type": "Offer",
          name: "Mercedes Sprinter Van Charter",
          priceCurrency: "USD",
          priceRange: "$$",
        },
        {
          "@type": "Offer",
          name: "Executive Minibus Charter",
          priceCurrency: "USD",
          priceRange: "$$$",
        },
        {
          "@type": "Offer",
          name: "Full-Size Motorcoach Charter",
          priceCurrency: "USD",
          priceRange: "$$$",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://apexlimola.com/services/group-charter/#breadcrumb",
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
          name: "Services",
          item: "https://apexlimola.com/services/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Group Charter",
          item: "https://apexlimola.com/services/group-charter/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://apexlimola.com/services/group-charter/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the maximum capacity for group charter services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our full-size motorcoaches accommodate up to 56 passengers, while minibuses seat 24-40 and Sprinter vans accommodate 14 passengers.",
          },
        },
        {
          "@type": "Question",
          name: "Are your charter vehicles ADA accessible?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, approximately 30% of our fleet features wheelchair lift systems and ADA-compliant seating for passengers with mobility needs.",
          },
        },
        {
          "@type": "Question",
          name: "Do charter buses have Wi-Fi and entertainment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, our motorcoaches and minibuses feature onboard Wi-Fi, entertainment systems, and premium amenities like reclining seats and refreshment service.",
          },
        },
        {
          "@type": "Question",
          name: "Can you accommodate airport group shuttles?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. We specialize in airport group transportation with flexible scheduling, luggage storage, and professional drivers familiar with LAX, Ontario, and Long Beach airports.",
          },
        },
        {
          "@type": "Question",
          name: "What types of groups do you charter for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We charter for conventions, corporate retreats, sports teams, school groups, wedding guest shuttles, casino trips, and special event transportation.",
          },
        },
        {
          "@type": "Question",
          name: "How far in advance should I book a group charter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We recommend booking at least 2-4 weeks in advance for large groups, though we accommodate same-day requests when vehicle availability permits.",
          },
        },
      ],
    },
  ],
};

export default function GroupCharterPage() {
  return (
    <div style={{ backgroundColor: "#0A0A0A", color: "#FFFFFF" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section
        style={{
          backgroundColor: "#141414",
          backgroundImage:
            "linear-gradient(135deg, rgba(201, 168, 76, 0.08) 0%, rgba(20, 20, 20, 0.8) 100%)",
          padding: "80px 20px",
          textAlign: "center",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "56px",
              fontWeight: "700",
              lineHeight: "1.2",
              marginBottom: "20px",
              color: "#FFFFFF",
              letterSpacing: "-1px",
            }}
          >
            GROUP CHARTER
          </h1>
          <p
            style={{
              fontSize: "24px",
              color: "#C9A84C",
              fontWeight: "500",
              marginBottom: "12px",
            }}
          >
            14 to 56 Passengers
          </p>
          <p
            style={{
              fontSize: "18px",
              color: "#AAAAAA",
              lineHeight: "1.6",
              marginBottom: "0",
            }}
          >
            Professional Charter for Every Group Size
          </p>
        </div>
      </section>

      {/* Vehicle Options Grid */}
      <section
        style={{
          padding: "60px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "700",
            marginBottom: "40px",
            textAlign: "center",
            color: "#FFFFFF",
          }}
        >
          Charter Fleet Options
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {/* Sprinter Van */}
          <div
            style={{
              backgroundColor: "#141414",
              border: "1px solid #2A2A2A",
              borderRadius: "8px",
              padding: "30px",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "12px",
                color: "#C9A84C",
              }}
            >
              Mercedes Sprinter Van
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#AAAAAA",
                marginBottom: "20px",
              }}
            >
              <strong style={{ color: "#FFFFFF" }}>14 Passengers</strong>
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: "0",
                margin: "0",
              }}
            >
              {[
                "Premium leather seating",
                "Wi-Fi connectivity",
                "USB charging ports",
                "Climate control",
                "Luggage storage",
              ].map((feature, i) => (
                <li
                  key={i}
                  style={{
                    color: "#AAAAAA",
                    fontSize: "14px",
                    marginBottom: "8px",
                    paddingLeft: "20px",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: "0",
                      color: "#C9A84C",
                    }}
                  >
                    •
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Executive Minibus */}
          <div
            style={{
              backgroundColor: "#141414",
              border: "1px solid #2A2A2A",
              borderRadius: "8px",
              padding: "30px",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "12px",
                color: "#C9A84C",
              }}
            >
              Executive Minibus
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#AAAAAA",
                marginBottom: "20px",
              }}
            >
              <strong style={{ color: "#FFFFFF" }}>24–40 Passengers</strong>
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: "0",
                margin: "0",
              }}
            >
              {[
                "Reclining comfort seats",
                "Public address system",
                "Entertainment screens",
                "Onboard restroom",
                "Premium amenities",
              ].map((feature, i) => (
                <li
                  key={i}
                  style={{
                    color: "#AAAAAA",
                    fontSize: "14px",
                    marginBottom: "8px",
                    paddingLeft: "20px",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: "0",
                      color: "#C9A84C",
                    }}
                  >
                    •
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Full-Size Motorcoach */}
          <div
            style={{
              backgroundColor: "#141414",
              border: "1px solid #2A2A2A",
              borderRadius: "8px",
              padding: "30px",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "12px",
                color: "#C9A84C",
              }}
            >
              Full-Size Motorcoach
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#AAAAAA",
                marginBottom: "20px",
              }}
            >
              <strong style={{ color: "#FFFFFF" }}>40–56 Passengers</strong>
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: "0",
                margin: "0",
              }}
            >
              {[
                "MCI/Setra/Prevost coaches",
                "Onboard lavatory",
                "Overhead luggage bins",
                "Wi-Fi & 110V outlets",
                "Premium comfort seating",
              ].map((feature, i) => (
                <li
                  key={i}
                  style={{
                    color: "#AAAAAA",
                    fontSize: "14px",
                    marginBottom: "8px",
                    paddingLeft: "20px",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: "0",
                      color: "#C9A84C",
                    }}
                  >
                    •
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section
        style={{
          padding: "60px 20px",
          maxWidth: "1000px",
          margin: "0 auto",
          textAlign: "center",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <img
          src="https://apexlimola.com/wp-content/uploads/2023/02/A1054_high_res.png"
          alt="Group Charter Bus Service"
          style={{
            width: "100%",
            maxWidth: "600px",
            borderRadius: "8px",
            display: "block",
            margin: "0 auto",
          }}
        />
      </section>

      {/* Use Cases Section */}
      <section
        style={{
          padding: "60px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "700",
            marginBottom: "40px",
            textAlign: "center",
            color: "#FFFFFF",
          }}
        >
          Perfect For Every Group Event
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          {[
            "Convention Shuttles",
            "Corporate Retreats",
            "Team Sports Travel",
            "School Groups",
            "Airport Groups",
            "Casino Runs",
            "Concert & Venue Transfers",
            "Winery & Brewery Tours",
            "Wedding Guest Shuttles",
          ].map((useCase, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#141414",
                border: "1px solid #2A2A2A",
                borderRadius: "8px",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "16px",
                  color: "#FFFFFF",
                  fontWeight: "500",
                  margin: "0",
                }}
              >
                {useCase}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ADA Accessibility Section */}
      <section
        style={{
          padding: "60px 20px",
          maxWidth: "1000px",
          margin: "0 auto",
          backgroundColor: "#141414",
          borderRadius: "8px",
          marginBottom: "60px",
          border: "1px solid #2A2A2A",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "20px",
            color: "#C9A84C",
          }}
        >
          ADA Accessible Charter Options
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#AAAAAA",
            lineHeight: "1.6",
            marginBottom: "0",
          }}
        >
          Approximately 30% of our charter fleet features wheelchair lift systems
          and ADA-compliant seating configurations. We accommodate passengers with
          mobility challenges with professional, discreet service and accessible
          vehicles designed for comfort and safety.
        </p>
      </section>

      {/* FAQ Section */}
      <section
        style={{
          padding: "60px 20px",
          maxWidth: "900px",
          margin: "0 auto",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "700",
            marginBottom: "40px",
            textAlign: "center",
            color: "#FFFFFF",
          }}
        >
          Frequently Asked Questions
        </h2>
        <div
          style={{
            display: "grid",
            gap: "20px",
          }}
        >
          {[
            {
              q: "What is the maximum capacity for group charter services?",
              a: "Our full-size motorcoaches accommodate up to 56 passengers, while minibuses seat 24–40 and Sprinter vans accommodate 14 passengers. We can combine vehicles for larger groups.",
            },
            {
              q: "Are your charter vehicles ADA accessible?",
              a: "Yes, approximately 30% of our fleet features wheelchair lift systems and ADA-compliant seating for passengers with mobility needs.",
            },
            {
              q: "Do charter buses have Wi-Fi and entertainment?",
              a: "Yes, our motorcoaches and minibuses feature onboard Wi-Fi, entertainment systems, and premium amenities like reclining seats and refreshment service.",
            },
            {
              q: "Can you accommodate airport group shuttles?",
              a: "Absolutely. We specialize in airport group transportation with flexible scheduling, luggage storage, and professional drivers familiar with LAX, Ontario, and Long Beach airports.",
            },
            {
              q: "What types of groups do you charter for?",
              a: "We charter for conventions, corporate retreats, sports teams, school groups, wedding guest shuttles, casino trips, concert venues, and special event transportation.",
            },
            {
              q: "How far in advance should I book a group charter?",
              a: "We recommend booking at least 2–4 weeks in advance for large groups, though we accommodate same-day requests when vehicle availability permits.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#141414",
                border: "1px solid #2A2A2A",
                borderRadius: "8px",
                padding: "20px",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "#C9A84C",
                  marginBottom: "12px",
                  margin: "0 0 12px 0",
                }}
              >
                {item.q}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  color: "#AAAAAA",
                  lineHeight: "1.6",
                  margin: "0",
                }}
              >
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: "80px 20px",
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "700",
            marginBottom: "24px",
            color: "#FFFFFF",
          }}
        >
          Ready to Charter Your Group?
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "#AAAAAA",
            marginBottom: "32px",
            lineHeight: "1.6",
          }}
        >
          Let our professional team handle the transportation logistics so you can
          focus on your event. Contact us today for a custom quote.
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
            className="apex-btn-solid-gold"
          >
            Call: 877-427-1777
          </a>
          <Link
            href="/contact"
            className="apex-btn-dark-gray"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
