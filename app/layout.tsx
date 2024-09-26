import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EPIIDOSIS INVESTMENT",
  description: "EPIIDOSIS INVESTMENT OFFICIAL WEBSITE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
