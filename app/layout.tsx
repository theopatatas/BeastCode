import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BeastCode | Theo Ocampo",
  description: "Modern developer portfolio hero for Theo Ocampo.",
  icons: {
    icon: "/beastcode-logo.png",
    shortcut: "/beastcode-logo.png",
    apple: "/beastcode-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
