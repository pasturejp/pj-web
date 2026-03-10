import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pasture Japan",
  description: "Satellite × UAV × AI for pasture diagnostics",
  icons: { icon: "/logo-mark.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <header className="siteHeader">
          <div className="container headerInner">
            <Link href="/" className="brandLink" aria-label="Pasture Japan Home">
              <Image src="/logo-mark.png" alt="" width={36} height={36} priority />
              <Image
                src="/logo-full.png"
                alt="Pasture Japan"
                width={170}
                height={36}
                priority
                style={{ height: "auto", width: "auto" }}
              />
            </Link>

            <nav className="headerNav" aria-label="Primary">
              <Link className="navLink" href="/company">Company</Link>
              <Link className="navLink" href="/contact">Contact</Link>
              <Link className="navLink" href="/privacy">Privacy</Link>
            </nav>

            <Link className="btn btnPrimary" href="/contact">相談する</Link>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}