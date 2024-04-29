import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ActiveSectionContextProvider from "@/providers/active-section-context";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/ThemeSwitch";

const poppins = Poppins({ subsets: ["latin"],weight:'400' });

export const metadata: Metadata = {
  title: "Dolapo Fajobi Portfolio",
  description: "Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth dark">
      <body
        className={twMerge(
          `flex flex-col relative justify-between bg-gray-50 dark:bg-gray-900 dark:text-white dark:text-opacity-90 text-slate-950 pt-32 sm:pt-36`,
          poppins.className
        )}
      >
        <div className="bg-[#e2e4fb] dark:bg-[#442121] -z-10 absolute top-[-6rem] dark:top-[-12rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] dark:bg-[#0e3b62] -z-10 absolute top-[-1rem] dark:top-[-12rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ActiveSectionContextProvider>
          <Header />
          <main className="min-h-screen px-12 sm:px-5 flex justify-center flex-col items-center container mx-auto">
            {children}
          </main>
          <Footer />
          <Toaster position="bottom-right" />
        </ActiveSectionContextProvider>{" "}
        <ThemeSwitch />
      </body>
    </html>
  );
}
