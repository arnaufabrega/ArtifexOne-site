"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Check, X } from "lucide-react";
import { useTranslations } from "next-intl";

const ease = [0.22, 1, 0.36, 1] as const;

const KineticHeadline = ({
  prefix,
  strike,
  middle,
  emphasis,
  suffix,
  play,
}: {
  prefix: string;
  strike: string;
  middle: string;
  emphasis: string;
  suffix: string;
  play: boolean;
}) => {
  const reduce = useReducedMotion();
  return (
    <h2 className="font-display text-3xl sm:text-4xl md:text-[3.25rem] md:leading-[1.08] font-bold text-charcoal leading-tight tracking-tight">
      <span>{prefix} </span>
      <span className="relative inline-block whitespace-nowrap align-baseline">
        <motion.span
          className="relative text-charcoal"
          initial={{ color: "#1A1A1A" }}
          animate={play ? { color: "#6B6560" } : undefined}
          transition={{ duration: 0.4, delay: reduce ? 0 : 0.55, ease }}
        >
          {strike}
        </motion.span>
        <svg
          aria-hidden
          viewBox="0 0 100 8"
          preserveAspectRatio="none"
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full h-[0.22em] overflow-visible"
        >
          <motion.line
            x1="1"
            y1="4"
            x2="99"
            y2="4"
            stroke="#6B6560"
            strokeWidth="2"
            strokeLinecap="round"
            initial={reduce ? { pathLength: 1, opacity: 0.8 } : { pathLength: 0, opacity: 0 }}
            animate={play ? { pathLength: 1, opacity: 0.8 } : undefined}
            transition={{
              pathLength: { duration: reduce ? 0 : 0.65, ease, delay: reduce ? 0 : 0.15 },
              opacity: { duration: reduce ? 0 : 0.2, delay: reduce ? 0 : 0.15 },
            }}
          />
        </svg>
      </span>
      <span>{middle}</span>
      <span className="relative inline-block whitespace-nowrap align-baseline">
        <motion.span
          className="relative font-extrabold"
          initial={{ fontWeight: 700 }}
          animate={play ? { fontWeight: 800 } : undefined}
          transition={{ duration: 0.4, delay: reduce ? 0 : 0.95, ease }}
        >
          {emphasis}
        </motion.span>
        <svg
          aria-hidden
          viewBox="0 0 100 6"
          preserveAspectRatio="none"
          className="absolute left-0 right-0 -bottom-1 sm:-bottom-1.5 w-full h-[0.28em] overflow-visible"
        >
          <motion.path
            d="M 1 4 Q 25 1, 50 3 T 99 2"
            fill="none"
            stroke="#2D7FF9"
            strokeWidth="3"
            strokeLinecap="round"
            initial={reduce ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            animate={play ? { pathLength: 1, opacity: 1 } : undefined}
            transition={{
              pathLength: { duration: reduce ? 0 : 0.75, ease, delay: reduce ? 0 : 0.85 },
              opacity: { duration: reduce ? 0 : 0.2, delay: reduce ? 0 : 0.85 },
            }}
          />
        </svg>
      </span>
      <span>{suffix}</span>
    </h2>
  );
};

export const WhyUs = () => {
  const t = useTranslations("whyUs");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState<number | null>(null);

  const vendorItems = [
    t("vendorItems.item1"),
    t("vendorItems.item2"),
    t("vendorItems.item3"),
    t("vendorItems.item4"),
  ];

  const ourItems = [
    t("ourItems.item1"),
    t("ourItems.item2"),
    t("ourItems.item3"),
    t("ourItems.item4"),
  ];

  // On touch devices, tapping an ours row briefly highlights the paired vendor row
  const touchHighlight = (i: number) => {
    setHovered(i);
    window.setTimeout(() => setHovered((cur) => (cur === i ? null : cur)), 1500);
  };

  // Timing: left items fade in starting ~0.3s, strike pass starts after all four land (~0.9s)
  // Right items start assembling after strike pass completes (~1.9s)
  const LEFT_FADE_DELAY = (i: number) => 0.3 + i * 0.1;
  const LEFT_STRIKE_DELAY = (i: number) => 0.9 + i * 0.12;
  const RIGHT_REVEAL_DELAY = (i: number) => 1.7 + i * 0.12;

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 px-6 bg-cream border-t border-sand/50 overflow-hidden"
    >
      {/* Ledger grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(26,26,26,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,26,26,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
        }}
      />

      <div className="relative max-w-[80rem] mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6, ease }}
        >
          <span className="font-display text-[11px] sm:text-xs text-accent-blue font-bold tracking-[0.14em] uppercase mb-4 block">
            {t("label")}
          </span>
          <KineticHeadline
            prefix={t("heading.prefix")}
            strike={t("heading.strike")}
            middle={t("heading.middle")}
            emphasis={t("heading.emphasis")}
            suffix={t("heading.suffix")}
            play={isInView}
          />
        </motion.div>

        {/* Diff columns */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 md:gap-12 items-start">
          {/* Left — vendors */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-heading text-[11px] tracking-[0.14em] uppercase font-semibold text-text-muted whitespace-nowrap">
                {t("vendorTitle")}
              </span>
              <div className="flex-1 h-px bg-sand" />
            </div>

            <ul className="space-y-4">
              {vendorItems.map((item, i) => {
                const active = hovered === i;
                return (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 8 }}
                    animate={
                      isInView
                        ? { opacity: 1, y: 0 }
                        : undefined
                    }
                    transition={{
                      duration: 0.35,
                      delay: reduce ? 0 : LEFT_FADE_DELAY(i),
                      ease,
                    }}
                  >
                    <motion.span
                      className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full border text-warm-gray shrink-0"
                      animate={
                        active
                          ? { scale: [1, 1.15, 1], borderColor: "rgba(107,101,96,0.8)" }
                          : { scale: 1, borderColor: "rgba(163,158,151,0.5)" }
                      }
                      transition={{ duration: 0.5, ease }}
                    >
                      <X className="w-3 h-3" strokeWidth={2.5} />
                    </motion.span>
                    <span className="relative leading-relaxed">
                      <motion.span
                        className="block"
                        initial={{ color: "#6B6560" }}
                        animate={
                          isInView
                            ? { color: active ? "#6B6560" : "#A39E97" }
                            : undefined
                        }
                        transition={{
                          duration: 0.4,
                          delay: reduce
                            ? 0
                            : active
                              ? 0
                              : LEFT_STRIKE_DELAY(i) + 0.2,
                          ease,
                        }}
                      >
                        {item}
                      </motion.span>
                      <svg
                        aria-hidden
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[0.22em] overflow-visible pointer-events-none"
                        viewBox="0 0 100 4"
                        preserveAspectRatio="none"
                      >
                        <motion.line
                          x1="0"
                          y1="2"
                          x2="100"
                          y2="2"
                          stroke="#6B6560"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          initial={
                            reduce
                              ? { pathLength: 1, opacity: 0.6 }
                              : { pathLength: 0, opacity: 0 }
                          }
                          animate={
                            isInView
                              ? {
                                  pathLength: 1,
                                  opacity: active ? 1 : 0.6,
                                }
                              : undefined
                          }
                          transition={{
                            pathLength: {
                              duration: reduce ? 0 : 0.32,
                              delay: reduce ? 0 : LEFT_STRIKE_DELAY(i),
                              ease,
                            },
                            opacity: {
                              duration: 0.25,
                              delay: reduce ? 0 : LEFT_STRIKE_DELAY(i),
                            },
                          }}
                        />
                      </svg>
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          {/* Spine */}
          <div className="hidden md:flex relative self-stretch justify-center items-center">
            <div className="absolute inset-y-0 w-px bg-sand" />
            <span className="relative z-10 font-heading text-[10px] tracking-[0.18em] text-text-muted bg-cream border border-sand rounded-full px-2.5 py-1">
              VS
            </span>
          </div>

          {/* Mobile divider */}
          <div className="md:hidden relative flex items-center justify-center my-2">
            <div className="absolute left-0 right-0 h-px bg-sand" />
            <span className="relative z-10 font-heading text-[10px] tracking-[0.18em] text-text-muted bg-cream border border-sand rounded-full px-2.5 py-1">
              VS
            </span>
          </div>

          {/* Right — ours */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-heading text-[11px] tracking-[0.14em] uppercase font-semibold text-accent-blue whitespace-nowrap">
                {t("ourTitle")}
              </span>
              <div className="flex-1 h-px bg-sand" />
            </div>

            <ul className="space-y-4">
              {ourItems.map((item, i) => {
                const active = hovered === i;
                return (
                  <motion.li
                    key={i}
                    className="group relative flex items-start gap-3 pl-3 -ml-3 rounded-md cursor-default"
                    initial={{ opacity: 0, y: 14 }}
                    animate={
                      isInView
                        ? { opacity: 1, y: 0 }
                        : undefined
                    }
                    transition={{
                      duration: 0.5,
                      delay: reduce ? 0 : RIGHT_REVEAL_DELAY(i),
                      ease,
                    }}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => touchHighlight(i)}
                  >
                    <span
                      className={`absolute left-0 top-1 bottom-1 w-px rounded-full transition-colors duration-300 ${active ? "bg-blue-primary/70" : "bg-blue-primary/0"}`}
                      aria-hidden
                    />
                    <span className="font-heading text-[11px] tabular-nums text-text-muted tracking-[0.1em] mt-1 w-5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <motion.span
                      className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-charcoal text-white shrink-0 shadow-[0_2px_10px_rgba(45,127,249,0.25)]"
                      initial={reduce ? { scale: 1 } : { scale: 0 }}
                      animate={
                        isInView
                          ? { scale: 1 }
                          : undefined
                      }
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 18,
                        delay: reduce ? 0 : RIGHT_REVEAL_DELAY(i) + 0.1,
                      }}
                    >
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </motion.span>
                    <span className="text-charcoal text-base leading-relaxed font-medium">
                      {item}
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
