import Link from "next/link";
import TeamList from "../components/TeamList";

export default function CompanyPage() {
  return (
    <>
      {/* HERO（背景画像は .heroWrap で出る） */}
      <section className="heroWrap">
        <div className="container section">
          <p className="muted" style={{ margin: 0, fontSize: 13, letterSpacing: 0.4 }}>
            Company
          </p>
          <h1 className="h1" style={{ marginTop: 10 }}>
            Pasture Japanについて
          </h1>
          <p className="muted" style={{ marginTop: 12, fontSize: 16, lineHeight: 1.8, maxWidth: 740 }}>
            衛星・ドローン・現地データを統合し、草地の状態を圃場単位で可視化する「草地診断」を提供します。
            現場の意思決定（更新判断・管理優先度・収穫計画）につながるアウトプットを重視します。
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
            <Link className="btn btnPrimary" href="/contact">
              相談する
            </Link>
            <Link className="btn" href="/">
              ホームへ
            </Link>
          </div>

          <p className="muted" style={{ marginTop: 14, marginBottom: 0, fontSize: 13 }}>
            ※大学等の名称使用により、製品・サービスの保証を示すものではありません。
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <main className="container">
        {/* 会社概要（最小セット） */}
        <section className="card" style={{ marginTop: 18, marginBottom: 14 }}>
          <h2 className="h2">会社概要</h2>

          <div className="grid3" style={{ marginTop: 14 }}>
            <div className="card" style={{ boxShadow: "none" }}>
              <h3 style={{ margin: 0, fontWeight: 800 }}>事業内容</h3>
              <p className="muted" style={{ margin: "8px 0 0" }}>
                草地診断（植生可視化・集計・重点対応エリア抽出）および関連する技術開発・運用支援。
              </p>
            </div>

            <div className="card" style={{ boxShadow: "none" }}>
              <h3 style={{ margin: 0, fontWeight: 800 }}>提供形態</h3>
              <p className="muted" style={{ margin: "8px 0 0" }}>
                受託（解析・レポート）を起点に、将来的にダッシュボード/システム提供へ段階的に拡張します。
              </p>
            </div>

            <div className="card" style={{ boxShadow: "none" }}>
              <h3 style={{ margin: 0, fontWeight: 800 }}>対象</h3>
              <p className="muted" style={{ margin: "8px 0 0" }}>
                TMRセンター/コントラクター、JA/普及・自治体、生産者など。
              </p>
            </div>
          </div>

          {/* ここは“準備中”でOK。後から埋める */}
          <div className="card" style={{ boxShadow: "none", marginTop: 14 }}>
            <h3 style={{ margin: 0, fontWeight: 800 }}>基本情報（準備中）</h3>
            <p className="muted" style={{ margin: "8px 0 0", lineHeight: 1.7 }}>
              会社名／所在地／設立／資本金 等は、整備次第追記します。
              お問い合わせは <Link href="/contact">Contact</Link> をご利用ください。
            </p>
          </div>
        </section>

        {/* ミッション（短く） */}
        <section className="card" style={{ marginBottom: 14 }}>
          <h2 className="h2">ミッション</h2>
          <p className="muted" style={{ marginTop: 10, marginBottom: 0, lineHeight: 1.8 }}>
            草地の状態を「見える化」し、現場で使える判断材料として提供することで、
            巡回の省力化と意思決定の標準化を支援します。
          </p>
        </section>

        {/* Team */}
        <section className="card" style={{ marginBottom: 14 }}>
          <h2 className="h2">チーム</h2>
          <p className="muted" style={{ marginTop: 10, marginBottom: 0 }}>
            写真をクリックすると拡大表示できます。
          </p>
          <TeamList />
        </section>

        {/* Contact */}
        <section className="card">
          <h2 className="h2">お問い合わせ</h2>
          <p style={{ marginTop: 10, marginBottom: 0 }}>
            ご相談は <Link href="/contact">Contact</Link> からフォームでお送りください。
          </p>
        </section>
      </main>
    </>
  );
}