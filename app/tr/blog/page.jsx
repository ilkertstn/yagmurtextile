import Link from "next/link";

export const metadata = {
  title: "Gömlek Stil Rehberleri ve Üretim Blogu",
  description:
    "MA Yağmur Tekstil'den gömlek stil rehberleri, kumaş açıklamaları ve üretim notları.",
  alternates: {
    canonical: "/tr/blog",
    languages: {
      en: "https://www.mayagmurtextile.com/blog",
      tr: "https://www.mayagmurtextile.com/tr/blog",
      "x-default": "https://www.mayagmurtextile.com/blog",
    },
  },
  openGraph: {
    title: "Blog | MA Yağmur Tekstil",
    description:
      "MA Yağmur Tekstil'den gömlek stil rehberleri, kumaş açıklamaları ve üretim notları.",
    url: "/tr/blog",
    type: "website",
  },
  twitter: {
    title: "Blog | MA Yağmur Tekstil",
    description:
      "MA Yağmur Tekstil'den gömlek stil rehberleri, kumaş açıklamaları ve üretim notları.",
  },
};

const posts = [
  {
    slug: "shirt-sleeve-types",
    title: "Gömlek Kol Tipleri Nelerdir? Kesim ve Manşet Rehberi",
    excerpt:
      "Kol uzunluğu, manşet tipi ve kesim şekli bir gömleğin hem duruşunu hem kullanım amacını belirler. Barrel manşetten raglan kesime kadar tüm kol tipleri.",
  },
  {
    slug: "summer-shirt-guide",
    title: "Yazlık Gömlek Seçerken Nelere Dikkat Etmeli? Kumaş ve Stil Rehberi",
    excerpt:
      "Sıcak havada ferah kalmak kumaşa, kesime ve renge bağlı. Bir sonraki yazlık gömlek alışverişinizden önce bilmeniz gerekenler.",
  },
];

export default function TurkishBlogIndexPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://www.mayagmurtextile.com/tr" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mayagmurtextile.com/tr/blog" },
    ],
  };

  return (
    <main className="subpage-main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="blog-hero">
        <p className="eyebrow">Blog</p>
        <h1>Gömlek stil rehberleri ve üretim notları.</h1>
        <p className="lead">
          Kumaş açıklamaları, kesim ve konstrüksiyon rehberleri, atölyeden
          notlar.
        </p>
      </section>

      <section className="blog-grid">
        {posts.map((post) => (
          <article className="blog-card" key={post.slug}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <Link className="blog-card-link" href={`/tr/blog/${post.slug}`}>
              Yazıyı Oku →
            </Link>
          </article>
        ))}
      </section>

      <footer className="site-footer">
        <div>
          <Link className="brand brand-footer" href="/tr">
            <span>MA Yagmur</span>
            <span>Textile</span>
          </Link>
          <p>Premium markalar ve private label iş ortakları için gömlek üretim programları.</p>
        </div>

        <div className="footer-columns">
          <div>
            <h3>Keşfet</h3>
            <Link href="/tr">Ana Sayfa</Link>
            <Link href="/tr/manufacturing">Üretim</Link>
            <Link href="/tr/collection">Koleksiyon</Link>
            <Link href="/tr/blog">Blog</Link>
          </div>
          <div>
            <h3>İletişim</h3>
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
            <Link href="/tr/contact">Randevu / Talep</Link>
          </div>
          <div>
            <h3>Üretim</h3>
            <p>Erkek ve kadın gömlekleri, numune, toplu üretim ve ihracata hazır paketleme.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
