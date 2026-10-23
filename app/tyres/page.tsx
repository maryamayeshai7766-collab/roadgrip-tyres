import type { Metadata } from "next";
import TyreCollection from "../tyre-collection";

export const metadata: Metadata = {
  title: "Our Tyres | Rana Tyre Workers",
  description:
    "Explore the tyre catalogue at Rana Tyre Workers. Contact us on WhatsApp to ask about product details, prices and availability.",
};

export default function TyresPage() {
  return (
    <main className="inner-page">
      <section className="page-hero">
        <div className="section-wrap">
          <p className="eyebrow"><span className="eyebrow-line" /> RANA TYRE WORKERS</p>
          <h1>Our <span>tyre collection.</span></h1>
          <p>Browse the collection and message us directly to enquire about a tyre.</p>
        </div>
      </section>
      <TyreCollection
        productNumbers={Array.from({ length: 12 }, (_, index) => index + 1)}
        title="Find a tyre to enquire about."
        description="Product details are shown where provided. Contact us on WhatsApp for prices and availability."
      />
    </main>
  );
}
