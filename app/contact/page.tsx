import type { Metadata } from "next";
import { ArrowIcon, WhatsAppIcon, generalInquiry } from "../site-chrome";

export const metadata: Metadata = {
  title: "Contact | Rana Tyre Workers",
  description:
    "Contact Rana Tyre Workers at 119 Mor, Ithad Market. Chat on WhatsApp to ask about tyre prices and availability.",
};

export default function ContactPage() {
  return (
    <main className="inner-page">
      <section className="page-hero">
        <div className="section-wrap">
          <p className="eyebrow"><span className="eyebrow-line" /> CONTACT THE SHOP</p>
          <h1>Let’s talk <span>tyres.</span></h1>
          <p>Ask directly about tyre details, prices and availability.</p>
        </div>
      </section>
      <section className="contact-section section-wrap">
        <div className="contact-panel">
          <div className="contact-main">
            <p className="eyebrow eyebrow-dark">
              <span className="eyebrow-line" /> GET IN TOUCH
            </p>
            <h2>We’re ready to hear <span>from you.</span></h2>
            <p>Send us a WhatsApp message with the tyre you are interested in.</p>
            <a
              className="button button-yellow contact-cta"
              href={generalInquiry}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon className="whatsapp-icon" /> Chat on WhatsApp
            </a>
          </div>
          <div className="contact-details">
            <div className="contact-detail">
              <span className="detail-label">VISIT THE SHOP</span>
              <strong>Rana Tyre Workers</strong>
              <span>119 Mor, Ithad Market</span>
            </div>
            <div className="contact-detail">
              <span className="detail-label">CALL OR MESSAGE</span>
              <a href="tel:+923011611513">03011615113</a>
              <a
                className="detail-whatsapp"
                href={generalInquiry}
                target="_blank"
                rel="noreferrer"
              >
                Message us on WhatsApp <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
