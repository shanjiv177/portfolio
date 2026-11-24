"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useAnimate, useInView, useReducedMotion } from "motion/react";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { layers } from "@/data/site";

/*
 * The hero: a stack of layers from the OS up to the web.
 *
 * On load the slabs stack up from the bottom. Then a small "request" falls
 * through every layer (yellow) and comes back up as a response (green), and each slab presses
 * into its shadow as the request passes through its port. Tapping a slab opens
 * it to show what I've built at that level; the request loop pauses while one
 * is open, while the stack is offscreen, and entirely under reduced motion.
 */

// Left indents, top to bottom, so the slabs read as a hand-stacked pile.
const INDENT = ["ml-0", "ml-[3%]", "ml-[1%]", "ml-[5%]", "ml-0"];
const SHADOW = "4px 4px 0px 0px rgb(0, 0, 0)";
const PRESSED = "1px 1px 0px 0px rgb(0, 0, 0)";

export default function LayerStack() {
  const [scope, animate] = useAnimate();
  const [open, setOpen] = useState(null);
  const reduce = useReducedMotion();
  const inView = useInView(scope, { margin: "-10% 0px -10% 0px" });

  useEffect(() => {
    if (reduce || !inView || open !== null) return;
    const root = scope.current;
    const packet = root.querySelector("[data-packet]");
    let cancelled = false;
    const timers = new Set();
    const wait = (ms) =>
      new Promise((resolve) => {
        const t = setTimeout(() => {
          timers.delete(t);
          resolve();
        }, ms);
        timers.add(t);
      });

    function press(slab) {
      animate(
        slab,
        { x: [0, 3, 0], y: [0, 3, 0], boxShadow: [SHADOW, PRESSED, SHADOW] },
        { duration: 0.34, ease: "easeOut" }
      );
      const port = slab.querySelector("[data-port]");
      port.dataset.on = "true";
      const t = setTimeout(() => (port.dataset.on = "false"), 260);
      timers.add(t);
    }

    async function hop(y, i, slabs, duration) {
      if (cancelled) return false;
      await animate(packet, { y }, { duration, ease: [0.55, 0, 0.35, 1] });
      if (cancelled) return false;
      press(slabs[i]);
      return true;
    }

    async function run() {
      await wait(1300); // let the stack finish landing
      while (!cancelled) {
        // Measure every lap: a resize or font swap moves the ports.
        const top = root.getBoundingClientRect().top;
        const slabs = [...root.querySelectorAll("[data-slab]")];
        const ys = slabs.map((s) => {
          const b = s.querySelector("[data-port]").getBoundingClientRect();
          return b.top + b.height / 2 - top - 10; // centre the 20px request on the port
        });
        const start = ys[0] - 44;

        packet.dataset.dir = "down";
        await animate(packet, { y: start, opacity: 0 }, { duration: 0 });
        await animate(packet, { opacity: 1 }, { duration: 0.18 });
        for (let i = 0; i < ys.length; i++) {
          if (!(await hop(ys[i], i, slabs, i === 0 ? 0.38 : 0.28))) return;
        }
        await wait(220);
        if (cancelled) return;
        packet.dataset.dir = "up";
        for (let i = ys.length - 2; i >= 0; i--) {
          if (!(await hop(ys[i], i, slabs, 0.24))) return;
        }
        if (cancelled) return;
        await animate(packet, { y: start, opacity: 0 }, { duration: 0.3 });
        await wait(2400);
      }
    }

    run();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      root.querySelectorAll("[data-port]").forEach((p) => (p.dataset.on = "false"));
      animate(packet, { opacity: 0 }, { duration: 0.15 });
    };
  }, [inView, open, reduce, animate, scope]);

  return (
    <div>
      <div ref={scope} className="relative pt-12 pr-1 pb-1">
        {/* The lane the request travels down; visible in the gaps between slabs */}
        <div aria-hidden className="absolute top-0 bottom-0 right-[28.5px] w-[3px] bg-ink" />
        <div
          aria-hidden
          data-packet
          data-dir="down"
          className="absolute top-0 right-5 z-20 size-5 border-2 border-ink bg-web3 shadow-[2px_2px_0_0_var(--ink)] opacity-0 data-[dir=up]:bg-networks pointer-events-none"
        />

        <ul className="relative z-10 space-y-3">
          {layers.map((layer, i) => {
            const isOpen = open === i;
            const fg = layer.dark ? "text-panel" : "text-ink";
            return (
              <motion.li
                key={layer.id}
                className={INDENT[i]}
                initial={reduce ? false : { opacity: 0, y: -28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 520,
                  damping: 30,
                  delay: 0.25 + (layers.length - 1 - i) * 0.09, // bottom layer lands first
                }}
              >
                <div
                  data-slab
                  className={`border-2 border-ink ${fg}`}
                  style={{ background: layer.color, boxShadow: SHADOW }}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`layer-${layer.id}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="relative flex w-full items-center gap-3 py-3.5 pl-4 pr-14 text-left"
                  >
                    {isOpen ? (
                      <Minus className="size-5 shrink-0" aria-hidden />
                    ) : (
                      <Plus className="size-5 shrink-0" aria-hidden />
                    )}
                    <span className="heading text-xl sm:text-2xl">{layer.name}</span>
                    <span className="ml-auto text-sm font-semibold opacity-80 hidden sm:inline">
                      {layer.work.length} {layer.work.length === 1 ? "thing" : "things"}
                    </span>
                    {/* The port the request passes through */}
                    <span
                      aria-hidden
                      data-port
                      data-on="false"
                      className={`absolute right-5 top-1/2 -translate-y-1/2 size-3 border-2 transition-colors duration-150 ${
                        layer.dark
                          ? "border-panel bg-ink data-[on=true]:bg-panel"
                          : "border-ink bg-panel data-[on=true]:bg-ink"
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`layer-${layer.id}`}
                        role="region"
                        aria-label={layer.name}
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduce ? { height: 0, opacity: 0, transition: { duration: 0 } } : { height: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 520, damping: 44 }}
                        className="overflow-hidden"
                      >
                        <ul
                          className={`mx-4 mb-4 border-t-2 pt-3 space-y-2 ${
                            layer.dark ? "border-panel" : "border-ink"
                          }`}
                        >
                          {layer.work.map((w) => (
                            <li key={w.text}>
                              <Link
                                href={w.href}
                                className={`group inline-flex items-start gap-2 font-medium leading-snug underline decoration-transparent decoration-2 underline-offset-4 ${
                                  layer.dark ? "hover:decoration-panel" : "hover:decoration-ink"
                                }`}
                              >
                                <ArrowRight
                                  className="mt-[0.2em] size-4 shrink-0 transition-transform group-hover:translate-x-0.5"
                                  aria-hidden
                                />
                                {w.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
      <p className="mt-4 text-[0.98rem] text-ink-soft">
        Tap a layer to see what I&apos;ve built at that level.
      </p>
    </div>
  );
}
