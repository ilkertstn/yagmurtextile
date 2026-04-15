import Link from "next/link";

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
          <p className="eyebrow">Istanbul based shirt manufacturer</p>
          <h1>
            The Silent
            <em>Precision</em>
            <br/>
            of Wool.
          </h1>
          <p className="lead">
            MA Yagmur Textile develops private label shirt programs for global
            brands, combining Istanbul workshop discipline with export-ready
            manufacturing precision.
          </p>
          <Link className="button" href="/manufacturing">
            Explore Manufacturing
          </Link>
        </div>

        <div className="hero-visual">
          <div className="portrait-card portrait-card-large">
            <img
              src="/assets/hero-banner.png"
              alt="Editorial tailoring portrait"
            />
          </div>
          <div className="signature-card">
            <span className="signature-label">Design Note</span>
            <strong>No. 7914</strong>
            <span>MA Yagmur Textile</span>
          </div>
        </div>
      </section>

      <section className="story-grid" id="atelier">
        <div className="story-media">
          <div className="pattern-panel">
            <img src="/assets/kumas-turu.png" alt="Fabric swatch selection" />
          </div>
          <div className="small-card">
            <img src="/assets/heritage.jpg" alt="Heritage atelier detail" />
          </div>
        </div>

        <div className="story-copy">
          <p className="eyebrow">Manufacturer Profile</p>
          <h2>Anatolian Soul, Italian Precision.</h2>
          <p>
            We operate as a shirt manufacturer for brands seeking private label
            development, dependable production quality, and long-term wholesale
            support.
          </p>
          <p>
            Our strength lies in translating material knowledge, workshop care,
            and production structure into commercial collections ready for
            sampling, bulk production, and export.
          </p>

          <div className="stats">
            <div>
              <strong>24</strong>
              <span>years of legacy</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>crafted in-house</span>
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
            <p className="eyebrow">Capsule Feature</p>
            <h2>The Modern Iconoclast</h2>
          </div>
          <Link href="/collection">View Full Lookbook</Link>
        </div>

        <div className="collection-grid">
          <article className="product-card product-card-tall product-card-hover-color">
            <img
              src="/assets/iconlast-1.jpg"
              alt="Bombazine overcoat editorial look"
            />
            <div className="product-meta">
              <h3>Bombazine Overcoat</h3>
              <p>100% wool, hand-finished cashmere</p>
            </div>
          </article>

          <article className="product-card product-card-offset product-card-hover-color">
            <img
              src="/assets/iconlast-2.png"
              alt="Atelier waistcoat editorial look"
            />
            <div className="product-meta">
              <h3>Atelier Waistcoat</h3>
              <p>Wool silk waistcoat</p>
            </div>
          </article>

          <article className="product-card product-card-hover-color">
            <img
              src="/assets/iconlast-4.png"
              alt="Heritage oxfords editorial detail"
            />
            <div className="product-meta">
              <h3>Heritage Oxfords</h3>
              <p>Hand-polished calfskin</p>
            </div>
          </article>

          <article className="product-card product-card-wide product-card-hover-color">
            <img
              src="/assets/iconlast-5.png"
              alt="Foundation trouser editorial detail"
            />
            <div className="product-meta">
              <h3>Foundation Trouser</h3>
              <p>Fine drape wool blend</p>
            </div>
          </article>
        </div>
      </section>

      <section className="contact-banner" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Private Commission</p>
          <h2>
            Begin your
            <em>Private</em>
            Commission
          </h2>
          <p>
            Step into MA Yagmur Textile. Tailored creative by invitation or
            private application. Each bespoke decision is an architectural
            masterpiece for the individual.
          </p>

          <ul className="contact-list">
            <li>Bespoke Atelier, Istanbul</li>
            <li>Available for commission, trunk shows</li>
          </ul>
        </div>

        <form className="contact-form">
          <h3>Inquiry for Bespoke</h3>
          <label>
            <span>Full Name</span>
            <input type="text" name="name" placeholder="Enter your name" />
          </label>
          <label>
            <span>Contact Number</span>
            <input type="text" name="company" placeholder="Your phone number" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" placeholder="hello@example.com" />
          </label>
          <label>
            <span>Preferred Date</span>
            <textarea
              name="message"
              rows="4"
              placeholder="Your preferred appointment date"
            ></textarea>
          </label>
          <button className="button button-dark" type="submit">
            Request Private Consultation
          </button>
        </form>
      </section>

      <footer className="site-footer">
        <div>
          <Link className="brand brand-footer" href="/">
            <span>MA Yagmur</span>
            <span>Textile</span>
          </Link>
          <p>An inquiry in modern bespoke and conscious craft.</p>
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
            <a href="mailto:tekstilyagmur@outlook.com">
              tekstilyagmur@outlook.com
            </a>
            <Link href="/contact">Trunk Shows</Link>
          </div>
          <div>
            <h3>Newsletter</h3>
            <p>Get the latest editorial letters and atelier notes.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
