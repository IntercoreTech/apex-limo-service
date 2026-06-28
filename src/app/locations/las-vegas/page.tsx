import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Las Vegas Limo & Charter Service | Harry Reid Airport Transfers",
  description:
    "Premium chauffeured transportation in Las Vegas. LAS Airport transfers, Strip hotel service, LVCC convention shuttles. Call 877-427-1777.",
};

export default function LasVegasPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://apexlimola.com/locations/las-vegas/#local-business",
        name: "Apex International Transportation — Las Vegas",
        description:
          "Premium chauffeured limo and charter bus service in Las Vegas, Nevada. Airport transfers, Strip hotel service, convention shuttles.",
        url: "https://apexlimola.com/locations/las-vegas/",
        telephone: "+1-877-427-1777",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Las Vegas, NV",
          addressLocality: "Las Vegas",
          addressRegion: "NV",
          postalCode: "89101",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 36.1699,
          longitude: -115.1398,
        },
        image:
          "https://apexlimola.com/wp-content/uploads/2023/02/A1054_high_res.png",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          ratingCount: "287",
          bestRating: "5",
          worstRating: "1",
        },
        priceRange: "$$$",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        areaServed: [
          {
            "@type": "City",
            name: "Las Vegas",
          },
          {
            "@type": "City",
            name: "Henderson",
          },
          {
            "@type": "City",
            name: "Summerlin",
          },
          {
            "@type": "City",
            name: "North Las Vegas",
          },
        ],
        serviceArea: {
          "@type": "City",
          name: "Las Vegas Metropolitan Area",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://apexlimola.com/locations/las-vegas/#breadcrumb-list",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://apexlimola.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Locations",
            item: "https://apexlimola.com/locations/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Las Vegas",
            item: "https://apexlimola.com/locations/las-vegas/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://apexlimola.com/locations/las-vegas/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How far is Harry Reid International Airport from the Las Vegas Strip?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Harry Reid International Airport (LAS) is approximately 5 miles south of the Las Vegas Strip. Our typical transfer time is 15–20 minutes depending on traffic conditions.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer flight tracking for Las Vegas airport pickups?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We monitor your flight status and adjust pickup timing automatically. Our driver will be ready when you land, with no surprise delays or extra charges.",
            },
          },
          {
            "@type": "Question",
            name: "What hotels on the Las Vegas Strip do you service?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We service all major Las Vegas Strip properties including Bellagio, Wynn, MGM Grand, Caesars Palace, The Venetian, Aria, Cosmopolitan, Mandalay Bay, Luxor, Paris, Planet Hollywood, and The Mirage.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide convention shuttle service for LVCC events?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We specialize in convention and corporate group transportation for CES, SEMA, NAB, Magic Show, and other LVCC events. Dedicated shuttle service, block reservations, and corporate billing available.",
            },
          },
          {
            "@type": "Question",
            name: "Can I book a day trip from Las Vegas to the Grand Canyon or Hoover Dam?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. We offer full-day charter service to the Grand Canyon (45 min), Hoover Dam (30 min), Valley of Fire (60 min), and Red Rock Canyon (20 min). Contact us for custom itineraries and group rates.",
            },
          },
          {
            "@type": "Question",
            name: "What is your cancellation policy for Las Vegas reservations?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Reservations cancelled 24 hours in advance receive a full refund. Cancellations within 24 hours are subject to our standard cancellation fee. Airport pickups are held until 1 hour after scheduled arrival.",
            },
          },
        ],
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
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "56px",
              fontWeight: "700",
              color: "#FFFFFF",
              margin: "0 0 20px 0",
              lineHeight: "1.2",
            }}
          >
            LAS VEGAS
          </h1>
          <p
            style={{
              fontSize: "24px",
              color: "#C9A84C",
              margin: "0",
              fontWeight: "500",
            }}
          >
            From Harry Reid Airport to the Strip — Premium Chauffeured Service
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section
        style={{
          background: "#141414",
          padding: "60px 20px",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "40px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "48px",
                  fontWeight: "700",
                  color: "#C9A84C",
                  marginBottom: "10px",
                }}
              >
                20 min
              </div>
              <p style={{ color: "#AAAAAA", margin: "0", fontSize: "16px" }}>
                LAS to Strip Average
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "48px",
                  fontWeight: "700",
                  color: "#C9A84C",
                  marginBottom: "10px",
                }}
              >
                6M+
              </div>
              <p style={{ color: "#AAAAAA", margin: "0", fontSize: "16px" }}>
                Annual Convention Attendees
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "48px",
                  fontWeight: "700",
                  color: "#C9A84C",
                  marginBottom: "10px",
                }}
              >
                24/7
              </div>
              <p style={{ color: "#AAAAAA", margin: "0", fontSize: "16px" }}>
                Available Service
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "48px",
                  fontWeight: "700",
                  color: "#C9A84C",
                  marginBottom: "10px",
                }}
              >
                4.9★
              </div>
              <p style={{ color: "#AAAAAA", margin: "0", fontSize: "16px" }}>
                287 Google Reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section
        style={{
          background: "#0A0A0A",
          padding: "80px 20px",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#FFFFFF",
              marginBottom: "60px",
              textAlign: "center",
            }}
          >
            Las Vegas Coverage Areas
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
            }}
          >
            {/* Harry Reid International */}
            <div
              style={{
                background: "#141414",
                border: "1px solid #2A2A2A",
                borderRadius: "8px",
                padding: "30px",
                transition: "border-color 0.3s ease",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#C9A84C",
                  margin: "0 0 15px 0",
                }}
              >
                Harry Reid International (LAS)
              </h3>
              <p style={{ color: "#AAAAAA", margin: "0 0 12px 0" }}>
                5 miles south of the Strip. Domestic and international flights.
              </p>
              <ul
                style={{
                  color: "#AAAAAA",
                  margin: "15px 0 0 0",
                  paddingLeft: "20px",
                  fontSize: "14px",
                }}
              >
                <li>Real-time flight tracking</li>
                <li>Meet &amp; greet service</li>
                <li>Curbside pickup assistance</li>
                <li>15–20 min to Strip</li>
              </ul>
            </div>

            {/* Las Vegas Strip */}
            <div
              style={{
                background: "#141414",
                border: "1px solid #2A2A2A",
                borderRadius: "8px",
                padding: "30px",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#C9A84C",
                  margin: "0 0 15px 0",
                }}
              >
                Las Vegas Strip
              </h3>
              <p style={{ color: "#AAAAAA", margin: "0 0 12px 0" }}>
                Luxury hotel transfers and premium service.
              </p>
              <ul
                style={{
                  color: "#AAAAAA",
                  margin: "15px 0 0 0",
                  paddingLeft: "20px",
                  fontSize: "14px",
                }}
              >
                <li>Bellagio, Wynn, MGM Grand</li>
                <li>Caesars Palace, The Venetian</li>
                <li>Aria, Cosmopolitan, Mandalay Bay</li>
                <li>Luxury sedan &amp; stretch limo service</li>
              </ul>
            </div>

            {/* LVCC */}
            <div
              style={{
                background: "#141414",
                border: "1px solid #2A2A2A",
                borderRadius: "8px",
                padding: "30px",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#C9A84C",
                  margin: "0 0 15px 0",
                }}
              >
                Las Vegas Convention Center (LVCC)
              </h3>
              <p style={{ color: "#AAAAAA", margin: "0 0 12px 0" }}>
                4.6M sq ft. Hosts 6M+ attendees annually.
              </p>
              <ul
                style={{
                  color: "#AAAAAA",
                  margin: "15px 0 0 0",
                  paddingLeft: "20px",
                  fontSize: "14px",
                }}
              >
                <li>CES, SEMA, NAB, Magic Show</li>
                <li>Corporate group shuttles</li>
                <li>Block reservations &amp; billing</li>
                <li>Dedicated convention coordinators</li>
              </ul>
            </div>

            {/* Downtown / Fremont */}
            <div
              style={{
                background: "#141414",
                border: "1px solid #2A2A2A",
                borderRadius: "8px",
                padding: "30px",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#C9A84C",
                  margin: "0 0 15px 0",
                }}
              >
                Downtown Las Vegas / Fremont Street
              </h3>
              <p style={{ color: "#AAAAAA", margin: "0 0 12px 0" }}>
                Historic downtown casinos and entertainment district.
              </p>
              <ul
                style={{
                  color: "#AAAAAA",
                  margin: "15px 0 0 0",
                  paddingLeft: "20px",
                  fontSize: "14px",
                }}
              >
                <li>Golden Nugget, Four Queens</li>
                <li>Fremont Hotel &amp; Casino</li>
                <li>Neon Museum tours</li>
                <li>Group celebration packages</li>
              </ul>
            </div>

            {/* Henderson & Summerlin */}
            <div
              style={{
                background: "#141414",
                border: "1px solid #2A2A2A",
                borderRadius: "8px",
                padding: "30px",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#C9A84C",
                  margin: "0 0 15px 0",
                }}
              >
                Henderson &amp; Summerlin
              </h3>
              <p style={{ color: "#AAAAAA", margin: "0 0 12px 0" }}>
                Suburban business and residential service areas.
              </p>
              <ul
                style={{
                  color: "#AAAAAA",
                  margin: "15px 0 0 0",
                  paddingLeft: "20px",
                  fontSize: "14px",
                }}
              >
                <li>Corporate office transportation</li>
                <li>Resident airport transfers</li>
                <li>Special events &amp; celebrations</li>
                <li>On-demand charter service</li>
              </ul>
            </div>

            {/* Day Trips */}
            <div
              style={{
                background: "#141414",
                border: "1px solid #2A2A2A",
                borderRadius: "8px",
                padding: "30px",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#C9A84C",
                  margin: "0 0 15px 0",
                }}
              >
                Scenic Day Trips
              </h3>
              <p style={{ color: "#AAAAAA", margin: "0 0 12px 0" }}>
                Grand Canyon, Hoover Dam, Valley of Fire, and more.
              </p>
              <ul
                style={{
                  color: "#AAAAAA",
                  margin: "15px 0 0 0",
                  paddingLeft: "20px",
                  fontSize: "14px",
                }}
              >
                <li>Hoover Dam — 30 min</li>
                <li>Grand Canyon — 45 min</li>
                <li>Valley of Fire — 60 min</li>
                <li>Red Rock Canyon — 20 min</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Convention & Corporate Section */}
      <section
        style={{
          background: "#141414",
          padding: "80px 20px",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <h2
                style={{
                  fontSize: "40px",
                  fontWeight: "700",
                  color: "#FFFFFF",
                  margin: "0 0 20px 0",
                }}
              >
                Convention &amp; Corporate Excellence
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "#AAAAAA",
                  margin: "0 0 20px 0",
                  lineHeight: "1.6",
                }}
              >
                Las Vegas hosts <strong style={{ color: "#C9A84C" }}>6 million+ convention attendees annually</strong>, with the Las Vegas Convention Center spanning 4.6 million square feet.
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#AAAAAA",
                  margin: "0 0 20px 0",
                  lineHeight: "1.6",
                }}
              >
                Apex specializes in large-scale event transportation:
              </p>
              <ul
                style={{
                  color: "#AAAAAA",
                  margin: "20px 0",
                  paddingLeft: "20px",
                  fontSize: "16px",
                  lineHeight: "1.8",
                }}
              >
                <li>
                  <strong style={{ color: "#C9A84C" }}>CES, SEMA, NAB:</strong> Dedicated shuttle fleets
                </li>
                <li>
                  <strong style={{ color: "#C9A84C" }}>Magic Show:</strong> Group arrivals &amp; departures
                </li>
                <li>
                  <strong style={{ color: "#C9A84C" }}>Corporate accounts:</strong> Master billing, volume discounts
                </li>
                <li>
                  <strong style={{ color: "#C9A84C" }}>Premium service:</strong> Reserved parking, priority dispatch
                </li>
              </ul>
              <p
                style={{
                  fontSize: "16px",
                  color: "#AAAAAA",
                  margin: "20px 0 0 0",
                  lineHeight: "1.6",
                }}
              >
                Our convention coordinators work with event planners to ensure seamless ground transportation for every attendee.
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://apexlimola.com/wp-content/uploads/2023/02/A1054_high_res.png"
                alt="Charter Bus Las Vegas — Apex International Transportation"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  borderRadius: "8px",
                  border: "1px solid #2A2A2A",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        style={{
          background: "#0A0A0A",
          padding: "80px 20px",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#FFFFFF",
              marginBottom: "60px",
              textAlign: "center",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            {/* FAQ 1 */}
            <div
              style={{
                background: "#141414",
                border: "1px solid #2A2A2A",
                borderRadius: "8px",
                padding: "30px",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#C9A84C",
                  margin: "0 0 15px 0",
                }}
              >
                How far is Harry Reid International Airport from the Las Vegas Strip?
              </h3>
              <p style={{ color: "#AAAAAA", margin: "0", lineHeight: "1.6" }}>
                Harry Reid International Airport (LAS) is approximately 5 miles south of the Las Vegas Strip. Our typical transfer time is 15–20 minutes depending on traffic conditions.
              </p>
            </div>

            {/* FAQ 2 */}
            <div
              style={{
                background: "#141414",
                border: "1px solid #2A2A2A",
                borderRadius: "8px",
                padding: "30px",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#C9A84C",
                  margin: "0 0 15px 0",
                }}
              >
                Do you offer flight tracking for Las Vegas airport pickups?
              </h3>
              <p style={{ color: "#AAAAAA", margin: "0", lineHeight: "1.6" }}>
                Yes. We monitor your flight status and adjust pickup timing automatically. Our driver will be ready when you land, with no surprise delays or extra charges.
              </p>
            </div>

            {/* FAQ 3 */}
            <div
              style={{
                background: "#141414",
                border: "1px solid #2A2A2A",
                borderRadius: "8px",
                padding: "30px",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#C9A84C",
                  margin: "0 0 15px 0",
                }}
              >
                What hotels on the Las Vegas Strip do you service?
              </h3>
              <p style={{ color: "#AAAAAA", margin: "0", lineHeight: "1.6" }}>
                We service all major Las Vegas Strip properties including Bellagio, Wynn, MGM Grand, Caesars Palace, The Venetian, Aria, Cosmopolitan, Mandalay Bay, Luxor, Paris, Planet Hollywood, and The Mirage.
              </p>
            </div>

            {/* FAQ 4 */}
            <div
              style={{
                background: "#141414",
                border: "1px solid #2A2A2A",
                borderRadius: "8px",
                padding: "30px",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#C9A84C",
                  margin: "0 0 15px 0",
                }}
              >
                Do you provide convention shuttle service for LVCC events?
              </h3>
              <p style={{ color: "#AAAAAA", margin: "0", lineHeight: "1.6" }}>
                Yes. We specialize in convention and corporate group transportation for CES, SEMA, NAB, Magic Show, and other LVCC events. Dedicated shuttle service, block reservations, and corporate billing available.
              </p>
            </div>

            {/* FAQ 5 */}
            <div
              style={{
                background: "#141414",
                border: "1px solid #2A2A2A",
                borderRadius: "8px",
                padding: "30px",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#C9A84C",
                  margin: "0 0 15px 0",
                }}
              >
                Can I book a day trip from Las Vegas to the Grand Canyon or Hoover Dam?
              </h3>
              <p style={{ color: "#AAAAAA", margin: "0", lineHeight: "1.6" }}>
                Absolutely. We offer full-day charter service to the Grand Canyon (45 min), Hoover Dam (30 min), Valley of Fire (60 min), and Red Rock Canyon (20 min). Contact us for custom itineraries and group rates.
              </p>
            </div>

            {/* FAQ 6 */}
            <div
              style={{
                background: "#141414",
                border: "1px solid #2A2A2A",
                borderRadius: "8px",
                padding: "30px",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#C9A84C",
                  margin: "0 0 15px 0",
                }}
              >
                What is your cancellation policy for Las Vegas reservations?
              </h3>
              <p style={{ color: "#AAAAAA", margin: "0", lineHeight: "1.6" }}>
                Reservations cancelled 24 hours in advance receive a full refund. Cancellations within 24 hours are subject to our standard cancellation fee. Airport pickups are held until 1 hour after scheduled arrival.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #0A0A0A 0%, #141414 100%)",
          padding: "80px 20px",
          textAlign: "center",
          borderTop: "1px solid #2A2A2A",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#FFFFFF",
              margin: "0 0 20px 0",
            }}
          >
            Ready to Experience Premium Transportation?
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#AAAAAA",
              margin: "0 0 40px 0",
              lineHeight: "1.6",
            }}
          >
            From airport pickups to convention shuttles, Apex is your Las Vegas transportation partner.
          </p>

          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="tel:+1-877-427-1777"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px 40px",
                background: "linear-gradient(90deg, #C9A84C 0%, #D9B860 100%)",
                color: "#0A0A0A",
                textDecoration: "none",
                borderRadius: "4px",
                fontWeight: "700",
                fontSize: "18px",
                transition: "opacity 0.3s ease",
              }}
            >
              ✓ Call 877-427-1777
            </a>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px 40px",
                background: "transparent",
                color: "#C9A84C",
                textDecoration: "none",
                borderRadius: "4px",
                fontWeight: "700",
                fontSize: "18px",
                border: "2px solid #C9A84C",
                transition: "all 0.3s ease",
              }}
            >
              ← Back to Locations
            </Link>
          </div>

          <p
            style={{
              fontSize: "14px",
              color: "#2A2A2A",
              margin: "40px 0 0 0",
            }}
          >
            Available 24/7. Same-day reservations available.
          </p>
        </div>
      </section>
    </>
  );
}
