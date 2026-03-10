import Link from "next/link";

export default function ContactPage() {
  const email = "info@pasture.jp";

  return (
    <main className="container">
      <style>{`
        .mono{font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;}
        .list{margin:0;padding-left:18px;}
      `}</style>

      <header style={{ marginBottom: 18 }}>
        <h1 className="h1">Contact</h1>
        <p className="muted" style={{ marginTop: 8, marginBottom: 0 }}>
          お問い合わせ
        </p>
      </header>

      <section className="card" style={{ marginBottom: 14 }}>
        <h2 className="h2">Email</h2>
        <p style={{ marginTop: 0 }}>
          <span className="mono">{email}</span>
        </p>
        <p className="muted" style={{ marginBottom: 0, fontSize: 13 }}>
          返信にお時間をいただく場合があります。お急ぎの場合は件名に【至急】などを付けてください。
        </p>
      </section>

      <section className="card">
        <h2 className="h2">What to include</h2>
        <ul className="list">
          <li>対象（地域、圃場数、期間）</li>
          <li>目的（植生診断、更新候補抽出、雑草/裸地の把握など）</li>
          <li>希望成果物（地図、集計表、優先順位、レポート等）</li>
          <li>希望時期（締切）</li>
        </ul>
      </section>

      <footer className="footer">
        <Link href="/">← Back to Home</Link>
      </footer>
    </main>
  );
}