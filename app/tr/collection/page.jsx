import Link from "next/link";
import MailtoContactForm from "../../../components/mailto-contact-form";
import ProductImageToggle from "../../../components/product-image-toggle";

export const metadata = {
  title: "Koleksiyon",
  description:
    "MA Yağmur Tekstil'in erkek ve kadın gömlek koleksiyonları, private label ürün programları ve üretime hazır gömlek hatlarını inceleyin.",
  alternates: {
    canonical: "/tr/collection",
  },
};

export default function TurkishCollectionPage() {
  return (
    <main className="subpage-main">
      <section className="products-hero">
        <div className="products-hero-copy">
          <p className="eyebrow">Private label gömlek programları</p>
          <h1>Modern Üretim İçin Hazırlanan Gömlek Koleksiyonları.</h1>
          <p className="lead">
            Erkek ve kadın gömleklerinde formal, casual, keten ve kurumsal
            programlar geliştiriyor; markalara güçlü işçilik, esnek geliştirme
            ve güvenilir kapasite sunuyoruz.
          </p>
          <div className="products-hero-actions">
            <a className="button" href="#programs">
              Programları Gör
            </a>
            <Link className="button button-ghost" href="/tr/contact">
              Talep Gönder
            </Link>
          </div>
        </div>

        <div className="products-hero-media">
          <div className="products-hero-frame products-hero-frame-large">
            <img
              src="/assets/showroom.png"
              alt="Showroom'da sergilenen gömlek koleksiyonu"
            />
          </div>
        </div>
      </section>

      <section className="products-intro" id="programs">
        <div className="products-intro-heading">
          <p className="eyebrow">Koleksiyon Yönü</p>
          <h2>
            Toptan, private label ve sözleşmeli üretim için şekillenen gömlek
            programları.
          </h2>
        </div>
        <div className="products-intro-stats">
          <div>
            <strong>4</strong>
            <span>ürün ailesi</span>
          </div>
          <div>
            <strong>50+</strong>
            <span>minimum sipariş; altı özel üretim</span>
          </div>
          <div>
            <strong>1.100</strong>
            <span>günlük gömlek kapasitesi</span>
          </div>
        </div>
      </section>

      <section className="program-grid">
        <article className="program-card program-card-featured">
          <div className="program-card-media">
            <ProductImageToggle
              primarySrc="/assets/products/shirts-2.png"
              primaryAlt="Klasik formal gömlek ürün örneği"
              secondarySrc="/assets/products/shirts-2-close.png"
              secondaryAlt="Klasik formal gömlek yakın çekim detayı"
              primaryLabel="Yakın çekimi gör"
              secondaryLabel="Gömleğin tamamını gör"
            />
          </div>
          <div className="program-card-copy">
            <p className="eyebrow">Program 01</p>
            <h3>Klasik Formal Gömlek</h3>
            <p>
              İnce çizgili poplin kumaşı, temiz yaka formu ve özenli düğme önü
              işçiliğiyle business, tailoring ve premium private label
              koleksiyonları için geliştirilen uzun kollu formal gömlek üretimi.
            </p>
            <dl className="program-specs">
              <div>
                <dt>Kumaş</dt>
                <dd>Poplin, pinpoint, pamuklu karışım kumaşlar</dd>
              </div>
              <div>
                <dt>Kalıp</dt>
                <dd>Slim, regular, modern fit</dd>
              </div>
              <div>
                <dt>MOQ</dt>
                <dd>50+ adet</dd>
              </div>
              <div>
                <dt>Ürün</dt>
                <dd>Erkek ve kadın formal gömlek koleksiyonları</dd>
              </div>
            </dl>
          </div>
        </article>

        <article className="program-card">
          <div className="program-card-media">
            <ProductImageToggle
              primarySrc="/assets/products/shirts-3.png"
              primaryAlt="Casual gömlek ürün örneği"
              secondarySrc="/assets/products/shirts-3-close.png"
              secondaryAlt="Casual gömlek yakın çekim detayı"
              primaryLabel="Yakın çekimi gör"
              secondaryLabel="Gömleğin tamamını gör"
            />
          </div>
          <div className="program-card-copy">
            <p className="eyebrow">Program 02</p>
            <h3>Casual Overshirt</h3>
            <p>
              Yumuşak dokulu kumaş yapısı, relaxed silüeti ve utility
              detaylarıyla modern casual ve off-duty koleksiyonlar için
              geliştirilen overshirt üretimi.
            </p>
            <dl className="program-specs">
              <div>
                <dt>Kumaş</dt>
                <dd>Oxford, twill, brushed cotton kumaşlar</dd>
              </div>
              <div>
                <dt>Detay</dt>
                <dd>Utility cepler, button-down ve açık yaka seçenekleri</dd>
              </div>
              <div>
                <dt>MOQ</dt>
                <dd>50+ adet</dd>
              </div>
              <div>
                <dt>Ürün</dt>
                <dd>Erkek casual overshirt ve contemporary outerwear koleksiyonları</dd>
              </div>
            </dl>
          </div>
        </article>

        <article className="program-card">
          <div className="program-card-media">
            <ProductImageToggle
              primarySrc="/assets/products/shirts-1.png"
              primaryAlt="Tropikal resort gömlek ürün örneği"
              secondarySrc="/assets/products/shirts-1-close.png"
              secondaryAlt="Tropikal resort gömlek yakın çekim detayı"
              primaryLabel="Yakın çekimi gör"
              secondaryLabel="Gömleğin tamamını gör"
            />
          </div>
          <div className="program-card-copy">
            <p className="eyebrow">Program 03</p>
            <h3>Tropikal Desenli Resort Gömlek</h3>
            <p>
              Lacivert zemin üzerine doğal tropikal desenleri, hafif dokulu
              kumaşı ve rahat yaz silüetiyle resort ve premium casual
              koleksiyonlara uygun gömlek üretimi.
            </p>
            <dl className="program-specs">
              <div>
                <dt>Kumaş</dt>
                <dd>Dokulu pamuk / keten karışım kumaş</dd>
              </div>
              <div>
                <dt>Kalıp</dt>
                <dd>Relaxed, modern, resort fit</dd>
              </div>
              <div>
                <dt>MOQ</dt>
                <dd>50+ adet</dd>
              </div>
              <div>
                <dt>Ürün</dt>
                <dd>Erkek resort ve yaz koleksiyonu gömlekleri</dd>
              </div>
            </dl>
          </div>
        </article>

        <article className="program-card program-card-featured program-card-dark program-card-fill-media">
          <div className="program-card-media">
            <ProductImageToggle
              primarySrc="/assets/products/shirts-4.png"
              primaryAlt="Kurumsal uniform gömlek ürün örneği"
              secondarySrc="/assets/products/shirts-4-close.png"
              secondaryAlt="Kurumsal uniform gömlek yakın çekim detayı"
              primaryLabel="Yakın çekimi gör"
              secondaryLabel="Gömleğin tamamını gör"
            />
          </div>
          <div className="program-card-copy">
            <p className="eyebrow">Program 04</p>
            <h3>Aviation & Corporate Uniforms</h3>
            <p>
              Havacılık, hospitality ve corporate wear programları için
              geliştirilen; uzun dönemli tekrar üretime uygun uniform gömlek
              çözümleri.
            </p>
            <dl className="program-specs">
              <div>
                <dt>Kumaş</dt>
                <dd>Easy-care pamuklu karışım kumaşlar</dd>
              </div>
              <div>
                <dt>Opsiyon</dt>
                <dd>Pilot apoleti, logo nakışı, özel trim ve kurumsal paketleme seçenekleri</dd>
              </div>
              <div>
                <dt>MOQ</dt>
                <dd>50+ adet</dd>
              </div>
              <div>
                <dt>Ürün</dt>
                <dd>Pilot gömlekleri, corporate uniform ve hospitality koleksiyonları</dd>
              </div>
            </dl>
          </div>
        </article>
      </section>

      <section className="products-band">
        <div className="products-band-copy">
          <p className="eyebrow">Geliştirme Kabiliyetleri</p>
          <h2>Her program yaka, manşet, kalıp ve bitim stratejinize göre uyarlanabilir.</h2>
        </div>

        <div className="products-band-grid">
          <article className="band-card">
            <strong>Yaka Seçenekleri</strong>
            <p>Spread, yarım spread, button-down, gizli düğme ve casual yaka seçenekleri.</p>
          </article>
          <article className="band-card">
            <strong>Manşet Detayları</strong>
            <p>Tek, çift, yuvarlak ve kare manşet seçenekleri hedef pazara göre uyarlanır.</p>
          </article>
          <article className="band-card">
            <strong>Private Label Hazırlığı</strong>
            <p>Etiket, bakım etiketi, hangtag, paketleme, katlama ve sevkiyat hazırlığı.</p>
          </article>
        </div>
      </section>

      <section className="products-process">
        <div className="section-heading section-heading-stack">
          <div>
            <p className="eyebrow">Üretim Akışı</p>
            <h2>Bir gömlek hattı fikirden sevkiyata nasıl ilerler.</h2>
          </div>
          <p className="products-process-note">
            Numune aşamasında netlik, toplu üretimde disiplin arayan markalar için.
          </p>
        </div>

        <div className="process-steps">
          {[
            ["01", "Program Planlama", "Kategori, hedef kalıp, kumaş yönü ve adet planı netleştirilir."],
            ["02", "Numune & Prova", "Prototip, fit numunesi ve üretim öncesi onay süreci tamamlanır."],
            ["03", "Toplu Üretim", "Kesim, dikim, ütü, kalite kontrol ve paketleme planlı şekilde yürütülür."],
            ["04", "Sevkiyat & Tekrar Sipariş", "İhracat hazırlığı, devam siparişleri ve üretim sürekliliği desteklenir."],
          ].map(([step, title, text]) => (
            <article className="process-step" key={step}>
              <span>{step}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-banner contact-banner-products" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Talep Başlatın</p>
          <h2>
            Sıradaki
            <em>gömlek programınızı</em>
            birlikte üretelim.
          </h2>
          <p>
            Hedef kategori, adet aralığı ve teslim zamanınızı paylaşın. Size
            doğru numune ve üretim planı için dönüş yapalım.
          </p>

          <ul className="contact-list">
            <li>Private label ve toptan üretim desteği</li>
            <li>Numune, prova ve üretim planlama</li>
          </ul>
        </div>

        <MailtoContactForm
          className="contact-form"
          title="Üretim Talebi"
          subject="Ürün Danışmanlığı Talebi"
          buttonLabel="Ürün Danışmanlığı İste"
          language="tr"
          fields={[
            { label: "Ad Soyad", name: "name", type: "text", placeholder: "Adınızı girin", required: true },
            { label: "Marka / Şirket", name: "company", type: "text", placeholder: "Şirket adınız" },
            { label: "E-posta", name: "email", type: "email", placeholder: "merhaba@example.com", required: true },
            {
              label: "Proje Özeti",
              name: "message",
              type: "textarea",
              rows: 4,
              placeholder: "Ürün ailesi, tahmini adet ve hedef teslim zamanını paylaşın",
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
            <Link href="/tr/contact">Ürün Talebi</Link>
          </div>
          <div>
            <h3>Programlar</h3>
            <p>Formal, casual, yazlık, kurumsal ve uniform gömlek üretimi.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
