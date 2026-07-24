"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./motion";

const POINTS =
  "M0 80 L31 72 L62 76 L93 62 L124 66 L155 50 L186 55 L217 38 L248 43 L279 24 L312 12";
const AREA = `${POINTS} L312 96 L0 96 Z`;

export default function Sparkline() {
  return (
    <svg
      className="sparkline"
      viewBox="0 0 312 96"
      fill="none"
      role="img"
      aria-label="Sparkline chart showing an upward delivery trend over the last 30 days"
    >
      <defs>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(99, 102, 241, 0.3)" />
          <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
        </linearGradient>
      </defs>

      <line
        x1="0"
        y1="32"
        x2="312"
        y2="32"
        stroke="#232323"
        strokeWidth="1"
        strokeDasharray="3 5"
      />
      <line
        x1="0"
        y1="64"
        x2="312"
        y2="64"
        stroke="#232323"
        strokeWidth="1"
        strokeDasharray="3 5"
      />

      <motion.path
        d={AREA}
        fill="url(#sparkFill)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, delay: 1.0 }}
      />
      <motion.path
        d={POINTS}
        stroke="#818cf8"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.25 }}
      />

      <circle
        className="spark-ring"
        cx="312"
        cy="12"
        r="5"
        fill="#818cf8"
      />
      <motion.circle
        cx="312"
        cy="12"
        r="4"
        fill="#818cf8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.3, delay: 1.6 }}
      />
    </svg>
  );
}
