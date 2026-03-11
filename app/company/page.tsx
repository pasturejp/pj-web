import Link from "next/link";
import TeamList from "../components/TeamList";

export default function CompanyPage() {
  return (
    <>
      {/* HERO */}
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

      <main className="container">
        {/* 会社概要 */}
        <section className="card" style={{ marginTop: 18, marginBottom: 14 }}>
          <h2 className="h2">会社概要</h2>

          <div className="grid3" style={{ marginTop: 14 }}>
            <div className="card" style={{ boxShadow: "none" }}>
              <h3 style={{ margin: 0, fontWeight: 800 }}>会社名</h3>
              <p className="muted" style={{ margin: "8px 0 0" }}>株式会社Pasture Japan</p>
            </div>

            <div className="card" style={{ boxShadow: "none" }}>
              <h3 style={{ margin: 0, fontWeight: 800 }}>所在地</h3>
              <p className="muted" style={{ margin: "8px 0 0" }}>
                北海道帯広市西11条34丁目
              </p>
            </div>

            <div className="card" style={{ boxShadow: "none" }}>
              <h3 style={{ margin: 0, fontWeight: 800 }}>設立</h3>
              <p className="muted" style={{ margin: "8px 0 0" }}>
                2026年3月（予定）
              </p>
            </div>
          </div>

          <div className="card" style={{ boxShadow: "none", marginTop: 14 }}>
            <h3 style={{ margin: 0, fontWeight: 800 }}>連絡先</h3>
            <p className="muted" style={{ margin: "8px 0 0", lineHeight: 1.7 }}>
              お問い合わせは <Link href="/contact">Contact</Link> のフォームからお願いします。
            </p>
          </div>
        </section>

        {/* 事業内容 */}
        <section className="card" style={{ marginBottom: 14 }}>
          <h2 className="h2">事業内容</h2>

          <div className="grid3" style={{ marginTop: 14 }}>
            <div className="card" style={{ boxShadow: "none" }}>
              <h3 style={{ margin: 0, fontWeight: 800 }}>草地診断</h3>
              <p className="muted" style={{ margin: "8px 0 0" }}>
                植生の可視化・集計・重点対応エリア抽出など、意思決定に使えるアウトプットを提供します。
              </p>
            </div>
            <div className="card" style={{ boxShadow: "none" }}>
              <h3 style={{ margin: 0, fontWeight: 800 }}>技術開発</h3>
              <p className="muted" style={{ margin: "8px 0 0" }}>
                衛星×UAV×AIの解析手法・処理パイプライン・指標化の開発と改善を行います。
              </p>
            </div>
            <div className="card" style={{ boxShadow: "none" }}>
              <h3 style={{ margin: 0, fontWeight: 800 }}>運用支援</h3>
              <p className="muted" style={{ margin: "8px 0 0" }}>
                現地条件に合わせた観測・解析・レポート設計を行い、導入後の運用も支援します。
              </p>
            </div>
          </div>
        </section>

        {/* ミッション */}
        <section className="card" style={{ marginBottom: 14 }}>
          <h2 className="h2">ミッション</h2>
          <p className="muted" style={{ marginTop: 10, marginBottom: 0, lineHeight: 1.8 }}>
            草地の状態を「見える化」し、現場で使える判断材料として提供することで、
            巡回の省力化と意思決定の標準化を支援します。
          </p>
        </section>

        {/* チーム */}
        <section className="card" style={{ marginBottom: 14 }}>
          <h2 className="h2">チーム</h2>
          <p className="muted" style={{ marginTop: 10, marginBottom: 0 }}>
            写真をクリックすると拡大表示できます。担当領域・リンクは随時更新します。
          </p>
          <TeamList />
        </section>

        {/* 問い合わせ */}
        <section className="card">
          <h2 className="h2">お問い合わせ</h2>
          <p style={{ marginTop: 10, marginBottom: 0 }}>
            ご相談は <Link href="/contact">Contact</Link> のフォームからお送りください。
          </p>
        </section>
      </main>
    </>
  );
}