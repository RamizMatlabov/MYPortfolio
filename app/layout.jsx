import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.scss";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Fullstack Developer | Portfolio",
  description: "Professional Fullstack Developer specializing in modern web applications. Expert in React, Next.js, Node.js, and Python. Available for freelance projects and collaborations.",
  keywords: "Fullstack Developer, Web Developer, React, Next.js, Node.js, Python, JavaScript, Portfolio",
  authors: [{ name: "Fullstack Developer" }],
  openGraph: {
    title: "Fullstack Developer | Portfolio",
    description: "Professional Fullstack Developer specializing in modern web applications",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

