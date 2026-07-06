import { useEffect, useState } from "react";

interface TypewriterProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  waitTime?: number;
  prefix?: string;
}

export default function Typewriter({
  texts,
  speed = 80,
  deleteSpeed = 40,
  waitTime = 1800,
  prefix = "",
}: TypewriterProps) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setDisplay("");
    setIdx(0);
    setDeleting(false);
  }, [texts]);

  useEffect(() => {
    const cur = texts[idx];
    let t: ReturnType<typeof setTimeout> | undefined;
    if (!deleting && display === cur) {
      t = setTimeout(() => setDeleting(true), waitTime);
    } else if (deleting && display === "") {
      setDeleting(false);
      setIdx((p) => (p + 1) % texts.length);
    } else {
      t = setTimeout(() => {
        setDisplay((p) => (deleting ? p.slice(0, -1) : cur.slice(0, p.length + 1)));
      }, deleting ? deleteSpeed : speed);
    }
    return () => clearTimeout(t);
  }, [display, deleting, idx, texts, speed, deleteSpeed, waitTime]);

  return (
    <span className="tw-line" style={{ flexDirection: "column" }}>
      {prefix && <span className="tw-prefix">{prefix}</span>}
      <span className="tw-word">{display}</span>
      <span className="tw-cursor" />
    </span>
  );
}
