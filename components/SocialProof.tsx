"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT } from "./motion";

const LOGOS = ["Vantage", "Loopline", "Fjord", "Northwind", "Cascade", "Ember"];

export default function SocialProof() {
  return (
    <section className="social-proof">
      <div className="container">
        <motion.div
          className="social-proof-inner"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          <motion.span className="social-proof-label" variants={fadeUp}>
            Trusted by engineering teams at
          </motion.span>
          <motion.div className="social-proof-logos" variants={fadeUp}>
            {LOGOS.map((logo) => (
              <span className="wordmark" key={logo}>
                {logo}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
