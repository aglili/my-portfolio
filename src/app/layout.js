import Navbar from "@/components/navigation/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/navigation/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cecil Selorm Aglili",
  description: "Backend Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
