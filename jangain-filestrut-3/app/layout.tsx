import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Jangain",
  description: "Online Learning Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
