"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT } from "./motion";
import Sparkline from "./Sparkline";
import { IconActivity, IconCheck, IconCode, IconInbox, IconTrendUp, IconWebhook } from "./icons";

const codeLines: ReactNode[] = [
  <>
    <span className="t-kw">import</span>
    <span> {"{ Noketa }"} </span>
    <span className="t-kw">from</span>
    <span className="t-str"> "@noketa/sdk"</span>
    <span className="t-dim">;</span>
  </>,
  null,
  <>
    <span className="t-kw">const</span>
    <span> noketa </span>
    <span className="t-dim">= </span>
    <span className="t-kw">new</span>
    <span className="t-key"> Noketa</span>
    <span className="t-dim">(</span>
    <span>process.env.</span>
    <span className="t-num">NOKETA_API_KEY</span>
    <span className="t-dim">);</span>
  </>,
  null,
  <>
    <span className="t-kw">const</span>
    <span> email </span>
    <span className="t-dim">= </span>
    <span className="t-kw">await</span>
    <span> noketa.emails.</span>
    <span className="t-fn">send</span>
    <span className="t-dim">({"{"}</span>
  </>,
  <>
    <span>  </span>
    <span className="t-key">to</span>
    <span className="t-dim">: </span>
    <span className="t-str">"ada@lovelace.dev"</span>
    <span className="t-dim">,</span>
  </>,
  <>
    <span>  </span>
    <span className="t-key">from</span>
    <span className="t-dim">: </span>
    <span className="t-str">"welcome@yourapp.com"</span>
    <span className="t-dim">,</span>
  </>,
  <>
    <span>  </span>
    <span className="t-key">subject</span>
    <span className="t-dim">: </span>
    <span className="t-str">"Your login code"</span>
    <span className="t-dim">,</span>
  </>,
  <>
    <span>  </span>
    <span className="t-key">text</span>
    <span className="t-dim">: </span>
    <span className="t-str">"Your code is 424242."</span>
    <span className="t-dim">,</span>
  </>,
  <>
    <span className="t-dim">{"}"});</span>
  </>,
  null,
  <>
    <span>console.</span>
    <span className="t-fn">log</span>
    <span className="t-dim">(</span>
    <span>email.status</span>
    <span className="t-dim">); </span>
    <span className="t-cmt">{"// "}</span>
    <span className="t-str">"sent"</span>
  </>,
];

const WEBHOOK_EVENTS = [
  { event: "email.delivered", time: "12ms ago" },
  { event: "email.opened", time: "48ms ago" },
  { event: "email.clicked", time: "1.2s ago" },
  { event: "email.bounced", time: "3.4s ago" },
];

export default function Features() {
  return (
    <section className="section" id="platform">
      <div className="container">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          <motion.div className="section-head" variants={fadeUp}>
            <span className="section-label">The platform</span>
            <h2>Built to ship. Tuned to deliver.</h2>
            <p>
              Every primitive you need to send email at scale, wrapped in an
              API you will actually enjoy using.
            </p>
          </motion.div>

          <div className="bento">
            <motion.article
              className="bento-card bento-card--large"
              variants={fadeUp}
            >
              <div className="card-icon">
                <IconCode />
              </div>
              <h3>Typed SDK</h3>
              <p>
                A first-class TypeScript SDK with generated types for every
                endpoint, full autocomplete, and zero surprises at runtime.
              </p>
              <div className="code-window">
                <div className="code-window-bar">
                  <span>send.ts</span>
                  <span className="code-window-tag">TS</span>
                </div>
                <div className="code-body">
                  {codeLines.map((line, i) => (
                    <span className="cl" key={i}>
                      <i>{i + 1}</i>
                      <code>{line ?? " "}</code>
                    </span>
                  ))}
                </div>
              </div>
              <div className="install-pill">
                <span className="t-dim">$</span> npm install @noketa/sdk
              </div>
            </motion.article>

            <motion.article className="bento-card" variants={fadeUp}>
              <div className="card-icon">
                <IconInbox />
              </div>
              <h3>Deliverability</h3>
              <p>
                Dedicated IPs, automated warmup, and one-click domain
                authentication. We monitor sender reputation around the clock
                so your messages land in the inbox, not the spam folder.
              </p>
              <div className="chip-row">
                <span className="chip">
                  <IconCheck />
                  SPF
                </span>
                <span className="chip">
                  <IconCheck />
                  DKIM
                </span>
                <span className="chip">
                  <IconCheck />
                  DMARC
                </span>
              </div>
            </motion.article>

            <motion.article className="bento-card" variants={fadeUp}>
              <div className="card-icon">
                <IconActivity />
              </div>
              <h3>Sending Health</h3>
              <p>
                Real-time visibility into every send, bounce, and open. Catch
                reputation issues before your users ever notice.
              </p>
              <div className="spark-wrap">
                <div className="spark-label">
                  <strong>
                    <IconTrendUp />
                    99.9% Delivery Rate
                  </strong>
                  <span>Last 30 days</span>
                </div>
                <Sparkline />
              </div>
            </motion.article>
          </div>

          <motion.div className="feature-strip" variants={fadeUp}>
            <div className="feature-strip-copy">
              <div className="card-icon">
                <IconWebhook />
              </div>
              <h3>Webhooks & Observability</h3>
              <p>
                Subscribe to delivery, open, click, and bounce events as they
                happen. Pipe them straight into your own analytics or
                incident tooling — no polling required.
              </p>
            </div>
            <div className="feature-strip-demo">
              {WEBHOOK_EVENTS.map((row) => (
                <div className="log-row" key={row.event}>
                  <span className="log-dot" />
                  <span className="log-event">{row.event}</span>
                  <span className="log-time">{row.time}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
