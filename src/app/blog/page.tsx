import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Transportation Blog | Tips, Guides & News",
  description:
    "Expert tips on airport transfers, corporate travel, event transportation and more from Apex International Transportation.",
};

const blogPosts = [
  {
    slug: "how-to-book-lax-airport-transfer",
    title: "The Complete Guide to Booking an LAX Airport Transfer (2024)",
    excerpt:
      "LAX is one of the world's busiest airports. Here's how to navigate pickup zones, flight delays, and chauffeur meetups like a pro.",
    category: "Airport Tips",
    date: "June 1, 2024",
    readTime: "8 min read",
  },
  {
    slug: "corporate-travel-tips-los-angeles",
    title: "5 Corporate Travel Mistakes That Cost LA Executives Money",
    excerpt:
      "From last-minute bookings to ignoring traffic patterns, these common mistakes add hours and hundreds to your LA business travel costs.",
    category: "Corporate Travel",
    date: "May 15, 2024",
    readTime: "6 min read",
  },
  {
    slug: "wedding-transportation-planning-guide",
    title: "Wedding Transportation Planning: The Ultimate Checklist for 2024",
    excerpt:
      "How to coordinate your bridal party, guest shuttles, and getaway car without the stress. A timeline-by-timeline guide.",
    category: "Events",
    date: "April 22, 2024",
    readTime: "10 min read",
  },
  {
    slug: "las-vegas-convention-shuttle-tips",
    title: "CES, SEMA & NAB: How to Manage Convention Transportation in Las Vegas",
    excerpt:
      "Las Vegas hosts 6M+ convention visitors annually. Here's how savvy event planners keep their attendees moving efficiently.",
    category: "Group Charter",
    date: "March 10, 2024",
    readTime: "7 min read",
  },
];

export default function BlogPage() {
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
                "@type": "WebPage",
                name: "Transportation Blog | Tips, Guides & News",
                description:
                  "Expert tips on airport transfers, corporate travel, event transportation and more from Apex International Transportation.",
                url: "https://apexlimoservice.com/blog/",
                isPartOf: {
                  "@id": "https://apexlimoservice.com/#website",
                },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://apexlimoservice.com/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Blog",
                    item: "https://apexlimoservice.com/blog/",
                  },
                ],
              },
              {
                "@type": "Blog",
                name: "Apex International Transportation Blog",
                description:
                  "Expert guides, tips and industry news on luxury transportation services.",
                url: "https://apexlimoservice.com/blog/",
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section
        style={{
          backgroundColor: "#0A0A0A",
          padding: "80px 20px",
          textAlign: "center",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "700",
              color: "#FFFFFF",
              margin: "0 0 16px",
              letterSpacing: "-1px",
            }}
          >
            TRANSPORTATION BLOG
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#AAAAAA",
              margin: "0 auto",
              maxWidth: "600px",
            }}
          >
            Expert Guides, Tips &amp; Industry News
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section
        style={{
          backgroundColor: "#141414",
          padding: "80px 20px",
          minHeight: "600px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
              gap: "40px",
              marginBottom: "60px",
            }}
          >
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <article className="apex-blog-card">
                  {/* Category Tag */}
                  <div style={{ marginBottom: "16px" }}>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "600",
                        color: "#C9A84C",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    style={{
                      fontSize: "22px",
                      fontWeight: "700",
                      color: "#FFFFFF",
                      margin: "0 0 16px",
                      lineHeight: "1.3",
                    }}
                  >
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#AAAAAA",
                      margin: "0 0 24px",
                      lineHeight: "1.6",
                      flex: 1,
                    }}
                  >
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "13px",
                      color: "#666666",
                      borderTop: "1px solid #2A2A2A",
                      paddingTop: "16px",
                    }}
                  >
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section
        style={{
          backgroundColor: "#0A0A0A",
          padding: "60px 20px",
          borderTop: "1px solid #2A2A2A",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#FFFFFF",
              margin: "0 0 16px",
            }}
          >
            Subscribe to Tips
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#AAAAAA",
              margin: "0 0 32px",
            }}
          >
            Get transportation tips, industry insights, and special offers delivered to your inbox.
          </p>

          <form
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="apex-email-input"
            />
            <button type="submit" className="apex-btn-gold">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: "#141414", padding: "60px 20px" }}>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#FFFFFF",
              margin: "0 0 16px",
            }}
          >
            Ready to Experience Premium Transportation?
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#AAAAAA",
              margin: "0 0 32px",
            }}
          >
            Book your next luxury transportation with Apex International. Professional drivers, premium vehicles, on-time every time.
          </p>

          <Link href="/book/" className="apex-btn-gold-link">
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}
