"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "./motion";
import TerminalCard from "./TerminalCard";
import { IconArrowRight } from "./icons";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.a href="#" className="release-tag" variants={fadeUp}>
              <span className="release-tag-version">v1.0</span>
              Now generally available
              <IconArrowRight size={12} strokeWidth={2.4} />
            </motion.a>

            <motion.h1 variants={fadeUp}>
              Email infrastructure
              <br />
              for <em>developers.</em>
            </motion.h1>

            <motion.p className="hero-sub" variants={fadeUp}>
              Send transactional and marketing emails with a clean API and
              ultimate deliverability.
            </motion.p>

            <motion.div className="hero-actions" variants={fadeUp}>
              <motion.a
                href="#"
                className="btn btn-primary"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Read the Docs
                <IconArrowRight />
              </motion.a>
              <motion.a
                href="#"
                className="btn btn-ghost"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get API Key
              </motion.a>
            </motion.div>

            <motion.div className="hero-stats" variants={fadeUp}>
              <div className="hero-stat">
                <strong>99.99%</strong>
                <span>Uptime SLA</span>
              </div>
              <div className="hero-stat">
                <strong>45ms</strong>
                <span>Median API latency</span>
              </div>
              <div className="hero-stat">
                <strong>SOC 2</strong>
                <span>Type II certified</span>
              </div>
            </motion.div>
          </motion.div>

          <TerminalCard />
        </div>
      </div>
    </section>
  );
}
