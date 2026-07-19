import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Shirt Sleeve Types Explained",
  description:
    "A complete guide to shirt sleeve types, cuff styles, and cuts — barrel, French, raglan, and dolman sleeves explained.",
  alternates: {
    canonical: "/blog/shirt-sleeve-types",
    languages: {
      en: "https://www.mayagmurtextile.com/blog/shirt-sleeve-types",
      tr: "https://www.mayagmurtextile.com/tr/blog/shirt-sleeve-types",
      "x-default": "https://www.mayagmurtextile.com/blog/shirt-sleeve-types",
    },
  },
  openGraph: {
    title: "Shirt Sleeve Types Explained | MA Yagmur Textile",
    description:
      "A complete guide to shirt sleeve types, cuff styles, and cuts — barrel, French, raglan, and dolman sleeves explained.",
    url: "/blog/shirt-sleeve-types",
    type: "article",
  },
  twitter: {
    title: "Shirt Sleeve Types Explained | MA Yagmur Textile",
    description:
      "A complete guide to shirt sleeve types, cuff styles, and cuts — barrel, French, raglan, and dolman sleeves explained.",
  },
};

export default function ShirtSleeveTypesPost() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mayagmurtextile.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mayagmurtextile.com/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Shirt Sleeve Types Explained",
        item: "https://www.mayagmurtextile.com/blog/shirt-sleeve-types",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Shirt Sleeve Types Explained: A Complete Guide to Cuffs, Lengths & Styles",
    description:
      "A complete guide to shirt sleeve types, cuff styles, and cuts — barrel, French, raglan, and dolman sleeves explained.",
    image: "https://www.mayagmurtextile.com/assets/products/shirts-2.png",
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
    mainEntityOfPage: "https://www.mayagmurtextile.com/blog/shirt-sleeve-types",
  };

  return (
    <main className="subpage-main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="article-hero">
        <p className="eyebrow">Style Guide</p>
        <h1>Shirt Sleeve Types Explained: A Complete Guide to Cuffs, Lengths & Styles</h1>
      </section>

      <section className="article-body">
        <p>
          What&apos;s the most overlooked detail that separates one shirt from
          another? Not the fabric, not the collar — the sleeve. Length, cuff
          style, and cut all shape how a shirt looks and where you can wear
          it. Here&apos;s a complete breakdown of shirt sleeve types and how
          to pick the right one.
        </p>

        <figure className="article-figure">
          <Image
            src="/assets/products/shirts-2.png"
            alt="Classic formal shirt with long sleeves and a barrel cuff"
            width={1123}
            height={1400}
          />
          <figcaption>
            A long-sleeve formal shirt showing a barrel cuff and set-in
            sleeve construction.
          </figcaption>
        </figure>

        <h2>Sleeve Length</h2>
        <ul>
          <li>
            <strong>Long sleeve:</strong> The standard for formal and office
            wear, pairs with any cuff style for a layered, polished look.
          </li>
          <li>
            <strong>Short sleeve:</strong> Built for warm weather and casual
            settings — quality fabric keeps the silhouette sharp even without
            a cuff.
          </li>
          <li>
            <strong>Roll-up (3/4) sleeve:</strong> A long sleeve folded and
            secured partway up the forearm, bridging formal and relaxed
            dressing.
          </li>
        </ul>

        <h2>Cuff Styles</h2>
        <ul>
          <li>
            <strong>Barrel cuff:</strong> The most common cuff, closed with
            one or two buttons — everyday practical.
          </li>
          <li>
            <strong>French cuff:</strong> Fastened with cufflinks, folded
            double for a dressier finish — reserved for formal events and
            black-tie shirts.
          </li>
          <li>
            <strong>Roll-up tab cuff:</strong> Includes a small strap or tab
            to hold the folded sleeve in place — common on summer and casual
            shirts.
          </li>
        </ul>

        <div className="article-gallery">
          <figure>
            <Image
              src="/assets/products/shirts-2-close.png"
              alt="Barrel cuff and button detail on a formal shirt"
              width={1086}
              height={1448}
            />
            <figcaption>Barrel cuff detail on a formal poplin shirt.</figcaption>
          </figure>
          <figure>
            <Image
              src="/assets/products/shirts-3-close.png"
              alt="Cuff and button detail on a casual utility overshirt"
              width={1086}
              height={1448}
            />
            <figcaption>Cuff and button detail on a casual overshirt.</figcaption>
          </figure>
        </div>

        <h2>Sleeve Cuts</h2>
        <ul>
          <li>
            <strong>Set-in sleeve:</strong> Stitched at the shoulder seam for
            a clean, classic silhouette — the standard in dress shirts.
          </li>
          <li>
            <strong>Raglan sleeve:</strong> Runs in one piece from collar to
            underarm, giving more freedom of movement.
          </li>
          <li>
            <strong>Dolman sleeve:</strong> Cut wide and blended into the
            body of the shirt for a looser, more casual drape.
          </li>
        </ul>

        <h2>How to Choose the Right Sleeve</h2>
        <p>
          Match the sleeve to the occasion: a set-in cut with a barrel cuff
          and long sleeve for office wear; short sleeves or a roll-up cuff for
          summer and casual days; French cuffs for formal events. Body type
          matters too — raglan cuts suit broader shoulders, while set-in
          sleeves flatter a leaner frame.
        </p>

        <h2>Conclusion</h2>
        <p>
          Sleeve construction is a small detail with an outsized effect on how
          a shirt fits and functions. Getting the sleeve-cuff combination
          right extends a shirt&apos;s versatility across seasons and
          settings.
        </p>
      </section>

      <section className="article-cta">
        <h2>See these sleeve and cuff options in production.</h2>
        <p>
          Browse our collection or talk to our team about sleeve and cuff
          specifications for your next order.
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
