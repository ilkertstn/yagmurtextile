import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "İş Gömleği Rehberi: Erkek ve Kadın Modelleri, Kumaş ve Logo Seçimi",
  description:
    "İş gömleği seçerken nelere dikkat edilmeli? Erkek ve kadın iş gömleği modelleri, kumaş türleri, beyaz iş gömleği, logolu kurumsal gömlek ve toptan sipariş rehberi.",
  alternates: {
    canonical: "/tr/blog/custom-uniform-shirts",
    languages: {
      en: "https://www.mayagmurtextile.com/blog/custom-uniform-shirts",
      tr: "https://www.mayagmurtextile.com/tr/blog/custom-uniform-shirts",
      "x-default": "https://www.mayagmurtextile.com/blog/custom-uniform-shirts",
    },
  },
  openGraph: {
    title: "İş Gömleği Rehberi: Erkek ve Kadın Modelleri, Kumaş ve Logo Seçimi | MA Yağmur Tekstil",
    description:
      "İş gömleği seçerken nelere dikkat edilmeli? Erkek ve kadın iş gömleği modelleri, kumaş türleri, beyaz iş gömleği, logolu kurumsal gömlek ve toptan sipariş rehberi.",
    url: "/tr/blog/custom-uniform-shirts",
    type: "article",
  },
  twitter: {
    title: "İş Gömleği Rehberi: Erkek ve Kadın Modelleri, Kumaş ve Logo Seçimi | MA Yağmur Tekstil",
    description:
      "İş gömleği seçerken nelere dikkat edilmeli? Erkek ve kadın iş gömleği modelleri, kumaş türleri, beyaz iş gömleği, logolu kurumsal gömlek ve toptan sipariş rehberi.",
  },
};

