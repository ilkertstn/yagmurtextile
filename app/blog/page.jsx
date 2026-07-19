import Link from "next/link";

export const metadata = {
  title: "Shirt Style Guides & Manufacturing Blog",
  description:
    "Shirt style guides, fabric explainers, and manufacturing insights from MA Yagmur Textile.",
  alternates: {
    canonical: "/blog",
    languages: {
      en: "https://www.mayagmurtextile.com/blog",
      tr: "https://www.mayagmurtextile.com/tr/blog",
      "x-default": "https://www.mayagmurtextile.com/blog",
    },
  },
  openGraph: {
    title: "Blog | MA Yagmur Textile",
    description:
      "Shirt style guides, fabric explainers, and manufacturing insights from MA Yagmur Textile.",
    url: "/blog",
    type: "website",
  },
  twitter: {
    title: "Blog | MA Yagmur Textile",
    description:
      "Shirt style guides, fabric explainers, and manufacturing insights from MA Yagmur Textile.",
  },
};

const posts = [
  {
    slug: "shirt-sleeve-types",
    title: "Shirt Sleeve Types Explained: A Complete Guide to Cuffs, Lengths & Styles",
    excerpt:
      "Length, cuff style, and cut all shape how a shirt looks and where you can wear it. Here's a full breakdown of sleeve types, from barrel cuffs to raglan sleeves.",
  },
  {
    slug: "summer-shirt-guide",
    title: "How to Choose the Perfect Summer Shirt: A Fabric & Style Guide",
    excerpt:
      "Staying cool and sharp in summer comes down to three things: fabric, fit, and color. Here's what to look for before your next summer shirt purchase.",
  },
];

export default function BlogIndexPage() {
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
        name: "Blog",
        item: "https://www.mayagmurtextile.com/blog",
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
      <section className="blog-hero">
        <p className="eyebrow">Journal</p>
        <h1>Shirt style guides & manufacturing notes.</h1>
        <p className="lead">
          Fabric explainers, fit and construction guides, and notes from the
          workshop floor.
        </p>
      </section>

      <section className="blog-grid">
        {posts.map((post) => (
          <article className="blog-card" key={post.slug}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <Link className="blog-card-link" href={`/blog/${post.slug}`}>
              Read Article →
            </Link>
          </article>
        ))}
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
