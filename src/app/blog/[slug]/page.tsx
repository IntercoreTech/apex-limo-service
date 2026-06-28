import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  content: string;
}

const POSTS: BlogPost[] = [
  {
    slug: "how-to-book-lax-airport-transfer",
    title: "How to Book Your LAX Airport Transfer Like a Pro",
    excerpt: "Master the art of hassle-free airport transfers. Learn insider tips for booking, timing, and making the most of your LAX ground transportation.",
    category: "Travel Tips",
    date: "2024-06-15",
    readTime: "5 min read",
    author: "Apex Transportation Team",
    content: `
      <h2>Why LAX Airport Transfers Matter</h2>
      <p>Flying into Los Angeles International Airport (LAX) can be overwhelming. Between the bustling terminals, heavy traffic, and navigation challenges, getting to your destination safely and on time is crucial. That's where professional airport transfers come in. A well-planned transfer eliminates stress and sets the tone for your entire trip.</p>

      <h2>Step 1: Plan Ahead – Know Your Arrival Details</h2>
      <p>The golden rule of airport transfers is timing. Knowing your exact arrival time helps us meet you precisely when you land. Here's what you should do:</p>
      <ul style="color:#FFFFFF;margin:16px 0;padding-left:24px;">
        <li style="margin-bottom:8px;">Check your flight status 24 hours before arrival</li>
        <li style="margin-bottom:8px;">Account for luggage claim and customs (if international)</li>
        <li style="margin-bottom:8px;">Allow 15-20 minutes for terminal navigation</li>
        <li style="margin-bottom:8px;">Book your transfer at least 2-3 hours before landing</li>
      </ul>

      <h2>Step 2: Choose the Right Service Level</h2>
      <p>Apex offers multiple transfer options to fit your needs and budget. Standard sedans work perfectly for solo travelers and small groups. For business travelers, our executive black cars provide premium comfort and professional drivers. Families or larger groups should consider our SUV or party car options for extra space and amenities.</p>

      <h2>Step 3: Provide Accurate Pickup Information</h2>
      <p>When booking, specify your LAX terminal and desired pickup location. Most travelers prefer curb pickup at the departure level for convenience. If you're running late or your flight is delayed, notify us immediately – our drivers monitor flight statuses and adjust accordingly.</p>

      <h2>Pro Tips for a Smooth Transfer</h2>
      <p>Wear comfortable clothing and have your phone charged – you'll need it for communication. Keep your booking confirmation handy. Our drivers carry signs with your name and will meet you at the designated location. If you can't spot them, call the number on your confirmation.</p>
      <p>Consider booking a round-trip transfer when you arrive. This ensures reliable transportation for your entire stay and often comes with discounted rates. Downtown LA traffic can be unpredictable, so plan extra time if you have important appointments.</p>

      <h2>What to Expect During Your Transfer</h2>
      <p>Professional drivers arrive 10-15 minutes early and handle all luggage. Our vehicles are clean, climate-controlled, and equipped with phone chargers. You'll receive real-time updates, and our drivers know alternate routes to avoid traffic congestion. Whether heading to downtown LA, Beverly Hills, or Long Beach, expect professional service every step of the way.</p>
    `,
  },
  {
    slug: "corporate-travel-tips-los-angeles",
    title: "Corporate Travel Tips for Los Angeles Business Professionals",
    excerpt: "Elevate your LA business travel experience. Discover how corporate limousine services maximize productivity, impress clients, and streamline your schedule.",
    category: "Business",
    date: "2024-06-08",
    readTime: "6 min read",
    author: "Apex Transportation Team",
    content: `
      <h2>The Executive Edge: Why Transportation Matters in Business</h2>
      <p>In Los Angeles's competitive business environment, first impressions matter. Your ground transportation sets the tone for client meetings, negotiations, and partnerships. A professional executive transfer isn't a luxury – it's a strategic business decision that demonstrates respect for your time and your client's expectations.</p>

      <h2>Maximize Productivity During Travel</h2>
      <p>Our professional drivers handle navigation, traffic, and route optimization. This gives you valuable time to:</p>
      <ul style="color:#FFFFFF;margin:16px 0;padding-left:24px;">
        <li style="margin-bottom:8px;">Prepare for important meetings and presentations</li>
        <li style="margin-bottom:8px;">Respond to urgent emails and communications</li>
        <li style="margin-bottom:8px;">Review contracts and business documents</li>
        <li style="margin-bottom:8px;">Take important client calls in privacy and comfort</li>
        <li style="margin-bottom:8px;">Decompress before high-stakes negotiations</li>
      </ul>

      <h2>Impress Your Clients and Partners</h2>
      <p>When you arrange client ground transportation, you signal that you value their time and comfort. Our executive black cars, professional drivers in business attire, and immaculate vehicles create a sophisticated brand experience. Clients remember these touches – they influence relationships and deal outcomes.</p>

      <h2>Navigate LA Traffic Like a Pro</h2>
      <p>Los Angeles traffic is notoriously unpredictable. Our drivers navigate the 405, Santa Monica freeway, and downtown corridors daily. They know real-time traffic patterns, construction zones, and alternate routes that save 15-30 minutes. This expertise ensures you arrive on time, every time – critical for business commitments.</p>

      <h2>Cost-Effective Solutions for Your Bottom Line</h2>
      <p>Corporate accounts offer negotiated rates, consolidated billing, and expense reporting integration. Eliminate parking fees, valet costs, and the liability of tired employees driving. Our services often cost less than ride-share options when you account for reliability and professionalism.</p>

      <h2>Seamless Meeting Coordination</h2>
      <p>Book recurring transfers between your office, LAX, hotels, and client locations. We handle complex multi-stop itineraries. Need to adjust meeting times? Our drivers adapt in real-time. For out-of-town executives, arrange arrival and departure transfers as part of your hospitality package.</p>

      <h2>Professional Standards You Can Depend On</h2>
      <p>Our drivers undergo thorough background checks and professional training. They maintain confidentiality, follow precise scheduling, and present a polished image. Vehicle maintenance standards ensure reliability – no breakdowns, no surprises. When business depends on punctuality, trust Apex Transportation.</p>
    `,
  },
  {
    slug: "wedding-transportation-planning-guide",
    title: "Complete Wedding Transportation Planning Guide",
    excerpt: "Create unforgettable memories with seamless wedding-day transportation. Learn how to coordinate vehicles, timing, and logistics for your special day.",
    category: "Weddings",
    date: "2024-05-22",
    readTime: "7 min read",
    author: "Apex Transportation Team",
    content: `
      <h2>Transportation: The Often-Overlooked Wedding Essential</h2>
      <p>Your wedding day involves coordinating hundreds of details – décor, catering, photography, and ceremony timing. Amidst this chaos, reliable transportation is often overlooked until problems arise. Professional wedding transportation ensures your guests, wedding party, and you arrive safely, on time, and in style. It's one detail that directly impacts your entire day's experience.</p>

      <h2>Understanding Your Wedding Transportation Needs</h2>
      <p>Wedding logistics involve multiple transportation challenges: getting the bride ready, transporting the wedding party, moving guests between locations, and arranging guest parking. A professional service coordinates all these moving parts. Calculate exactly what you need:</p>
      <ul style="color:#FFFFFF;margin:16px 0;padding-left:24px;">
        <li style="margin-bottom:8px;">Bride's pre-ceremony transportation (hair and makeup location to venue)</li>
        <li style="margin-bottom:8px;">Groom and groomsmen transport</li>
        <li style="margin-bottom:8px;">Bridesmaids and immediate family</li>
        <li style="margin-bottom:8px;">Guest shuttles if parking is limited</li>
        <li style="margin-bottom:8px;">Reception transport between venues</li>
        <li style="margin-bottom:8px;">Newlyweds' departure vehicle</li>
      </ul>

      <h2>Timing: The Critical Factor</h2>
      <p>Wedding day timing is like a choreographed dance. The ceremony starts at 4 PM, but vehicles must position everyone hours earlier. Our professional coordinators create detailed timelines ensuring the bride arrives 45 minutes before ceremony start, the groom 30 minutes prior, and guests stagger arrival to prevent congestion. We account for traffic, weather delays, and photo sessions.</p>

      <h2>The Grand Entrance and Departure</h2>
      <p>Your first entrance as a married couple sets a powerful emotional moment. An elegantly decorated vehicle – whether a classic Rolls Royce, luxury sedan, or party limo – creates the Instagram-worthy moment your photographer captures. We handle decorations, timing, and route coordination to ensure that special moment feels effortless on your end.</p>

      <h2>Guest Experience and Logistics</h2>
      <p>Professional shuttles eliminate parking anxiety and transportation stress for your guests. This is especially important for destination weddings or venues in Los Angeles where parking is expensive or limited. Guests arrive refreshed, not frustrated. Well-organized transportation also ensures elderly relatives and VIP guests receive priority accommodations.</p>

      <h2>Budget Optimization</h2>
      <p>Wedding transportation budgets range significantly based on guest count, vehicle types, and coordination complexity. Work with our team to optimize your needs. Sometimes a single elegant vehicle for the couple and a charter bus for 50 guests costs less than individual ride-shares. We find solutions that maximize impact within your budget.</p>

      <h2>Professional Coordination with Your Planner</h2>
      <p>Our transportation coordinators work with your wedding planner, venue, and photographer to synchronize timing perfectly. This collaboration ensures the bride arrives exactly when the photographer is ready, the ceremony starts on schedule, and post-ceremony transportation moves seamlessly to photos and reception. You focus on celebrating – we handle logistics.</p>

      <h2>Your Wedding Day Peace of Mind</h2>
      <p>Wedding day stress comes from unknowns. Professional transportation eliminates transportation unknowns entirely. You know exactly when everyone arrives, how they'll get there, and what experience they'll have. That confidence allows you to be present, enjoy your celebration, and create memories instead of worrying about logistics.</p>
    `,
  },
  {
    slug: "las-vegas-convention-shuttle-tips",
    title: "Las Vegas Convention Shuttle Tips: Group Travel Perfected",
    excerpt: "Master group transportation logistics for Las Vegas conventions. Learn scheduling strategies, cost optimization, and seamless shuttle coordination.",
    category: "Travel Tips",
    date: "2024-05-10",
    readTime: "6 min read",
    author: "Apex Transportation Team",
    content: `
      <h2>The Convention Transportation Challenge</h2>
      <p>Las Vegas conventions bring hundreds or thousands of attendees to the city. Managing ground transportation for large groups is complex – coordinating hotel pickups, convention center arrivals, evening entertainment transport, and airport returns across multiple days requires military-level logistics. Poor transportation planning frustrates attendees and damages your event's reputation.</p>

      <h2>Shuttle Strategy: Fixed Routes vs. On-Demand</h2>
      <p>Two primary approaches exist for convention shuttle services. Fixed-route shuttles run specific paths on schedules – hotel to convention center, convention center to entertainment districts, etc. This works for large groups and predictable patterns. On-demand services offer flexibility for smaller groups or attendees with irregular schedules. Most successful conventions combine both approaches.</p>

      <h2>Planning Your Shuttle Schedule</h2>
      <p>Convention hours matter. If your convention runs 9 AM to 5 PM, shuttles should start service at 7:30 AM and run until 8 PM, accounting for early arrivals and late departures. Peak demand times are:</p>
      <ul style="color:#FFFFFF;margin:16px 0;padding-left:24px;">
        <li style="margin-bottom:8px;">Morning: 7:30-9:30 AM (hotel to convention center)</li>
        <li style="margin-bottom:8px;">Lunch: 11:30 AM-1:30 PM (convention to restaurants/casinos)</li>
        <li style="margin-bottom:8px;">Evening: 5:00-7:00 PM (convention to hotels/restaurants/shows)</li>
        <li style="margin-bottom:8px;">Late night: 10:00 PM+ (entertainment venues back to hotels)</li>
      </ul>

      <h2>Capacity Planning and Vehicle Selection</h2>
      <p>Accurately project attendee transportation needs. Typically, 30-40% of attendees use shuttles daily. Calculate peak capacity needs, then add 20% buffer for surge demand. Las Vegas conventions benefit from mixed fleet approaches – full-size coaches (55 seats) for main convention shuttle, smaller buses (30 seats) for secondary routes, and executive vans for VIP guests or special programming.</p>

      <h2>Cost Optimization Strategies</h2>
      <p>Group transportation costs can be substantial, but strategic planning reduces expenses. Fixed routes are cheaper per passenger than on-demand. Negotiated hourly rates with professional companies like Apex often cost 30-50% less than individual ride-shares. Pre-block your vehicles weeks in advance for better rates. Consider bundling airport transfers, convention shuttles, and evening entertainment transport into single contracts for volume discounts.</p>

      <h2>Technology and Communication</h2>
      <p>Provide attendees with clear shuttle information: routes, schedules, pickup locations, and estimated travel times. Digital signage at hotels and the convention center prevents confusion. Many conventions use apps showing real-time shuttle locations. Clear communication about delays or schedule changes keeps attendees informed and reduces frustration.</p>

      <h2>Special Considerations for Las Vegas</h2>
      <p>Vegas conventions often include evening entertainment – shows, casinos, restaurants on the Strip. Late-night shuttle availability is essential. VIP attendees or speakers may need dedicated transportation. Weather is rarely an issue, but summer heat affects service – ensure vehicles are well-maintained and air-conditioned. The Strip's congestion and complex routing require experienced drivers familiar with Vegas logistics.</p>

      <h2>Professional Coordination for Success</h2>
      <p>Partner with transportation professionals experienced in convention logistics. We coordinate detailed schedules, manage driver assignments, handle real-time adjustments, and ensure service quality throughout your event. Professional shuttle services transform transportation from a logistical headache into a seamless part of your convention experience, allowing you to focus on programming and attendee engagement.</p>
    `,
  },
];

