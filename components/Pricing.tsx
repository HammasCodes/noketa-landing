"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT } from "./motion";
import { IconCheck } from "./icons";

const PLANS = [
  {
    name: "Hobby",
    price: "0",
    period: "/mo",
    desc: "For side projects and testing integrations.",
    features: [
      "3,000 emails / month",
      "1 verified domain",
      "Community support",
      "7-day log retention",
    ],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Startup",
    price: "20",
    period: "/mo",
    desc: "For teams sending product and lifecycle email.",
    features: [
      "100,000 emails / month",
      "Unlimited domains",
      "Webhooks & priority support",
      "30-day log retention",
      "Dedicated IP add-on",
    ],
    cta: "Start free trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For high-volume senders with compliance needs.",
    features: [
      "Unlimited emails",
      "SSO & audit logs",
      "SOC 2 & HIPAA support",
      "Dedicated infrastructure",
      "99.99% uptime SLA",
    ],
    cta: "Talk to sales",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          <motion.div className="section-head center" variants={fadeUp}>
            <span className="section-label">Pricing</span>
            <h2>Simple pricing that scales with you.</h2>
            <p>Every plan includes the full API. No feature gating, no surprise invoices.</p>
          </motion.div>

          <div className="pricing-grid">
            {PLANS.map((plan) => (
              <motion.div
                className={`price-card${plan.featured ? " price-card--featured" : ""}`}
                variants={fadeUp}
                key={plan.name}
              >
                {plan.featured && <span className="price-badge">Most popular</span>}
                <h3>{plan.name}</h3>
                <div className="price-amount">
                  <span className="num">
                    {plan.price === "Custom" ? plan.price : `$${plan.price}`}
                  </span>
                  {plan.period && <span className="period">{plan.period}</span>}
                </div>
                <p className="price-desc">{plan.desc}</p>
                <ul className="price-features">
                  {plan.features.map((f) => (
                    <li key={f}>
                      <IconCheck />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#" className={`btn ${plan.featured ? "btn-accent" : "btn-ghost"}`}>
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
