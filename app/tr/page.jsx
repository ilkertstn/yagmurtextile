import Link from "next/link";
import Image from "next/image";
import MailtoContactForm from "../../components/mailto-contact-form";

export const metadata = {
  title: {
    absolute: "MA Yağmur Tekstil | İstanbul Private Label Gömlek Üreticisi",
  },
  description:
    "İstanbul merkezli private label gömlek üreticisi: düşük MOQ, toptan üretim ve ihracata hazır tekstil programları.",
  alternates: {
    canonical: "/tr",
    languages: {
      en: "https://www.mayagmurtextile.com/",
      tr: "https://www.mayagmurtextile.com/tr",
      "x-default": "https://www.mayagmurtextile.com/",
    },
  },
  openGraph: {
    title: "MA Yağmur Tekstil | İstanbul Private Label Gömlek Üreticisi",
    description:
      "Private label gömlek üretimi, atölye disiplini ve koleksiyon geliştirme — MA Yağmur Tekstil.",
    url: "/tr",
    type: "website",
  },
  twitter: {
    title: "MA Yağmur Tekstil | İstanbul Private Label Gömlek Üreticisi",
    description:
      "Private label gömlek üretimi, atölye disiplini ve koleksiyon geliştirme — MA Yağmur Tekstil.",
  },
};

