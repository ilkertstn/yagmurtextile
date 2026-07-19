import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Yazlık Gömlek Seçim Rehberi",
  description:
    "Yazlık gömlek seçerken dikkat edilmesi gerekenler: en iyi kumaşlar, renk seçimi ve rahat kesim önerileri.",
  alternates: {
    canonical: "/tr/blog/summer-shirt-guide",
    languages: {
      en: "https://www.mayagmurtextile.com/blog/summer-shirt-guide",
      tr: "https://www.mayagmurtextile.com/tr/blog/summer-shirt-guide",
      "x-default": "https://www.mayagmurtextile.com/blog/summer-shirt-guide",
    },
  },
  openGraph: {
    title: "Yazlık Gömlek Seçim Rehberi | MA Yağmur Tekstil",
    description:
      "Yazlık gömlek seçerken dikkat edilmesi gerekenler: en iyi kumaşlar, renk seçimi ve rahat kesim önerileri.",
    url: "/tr/blog/summer-shirt-guide",
    type: "article",
  },
  twitter: {
    title: "Yazlık Gömlek Seçim Rehberi | MA Yağmur Tekstil",
    description:
      "Yazlık gömlek seçerken dikkat edilmesi gerekenler: en iyi kumaşlar, renk seçimi ve rahat kesim önerileri.",
  },
};

export default function TurkishSummerShirtGuidePost() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://www.mayagmurtextile.com/tr" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mayagmurtextile.com/tr/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Yazlık Gömlek Seçerken Nelere Dikkat Etmeli?",
        item: "https://www.mayagmurtextile.com/tr/blog/summer-shirt-guide",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Yazlık Gömlek Seçerken Nelere Dikkat Etmeli? Kumaş ve Stil Rehberi",
    description:
      "Yazlık gömlek seçerken dikkat edilmesi gerekenler: en iyi kumaşlar, renk seçimi ve rahat kesim önerileri.",
    image: "https://www.mayagmurtextile.com/assets/products/shirts-1.png",
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
    mainEntityOfPage: "https://www.mayagmurtextile.com/tr/blog/summer-shirt-guide",
    inLanguage: "tr",
  };

  return (
    <main className="subpage-main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="article-hero">
        <p className="eyebrow">Stil Rehberi</p>
        <h1>Yazlık Gömlek Seçerken Nelere Dikkat Etmeli? Kumaş ve Stil Rehberi</h1>
      </section>

      <section className="article-body">
        <p>
          Sıcak havada terleten, kırışan, cilde yapışan bir gömlek mi
          giymek istersiniz — yoksa gün boyu ferah kalan bir tanesini mi?
          Yazlık gömlek seçimi büyük ölçüde kumaşa, kesime ve renge bağlı.
          İşte doğru seçim için bilmeniz gerekenler.
        </p>

        <figure className="article-figure">
          <Image
            src="/assets/products/shirts-1.png"
            alt="Hafif keten karışımlı yazlık gömlek"
            width={1122}
            height={1402}
          />
          <figcaption>
            Sıcak havada rahatlık için kesilmiş hafif keten karışımlı bir
            gömlek.
          </figcaption>
        </figure>

        <h2>Yaz İçin En İyi Kumaşlar</h2>
        <ul>
          <li>
            <strong>Keten:</strong> Nefes alabilirliği en yüksek
            kumaşlardan biri; hafif kırışıklık doğal dokusunun parçası.
          </li>
          <li>
            <strong>Pamuklu poplin:</strong> Sık dokusu sayesinde hem şık
            hem serin — ofis ve günlük kullanım için ideal.
          </li>
          <li>
            <strong>Seersucker (büzgülü dokuma):</strong> Kumaşın cilde
            temasını azaltan dalgalı yapısı sayesinde sıcakta bile ferahlık
            sağlar.
          </li>
        </ul>

        <div className="article-gallery">
          <figure>
            <Image
              src="/assets/products/shirts-1-close.png"
              alt="Keten kumaş dokusu yakın çekim"
              width={1086}
              height={1448}
            />
            <figcaption>Keten dokusu — hava akışı için gevşek örgü.</figcaption>
          </figure>
          <figure>
            <Image
              src="/assets/products/shirts-2-close.png"
              alt="Pamuklu poplin kumaş dokusu yakın çekim"
              width={1086}
              height={1448}
            />
            <figcaption>Pamuklu poplin — pürüzsüz ve sık dokulu.</figcaption>
          </figure>
        </div>

        <h2>Renk ve Desen Seçimi</h2>
        <p>
          Açık renkler (beyaz, bej, açık mavi) güneş ışığını yansıtarak
          vücut ısısını daha az artırır. Koyu renkler ve yoğun desenler
          ısıyı daha fazla emer — yaz için açık tonlu, sade veya ince
          çizgili modelleri tercih edin.
        </p>

        <h2>Kesim ve Rahatlık</h2>
        <p>
          Dar kesim gömlekler hareketi kısıtlar ve teri hapseder. Yaz için
          &quot;relaxed fit&quot; veya normal kesim, kumaşın cilde temasını
          azaltarak hava dolaşımını artırır. Kısa kol veya roll-up manşetli
          uzun kol modelleri de terlemeyi azaltır.
        </p>

        <h2>Bakım İpuçları</h2>
        <p>
          Keten ve pamuklu kumaşlar düşük ısıda yıkanmalı, mümkünse ütü
          kumaşın nemliyken yapılmalı. Sık yıkama yerine havalandırma,
          kumaşın ömrünü uzatır ve rengin solmasını geciktirir.
        </p>

        <h2>Sonuç</h2>
        <p>
          Doğru kumaş, renk ve kesim kombinasyonu yaz aylarında hem şık hem
          rahat kalmanın anahtarı.
        </p>
      </section>

      <section className="article-cta">
        <h2>Yazlık koleksiyonumuzu inceleyin.</h2>
        <p>
          Keten ve pamuklu poplin modellerimize göz atın veya siparişiniz
          için yazlık programlar hakkında ekibimizle görüşün.
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
