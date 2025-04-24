import "@/styles/globals.css";
import "@/styles/components.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Laura Gotarra - Full Stack Developer & Telecoms Engineer",
  description:
    "My interactive online CV - also my lab for learning and experimenting with cool web stuff.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
