import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav  from './components/layouts/Nav'
import Footer  from './components/layouts/Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hotel Hacienda Trinidad",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        <main className="w-full relative flex flex-col items-center justify-between pt-20 pb-4">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}