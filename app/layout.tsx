import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ares Integrated Resources",
  description: "Excellence in defense, construction, and manufacturing solutions",
};

export default function RootLayout({
  
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       
        <main className="">
        <div className="flex flex-col bg-white justify-center items-center overflow-x-hidden">
         <center> <h1 className="text-2xl text-red-800 font-bold">SITE OFFLINE: Contact Administrator.</h1></center>
        </div>
        </main>
      
      </body>
    </html>
  );
}
