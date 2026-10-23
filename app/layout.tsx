import type { Metadata, Viewport } from "next";
import { SiteFooter, SiteHeader } from "./site-chrome";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rana Tyre Workers | Tyres & WhatsApp Enquiries",
  description:
    "Browse the tyre collection at Rana Tyre Workers, 119 Mor, Ithad Market. Contact us on WhatsApp to ask about tyre details, prices and availability.",
};

export const viewport: Viewport = {
  themeColor: "#111111",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
