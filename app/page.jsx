import Link from "next/link";
import Image from "next/image";
import MailtoContactForm from "../components/mailto-contact-form";

export const metadata = {
  title: {
    absolute: "MA Yagmur Textile | Private Label Shirt Manufacturer Istanbul",
  },
  description:
    "Istanbul-based private label shirt manufacturer offering wholesale production, low MOQ sampling, and export-ready programs for global brands.",
  alternates: {
    canonical: "/",
    languages: {
      en: "https://www.mayagmurtextile.com/",
      tr: "https://www.mayagmurtextile.com/tr",
      "x-default": "https://www.mayagmurtextile.com/",
    },
  },
  openGraph: {
    title: "MA Yagmur Textile | Shirt Manufacturer in Istanbul",
    description:
      "Discover private label shirt manufacturing, workshop discipline, and collection development from MA Yagmur Textile.",
    url: "/",
    type: "website",
  },
  twitter: {
    title: "MA Yagmur Textile | Shirt Manufacturer in Istanbul",
    description:
      "Discover private label shirt manufacturing, workshop discipline, and collection development from MA Yagmur Textile.",
  },
};

export default function HomePage() {
  return (
    <main>
      <section className="hero" id="hero">
        <div className="hero-copy">
          <p className="eyebrow">Istanbul-Based Private Label Shirt Manufacturer</p>
          <h1>
            Trusted Shirt Manufacturing
            <br />
            for Ambitious Brands.
          </h1>
          <p className="lead">
           MA Yağmur Textile combines modern production discipline with export-ready precision to deliver premium shirt manufacturing for global brands.
          </p>
          <Link className="button" href="/manufacturing">
            Discover Our Production Process
          </Link>
        </div>

        <div className="hero-visual">
          <div className="portrait-card portrait-card-large">
            <Image
              src="/assets/hero-banner.png"
              alt="MA Yagmur Textile shirt production detail"
              width={820}
              height={1168}
              priority
            />
          </div>
          <div className="signature-card">
            <span className="signature-label">Production Focus</span>
            <strong>Private Label Manufacturing</strong>
            <span>From Sampling to Bulk Production</span>
          </div>
        </div>
      </section>

      <section className="production-snapshot" aria-labelledby="production-snapshot-title">
        <div className="snapshot-heading">
          <p className="eyebrow">Production At A Glance</p>
          <h2 id="production-snapshot-title">
            Essential manufacturing details for private label shirt programs.
          </h2>
        </div>

        <div className="snapshot-grid">
          <article className="snapshot-card">
            <span>01</span>
            <h3>Men's & Women's Shirts</h3>
            <p>
              Private label shirt production focused on men's and women's woven
              shirt collections.
            </p>
          </article>

          <article className="snapshot-card">
            <span>02</span>
            <h3>MOQ 50+ pcs</h3>
            <p>
              Minimum order planning starts from 50 pieces. Orders below 50
              pieces are handled as custom production.
            </p>
          </article>

          <article className="snapshot-card">
            <span>03</span>
            <h3>1,100 Shirts Per Day</h3>
            <p>
              Daily production capacity supports approximately 1,100 shirts for
              organized private label programs.
            </p>
          </article>

          <article className="snapshot-card">
            <span>04</span>
            <h3>Sampling To Bulk</h3>
            <p>
              Prototype, fit sample, pre-production approval, bulk
              manufacturing, final inspection, and export-ready packing.
            </p>
          </article>
        </div>
      </section>

      <section className="story-grid" id="atelier">
        <div className="story-media">
          <div className="pattern-panel">
            <Image
              src="/assets/kumas-turu.png"
              alt="Fabric swatch selection"
              width={1024}
              height={1536}
            />
          </div>
          <div className="small-card">
            <Image
              src="/assets/heritage.jpg"
              alt="Textile workshop production detail"
              width={1287}
              height={860}
            />
          </div>
        </div>

        <div className="story-copy">
          <p className="eyebrow">Manufacturer Profile</p>
          <h2>Workshop Discipline, Export-Ready Production.</h2>
          <p>
            We manufacture shirts for brands seeking reliable private label
            production, consistent quality, and long-term partnerships.
          </p>
          <p>
            Our strength lies in combining fabric expertise, craftsmanship, and
            structured production into collections ready for sampling, bulk
            manufacturing, and export.
          </p>

          <div className="stats">
            <div>
              <strong>20</strong>
              <span>Years of Experience</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Fully Crafted In-House</span>
            </div>
          </div>
        </div>
      </section>

      <section className="showcase-video" id="process">
        <div className="video-frame">
          <video
            src="/assets/video-process.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls
            aria-label="Process film"
          ></video>
        </div>
      </section>

      <section className="collection" id="collection">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Production Programs</p>
            <h2>Core Product Categories</h2>
          </div>
          <Link href="/collection">Explore Product Programs</Link>
        </div>

        <div className="collection-grid">
          <article className="product-card product-card-tall product-card-hover-color">
            <Image
              src="/assets/iconlast-1.jpg"
              alt="Formal shirt manufacturing sample"
              width={922}
              height={1152}
            />
            <div className="product-meta">
              <h3>Striped Dress Shirt</h3>
              <p>Classic long-sleeve shirting for private label formal and business collections.</p>
            </div>
          </article>

          <article className="product-card product-card-offset product-card-hover-color">
            <Image
              src="/assets/iconlast-2.png"
              alt="Casual shirt production sample"
              width={1046}
              height={844}
            />
            <div className="product-meta">
              <h3>Overshirt Program</h3>
              <p>Structured overshirts with utility pockets for premium casual and layered collections.</p>
            </div>
          </article>

          <article className="product-card product-card-hover-color">
            <Image
              src="/assets/iconlast-4.png"
              alt="Uniform shirt production detail"
              width={922}
              height={1152}
            />
            <div className="product-meta">
              <h3>Linen Utility Shirt</h3>
              <p>Breathable natural-fiber styles suited to summer programs and resort-focused ranges.</p>
            </div>
          </article>

          <article className="product-card product-card-wide product-card-hover-color">
            <Image
              src="/assets/iconlast-5.png"
              alt="Seasonal shirt collection detail"
              width={1026}
              height={954}
            />
            <div className="product-meta">
              <h3>Short-Sleeve Zip Shirt</h3>
              <p>Modern short-sleeve styles developed for fashion-forward seasonal and capsule collections.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="contact-banner" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Production Inquiry</p>
          <h2>
            Start your
            <em>Production</em>
            Inquiry
          </h2>
          <p>
            Tell us about your brand, product type, target quantity, and timing.
            We will guide you through sampling, production planning, and the
            right manufacturing route for your collection.
          </p>

          <ul className="contact-list">
            <li>Private label and contract manufacturing</li>
            <li>Sampling, bulk production, and export support</li>
          </ul>
        </div>

        <MailtoContactForm
          className="contact-form"
          title="Production Inquiry"
          subject="Production Inquiry"
          buttonLabel="Request Production Quote"
          fields={[
            {
              label: "Full Name",
              name: "name",
              type: "text",
              placeholder: "Enter your name",
              required: true,
            },
            {
              label: "Brand / Company",
              name: "company",
              type: "text",
              placeholder: "Your brand or company name",
              required: true,
            },
            {
              label: "Email",
              name: "email",
              type: "email",
              placeholder: "hello@example.com",
              required: true,
            },
            {
              label: "Project Brief",
              name: "message",
              type: "textarea",
              rows: 4,
              placeholder:
                "Tell us the product type, estimated quantity, and target delivery window",
              required: true,
            },
          ]}
        />
      </section>

      <footer className="site-footer">
        <div>
          <Link className="brand brand-footer" href="/">
            <span>MA Yagmur</span>
            <span>Textile</span>
          </Link>
          <p>Private label shirt manufacturing and textile production support from Istanbul.</p>
        </div>

        <div className="footer-columns">
          <div>
            <h3>Discover</h3>
            <Link href="/">Home</Link>
            <Link href="/manufacturing">Manufacturing</Link>
            <Link href="/collection">Collection</Link>
          </div>
          <div>
            <h3>Contact</h3>
            <a href="tel:+902122301316">+90 530 780 24 26</a>
            <a href="mailto:info@mayagmurtextile.com">
              info@mayagmurtextile.com
            </a>
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
            <Link href="/contact">Production Inquiry</Link>
          </div>
          <div>
            <h3>Capabilities</h3>
            <p>Sampling, private label development, bulk production, and export support.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
