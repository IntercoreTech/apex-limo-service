"use client";

const PHONE = "877-427-1777";
const PHONE_HREF = "tel:+18774271777";

const WHY_ITEMS = [
  { icon: "🛡️", title: "Safety First", desc: "Modern fleet, highly trained drivers, and strict maintenance standards." },
  { icon: "🚐", title: "Premium Fleet", desc: "A wide range of vehicles to meet your every transportation need." },
  { icon: "📶", title: "Comfort & Connectivity", desc: "Complimentary Wi-Fi on all vehicles with entertainment systems." },
  { icon: "♿", title: "ADA Accessible", desc: "30% of our fleet is fully ADA equipped with wheelchair lifts and amenities." },
  { icon: "🤝", title: "Work Ethics", desc: "Yes we can — we'll be glad to help you." },
  { icon: "🌐", title: "Multiple Languages", desc: "Our staff can communicate in multiple languages." },
  { icon: "🎉", title: "Meet & Greet & Event Coordinators", desc: "We provide meet & greet services and event coordinators for larger events, capable of speaking multiple languages." },
];

const FLEET = [
  { name: "SUVs — Cadillac Escalade", detail: "8 Units", emoji: "🚙" },
  { name: "Sprinter Vans", detail: "12 Units", emoji: "🚐" },
  { name: "Executive Minibuses", detail: "15 to 40 Passengers", emoji: "🚌" },
  { name: "Motorcoaches", detail: "40 to 56 Passengers", emoji: "🚍" },
];

const AMENITIES = [
  { icon: "📶", label: "FREE Wi-Fi\nOn All Vehicles" },
  { icon: "🎬", label: "Onboard Entertainment\nVideos & More" },
  { icon: "🚻", label: "Restroom\nOn All Motorcoaches" },
  { icon: "👔", label: "Professional Drivers\nUniformed & Experienced" },
  { icon: "📞", label: "24/7 Dispatch\nSupport" },
  { icon: "🌐", label: "Multiple Languages\nSpoken by Our Staff" },
  { icon: "🎉", label: "Meet & Greet Services\n& Event Coordinators" },
  { icon: "🎯", label: "Custom Solutions\nfor Groups & Events" },
  { icon: "✅", label: "Fully Licensed,\nInsured & Compliant" },
];

const DESTINATIONS = [
  { city: "Los Angeles", state: "California", desc: "Headquarters — Covering LA, OC, IE, SD, SB, Ventura & Beyond", emoji: "🌆" },
  { city: "Las Vegas", state: "Nevada", desc: "Las Vegas Division — Serving the Strip, Conventions, Airports & Surrounding Areas", emoji: "🎰" },
  { city: "Miami", state: "Florida", desc: "Miami Division — Airport, Transfers, Events, Cruises & Corporate Travel", emoji: "🌴" },
  { city: "Fort Lauderdale", state: "Florida", desc: "Fort Lauderdale Division — Cruise Terminals, Hotels, and South Florida", emoji: "⚓" },
];

