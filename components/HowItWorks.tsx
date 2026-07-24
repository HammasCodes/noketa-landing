"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT } from "./motion";

const STEPS = [
  {
    n: "01",
    title: "Install the SDK",
    body: "Add the typed client to any Node, Python, or Go project in seconds.",
    snippet: "$ npm install @noketa/sdk",
  },
  {
    n: "02",
    title: "Verify your domain",
    body: "Add three DNS records and we handle SPF, DKIM, and DMARC for you.",
    snippet: "$ noketa domains verify yourapp.com",
  },
  {
    n: "03",
    title: "Send your first email",
    body: "One call, fully typed, delivered in milliseconds — with a receipt.",
    snippet: "> noketa.emails.send({ ... })",
  },
];

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          <motion.div className="section-head center" variants={fadeUp}>
            <span className="section-label">How it works</span>
            <h2>From zero to sent in under five minutes.</h2>
            <p>No dashboards to configure first. Grab a key and start shipping.</p>
          </motion.div>

          <div className="steps">
            {STEPS.map((step) => (
              <motion.div className="step" variants={fadeUp} key={step.n}>
                <span className="step-number">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                <div className="step-snippet">{step.snippet}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
