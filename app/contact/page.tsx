import Link from "next/link";

export default function ContactPage() {
  const formUrl = "https://forms.gle/BrSpWHkB5VMB6ZaH6";
  const email = "info@pasture.jp";

  return (
    <>
      {/* HERO */}
      <section className="heroWrap">
        <div className="container section">
          <p className="muted" style={{ margin: 0, fontSize: 13, letterSpacing: 0.4 }}>
            Contact
          </p>

          <h1 className="h1" style={{ marginTop: 10 }}>
            お問い合わせ
          </h1>

          <p className="muted" style={{ marginTop: 12, fontSize: 16, lineHeight: 1.8, maxWidth: 760 }}>
            お問い合わせは原則としてフォームからお願いします（最短で確認できます）。
            対象（地域・圃場数・期間）と目的（植生診断／更新候補抽出／雑草・裸地把握など）を簡単に添えていただけると、
            返信がスムーズです。
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
            <a
              className="btn btnPrimary"
              href={formUrl}
              target="_blank"
              rel="noreferrer"
            >
              お問い合わせフォームを開く ↗
            </a>

            <a className="btn" href={`mailto:${email}`}>
              メールで連絡（予備）
            </a>

            <Link className="btn" href="/company">
              会社概要
            </Link>
          </div>

          <div className="card" style={{ marginTop: 16 }}>
            <p className="muted" style={{ margin: 0, fontSize: 13, lineHeight: 1.7 }}>
              フォームが開けない場合は、<span style={{ fontWeight: 800, color: "var(--text)" }}>{email}</span> 宛に
              ご連絡ください（件名に【問い合わせ】などを付けていただくと助かります）。
            </p>
          </div>
        </div>
      </section>

      {/* 送信前に記載いただきたいこと */}
      <section>
        <div className="container section">
          <h2 className="h2">ご記載いただきたい内容</h2>

          <div className="grid3" style={{ marginTop: 16 }}>
            <div className="card">
              <h3 style={{ margin: 0, fontWeight: 800 }}>対象</h3>
              <p className="muted" style={{ margin: "8px 0 0" }}>
                地域、圃場数、対象作物/草地、期間（いつ頃のデータか）。
              </p>
            </div>

            <div className="card">
              <h3 style={{ margin: 0, fontWeight: 800 }}>目的</h3>
              <p className="muted" style={{ margin: "8px 0 0" }}>
                植生診断、更新候補抽出、雑草/裸地、管理優先度付けなど。
              </p>
            </div>

            <div className="card">
              <h3 style={{ margin: 0, fontWeight: 800 }}>希望成果物</h3>
              <p className="muted" style={{ margin: "8px 0 0" }}>
                診断マップ（PDF/画像）、集計表（Excel/CSV）、重点対応エリア抽出。
              </p>
            </div>
          </div>

          <div className="card" style={{ marginTop: 14 }}>
            <h3 style={{ margin: 0, fontWeight: 800 }}>返信目安</h3>
            <p className="muted" style={{ margin: "8px 0 0" }}>
              原則として <b>2〜3営業日以内</b> を目安にご連絡します。
              お急ぎの場合はフォームまたはメールの件名に【至急】などを付けてください。
            </p>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
            <a
              className="btn btnPrimary"
              href={formUrl}
              target="_blank"
              rel="noreferrer"
            >
              フォームへ進む ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}