"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "./motion";
import { IconCheck, IconCopy } from "./icons";

const CURL_COMMAND = [
  "curl https://api.noketa.dev/v1/emails \\",
  '  -H "Authorization: Bearer nk_live_51Nk3tA9x" \\',
  '  -H "Content-Type: application/json" \\',
  "  -d '{",
  '    "to": "ada@lovelace.dev",',
  '    "from": "welcome@yourapp.com",',
  '    "subject": "Welcome aboard",',
  '    "text": "Your verification code is 424242."',
  "  }'",
].join("\n");

export default function TerminalCard() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CURL_COMMAND);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <motion.div
      className="terminal"
      variants={fadeUp}
      aria-label="Terminal example showing a cURL request to the Noketa API"
    >
      <div className="terminal-bar">
        <div className="terminal-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className="terminal-title">noketa.dev /v1/emails</span>
        <button
          type="button"
          className={`terminal-copy${copied ? " copied" : ""}`}
          onClick={handleCopy}
        >
          {copied ? <IconCheck strokeWidth={2.4} /> : <IconCopy />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <div className="terminal-body">
        <div className="tline">
          <span className="t-prompt">$ </span>
          <span>curl </span>
          <span className="t-str">https://api.noketa.dev/v1/emails</span>
          <span className="t-dim"> \</span>
        </div>
        <div className="tline">
          {"    "}
          <span className="t-flag">-H</span>
          <span className="t-str"> "Authorization: Bearer nk_live_51Nk3tA9x"</span>
          <span className="t-dim"> \</span>
        </div>
        <div className="tline">
          {"    "}
          <span className="t-flag">-H</span>
          <span className="t-str"> "Content-Type: application/json"</span>
          <span className="t-dim"> \</span>
        </div>
        <div className="tline">
          {"    "}
          <span className="t-flag">-d</span>
          <span className="t-dim"> '{"{"}</span>
        </div>
        <div className="tline">
          {"      "}
          <span className="t-key">"to"</span>
          <span className="t-dim">: </span>
          <span className="t-str">"ada@lovelace.dev"</span>
          <span className="t-dim">,</span>
        </div>
        <div className="tline">
          {"      "}
          <span className="t-key">"from"</span>
          <span className="t-dim">: </span>
          <span className="t-str">"welcome@yourapp.com"</span>
          <span className="t-dim">,</span>
        </div>
        <div className="tline">
          {"      "}
          <span className="t-key">"subject"</span>
          <span className="t-dim">: </span>
          <span className="t-str">"Welcome aboard"</span>
          <span className="t-dim">,</span>
        </div>
        <div className="tline">
          {"      "}
          <span className="t-key">"text"</span>
          <span className="t-dim">: </span>
          <span className="t-str">"Your verification code is 424242."</span>
        </div>
        <div className="tline">
          {"    "}
          <span className="t-dim">{"}'"}</span>
        </div>

        <div className="terminal-divider">
          <span>RESPONSE</span>
        </div>

        <div className="tline">
          <span className="t-dim">{"< "}</span>
          <span className="t-status-ok">HTTP/1.1 200 OK</span>
        </div>
        <div className="tline">
          <span className="t-dim">{"{"}</span>
        </div>
        <div className="tline">
          {"  "}
          <span className="t-key">"id"</span>
          <span className="t-dim">: </span>
          <span className="t-str">"em_9Xkf2mQpL7"</span>
          <span className="t-dim">,</span>
        </div>
        <div className="tline">
          {"  "}
          <span className="t-key">"object"</span>
          <span className="t-dim">: </span>
          <span className="t-str">"email"</span>
          <span className="t-dim">,</span>
        </div>
        <div className="tline">
          {"  "}
          <span className="t-key">"status"</span>
          <span className="t-dim">: </span>
          <span className="t-str">"sent"</span>
          <span className="t-dim">,</span>
        </div>
        <div className="tline">
          {"  "}
          <span className="t-key">"created_at"</span>
          <span className="t-dim">: </span>
          <span className="t-str">"2026-07-24T09:12:44Z"</span>
          <span className="t-dim">,</span>
        </div>
        <div className="tline">
          {"  "}
          <span className="t-key">"latency_ms"</span>
          <span className="t-dim">: </span>
          <span className="t-num">42</span>
        </div>
        <div className="tline">
          <span className="t-dim">{"}"}</span>
        </div>
        <div className="tline">
          <span className="t-prompt">$ </span>
          <span className="cursor" aria-hidden="true" />
        </div>
      </div>
    </motion.div>
  );
}
