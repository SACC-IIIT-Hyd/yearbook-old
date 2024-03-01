import type { Metadata } from "next";
import "./globals.css";
import Searchbar from "./components/Searchbar";

export const metadata: Metadata = {
  title: "Photowall?",
  description: "SACC photowall attempt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Searchbar />
        <main className="max-w-6xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
