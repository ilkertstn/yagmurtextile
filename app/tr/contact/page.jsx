import Link from "next/link";
import MailtoContactForm from "../../../components/mailto-contact-form";

export const metadata = {
  title: "İletişim",
  description:
    "Private label gömlek üretimi, numune, üretim planlama ve proje talepleri için MA Yağmur Tekstil ile iletişime geçin.",
  alternates: {
    canonical: "/tr/contact",
  },
};

export default function TurkishContactPage() {
  return (
    <main className="subpage-main">
      <section className="contact-page-hero">
        <div className="contact-page-copy">
          <p className="eyebrow">Üretim İletişimi</p>
          <h1>Bir sonraki üretim görüşmenizi başlatın.</h1>
          <p className="lead">
            Private label gömlek üretimi, numune, kumaş, adet planlama ve teslim
            zamanı için ekibimizle iletişime geçin.
          </p>
        </div>
      </section>

      <section className="contact-page-main">
        <div className="contact-form-shell">
          <div className="contact-form-heading">
            <h2>Proje Talebi</h2>
          </div>

          <MailtoContactForm
            className="contact-page-form"
            groupedFieldCount={2}
            groupClassName="contact-page-form-grid"
            subject="Proje Talebi"
            buttonLabel="Talebi Gönder"
            buttonClassName="button"
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
                label: "Telefon",
                name: "phone",
                type: "text",
                placeholder: "Telefon numaranız",
              },
              {
                label: "E-posta",
                name: "email",
                type: "email",
                placeholder: "merhaba@example.com",
                required: true,
              },
              {
                label: "Talep Tipi",
                name: "inquiry_type",
                type: "select",
                options: [
                  "Private Label Üretim",
                  "Numune Talebi",
                  "Kumaş / Malzeme Geliştirme",
                  "Toplu Sipariş",
                ],
                defaultValue: "Private Label Üretim",
                required: true,
              },
              {
                label: "Proje Detayları",
                name: "message",
                type: "textarea",
                rows: 6,
                placeholder:
                  "Koleksiyon, adet, kumaş ve hedef teslim zamanınızı paylaşın.",
                required: true,
              },
            ]}
          />
        </div>

        <aside className="contact-page-sidebar">
          <article className="contact-detail-card">
            <h3>İstanbul Merkez</h3>
            <p>Çağlayan Mahallesi, Park Sokak No: 11/5</p>
            <p>Ahmet Bilgin İş Hanı Kat: 5</p>
            <p>İstanbul, Türkiye</p>
            <a href="tel:+902122301316">+90 530 780 24 26</a>
            <a href="mailto:info@mayagmurtextile.com">
              info@mayagmurtextile.com
            </a>
          </article>

          <article className="contact-detail-card">
            <h3>Atölye & Üretim Alanı</h3>
            <p>Çağlayan Mahallesi, Park Sokak No: 11/5</p>
            <p>Ahmet Bilgin İş Hanı Kat: 4</p>
            <p>İstanbul, Türkiye</p>
            <p className="contact-small-note">Ziyaretler randevu ile yapılır.</p>
          </article>

          <article className="contact-detail-card">
            <h3>Üretim Desteği</h3>
            <div className="contact-sales-grid">
              <div>
                <span>Numune</span>
                <p>Yeni koleksiyonlar için geliştirme, prova ve onay desteği.</p>
              </div>
              <div>
                <span>Üretim Planlama</span>
                <p>Adet, takvim ve tekrar siparişler için düzenli koordinasyon.</p>
              </div>
            </div>
          </article>

          <article className="contact-detail-card">
            <h3>Sosyal Kanallar</h3>
            <div className="contact-socials">
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
            </div>
          </article>
        </aside>
      </section>

      <section className="contact-map-section">
        <div className="contact-map-surface">
          <iframe
            src="https://www.google.com/maps?q=Ahmet%20Bilgin%20Is%20Hani%2C%20Park%20Sokak%2011%2F5%2C%20Caglayan%2C%20Sisli%2C%20Istanbul%2C%20Turkey&z=18&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="MA Yağmur Tekstil konum haritası"
          ></iframe>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <Link className="brand brand-footer" href="/tr">
            <span>MA Yagmur</span>
            <span>Textile</span>
          </Link>
          <p>İstanbul'dan güvenilir private label gömlek üretim desteği.</p>
        </div>

        <div className="footer-columns">
          <div>
            <h3>Navigasyon</h3>
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
          </div>
          <div>
            <h3>Kabiliyetler</h3>
            <p>Numune, private label geliştirme, toplu üretim ve paketleme hazırlığı.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
