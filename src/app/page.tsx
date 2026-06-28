import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Apex International Transportation | Premium Limo & Charter Service Los Angeles",
  description:
    "Premium chauffeured transportation since 1994. SUVs, Sprinter Vans, Minibuses & Motorcoaches in LA, Las Vegas, Miami & Fort Lauderdale. Available 24/7 — Call 877-427-1777.",
};

const PHONE = "877-427-1777";
const PHONE_HREF = "tel:+18774271777";

const SERVICES = [
  {
    icon: "✈️",
    title: "Airport Transfers",
    desc: "LAX, LAS, MIA, FLL — flight tracking, meet & greet, on-time guarantee.",
    href: "/services/airport-transfers/",
  },
  {
    icon: "💼",
    title: "Corporate Travel",
    desc: "Executive sedans, roadshows, team transportation for business professionals.",
    href: "/services/corporate/",
  },
  {
    icon: "💍",
    title: "Weddings & Events",
    desc: "Luxury fleet for your special day — bridal parties, proms, galas.",
    href: "/services/weddings-events/",
  },
  {
    icon: "🚌",
    title: "Group Charter",
    desc: "Minibuses & motorcoaches for 15–56 passengers. Conventions, retreats, tours.",
    href: "/services/group-charter/",
  },
  {
    icon: "🌆",
    title: "VIP City Tours",
    desc: "Curated city experiences — LA studios, Vegas Strip, Miami South Beach.",
    href: "/services/city-tours/",
  },
  {
    icon: "🗺️",
    title: "Point-to-Point",
    desc: "Reliable transfers between any two locations, across town or across state lines.",
    href: "/services/point-to-point/",
  },
];

const FLEET = [
  {
    name: "Cadillac Escalade SUV",
    capacity: "Up to 6 Passengers",
    features: "Leather, Privacy, Wi-Fi",
    img: "https://apexlimola.com/wp-content/uploads/2023/02/cadillac_escalade_600_sport_2021_4k_8k-5120x2880-1.png",
  },
  {
    name: "Mercedes Sprinter Van",
    capacity: "Up to 14 Passengers",
    features: "Executive Seating, Wi-Fi, Climate",
    img: "https://apexlimola.com/wp-content/uploads/2023/03/minicoacch2.png",
  },
  {
    name: "Executive Minibus",
    capacity: "15–40 Passengers",
    features: "Restroom, Entertainment, Wi-Fi",
    img: "https://apexlimola.com/wp-content/uploads/2023/02/A1054_high_res.png",
  },
  {
    name: "Motorcoach",
    capacity: "40–56 Passengers",
    features: "Full Amenities, Restroom, PA System",
    img: "https://apexlimola.com/wp-content/uploads/2023/02/20220510190010_YKDp_s.png",
  },
];

const LOCATIONS_LIST = [
  {
    city: "Los Angeles",
    state: "CA",
    desc: "Headquarters — LAX, Burbank, Long Beach • LA Metro, OC, IE, SD & Beyond",
    href: "/locations/los-angeles/",
    emoji: "🌆",
  },
  {
    city: "Las Vegas",
    state: "NV",
    desc: "Las Vegas Division — Harry Reid Airport, Strip Hotels, Convention Center",
    href: "/locations/las-vegas/",
    emoji: "🎰",
  },
  {
    city: "Miami",
    state: "FL",
    desc: "Miami Division — MIA Airport, Cruise Port, South Beach, Brickell, Coral Gables",
    href: "/locations/miami/",
    emoji: "🌴",
  },
  {
    city: "Fort Lauderdale",
    state: "FL",
    desc: "South Florida — FLL Airport, Port Everglades Cruise Terminals, Las Olas",
    href: "/locations/fort-lauderdale/",
    emoji: "⚓",
  },
];

const STATS = [
  { value: "30+", label: "Years in Business" },
  { value: "30+", label: "Modern Vehicles" },
  { value: "4", label: "Markets Served" },
  { value: "24/7", label: "Availability" },
];

