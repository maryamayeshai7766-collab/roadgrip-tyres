import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "../site-chrome";

export const metadata: Metadata = {
  title: "About Us | Rana Tyre Workers",
  description:
    "Learn about Rana Tyre Workers, located at 119 Mor, Ithad Market. Browse tyres and enquire directly with the shop.",
};

export default function AboutPage() {
  return (
    <main className="inner-page">
      <section className="page-hero">
        <div className="section-wrap">
          <p className="eyebrow"><span className="eyebrow-line" /> ABOUT THE SHOP</p>
          <h1>About <span>Rana Tyre Workers.</span></h1>
          <p>A local place to explore tyres and ask about the details that matter to you.</p>
        </div>
      </section>
      <section className="about-section">
        <div className="about-inner section-wrap">
          <div className="about-heading">
            <p className="eyebrow"><span className="eyebrow-line" /> HERE TO HELP YOU ENQUIRE</p>
            <h2>A straightforward way to find your <span>next set.</span></h2>
          </div>
          <div className="about-copy">
            <p>
              Rana Tyre Workers is here to help you enquire about tyres for
              your vehicle. Browse our collection and contact us directly to
              ask about tyre details, prices and availability.
            </p>
            <p>
              Visit us at 119 Mor, Ithad Market, or send us a message on
              WhatsApp. Tell us what you are looking for and we can discuss
              the available details with you.
            </p>
            <Link className="text-link" href="/tyres">
              Browse our tyres <ArrowIcon />
            </Link>
          </div>
        </div>
        <div className="about-index" aria-hidden="true">RTW</div>
      </section>
      <section className="about-location section-wrap">
        <p className="eyebrow eyebrow-dark"><span className="eyebrow-line" /> FIND OUR SHOP</p>
        <h2>Rana Tyre Workers</h2>
        <p>119 Mor, Ithad Market</p>
        <Link className="button button-yellow" href="/contact">
          Contact the shop <ArrowIcon />
        </Link>
      </section>
    </main>
  );
}