export default function TurkishHomePage() {
  return (
    <main>
      <section className="hero" id="hero">
        <div className="hero-copy">
          <p className="eyebrow">İstanbul Merkezli Gömlek Üreticisi</p>
          <h1>
            Markalar İçin
            <br />
            Güvenilir Gömlek Üretimi.
          </h1>
          <p className="lead">
            MA Yağmur Tekstil, erkek ve kadın gömleklerinde private label
            üretim, düzenli kapasite ve ihracata hazır süreçler sunar.
          </p>
          <Link className="button" href="/tr/manufacturing">
            Üretim Sürecimizi Keşfedin
          </Link>
        </div>

        <div className="hero-visual">
          <div className="portrait-card portrait-card-large">
            <Image
              src="/assets/hero-banner.png"
              alt="MA Yağmur Tekstil gömlek üretim detayı"
              width={820}
              height={1168}
              priority
            />
          </div>
          <div className="signature-card">
            <span className="signature-label">Üretim Odağı</span>
            <strong>Private Label Gömlek Üretimi</strong>
            <span>Numuneden Toplu Üretime</span>
          </div>
        </div>
      </section>

      <section className="production-snapshot" aria-labelledby="production-snapshot-title">
        <div className="snapshot-heading">
          <p className="eyebrow">Üretime Genel Bakış</p>
          <h2 id="production-snapshot-title">
            Private label gömlek programları için net üretim bilgileri.
          </h2>
        </div>

        <div className="snapshot-grid">
          <article className="snapshot-card">
            <span>01</span>
            <h3>Erkek & Kadın Gömlekleri</h3>
            <p>
              Erkek ve kadın dokuma gömlek koleksiyonlarına odaklanan private
              label üretim.
            </p>
          </article>

          <article className="snapshot-card">
            <span>02</span>
            <h3>MOQ 50+ adet</h3>
            <p>
              Minimum sipariş planı 50 adet ve üzeri için başlar. 50 adedin
              altındaki talepler özel üretim kapsamında değerlendirilir.
            </p>
          </article>

          <article className="snapshot-card">
            <span>03</span>
            <h3>Günlük 1.100 Gömlek</h3>
            <p>
              Günlük üretim kapasitemiz organize private label programları için
              yaklaşık 1.100 gömleği destekler.
            </p>
          </article>

          <article className="snapshot-card">
            <span>04</span>
            <h3>Numuneden Toplu Üretime</h3>
            <p>
              Prototip, fit numunesi, üretim onayı, toplu üretim, son kontrol
              ve ihracata hazır paketleme.
            </p>
          </article>
        </div>
      </section>

      <section className="story-grid" id="atelier">
        <div className="story-media">
          <div className="pattern-panel">
            <Image
              src="/assets/kumas-turu.png"
              alt="Kumaş kartelası seçimi"
              width={1024}
              height={1536}
            />
          </div>
          <div className="small-card">
            <Image
              src="/assets/heritage.jpg"
              alt="Tekstil atölyesi üretim detayı"
              width={1287}
              height={860}
            />
          </div>
        </div>

        <div className="story-copy">
          <p className="eyebrow">Üretici Profili</p>
          <h2>Atölye Disiplini, İhracata Hazır Üretim.</h2>
          <p>
            Güvenilir private label üretim, tutarlı kalite ve uzun vadeli iş
            ortaklığı arayan markalar için gömlek üretiyoruz.
          </p>
          <p>
            Gücümüz kumaş bilgisi, işçilik ve yapılandırılmış üretimi numune,
            toplu üretim ve ihracata hazır koleksiyonlara dönüştürmemizden gelir.
          </p>

          <div className="stats">
            <div>
              <strong>20</strong>
              <span>Yıllık Deneyim</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Atölye İçi Üretim Kontrolü</span>
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
            aria-label="Üretim süreci videosu"
          ></video>
        </div>
      </section>

      <section className="collection" id="collection">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Üretim Programları</p>
            <h2>Temel Ürün Kategorileri</h2>
          </div>
          <Link href="/tr/collection">Ürün Programlarını İnceleyin</Link>
        </div>

        <div className="collection-grid">
          <article className="product-card product-card-tall product-card-hover-color">
            <Image
              src="/assets/iconlast-1.jpg"
              alt="Klasik gömlek üretim örneği"
              width={922}
              height={1152}
            />
            <div className="product-meta">
              <h3>Çizgili Klasik Gömlek</h3>
              <p>Business ve formal koleksiyonlar için uzun kollu gömlek üretimi.</p>
            </div>
          </article>

          <article className="product-card product-card-offset product-card-hover-color">
            <Image
              src="/assets/iconlast-2.png"
              alt="Casual gömlek üretim örneği"
              width={1046}
              height={844}
            />
            <div className="product-meta">
              <h3>Overshirt Programı</h3>
              <p>Premium casual ve katmanlı koleksiyonlar için yapılandırılmış overshirt.</p>
            </div>
          </article>

          <article className="product-card product-card-hover-color">
            <Image
              src="/assets/iconlast-4.png"
              alt="Gömlek üretim detayı"
              width={922}
              height={1152}
            />
            <div className="product-meta">
              <h3>Keten Utility Gömlek</h3>
              <p>Yaz ve resort koleksiyonları için nefes alan doğal elyaflı modeller.</p>
            </div>
          </article>

          <article className="product-card product-card-wide product-card-hover-color">
            <Image
              src="/assets/iconlast-5.png"
              alt="Sezonluk gömlek koleksiyonu detayı"
              width={1026}
              height={954}
            />
            <div className="product-meta">
              <h3>Kısa Kollu Fermuarlı Gömlek</h3>
              <p>Sezonluk ve kapsül koleksiyonlar için modern kısa kollu modeller.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="contact-banner" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Üretim Talebi</p>
          <h2>
            Üretim
            <em>Talebinizi</em>
            Başlatın
          </h2>
          <p>
            Markanız, ürün tipiniz, hedef adet ve zaman planınız hakkında bilgi
            paylaşın. Numune, üretim planlama ve doğru üretim rotası için size
            dönüş yapalım.
          </p>

          <ul className="contact-list">
            <li>Private label ve sözleşmeli üretim</li>
            <li>Numune, toplu üretim ve ihracat desteği</li>
          </ul>
        </div>

        <MailtoContactForm
          className="contact-form"
          title="Üretim Talebi"
          subject="Üretim Talebi"
          buttonLabel="Üretim Teklifi İste"
          language="tr"
          fields={[
            {
              label: "Ad Soyad",
              name: "name",
              type: "text",
              placeholder: "Adınızı girin",
              required: true,
            },
            {
              label: "Marka / Şirket",
              name: "company",
              type: "text",
              placeholder: "Marka veya şirket adınız",
              required: true,
            },
            {
              label: "E-posta",
              name: "email",
              type: "email",
              placeholder: "merhaba@example.com",
              required: true,
            },
            {
              label: "Proje Özeti",
              name: "message",
              type: "textarea",
              rows: 4,
              placeholder:
                "Ürün tipi, tahmini adet ve hedef teslim zamanını paylaşın",
              required: true,
            },
          ]}
        />
      </section>

      <footer className="site-footer">
        <div>
          <Link className="brand brand-footer" href="/tr">
            <span>MA Yagmur</span>
            <span>Textile</span>
          </Link>
          <p>İstanbul'dan private label gömlek üretimi ve tekstil üretim desteği.</p>
        </div>

        <div className="footer-columns">
          <div>
            <h3>Keşfet</h3>
            <Link href="/tr">Ana Sayfa</Link>
            <Link href="/tr/manufacturing">Üretim</Link>
            <Link href="/tr/collection">Koleksiyon</Link>
          </div>
          <div>
            <h3>İletişim</h3>
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
            <Link href="/tr/contact">Üretim Talebi</Link>
          </div>
          <div>
            <h3>Kabiliyetler</h3>
            <p>Numune, private label geliştirme, toplu üretim ve ihracat desteği.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
