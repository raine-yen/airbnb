import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atria House — Cinematic Property Visualization",
  description: "Short-form property marketing created from approved, accurate property assets.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
