import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export default function CountUp({ end, suffix = "", duration = 1400 }: CountUpProps) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!ref.current || started) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true);
          const startT = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - startT) / duration);
            const ease = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(end * ease));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end, duration, started]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}