export default function TurkishCustomUniformShirtsPost() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://www.mayagmurtextile.com/tr" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mayagmurtextile.com/tr/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: "İş Gömleği Rehberi",
        item: "https://www.mayagmurtextile.com/tr/blog/custom-uniform-shirts",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "İş Gömleği Rehberi: Erkek ve Kadın Modelleri, Kumaş ve Logo Seçimi",
    description:
      "İş gömleği seçerken nelere dikkat edilmeli? Erkek ve kadın iş gömleği modelleri, kumaş türleri, beyaz iş gömleği, logolu kurumsal gömlek ve toptan sipariş rehberi.",
    image: "https://www.mayagmurtextile.com/assets/products/shirts-4.png",
    datePublished: "2026-09-29",
    dateModified: "2026-09-29",
    author: { "@type": "Organization", name: "MA Yağmur Tekstil" },
    publisher: {
      "@type": "Organization",
      name: "MA Yağmur Tekstil",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mayagmurtextile.com/assets/logo.png",
      },
    },
    mainEntityOfPage: "https://www.mayagmurtextile.com/tr/blog/custom-uniform-shirts",
    inLanguage: "tr",
  };

  return (
    <main className="subpage-main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="article-hero">
        <p className="eyebrow">Kurumsal Giyim Rehberi</p>
        <h1>İş Gömleği Rehberi: Erkek ve Kadın Modelleri, Kumaş ve Logo Seçimi</h1>
      </section>

      <section className="article-body">
        <p>
          Bir iş gömleği günde sekiz saatten fazla giyilir, sezon boyunca
          onlarca kez yıkanır ve müşterinin karşısına çıkan her çalışanın
          üzerinde firmanızı temsil eder. Bu yüzden doğru iş gömleği hem bir
          iş kıyafeti kadar dayanıklı hem de bir resmi gömlek kadar düzgün
          görünmek zorundadır. Bu rehberde erkek ve kadın iş gömleği
          modellerinden kumaş ve renk seçimine, logolu kurumsal gömlekten
          toptan siparişe kadar bilmeniz gerekenleri anlatıyoruz.
        </p>

        <figure className="article-figure">
          <Image
            src="/assets/products/shirts-4.png"
            alt="Apoletli ve nakış logolu beyaz uzun kollu pilot iş gömleği"
            width={1254}
            height={1254}
          />
          <figcaption>
            Apolet, çift kapaklı cep ve nakış göğüs logosuna sahip uzun kollu
            bir pilot gömleği.
          </figcaption>
        </figure>

        <h2>İş Gömleği Nedir? Personel Gömleğinden Farkı</h2>
        <p>
          İş gömleği; çalışanların mesai boyunca giydiği, firmanın kurumsal
          kimliğini yansıtan ve günlük yıkamaya dayanacak şekilde üretilen
          gömlektir. Personel gömleği, çalışan gömleği ya da kurumsal gömlek
          gibi isimlerle de anılır; hepsi aynı ihtiyaca karşılık gelir:
          ekibinizin tek tip, düzgün ve profesyonel görünmesi. Normal bir
          gömlekten farkı, kumaşın ve dikişin yoğun kullanım ile sık yıkama
          için seçilmesi ve logo, apolet, kalem cebi gibi kurumsal detayların
          eklenebilmesidir.
        </p>

        <h2>Erkek İş Gömleği Modelleri</h2>
        <ul>
          <li>
            <strong>Klasik yaka, uzun kol:</strong> Ofis, banka ve kurumsal
            firmalar için standart erkek iş gömleği. Ceket ve kravatla
            uyumludur.
          </li>
          <li>
            <strong>Kısa kollu iş gömleği:</strong> Sıcak iklimler, saha
            ekipleri ve yaz dönemi için pratik bir seçenek.
          </li>
          <li>
            <strong>Çift cepli ve apoletli modeller:</strong> Pilot, güvenlik
            ve teknik ekiplerde tercih edilir; kalem cebi ve kapaklı cep gibi
            fonksiyonel detaylar eklenebilir.
          </li>
        </ul>

        <h2>Kadın (Bayan) İş Gömleği Modelleri</h2>
        <p>
          Kadın iş gömleği, erkek modelinin küçültülmüş hali olmamalıdır. Bel
          hattı, göğüs ve omuz ölçüleri kadın kalıbına göre ayrı hazırlanmalı,
          düğme yönü ve yaka yapısı buna göre planlanmalıdır. Karma ekiplerde
          aynı kumaş, renk ve logo kullanılarak erkek ve kadın iş gömlekleri
          arasında görsel bütünlük sağlanır. Beyaz iş gömleği bayan
          modelleri; resepsiyon, kabin ekibi ve ofis personeli için en çok
          tercih edilen seçenektir.
        </p>

        <h2>Neden Beyaz İş Gömleği? Renk Seçimi</h2>
        <p>
          Beyaz iş gömleği temiz ve profesyonel bir görünüm verir, her
          pantolon ve ceketle uyum sağlar ve renkli bir logoyu öne çıkarır.
          Açık mavi ikinci en güvenli seçimdir. Lacivert, siyah veya bordo gibi
          koyu kurumsal renkler lekeyi ve yıpranmayı daha iyi gizler; ancak
          ekip içinde farklı tonlarda solmaması için renk haslığı yüksek
          kumaşlarla üretilmelidir. Hangi rengi seçerseniz seçin, tekrar
          siparişlerde tonun birebir tutması için kumaş numunesi üzerinden
          onay verin.
        </p>

        <h2>İş Gömleği Kumaşı Nasıl Seçilir?</h2>
        <p>
          Kumaş, gömleğin mesainin sonunda nasıl hissettireceğini ve yüzlerce
          yıkamadan sonra nasıl görüneceğini belirler:
        </p>
        <ul>
          <li>
            <strong>Poplin:</strong> Düz, ince ve düzgün yüzeyli. Ofis,
            kurumsal ve havacılık iş gömleklerinin standart kumaşı.
          </li>
          <li>
            <strong>Oxford:</strong> Hafif dokulu, daha kalın ve dayanıklı.
            Mağaza ve otel personeli için iyi bir seçim.
          </li>
          <li>
            <strong>Twill (gabardin tipi dokuma):</strong> Çapraz dokusu
            sayesinde kırışmaya dirençlidir, ütü formunu gün boyu korur.
          </li>
          <li>
            <strong>Pamuk-polyester karışımlar (CVC, 65/35 vb.):</strong> Çoğu
            iş gömleği için en pratik çözüm. Polyester çekmeyi ve solmayı
            azaltır, kolay bakım sağlar; pamuk ise nefes alabilirliği korur.
          </li>
        </ul>
        <p>
          Her gün aynı gömleği giyen ekipler için kolay bakımlı pamuk
          karışımları konfor ile dayanıklılık arasında en iyi dengeyi sunar.
          Kol boyu ve manşet seçimi için{" "}
          <Link href="/tr/blog/shirt-sleeve-types">gömlek kol tipleri rehberimize</Link>{" "}
          göz atabilirsiniz.
        </p>

        <div className="article-gallery">
          <figure>
            <Image
              src="/assets/products/shirts-4-close.png"
              alt="İş gömleğinde cep kapağı üzerinde nakış logo detayı"
              width={1254}
              height={1254}
            />
            <figcaption>Cep kapağının hemen üzerine işlenmiş nakış logo.</figcaption>
          </figure>
          <figure>
            <Image
              src="/assets/products/shirts-2-close.png"
              alt="Poplin gömlekte manşet ve düğme detayı"
              width={1086}
              height={1448}
            />
            <figcaption>Poplin kumaş ve düğmeli manşet: iş gömleğinin temel taşı.</figcaption>
          </figure>
        </div>

        <h2>Kurumsal Logolu Gömlek: Nakış mı, Baskı mı?</h2>
        <p>
          Dokuma iş gömleklerinde nakış neredeyse her zaman daha doğru
          tercihtir. Nakışlı logo kabarık ve net görünür, sanayi tipi
          yıkamalara baskıdan çok daha uzun süre dayanır; baskı ise gömleklik
          kumaşlarda zamanla çatlayabilir veya soluklaşabilir. Baskı daha çok
          tişört gibi örme ürünlerde, büyük ve çok renkli grafikler için
          mantıklıdır.
        </p>
        <p>Logolu iş gömleğinde en yaygın logo konumları:</p>
        <ul>
          <li><strong>Sol göğüs:</strong> Standart konum; cebin üstü veya cebin olacağı hizada.</li>
          <li><strong>Kol:</strong> İkinci bir logo ya da departman adı için.</li>
          <li><strong>Sırt (yaka altı):</strong> Arkadan görünürlük için.</li>
          <li><strong>Yaka veya manşet:</strong> Premium kurumsal programlarda küçük, zarif bir detay.</li>
        </ul>

        <h2>Sektöre Göre İş Gömlekleri</h2>
        <ul>
          <li>
            <strong>Ofis ve kurumsal firmalar:</strong> Poplin veya twill, uzun
            kol, beyaz ya da açık mavi, küçük nakış logolu kurumsal gömlek.
          </li>
          <li>
            <strong>Otel ve resepsiyon personeli:</strong> Kurumsal renklerde,
            kolay bakımlı karışım kumaşlar; genellikle uzun ve kısa kol
            birlikte.
          </li>
          <li>
            <strong>Garson gömlekleri ve restoran personeli:</strong> Lekeye
            dayanıklı, sık yıkamaya uygun kumaşlar; siyah ve beyaz en yaygın
            renkler. Önlükle birlikte kullanıldığında gömlek yakası ve kolları
            ön plana çıkar.
          </li>
          <li>
            <strong>Pilot ve havacılık:</strong> Beyaz veya açık mavi, apoletli,
            çift kapaklı cepli ve büyük ekiplerde birebir aynı ölçülerde
            üretim gerektiren modeller.
          </li>
          <li>
            <strong>Saha ekipleri ve işçi gömleği:</strong> Oxford veya daha
            kalın twill kumaşlar, güçlendirilmiş dikişler ve fonksiyonel
            cepler.
          </li>
        </ul>

        <h2>İş Gömleği Fiyatlarını Ne Belirler?</h2>
        <p>
          İş gömleği fiyatları tek bir rakamla ifade edilemez; birkaç
          değişkene göre şekillenir:
        </p>
        <ul>
          <li><strong>Kumaş:</strong> Pamuk oranı, dokuma tipi ve kumaş kalitesi.</li>
          <li><strong>Model ve detaylar:</strong> Cep sayısı, apolet, özel yaka veya manşet.</li>
          <li><strong>Logo uygulaması:</strong> Nakışın boyutu, renk sayısı ve konum adedi.</li>
          <li><strong>Sipariş adedi:</strong> Adet arttıkça birim maliyet düşer.</li>
          <li><strong>Paketleme:</strong> Bireysel paketleme, etiket ve kurumsal ambalaj.</li>
        </ul>

        <h2>Toptan İş Gömleği Siparişi ve Üretim Süreci</h2>
        <p>
          Toptan iş gömleği almak, hazır gömlek almaktan farklı bir süreçtir.
          Sipariş vermeden önce şunları planlayın:
        </p>
        <ul>
          <li>
            <strong>Minimum sipariş adedi:</strong> Üreticiden üreticiye
            değişir. Biz model ve renk başına 250 adetten itibaren üretime
            başlıyoruz; 250 adedin altındaki siparişler özel üretim olarak
            değerlendirilir.
          </li>
          <li>
            <strong>Numune:</strong> Toplu kesimden önce kalıbı ve logo
            nakışını numune üzerinde onaylayın.
          </li>
          <li>
            <strong>Beden dağılımı:</strong> Kadın kalıpları ve büyük bedenler
            dahil tüm ekibi kapsayan bir beden tablosu hazırlayın.
          </li>
          <li>
            <strong>Tekrar siparişler:</strong> Yeni çalışanlar ve yıpranan
            gömlekler için mutlaka tekrar sipariş vereceksiniz. Aynı kumaşı,
            tonu ve kalıbı aylar sonra da tutturabilen bir üreticiyle
            çalışın.
          </li>
        </ul>

        <h2>Sonuç</h2>
        <p>
          En iyi iş gömleği, ekibinizin rahatça giydiği ve firmanızın gururla
          gösterdiği gömlektir. Gömleğin nerede ve nasıl kullanılacağından
          yola çıkın, günlük yıkamaya dayanan bir kumaş seçin, logoyu nakışla
          ve tutarlı şekilde uygulayın ve her tekrar siparişte aynı gömleği
          üretebilen bir iş ortağıyla çalışın.
        </p>
      </section>

      <section className="faq-section">
        <div className="faq-heading">
          <p className="eyebrow">Sıkça Sorulan Sorular</p>
          <h2>İş gömleği hakkında merak edilenler.</h2>
        </div>
        <div className="faq-grid">
          <article className="faq-item">
            <h3>İş gömleği için en iyi kumaş hangisidir?</h3>
            <p>
              Çoğu ekip için kolay bakımlı pamuk-polyester karışımlar. Sık
              yıkamada çekmeye ve solmaya dayanıklıdır, nefes almaya devam
              eder. Premium kurumsal programlar için pamuklu poplin iyi bir
              seçimdir.
            </p>
          </article>
          <article className="faq-item">
            <h3>Logolu iş gömleğinde nakış mı baskı mı tercih edilmeli?</h3>
            <p>
              Dokuma iş gömleklerinde nakış. Daha profesyonel görünür ve
              gömleklik kumaşlarda baskıya göre yıkamaya çok daha uzun süre
              dayanır.
            </p>
          </article>
          <article className="faq-item">
            <h3>Toptan iş gömleği için minimum sipariş kaç adet?</h3>
            <p>
              Üreticiye göre değişir. Üretimimiz model ve renk başına 250
              adetten başlar; 250 adedin altındaki siparişler özel üretim
              olarak değerlendirilir.
            </p>
          </article>
          <article className="faq-item">
            <h3>İş gömleği üretimi ne kadar sürer?</h3>
            <p>
              Süre sipariş adedine ve kumaş tedarikine göre değişir; numune
              onayından sonra genellikle birkaç hafta ile birkaç ay arasındadır.
            </p>
          </article>
        </div>
      </section>

      <section className="article-cta">
        <h2>Firmanız için iş gömleği mi planlıyorsunuz?</h2>
        <p>
          Kumaş, logo nakışı, minimum sipariş ve tekrar üretim hakkında
          ekibimizle görüşün. Kurumsal, otel ve havacılık programlarınız için
          teklif alın.
        </p>
        <div className="article-cta-actions">
          <Link className="button" href="/tr/collection">
            Kurumsal Programları İncele
          </Link>
          <Link className="button button-ghost" href="/tr/contact">
            Teklif Al
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
