import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/app/components/theme-provider";

const firacode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chaimae Khater | Software Engineer",
  description:
    "Portfolio of Chaimae Khater, a software engineer specializing in building modern, responsive web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={firacode.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
