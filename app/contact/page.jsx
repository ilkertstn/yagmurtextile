import Link from "next/link";
import MailtoContactForm from "../../components/mailto-contact-form";

export const metadata = {
  title: "Contact",
  description:
    "Contact MA Yagmur Textile for private label shirt manufacturing, sampling, production planning, and project inquiries.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | MA Yagmur Textile Istanbul",
    description:
      "Reach MA Yagmur Textile for production inquiries, sampling discussions, and private label shirt manufacturing.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    title: "Contact | MA Yagmur Textile Istanbul",
    description:
      "Reach MA Yagmur Textile for production inquiries, sampling discussions, and private label shirt manufacturing.",
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
          <p className="eyebrow">Production Contact</p>
          <h1>
            Start your next
            production
            conversation.
          </h1>
          <p className="lead">
            Connect with our team for private label shirt manufacturing,
            sampling, material discussions, and production planning.
          </p>
        </div>

        <div className="contact-page-visual">
          <div className="contact-scene">
            <div className="contact-scene-lamp"></div>
            <div className="contact-scene-copy">
              <strong>Private Label</strong>
              <strong>Shirt Manufacturing</strong>
              <span>Built for growing brands</span>
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
            <h2>Project Inquiry</h2>
          </div>

          <MailtoContactForm
            className="contact-page-form"
            groupedFieldCount={2}
            groupClassName="contact-page-form-grid"
            subject="Project Inquiry"
            buttonLabel="Send Inquiry"
            buttonClassName="button"
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
                label: "Inquiry Type",
                name: "inquiry_type",
                type: "select",
                options: [
                  "Private Label Production",
                  "Sampling Request",
                  "Material Development",
                  "Bulk Order",
                ],
                defaultValue: "Private Label Production",
                required: true,
              },
              {
                label: "Project Details",
                name: "message",
                type: "textarea",
                rows: 6,
                placeholder:
                  "Tell us about your collection, quantities, materials, and timeline.",
                required: true,
              },
            ]}
          />
        </div>

        <aside className="contact-page-sidebar">
          <article className="contact-detail-card">
            <h3>Istanbul Headquarters</h3>
            <p>Caglayan Mahallesi, Park Sokak No: 11/5</p>
            <p>Ahmet Bilgin Is Hani Kat: 5</p>
            <p>Istanbul, Turkiye</p>
            <a href="tel:+902122301316">+90 212 230 13 16</a>
            <a href="mailto:info@mayagmurtextile.com">
              info@mayagmurtextile.com
            </a>
          </article>

          <article className="contact-detail-card">
            <h3>The Workshop &amp; Factory</h3>
            <p>Caglayan Mahallesi, Park Sokak No: 11/5</p>
            <p>Ahmet Bilgin Is Hani Kat: 4</p>
            <p>Istanbul, Turkiye</p>
            <p className="contact-small-note">Visits by appointment only.</p>
          </article>

          <article className="contact-detail-card">
            <h3>Production Support</h3>
            <div className="contact-sales-grid">
              <div>
                <span>Sampling</span>
                <p>Development, fitting, and approval support for new collections.</p>
              </div>
              <div>
                <span>Production Planning</span>
                <p>Structured coordination for quantities, timelines, and repeat orders.</p>
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
            Private label shirt manufacturing support for brands seeking
            reliable production from Istanbul.
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
            <h3>Contact</h3>
            <a href="tel:+902122301316">+90 212 230 13 16</a>
            <a href="mailto:info@mayagmurtextile.com">
              info@mayagmurtextile.com
            </a>
          </div>
          <div>
            <h3>Capabilities</h3>
            <p>Sampling, private label development, bulk production, and packing readiness.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
