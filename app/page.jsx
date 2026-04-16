import Link from "next/link";
import MailtoContactForm from "../components/mailto-contact-form";

export const metadata = {
  title: "Shirt Manufacturer in Istanbul",
  description:
    "MA Yagmur Textile is an Istanbul-based shirt manufacturer specializing in private label shirt production, wholesale development, and export-ready textile programs.",
  alternates: {
    canonical: "/",
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
            for Growing Brands.
          </h1>
          <p className="lead">
            MA Yagmur Textile manufactures private label shirts for global
            brands, combining Istanbul craftsmanship with export-ready
            precision.
          </p>
          <Link className="button" href="/manufacturing">
            Discover Our Production Process
          </Link>
        </div>

        <div className="hero-visual">
          <div className="portrait-card portrait-card-large">
            <img
              src="/assets/hero-banner.png"
              alt="MA Yagmur Textile shirt production detail"
            />
          </div>
          <div className="signature-card">
            <span className="signature-label">Production Focus</span>
            <strong>Private Label Manufacturing</strong>
            <span>From Sampling to Bulk Production</span>
          </div>
        </div>
      </section>

      <section className="story-grid" id="atelier">
        <div className="story-media">
          <div className="pattern-panel">
            <img src="/assets/kumas-turu.png" alt="Fabric swatch selection" />
          </div>
          <div className="small-card">
            <img src="/assets/heritage.jpg" alt="Textile workshop production detail" />
          </div>
        </div>

        <div className="story-copy">
          <p className="eyebrow">Manufacturer Profile</p>
          <h2>Anatolian Soul, Italian Precision.</h2>
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
            <img
              src="/assets/iconlast-1.jpg"
              alt="Formal shirt manufacturing sample"
            />
            <div className="product-meta">
              <h3>Striped Dress Shirt</h3>
              <p>Classic long-sleeve shirting for private label formal and business collections.</p>
            </div>
          </article>

          <article className="product-card product-card-offset product-card-hover-color">
            <img
              src="/assets/iconlast-2.png"
              alt="Casual shirt production sample"
            />
            <div className="product-meta">
              <h3>Overshirt Program</h3>
              <p>Structured overshirts with utility pockets for premium casual and layered collections.</p>
            </div>
          </article>

          <article className="product-card product-card-hover-color">
            <img
              src="/assets/iconlast-4.png"
              alt="Uniform shirt production detail"
            />
            <div className="product-meta">
              <h3>Linen Utility Shirt</h3>
              <p>Breathable natural-fiber styles suited to summer programs and resort-focused ranges.</p>
            </div>
          </article>

          <article className="product-card product-card-wide product-card-hover-color">
            <img
              src="/assets/iconlast-5.png"
              alt="Seasonal shirt collection detail"
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
            <a href="tel:+902122301316">+90 212 230 13 16</a>
            <a href="mailto:info@mayagmurtextile.com">
              info@mayagmurtextile.com
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
