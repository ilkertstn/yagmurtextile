import Link from "next/link";
import MailtoContactForm from "../../../components/mailto-contact-form";

export const metadata = {
  title: "Üretim",
  description:
    "MA Yağmur Tekstil'in gömlek üretim kapasitesini, atölye disiplinini, kalite kontrol sürecini ve ihracata hazır üretim yaklaşımını keşfedin.",
  alternates: {
    canonical: "/tr/manufacturing",
  },
};

export default function TurkishManufacturingPage() {
  return (
    <main className="subpage-main">
      <section className="manufacturing-hero">
        <video
          src="/assets/atelier/WhatsApp Video 2026-04-11 at 00.16.35.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Gömlek üretim atölyesi"
        ></video>
        <div className="manufacturing-hero-overlay">
          <p className="eyebrow">Private Label Gömlek Üretimi - İstanbul</p>
          <h1>Ölçekli ve Kontrollü Gömlek Üretimi.</h1>
          <p className="lead">
            Erkek ve kadın gömleklerinde düzenli üretim kapasitesi, kalite
            kontrol ve ihracata hazır süreçlerle markalara üretim desteği
            sağlıyoruz.
          </p>
        </div>
      </section>

      <section className="manufacturing-metrics">
        <div>
          <strong>1.100</strong>
          <span>Günlük Gömlek Kapasitesi</span>
        </div>
        <div>
          <strong>600-700</strong>
          <span>Renk Başına Minimum Adet</span>
        </div>
        <div>
          <strong>20+</strong>
          <span>Yıllık Üretim Deneyimi</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>Gömlek Üretim Odağı</span>
        </div>
      </section>

      <section className="atelier-overview" id="craft">
        <div className="atelier-overview-media">
          <img src="/assets/heritage.jpg" alt="Kumaş ve üretim detayı" />
        </div>
        <div className="atelier-overview-copy">
          <p className="eyebrow">Atölye Kültürü</p>
          <h2>İşçilikten gelen disiplin, düzenli üretim süreciyle birleşir.</h2>
          <p>
            Üretim alanımız, pratik tekstil deneyimini kontrollü üretim
            süreçleriyle birleştirir. Her koleksiyon numune, kesim, dikim,
            ara kontrol ve final kontrol adımlarıyla yönetilir.
          </p>
          <p>
            Müşterilerin tutarlılık olarak gördüğü sonuç; kumaş kontrolü, kalıp
            onayı, hat takibi ve her siparişi uzun vadeli iş ortaklığı olarak
            ele alan üretim kültüründen gelir.
          </p>
          <div className="atelier-overview-stats">
            <div>
              <strong>Erkek</strong>
              <span>Gömlek Üretimi</span>
            </div>
            <div>
              <strong>Kadın</strong>
              <span>Gömlek Üretimi</span>
            </div>
          </div>
        </div>
      </section>

      <section className="quality-section">
        <div className="quality-heading">
          <p className="eyebrow">Kalite & Üretim Kontrolü</p>
          <h2>Üretimin her aşamasında yapılandırılmış kontrol.</h2>
        </div>

        <div className="quality-grid">
          <article className="quality-card quality-card-light">
            <div className="quality-icon" aria-hidden="true">
              <span className="quality-icon-badge"></span>
              <span className="quality-icon-check"></span>
            </div>
            <h3>Çok Aşamalı Kontrol</h3>
            <p>
              Kumaş, dikiş, ölçü ve bitim kontrolleri paketleme öncesinde
              farklı aşamalarda takip edilir.
            </p>
          </article>

          <article className="quality-card quality-card-dark">
            <strong>Ara Kontroller</strong>
            <p>
              Kalite kontrol kesim, dikim, ütü, bitim ve sevkiyat hazırlığı
              boyunca devam eder.
            </p>
          </article>

          <article className="quality-card quality-card-image">
            <video
              src="/assets/atelier/Ekran Resmi 2026-04-15 00.20.04.mp4"
              autoPlay
              muted
              loop
              playsInline
              aria-label="Kontrol süreci"
            ></video>
            <div className="quality-overlay">
              <h3>Final Kontrol</h3>
            </div>
          </article>

          <article className="quality-card quality-card-image">
            <video
              src="/assets/atelier/WhatsApp Video 2026-04-11 at 00.09.07.mp4"
              autoPlay
              muted
              loop
              playsInline
              aria-label="Üretim takibi"
            ></video>
            <div className="quality-overlay">
              <h3>Üretim Takibi</h3>
              <p>Malzeme akışı, hat kontrolü ve bitim süreci düzenli takip edilir.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="precision-band">
        <div className="precision-copy">
          <p className="eyebrow">Üretim Altyapısı</p>
          <h2>Private label gömlek üretimine odaklı kapasite.</h2>
          <p>
            Numuneden toplu üretime geçerken kalıp, bitim, ölçü ve kalite
            tutarlılığını kontrol altında tutan bir üretim yapısıyla çalışıyoruz.
          </p>
        </div>

        <div className="precision-gallery">
          <video
            src="/assets/atelier/WhatsApp Video 2026-04-11 at 00.08.58.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Üretim detayı"
          ></video>
          <video
            src="/assets/atelier/WhatsApp Video 2026-04-11 at 00.17.43.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Makine detayı"
          ></video>
        </div>

        <div className="precision-details">
          <div>
            <strong>Kapasite</strong>
            <span>
              Günlük yaklaşık 1.100 gömlek üretimiyle tekrarlı siparişler ve
              sezonluk programlar için planlı üretim.
            </span>
          </div>
          <div>
            <strong>Paketleme Hazırlığı</strong>
            <span>
              Siparişler ütü, katlama, paketleme ve sevkiyat koordinasyonuna
              uygun standartlarla hazırlanır.
            </span>
          </div>
        </div>
      </section>

      <section className="principles-section">
        <h2>Üretimimizi güvenilir kılan temel yaklaşım.</h2>
        <div className="principles-grid">
          {[
            ["Tutarlılık", "Numuneden toplu üretime ve tekrar siparişlere kadar aynı standardı koruma."],
            ["Esneklik", "Kalıp, bitim, marka detayları ve müşteri beklentilerine göre üretim planlama."],
            ["İzlenebilirlik", "Tedarikten numuneye, üretimden paketlemeye kadar sürecin takip edilebilir olması."],
            ["Süreklilik", "Tekrar siparişler ve sezonluk koleksiyonlar için düzenli üretim desteği."],
          ].map(([title, text]) => (
            <article className="principle-card" key={title}>
              <div className="principle-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M12 3l7 4v5c0 4.2-2.7 7.7-7 9-4.3-1.3-7-4.8-7-9V7l7-4Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="atelier-cta">
        <h2>Bir Sonraki Üretiminize Birlikte Başlayalım.</h2>
        <p>
          Numune sürecinizi, hedef adedinizi ve teslim zamanınızı paylaşın;
          ekibimiz doğru üretim planı için size dönüş yapsın.
        </p>
        <div className="atelier-cta-actions">
          <Link className="button" href="/tr/contact">
            Üretim Talebi Gönder
          </Link>
          <Link className="button button-ghost" href="/tr/contact">
            Uzmanla Görüş
          </Link>
        </div>
      </section>

      <section className="contact-banner" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Üretim İletişimi</p>
          <h2>Üretim Talebinizi Başlatın</h2>
          <p>
            Projeniz, adet ihtiyacınız ve üretim takviminiz hakkında ekibimizle
            iletişime geçin.
          </p>

          <ul className="contact-list">
            <li>İstanbul üretim merkezi</li>
            <li>Ziyaretler randevu ile yapılır</li>
          </ul>
        </div>

        <MailtoContactForm
          className="contact-form"
          title="Proje Talebi"
          subject="Üretim Talebi"
          buttonLabel="Danışmanlık İste"
          language="tr"
          fields={[
            { label: "Ad Soyad", name: "name", type: "text", placeholder: "Adınızı girin", required: true },
            { label: "Telefon", name: "phone", type: "text", placeholder: "Telefon numaranız" },
            { label: "E-posta", name: "email", type: "email", placeholder: "merhaba@example.com", required: true },
            {
              label: "Proje Detayları",
              name: "message",
              type: "textarea",
              rows: 4,
              placeholder: "Koleksiyon, adet ve zaman planınızı paylaşın.",
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
          <p>Premium markalar ve private label iş ortakları için gömlek üretim programları.</p>
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