const WHY = [
  { icon: "🛡️", title: "Safety First", desc: "Fully insured, licensed & DOT-compliant fleet with 100% background-checked drivers." },
  { icon: "🚐", title: "Modern Fleet", desc: "30+ late-model vehicles including Teslas, ADA-accessible buses, and luxury coaches." },
  { icon: "📶", title: "Always Connected", desc: "Complimentary Wi-Fi, USB charging, and entertainment systems on all vehicles." },
  { icon: "♿", title: "ADA Accessible", desc: "30% of our fleet features wheelchair lifts — accessible transportation for all." },
  { icon: "🌐", title: "Multilingual Staff", desc: "Our team speaks English, Spanish, Russian, and other languages." },
  { icon: "🎯", title: "PCI-DSS Secure", desc: "Secure cloud-based booking & payment systems since 2014 — your data is protected." },
];

const FAQS = [
  {
    q: "What areas does Apex International Transportation serve?",
    a: "We serve Los Angeles (LAX, Burbank, SNA, ONT), Las Vegas (LAS), Miami (MIA), and Fort Lauderdale (FLL), including Orange County, Inland Empire, South Florida, and surrounding regions.",
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend booking 24–48 hours in advance for standard transfers. For large groups, events, and charters we recommend 1–2 weeks notice. We do accommodate last-minute requests subject to availability.",
  },
  {
    q: "Do you offer airport meet-and-greet service?",
    a: "Yes. Our chauffeurs monitor flight status in real time and meet you at the baggage claim with a name sign. No waiting — we adjust for delays automatically.",
  },
  {
    q: "What is your vehicle capacity range?",
    a: "From executive SUVs (up to 6 passengers) to Sprinter vans (14), executive minibuses (40), and full-size motorcoaches (56 passengers).",
  },
];

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://apexlimousineservice.com/#webpage",
      "url": "https://apexlimousineservice.com/",
      "name": "Apex International Transportation | Premium Limo & Charter Service",
      "isPartOf": { "@id": "https://apexlimousineservice.com/#website" },
      "about": { "@id": "https://apexlimousineservice.com/#organization" },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", ".speakable"],
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQS.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": { "@type": "Answer", "text": faq.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }} />

      {/* HERO */}
      <section style={{ background: "linear-gradient(160deg,#080808 0%,#141414 60%,#0A0A0A 100%)", position: "relative", overflow: "hidden" }} className="py-32">
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg,transparent,#C9A84C,transparent)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 50%, #C9A84C0D 0%, transparent 65%)" }} />
        {/* Decorative car — right side, no layout impact */}
        <div className="hidden lg:block" style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", width: "42%", opacity: 0.18, pointerEvents: "none" }}>
          <img
            src="https://apexlimola.com/wp-content/uploads/2023/02/Mercedes_s-class_w223_black_1.png"
            alt=""
            aria-hidden="true"
            style={{ width: "100%", display: "block" }}
          />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative text-center">
          <p style={{ color: "#C9A84C", fontWeight: 700, fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "20px" }} className="speakable">
            Premium Chauffeured Transportation Since 1994
          </p>
          <h1 style={{ fontWeight: 900, fontSize: "clamp(48px,7vw,88px)", lineHeight: 1.0, color: "#FFFFFF", textTransform: "uppercase", marginBottom: "0" }}>
            BUILT ON
          </h1>
          <h1 style={{ fontWeight: 900, fontSize: "clamp(48px,7vw,88px)", lineHeight: 1.0, color: "#C9A84C", textTransform: "uppercase", marginBottom: "28px" }}>
            TRUST.
          </h1>
          <div style={{ width: "60px", height: "3px", background: "#C9A84C", margin: "0 auto 28px" }} />
          <p style={{ color: "#AAAAAA", fontSize: "18px", lineHeight: 1.9, marginBottom: "44px", maxWidth: "580px", marginLeft: "auto", marginRight: "auto" }} className="speakable">
            Safe. Reliable. Professional. Every mile, every time — from LAX to the Las Vegas Strip, from Miami Beach to the Everglades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} style={{ background: "linear-gradient(90deg,#A88A30,#C9A84C,#A88A30)", color: "#0A0A0A", fontWeight: 800, fontSize: "15px", letterSpacing: "0.5px", padding: "18px 38px", borderRadius: "4px", textDecoration: "none" }}>
              📞 CALL {PHONE}
            </a>
            <Link href="/services/" style={{ border: "1px solid #C9A84C", color: "#C9A84C", fontWeight: 600, fontSize: "13px", letterSpacing: "1.5px", padding: "18px 38px", borderRadius: "4px", textDecoration: "none" }}>
              VIEW SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div style={{ background: "#141414", borderBottom: "1px solid #1E1E1E", borderTop: "1px solid #1E1E1E" }}>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <div style={{ fontWeight: 900, fontSize: "clamp(28px,3vw,42px)", color: "#C9A84C", lineHeight: 1 }}>{s.value}</div>
                <div style={{ color: "#666", fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", marginTop: "6px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section style={{ background: "#0A0A0A" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p style={{ color: "#C9A84C", fontWeight: 700, fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>What We Do</p>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(28px,3vw,42px)", color: "#FFFFFF", lineHeight: 1.2, marginBottom: "16px" }}>Transportation Services</h2>
            <div style={{ width: "60px", height: "3px", background: "#C9A84C", margin: "0 auto" }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc) => (
              <Link key={svc.href} href={svc.href} style={{ textDecoration: "none" }}>
                <div className="apex-card-hover" style={{ background: "#141414", borderRadius: "8px", padding: "32px 28px", height: "100%" }}>
                  <div style={{ fontSize: "36px", marginBottom: "16px" }}>{svc.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "16px", color: "#FFFFFF", marginBottom: "10px" }}>{svc.title}</h3>
                  <p style={{ color: "#888", fontSize: "13px", lineHeight: 1.7, marginBottom: "16px" }}>{svc.desc}</p>
                  <span style={{ color: "#C9A84C", fontSize: "12px", fontWeight: 700, letterSpacing: "1px" }}>LEARN MORE →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section style={{ background: "#111111", borderTop: "1px solid #1E1E1E" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p style={{ color: "#C9A84C", fontWeight: 700, fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>Our Vehicles</p>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(28px,3vw,42px)", color: "#FFFFFF", lineHeight: 1.2, marginBottom: "16px" }}>The Apex Fleet</h2>
            <div style={{ width: "60px", height: "3px", background: "#C9A84C", margin: "0 auto" }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FLEET.map((v) => (
              <div key={v.name} style={{ background: "#0A0A0A", border: "1px solid #2A2A2A", borderRadius: "8px", overflow: "hidden" }}>
                <div style={{ height: "180px", overflow: "hidden", background: "#1A1A1A" }}>
                  <img src={v.img} alt={v.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                </div>
                <div style={{ padding: "20px" }}>
                  <h3 style={{ fontWeight: 700, fontSize: "15px", color: "#FFFFFF", marginBottom: "6px" }}>{v.name}</h3>
                  <p style={{ color: "#C9A84C", fontWeight: 600, fontSize: "12px", marginBottom: "6px" }}>{v.capacity}</p>
                  <p style={{ color: "#555", fontSize: "12px" }}>{v.features}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section style={{ background: "#0A0A0A" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p style={{ color: "#C9A84C", fontWeight: 700, fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>Where We Operate</p>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(28px,3vw,42px)", color: "#FFFFFF", lineHeight: 1.2, marginBottom: "16px" }}>Our Markets</h2>
            <div style={{ width: "60px", height: "3px", background: "#C9A84C", margin: "0 auto" }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LOCATIONS_LIST.map((loc) => (
              <Link key={loc.href} href={loc.href} style={{ textDecoration: "none" }}>
                <div className="apex-card-hover" style={{ background: "#141414", borderRadius: "8px", padding: "28px 24px", height: "100%" }}>
                  <div style={{ fontSize: "32px", marginBottom: "10px" }}>{loc.emoji}</div>
                  <div style={{ display: "inline-block", background: "#C9A84C18", border: "1px solid #C9A84C33", borderRadius: "3px", padding: "2px 8px", marginBottom: "10px" }}>
                    <span style={{ color: "#C9A84C", fontWeight: 600, fontSize: "9px", letterSpacing: "2px" }}>{loc.state}</span>
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: "20px", color: "#FFFFFF", marginBottom: "8px" }}>{loc.city}</h3>
                  <p style={{ color: "#777", fontSize: "12px", lineHeight: 1.7 }}>{loc.desc}</p>
                  <p style={{ color: "#C9A84C", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", marginTop: "14px" }}>EXPLORE →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY APEX */}
      <section style={{ background: "#F5F5F5" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="flex-1">
              <p style={{ color: "#C9A84C", fontWeight: 700, fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>Our Commitment</p>
              <h2 style={{ fontWeight: 800, fontSize: "clamp(24px,3vw,38px)", color: "#0A0A0A", lineHeight: 1.2, marginBottom: "16px" }}>
                Why Choose Apex International?
              </h2>
              <div style={{ width: "60px", height: "3px", background: "#C9A84C", marginBottom: "28px" }} />
              <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.9, marginBottom: "16px" }}>
                Founded in 1994, Apex International Transportation was built on a simple principle — deliver the best possible service, on time, every time. Three decades later, that commitment drives everything we do.
              </p>
              <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.9, marginBottom: "24px" }}>
                Our multilingual, multi-national team brings together decades of transportation experience with a genuine passion for hospitality. Many of our original 1994 clients are still with us today.
              </p>
              <Link href="/about/" style={{ display: "inline-block", border: "2px solid #C9A84C", color: "#C9A84C", background: "transparent", fontWeight: 700, fontSize: "12px", letterSpacing: "2px", padding: "13px 28px", borderRadius: "4px", textDecoration: "none" }}>
                OUR STORY →
              </Link>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-1 gap-5">
                {WHY.map((item) => (
                  <div key={item.title} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                    <span style={{ fontSize: "22px", flexShrink: 0, marginTop: "2px" }}>{item.icon}</span>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: "14px", color: "#0A0A0A", marginBottom: "3px" }}>{item.title}</p>
                      <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.7 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#0D0D0D", borderTop: "1px solid #1E1E1E" }} className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p style={{ color: "#C9A84C", fontWeight: 700, fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>Common Questions</p>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(24px,3vw,36px)", color: "#FFFFFF", lineHeight: 1.2 }}>Frequently Asked Questions</h2>
            <div style={{ width: "60px", height: "3px", background: "#C9A84C", margin: "16px auto 0" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {FAQS.map((faq) => (
              <div key={faq.q} style={{ background: "#141414", border: "1px solid #2A2A2A", borderRadius: "8px", padding: "24px 28px" }}>
                <h3 style={{ fontWeight: 700, fontSize: "15px", color: "#FFFFFF", marginBottom: "10px" }}>{faq.q}</h3>
                <p style={{ color: "#888", fontSize: "14px", lineHeight: 1.8 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#141414", borderTop: "3px solid #C9A84C" }} className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p style={{ color: "#C9A84C", fontWeight: 700, fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>Ready to Book?</p>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(28px,4vw,48px)", color: "#FFFFFF", lineHeight: 1.2, marginBottom: "16px" }}>
            Available 24/7 — Let&apos;s Ride
          </h2>
          <div style={{ width: "60px", height: "3px", background: "#C9A84C", margin: "0 auto 24px" }} />
          <p style={{ color: "#AAAAAA", fontSize: "16px", lineHeight: 1.8, marginBottom: "40px" }}>
            Call us anytime for bookings, quotes, and event coordination.<br />
            Serving Los Angeles, Las Vegas, Miami &amp; Fort Lauderdale.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a href={PHONE_HREF} style={{ background: "linear-gradient(90deg,#A88A30,#C9A84C,#A88A30)", color: "#0A0A0A", fontWeight: 800, fontSize: "18px", letterSpacing: "0.5px", padding: "18px 44px", borderRadius: "4px", textDecoration: "none" }}>
              📞 {PHONE}
            </a>
            <Link href="/services/" style={{ border: "1px solid #C9A84C", color: "#C9A84C", fontWeight: 600, fontSize: "14px", letterSpacing: "1px", padding: "18px 44px", borderRadius: "4px", textDecoration: "none" }}>
              EXPLORE SERVICES
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
