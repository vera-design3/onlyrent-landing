export type Lang = "zh" | "en";

export interface Translation {
  nav: { pain: string; skills: string; steps: string; app: string; about: string; faq: string; download: string };
  hero: { badge: string; prefix: string; typewriter: string[]; subtitle: string };
  dl: {
    ios: { small: string; store: string };
    android: { small: string; store: string };
    apk: { small: string; store: string };
  };
  stats: Array<{ num: number; suffix: string; label: string }>;
  pain: {
    eyebrow: string;
    title1: string;
    title2: string;
    lead: string;
    cards: Array<{ title: string; desc: string }>;
  };
  skills: {
    eyebrow: string;
    title1: string;
    title2: string;
    lead: string;
    footnote: string;
    rowA: string[];
    rowB: string[];
  };
  steps: {
    eyebrow: string;
    title1: string;
    title2: string;
    lead: string;
    tabs: { taker: string; poster: string };
    taker: Array<{ title: string; desc: string }>;
    poster: Array<{ title: string; desc: string }>;
  };
  features: {
    eyebrow: string;
    title1: string;
    title2: string;
    items: Array<{ title: string; sub: string }>;
  };
  about: {
    eyebrow: string;
    title1: string;
    title2: string;
    title3: string;
    p1: string;
    p2: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Array<{ q: string; a: string }>;
  };
  cta: { title: string; note: string };
  footer: {
    brand: string;
    product: string;
    links: { steps: string; skills: string; download: string; faq: string };
    tw: string;
    twBody: string;
    sg: string;
    sgBody: string;
    contact: string;
    line: string;
    copyright: string;
    terms: string;
    privacy: string;
  };
}

