"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT } from "./motion";
import { IconArrowRight } from "./icons";

export default function FinalCTA() {
  return (
    <section className="cta">
      <div className="cta-glow" aria-hidden="true" />
      <div className="container">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          <motion.h2 variants={fadeUp}>
            Stop fighting email infrastructure.
          </motion.h2>
          <motion.p variants={fadeUp}>
            Create an account, grab your key, and send your first email in
            under five minutes.
          </motion.p>
          <motion.div className="cta-actions" variants={fadeUp}>
            <motion.a
              href="#"
              className="btn btn-accent"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Sending
              <IconArrowRight strokeWidth={2.4} />
            </motion.a>
          </motion.div>
          <motion.p className="cta-note" variants={fadeUp}>
            No credit card required. 100 free sends every day.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
