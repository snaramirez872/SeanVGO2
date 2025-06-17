import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SeanVGO 2.0",
  description: "Welcome to the updated version of SeanVGO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
