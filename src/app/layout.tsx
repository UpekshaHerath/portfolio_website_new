import "./globals.css"
import { Inter } from "next/font/google";
import { ThemeProvider } from "./theme-provider";
import { ThemeSwitcher } from "@/components/theme/ThemeSwitcher";


const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Darkmode with Next.js and TailwindCSS",
  description:
    "I simply app to showcase dark mode with Next.js and TailwindCSS",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const switchThemeDuration = "transition duration-500";
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-50 dark:bg-[#0d1117] ${switchThemeDuration}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeSwitcher />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}