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
          <p className="muted" style={{ marginTop: 12, fontSize: 16, lineHeight: 1.8, maxWidth: 700 }}>
            会社概要とチーム体制をご紹介します。衛星・ドローン・現地データを統合し、草地の状態を圃場単位で可視化する
            草地診断サービスの企画開発・運用を行います。
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
        <section className="card" style={{ marginTop: 18, marginBottom: 14 }}>
          <h2 className="h2">Overview</h2>
          <p style={{ marginTop: 10, marginBottom: 0 }}>
            Pasture Japanは、衛星・ドローン・現地計測データを統合し、草地の状態を圃場単位で可視化する
            草地診断サービスの企画開発・運用を行います。
          </p>
        </section>

        <section className="card" style={{ marginBottom: 14 }}>
          <h2 className="h2">Team</h2>
          <TeamList />
        </section>

        <section className="card">
          <h2 className="h2">Contact</h2>
          <p style={{ marginTop: 10, marginBottom: 0 }}>
            お問い合わせは <Link href="/contact">Contact</Link> をご覧ください。
          </p>
        </section>
      </main>
    </>
  );
}