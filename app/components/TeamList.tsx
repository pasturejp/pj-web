"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Member = {
  role: "CEO" | "CTO" | "CSO";
  name: string;
  imageSrc: string; // public/ 配下
  responsibilities: string[]; // 2-3行
  linkedin?: string; // 任意
  website?: string;  // 任意（Researchmap等でもOK）
};

const members: Member[] = [
  {
    role: "CEO",
    name: "城台 悦史",
    imageSrc: "/team/Photo_Jodai2025.jpg",
    responsibilities: [
      "経営統括 / 事業推進",
      "グロービス経営大学院卒（MBAホルダー）",
    ],
    // linkedin: "https://www.linkedin.com/in/xxxxx",
  },
  {
    role: "CTO",
    name: "川村 健介",
    imageSrc: "/team/Photo_Kawamura2025.jpg",
    responsibilities: [
      "技術統括 / リモートセンシング・AI",
      "帯広畜産大学　環境農学研究部門　准教授",
    ],
    // website: "https://univ.obihiro.ac.jp/~grassland/index.html",
  },
  {
    role: "CSO",
    name: "川島 千帆",
    imageSrc: "/team/Photo_Kawashima2025.jpg",
    responsibilities: [
      "研究・連携統括 / 実証設計",
      "帯広畜産大学　畜産フィールド科学センター（FSC）教授",
    ],
    // linkedin: "https://researchmap.jp/dairy-cow_2978?lang=ja",
  },
];

export default function TeamList() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Member | null>(null);

  const openModal = (m: Member) => {
    setActive(m);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setActive(null);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <style>{`
        .teamList{
          display:flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 14px;
        }
        .memberRow{
          display:grid;
          grid-template-columns: 160px 1fr;
          gap: 16px;
          align-items: center;
          padding: 14px;
          border: 1px solid var(--line);
          border-radius: 18px;
          background: color-mix(in srgb, var(--panel) 96%, transparent);
        }
        .photoWrap{
          width: 160px;
          aspect-ratio: 4 / 5;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid var(--line);
          background: #fff;
          cursor: zoom-in;
        }
        .photo{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .role{
          display:inline-block;
          font-size: 12px;
          letter-spacing: .4px;
          text-transform: uppercase;
          font-weight: 800;
          color: var(--accent2);
          background: color-mix(in srgb, var(--accent) 12%, var(--panel));
          border: 1px solid color-mix(in srgb, var(--accent) 18%, var(--line));
          padding: 6px 10px;
          border-radius: 999px;
        }
        .name{
          margin: 10px 0 0;
          font-weight: 900;
          font-size: 20px;
          letter-spacing: .2px;
        }
        .bullets{
          margin: 10px 0 0;
          padding-left: 18px;
          color: var(--muted);
          line-height: 1.7;
        }
        .links{
          margin-top: 10px;
          display:flex;
          gap: 10px;
          flex-wrap: wrap;
          font-size: 13px;
        }
        .chipLink{
          display:inline-flex;
          align-items:center;
          gap:6px;
          padding: 8px 10px;
          border-radius: 999px;
          border: 1px solid var(--line);
          background: #fafbf9;
          color: var(--muted);
          text-decoration: none;
        }
        .chipLink:hover{
          color: var(--text);
          text-decoration: none;
          background: #f1f6f1;
        }

        /* Modal */
        .modalRoot{ position: fixed; inset: 0; z-index: 120; }
        .modalBackdrop{ position:absolute; inset:0; background: rgba(0,0,0,0.5); }
        .modalPanel{
          position:absolute;
          left:50%;
          top:50%;
          transform: translate(-50%, -50%);
          width: min(92vw, 860px);
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 18px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.30);
          overflow: hidden;
        }
        .modalTop{
          display:flex;
          align-items:center;
          justify-content: space-between;
          gap: 10px;
          padding: 12px 14px;
          border-bottom: 1px solid var(--line);
          background: color-mix(in srgb, var(--panel) 92%, transparent);
        }
        .modalClose{
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 8px 10px;
          background: #fafbf9;
        }
        .modalBody{
          display:grid;
          grid-template-columns: 1fr 1fr;
        }
        .modalImg{
          position: relative;
          min-height: 360px;
          background: #fff;
        }
        .modalInfo{
          padding: 14px;
        }

        @media (max-width: 900px){
          .memberRow{ grid-template-columns: 1fr; align-items: start; }
          .photoWrap{ width: 100%; max-width: 320px; }
          .modalBody{ grid-template-columns: 1fr; }
          .modalImg{ min-height: 320px; }
        }
      `}</style>

      <div className="teamList">
        {members.map((m) => (
          <div key={m.role} className="memberRow">
            <div className="photoWrap" onClick={() => openModal(m)} role="button" aria-label={`Open photo of ${m.name}`}>
              <Image
                src={m.imageSrc}
                alt={`${m.name} (${m.role})`}
                width={600}
                height={750}
                className="photo"
                priority={m.role === "CEO"}
              />
            </div>

            <div>
              <span className="role">{m.role}</span>
              <p className="name">{m.name}</p>

              <ul className="bullets">
                {m.responsibilities.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>

              <div className="links">
                {m.linkedin ? (
                  <a className="chipLink" href={m.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn ↗
                  </a>
                ) : null}
                {m.website ? (
                  <a className="chipLink" href={m.website} target="_blank" rel="noreferrer">
                    Web ↗
                  </a>
                ) : null}
                <Link className="chipLink" href="/contact">
                  Contact →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {open && active && (
        <div className="modalRoot" role="dialog" aria-modal="true" aria-label="Photo">
          <div className="modalBackdrop" onClick={closeModal} />
          <div className="modalPanel">
            <div className="modalTop">
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span className="role">{active.role}</span>
                <strong>{active.name}</strong>
              </div>
              <button className="modalClose" onClick={closeModal} aria-label="Close">
                ✕
              </button>
            </div>

            <div className="modalBody">
              <div className="modalImg">
                <Image
                  src={active.imageSrc}
                  alt={`${active.name} (${active.role})`}
                  fill
                  sizes="(max-width: 900px) 92vw, 430px"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>

              <div className="modalInfo">
                <h3 style={{ margin: 0, fontWeight: 900 }}>担当領域</h3>
                <ul className="bullets" style={{ marginTop: 10 }}>
                  {active.responsibilities.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>

                <div className="links" style={{ marginTop: 14 }}>
                  {active.linkedin ? (
                    <a className="chipLink" href={active.linkedin} target="_blank" rel="noreferrer">
                      LinkedIn ↗
                    </a>
                  ) : null}
                  {active.website ? (
                    <a className="chipLink" href={active.website} target="_blank" rel="noreferrer">
                      Web ↗
                    </a>
                  ) : null}
                  <Link className="chipLink" href="/contact" onClick={closeModal}>
                    Contact →
                  </Link>
                </div>

                <p className="muted" style={{ marginTop: 12, marginBottom: 0, fontSize: 13 }}>
                  写真を閉じる：Esc / 背景クリック / ✕
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}