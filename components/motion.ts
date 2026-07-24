import type { Variants } from "framer-motion";
import { cubicBezier } from "framer-motion";

export const EASE = cubicBezier(0.22, 1, 0.36, 1);

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

export const VIEWPORT = { once: true, margin: "-90px" } as const;
