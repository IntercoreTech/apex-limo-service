import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wedding & Event Transportation | Limo Service",
  description:
    "Luxury wedding transportation and event chauffeuring. Bridal parties, proms, galas, red carpet events. White-glove service across LA, Las Vegas, Miami. Call 877-427-1777.",
};

const eventTypes = [
  "Weddings",
  "Bridal showers",
  "Bachelorette parties",
  "Proms & homecomings",
  "Bar/Bat Mitzvahs",
  "Quinceañeras",
  "Corporate galas",
  "Red carpet events",
  "Charity functions",
  "Holiday parties",
];

const services = [
  {
    title: "Pre-event planning consultation",
    description:
      "We sit down with you to understand your vision, timeline, and special requirements.",
  },
  {
    title: "Timeline coordination with wedding planner",
    description:
      "Seamless integration with your wedding team to ensure perfect synchronization.",
  },
  {
    title: "Decorated vehicles (ribbons, flowers)",
    description:
      "Custom floral arrangements and elegant decorations to match your theme.",
  },
  {
    title: "Chilled champagne/water",
    description:
      "Premium beverages ready for your journey to celebrate your special moment.",
  },
  {
    title: "Smooth red carpet arrival",
    description:
      "Professional white-glove service that makes a grand entrance unforgettable.",
  },
  {
    title: "Photographer-timed arrivals",
    description:
      "Coordinated timing so your photographer captures the perfect moment.",
  },
];

const fleetOptions = [
  {
    type: "Sprinter Vans",
    capacity: "Up to 12 passengers",
    use: "Ideal for bridal party transportation with comfort and style.",
  },
  {
    type: "Premium SUVs",
    capacity: "Up to 6 passengers",
    use: "Perfect for the bride and groom or VIP guests.",
  },
  {
    type: "Minibus",
    capacity: "Up to 20 passengers",
    use: "Great for smaller wedding parties and guest groups.",
  },
  {
    type: "Motorcoach",
    capacity: "Up to 55 passengers",
    use: "Ideal for large wedding parties, rehearsal dinners, or full guest transport.",
  },
];

const faqs = [
  {
    question: "How far in advance should I book my wedding transportation?",
    answer:
      "We recommend booking at least 3-4 months in advance, especially if your wedding is during peak season (May-October). However, we will do our best to accommodate late bookings.",
  },
  {
    question: "Can you decorate the vehicles to match my wedding theme?",
    answer:
      "Absolutely! We offer custom vehicle decorations including ribbons, flowers, and special touches. Please discuss your preferences during the consultation so we can provide accurate pricing.",
  },
  {
    question: "What is included in your wedding transportation package?",
    answer:
      "Our standard package includes professional driver, vehicle of your choice, complimentary water and champagne, pre-event consultation, timeline coordination, and white-glove service. Additional services like decorations or extended hours can be added.",
  },
  {
    question: "Do you provide transportation across multiple cities or states?",
    answer:
      "Yes! We service Los Angeles, Las Vegas, Miami, and surrounding areas. We also provide long-distance wedding transportation. Contact us for specific routing and pricing.",
  },
  {
    question: "What if my event runs longer than expected?",
    answer:
      "We offer flexible pricing for extended hours. Let us know during the consultation what contingency time you might need, and we will ensure a driver is available.",
  },
  {
    question: "Are your drivers trained for event transportation?",
    answer:
      "Yes, all our drivers are professionally trained, background-checked, and experienced in high-profile event transportation. They understand the importance of punctuality and discretion.",
  },
];

