import Link from "next/link";

export default function CompanyPage() {
  return (
    <main className="container">
      <style>{`
        .kv{display:grid;grid-template-columns:160px 1fr;gap:10px;margin:0;}
        .kv dt{color:var(--muted);}
        .kv dd{margin:0;}
        @media (max-width: 860px){ .kv{grid-template-columns:1fr;} }
      `}</style>

      <header style={{ marginBottom: 18 }}>
        <h1 className="h1">Company</h1>
        <p className="muted" style={{ marginTop: 8, marginBottom: 0 }}>
          会社概要（準備中）
        </p>
      </header>

      <section className="card" style={{ marginBottom: 14 }}>
        <h2 className="h2">Overview</h2>
        <p style={{ marginTop: 0 }}>
          Pasture Japanは、衛星・ドローン・現地計測データを統合し、草地の状態を圃場単位で可視化する
          草地診断サービスの企画開発・運用を行います。
        </p>
        <p className="muted" style={{ marginBottom: 0, fontSize: 13 }}>
          ※大学等の名称使用により、製品・サービスの保証を示すものではありません。
        </p>
      </section>

      <section className="card" style={{ marginBottom: 14 }}>
        <h2 className="h2">Team</h2>
        <dl className="kv">
          <dt>CEO</dt><dd>城台 悦史</dd>
          <dt>CTO</dt><dd>川村 健介</dd>
          <dt>CSO</dt><dd>川島 千帆</dd>
        </dl>
      </section>

      <section className="card">
        <h2 className="h2">Contact</h2>
        <p style={{ marginTop: 0, marginBottom: 0 }}>
          お問い合わせは <Link href="/contact">Contact</Link> をご覧ください。
        </p>
      </section>

      <footer className="footer">
        <Link href="/">← Back to Home</Link>
      </footer>
    </main>
  );
}