import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/Components/Nav";
import Footer from "@/Components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { CSPostHogProvider } from "@/app/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quiz App",
  description: "Quiz App built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CSPostHogProvider>
          <body>
            <Nav />
            {children}
            <Footer />
          </body>
        </CSPostHogProvider>
      </html>
    </ClerkProvider>
  );
}
