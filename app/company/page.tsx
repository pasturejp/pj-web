import Image from "next/image";
import Link from "next/link";

type Member = {
  role: "CEO" | "CTO" | "CSO";
  name: string;
  imageSrc: string; // public/ 配下
  bio?: string;
};

const members: Member[] = [
  {
    role: "CEO",
    name: "城台 悦史",
    imageSrc: "/team/Photo_Jodai2025.jpg",
    bio: "経営統括 / 事業推進",
  },
  {
    role: "CTO",
    name: "川村 健介",
    imageSrc: "/team/Photo_Kawamura2025.jpg",
    bio: "技術統括 / リモートセンシング・AI",
  },
  {
    role: "CSO",
    name: "川島 千帆",
    imageSrc: "/team/Photo_Kawashima2025.jpg",
    bio: "研究・連携統括 / 実証設計",
  },
];

export default function CompanyPage() {
  return (
    <main className="container">
      <style>{`
        .teamGrid{
          display:grid;
          grid-template-columns: repeat(3, 1fr);
          gap:14px;
          margin-top:14px;
        }
        .person{
          display:grid;
          grid-template-columns: 72px 1fr;
          gap:12px;
          align-items:start;
        }
        .avatar{
          border-radius: 16px;
          object-fit: cover;
          border: 1px solid var(--line);
          background: #fff;
        }
        .role{
          font-size: 12px;
          color: var(--muted);
          letter-spacing: .2px;
          text-transform: uppercase;
          margin: 0 0 6px;
          font-weight: 700;
        }
        .name{
          margin: 0;
          font-weight: 800;
        }
        .bio{
          margin: 6px 0 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.6;
        }
        @media (max-width: 900px){
          .teamGrid{ grid-template-columns: 1fr; }
          .person{ grid-template-columns: 84px 1fr; }
        }
      `}</style>

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

        <div className="teamGrid">
          {members.map((m) => (
            <div className="card" key={m.role} style={{ boxShadow: "none" }}>
              <div className="person">
                <Image
                  src={m.imageSrc}
                  alt={`${m.name} (${m.role})`}
                  width={72}
                  height={72}
                  className="avatar"
                />
                <div>
                  <p className="role">{m.role}</p>
                  <p className="name">{m.name}</p>
                  {m.bio ? <p className="bio">{m.bio}</p> : null}
                </div>
              </div>
            </div>
          ))}
        </div>
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