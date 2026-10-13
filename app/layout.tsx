import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "fb786 — Demo Platform",
  description: "fb786 responsive platform starter",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="bn"><body>{children}</body></html>;
}
