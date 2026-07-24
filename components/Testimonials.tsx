"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT } from "./motion";

const SUPPORTING = [
  {
    quote:
      "Migrating off our old SMTP relay took an afternoon. Deliverability jumped the same week.",
    name: "Priya Nair",
    role: "Staff Engineer, Vantage",
  },
  {
    quote:
      "The typed SDK caught two bugs in code review before they ever hit staging.",
    name: "Marcus Webb",
    role: "Founding Engineer, Loopline",
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          <motion.figure className="quote-hero" variants={fadeUp}>
            <blockquote>
              &ldquo;We moved 40M emails a month to Noketa and never looked
              back. It&rsquo;s the first email API that feels like it was
              built by people who actually run one in production.&rdquo;
            </blockquote>
            <cite>
              <span className="quote-avatar" aria-hidden="true">
                RH
              </span>
              <span className="who">
                <strong>Rachel Huang</strong>
                <span>Head of Platform, Fjord</span>
              </span>
            </cite>
          </motion.figure>

          <div className="quote-grid">
            {SUPPORTING.map((t) => (
              <motion.figure className="quote-card" variants={fadeUp} key={t.name}>
                <p>&ldquo;{t.quote}&rdquo;</p>
                <cite>
                  <span className="quote-avatar" aria-hidden="true">
                    {t.name
                      .split(" ")
                      .map((p) => p[0])
                      .join("")}
                  </span>
                  <span>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </span>
                </cite>
              </motion.figure>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
