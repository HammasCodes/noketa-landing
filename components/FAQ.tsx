"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT } from "./motion";
import { IconChevronDown } from "./icons";

const QA = [
  {
    q: "How is Noketa different from a standard SMTP relay?",
    a: "SMTP gets your email out the door. Noketa also handles domain authentication, IP warmup, real-time delivery events, and a typed SDK, so you're not stitching together five services to ship one feature.",
  },
  {
    q: "Can I migrate from Resend, Mailgun, or Postmark?",
    a: "Yes. The send payload shape is close enough that most teams swap the client and rewrite a handful of field names. Support can review your existing integration before you switch.",
  },
  {
    q: "Do you support dedicated IPs?",
    a: "Dedicated IPs are available as an add-on on the Startup plan and included on Enterprise, with automated warmup so reputation ramps safely.",
  },
  {
    q: "What happens if I go over my plan's send limit?",
    a: "We send a warning at 80% usage. Overages bill at a flat per-email rate rather than cutting off sending mid-month.",
  },
  {
    q: "Is there a free trial on paid plans?",
    a: "Startup includes a 14-day trial with full feature access. No credit card required to start.",
  },
  {
    q: "How fast is support?",
    a: "Hobby is community/email support. Startup and Enterprise get priority support with sub-4-hour first response during business hours.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section" id="faq">
      <div className="container">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          <motion.div className="section-head center" variants={fadeUp}>
            <span className="section-label">FAQ</span>
            <h2>Questions, answered.</h2>
          </motion.div>

          <motion.div className="faq-list" variants={fadeUp}>
            {QA.map((item, i) => {
              const open = openIndex === i;
              return (
                <div className="faq-item" data-open={open} key={item.q}>
                  <button
                    type="button"
                    className="faq-question"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? null : i)}
                  >
                    {item.q}
                    <IconChevronDown />
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">{item.a}</div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
