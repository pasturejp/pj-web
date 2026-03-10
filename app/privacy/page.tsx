import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="container">
      <header style={{ marginBottom: 18 }}>
        <h1 className="h1">Privacy Policy</h1>
        <p className="muted" style={{ marginTop: 8, marginBottom: 0 }}>
          プライバシーポリシー（簡易版）
        </p>
      </header>

      <section className="card">
        <h2 className="h2">1. 取得する情報</h2>
        <p className="muted">
          お問い合わせ時に入力された氏名、所属、メールアドレス、内容等を取得する場合があります。
        </p>

        <h2 className="h2">2. 利用目的</h2>
        <p className="muted">
          お問い合わせへの対応、必要なご連絡、サービス改善の参考のために利用します。
        </p>

        <h2 className="h2">3. 第三者提供</h2>
        <p className="muted">
          法令に基づく場合を除き、本人の同意なく第三者提供しません。
        </p>

        <h2 className="h2">4. お問い合わせ窓口</h2>
        <p className="muted" style={{ marginBottom: 0 }}>
          連絡先は <Link href="/contact">Contact</Link> をご覧ください。
        </p>
      </section>

      <footer className="footer">
        <Link href="/">← Back to Home</Link>
      </footer>
    </main>
  );
}