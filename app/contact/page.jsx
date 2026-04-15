import Link from "next/link";

export const metadata = {
  title: "Contact",
  description:
    "Contact MA Yagmur Textile for wholesale inquiries, private label shirt development, manufacturing planning, and textile production partnerships.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | MA Yagmur Textile Istanbul",
    description:
      "Reach MA Yagmur Textile for manufacturing inquiries, sampling discussions, and wholesale partnerships.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    title: "Contact | MA Yagmur Textile Istanbul",
    description:
      "Reach MA Yagmur Textile for manufacturing inquiries, sampling discussions, and wholesale partnerships.",
  },
};

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.mayagmurtextile.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: "https://www.mayagmurtextile.com/contact",
      },
    ],
  };

  return (
    <main className="subpage-main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <section className="contact-page-hero">
        <div className="contact-page-copy">
          <p className="eyebrow">Inquiries &amp; Partnerships</p>
          <h1>
            Let us weave
            your vision
            into reality.
          </h1>
          <p className="lead">
            Reach us for wholesale inquiries, private label development,
            sampling discussions, and export-ready production planning.
          </p>
        </div>

        <div className="contact-page-visual">
          <div className="contact-scene">
            <div className="contact-scene-lamp"></div>
            <div className="contact-scene-copy">
              <strong>Premium Textile</strong>
              <strong>Textile Workshop</strong>
              <span>Made for modern labels</span>
            </div>
            <div className="contact-scene-objects">
              <span className="scene-block scene-block-small"></span>
              <span className="scene-roll"></span>
              <span className="scene-box"></span>
              <span className="scene-sheet"></span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-page-main">
        <div className="contact-form-shell">
          <div className="contact-form-heading">
            <h2>General &amp; Wholesale Inquiries</h2>
          </div>

          <form className="contact-page-form">
            <div className="contact-page-form-grid">
              <label>
                <span>Full Name</span>
                <input type="text" name="name" placeholder="Alexander Vane" />
              </label>
              <label>
                <span>Email Address</span>
                <input
                  type="email"
                  name="email"
                  placeholder="contact@sartorial.com"
                />
              </label>
            </div>

            <label>
              <span>Inquiry Type</span>
              <select name="inquiry_type" defaultValue="General Inquiry">
                <option>General Inquiry</option>
                <option>Private Label Development</option>
                <option>Wholesale Partnership</option>
                <option>Sampling Request</option>
              </select>
            </label>

            <label>
              <span>Your Message</span>
              <textarea
                name="message"
                rows="6"
                placeholder="Describe your project or requirements..."
              ></textarea>
            </label>

            <button className="button" type="submit">
              Send Inquiry
            </button>
          </form>
        </div>

        <aside className="contact-page-sidebar">
          <article className="contact-detail-card">
            <h3>Istanbul Headquarters</h3>
            <p>Caglayan Mahallesi, Park Sokak No: 11/5</p>
            <p>Ahmet Bilgin Is Hani Kat: 5</p>
            <p>Istanbul, Turkiye</p>
            <a href="tel:+902122301316">+90 212 230 13 16</a>
            <a href="mailto:tekstilyagmur@outlook.com">
              tekstilyagmur@outlook.com
            </a>
          </article>

          <article className="contact-detail-card">
            <h3>The Workshop &amp; Factory</h3>
            <p>Organize Sanayi Bolgesi, 4. Cadde No: 88</p>
            <p>Esenyurt, Istanbul, Turkiye</p>
            <p className="contact-small-note">Site visits by appointment only.</p>
          </article>

          <article className="contact-detail-card">
            <h3>Global Sales</h3>
            <div className="contact-sales-grid">
              <div>
                <span>London Office</span>
                <p>Savile Row, W1S 3PR</p>
              </div>
              <div>
                <span>Milan Showroom</span>
                <p>Via Montenapoleone, 20121</p>
              </div>
            </div>
          </article>

          <div className="contact-socials">
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">Pinterest</a>
          </div>
        </aside>
      </section>

      <section className="contact-map-section">
        <div className="contact-map-surface">
          <iframe
            src="https://www.google.com/maps?q=Ahmet%20Bilgin%20Is%20Hani%2C%20Park%20Sokak%2011%2F5%2C%20Caglayan%2C%20Sisli%2C%20Istanbul%2C%20Turkey&z=18&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="MA Yagmur Textile headquarters map"
          ></iframe>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <Link className="brand brand-footer" href="/">
            <span>MA Yagmur</span>
            <span>Textile</span>
          </Link>
          <p>
            Crafting excellence in every thread. Turkiye&apos;s premier textile
            destination for global luxury brands.
          </p>
        </div>

        <div className="footer-columns">
          <div>
            <h3>Navigation</h3>
            <Link href="/">Home</Link>
            <Link href="/manufacturing">Manufacturing</Link>
            <Link href="/collection">Collection</Link>
          </div>
          <div>
            <h3>Business</h3>
            <Link href="/contact">Press Kit</Link>
            <Link href="/contact">Wholesale Portal</Link>
          </div>
          <div>
            <h3>Newsletter</h3>
            <p>Get the latest production notes and collection updates.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
