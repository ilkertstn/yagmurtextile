import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "How to Choose the Perfect Summer Shirt",
  description:
    "A guide to choosing the perfect summer shirt — best breathable fabrics, colors, and fits to stay cool all season.",
  alternates: {
    canonical: "/blog/summer-shirt-guide",
    languages: {
      en: "https://www.mayagmurtextile.com/blog/summer-shirt-guide",
      tr: "https://www.mayagmurtextile.com/tr/blog/summer-shirt-guide",
      "x-default": "https://www.mayagmurtextile.com/blog/summer-shirt-guide",
    },
  },
  openGraph: {
    title: "How to Choose the Perfect Summer Shirt | MA Yagmur Textile",
    description:
      "A guide to choosing the perfect summer shirt — best breathable fabrics, colors, and fits to stay cool all season.",
    url: "/blog/summer-shirt-guide",
    type: "article",
  },
  twitter: {
    title: "How to Choose the Perfect Summer Shirt | MA Yagmur Textile",
    description:
      "A guide to choosing the perfect summer shirt — best breathable fabrics, colors, and fits to stay cool all season.",
  },
};

export default function SummerShirtGuidePost() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mayagmurtextile.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mayagmurtextile.com/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: "How to Choose the Perfect Summer Shirt",
        item: "https://www.mayagmurtextile.com/blog/summer-shirt-guide",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "How to Choose the Perfect Summer Shirt: A Fabric & Style Guide",
    description:
      "A guide to choosing the perfect summer shirt — best breathable fabrics, colors, and fits to stay cool all season.",
    image: "https://www.mayagmurtextile.com/assets/products/shirts-1.png",
    datePublished: "2026-07-19",
    dateModified: "2026-07-19",
    author: { "@type": "Organization", name: "MA Yagmur Textile" },
    publisher: {
      "@type": "Organization",
      name: "MA Yagmur Textile",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mayagmurtextile.com/assets/logo.png",
      },
    },
    mainEntityOfPage: "https://www.mayagmurtextile.com/blog/summer-shirt-guide",
  };

  return (
    <main className="subpage-main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="article-hero">
        <p className="eyebrow">Style Guide</p>
        <h1>How to Choose the Perfect Summer Shirt: A Fabric & Style Guide</h1>
      </section>

      <section className="article-body">
        <p>
          Nobody wants a shirt that clings, overheats, or wrinkles into a
          mess by noon. Staying cool and sharp in summer comes down to three
          things: fabric, fit, and color. Here&apos;s what to look for.
        </p>

        <figure className="article-figure">
          <Image
            src="/assets/products/shirts-1.png"
            alt="Lightweight linen resort shirt with a tropical print"
            width={1122}
            height={1402}
          />
          <figcaption>
            A lightweight linen-blend shirt cut for warm-weather wear.
          </figcaption>
        </figure>

        <h2>Best Fabrics for Summer</h2>
        <ul>
          <li>
            <strong>Linen:</strong> One of the most breathable fabrics
            available — its natural texture and slight wrinkle are part of
            the look.
          </li>
          <li>
            <strong>Cotton poplin:</strong> Tightly woven, smooth, and cool —
            a versatile pick for both office and casual wear.
          </li>
          <li>
            <strong>Seersucker:</strong> Its puckered weave keeps fabric off
            the skin, improving airflow even in high heat.
          </li>
        </ul>

        <div className="article-gallery">
          <figure>
            <Image
              src="/assets/products/shirts-1-close.png"
              alt="Close-up of a linen fabric weave"
              width={1086}
              height={1448}
            />
            <figcaption>Linen weave — a loose texture built for airflow.</figcaption>
          </figure>
          <figure>
            <Image
              src="/assets/products/shirts-2-close.png"
              alt="Close-up of a cotton poplin fabric weave"
              width={1086}
              height={1448}
            />
            <figcaption>Cotton poplin weave — smooth, tight, and cool.</figcaption>
          </figure>
        </div>

        <h2>Color and Pattern</h2>
        <p>
          Light colors (white, beige, pale blue) reflect sunlight and keep
          body temperature lower. Dark colors and dense patterns absorb more
          heat — for summer, favor light, solid, or subtly striped shirts.
        </p>

        <h2>Fit and Comfort</h2>
        <p>
          A slim cut restricts movement and traps sweat against the skin. A
          relaxed or regular fit lets fabric breathe by keeping it off the
          body. Short sleeves or a roll-up cuff on a long sleeve shirt also
          help reduce overheating.
        </p>

        <h2>Care Tips</h2>
        <p>
          Linen and cotton should be washed on a low, gentle cycle; ironing
          while the fabric is still slightly damp gives the cleanest result.
          Airing out a shirt between wears — rather than washing after every
          use — extends its life and keeps colors from fading.
        </p>

        <h2>Conclusion</h2>
        <p>
          The right combination of fabric, fit, and color is what keeps a
          shirt comfortable through the hottest months without sacrificing
          style.
        </p>
      </section>

      <section className="article-cta">
        <h2>Explore our summer collection.</h2>
        <p>
          See our linen and cotton poplin options, or talk to our team about
          summer-weight programs for your next order.
        </p>
        <div className="article-cta-actions">
          <Link className="button" href="/collection">
            Browse Collection
          </Link>
          <Link className="button button-ghost" href="/contact">
            Talk to a Specialist
          </Link>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <Link className="brand brand-footer" href="/">
            <span>MA Yagmur</span>
            <span>Textile</span>
          </Link>
          <p>Production-led shirting programs for premium brands and private label partners.</p>
        </div>

        <div className="footer-columns">
          <div>
            <h3>Discover</h3>
            <Link href="/">Home</Link>
            <Link href="/manufacturing">Manufacturing</Link>
            <Link href="/collection">Collection</Link>
            <Link href="/blog">Blog</Link>
          </div>
          <div>
            <h3>Contact</h3>
            <a href="tel:+902122301316">+90 530 780 24 26</a>
            <a href="mailto:info@mayagmurtextile.com">info@mayagmurtextile.com</a>
            <a
              href="https://www.instagram.com/mayagmurtekstil?igsh=MTQzcHdkb3RmdHpwbQ=="
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/ma-ya%C4%9Fmur-tekstil/posts/?feedView=all"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <Link href="/contact">Appointments</Link>
          </div>
          <div>
            <h3>Updates</h3>
            <p>Get the latest production notes, capability updates, and export news.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
