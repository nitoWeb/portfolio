import type { Metadata } from "next";
import { Alexandria } from "next/font/google";
import "./globals.css";
const font = Alexandria({
  subsets: ['latin'],
  weight: ['400', '700']
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className={font.className}>{children}</body>
    </html>
  );
}
