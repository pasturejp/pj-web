import Link from "next/link";
import TeamList from "../components/TeamList";

export default function CompanyPage() {
  return (
    <main className="container">
      <header style={{ marginBottom: 18 }}>
        <h1 className="h1">Company</h1>
        <p className="muted" style={{ marginTop: 8, marginBottom: 0 }}>
          会社概要（準備中）
        </p>
      </header>

      <section className="card" style={{ marginBottom: 14 }}>
        <h2 className="h2">Overview</h2>
        <p style={{ marginTop: 10, marginBottom: 0 }}>
          Pasture Japanは、衛星・ドローン・現地計測データを統合し、草地の状態を圃場単位で可視化する
          草地診断サービスの企画開発・運用を行います。
        </p>
        <p className="muted" style={{ marginTop: 10, marginBottom: 0, fontSize: 13 }}>
          ※大学等の名称使用により、製品・サービスの保証を示すものではありません。
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
  );
}