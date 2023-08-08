import Navbar from "@/components/navigation/Navbar";
import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import Footer from "@/components/navigation/Footer";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Cecil Selorm Aglili",
  description: "Backend Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
