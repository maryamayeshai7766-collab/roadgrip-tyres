"use client";

import { useEffect, useRef, useState } from "react";
import { createWhatsAppLink } from "./whatsapp";

function TyrePlaceholder() {
  return (
    <svg aria-hidden="true" className="tyre-placeholder" viewBox="0 0 220 180" fill="none">
      <ellipse cx="110" cy="149" rx="64" ry="10" fill="#111" opacity=".08" />
      <circle cx="110" cy="86" r="64" fill="#242424" />
      <circle cx="110" cy="86" r="53" stroke="#393939" strokeDasharray="4 5" strokeWidth="6" />
      <circle cx="110" cy="86" r="38" fill="#F6F6F6" stroke="#999" strokeWidth="4" />
      <circle cx="110" cy="86" r="24" fill="#262626" stroke="#777" strokeWidth="3" />
      {[0, 60, 120].map((rotation) => (
        <path
          key={rotation}
          d="M110 49v15l-8 22 8 14 8-14-8-22V49Z"
          fill="#D7D7D7"
          stroke="#777"
          strokeWidth="1.5"
          transform={`rotate(${rotation} 110 86)`}
        />
      ))}
      <circle cx="110" cy="86" r="5" fill="#FFD400" />
    </svg>
  );
}

export default function TyreCard({ productNumber }: { productNumber: number }) {
  const [imageUnavailable, setImageUnavailable] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const productDetails: Record<
    number,
    { name: string; size: string; details?: { label: string; value: string }[] }
  > = {
    1: {
      name: "Armour",
      size: "18.4-30",
      details: [
        { label: "Category", value: "Agricultural / Tractor Tyres" },
        { label: "Tread Pattern", value: "R1" },
        { label: "Application", value: "Farming & Agricultural Use" },
        { label: "Type", value: "Confirm with Supplier" },
        { label: "Price", value: "Contact for Price" },
        { label: "Availability", value: "Contact for Stock" },
        { label: "Country of Origin", value: "Confirm with Supplier" },
      ],
    },
    2: {
      name: "Advance",
      size: "11.20-12.20",
      details: [
        { label: "Category", value: "Agricultural / Tractor Tyres" },
        { label: "Tread Pattern", value: "R1" },
        { label: "Application", value: "Farming & Agricultural Use" },
        { label: "Type", value: "Confirm with Supplier" },
        { label: "Price", value: "Contact for Price" },
        { label: "Availability", value: "Contact for Stock" },
        { label: "Country of Origin", value: "Confirm with Supplier" },
      ],
    },
    3: {
      name: "Changsha",
      size: "11.00-20",
      details: [
        { label: "Category", value: "Commercial / Heavy-Duty Tyres" },
        { label: "Tread Pattern", value: "Confirm with Supplier" },
        { label: "Application", value: "Commercial & Industrial Use" },
        { label: "Type", value: "Confirm with Supplier" },
        { label: "Price", value: "Contact for Price" },
        { label: "Availability", value: "Contact for Stock" },
        { label: "Country of Origin", value: "Confirm with Supplier" },
      ],
    },
    4: {
      name: "Unimax",
      size: "12.00-20",
      details: [
        { label: "Category", value: "Truck / Commercial Vehicle Tyres" },
        { label: "Tread Pattern", value: "Confirm with Supplier" },
        { label: "Application", value: "Commercial & Heavy-Duty Use" },
        { label: "Type", value: "Confirm with Supplier" },
        { label: "Price", value: "Contact for Price" },
        { label: "Availability", value: "Contact for Stock" },
        { label: "Country of Origin", value: "Confirm with Supplier" },
      ],
    },
    5: {
      name: "Diamond",
      size: "7.50-16",
      details: [
        { label: "Category", value: "Agricultural / Tractor Tyres" },
        { label: "Tread Pattern", value: "Confirm with Supplier" },
        { label: "Application", value: "Agricultural & Farming Use" },
        { label: "Type", value: "Confirm with Supplier" },
        { label: "Price", value: "Contact for Price" },
        { label: "Availability", value: "Contact for Stock" },
        { label: "Country of Origin", value: "Confirm with Supplier" },
      ],
    },
    6: {
      name: "Compatianli",
      size: "23.5-25",
      details: [
        { label: "Category", value: "OTR / Heavy Equipment Tyres" },
        { label: "Tread Pattern", value: "Heavy-Duty Block Pattern" },
        { label: "Application", value: "Construction & Earthmoving Equipment" },
        { label: "Type", value: "Confirm with Supplier" },
        { label: "Price", value: "Contact for Price" },
        { label: "Availability", value: "Contact for Stock" },
        { label: "Country of Origin", value: "Confirm with Supplier" },
      ],
    },
    7: {
      name: "Panther",
      size: "7.50-16",
      details: [
        { label: "Category", value: "Agricultural / Tractor Tyres" },
        { label: "Tread Pattern", value: "Confirm with Supplier" },
        { label: "Application", value: "Farming & Agricultural Use" },
        { label: "Type", value: "Confirm with Supplier" },
        { label: "Price", value: "Contact for Price" },
        { label: "Availability", value: "Contact for Stock" },
        { label: "Country of Origin", value: "Confirm with Supplier" },
      ],
    },
    8: {
      name: "Panther Load King",
      size: "18.4-30",
      details: [
        { label: "Category", value: "Agricultural / Tractor Tyres" },
        { label: "Tread Pattern", value: "R1 / Confirm with Supplier" },
        { label: "Application", value: "Farming & Agricultural Use" },
        { label: "Type", value: "Tractor Rear Tyre" },
        { label: "Price", value: "Contact for Price" },
        { label: "Availability", value: "Contact for Stock" },
        { label: "Country of Origin", value: "Confirm with Supplier" },
      ],
    },
    9: {
      name: "Tianli",
      size: "11.00-20",
      details: [
        { label: "Category", value: "Commercial / Heavy-Duty Tyres" },
        { label: "Tread Pattern", value: "Confirm with Supplier" },
        { label: "Application", value: "Commercial & Industrial Use" },
        { label: "Type", value: "Confirm with Supplier" },
        { label: "Price", value: "Contact for Price" },
        { label: "Availability", value: "Contact for Stock" },
        { label: "Country of Origin", value: "Confirm with Supplier" },
      ],
    },
    10: {
      name: "Unimax",
      size: "18.4-30",
      details: [
        { label: "Category", value: "Agricultural / Tractor Tyres" },
        { label: "Tread Pattern", value: "Confirm with Supplier" },
        { label: "Application", value: "Farming & Agricultural Use" },
        { label: "Type", value: "Tractor Tyre" },
        { label: "Price", value: "Contact for Price" },
        { label: "Availability", value: "Contact for Stock" },
        { label: "Country of Origin", value: "Confirm with Supplier" },
      ],
    },
    11: {
      name: "Panther",
      size: "7.50-16",
      details: [
        { label: "Category", value: "Agricultural / Tractor Tyres" },
        { label: "Tread Pattern", value: "Confirm with Supplier" },
        { label: "Application", value: "Farming & Agricultural Use" },
        { label: "Type", value: "Confirm with Supplier" },
        { label: "Price", value: "Contact for Price" },
        { label: "Availability", value: "Contact for Stock" },
        { label: "Country of Origin", value: "Confirm with Supplier" },
      ],
    },
    12: {
      name: "Panther / General Tyre (GTYR) / Servis Tyres",
      size: "18.4-30",
      details: [
        { label: "Category", value: "Agricultural / Tractor Tyres" },
        { label: "Tread Pattern", value: "R1 / Confirm with Supplier" },
        { label: "Application", value: "Farming & Agricultural Use" },
        { label: "Type", value: "Tractor Rear Tyre" },
        { label: "Price", value: "Contact for Price" },
        { label: "Availability", value: "Contact for Stock" },
        { label: "Country of Origin", value: "Confirm with Supplier" },
      ],
    },
  };
  const product = productDetails[productNumber];
  const productName = product?.name ?? `Tyre ${productNumber}`;
  const productSize = product?.size;
  const imageSource = productNumber === 12 ? "/tyre12.jpg" : `/tyre${productNumber}.png`;
  const visibleDetails = ["Category", "Tread Pattern", "Application", "Type"].map((label) => {
    const suppliedValue = product?.details?.find((detail) => detail.label === label)?.value;
    const value = !suppliedValue || suppliedValue === "Confirm with Supplier"
      ? "Ask supplier"
      : suppliedValue.replace(/ \/ Confirm with Supplier$/, " / Ask supplier");

    return { label, value };
  });
  const message = product
    ? `Assalam-o-Alaikum, I am interested in the ${productName} tyre, size ${productSize}. Please share its price and availability.`
    : `Assalam-o-Alaikum, I am interested in Tyre ${productNumber}. Please share its price, size details and availability.`;
  const inquiryLink = createWhatsAppLink(message);

  useEffect(() => {
    if (imageRef.current?.complete && imageRef.current.naturalWidth === 0) {
      setImageUnavailable(true);
    }
  }, []);

  return (
    <article className="product-card">
      {productNumber !== 13 && (
        <div className="product-image">
          <span className="product-number">RTW / {String(productNumber).padStart(2, "0")}</span>
          {imageUnavailable ? (
            <TyrePlaceholder />
          ) : (
            // The supplied catalogue images are optional; if one is missing, show the local tyre illustration.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              ref={imageRef}
              src={imageSource}
              alt={product ? `${productName} tyre, size ${productSize}` : `Tyre ${productNumber}`}
              loading="lazy"
              onError={() => setImageUnavailable(true)}
            />
          )}
        </div>
      )}
      <div className="product-info">
        <div className="product-title">
          <span className="product-title-index">{String(productNumber).padStart(2, "0")}</span>
          <div className="product-title-copy">
            <h3>{productName}</h3>
            {product && <p className="product-size">Size: {productSize}</p>}
          </div>
        </div>
        <dl className="product-details">
          {visibleDetails.map(({ label, value }) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <a className="product-inquiry" href={inquiryLink} target="_blank" rel="noreferrer">
          Ask for price on WhatsApp
          <svg aria-hidden="true" fill="none" viewBox="0 0 20 20">
            <path
              d="M4 10h12m-5-5 5 5-5 5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
            />
          </svg>
        </a>
      </div>
    </article>
  );
}
