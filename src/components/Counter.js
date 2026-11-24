"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

// Counts up to `value` once, the first time it scrolls into view.
export default function Counter({ value, suffix = "", className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  const format = (v) => Math.round(v).toLocaleString("en-IN") + suffix;

  useEffect(() => {
    if (!inView || !ref.current) return;
    if (reduce || value === 0) {
      ref.current.textContent = format(value);
      return;
    }
    const controls = animate(0, value, {
      duration: Math.min(1.6, 0.6 + Math.log10(value + 1) * 0.3),
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = format(v);
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, value]);

  // Server render shows the real number, so it reads correctly without JS.
  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {format(value)}
    </span>
  );
}
