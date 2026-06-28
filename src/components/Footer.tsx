"use client";
import Link from "next/link";
import { ApexLogo } from "./ApexLogo";

const PHONE = "877-427-1777";
const PHONE_HREF = "tel:+18774271777";

export function Footer() {
  return (
    <footer style={{ background: "#0A0A0A", borderTop: "1px solid #1A1A1A" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
              <ApexLogo size={36} />
              <div>
                <div style={{ fontWeight: 900, fontSize: "14px", letterSpacing: "3px", color: "#FFFFFF" }}>APEX</div>
                <div style={{ fontWeight: 300, fontSize: "6px", letterSpacing: "2px", color: "#C9A84C" }}>INTERNATIONAL TRANSPORTATION</div>
              </div>
            </div>
            <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.8, marginBottom: "16px" }}>
              Premium ground transportation since 1994. Serving Southern California, Las Vegas, Miami &amp; Fort Lauderdale.
            </p>
            <div style={{ width: "40px", height: "2px", background: "#C9A84C" }} />
          </div>

          {/* Locations */}
          <div>
            <h3 style={{ color: "#C9A84C", fontWeight: 700, fontSize: "10px", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "16px" }}>Locations</h3>
            {[
              { label: "Los Angeles, CA", href: "/locations/los-angeles/" },
              { label: "Las Vegas, NV", href: "/locations/las-vegas/" },
              { label: "Miami, FL", href: "/locations/miami/" },
              { label: "Fort Lauderdale, FL", href: "/locations/fort-lauderdale/" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ display: "block", color: "#666", fontSize: "13px", marginBottom: "9px", textDecoration: "none" }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = "#C9A84C")}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = "#666")}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h3 style={{ color: "#C9A84C", fontWeight: 700, fontSize: "10px", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "16px" }}>Services</h3>
            {[
              { label: "Airport Transfers", href: "/services/airport-transfers/" },
              { label: "Corporate Travel", href: "/services/corporate/" },
              { label: "Weddings & Events", href: "/services/weddings-events/" },
              { label: "Group Charter", href: "/services/group-charter/" },
              { label: "VIP City Tours", href: "/services/city-tours/" },
              { label: "Point-to-Point", href: "/services/point-to-point/" },
            ].map((s) => (
              <Link key={s.href} href={s.href} style={{ display: "block", color: "#666", fontSize: "13px", marginBottom: "9px", textDecoration: "none" }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = "#C9A84C")}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = "#666")}
              >
                {s.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ color: "#C9A84C", fontWeight: 700, fontSize: "10px", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "16px" }}>Contact</h3>
            <p style={{ color: "#888", fontSize: "12px", lineHeight: 1.4, marginBottom: "4px", fontWeight: 600, letterSpacing: "0.5px" }}>TOLL-FREE</p>
            <a href={PHONE_HREF} style={{ color: "#C9A84C", fontWeight: 800, fontSize: "18px", textDecoration: "none", display: "block", marginBottom: "18px", letterSpacing: "0.5px" }}>
              {PHONE}
            </a>

            <p style={{ color: "#888", fontSize: "12px", letterSpacing: "0.5px", fontWeight: 600, marginBottom: "4px" }}>LOS ANGELES</p>
            <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.8, marginBottom: "4px" }}>
              14485 Raymer St<br />Van Nuys, CA 91405
            </p>
            <a href="tel:+18187885466" style={{ color: "#777", fontSize: "13px", textDecoration: "none" }}>(818) 788-5466</a>

            <p style={{ color: "#888", fontSize: "12px", letterSpacing: "0.5px", fontWeight: 600, margin: "16px 0 4px" }}>MIAMI</p>
            <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.8, marginBottom: "4px" }}>
              3911 NW 26th St<br />Miami, FL 33142
            </p>
            <a href="tel:+13057075837" style={{ color: "#777", fontSize: "13px", textDecoration: "none" }}>(305) 707-5837</a>
          </div>

        </div>
      </div>

      {/* Copyright bar */}
      <div style={{ borderTop: "1px solid #141414", background: "#060606" }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ color: "#333", fontSize: "12px" }}>
            © {new Date().getFullYear()} Apex International Transportation. All rights reserved. Fully Licensed, Insured &amp; Compliant.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {[
              { label: "About", href: "/about/" },
              { label: "Blog", href: "/blog/" },
              { label: "Locations", href: "/locations/" },
              { label: "Services", href: "/services/" },
              { label: "Sitemap", href: "/sitemap.xml" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ color: "#333", fontSize: "12px", textDecoration: "none" }}>{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
