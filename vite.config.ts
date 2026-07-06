import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { T } from "./src/i18n/translations";

type SiteLang = "zh" | "en";

/**
 * 依語言的 SEO 文案。畫面文字走 src/i18n/translations.ts；
 * 這裡只放「搜尋引擎 / 社群分享」用的 meta（標題、描述、關鍵字）。
 */
const META: Record<SiteLang, {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImageAlt: string;
  ogLocale: string;
  ogLocaleAlt: string;
  htmlLang: string;
  orgAlternateName: string;
  orgDescription: string;
}> = {
  zh: {
    title: "Only Rent — 隨時隨地開始你的發案平台",
    description:
      "Only Rent 是一款任務配對平台，讓發案更安心、接案更自由。透過透明機制與金流保障，建立雙方真正的信任。下載 App，開始接案或發案。",
    keywords:
      "Only Rent, 接案平台, 發案平台, 任務配對, 自由工作, 接案 App, 技能變現, 攝影接案, 家教媒合, 寵物保母, 美甲美睫",
    ogTitle: "Only Rent — 隨時隨地開始你的發案平台",
    ogDescription:
      "任務配對平台，發案更安心、接案更自由。透過透明機制與金流保障，讓你的每一份才華都被看見。",
    ogImageAlt: "Only Rent 任務配對平台",
    ogLocale: "zh_TW",
    ogLocaleAlt: "en_US",
    htmlLang: "zh-TW",
    orgAlternateName: "煦澄科技有限公司",
    orgDescription:
      "Only Rent 是來自新加坡、台灣首發的任務配對平台。打造新型態自由工作生態，讓每一種才華都被看見。",
  },
  en: {
    title: "Only Rent — Start Freelancing Anytime, Anywhere",
    description:
      "Only Rent is a task-matching platform that makes posting jobs safer and freelancing freer. With transparent rules and protected payments, download the app to start posting or taking jobs today.",
    keywords:
      "Only Rent, freelance platform, gig platform, task matching, freelancing, freelance app, monetize skills, photography gigs, tutoring, pet sitting, nail art",
    ogTitle: "Only Rent — Start Freelancing Anytime, Anywhere",
    ogDescription:
      "A task-matching platform — post jobs with confidence, freelance with freedom. Transparent rules and protected payments so every talent gets seen.",
    ogImageAlt: "Only Rent task-matching platform",
    ogLocale: "en_US",
    ogLocaleAlt: "zh_TW",
    htmlLang: "en",
    orgAlternateName: "Hsu Cheng Technology Co., Ltd.",
    orgDescription:
      "Only Rent is a Singapore-born, Taiwan-first task-matching platform, building a new freelance ecosystem where every talent gets seen.",
  },
};

