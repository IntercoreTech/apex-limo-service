import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apex International Transportation | Premium Limo & Charter Service",
  description:
    "Premium transportation built on trust. SUVs, Sprinter Vans, Executive Minibuses, and Motorcoaches serving Los Angeles, Las Vegas, Miami & Fort Lauderdale. Call 877-427-1777.",
  keywords:
    "limo service, limousine, charter bus, sprinter van, transportation, Los Angeles, Las Vegas, Miami, Fort Lauderdale, airport transfer, corporate travel",
  openGraph: {
    title: "Apex International Transportation",
    description: "Premium Transportation Built on Trust. Safe. Reliable. Professional.",
    url: "https://apexlimousineservice.com",
    siteName: "Apex International Transportation",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
