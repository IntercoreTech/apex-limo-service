import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Apex International Transportation",
  description: "Learn about Apex International Transportation, a luxury ground transportation provider serving Los Angeles, Miami, Fort Lauderdale, and nationwide since 1994.",
};

const PHONE = "877-427-1777";
const PHONE_HREF = "tel:+18774271777";

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "AboutPage",
                name: "About Apex International Transportation",
                description:
                  "Learn about our 30+ years of premium ground transportation excellence.",
                url: "https://apexlimola.com/about/",
                publisher: {
                  "@type": "Organization",
                  name: "Apex International Transportation",
                },
              },
              {
                "@type": "Organization",
                name: "Apex International Transportation",
                url: "https://apexlimola.com/",
                telephone: PHONE,
                foundingDate: "1994",
                areaServed: [
                  { "@type": "Place", name: "Los Angeles, CA" },
                  { "@type": "Place", name: "Miami, FL" },
                  { "@type": "Place", name: "Fort Lauderdale, FL" },
                  { "@type": "Place", name: "Nationwide" },
                ],
                description:
                  "Premium luxury ground transportation service with 30+ years of excellence, 30+ vehicles, PCI-DSS secure booking, and ADA accessibility.",
                image: "https://apexlimola.com/wp-content/uploads/2023/02/cadillac_escalade_600_sport_2021_4k_8k-5120x2880-1.png",
                priceRange: "$$",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  ratingCount: "500",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "Customer Service",
                  telephone: PHONE,
                  hoursAvailable: "24/7",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(160deg,#0A0A0A 0%,#141414 100%)",
          padding: "80px 24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
          }}
        >
          {/* Left: Text */}
          <div style={{ textAlign: "left" }}>
            <h1
              style={{
                fontSize: "56px",
                fontWeight: "700",
                color: "#FFFFFF",
                marginBottom: "16px",
                letterSpacing: "-1px",
              }}
            >
              OUR STORY
            </h1>
            <div
              style={{
                width: "60px",
                height: "3px",
                background: "#C9A84C",
                margin: "24px 0",
              }}
            />
            <p
              style={{
                fontSize: "24px",
                color: "#C9A84C",
                fontWeight: "600",
                marginBottom: "32px",
              }}
            >
              Premium Transportation Since 1994
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "#AAAAAA",
                lineHeight: "1.8",
                marginBottom: "24px",
              }}
            >
              For over three decades, Apex International Transportation has set the
              standard for luxury ground transportation. From pioneering the
              Escalade-class service market to expanding nationally, we remain
              committed to safety, reliability, and world-class service.
            </p>
          </div>

          {/* Right: Image */}
          <div
            style={{
              position: "relative",
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid #2A2A2A",
            }}
          >
            <img
              src="https://apexlimola.com/wp-content/uploads/2023/02/cadillac_escalade_600_sport_2021_4k_8k-5120x2880-1.png"
              alt="Luxury Fleet — Apex International Transportation"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section
        style={{
          background: "#0A0A0A",
          padding: "64px 24px",
          borderTop: "1px solid #2A2A2A",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "32px",
            textAlign: "center",
          }}
        >
          {[
            { label: "Founded", value: "1994" },
            { label: "Vehicles", value: "30+" },
            { label: "Markets", value: "4" },
            { label: "Service", value: "24/7" },
          ].map((stat, idx) => (
            <div key={idx}>
              <div
                style={{
                  fontSize: "48px",
                  fontWeight: "700",
                  color: "#C9A84C",
                  marginBottom: "8px",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#AAAAAA",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline/History Section */}
      <section
        style={{
          background: "linear-gradient(160deg,#0A0A0A 0%,#141414 100%)",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "48px",
              fontWeight: "700",
              color: "#FFFFFF",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            OUR HISTORY
          </h2>
          <div
            style={{
              width: "60px",
              height: "3px",
              background: "#C9A84C",
              margin: "24px auto 48px",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "32px",
            }}
          >
            {[
              {
                year: "1994",
                title: "Founded in Los Angeles",
                description:
                  "A team of transportation professionals launched Apex International Transportation with a vision to redefine luxury ground transportation.",
              },
              {
                year: "Late 1990s",
                title: "Pioneered the Escalade-Class Service",
                description:
                  "We were the first to introduce luxury SUV fleet service to the Los Angeles market, setting the standard years before it became mainstream.",
              },
              {
                year: "2005",
                title: "Expanded Fleet with Sprinter Vans",
                description:
                  "Added Sprinter van fleet to serve group corporate travel and large-party transportation needs.",
              },
              {
                year: "2014",
                title: "PCI-DSS Compliance & Digital Security",
                description:
                  "Implemented industry-leading PCI-DSS compliant booking and payment systems to ensure secure transactions.",
              },
              {
                year: "2020",
                title: "Safety First Through the Pandemic",
                description:
                  "Maintained 100% safety protocols and never closed operations, demonstrating our commitment to reliability during unprecedented times.",
              },
              {
                year: "2022",
                title: "Expanded to South Florida",
                description:
                  "Opened operations in Miami and Fort Lauderdale with seaport and cruise terminal permits, extending our regional presence.",
              },
              {
                year: "2024+",
                title: "Modern, Sustainable Fleet",
                description:
                  "Introduced Tesla vehicles and expanded ADA-accessible options to 30%+ of fleet, prioritizing sustainability and inclusivity.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  gap: "32px",
                  alignItems: "start",
                }}
              >
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#C9A84C",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.year}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "#FFFFFF",
                      marginBottom: "8px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "#AAAAAA",
                      lineHeight: "1.8",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        style={{
          background: "#F5F5F5",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "48px",
              fontWeight: "700",
              color: "#0A0A0A",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            OUR VALUES
          </h2>
          <div
            style={{
              width: "60px",
              height: "3px",
              background: "#C9A84C",
              margin: "24px auto 48px",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px",
            }}
          >
            {[
              {
                title: "Safety First",
                description:
                  "Every trip prioritizes passenger and driver safety with comprehensive protocols and continuous training.",
              },
              {
                title: "Multilingual Team",
                description:
                  "Our team speaks Spanish, Farsi, Korean, and more—ensuring seamless communication with every client.",
              },
              {
                title: "Environmental Leadership",
                description:
                  "Electric vehicles, carbon-neutral operations, and sustainable practices guide our fleet growth.",
              },
              {
                title: "PCI-DSS Secure",
                description:
                  "Industry-leading payment security protects your financial information on every booking.",
              },
              {
                title: "ADA Accessible",
                description:
                  "30%+ of our fleet is wheelchair accessible, ensuring transportation for all.",
              },
              {
                title: "Community Focused",
                description:
                  "We partner with local organizations and give back to the communities we serve.",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #EEEEEE",
                  borderRadius: "8px",
                  padding: "32px 24px",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#0A0A0A",
                    marginBottom: "12px",
                  }}
                >
                  {value.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#666666",
                    lineHeight: "1.8",
                  }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section
        style={{
          background: "linear-gradient(160deg,#0A0A0A 0%,#141414 100%)",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "48px",
              fontWeight: "700",
              color: "#FFFFFF",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            LEADERSHIP PILLARS
          </h2>
          <div
            style={{
              width: "60px",
              height: "3px",
              background: "#C9A84C",
              margin: "24px auto 48px",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px",
            }}
          >
            {[
              {
                title: "Operations Excellence",
                description:
                  "Flawless scheduling, maintenance, and logistics ensure every journey is on time and impeccable.",
              },
              {
                title: "Safety & Compliance",
                description:
                  "Rigorous driver training, vehicle inspections, and regulatory adherence protect every passenger.",
              },
              {
                title: "Customer Experience",
                description:
                  "From booking to arrival, we deliver professional, courteous service that exceeds expectations.",
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  background: "#141414",
                  border: "1px solid #2A2A2A",
                  borderRadius: "8px",
                  padding: "32px 24px",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#C9A84C",
                    marginBottom: "16px",
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#AAAAAA",
                    lineHeight: "1.8",
                  }}
                >
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          background: "linear-gradient(160deg,#0A0A0A 0%,#141414 100%)",
          padding: "80px 24px",
          borderTop: "1px solid #2A2A2A",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "48px",
              fontWeight: "700",
              color: "#FFFFFF",
              marginBottom: "24px",
            }}
          >
            Ready to Experience the Difference?
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#AAAAAA",
              lineHeight: "1.8",
              marginBottom: "48px",
            }}
          >
            Contact Apex International Transportation today for a luxury experience
            backed by 30 years of excellence. Available 24/7 for your peace of mind.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <a
              href={PHONE_HREF}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                padding: "16px 32px",
                background: "linear-gradient(90deg,#A88A30,#C9A84C,#A88A30)",
                color: "#0A0A0A",
                fontWeight: "700",
                fontSize: "16px",
                borderRadius: "8px",
                textDecoration: "none",
                cursor: "pointer",
                border: "none",
                transition: "transform 0.2s ease",
              }}
            >
              CALL {PHONE}
            </a>
            <Link
              href="/services/"
              style={{
                fontSize: "16px",
                color: "#C9A84C",
                textDecoration: "none",
                fontWeight: "600",
                borderBottom: "1px solid #C9A84C",
                paddingBottom: "4px",
              }}
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
