import Link from "next/link";
import MailtoContactForm from "../../components/mailto-contact-form";

export const metadata = {
  title: "Collection",
  description:
    "Explore shirt collections, private label programs, and manufacturing-ready product lines from MA Yagmur Textile for wholesale and contract production.",
  alternates: {
    canonical: "/collection",
  },
  openGraph: {
    title: "Collection | MA Yagmur Textile Shirt Programs",
    description:
      "Browse formal, casual, linen, and uniform shirt programs developed for private label and wholesale partners.",
    url: "/collection",
    type: "website",
  },
  twitter: {
    title: "Collection | MA Yagmur Textile Shirt Programs",
    description:
      "Browse formal, casual, linen, and uniform shirt programs developed for private label and wholesale partners.",
  },
};

export default function CollectionPage() {
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
        name: "Collection",
        item: "https://www.mayagmurtextile.com/collection",
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
      <section className="products-hero">
        <div className="products-hero-copy">
          <p className="eyebrow">Private label shirt programs</p>
          <h1>Shirt Collections Built for Modern Manufacturing.</h1>
          <p className="lead">
            From formal shirting to relaxed resort capsules, we develop
            production-ready shirt lines for premium brands that need strong
            construction, flexible development, and dependable scale.
          </p>
          <div className="products-hero-actions">
            <a className="button" href="#programs">
              View Programs
            </a>
            <Link className="button button-ghost" href="/contact">
              Request Lookbook
            </Link>
          </div>
        </div>

        <div className="products-hero-media">
          <div className="products-hero-frame products-hero-frame-large">
            <video
              src="/assets/atelier/WhatsApp Video 2026-04-11 at 00.17.43.mp4"
              autoPlay
              muted
              loop
              playsInline
              aria-label="Shirt manufacturing machinery detail"
            ></video>
          </div>
          <div className="products-hero-frame products-hero-frame-small">
            <img src="/assets/kumas-turu.png" alt="Shirting material selection" />
          </div>
        </div>
      </section>

      <section className="products-intro" id="programs">
        <div className="products-intro-heading">
          <p className="eyebrow">Collection Direction</p>
          <h2>
            Four shirt programs shaped for wholesale, private label, and
            contract production.
          </h2>
        </div>
        <div className="products-intro-stats">
          <div>
            <strong>4</strong>
            <span>product families</span>
          </div>
          <div>
            <strong>Low MOQ</strong>
            <span>for sampling and launch runs</span>
          </div>
          <div>
            <strong>Flexible</strong>
            <span>fit, collar, cuff, and finishing options</span>
          </div>
        </div>
      </section>

      <section className="program-grid">
        <article className="program-card program-card-featured">
          <div className="program-card-media">
            <video
              src="/assets/atelier/WhatsApp Video 2026-04-11 at 00.08.58.mp4"
              autoPlay
              muted
              loop
              playsInline
              aria-label="Formal shirt program process"
            ></video>
          </div>
          <div className="program-card-copy">
            <p className="eyebrow">Program 01</p>
            <h3>Formal Shirting</h3>
            <p>
              Crisp poplin, satin-touch finishes, and clean tailoring details
              developed for elevated dress shirt collections and ceremony-led
              programs.
            </p>
            <dl className="program-specs">
              <div>
                <dt>Fabric Base</dt>
                <dd>Poplin, pinpoint, stretch cotton</dd>
              </div>
              <div>
                <dt>Fit Options</dt>
                <dd>Slim, regular, contemporary</dd>
              </div>
              <div>
                <dt>MOQ</dt>
                <dd>300 pcs per color</dd>
              </div>
              <div>
                <dt>Lead Time</dt>
                <dd>6 to 8 weeks</dd>
              </div>
            </dl>
          </div>
        </article>

        <article className="program-card">
          <div className="program-card-media">
            <img
              src="/assets/heritage.jpg"
              alt="Casual shirting construction detail"
            />
          </div>
          <div className="program-card-copy">
            <p className="eyebrow">Program 02</p>
            <h3>Casual Shirts</h3>
            <p>
              Relaxed silhouettes, washed surfaces, and easier structure for
              off-duty collections that still require disciplined finishing.
            </p>
            <dl className="program-specs">
              <div>
                <dt>Fabric Base</dt>
                <dd>Oxford, twill, brushed cotton</dd>
              </div>
              <div>
                <dt>Detailing</dt>
                <dd>Button-down collars, utility pockets</dd>
              </div>
              <div>
                <dt>MOQ</dt>
                <dd>250 pcs per style</dd>
              </div>
              <div>
                <dt>Lead Time</dt>
                <dd>5 to 7 weeks</dd>
              </div>
            </dl>
          </div>
        </article>

        <article className="program-card">
          <div className="program-card-media">
            <video
              src="/assets/atelier/WhatsApp Video 2026-04-11 at 00.09.14.mp4"
              autoPlay
              muted
              loop
              playsInline
              aria-label="Resort and linen shirt handling"
            ></video>
          </div>
          <div className="program-card-copy">
            <p className="eyebrow">Program 03</p>
            <h3>Linen &amp; Summer Weight</h3>
            <p>
              Airy constructions and breathable blends for resort, summer, and
              Mediterranean-ready collections with private label flexibility
              built in.
            </p>
            <dl className="program-specs">
              <div>
                <dt>Fabric Base</dt>
                <dd>Linen, linen-cotton, voile</dd>
              </div>
              <div>
                <dt>Finishing</dt>
                <dd>Garment wash, soft touch, enzyme</dd>
              </div>
              <div>
                <dt>MOQ</dt>
                <dd>200 pcs per style</dd>
              </div>
              <div>
                <dt>Lead Time</dt>
                <dd>4 to 6 weeks</dd>
              </div>
            </dl>
          </div>
        </article>

        <article className="program-card program-card-dark">
          <div className="program-card-copy">
            <p className="eyebrow">Program 04</p>
            <h3>Corporate &amp; Uniform Shirts</h3>
            <p>
              High-repeat production for hospitality, aviation, retail, and
              officewear projects where consistency, continuity, and re-order
              discipline matter most.
            </p>
            <dl className="program-specs">
              <div>
                <dt>Fabric Base</dt>
                <dd>Easy-care cotton blends</dd>
              </div>
              <div>
                <dt>Options</dt>
                <dd>Logo embroidery, branded trims, packaging</dd>
              </div>
              <div>
                <dt>MOQ</dt>
                <dd>500 pcs per style</dd>
              </div>
              <div>
                <dt>Lead Time</dt>
                <dd>6 to 10 weeks</dd>
              </div>
            </dl>
          </div>
        </article>
      </section>

      <section className="products-band">
        <div className="products-band-copy">
          <p className="eyebrow">Development Capabilities</p>
          <h2>
            Every program can be tuned to your collar, cuff, fit, and finish
            strategy.
          </h2>
        </div>

        <div className="products-band-grid">
          <article className="band-card">
            <strong>Collar Library</strong>
            <p>
              Spread, semi-spread, button-down, hidden button, grandad, and
              camp collar constructions.
            </p>
          </article>
          <article className="band-card">
            <strong>Cuff Engineering</strong>
            <p>
              Single, double, convertible, rounded, and square cuff variations
              matched to target market needs.
            </p>
          </article>
          <article className="band-card">
            <strong>Private Label Ready</strong>
            <p>
              Main label, care label, hangtag, packaging, folding standards, and
              shipment preparation handled in-house.
            </p>
          </article>
        </div>
      </section>

      <section className="products-process">
        <div className="section-heading section-heading-stack">
          <div>
            <p className="eyebrow">Production Rhythm</p>
            <h2>How a shirt line moves from concept to shipment.</h2>
          </div>
          <p className="products-process-note">
            Built for brands that need clarity at sampling stage and discipline
            at bulk stage.
          </p>
        </div>

        <div className="process-steps">
          <article className="process-step">
            <span>01</span>
            <h3>Range Alignment</h3>
            <p>
              We define category, target fit, price architecture, and fabric
              direction with your team.
            </p>
          </article>
          <article className="process-step">
            <span>02</span>
            <h3>Sampling &amp; Fitting</h3>
            <p>
              Prototype development, construction adjustments, and fit approvals
              are handled before bulk lock.
            </p>
          </article>
          <article className="process-step">
            <span>03</span>
            <h3>Bulk Production</h3>
            <p>
              Cutting, sewing, finishing, quality control, and packing flow
              through the same monitored system.
            </p>
          </article>
          <article className="process-step">
            <span>04</span>
            <h3>Dispatch &amp; Reorder</h3>
            <p>
              Export coordination, replenishment planning, and continuity
              support remain available after first delivery.
            </p>
          </article>
        </div>
      </section>

      <section className="contact-banner contact-banner-products" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Start An Inquiry</p>
          <h2>
            Build your next
            <em>shirt program</em>
            with us.
          </h2>
          <p>
            Share your target category, quantity range, and launch timing. We
            will guide you toward the right program, sampling route, and
            production calendar.
          </p>

          <ul className="contact-list">
            <li>Private label and wholesale support</li>
            <li>Sampling, fitting, and production planning</li>
          </ul>
        </div>

        <MailtoContactForm
          className="contact-form"
          title="Production Inquiry"
          subject="Product Consultation Inquiry"
          buttonLabel="Request Product Consultation"
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
              placeholder: "Your company name",
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
                "Tell us the product family, estimated quantity, and target delivery window",
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
            <Link href="/contact">Product Inquiry</Link>
          </div>
          <div>
            <h3>Programs</h3>
            <p>Formal shirting, casual lines, summer programs, and uniform production.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
