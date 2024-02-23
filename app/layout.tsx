import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

export const runtime = "edge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Min Trekant App",
  description: "Vilde koder af Benjamin og Tobias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-white">
      <body className={inter.className}>
        <nav className="flex gap-6 justify-center">
          <Link href="/">Retvinklet Trekant</Link>
          <Link href="/vilkaarlig">Vilkårlig Trekant</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