/** HTML 屬性用的最小逸出（描述/關鍵字內含 & 或 " 時保險） */
function escAttr(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function buildSeo(lang: SiteLang, zhUrl: string, enUrl: string): string {
  const self = lang === "zh" ? zhUrl : enUrl;
  const m = META[lang];
  const t = T[lang];
  const jsonld = (obj: unknown) =>
    `<script type="application/ld+json">\n${JSON.stringify(obj, null, 2)}\n    </script>`;

  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Only Rent",
    alternateName: m.orgAlternateName,
    url: `${self}/`,
    logo: `${self}/favicon.png`,
    description: m.orgDescription,
    email: "support@onlyrent.tw",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "SG",
        streetAddress: "1 North Bridge Road #01-37 High Street Centre",
        postalCode: "179094",
      },
    },
    address: [
      {
        "@type": "PostalAddress",
        addressCountry: "TW",
        addressLocality: lang === "zh" ? "台北市中正區" : "Zhongzheng Dist., Taipei",
        streetAddress:
          lang === "zh" ? "金山北路一號六樓之三" : "6F-3, No. 1, Jinshan N. Rd.",
        email: "support@onlyrent.tw",
      },
      {
        "@type": "PostalAddress",
        addressCountry: "SG",
        streetAddress: "1 North Bridge Road #01-37 High Street Centre",
        postalCode: "179094",
        email: "support@onlyrent.sg",
      },
    ],
    sameAs: [],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Only Rent",
    url: `${self}/`,
    inLanguage: lang === "zh" ? "zh-TW" : "en",
    publisher: { "@type": "Organization", name: "Only Rent" },
  };

  const app = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Only Rent",
    operatingSystem: "iOS, Android",
    applicationCategory: "BusinessApplication",
    description: m.description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "TWD" },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a.replace(/\n/g, " ") },
    })),
  };

  const lines = [
    `<title>${m.title}</title>`,
    `<meta name="description" content="${escAttr(m.description)}" />`,
    `<meta name="author" content="Only Rent" />`,
    `<meta name="keywords" content="${escAttr(m.keywords)}" />`,
    `<link rel="canonical" href="${self}/" />`,
    ``,
    `<!-- hreflang：告訴搜尋引擎兩個網域是同一頁的中／英版本 -->`,
    `<link rel="alternate" hreflang="zh-TW" href="${zhUrl}/" />`,
    `<link rel="alternate" hreflang="en" href="${enUrl}/" />`,
    `<link rel="alternate" hreflang="x-default" href="${zhUrl}/" />`,
    ``,
    `<!-- Open Graph -->`,
    `<meta property="og:title" content="${escAttr(m.ogTitle)}" />`,
    `<meta property="og:description" content="${escAttr(m.ogDescription)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${self}/" />`,
    `<meta property="og:site_name" content="Only Rent" />`,
    `<meta property="og:locale" content="${m.ogLocale}" />`,
    `<meta property="og:locale:alternate" content="${m.ogLocaleAlt}" />`,
    `<meta property="og:image" content="${self}/og-image.jpg" />`,
    `<meta property="og:image:type" content="image/jpeg" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${escAttr(m.ogImageAlt)}" />`,
    ``,
    `<!-- Twitter Card -->`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:site" content="@onlyrent" />`,
    `<meta name="twitter:title" content="${escAttr(m.ogTitle)}" />`,
    `<meta name="twitter:description" content="${escAttr(m.ogDescription)}" />`,
    `<meta name="twitter:image" content="${self}/og-image.jpg" />`,
    ``,
    jsonld(org),
    jsonld(website),
    jsonld(app),
    jsonld(faq),
  ];

  return lines.join("\n    ");
}

function buildSitemap(lang: SiteLang, zhUrl: string, enUrl: string): string {
  const self = lang === "zh" ? zhUrl : enUrl;
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${self}/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="zh-TW" href="${zhUrl}/" />
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${zhUrl}/" />
  </url>
</urlset>
`;
}

function buildRobots(lang: SiteLang, zhUrl: string, enUrl: string): string {
  const self = lang === "zh" ? zhUrl : enUrl;
  return `User-agent: *
Allow: /

Sitemap: ${self}/sitemap.xml
`;
}

/** 依打包語言注入 SEO、並輸出對應網域的 sitemap.xml / robots.txt */
function seoInject(lang: SiteLang, zhUrl: string, enUrl: string): Plugin {
  return {
    name: "only-rent-seo-inject",
    transformIndexHtml: {
      order: "pre",
      handler(html) {
        return html
          .replace(/__HTML_LANG__/g, META[lang].htmlLang)
          .replace("<!--__SEO__-->", buildSeo(lang, zhUrl, enUrl));
      },
    },
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: buildSitemap(lang, zhUrl, enUrl),
      });
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: buildRobots(lang, zhUrl, enUrl),
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const lang: SiteLang = env.VITE_LANG === "en" ? "en" : "zh";
  const zhUrl = env.VITE_ZH_URL || "https://onlyrent.tw";
  const enUrl = env.VITE_EN_URL || "https://onlyrent.sg";

  return {
    base: "/",
    server: {
      host: "::",
      port: 8090,
    },
    plugins: [react(), seoInject(lang, zhUrl, enUrl)],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
