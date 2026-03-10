import Link from "next/link";

export default function PrivacyPage() {
  return (
    <>
      {/* HERO */}
      <section className="heroWrap">
        <div className="container section">
          <p className="muted" style={{ margin: 0, fontSize: 13, letterSpacing: 0.4 }}>
            Privacy
          </p>
          <h1 className="h1" style={{ marginTop: 10 }}>
            プライバシーポリシー
          </h1>
          <p className="muted" style={{ marginTop: 12, fontSize: 16, lineHeight: 1.8, maxWidth: 820 }}>
            Pasture Japan（以下「当社」）は、お問い合わせ対応等のために取得する個人情報を適切に取り扱います。
            本ページは簡易版です。運用に合わせて改訂します。
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section>
        <div className="container section">
          <div className="card">
            <h2 className="h2">1. 取得する情報</h2>
            <p className="muted" style={{ marginTop: 10 }}>
              お問い合わせ時に入力された氏名、所属、メールアドレス、内容等を取得する場合があります。
            </p>

            <h2 className="h2" style={{ marginTop: 18 }}>2. 利用目的</h2>
            <p className="muted" style={{ marginTop: 10 }}>
              お問い合わせへの対応、必要なご連絡、サービス改善の参考のために利用します。
            </p>

            <h2 className="h2" style={{ marginTop: 18 }}>3. 第三者提供</h2>
            <p className="muted" style={{ marginTop: 10 }}>
              法令に基づく場合を除き、本人の同意なく第三者に提供しません。
            </p>

            <h2 className="h2" style={{ marginTop: 18 }}>4. 安全管理</h2>
            <p className="muted" style={{ marginTop: 10 }}>
              不正アクセスや漏えい防止のため、必要な安全管理措置を講じます。
            </p>

            <h2 className="h2" style={{ marginTop: 18 }}>5. お問い合わせ窓口</h2>
            <p className="muted" style={{ marginTop: 10, marginBottom: 0 }}>
              連絡先は <Link href="/contact">Contact</Link> をご覧ください。
            </p>
          </div>
        </div>
      </section>
      
    </>
  );
}