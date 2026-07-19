"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductImageToggle({
  primarySrc,
  primaryAlt,
  secondarySrc,
  secondaryAlt,
  primaryLabel = "View close-up",
  secondaryLabel = "View full shirt",
}) {
  const [isCloseUp, setIsCloseUp] = useState(false);
  const src = isCloseUp ? secondarySrc : primarySrc;
  const alt = isCloseUp ? secondaryAlt : primaryAlt;

  return (
    <button
      className={`product-image-toggle ${isCloseUp ? "is-close-up" : "is-full-view"}`}
      type="button"
      aria-label={isCloseUp ? secondaryLabel : primaryLabel}
      onClick={() => setIsCloseUp((value) => !value)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <span>{isCloseUp ? secondaryLabel : primaryLabel}</span>
    </button>
  );
}
