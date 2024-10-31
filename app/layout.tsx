import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import React from "react";
import { Header } from "@/components/shared/header";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Chocolate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} antialiased h-min-screen`}>
        <Header />
        <main className="h-full">{children}</main>
      </body>
    </html>
  );
}