function ApexLogo({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="30,6 54,50 6,50" fill="none" stroke="#C9A84C" strokeWidth="3.5" strokeLinejoin="round" />
      <line x1="15" y1="36" x2="45" y2="36" stroke="#C9A84C" strokeWidth="3.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">

      {/* NAV */}
      <header style={{ background: "#0A0A0A", borderBottom: "1px solid #222", position: "sticky", top: 0, zIndex: 50 }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ApexLogo size={40} />
            <div>
              <div style={{ fontWeight: 900, fontSize: "17px", letterSpacing: "3px", color: "#FFFFFF", lineHeight: 1 }}>APEX</div>
              <div style={{ fontWeight: 300, fontSize: "7px", letterSpacing: "2.5px", color: "#C9A84C", lineHeight: 1.4 }}>INTERNATIONAL TRANSPORTATION</div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              {["About", "Fleet", "Destinations", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} style={{ color: "#AAAAAA", fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textDecoration: "none" }}>
                  {item.toUpperCase()}
                </a>
              ))}
            </nav>
            <a href={PHONE_HREF} style={{ background: "linear-gradient(90deg,#A88A30,#C9A84C,#A88A30)", color: "#0A0A0A", fontWeight: 700, fontSize: "12px", letterSpacing: "1px", padding: "10px 20px", borderRadius: "4px", textDecoration: "none" }}>
              CALL NOW
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section style={{ background: "linear-gradient(160deg,#0A0A0A 0%,#141414 100%)", minHeight: "560px", position: "relative" }} className="flex items-center">
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg,transparent,#C9A84C,transparent)" }} />
        <div className="max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <p style={{ color: "#C9A84C", fontWeight: 700, fontSize: "12px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "16px" }}>
                Premium Transportation
              </p>
              <h1 style={{ fontWeight: 900, fontSize: "clamp(42px,6vw,72px)", lineHeight: 1.05, color: "#FFFFFF", textTransform: "uppercase", marginBottom: "0" }}>
                BUILT ON
              </h1>
              <h1 style={{ fontWeight: 900, fontSize: "clamp(42px,6vw,72px)", lineHeight: 1.05, color: "#C9A84C", textTransform: "uppercase", marginBottom: "20px" }}>
                TRUST.
              </h1>
              <div style={{ width: "60px", height: "3px", background: "#C9A84C", marginBottom: "24px" }} />
              <p style={{ color: "#AAAAAA", fontSize: "16px", lineHeight: 1.9, marginBottom: "40px" }}>
                Safe. Reliable. Professional.<br />Every Mile. Every Time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={PHONE_HREF} style={{ background: "linear-gradient(90deg,#A88A30,#C9A84C,#A88A30)", color: "#0A0A0A", fontWeight: 800, fontSize: "15px", letterSpacing: "1px", padding: "16px 32px", borderRadius: "4px", textDecoration: "none", textAlign: "center" }}>
                  📞 {PHONE}
                </a>
                <a href="#about" style={{ border: "1px solid #C9A84C", color: "#C9A84C", fontWeight: 600, fontSize: "13px", letterSpacing: "1.5px", padding: "16px 32px", borderRadius: "4px", textDecoration: "none", textAlign: "center" }}>
                  LEARN MORE
                </a>
              </div>
            </div>
            <div className="flex-1 hidden md:flex justify-center">
              <div style={{ background: "#141414", border: "1px solid #2A2A2A", borderRadius: "8px", padding: "48px", textAlign: "center", width: "100%", maxWidth: "420px" }}>
                <div style={{ fontSize: "80px", marginBottom: "20px" }}>🚐</div>
                <p style={{ color: "#C9A84C", fontWeight: 700, fontSize: "13px", letterSpacing: "2px" }}>PREMIUM FLEET</p>
                <p style={{ color: "#555", fontSize: "13px", marginTop: "8px" }}>SUVs · Sprinter Vans · Minibuses · Motorcoaches</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg,transparent,#C9A84C44,transparent)" }} />
      </section>

      {/* ABOUT */}
      <section id="about" style={{ background: "#F5F5F5" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="flex-1">
              <p style={{ color: "#C9A84C", fontWeight: 700, fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>Who We Are</p>
              <h2 style={{ fontWeight: 800, fontSize: "clamp(24px,3vw,36px)", color: "#0A0A0A", lineHeight: 1.2, marginBottom: "16px" }}>
                About Apex International Transportation
              </h2>
              <div style={{ width: "60px", height: "3px", background: "#C9A84C", marginBottom: "24px" }} />
              {[
                "Founded in 1994 with just two sedans, Apex International Transportation has grown into one of Southern California's most trusted and respected ground transportation providers.",
                "We are a family-owned and operated company with East European heritage and a strong understanding of German work culture — talk less, do more.",
                "From corporate travel to large group transportation, our commitment is simple: deliver exceptional service, modern vehicles, and a seamless experience every single time.",
                "We take pride in our professionalism, attention to detail, and the long-term relationships we build with every client.",
              ].map((p, i) => (
                <p key={i} style={{ color: "#444", lineHeight: 1.9, marginBottom: "16px", fontSize: "15px" }}>{p}</p>
              ))}
            </div>
            <div id="why" className="flex-1">
              <p style={{ color: "#C9A84C", fontWeight: 700, fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>Our Commitment</p>
              <h2 style={{ fontWeight: 800, fontSize: "clamp(24px,3vw,36px)", color: "#0A0A0A", lineHeight: 1.2, marginBottom: "16px" }}>
                Why Partner with Apex?
              </h2>
              <div style={{ width: "60px", height: "3px", background: "#C9A84C", marginBottom: "24px" }} />
              <div className="flex flex-col gap-5">
                {WHY_ITEMS.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <span style={{ fontSize: "20px", flexShrink: 0, marginTop: "2px" }}>{item.icon}</span>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: "14px", color: "#0A0A0A", marginBottom: "3px" }}>{item.title}</p>
                      <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" style={{ background: "#0A0A0A" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p style={{ color: "#C9A84C", fontWeight: 700, fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>Our Vehicles</p>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(28px,3vw,40px)", color: "#FFFFFF", lineHeight: 1.2, marginBottom: "16px" }}>Our Fleet</h2>
            <div style={{ width: "60px", height: "3px", background: "#C9A84C", margin: "0 auto" }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FLEET.map((v) => (
              <div key={v.name} style={{ background: "#141414", border: "1px solid #2A2A2A", borderRadius: "8px", padding: "32px 24px", textAlign: "center" }}>
                <div style={{ fontSize: "52px", marginBottom: "16px" }}>{v.emoji}</div>
                <h3 style={{ fontWeight: 700, fontSize: "15px", color: "#FFFFFF", marginBottom: "8px", lineHeight: 1.3 }}>{v.name}</h3>
                <p style={{ color: "#C9A84C", fontWeight: 600, fontSize: "13px" }}>{v.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section style={{ background: "#141414", borderTop: "1px solid #2A2A2A", borderBottom: "1px solid #2A2A2A" }} className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4 text-center">
            {AMENITIES.map((a) => (
              <div key={a.label} className="flex flex-col items-center gap-2">
                <span style={{ fontSize: "24px" }}>{a.icon}</span>
                <p style={{ fontSize: "10px", color: "#AAAAAA", lineHeight: 1.5, whiteSpace: "pre-line", fontWeight: 500 }}>{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section id="destinations" style={{ background: "#0A0A0A" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p style={{ color: "#C9A84C", fontWeight: 700, fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>Where We Operate</p>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(28px,3vw,40px)", color: "#FFFFFF", lineHeight: 1.2, marginBottom: "16px" }}>Serving Major Destinations</h2>
            <div style={{ width: "60px", height: "3px", background: "#C9A84C", margin: "0 auto" }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESTINATIONS.map((d) => (
              <div key={d.city} style={{ background: "#141414", border: "1px solid #2A2A2A", borderRadius: "8px", padding: "32px 24px" }}>
                <div style={{ fontSize: "36px", marginBottom: "12px" }}>{d.emoji}</div>
                <div style={{ display: "inline-block", background: "#C9A84C22", border: "1px solid #C9A84C44", borderRadius: "4px", padding: "3px 10px", marginBottom: "12px" }}>
                  <span style={{ color: "#C9A84C", fontWeight: 600, fontSize: "10px", letterSpacing: "2px" }}>📍 {d.state.toUpperCase()}</span>
                </div>
                <h3 style={{ fontWeight: 800, fontSize: "20px", color: "#FFFFFF", marginBottom: "10px" }}>{d.city}</h3>
                <p style={{ color: "#888", fontSize: "13px", lineHeight: 1.7 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" style={{ background: "#141414", borderTop: "3px solid #C9A84C" }} className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p style={{ color: "#C9A84C", fontWeight: 700, fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>Ready to Book?</p>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(28px,4vw,48px)", color: "#FFFFFF", lineHeight: 1.2, marginBottom: "16px" }}>Get in Touch Today</h2>
          <div style={{ width: "60px", height: "3px", background: "#C9A84C", margin: "0 auto 24px" }} />
          <p style={{ color: "#AAAAAA", fontSize: "16px", lineHeight: 1.8, marginBottom: "40px" }}>
            Available 24/7 for bookings, quotes, and event coordination.<br />
            Built on Experience. Driven by Service.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href={PHONE_HREF} style={{ background: "linear-gradient(90deg,#A88A30,#C9A84C,#A88A30)", color: "#0A0A0A", fontWeight: 800, fontSize: "18px", letterSpacing: "1px", padding: "18px 40px", borderRadius: "4px", textDecoration: "none", display: "inline-block" }}>
              📞 {PHONE}
            </a>
            <a href="https://apexlimousineservice.com" style={{ border: "1px solid #C9A84C", color: "#C9A84C", fontWeight: 600, fontSize: "14px", letterSpacing: "1px", padding: "18px 40px", borderRadius: "4px", textDecoration: "none", display: "inline-block" }}>
              🌐 apexlimousineservice.com
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0A0A0A", borderTop: "1px solid #1E1E1E" }} className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <ApexLogo size={32} />
              <div>
                <div style={{ fontWeight: 900, fontSize: "13px", letterSpacing: "3px", color: "#FFFFFF" }}>APEX</div>
                <div style={{ fontWeight: 300, fontSize: "6px", letterSpacing: "2px", color: "#C9A84C" }}>INTERNATIONAL TRANSPORTATION</div>
              </div>
            </div>
            <div className="text-center">
              <p style={{ color: "#555", fontSize: "12px" }}>© {new Date().getFullYear()} Apex International Transportation. All rights reserved.</p>
              <p style={{ color: "#333", fontSize: "11px", marginTop: "4px" }}>Fully Licensed, Insured & Compliant</p>
            </div>
            <div className="text-right">
              <a href={PHONE_HREF} style={{ color: "#C9A84C", fontWeight: 700, fontSize: "16px", textDecoration: "none" }}>{PHONE}</a>
              <p style={{ color: "#555", fontSize: "11px", marginTop: "4px" }}>24/7 Dispatch Support</p>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
