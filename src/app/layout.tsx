import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/providers/active-section-context";
import { ThemeProvider } from "@/providers/theme-provider";
import ThemeSwitch from "@/components/ThemeSwitch";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";

import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dolapo Fajobi | Software Engineer",
  description: "Portfolio of Dolapo Fajobi, Software Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-bg-main text-text-primary antialiased min-h-screen relative overflow-x-hidden transition-colors duration-300`}>
        <ThemeProvider>
          <ActiveSectionContextProvider>
            <LoadingScreen />
            <CustomCursor />
            <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
            {/* Ambient background glow */}
            <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px] -z-10 pointer-events-none" />
            <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px] -z-10 pointer-events-none" />
            
            {children}
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
