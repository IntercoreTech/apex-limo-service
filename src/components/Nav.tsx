"use client";
import { useState } from "react";
import Link from "next/link";
import { ApexLogo } from "./ApexLogo";

const PHONE = "877-427-1777";
const PHONE_HREF = "tel:+18774271777";

const LOCATIONS = [
  { label: "Los Angeles, CA", href: "/locations/los-angeles/" },
  { label: "Las Vegas, NV", href: "/locations/las-vegas/" },
  { label: "Miami, FL", href: "/locations/miami/" },
  { label: "Fort Lauderdale, FL", href: "/locations/fort-lauderdale/" },
];

const SERVICES = [
  { label: "Airport Transfers", href: "/services/airport-transfers/" },
  { label: "Corporate Travel", href: "/services/corporate/" },
  { label: "Weddings & Events", href: "/services/weddings-events/" },
  { label: "Group Charter", href: "/services/group-charter/" },
  { label: "VIP City Tours", href: "/services/city-tours/" },
  { label: "Point-to-Point", href: "/services/point-to-point/" },
];

function DropdownMenu({ items }: { items: { label: string; href: string }[] }) {
  return (
    <div style={{
      position: "absolute", top: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)",
      background: "#141414", border: "1px solid #2A2A2A", borderRadius: "6px",
      padding: "8px 0", minWidth: "200px", boxShadow: "0 16px 40px rgba(0,0,0,0.8)",
      zIndex: 100,
    }}>
      {items.map((item) => (
        <Link key={item.href} href={item.href} style={{
          display: "block", padding: "10px 20px", color: "#CCCCCC",
          fontSize: "13px", textDecoration: "none", fontWeight: 500,
          transition: "color 0.15s",
        }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#CCCCCC")}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [locOpen, setLocOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);

  return (
    <header style={{ background: "#0A0A0A", borderBottom: "1px solid #1E1E1E", position: "sticky", top: 0, zIndex: 50 }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          <ApexLogo size={38} />
          <div>
            <div style={{ fontWeight: 900, fontSize: "16px", letterSpacing: "3px", color: "#FFFFFF", lineHeight: 1 }}>APEX</div>
            <div style={{ fontWeight: 300, fontSize: "6.5px", letterSpacing: "2.5px", color: "#C9A84C", lineHeight: 1.4 }}>INTERNATIONAL TRANSPORTATION</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Locations */}
          <div style={{ position: "relative" }}
            onMouseEnter={() => setLocOpen(true)}
            onMouseLeave={() => setLocOpen(false)}>
            <button style={{
              color: "#AAAAAA", fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px",
              background: "none", border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", gap: "5px",
            }}>
              LOCATIONS <span style={{ color: "#C9A84C", fontSize: "8px" }}>▼</span>
            </button>
            {locOpen && <DropdownMenu items={LOCATIONS} />}
          </div>

          {/* Services */}
          <div style={{ position: "relative" }}
            onMouseEnter={() => setSvcOpen(true)}
            onMouseLeave={() => setSvcOpen(false)}>
            <button style={{
              color: "#AAAAAA", fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px",
              background: "none", border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", gap: "5px",
            }}>
              SERVICES <span style={{ color: "#C9A84C", fontSize: "8px" }}>▼</span>
            </button>
            {svcOpen && <DropdownMenu items={SERVICES} />}
          </div>

          <Link href="/about/" style={{ color: "#AAAAAA", fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textDecoration: "none" }}>ABOUT</Link>
          <Link href="/blog/" style={{ color: "#AAAAAA", fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textDecoration: "none" }}>BLOG</Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a href={PHONE_HREF} className="hidden lg:block" style={{ color: "#C9A84C", fontWeight: 700, fontSize: "14px", textDecoration: "none", letterSpacing: "0.5px" }}>
            {PHONE}
          </a>
          <a href={PHONE_HREF} style={{
            background: "linear-gradient(90deg,#A88A30,#C9A84C,#A88A30)",
            color: "#0A0A0A", fontWeight: 800, fontSize: "11px",
            letterSpacing: "1px", padding: "10px 20px", borderRadius: "4px", textDecoration: "none",
          }}>
            BOOK NOW
          </a>
          {/* Mobile hamburger */}
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#C9A84C", fontSize: "22px" }}>
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{ background: "#0D0D0D", borderTop: "1px solid #1E1E1E", padding: "20px 24px" }} className="md:hidden">
          <p style={{ color: "#C9A84C", fontSize: "9px", letterSpacing: "2px", fontWeight: 700, marginBottom: "10px" }}>LOCATIONS</p>
          {LOCATIONS.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
              style={{ display: "block", color: "#CCCCCC", fontSize: "15px", padding: "9px 0", textDecoration: "none", borderBottom: "1px solid #1A1A1A" }}>
              {l.label}
            </Link>
          ))}
          <p style={{ color: "#C9A84C", fontSize: "9px", letterSpacing: "2px", fontWeight: 700, margin: "16px 0 10px" }}>SERVICES</p>
          {SERVICES.map((s) => (
            <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)}
              style={{ display: "block", color: "#CCCCCC", fontSize: "15px", padding: "9px 0", textDecoration: "none", borderBottom: "1px solid #1A1A1A" }}>
              {s.label}
            </Link>
          ))}
          <div style={{ marginTop: "16px", display: "flex", gap: "20px" }}>
            <Link href="/about/" onClick={() => setMobileOpen(false)} style={{ color: "#888", fontSize: "14px", textDecoration: "none" }}>About</Link>
            <Link href="/blog/" onClick={() => setMobileOpen(false)} style={{ color: "#888", fontSize: "14px", textDecoration: "none" }}>Blog</Link>
          </div>
        </div>
      )}
    </header>
  );
}
