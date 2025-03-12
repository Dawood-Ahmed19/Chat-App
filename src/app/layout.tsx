import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar";

export const metadata: Metadata = {
  title: "Chat Application",
  description: "Stay tuned with your Friends and loved ones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Sidebar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
