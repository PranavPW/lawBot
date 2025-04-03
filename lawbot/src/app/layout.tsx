import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Removing Supabase integration for now
// import { AuthProvider } from "@/contexts/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Legal Aid Assistant",
  description: "Your AI-powered legal guidance platform for Indian law",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Removing AuthProvider wrapper for now */}
        {children}
      </body>
    </html>
  );
}
