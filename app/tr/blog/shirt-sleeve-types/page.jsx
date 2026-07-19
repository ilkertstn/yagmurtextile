import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Gömlek Kol Tipleri Nelerdir?",
  description:
    "Gömlek kol tiplerini, manşet çeşitlerini ve doğru kesim seçimini öğrenin. Set-in, raglan, dolman kol ve manşet rehberi.",
  alternates: {
    canonical: "/tr/blog/shirt-sleeve-types",
    languages: {
      en: "https://www.mayagmurtextile.com/blog/shirt-sleeve-types",
      tr: "https://www.mayagmurtextile.com/tr/blog/shirt-sleeve-types",
      "x-default": "https://www.mayagmurtextile.com/blog/shirt-sleeve-types",
    },
  },
  openGraph: {
    title: "Gömlek Kol Tipleri Nelerdir? | MA Yağmur Tekstil",
    description:
      "Gömlek kol tiplerini, manşet çeşitlerini ve doğru kesim seçimini öğrenin. Set-in, raglan, dolman kol ve manşet rehberi.",
    url: "/tr/blog/shirt-sleeve-types",
    type: "article",
  },
  twitter: {
    title: "Gömlek Kol Tipleri Nelerdir? | MA Yağmur Tekstil",
    description:
      "Gömlek kol tiplerini, manşet çeşitlerini ve doğru kesim seçimini öğrenin. Set-in, raglan, dolman kol ve manşet rehberi.",
  },
};

export default function TurkishShirtSleeveTypesPost() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://www.mayagmurtextile.com/tr" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mayagmurtextile.com/tr/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Gömlek Kol Tipleri Nelerdir?",
        item: "https://www.mayagmurtextile.com/tr/blog/shirt-sleeve-types",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Gömlek Kol Tipleri Nelerdir? Kesim ve Manşet Rehberi",
    description:
      "Gömlek kol tiplerini, manşet çeşitlerini ve doğru kesim seçimini öğrenin. Set-in, raglan, dolman kol ve manşet rehberi.",
    image: "https://www.mayagmurtextile.com/assets/products/shirts-2.png",
    datePublished: "2026-07-19",
    dateModified: "2026-07-19",
    author: { "@type": "Organization", name: "MA Yağmur Tekstil" },
    publisher: {
      "@type": "Organization",
      name: "MA Yağmur Tekstil",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mayagmurtextile.com/assets/logo.png",
      },
    },
    mainEntityOfPage: "https://www.mayagmurtextile.com/tr/blog/shirt-sleeve-types",
    inLanguage: "tr",
  };

  return (
    <main className="subpage-main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="article-hero">
        <p className="eyebrow">Stil Rehberi</p>
        <h1>Gömlek Kol Tipleri Nelerdir? Kesim ve Manşet Rehberi</h1>
      </section>

      <section className="article-body">
        <p>
          Bir gömleği diğerinden ayıran en çok gözden kaçan detay hangisi?
          Kumaş değil, yaka değil — kol. Kol uzunluğu, manşet tipi ve kesim
          şekli hem duruşu hem de kullanım amacını belirler. Bu rehberde
          gömlek kollarını üç boyutuyla (uzunluk, manşet, kesim) inceleyip
          doğru seçimi nasıl yapacağınızı anlatıyoruz.
        </p>

        <figure className="article-figure">
          <Image
            src="/assets/products/shirts-2.png"
            alt="Uzun kollu ve barrel manşetli klasik resmi gömlek"
            width={1123}
            height={1400}
          />
          <figcaption>
            Barrel manşet ve set-in kol yapısına sahip uzun kollu resmi bir
            gömlek.
          </figcaption>
        </figure>

        <h2>Kol Uzunluğuna Göre Tipler</h2>
        <ul>
          <li>
            <strong>Uzun kol:</strong> Resmi ortamlar ve ofis kullanımı için
            standart. Manşetle birlikte katmanlı bir görünüm sağlar.
          </li>
          <li>
            <strong>Kısa kol:</strong> Günlük ve yazlık kullanım için ideal;
            kumaş ne kadar kaliteliyse duruşu o kadar düzgün olur.
          </li>
          <li>
            <strong>3/4 kol (roll-up):</strong> Uzun kolun kıvrılarak
            kısaltılmış hali — hem resmi hem rahat görünüm arasında geçiş
            sağlar.
          </li>
        </ul>

        <h2>Manşet Tiplerine Göre</h2>
        <ul>
          <li>
            <strong>Barrel (düğmeli) manşet:</strong> En yaygın tip; tek veya
            çift düğmeli olabilir, günlük kullanıma uygundur.
          </li>
          <li>
            <strong>Fransız manşet:</strong> Kol düğmesiyle kapanır, özel
            davetler ve smokin gömlekleri için tercih edilir.
          </li>
          <li>
            <strong>Roll-up tab manşet:</strong> Kolu katlayıp sabitlemek
            için özel bir şerit içerir — yazlık ve rahat gömleklerde sık
            görülür.
          </li>
        </ul>

        <div className="article-gallery">
          <figure>
            <Image
              src="/assets/products/shirts-2-close.png"
              alt="Resmi gömlekte barrel manşet ve düğme detayı"
              width={1086}
              height={1448}
            />
            <figcaption>Poplin bir resmi gömlekte barrel manşet detayı.</figcaption>
          </figure>
          <figure>
            <Image
              src="/assets/products/shirts-3-close.png"
              alt="Günlük bir overshirt üzerinde manşet ve düğme detayı"
              width={1086}
              height={1448}
            />
            <figcaption>Günlük bir overshirt üzerinde manşet detayı.</figcaption>
          </figure>
        </div>

        <h2>Kesime Göre Kol Tipleri</h2>
        <ul>
          <li>
            <strong>Set-in kol:</strong> Omuz hizasında dikilir, klasik ve
            düzgün bir siluet verir — çoğu resmi gömlekte kullanılır.
          </li>
          <li>
            <strong>Raglan kol:</strong> Yakadan omuza tek parça uzanır,
            hareket serbestliği sağlar.
          </li>
          <li>
            <strong>Dolman kol:</strong> Geniş kesimli, gövdeyle bütünleşik —
            daha rahat ve casual bir duruş sunar.
          </li>
        </ul>

        <h2>Doğru Kol Tipini Nasıl Seçmeli?</h2>
        <p>
          Kullanım amacınıza göre karar verin: ofis ve toplantı için set-in
          kesim + barrel manşet uzun kol; yaz ve günlük kullanım için kısa kol
          veya roll-up manşetli uzun kol; özel davetler için Fransız manşet.
          Vücut tipinize göre de geniş omuzlarda raglan kesim, ince yapıda
          set-in kesim daha iyi durur.
        </p>

        <h2>Sonuç</h2>
        <p>
          Kol tipi, bir gömleğin hem estetiğini hem işlevini belirleyen
          kritik bir detay. Doğru kol-manşet kombinasyonunu seçmek,
          gömleğinizin ömrünü ve kullanım alanını genişletir.
        </p>
      </section>

      <section className="article-cta">
        <h2>Farklı kol ve manşet seçeneklerimizi inceleyin.</h2>
        <p>
          Koleksiyonumuza göz atın veya siparişiniz için kol ve manşet
          özellikleri hakkında ekibimizle görüşün.
        </p>
        <div className="article-cta-actions">
          <Link className="button" href="/tr/collection">
            Koleksiyona Göz At
          </Link>
          <Link className="button button-ghost" href="/tr/contact">
            Uzmanla Görüş
          </Link>
        </div>
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
