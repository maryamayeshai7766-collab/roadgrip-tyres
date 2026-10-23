import Link from "next/link";
import TyreCard from "./tyre-card";
import { ArrowIcon, generalInquiry } from "./site-chrome";

type TyreCollectionProps = {
  productNumbers: number[];
  title: string;
  description: string;
  viewAll?: boolean;
};

export default function TyreCollection({
  productNumbers,
  title,
  description,
  viewAll = false,
}: TyreCollectionProps) {
  return (
    <section className="collection section-wrap">
      <div className="section-heading">
        <div>
          <p className="eyebrow eyebrow-dark">
            <span className="eyebrow-line" /> OUR COLLECTION
          </p>
          <h2>{title}</h2>
        </div>
        <p className="section-intro">{description}</p>
      </div>
      <div className="product-grid">
        {productNumbers.map((productNumber) => (
          <TyreCard key={productNumber} productNumber={productNumber} />
        ))}
      </div>
      <div className="collection-actions">
        {viewAll && (
          <Link className="button button-outline-dark" href="/tyres">
            View all tyres <ArrowIcon />
          </Link>
        )}
        <p className="collection-note">
          Need help choosing?{" "}
          <a href={generalInquiry} target="_blank" rel="noreferrer">
            Ask us on WhatsApp <ArrowIcon />
          </a>
        </p>
      </div>
    </section>
  );
}
