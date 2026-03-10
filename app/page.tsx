import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <style>{`
        .hero{
          display:grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 16px;
          align-items: start;
        }
        .chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px;}
        .chip{
          font-size:13px;padding:6px 10px;border:1px solid var(--line);
          border-radius:999px;background:#fafbf9;color:var(--text);
        }
        .ctaRow{display:flex;flex-wrap:wrap;gap:10px;margin-top:16px;}
        .btn{
          display:inline-block;padding:10px 14px;border-radius:12px;
          border:1px solid var(--line);background:var(--panel);color:var(--text);
          text-decoration:none;
        }
        .btnPrimary{
          border-color: color-mix(in srgb, var(--accent) 25%, var(--line));
          background: color-mix(in srgb, var(--accent) 9%, var(--panel));
          color: var(--accent2);
        }
        .cards{display:grid;grid-template-columns: repeat(3, 1fr);gap:14px;margin-top:14px;}
        .list{margin:10px 0 0;padding-left:18px;}
        @media (max-width: 860px){
          .hero{grid-template-columns:1fr;}
          .cards{grid-template-columns:1fr;}
        }
      `}</style>

      <section className="card">
        <div className="hero">
          <div>
            <h1 className="h1">Pasture Japan</h1>
            <p className="muted" style={{ marginTop: 10, marginBottom: 0 }}>
              衛星 × UAV（ドローン）× AIで、草地の状態を圃場単位に可視化。
              <br />
              更新判断・管理優先度付け・収穫計画を支える「草地診断」を提供します。
            </p>

            <div className="chips" aria-label="keywords">
              <span className="chip">Vegetation mapping</span>
              <span className="chip">Legume rate / Weed</span>
              <span className="chip">Degradation signals</span>
              <span className="chip">Remote sensing</span>
              <span className="chip">AI / ML</span>
            </div>

            <div className="ctaRow">
              <Link className="btn btnPrimary" href="/contact">Contact</Link>
              <Link className="btn" href="/company">Company</Link>
              <Link className="btn" href="/privacy">Privacy</Link>
            </div>

            <p className="muted" style={{ marginTop: 14, marginBottom: 0, fontSize: 13 }}>
              お問い合わせ：info@pasture.jp（返信にお時間をいただく場合があります）
            </p>
          </div>

          <div className="card">
            <p style={{ margin: 0, fontWeight: 700 }}>Who we support</p>
            <ul className="list">
              <li>TMRセンター / コントラクター（広域収穫計画）</li>
              <li>自治体・JA・普及組織（地域診断・施策設計）</li>
              <li>圃場巡回の省力化・判断の標準化を進めたい現場</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ marginTop: 18 }}>
        <h2 className="h2">What we deliver</h2>
        <div className="cards">
          <div className="card">
            <h3 style={{ marginTop: 0, marginBottom: 8 }}>Vegetation diagnosis</h3>
            <p className="muted" style={{ margin: 0 }}>
              草種・マメ科率・雑草優占・裸地/劣化兆候などを圃場単位で可視化し、対策優先度を提示します。
            </p>
          </div>
          <div className="card">
            <h3 style={{ marginTop: 0, marginBottom: 8 }}>Area aggregation</h3>
            <p className="muted" style={{ margin: 0 }}>
              地区・組織単位の集計（分布、変化、重点対応エリア）を整理し、意思決定に使える形で提供します。
            </p>
          </div>
          <div className="card">
            <h3 style={{ marginTop: 0, marginBottom: 8 }}>Toward yield planning</h3>
            <p className="muted" style={{ margin: 0 }}>
              植生判別を基盤に、将来的に草量推定・刈取り優先順位・適期判断へ段階的に拡張します。
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