export default function WeddingsEventsPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://apexlimola.com/services/weddings-events#service",
        name: "Wedding & Event Transportation",
        description:
          "Luxury wedding transportation and event chauffeuring for bridal parties, proms, galas, and red carpet events.",
        provider: {
          "@type": "Organization",
          name: "Apex International Transportation",
          url: "https://apexlimola.com",
          telephone: "877-427-1777",
          image: "https://apexlimola.com/logo.png",
        },
        areaServed: [
          {
            "@type": "City",
            name: "Los Angeles",
          },
          {
            "@type": "City",
            name: "Las Vegas",
          },
          {
            "@type": "City",
            name: "Miami",
          },
        ],
        priceRange: "$$$",
        serviceType:
          "Transportation, Chauffeur Service, Event Planning Coordination",
      },
      {
        "@type": "BreadcrumbList",
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
            item: "https://apexlimola.com/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Wedding & Event Transportation",
            item: "https://apexlimola.com/services/weddings-events",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div style={{ backgroundColor: "#0A0A0A", color: "#FFFFFF" }}>
        {/* Hero Section */}
        <section
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(10,10,10,0.8) 0%, rgba(20,20,20,0.8) 100%)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "100px 20px",
            textAlign: "center",
            minHeight: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 8vw, 4rem)",
                fontWeight: "900",
                marginBottom: "20px",
                color: "#FFFFFF",
                textTransform: "uppercase",
                letterSpacing: "3px",
              }}
            >
              WEDDINGS & EVENTS
            </h1>
            <p
              style={{
                fontSize: "clamp(1.2rem, 4vw, 1.8rem)",
                color: "#C9A84C",
                marginBottom: "0",
                fontWeight: "300",
                lineHeight: "1.4",
              }}
            >
              White-Glove Luxury Transportation for Your Most Important Day
            </p>
          </div>
        </section>

        {/* Event Types Section */}
        <section
          style={{
            padding: "80px 20px",
            backgroundColor: "#0A0A0A",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.8rem, 6vw, 2.8rem)",
              fontWeight: "700",
              marginBottom: "50px",
              textAlign: "center",
              color: "#FFFFFF",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Events We Service
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
            }}
          >
            {eventTypes.map((event, idx) => (
              <div
                key={idx}
                style={{
                  padding: "25px",
                  backgroundColor: "#141414",
                  border: "1px solid #2A2A2A",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    color: "#C9A84C",
                    margin: "0",
                  }}
                >
                  {event}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What We Provide Section */}
        <section
          style={{
            padding: "80px 20px",
            backgroundColor: "#141414",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.8rem, 6vw, 2.8rem)",
              fontWeight: "700",
              marginBottom: "50px",
              textAlign: "center",
              color: "#FFFFFF",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            What We Provide
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
            }}
          >
            {services.map((service, idx) => (
              <div
                key={idx}
                style={{
                  padding: "30px",
                  backgroundColor: "#0A0A0A",
                  border: "1px solid #2A2A2A",
                  borderRadius: "8px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "700",
                    color: "#C9A84C",
                    marginBottom: "12px",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#AAAAAA",
                    lineHeight: "1.6",
                    margin: "0",
                  }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Fleet & Vehicle Section */}
        <section
          style={{
            padding: "80px 20px",
            backgroundColor: "#0A0A0A",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.8rem, 6vw, 2.8rem)",
              fontWeight: "700",
              marginBottom: "50px",
              textAlign: "center",
              color: "#FFFFFF",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Our Event Fleet
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "50px",
              alignItems: "center",
              gridAutoFlow: "dense",
            }}
          >
            {/* Vehicle Image */}
            <div
              style={{
                textAlign: "center",
              }}
            >
              <img
                src="https://apexlimola.com/wp-content/uploads/2023/02/Mercedes_s-class_w223_black_1.png"
                alt="Wedding Limousine Service"
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  borderRadius: "8px",
                  height: "auto",
                }}
              />
            </div>
            {/* Fleet Options */}
            <div>
              {fleetOptions.map((option, idx) => (
                <div
                  key={idx}
                  style={{
                    marginBottom: "30px",
                    paddingBottom: "30px",
                    borderBottom: idx < fleetOptions.length - 1 ? "1px solid #2A2A2A" : "none",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "700",
                      color: "#C9A84C",
                      marginBottom: "8px",
                    }}
                  >
                    {option.type}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "#AAAAAA",
                      marginBottom: "8px",
                      margin: "0 0 8px 0",
                    }}
                  >
                    <strong style={{ color: "#FFFFFF" }}>Capacity:</strong>{" "}
                    {option.capacity}
                  </p>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "#AAAAAA",
                      lineHeight: "1.6",
                      margin: "0",
                    }}
                  >
                    {option.use}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          style={{
            padding: "80px 20px",
            backgroundColor: "#141414",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.8rem, 6vw, 2.8rem)",
              fontWeight: "700",
              marginBottom: "50px",
              textAlign: "center",
              color: "#FFFFFF",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Frequently Asked Questions
          </h2>
          <div>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  marginBottom: "30px",
                  paddingBottom: "30px",
                  borderBottom: idx < faqs.length - 1 ? "1px solid #2A2A2A" : "none",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "700",
                    color: "#C9A84C",
                    marginBottom: "12px",
                  }}
                >
                  {faq.question}
                </h3>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#AAAAAA",
                    lineHeight: "1.6",
                    margin: "0",
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section
          style={{
            padding: "80px 20px",
            backgroundColor: "#0A0A0A",
            textAlign: "center",
            borderTop: "1px solid #2A2A2A",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.8rem, 6vw, 2.8rem)",
              fontWeight: "700",
              marginBottom: "30px",
              color: "#FFFFFF",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Ready to Book Your Event?
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#AAAAAA",
              marginBottom: "40px",
              maxWidth: "600px",
              margin: "0 auto 40px",
            }}
          >
            Contact Apex International Transportation today for a free consultation and quote.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              maxWidth: "400px",
              margin: "0 auto",
            }}
          >
            <a
              href="tel:877-427-1777"
              className="apex-btn-outline-gold"
            >
              ☎ Call 877-427-1777
            </a>
            <Link
              href="/contact"
              className="apex-btn-outline-gold-reverse"
            >
              Get a Free Quote
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
