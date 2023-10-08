import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/ui/navbar";
import { ThemeProvider } from "@/providers/theme-provider";
import Footer from "@/components/ui/footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "X-Desire",
  description: "X-Desire access NASA data with ease",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("bg-gradient-to-r from-gray-900 via-gray-950 to-black", inter.className)}>
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