export async function generateStaticParams() {
  return POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Not Found",
      description: "Blog post not found",
    };
  }

  return {
    title: `${post.title} | Apex International Transportation`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function generateArticleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: "https://apex-limo.com/og-image.jpg",
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://apex-limo.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Apex International Transportation",
      logo: {
        "@type": "ImageObject",
        url: "https://apex-limo.com/logo.svg",
      },
    },
  };
}

function getRelatedPosts(currentSlug: string): BlogPost[] {
  return POSTS.filter((post) => post.slug !== currentSlug).slice(0, 3);
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug);
  const schemaMarkup = generateArticleSchema(post);

  return (
    <main
      style={{
        background: "linear-gradient(135deg, #0A0A0A 0%, #141414 100%)",
        color: "#FFFFFF",
        minHeight: "100vh",
        paddingTop: "80px",
        paddingBottom: "60px",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Breadcrumb */}
      <nav
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 24px",
          marginBottom: "32px",
          fontSize: "14px",
        }}
      >
        <Link
          href="/blog"
          className="apex-link-hover"
          style={{ textDecoration: "none" }}
        >
          Blog
        </Link>
        <span style={{ margin: "0 12px", color: "#666666" }}>/</span>
        <span style={{ color: "#AAAAAA" }}>{post.title}</span>
      </nav>

      {/* Content Container */}
      <article
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Header Section */}
        <header style={{ marginBottom: "48px" }}>
          <div style={{ marginBottom: "16px" }}>
            <span
              style={{
                display: "inline-block",
                background: "#C9A84C",
                color: "#0A0A0A",
                padding: "6px 14px",
                borderRadius: "4px",
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: "0.5px",
              }}
            >
              {post.category}
            </span>
          </div>

          <h1
            style={{
              fontSize: "48px",
              fontWeight: "700",
              lineHeight: "1.15",
              marginBottom: "24px",
              color: "#FFFFFF",
            }}
          >
            {post.title}
          </h1>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "24px",
              fontSize: "14px",
              color: "#AAAAAA",
              borderTop: "1px solid #2A2A2A",
              borderBottom: "1px solid #2A2A2A",
              padding: "16px 0",
            }}
          >
            <div>
              <span style={{ fontWeight: "600", color: "#FFFFFF" }}>By</span> {post.author}
            </div>
            <div>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</div>
            <div>{post.readTime}</div>
          </div>
        </header>

        {/* Content Section */}
        <section
          style={{
            background: "#141414",
            border: "1px solid #2A2A2A",
            borderRadius: "8px",
            padding: "40px",
            marginBottom: "48px",
            lineHeight: "1.7",
            fontSize: "16px",
          }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              color: "#CCCCCC",
            }}
          />
        </section>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <section style={{ marginBottom: "48px" }}>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "700",
                marginBottom: "28px",
                color: "#C9A84C",
              }}
            >
              Related Articles
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
              }}
            >
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="apex-related-post-hover"
                  style={{
                    background: "#141414",
                    borderRadius: "8px",
                    padding: "24px",
                    textDecoration: "none",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#C9A84C",
                      fontWeight: "600",
                      marginBottom: "8px",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {relatedPost.category}
                  </span>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#FFFFFF",
                      marginBottom: "12px",
                      lineHeight: "1.3",
                    }}
                  >
                    {relatedPost.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#AAAAAA",
                      marginBottom: "16px",
                      flexGrow: 1,
                    }}
                  >
                    {relatedPost.excerpt}
                  </p>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#C9A84C",
                      fontWeight: "600",
                    }}
                  >
                    Read More →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back to Blog Link */}
        <div
          style={{
            paddingTop: "24px",
            borderTop: "1px solid #2A2A2A",
            textAlign: "center",
          }}
        >
          <Link
            href="/blog"
            className="apex-link-hover"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            ← Back to Blog
          </Link>
        </div>
      </article>
    </main>
  );
}
