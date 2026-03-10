import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="container footerInner">
        <span className="muted">© {new Date().getFullYear()} Pasture Japan</span>
        <span className="muted footerLinks">
          <Link href="/company">Company</Link> · <Link href="/contact">Contact</Link> ·{" "}
          <Link href="/privacy">Privacy</Link>
        </span>
      </div>
    </footer>
  );
}