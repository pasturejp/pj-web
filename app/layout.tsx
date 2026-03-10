import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";

export const metadata: Metadata = {
  title: "Pasture Japan",
  description: "Satellite × UAV × AI for pasture diagnostics",
  icons: { icon: "/logo-mark.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}