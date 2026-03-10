import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <style>{`
        .topbar{
          display:flex;
          justify-content: space-between;
          align-items:center;
          gap:12px;
          margin-bottom: 14px;
        }
        .brand{
          display:flex;
          flex-direction:column;
          gap:2px;
        }
        .brandName{ font-weight: 800; letter-spacing: .2px; }
        .brandTag{ color: var(--muted); font-size: 13px; }
        .nav{
          display:flex;
          gap:10px;
          flex-wrap:wrap;
        }
        .nav a{
          padding:8px 10px;
          border:1px solid var(--line);
          border-radius:999px;
          background:#fafbf9;
        }
        .nav a:hover{ text-decoration:none; background:#f1f6f1; }

        .heroCard{
          padding: 22px;
        }
        .hero{
          display:grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 18px;
          align-items: start;
        }
        .headline{
          font-size: 34px;
          margin: 0;
          letter-spacing: .2px;
        }
        .lead{
          margin: 10px 0 0;
          color: var(--muted);
          font-size: 16px;
        }
        .chips{
          display:flex;
          flex-wrap:wrap;
          gap:8px;
          margin-top:14px;
        }
        .chip{
          font-size:13px;
          padding:6px 10px;
          border:1px solid var(--line);
          border-radius:999px;
          background:#fafbf9;
          color: var(--text);
        }

        .ctaRow{
          display:flex;
          flex-wrap:wrap;
          gap:10px;
          margin-top:16px;
        }
        .btn{
          display:inline-block;
          padding:10px 14px;
          border-radius:12px;
          border:1px solid var(--line);
          background: var(--panel);
          color: var(--text);
          text-decoration:none;
        }
        .btnPrimary{
          border-color: color-mix(in srgb, var(--accent) 25%, var(--line));
          background: color-mix(in srgb, var(--accent) 10%, var(--panel));
          color: var(--accent2);
          font-weight: 700;
        }
        .btn:hover{ text-decoration:none; filter: brightness(0.99); }

        .sidePanel{
          border: 1px solid var(--line);
          border-radius: 16px;
          padding: 14px 14px 12px;
          background: #fafbf9;
        }
        .sideTitle{
          margin: 0 0 8px;
          font-size: 14px;
          letter-spacing: .2px;
          color: var(--muted);
          font-weight: 700;
          text-transform: uppercase;
        }
        .list{
          margin: 0;
          padding-left: 18px;
        }
        .note{
          margin-top: 10px;
          color: var(--muted);
          font-size: 13px;
        }

        .section{
          margin-top: 22px;
        }
        .cards{
          display:grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 14px;
        }
        .cardTitle{
          margin: 0 0 8px;
          font-size: 16px;
        }
        .cardBody{
          margin: 0;
          color: var(--muted);
        }

        @media (max-width: 900px){
          .hero{ grid-template-columns: 1fr; }
          .cards{ grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Top bar */}
      <div className="topbar">
        <div className="brand">
          <div className="brandName">Pasture Japan</div>
          <div className="brandTag">Satellite × UAV × AI for pasture diagnostics</div>
        </div>
        <nav className="nav" aria-label="primary">
          <Link href="/company">Company</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>
      </div>

      {/* Hero */}
      <section className="card heroCard">
        <div className="hero">
          <div>
            <h1 className="headline">草地診断を、意思決定に使える情報へ。</h1>
            <p className="lead">
              衛星 × UAV（ドローン）× AIで、草地の状態を圃場単位に可視化。
              更新判断・管理優先度付け・収穫計画を支える診断レポートを提供します。
            </p>

            <div className="chips" aria-label="keywords">
              <span className="chip">Vegetation mapping</span>
              <span className="chip">Legume rate</span>
              <span className="chip">Weed / Bare ground</span>
              <span className="chip">Remote sensing</span>
              <span className="chip">AI / ML</span>
            </div>

            <div className="ctaRow">
              <Link className="btn btnPrimary" href="/contact">相談する</Link>
              <Link className="btn" href="/company">会社概要</Link>
            </div>

            <div className="note">
              お問い合わせ：info@pasture.jp（返信にお時間をいただく場合があります）
            </div>
          </div>

          <aside className="sidePanel">
            <div className="sideTitle">Who we support</div>
            <ul className="list">
              <li>TMRセンター / コントラクター（広域収穫計画）</li>
              <li>自治体・JA・普及組織（地域診断・施策設計）</li>
              <li>巡回の省力化・判断の標準化を進めたい現場</li>
            </ul>

            <div className="sideTitle" style={{ marginTop: 14 }}>Deliverables</div>
            <ul className="list">
              <li>圃場別診断マップ（PDF/画像）</li>
              <li>集計表（Excel/CSV）</li>
              <li>重点対応エリアの抽出</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* Value */}
      <section className="section">
        <h2 className="h2">What we deliver</h2>
        <div className="cards">
          <div className="card">
            <h3 className="cardTitle">Vegetation diagnosis</h3>
            <p className="cardBody">
              草種・マメ科率・雑草優占・裸地/劣化兆候などを圃場単位で可視化し、対策の優先度付けを支援します。
            </p>
          </div>
          <div className="card">
            <h3 className="cardTitle">Area aggregation</h3>
            <p className="cardBody">
              地区・組織単位で分布や変化を集計し、意思決定に使える形（レポート/表）で提供します。
            </p>
          </div>
          <div className="card">
            <h3 className="cardTitle">Toward yield planning</h3>
            <p className="cardBody">
              植生判別を基盤に、草量推定・刈取り優先順位・適期判断へ段階的に拡張します。
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Pasture Japan</span>
        <span className="muted">
          <Link href="/company">Company</Link> · <Link href="/contact">Contact</Link> ·{" "}
          <Link href="/privacy">Privacy</Link>
        </span>
      </footer>
    </main>
  );
}