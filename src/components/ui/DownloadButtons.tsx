import { type CSSProperties, type ReactElement } from "react";
import { useT } from "@/i18n";

interface DLItem {
  key: "ios" | "android" | "apk";
  cls: string;
  svg: ReactElement;
}

const DL_ITEMS: DLItem[] = [
  {
    key: "ios",
    cls: "btn-dl-ios",
    svg: (
      <path
        fill="currentColor"
        d="M16.365 1.43c0 1.14-.46 2.23-1.21 3.01-.81.86-2.13 1.52-3.21 1.43-.14-1.12.41-2.27 1.13-3.01.83-.85 2.23-1.49 3.29-1.43zM21.5 17.43c-.5 1.13-.74 1.63-1.39 2.63-.91 1.4-2.19 3.14-3.78 3.15-1.41.02-1.78-.92-3.7-.91-1.92.01-2.32.93-3.74.91-1.59-.02-2.81-1.6-3.72-3-2.54-3.9-2.81-8.48-1.24-10.91 1.11-1.71 2.87-2.71 4.52-2.71 1.68 0 2.74.92 4.13.92 1.35 0 2.17-.92 4.11-.92 1.47 0 3.03.8 4.13 2.18-3.63 1.99-3.04 7.18.68 8.66z"
      />
    ),
  },
  {
    key: "android",
    cls: "btn-dl-android",
    svg: (
      <>
        <path fill="#34A853" d="M3.6 2.5c-.4.4-.6 1-.6 1.7v15.6c0 .7.2 1.3.6 1.7L12 12.5 3.6 2.5z" />
        <path fill="#FBBC04" d="M16.4 8.2L5.4 2 12 11.4l4.4-3.2z" />
        <path fill="#EA4335" d="M3.6 21.5L12 12.5l3 3.4-9.6 5.6c-.6.3-1.3.3-1.8 0z" />
        <path fill="#4285F4" d="M20.4 11.3l-3.4-2L13.5 12l3.5 3 3.4-2c1.1-.6 1.1-2.1 0-2.7z" />
      </>
    ),
  },
  {
    key: "apk",
    cls: "btn-dl-apk",
    svg: (
      <path
        d="M12 3v12m0 0l-4-4m4 4l4-4M5 19h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
];

interface DownloadButtonsProps {
  apkStyle?: CSSProperties;
}

export default function DownloadButtons({ apkStyle }: DownloadButtonsProps) {
  const { t } = useT();
  return (
    <>
      {DL_ITEMS.map((it) => {
        const text = t.dl[it.key];
        return (
          <a
            key={it.key}
            href="#"
            className={`btn btn-dl ${it.cls}`}
            style={it.key === "apk" ? apkStyle : undefined}
          >
            <svg className="dl-icon" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              {it.svg}
            </svg>
            <span className="dl-meta">
              <span className="dl-small">{text.small}</span>
              <span className="dl-store">{text.store}</span>
            </span>
          </a>
        );
      })}
    </>
  );
}
