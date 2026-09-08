import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/app/components/theme-provider";
import Grainient from "@/app/components/Grainient";
import Navbar from "@/app/components/Navbar";


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
<ThemeProvider >
        <div className="bg-fixed-cover">
<Grainient
                  timeSpeed={0.4}
                  contrast={0.95}
                  grainAmount={0.02}
        
                  color1="#0e1627"
                  color2="#d8a694"
                  color3="#a86a65"
                />
            <div className="absolute inset-0 bg-background/45 dark:bg-background/65" />
        </div>
        <div className="content">
          <Navbar />
          {children}
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
