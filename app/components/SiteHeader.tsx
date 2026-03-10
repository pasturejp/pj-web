"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="siteHeader">
        <div className="container headerInner">
          <Link
            href="/"
            className="brandLink"
            aria-label="Pasture Japan Home"
            onClick={() => setOpen(false)}
          >
            {/* ロゴは横長のみ（この画像にマークが含まれているため） */}
            <Image
              src="/logo-full.png"
              alt="Pasture Japan"
              width={190}
              height={40}
              priority
              style={{ height: "auto", width: "auto" }}
            />
          </Link>

          <nav className="headerNav" aria-label="Primary">
            <Link className="navLink" href="/company">Company</Link>
            <Link className="navLink" href="/contact">Contact</Link>
            <Link className="navLink" href="/privacy">Privacy</Link>
          </nav>

          <div className="headerActions">
            <Link className="btn btnPrimary headerCta" href="/contact">相談する</Link>
            <button className="menuBtn" type="button" onClick={() => setOpen(true)} aria-label="Open menu">
              Menu
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="drawerRoot" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="drawerBackdrop" onClick={() => setOpen(false)} />
          <div className="drawerPanel">
            <div className="drawerTop">
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Image src="/logo-mark.png" alt="" width={34} height={34} />
                <div style={{ fontWeight: 800 }}>Pasture Japan</div>
              </div>
              <button className="drawerClose" onClick={() => setOpen(false)} aria-label="Close menu">
                ✕
              </button>
            </div>

            <div className="drawerLinks">
              <Link className="drawerLink" href="/company" onClick={() => setOpen(false)}>Company</Link>
              <Link className="drawerLink" href="/contact" onClick={() => setOpen(false)}>Contact</Link>
              <Link className="drawerLink" href="/privacy" onClick={() => setOpen(false)}>Privacy</Link>
            </div>

            <div className="drawerBottom">
              <Link className="btn btnPrimary" href="/contact" onClick={() => setOpen(false)}>
                相談する
              </Link>
              <p className="muted" style={{ marginTop: 12, marginBottom: 0, fontSize: 13 }}>
                info@pasture.jp
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}