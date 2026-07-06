import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { T, type Lang, type Translation } from "./translations";

interface LangContextValue {
  lang: Lang;
  t: Translation;
  setLang: (lang: Lang) => void;
}

const LangContext = createContext<LangContextValue>({
  lang: "zh",
  t: T.zh,
  setLang: () => {},
});

// 語言由打包參數 VITE_LANG 鎖定（中文網域 → zh，英文網域 → en）。
// 這份網站不再於頁面內切換語言；切語言＝跳到另一個網域（見 Footer）。
const LOCKED_LANG: Lang = import.meta.env.VITE_LANG === "en" ? "en" : "zh";

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(LOCKED_LANG);

  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : "zh-TW";
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, t: T[lang], setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useT() {
  return useContext(LangContext);
}

export type { Lang, Translation };
