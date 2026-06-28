import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Transportation Services | Apex International Transportation",
  description:
    "Luxury ground transportation services including airport transfers, corporate travel, weddings, group charters, VIP tours, and point-to-point transfers.",
};

export default function ServicesPage() {
  const services = [
    {
      icon: "✈️",
      title: "Airport Transfers",
      description:
        "On-time guarantee with real-time flight tracking. Meet & greet at LAX, LAS, MIA, FLL and 20+ regional airports.",
      stat: "99% On-Time Rate",
      href: "/services/airport-transfers/",
    },
    {
      icon: "💼",
      title: "Corporate Travel",
      description:
        "Executive sedans and SUVs for business travelers, roadshows, and team transportation. PCI-DSS compliant billing.",
      stat: "Fortune 500 Clients",
      href: "/services/corporate/",
    },
    {
      icon: "💍",
      title: "Weddings & Events",
      description:
        "Coordinated luxury fleet for weddings, proms, galas, and milestone events. White-glove service from ceremony to reception.",
      stat: "All Fleet Types",
      href: "/services/weddings-events/",
    },
    {
      icon: "🚌",
      title: "Group Charter",
      description:
        "Sprinter vans, minibuses, and motorcoaches from 14 to 56 passengers. Conventions, retreats, stadium transfers.",
      stat: "Up to 56 Passengers",
      href: "/services/group-charter/",
    },
    {
      icon: "🌆",
      title: "VIP City Tours",
      description:
        "Curated luxury city experiences in LA, Las Vegas, Miami. Studio tours, celebrity home tours, nightlife packages.",
      stat: "Customizable Routes",
      href: "/services/city-tours/",
    },
    {
      icon: "🗺️",
      title: "Point-to-Point",
      description:
        "Flat-rate door-to-door transfers between any two points. No meter running — transparent pricing guaranteed.",
      stat: "Flat-Rate Pricing",
      href: "/services/point-to-point/",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Book",
      description: "Reserve your ride online or call our 24/7 concierge team.",
    },
    {
      step: 2,
      title: "Confirm",
      description: "Receive instant confirmation with driver details and vehicle info.",
    },
    {
      step: 3,
      title: "Ride",
      description: "Your professional driver arrives on-time in a luxury vehicle.",
    },
    {
      step: 4,
      title: "Arrive",
      description: "Arrive refreshed at your destination, ready to go.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Apex International Transportation Services",
    description:
      "Luxury ground transportation services across North America",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Airport Transfers",
        description:
          "On-time guarantee with real-time flight tracking. Meet & greet service.",
        url: "https://apexintltransport.com/services/airport-transfers/",
      },
      {
        "@type": "Offer",
        name: "Corporate Travel",
        description:
          "Executive transportation for business travelers and corporate events.",
        url: "https://apexintltransport.com/services/corporate/",
      },
      {
        "@type": "Offer",
        name: "Weddings & Events",
        description:
          "Coordinated luxury fleet for weddings, proms, galas, and milestone events.",
        url: "https://apexintltransport.com/services/weddings-events/",
      },
      {
        "@type": "Offer",
        name: "Group Charter",
        description: "Sprinter vans, minibuses, and motorcoaches for groups.",
        url: "https://apexintltransport.com/services/group-charter/",
      },
      {
        "@type": "Offer",
        name: "VIP City Tours",
        description:
          "Curated luxury city experiences in LA, Las Vegas, and Miami.",
        url: "https://apexintltransport.com/services/city-tours/",
      },
      {
        "@type": "Offer",
        name: "Point-to-Point Transfers",
        description: "Flat-rate door-to-door transfers with transparent pricing.",
        url: "https://apexintltransport.com/services/point-to-point/",
      },
    ],
  };

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
            fontSize: "48px",
            fontWeight: 700,
            color: "#FFFFFF",
            margin: "0 0 16px 0",
            letterSpacing: "-0.5px",
          }}
        >
          OUR SERVICES
        </h1>
        <p
          style={{
            fontSize: "20px",
            color: "#C9A84C",
            margin: 0,
            fontWeight: 500,
          }}
        >
          World-Class Transportation Solutions
        </p>
      </section>

      {/* Services Grid */}
      <section style={{ padding: "80px 20px", background: "#0A0A0A" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "32px",
          }}
        >
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              style={{ textDecoration: "none" }}
            >
              <div
                className="apex-card-hover"
                style={{
                  background: "#141414",
                  borderRadius: "12px",
                  padding: "32px",
                  cursor: "pointer",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    fontSize: "48px",
                    marginBottom: "16px",
                  }}
                >
                  {service.icon}
                </div>
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 600,
                    color: "#FFFFFF",
                    margin: "0 0 12px 0",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#AAAAAA",
                    lineHeight: 1.6,
                    margin: "0 0 24px 0",
                    flex: 1,
                  }}
                >
                  {service.description}
                </p>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#C9A84C",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    marginTop: "auto",
                  }}
                >
                  {service.stat}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Our Fleet Section */}
      <section
        style={{
          padding: "60px 20px",
          background: "#141414",
          borderTop: "1px solid #2A2A2A",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            alignItems: "center",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: 700,
                color: "#FFFFFF",
                margin: "0 0 12px 0",
              }}
            >
              Our Fleet
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#AAAAAA",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              From premium sedans to luxury motorcoaches, we maintain an
              immaculate fleet of late-model vehicles to match every occasion
              and group size.
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <Link
              href="/fleet/"
              className="apex-btn-gradient"
              style={{
                padding: "14px 32px",
                fontSize: "14px",
              }}
            >
              View Fleet Options
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{ padding: "80px 20px", background: "#0A0A0A" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 700,
              color: "#FFFFFF",
              textAlign: "center",
              margin: "0 0 60px 0",
            }}
          >
            How It Works
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "40px",
            }}
          >
            {process.map((item) => (
              <div key={item.step} style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "#C9A84C",
                    color: "#000000",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
                    fontWeight: 700,
                    margin: "0 auto 20px",
                  }}
                >
                  {item.step}
                </div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#FFFFFF",
                    margin: "0 0 12px 0",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#AAAAAA",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: "60px 20px",
          background: "linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)",
          borderTop: "1px solid #2A2A2A",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 700,
            color: "#FFFFFF",
            margin: "0 0 16px 0",
          }}
        >
          Ready to Experience Luxury Travel?
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#AAAAAA",
            margin: "0 0 32px 0",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Contact our 24/7 concierge team to book your next ride.
        </p>
        <a
          href="tel:+1-800-555-0199"
          className="apex-btn-gradient"
        >
          Call 1-800-555-0199
        </a>
      </section>
    </>
  );
}
