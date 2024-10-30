import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DIWALI WISHES",
  description: "A WEB CREATED FOR DIWALI WISHES TO PEOPLE WHO ARE FAR AWAY FROM YOU ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
