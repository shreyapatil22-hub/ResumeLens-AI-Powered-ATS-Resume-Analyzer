import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "ResumeLens | AI Resume Analyzer", description: "ATS-ready resume feedback powered by AI" };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
