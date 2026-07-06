/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** 這份打包鎖定的語言：zh | en（由 --mode 決定，見 vite.config.ts） */
  readonly VITE_LANG: string;
  /** 中文版正式網址 */
  readonly VITE_ZH_URL: string;
  /** 英文版正式網址 */
  readonly VITE_EN_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
