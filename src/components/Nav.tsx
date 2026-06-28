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
    <div
      style={{
        position: "absolute",
        top: "calc(100% + 12px)",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#0C0C0C",
        border: "1px solid #242424",
        borderRadius: "6px",
        padding: "6px 0",
        minWidth: "215px",
        boxShadow: "0 24px 60px rgba(0,0,0,0.95), 0 0 0 1px rgba(201,168,76,0.08)",
        zIndex: 100,
      }}
    >
      <div
        style={{
          height: "2px",
          background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
          marginBottom: "4px",
        }}
      />
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          style={{
            display: "block",
            padding: "11px 20px",
            color: "#BBBBBB",
            fontSize: "12px",
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: "0.3px",
            transition: "color 0.15s, padding-left 0.15s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "#C9A84C";
            (e.currentTarget as HTMLAnchorElement).style.paddingLeft = "26px";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "#BBBBBB";
            (e.currentTarget as HTMLAnchorElement).style.paddingLeft = "20px";
          }}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

const NAV_BTN: React.CSSProperties = {
  color: "#AAAAAA",
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "1.8px",
  background: "none",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "5px",
  padding: "4px 0",
  transition: "color 0.15s",
};

const NAV_LINK: React.CSSProperties = {
  color: "#AAAAAA",
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "1.8px",
  textDecoration: "none",
  transition: "color 0.15s",
};

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [locOpen, setLocOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const [mobileLocOpen, setMobileLocOpen] = useState(false);
  const [mobileSvcOpen, setMobileSvcOpen] = useState(false);

  return (
    <header style={{ background: "#080808", position: "sticky", top: 0, zIndex: 50 }}>
      {/* ── Main bar ── */}
      <div style={{ borderBottom: "1px solid #1E1E1E" }}>
        <div
          className="max-w-7xl mx-auto px-5 flex items-center justify-between"
          style={{ height: "84px" }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", gap: "16px", textDecoration: "none", flexShrink: 0 }}
          >
            <ApexLogo size={62} />
            <div>
              <div
                style={{
                  fontWeight: 900,
                  fontSize: "26px",
                  letterSpacing: "6px",
                  color: "#FFFFFF",
                  lineHeight: 1,
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                }}
              >
                APEX
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "7px", marginTop: "5px" }}>
                <div style={{ height: "1px", width: "18px", background: "#C9A84C", flexShrink: 0 }} />
                <span
                  style={{
                    fontSize: "7.5px",
                    letterSpacing: "3px",
                    color: "#C9A84C",
                    whiteSpace: "nowrap",
                    fontWeight: 500,
                  }}
                >
                  INTERNATIONAL TRANSPORTATION
                </span>
                <div style={{ height: "1px", width: "18px", background: "#C9A84C", flexShrink: 0 }} />
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setLocOpen(true)}
              onMouseLeave={() => setLocOpen(false)}
            >
              <button
                style={NAV_BTN}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C9A84C")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#AAAAAA")}
              >
                LOCATIONS <span style={{ color: "#C9A84C", fontSize: "7px" }}>▼</span>
              </button>
              {locOpen && <DropdownMenu items={LOCATIONS} />}
            </div>

            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setSvcOpen(true)}
              onMouseLeave={() => setSvcOpen(false)}
            >
              <button
                style={NAV_BTN}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C9A84C")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#AAAAAA")}
              >
                SERVICES <span style={{ color: "#C9A84C", fontSize: "7px" }}>▼</span>
              </button>
              {svcOpen && <DropdownMenu items={SERVICES} />}
            </div>

            <Link
              href="/about/"
              style={NAV_LINK}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#C9A84C")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#AAAAAA")}
            >
              ABOUT
            </Link>
            <Link
              href="/blog/"
              style={NAV_LINK}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#C9A84C")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#AAAAAA")}
            >
              BLOG
            </Link>
          </nav>

          {/* Right CTAs */}
          <div className="flex items-center gap-4">
            {/* Phone — large screens */}
            <a
              href={PHONE_HREF}
              className="hidden lg:block"
              style={{ color: "#C9A84C", fontWeight: 700, fontSize: "14px", textDecoration: "none", letterSpacing: "0.5px" }}
            >
              {PHONE}
            </a>
            {/* Phone pill — medium screens only */}
            <a
              href={PHONE_HREF}
              className="hidden md:flex lg:hidden items-center gap-2"
              style={{
                border: "1px solid #333",
                color: "#C9A84C",
                fontWeight: 700,
                fontSize: "10px",
                letterSpacing: "1px",
                padding: "8px 14px",
                borderRadius: "3px",
                textDecoration: "none",
              }}
            >
              CALL US
            </a>
            {/* Book Now */}
            <a
              href={PHONE_HREF}
              style={{
                background: "linear-gradient(135deg, #8B6914, #C9A84C 50%, #8B6914)",
                color: "#050505",
                fontWeight: 900,
                fontSize: "10px",
                letterSpacing: "1.5px",
                padding: "11px 22px",
                borderRadius: "3px",
                textDecoration: "none",
                whiteSpace: "nowrap",
                boxShadow: "0 2px 14px rgba(201,168,76,0.25)",
              }}
            >
              BOOK NOW
            </a>
            {/* Hamburger */}
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              style={{
                background: "none",
                border: "1px solid #252525",
                cursor: "pointer",
                color: "#C9A84C",
                width: "42px",
                height: "42px",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                flexShrink: 0,
              }}
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* ── Tagline bar (desktop) ── */}
      <div
        className="hidden md:block"
        style={{
          borderBottom: "1px solid #161606",
          textAlign: "center",
          padding: "7px 0",
          background: "linear-gradient(90deg, #080808 0%, #0D0C04 50%, #080808 100%)",
        }}
      >
        <span style={{ color: "#C9A84C", fontSize: "8px", letterSpacing: "4px", fontWeight: 600, opacity: 0.8 }}>
          PREMIUM CHAUFFEURED TRANSPORTATION SINCE 1994
        </span>
      </div>

      {/* ── Mobile Drawer ── */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            background: "#070707",
            borderTop: "1px solid #1E1E1E",
            maxHeight: "calc(100svh - 72px)",
            overflowY: "auto",
          }}
        >
          {/* Phone CTA */}
          <div
            style={{
              padding: "18px 20px",
              borderBottom: "1px solid #161616",
              background: "#0A0A0A",
              textAlign: "center",
            }}
          >
            <a
              href={PHONE_HREF}
              style={{ color: "#C9A84C", fontSize: "22px", fontWeight: 700, textDecoration: "none", letterSpacing: "0.5px" }}
            >
              {PHONE}
            </a>
            <p style={{ color: "#555", fontSize: "9px", letterSpacing: "2.5px", margin: "4px 0 0" }}>AVAILABLE 24 / 7</p>
          </div>

          {/* Locations accordion */}
          <div style={{ borderBottom: "1px solid #161616" }}>
            <button
              onClick={() => setMobileLocOpen(!mobileLocOpen)}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "18px 20px",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#FFFFFF",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "2px",
              }}
            >
              LOCATIONS
              <span
                style={{
                  color: "#C9A84C",
                  fontSize: "9px",
                  display: "inline-block",
                  transform: mobileLocOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s",
                }}
              >
                ▼
              </span>
            </button>
            {mobileLocOpen && (
              <div style={{ background: "#040404", paddingBottom: "6px" }}>
                {LOCATIONS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: "block",
                      color: "#999999",
                      fontSize: "14px",
                      padding: "12px 20px 12px 36px",
                      textDecoration: "none",
                      borderTop: "1px solid #111",
                    }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services accordion */}
          <div style={{ borderBottom: "1px solid #161616" }}>
            <button
              onClick={() => setMobileSvcOpen(!mobileSvcOpen)}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "18px 20px",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#FFFFFF",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "2px",
              }}
            >
              SERVICES
              <span
                style={{
                  color: "#C9A84C",
                  fontSize: "9px",
                  display: "inline-block",
                  transform: mobileSvcOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s",
                }}
              >
                ▼
              </span>
            </button>
            {mobileSvcOpen && (
              <div style={{ background: "#040404", paddingBottom: "6px" }}>
                {SERVICES.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: "block",
                      color: "#999999",
                      fontSize: "14px",
                      padding: "12px 20px 12px 36px",
                      textDecoration: "none",
                      borderTop: "1px solid #111",
                    }}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Static links */}
          <Link
            href="/about/"
            onClick={() => setMobileOpen(false)}
            style={{
              display: "block",
              color: "#FFFFFF",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "2px",
              padding: "18px 20px",
              borderBottom: "1px solid #161616",
              textDecoration: "none",
            }}
          >
            ABOUT
          </Link>
          <Link
            href="/blog/"
            onClick={() => setMobileOpen(false)}
            style={{
              display: "block",
              color: "#FFFFFF",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "2px",
              padding: "18px 20px",
              borderBottom: "1px solid #161616",
              textDecoration: "none",
            }}
          >
            BLOG
          </Link>

          {/* Book Now CTA */}
          <div style={{ padding: "20px" }}>
            <a
              href={PHONE_HREF}
              style={{
                display: "block",
                textAlign: "center",
                background: "linear-gradient(135deg, #8B6914, #C9A84C 50%, #8B6914)",
                color: "#050505",
                fontWeight: 900,
                fontSize: "13px",
                letterSpacing: "2px",
                padding: "16px",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              BOOK NOW
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
