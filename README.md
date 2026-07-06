# Only Rent 介紹頁（官方首頁）

Only Rent 技能媒合平台的官方介紹頁。**一份程式碼、打包出中英兩版**，分別部署到各自網域：

| 版本 | 語言 | 網域 |
|------|------|------|
| `dist-zh/` | 繁體中文 | https://onlyrent.tw |
| `dist-en/` | English | https://onlyrent.sg |

技術：Vite 5 + React 18 + TypeScript。純前端靜態網站，無後端。

---

## 快速預覽（給要看畫面的人）

需要先裝 [Node.js](https://nodejs.org)（v18 以上）。

```sh
npm install      # 第一次先安裝套件
npm run dev      # 啟動開發預覽
```

跑起來後，終端機會顯示網址（預設 http://localhost:8090/），用瀏覽器打開即可。
預設顯示中文版；想看英文版：`npm run dev -- --mode en`。

> 打字機、跑馬燈、滑動進場、點 App 清單換圖等動態，開發預覽都看得到。

---

## 打包正式版

```sh
npm run build        # 一次打包中英兩版 → dist-zh/ 與 dist-en/
# 或分開打包：
npm run build:zh     # → dist-zh/（中文，onlyrent.tw）
npm run build:en     # → dist-en/（英文，onlyrent.sg）
```

打包完可本機預覽正式版：`npm run preview:zh` / `npm run preview:en`。

---

## 兩版本是怎麼運作的

- 語言由**打包參數**決定（`vite build --mode zh|en`，見 `vite.config.ts`），不是頁面內即時切換。
- 網址集中設定在 **`.env`**（`VITE_ZH_URL` / `VITE_EN_URL`）——要換網域改這裡就好。
- 每版 `index.html` 會依語言與網域自動填入 SEO：`<title>`、description、canonical、Open Graph、`hreflang`（中英互指）、JSON-LD 結構化資料。
- 頁尾「中文 / EN」不是頁內切換，而是**跳到另一個網域**。

## 設計 / 內容

- 大氣時尚風：純白 × 沉穩青綠 `#27C5D6`、大量留白、雜誌感排版。
- 區塊：Hero → 數據 → 技能不設限 → App 介紹 → 品牌宣言（關於）→ 常見問題 → 立即下載 → 頁尾。
- 文字全部在 `src/i18n/translations.ts`（zh / en 兩套），改文案只改這一個檔，兩版一起更新。

## 專案結構

```
src/
├─ assets/            圖片（logo、hero 手機圖、about 背景、App 截圖）
├─ components/
│  ├─ layout/         Nav、Footer、LegalModal
│  ├─ sections/       各區塊（Hero / Stats / Skills / AppFeatures / About / FAQ / CTA）
│  └─ ui/             Typewriter、CountUp、Reveal、DownloadButtons
├─ i18n/              語言與翻譯（translations.ts）
├─ data/              法律條款（服務條款 / 隱私政策）
└─ styles/main.css    全站樣式（檔尾有「大氣風改造覆蓋層」）
```

---

## 待處理（交付工程師）

- **App 下載連結**：iOS / Android / APK 目前是 placeholder（`href="#"`），上架後填入實際商店連結。位置：`src/components/ui/DownloadButtons.tsx`。
- 部署為 SPA：請設定 fallback，把非檔案請求都導回 `index.html`（否則 hash 錨點如 `#faq` 重整會 404）。
- `www.onlyrent.tw` 請 301 轉址到 `https://onlyrent.tw`（canonical 以不帶 www 為準）。
