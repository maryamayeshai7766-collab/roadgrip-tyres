import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, WhatsAppIcon, generalInquiry } from "./site-chrome";

export const metadata: Metadata = {
  title: "Rana Tyre Workers | Find the Right Tyres",
  description:
    "Explore tyres at Rana Tyre Workers, 119 Mor, Ithad Market. Contact us directly on WhatsApp for tyre details and availability.",
};

function HeroTyre() {
  return (
    <div className="hero-art" aria-hidden="true">
      <Image
        className="hero-tyre"
        src="/tyre12.jpg"
        alt="Heavy-duty agricultural tyre"
        width={1200}
        height={1600}
        priority
      />
      <div className="hero-art-caption">
        <span className="caption-line" />
        <span>TRUCK · TRAILER · DUMPER TYRES</span>
      </div>
      <span className="hero-art-index">HEAVY DUTY</span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-line" /> RANA TYRE WORKERS
              <span className="eyebrow-location">— ITHAD MARKET</span>
            </p>
            <h1>Find the right tyres <span>for your vehicle.</span></h1>
            <p className="hero-description">
              Explore our tyre collection and contact us directly for prices
              and availability.
            </p>
            <div className="hero-actions">
              <Link className="button button-yellow" href="/tyres">
                Explore Tyres <ArrowIcon />
              </Link>
              <a
                className="button button-outline"
                href={generalInquiry}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon className="whatsapp-icon" />
                Contact on WhatsApp
              </a>
            </div>
            <div className="hero-location">
              <span className="location-mark" aria-hidden="true">+</span>
              <span>119 Mor, Ithad Market</span>
            </div>
          </div>
          <HeroTyre />
        </div>
        <div className="hero-bottom-rule"><span /></div>
      </section>

      <section className="home-about section-wrap">
        <div>
          <p className="eyebrow eyebrow-dark">
            <span className="eyebrow-line" /> VISIT OUR SHOP
          </p>
          <h2>Rana Tyre Workers<span>.</span></h2>
          <p>119 Mor, Ithad Market</p>
        </div>
        <Link className="button button-yellow" href="/about">
          About our shop <ArrowIcon />
        </Link>
      </section>
    </main>
  );
}
