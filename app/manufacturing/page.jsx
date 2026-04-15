import Link from "next/link";

export const metadata = {
  title: "Manufacturing",
  description:
    "Explore MA Yagmur Textile's manufacturing capabilities, workshop discipline, quality control process, and export-ready textile production in Istanbul.",
  alternates: {
    canonical: "/manufacturing",
  },
  openGraph: {
    title: "Manufacturing | MA Yagmur Textile Istanbul",
    description:
      "See the workshop culture, quality systems, and production infrastructure behind MA Yagmur Textile.",
    url: "/manufacturing",
    type: "website",
  },
  twitter: {
    title: "Manufacturing | MA Yagmur Textile Istanbul",
    description:
      "See the workshop culture, quality systems, and production infrastructure behind MA Yagmur Textile.",
  },
};

export default function ManufacturingPage() {
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
        name: "Manufacturing",
        item: "https://www.mayagmurtextile.com/manufacturing",
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
      <section className="manufacturing-hero">
        <video
          src="/assets/atelier/WhatsApp Video 2026-04-11 at 00.16.35.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Manufacturing workshop overview"
        ></video>
        <div className="manufacturing-hero-overlay">
          <p className="eyebrow">Shirt Manufacturing Istanbul</p>
          <h1>
            Precision at
            <em>Global Scale.</em>
          </h1>
          <p className="lead">
            We manufacture private label shirt collections with disciplined
            workshop control, structured production systems, and export-ready
            execution for wholesale partners.
          </p>
        </div>
      </section>

      <section className="manufacturing-metrics">
        <div>
          <strong>420k</strong>
          <span>Monthly Meterage Capacity</span>
        </div>
        <div>
          <strong>58</strong>
          <span>Global Export Markets</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>Oeko-Tex Certified</span>
        </div>
        <div>
          <strong>24hr</strong>
          <span>Rapid Prototyping Cycle</span>
        </div>
      </section>

      <section className="atelier-overview" id="craft">
        <div className="atelier-overview-media">
          <img src="/assets/heritage.jpg" alt="Hand holding wool fabric detail" />
        </div>
        <div className="atelier-overview-copy">
          <p className="eyebrow">Workshop Culture</p>
          <h2>Manufacturing discipline rooted in workshop care.</h2>
          <p>
            Our production floor combines hands-on textile know-how with a
            structured manufacturing rhythm. Each shirt program is developed
            through controlled sampling, monitored sewing lines, and repeatable
            finishing standards.
          </p>
          <p>
            What clients experience as consistency is built from daily
            discipline: line checks, fabric inspection, fit validation, and a
            workshop culture that treats every order as a long-term account.
          </p>
          <div className="atelier-overview-stats">
            <div>
              <strong>150+</strong>
              <span>Production Specialists</span>
            </div>
            <div>
              <strong>Istanbul</strong>
              <span>Integrated Workshop Base</span>
            </div>
          </div>
        </div>
      </section>

      <section className="quality-section">
        <div className="quality-heading">
          <p className="eyebrow">Quality Control</p>
          <h2>Quality systems that support every production run.</h2>
        </div>

        <div className="quality-grid">
          <article className="quality-card quality-card-light">
            <div className="quality-icon" aria-hidden="true">
              <span className="quality-icon-badge"></span>
              <span className="quality-icon-check"></span>
            </div>
            <h3>Zero-Defect Protocol</h3>
            <p>
              Incoming fabric, inline sewing, and final finishing are all
              checked through a multi-point inspection sequence before packing.
            </p>
          </article>

          <article className="quality-card quality-card-dark">
            <strong>99.8%</strong>
            <p>
              On-time and quality-aligned delivery rate across private label and
              wholesale accounts.
            </p>
          </article>

          <article className="quality-card quality-card-image">
            <video
              src="/assets/atelier/Ekran Resmi 2026-04-15 00.20.04.mp4"
              autoPlay
              muted
              loop
              playsInline
              aria-label="Laboratory and inspection process"
            ></video>
            <div className="quality-overlay">
              <h3>Lab Inspection</h3>
            </div>
          </article>

          <article className="quality-card quality-card-image">
            <video
              src="/assets/atelier/WhatsApp Video 2026-04-11 at 00.09.07.mp4"
              autoPlay
              muted
              loop
              playsInline
              aria-label="Production monitoring detail"
            ></video>
            <div className="quality-overlay">
              <h3>Production Monitoring</h3>
              <p>
                Material flow, machine calibration, and line supervision stay
                aligned throughout the full run.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="precision-band">
        <div className="precision-copy">
          <p className="eyebrow">Infrastructure</p>
          <h2>Industrial precision built for shirting programs.</h2>
          <p>
            Our facility connects workshop attention with production capacity,
            allowing us to move from sample development to full shipment
            planning without losing control over finish, fit, or timing.
          </p>
        </div>

        <div className="precision-gallery">
          <video
            src="/assets/atelier/WhatsApp Video 2026-04-11 at 00.08.58.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Industrial weaving detail"
          ></video>
          <video
            src="/assets/atelier/WhatsApp Video 2026-04-11 at 00.17.43.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Manufacturing machinery detail"
          ></video>
        </div>

        <div className="precision-details">
          <div>
            <strong>Capacity</strong>
            <span>
              Structured production lines prepared for recurring shirt orders
              and seasonal drops.
            </span>
          </div>
          <div>
            <strong>Logistics</strong>
            <span>
              Export-ready dispatch to EU, UK, Dubai, and North America with
              packing discipline built in.
            </span>
          </div>
        </div>
      </section>

      <section className="principles-section">
        <h2>What keeps the factory floor reliable.</h2>
        <div className="principles-grid">
          <article className="principle-card">
            <div className="principle-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M6 18V8.5L12 5l6 3.5V18" />
                <path d="M9 10.5h6" />
                <path d="M9 14h6" />
                <path d="M12 18V5" />
              </svg>
            </div>
            <h3>Consistency</h3>
            <p>
              Repeatable results across first samples, bulk runs, and
              replenishment orders.
            </p>
          </article>
          <article className="principle-card">
            <div className="principle-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 4v4" />
                <path d="M12 16v4" />
                <path d="M4 12h4" />
                <path d="M16 12h4" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </div>
            <h3>Adaptability</h3>
            <p>
              Programs can flex around fit, finish, branding, and
              account-specific requirements.
            </p>
          </article>
          <article className="principle-card">
            <div className="principle-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 3l7 4v5c0 4.2-2.7 7.7-7 9-4.3-1.3-7-4.8-7-9V7l7-4Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3>Traceability</h3>
            <p>
              Clear oversight from sourcing and sampling to packing and outbound
              shipment.
            </p>
          </article>
          <article className="principle-card">
            <div className="principle-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M4 7h16" />
                <path d="M7 4v6" />
                <path d="M17 4v6" />
                <path d="M6 12h12v7H6z" />
              </svg>
            </div>
            <h3>Continuity</h3>
            <p>
              Stable line planning and long-term production support for repeat
              accounts and seasonal calendars.
            </p>
          </article>
        </div>
      </section>

      <section className="atelier-cta">
        <h2>Plan your next production run with us.</h2>
        <p>
          Request a swatch book, discuss your development calendar, or book a
          guided manufacturing introduction with our team.
        </p>
        <div className="atelier-cta-actions">
          <Link className="button" href="/contact">
            Request Swatch Kit
          </Link>
          <Link className="button button-ghost" href="/contact">
            Consult a Specialist
          </Link>
        </div>
      </section>

      <section className="contact-banner" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Manufacturing Contact</p>
          <h2>
            Begin your
            <em>production</em>
            inquiry.
          </h2>
          <p>
            Reach our Istanbul office for development meetings, sourcing
            conversations, or a guided manufacturing introduction.
          </p>

          <ul className="contact-list">
            <li>Istanbul Manufacturing Base, Turkey</li>
            <li>Appointments by confirmation</li>
          </ul>
        </div>

        <form className="contact-form">
          <h3>Inquiry Form</h3>
          <label>
            <span>Full Name</span>
            <input type="text" name="name" placeholder="Enter your name" />
          </label>
          <label>
            <span>Contact Number</span>
            <input type="text" name="phone" placeholder="Your phone number" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" placeholder="hello@example.com" />
          </label>
          <label>
            <span>Request</span>
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us about your project"
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
          <p>Production-led shirting programs for premium brands and private label partners.</p>
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
