import type { Metadata } from "next";
import "flag-icons/css/flag-icons.min.css";
import "./globals.css";
import CustomCursor from "./custom-cursor";

export const metadata: Metadata = {
  title: "Braian Orlando Sosa | Software Engineer",
  description:
    "Terminal-inspired bilingual portfolio for Braian Orlando Sosa, Full Stack Software Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
