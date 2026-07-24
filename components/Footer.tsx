const COLUMNS = [
  {
    title: "Product",
    links: ["Platform", "Deliverability", "Webhooks", "Pricing", "Changelog"],
  },
  {
    title: "Developers",
    links: ["Docs", "API Reference", "SDKs", "Status", "GitHub"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#" className="nav-brand" aria-label="Noketa home">
            <span className="nav-logo">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </span>
            Noketa
          </a>
          <p>Email infrastructure for developers. Typed SDK, real deliverability, zero drama.</p>
        </div>

        {COLUMNS.map((col) => (
          <div className="footer-col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <div className="container footer-inner">
          <span>© 2026 Noketa, Inc. All rights reserved.</span>
          <div className="footer-links">
            <a href="#">All systems operational</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
