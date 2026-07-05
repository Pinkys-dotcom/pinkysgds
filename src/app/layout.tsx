import type { Metadata } from "next";
import { Poppins, Kaushan_Script } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sans = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const script = Kaushan_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Pinky's Garage Doors | Phoenix, AZ",
  description:
    "Garage doors done right. Repair, replace, or upgrade your garage door with honest recommendations, expert craftsmanship, and service you can count on. Serving Phoenix, AZ and Maricopa County.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${script.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-cream text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
