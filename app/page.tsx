import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="heroWrap">
        <div className="container section">
          <p className="muted" style={{ margin: 0, fontSize: 13, letterSpacing: 0.4 }}>
            Satellite × UAV × AI
          </p>
          <h1 className="h1" style={{ marginTop: 10 }}>
            草地診断を、<br />意思決定に使える情報へ。
          </h1>
          <p className="muted" style={{ marginTop: 12, fontSize: 16, lineHeight: 1.8, maxWidth: 700 }}>
            衛星・ドローン・現地データを統合し、圃場単位で状態を可視化。
            更新判断、管理優先度付け、収穫計画に繋がるアウトプット（地図・集計・重点対応エリア）を提供します。
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
            <Link className="btn btnPrimary" href="/contact">相談する</Link>
            <Link className="btn" href="/company">会社概要</Link>
          </div>

          <p className="muted" style={{ marginTop: 14, marginBottom: 0, fontSize: 13 }}>
            お問い合わせ：info@pasture.jp
          </p>
        </div>
      </section>

      {/* VALUE */}
      <section>
        <div className="container section">
          <h2 className="h2">サービス</h2>
          <p className="muted" style={{ marginTop: 10, marginBottom: 0, maxWidth: 820 }}>
            現場で使える「判断材料」に落とし込むことを重視し、圃場〜地区レベルの可視化と集計を提供します。
          </p>

          <div className="grid3" style={{ marginTop: 16 }}>
            <div className="card">
              <h3 style={{ margin: 0, fontWeight: 800 }}>植生診断</h3>
              <p className="muted" style={{ margin: "8px 0 0" }}>
                草種・マメ科率・雑草優占・裸地/劣化兆候などを圃場単位で可視化。
              </p>
            </div>
            <div className="card">
              <h3 style={{ margin: 0, fontWeight: 800 }}>地区・組織・圃場単位の集計</h3>
              <p className="muted" style={{ margin: "8px 0 0" }}>
                地区・組織・圃場単位で分布や変化を集計し、重点対応エリアを抽出。
              </p>
            </div>
            <div className="card">
              <h3 style={{ margin: 0, fontWeight: 800 }}>収穫計画への拡張</h3>
              <p className="muted" style={{ margin: "8px 0 0" }}>
                植生判別を基盤に、草量推定・適期判断へ段階的に拡張。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO */}
      <section className="sectionAlt">
        <div className="container section">
          <h2 className="h2">想定する利用者</h2>
          <div className="grid3" style={{ marginTop: 16 }}>
            <div className="card">
              <h3 style={{ margin: 0, fontWeight: 800 }}>TMRセンター / コントラクター</h3>
              <p className="muted" style={{ margin: "8px 0 0" }}>
                広域の収穫計画・作業優先順位の整理。
              </p>
            </div>
            <div className="card">
              <h3 style={{ margin: 0, fontWeight: 800 }}>JA / 普及・自治体</h3>
              <p className="muted" style={{ margin: "8px 0 0" }}>
                地域診断、支援施策の設計、説明資料の整備。
              </p>
            </div>
            <div className="card">
              <h3 style={{ margin: 0, fontWeight: 800 }}>生産者</h3>
              <p className="muted" style={{ margin: "8px 0 0" }}>
                巡回の省力化と、判断基準の標準化。
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}