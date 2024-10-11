import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Strategic Stealth Machines",
  keywords:
    "AI, Solutions, Research, IOT, Automations, IT Solutions, Aerospace, Drones, Projects",
  description:
    "Our IoT-based products and IT solutions deliver cutting-edge technology for transport, e-commerce and industrial sectors. Whether you're looking to enhance fleet management, streamline passenger booking, or build intelligent AI agents, we offer customized, scalable solutions to meet your business needs and ensure sustainable growth. With our AI expertise and deep industry knowledge, we are committed to delivering innovative solutions that drive operational excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
