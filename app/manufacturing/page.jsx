import Link from "next/link";
import MailtoContactForm from "../../components/mailto-contact-form";

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
          <p className="eyebrow">Private Label Shirt Manufacturing — Istanbul</p>
          <h1>Precision Manufacturing at Scale.</h1>
          <p className="lead">
            We manufacture private label shirts with structured production,
            consistent quality, and export-ready execution for global partners.
          </p>
        </div>
      </section>

      <section className="manufacturing-metrics">
        <div>
          <strong>420k</strong>
          <span>Monthly Fabric Capacity</span>
        </div>
        <div>
          <strong>58</strong>
          <span>Export Markets Worldwide</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>OEKO-TEX Certified</span>
        </div>
        <div>
          <strong>24h</strong>
          <span>Rapid Sampling Cycle</span>
        </div>
      </section>

      <section className="atelier-overview" id="craft">
        <div className="atelier-overview-media">
          <img src="/assets/heritage.jpg" alt="Hand holding wool fabric detail" />
        </div>
        <div className="atelier-overview-copy">
          <p className="eyebrow">Workshop Culture</p>
          <h2>Manufacturing discipline rooted in craftsmanship.</h2>
          <p>
            Our production floor combines hands-on textile expertise with
            structured manufacturing processes. Each collection is developed
            through controlled sampling, monitored sewing lines, and consistent
            finishing standards.
          </p>
          <p>
            What clients experience as consistency is built from daily
            discipline - line checks, fabric inspection, fit validation, and a
            culture that treats every order as a long-term partnership.
          </p>
          <div className="atelier-overview-stats">
            <div>
              <strong>150+</strong>
              <span>Production Specialists</span>
            </div>
            <div>
              <strong>Istanbul</strong>
              <span>Integrated Workshop - Istanbul</span>
            </div>
          </div>
        </div>
      </section>

      <section className="quality-section">
        <div className="quality-heading">
          <p className="eyebrow">Quality & Production Control</p>
          <h2>Structured controls across every stage of production.</h2>
        </div>

        <div className="quality-grid">
          <article className="quality-card quality-card-light">
            <div className="quality-icon" aria-hidden="true">
              <span className="quality-icon-badge"></span>
              <span className="quality-icon-check"></span>
            </div>
            <h3>Multi-Point Inspection</h3>
            <p>
              Fabric, stitching, measurements, and finishing are checked at
              multiple stages before packing.
            </p>
          </article>

          <article className="quality-card quality-card-dark">
            <strong>Inline Checks</strong>
            <p>
              Quality control continues throughout cutting, sewing, finishing,
              and final preparation for shipment.
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
                Material flow, line control, and finishing follow a structured
                process throughout production.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="precision-band">
        <div className="precision-copy">
          <p className="eyebrow">Production Infrastructure</p>
          <h2>Production capacity built for private label shirting.</h2>
          <p>
            Our facility combines hands-on workshop attention with structured
            production capacity, allowing us to move from sampling to bulk
            manufacturing while maintaining control over fit, finishing, and
            consistency.
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
              Structured production lines prepared for recurring shirt orders,
              seasonal programs, and repeat manufacturing.
            </span>
          </div>
          <div>
            <strong>Packing Readiness</strong>
            <span>
              Orders are prepared with organized finishing, folding, and packing
              standards for shipment coordination by the client or logistics
              partner.
            </span>
          </div>
        </div>
      </section>

      <section className="principles-section">
        <h2>What makes our production reliable.</h2>
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
              Consistent results from sampling to bulk production and repeat
              orders.
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
              Flexible production tailored to fit, finish, branding, and client
              requirements.
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
              Full visibility from sourcing and sampling to packing and
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
              Stable production planning and long-term support for repeat orders
              and seasonal collections.
            </p>
          </article>
        </div>
      </section>

      <section className="atelier-cta">
        <h2>Start Your Next Production with Us.</h2>
        <p>
          Request a swatch kit, discuss your development timeline, or connect
          with our team to start your production process.
        </p>
        <div className="atelier-cta-actions">
          <Link className="button" href="/contact">
            Request Swatch Kit
          </Link>
          <Link className="button button-ghost" href="/contact">
            Talk to a Specialist
          </Link>
        </div>
      </section>

      <section className="contact-banner" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Manufacturing Contact</p>
          <h2>Start Your Production Inquiry</h2>
          <p>
            Connect with our team to discuss your project, sourcing needs, and
            production timeline.
          </p>

          <ul className="contact-list">
            <li>Istanbul Manufacturing Base - Turkey</li>
            <li>Visits by Appointment</li>
          </ul>
        </div>

        <MailtoContactForm
          className="contact-form"
          title="Project Inquiry"
          subject="Manufacturing Inquiry"
          buttonLabel="Request Consultation"
          fields={[
            {
              label: "Full Name",
              name: "name",
              type: "text",
              placeholder: "Enter your name",
              required: true,
            },
            {
              label: "Phone Number",
              name: "phone",
              type: "text",
              placeholder: "Your phone number",
            },
            {
              label: "Email Address",
              name: "email",
              type: "email",
              placeholder: "hello@example.com",
              required: true,
            },
            {
              label: "Project Details",
              name: "message",
              type: "textarea",
              rows: 4,
              placeholder:
                "Tell us about your collection, quantities, and timeline.",
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
            <a href="mailto:info@mayagmurtextile.com">
              info@mayagmurtextile.com
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
