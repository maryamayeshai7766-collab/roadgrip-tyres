import Link from "next/link";
import SiteNavigation from "./site-navigation";
import { createWhatsAppLink } from "./whatsapp";

export const generalInquiry = createWhatsAppLink(
  "Assalam-o-Alaikum, I would like to ask about tyre prices and availability."
);

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M20.1 11.7a8.1 8.1 0 0 1-12 7.1L3 20l1.2-4.9a8.1 8.1 0 1 1 15.9-3.4Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M8.3 8.2c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.5.6c-.2.2-.2.4 0 .6.5.8 1.2 1.5 2 1.9.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.3.6-.1.5-.4 1.1-.9 1.4-.5.4-1.1.5-1.7.3-1-.3-2.4-.9-3.8-2.3-1.1-1-1.8-2.3-2-3.2-.2-.7 0-1.3.4-1.8.2-.2.4-.4.5-.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ArrowIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 20 20">
      <path
        d="M4 10h12m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Rana Tyre Workers home">
          <span className="brand-mark" aria-hidden="true">R</span>
          <span className="brand-name">Rana Tyre <strong>Workers</strong></span>
        </Link>
        <SiteNavigation />
        <a
          className="button button-yellow header-cta"
          href={generalInquiry}
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon className="whatsapp-icon" />
          WhatsApp Inquiry
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link className="brand footer-brand" href="/" aria-label="Rana Tyre Workers home">
          <span className="brand-mark" aria-hidden="true">R</span>
          <span className="brand-name">Rana Tyre <strong>Workers</strong></span>
        </Link>
        <span className="footer-address">119 Mor, Ithad Market</span>
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link href="/">Home</Link>
          <Link href="/tyres">Our Tyres</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <a
          className="footer-whatsapp"
          href={generalInquiry}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp <ArrowIcon />
        </a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Rana Tyre Workers</span>
        <span>119 Mor, Ithad Market</span>
      </div>
    </footer>
  );
}