export const T: Record<Lang, Translation> = {
  zh: {
    nav: { pain: "痛點", skills: "技能不設限", steps: "如何運作", app: "App 介紹", about: "關於我們", faq: "常見問題", download: "立即下載" },
    hero: {
      badge: "不受時間拘束，隨時隨地開始",
      prefix: "今天我想",
      typewriter: ["接攝影案", "教吉他", "做個 logo", "找臨時人手", "找寵物保母"],
      subtitle:
        "Only Rent 是一款任務配對平台，讓發案更安心、接案更自由。\n透過透明機制與金流保障，建立雙方真正的信任。",
    },
    dl: {
      ios: { small: "Download on\n", store: "App Store" },
      android: { small: "GET IT ON", store: "Google Play" },
      apk: { small: "直接下載", store: "APK 檔" },
    },
    stats: [
      { num: 17, suffix: "+", label: "技能類別" },
      { num: 3, suffix: " 步", label: "輕鬆完成合作" },
      { num: 100, suffix: "%", label: "金流保障" },
    ],
    pain: {
      eyebrow: "＃你是不是常覺得",
      title1: "自由工作",
      title2: "不該為這些事煩惱",
      lead: "我們訪談了數百位自由工作者與案主，把最頭痛的問題整理成這 6 件事\n每一個，都是 Only Rent 想替你解決的。",
      cards: [
        { title: "工作自由度低", desc: "想自己掌控時間與接案節奏，卻被傳統雇傭關係綁住，沒有彈性。" },
        { title: "接案缺乏曝光", desc: "技能再好、作品再多，沒有平台讓客戶主動找上門，被動等機會。" },
        { title: "收入沒有保障", desc: "口頭承諾常常跳票，遇到惡意拖款、欠款，求助無門。" },
        { title: "雙方互信不足", desc: "沒做過的人不敢接，沒合作過的人不敢給單，建立信任成本很高。" },
        { title: "找人耗時耗力", desc: "臨時缺人手、急件需求，發了訊息石沉大海，最後只能自己硬撐。" },
        { title: "專業沒被看見", desc: "履歷與學歷不能代表全部，真正的能力與口碑被市場標籤掩蓋。" },
      ],
    },
    skills: {
      eyebrow: "＃技能不設限",
      title1: "每一種才華",
      title2: "都值得被看見",
      lead: "從影音剪輯、設計、家教、美容美甲，到臨時人手與活動支援，各種技能都能找到舞台",
      footnote: "平台會嚴格控管，禁止非法或違規技能的發佈",
      rowA: ["影音剪輯", "平面設計", "家教", "語言學習", "工程開發", "會計", "個人助理", "行銷", "美容保養"],
      rowB: ["美甲美睫", "寵物保母", "毛孩陪玩", "保潔人員", "水電", "油漆", "機場接送", "活動支援", "烘焙"],
    },
    steps: {
      eyebrow: "＃預約 & 搶單",
      title1: "只需 3 步驟",
      title2: "輕鬆完成合作",
      lead: "無論是臨時缺人或是想展示技能，都能透過簡單三步驟完成。",
      tabs: { taker: "我要接案", poster: "我要發案" },
      taker: [
        { title: "發布技能 / 搶單", desc: "註冊後，自由發布你的服務或瀏覽案件，主動搶單建立合作。" },
        { title: "媒合 & 確認", desc: "雙方透過個人檔案、評價與聊天確認需求，達成共識後成立任務。" },
        { title: "完成 & 收款", desc: "服務完成後，平台金流自動撥款，雙方留下評價，累積信任。" },
      ],
      poster: [
        { title: "發布需求", desc: "說明你需要的服務、時間與預算，30 秒就能發出一張案件。" },
        { title: "篩選人選", desc: "達人主動搶單，瀏覽他們的作品與評價，挑選最合適的人。" },
        { title: "安心付款", desc: "款項由平台代管，服務完成後撥款，建立有溫度的合作關係。" },
      ],
    },
    features: {
      eyebrow: "＃App 一覽",
      title1: "所有你需要的",
      title2: "都在一支手機裡",
      items: [
        { title: "創造你的事業", sub: "任何技能都能發佈變現" },
        { title: "彈性安排工時", sub: "時間自由調配" },
        { title: "瀏覽案件主動搶單", sub: "找到合適任務，一鍵搶單建立合作" },
        { title: "一對一即時對談", sub: "App 內溝通，細節確認更安心" },
        { title: "用戶實名認證", sub: "身份證 + 人臉驗證，確保交易更安心" },
        { title: "個資不提前公開", sub: "訂單成立前完全隱藏，保護雙方隱私" },
        { title: "透明真實互評", sub: "雙向評分系統，累積專屬信用" },
        { title: "打造職人頁面", sub: "展現個人風格作品集" },
        { title: "社群互動圈", sub: "分享日常、累積粉絲，被更多人看見" },
      ],
    },
    about: {
      eyebrow: "Only Rent 不只是個 App，更是一種態度",
      title1: "你的價值不被定義",
      title2: "而是",
      title3: "由你自己決定",
      p1: "我們是 Only Rent，一家來自新加坡的公司，創立於一個簡單卻有力量的信念 —— 你的價值，由你決定。\n\n在這個世界，太多人被工作定義，被市場標籤限制，被學歷或履歷決定價值。但我們相信，每一個人都有屬於自己的能力和獨特之處，都值得被看見、被選擇、被尊重。Only Rent 就是為了這樣的人而誕生：一個真正屬於人的服務平台。",
      p2: "在 Only Rent，你可以自由發布你擅長的服務，無論是美甲、攝影、烘焙、居家清潔、才藝教學，還是任何一項技能。你可以自己設定價格、服務方式和時間，成為自己的老闆。同時，客戶也可以發布需求，讓服務者主動搶單，建立更有溫度、更直接的連結。\n\n我們從東南亞出發，把台灣作為第一站，因為我們看見這裡有最多願意打破框架、敢於嘗試、渴望自由的年輕人。Only Rent 要打造一個新型態的工作生態，讓「自由職業」真正成為一種自由、一個選擇、一種生活方式。",
    },
    faq: {
      eyebrow: "FAQ",
      title: "常見問題",
      items: [
        { q: "我沒有工作室或公司，可以使用 Only Rent 嗎？", a: "可以。\nOnly Rent 開放給所有個人使用，不需要公司或工作室即可註冊。\n不論你是想發案找人協助，或想利用空閒時間接案，都能自由加入。" },
        { q: "我可以同時是發案者與接案者嗎？", a: "可以。\n你可以依需求自由切換身份，今天發案、明天接案，彈性使用平台服務。" },
        { q: "接案有時間或地點限制嗎？", a: "沒有。\n你可以依照自己的時間安排，自行選擇想接的案件、服務時段與地區，享受更自由的接案方式。" },
        { q: "平台允許哪些技能或服務？", a: "Only Rent 不限制你的技能類型。\n從攝影、美甲、家教到生活協助，只要合法且符合平台規範，都可以自由發佈。\n平台禁止任何違法、危險、侵害他人權益或違反善良風俗之內容（包含詐騙、侵權、色情、毒品等），違規帳號將被停權或永久封鎖。" },
        { q: "平台如何收費？", a: "Only Rent 採平台服務費機制。\n任務成立後，平台將依訂單金額收取一定比例服務費，用於支付金流、客服、平台維護與交易保障等服務，實際費率將依平台公告為準。" },
        { q: "為什麼需要身分驗證？", a: "為了保障平台交易安全。\n平台會要求達人完成手機驗證與政府核發證件驗證，用於確認身份真實性、降低詐騙風險，並保障雙方交易權益。" },
        { q: "我的個人資料會被公開嗎？", a: "不會。\n在任務正式成立前，平台不會公開雙方個人資訊，所有溝通皆於 App 內進行。\n付款與金流服務由綠界科技（ECPay）處理，平台不會保存你的信用卡或銀行帳戶資訊。" },
        { q: "如果任務沒有完成或發生爭議怎麼辦？", a: "你可以透過平台提出爭議申請。\n若任務過程發生問題，案主可於訂單完成後 7 日內提出申訴。\n平台將依據雙方對話紀錄、訂單資訊與實際情況協助處理退款或爭議事項。" },
      ],
    },
    cta: { title: "立即下載 Only Rent", note: "馬上開始接案或發案" },
    footer: {
      brand: "每一種才華都值得被看見。\n從新加坡出發，台灣首發 — 打造新型態的自由工作生態。",
      product: "產品",
      links: { steps: "如何運作", skills: "技能類別", download: "立即下載", faq: "常見問題" },
      tw: "台灣 Taiwan",
      twBody: "煦澄科技有限公司\n台北市中正區金山北路一號六樓之三\nsupport@onlyrent.tw",
      sg: "新加坡 Singapore",
      sgBody: "Only Rent Technology (S) Pte. Ltd.\n1 North Bridge Road #01-37\nHigh Street Centre Singapore 179094",
      contact: "聯絡我們",
      line: "LINE 官方帳號",
      copyright: "© 2026 Only Rent. All rights reserved.",
      terms: "服務條款",
      privacy: "隱私政策",
    },
  },
  en: {
    nav: { pain: "Pain Points", skills: "Skills", steps: "How It Works", app: "The App", about: "About Us", faq: "FAQ", download: "Download" },
    hero: {
      badge: "Anytime, anywhere — start now",
      prefix: "Today I want to",
      typewriter: ["take a photoshoot", "teach guitar", "design a logo", "find extra help", "find a pet sitter"],
      subtitle:
        "Only Rent is a task-matching platform that makes posting jobs safer and freelancing freer.\nWith transparent rules and protected payments, we build real trust between both sides.",
    },
    dl: {
      ios: { small: "Download on", store: "App Store" },
      android: { small: "GET IT ON", store: "Google Play" },
      apk: { small: "Direct Download", store: "APK File" },
    },
    stats: [
      { num: 17, suffix: "+", label: "Skill Categories" },
      { num: 3, suffix: " Steps", label: "To Get Started" },
      { num: 100, suffix: "%", label: "Payment Protection" },
    ],
    pain: {
      eyebrow: "#Do you often feel...",
      title1: "Freelancing",
      title2: "shouldn't be this hard",
      lead: "We interviewed hundreds of freelancers and clients, and these are the 6 biggest pain points\nEvery one — Only Rent is here to solve.",
      cards: [
        { title: "Lack of flexibility", desc: "You want to control your own time and pace, but traditional employment ties your hands." },
        { title: "Limited exposure", desc: "Even with great work, there's no platform where clients come to you — you wait passively." },
        { title: "No income security", desc: "Verbal promises fall through; late payments and bad debts leave you with no recourse." },
        { title: "Trust gap", desc: "Newcomers can't get jobs; clients hesitate to hire unknowns — building trust is expensive." },
        { title: "Hiring takes forever", desc: "Last-minute help, urgent jobs — messages go unanswered, you end up doing it yourself." },
        { title: "Talent goes unseen", desc: "Résumés and diplomas don't tell the full story — real skills get hidden behind labels." },
      ],
    },
    skills: {
      eyebrow: "#Skills without limits",
      title1: "Every talent",
      title2: "deserves to be seen",
      lead: "From video editing, design, tutoring, and beauty services to event support — every skill has a stage.",
      footnote: "The platform strictly screens and prohibits illegal or violating skill listings.",
      rowA: ["Video Editing", "Graphic Design", "Tutoring", "Languages", "Engineering", "Accounting", "Personal Assistant", "Marketing", "Beauty Care"],
      rowB: ["Nail Art", "Pet Sitting", "Pet Playmate", "Cleaning", "Plumbing", "Painting", "Airport Transfer", "Event Support", "Baking"],
    },
    steps: {
      eyebrow: "#Book & Grab",
      title1: "Just 3 steps",
      title2: "to seal the deal",
      lead: "Whether you need help fast or want to showcase your skills, three simple steps does it.",
      tabs: { taker: "I'm offering", poster: "I'm hiring" },
      taker: [
        { title: "Post skill / Grab task", desc: "Sign up, list your services, or browse jobs and grab the ones you want." },
        { title: "Match & confirm", desc: "Confirm details via profiles, reviews, and chat. Lock in the task when ready." },
        { title: "Deliver & get paid", desc: "Once done, the platform releases payment automatically. Both sides leave reviews." },
      ],
      poster: [
        { title: "Post your need", desc: "Describe the service, time, and budget — a task goes live in 30 seconds." },
        { title: "Pick your person", desc: "Pros grab your task; review their portfolios and ratings, choose the best fit." },
        { title: "Pay with peace of mind", desc: "Funds are held by the platform until the job is done — clean, warm collaboration." },
      ],
    },
    features: {
      eyebrow: "#App Overview",
      title1: "Everything you need,",
      title2: "all in one phone",
      items: [
        { title: "Build your business", sub: "Any skill, instantly monetizable" },
        { title: "Flexible scheduling", sub: "Set your own hours" },
        { title: "Grab tasks live", sub: "Find the right job, claim it in one tap" },
        { title: "1-on-1 live chat", sub: "Confirm details inside the app, in real time" },
        { title: "Verified identities", sub: "ID + face recognition for safer transactions" },
        { title: "Privacy first", sub: "Personal info hidden until the task is confirmed" },
        { title: "Honest two-way reviews", sub: "Build credit through transparent ratings" },
        { title: "Pro profile pages", sub: "Showcase your style and portfolio" },
        { title: "Community circle", sub: "Share daily life, grow followers organically" },
      ],
    },
    about: {
      eyebrow: "Only Rent isn't just an app — it's an attitude",
      title1: "Your value isn't defined for you —",
      title2: "",
      title3: "you decide it",
      p1: "Only Rent is a service platform from Singapore, built on a simple yet powerful belief: your value should be defined by you.\n\nIn today's world, people are often boxed in by job titles, resumes, and market expectations. But we believe everyone has something unique to offer — a skill, a passion, a way to connect. Only Rent exists to unlock that potential.",
      p2: "Here, individuals can list the services they're good at — from nail art, photography, and baking to home cleaning and private lessons. You decide your prices, schedule, and how you work. You're in control. At the same time, customers can post what they need, and you can actively respond. This creates a more open, direct, and human way to connect.\n\nWe're launching in Southeast Asia, starting with Taiwan — a place full of bold, creative, freedom-driven individuals. Our mission is to help shape a new kind of work culture — one where freelancing isn't just an option, but a real, sustainable lifestyle.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently Asked",
      items: [
        { q: "Can I use Only Rent without a studio or company?", a: "Yes.\nOnly Rent is open to individuals — no company or studio needed to register.\nWhether you want to hire help or offer services in your free time, you're welcome." },
        { q: "Can I be both poster and taker?", a: "Yes.\nSwitch roles whenever you like — post jobs today, take jobs tomorrow." },
        { q: "Are there time or location restrictions?", a: "No.\nChoose tasks, service hours, and regions on your own schedule." },
        { q: "What skills or services are allowed?", a: "Only Rent does not limit skill type.\nFrom photography and nails to tutoring and household help — anything legal and within platform rules can be listed.\nWe ban illegal, dangerous, or harmful content (fraud, infringement, adult, drugs, etc.). Violating accounts will be suspended or permanently banned." },
        { q: "How does pricing work?", a: "Only Rent charges a platform service fee.\nOnce a task is confirmed, a percentage is deducted to cover payments, support, maintenance, and protection. Exact rates follow platform announcements." },
        { q: "Why do you need identity verification?", a: "To keep transactions safe.\nPros are required to complete phone and government ID verification to confirm identity, reduce fraud, and protect both parties." },
        { q: "Will my personal info be public?", a: "No.\nBefore a task is confirmed, neither side's info is exposed — all chat happens inside the app.\nPayments are processed by ECPay; we never store your card or bank details." },
        { q: "What if a task isn't completed or a dispute arises?", a: "You can file a dispute through the platform.\nClients have 7 days after order completion to submit a complaint.\nWe review chat history, order info, and actual circumstances to help resolve refunds or disputes." },
      ],
    },
    cta: { title: "Download Only Rent Now", note: "Start posting or taking jobs today" },
    footer: {
      brand: "Every talent deserves to be seen.\nFrom Singapore, launching in Taiwan — building a new freelance ecosystem.",
      product: "Product",
      links: { steps: "How It Works", skills: "Skills", download: "Download", faq: "FAQ" },
      tw: "Taiwan",
      twBody: "Hsu Cheng Technology Co., Ltd.\n6F-3, No. 1, Jinshan N. Rd., Zhongzheng Dist., Taipei\nsupport@onlyrent.tw",
      sg: "Singapore",
      sgBody: "Only Rent Technology (S) Pte. Ltd.\n1 North Bridge Road #01-37\nHigh Street Centre Singapore 179094",
      contact: "Contact Us",
      line: "Official LINE",
      copyright: "© 2026 Only Rent. All rights reserved.",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
    },
  },
};
