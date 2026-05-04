import { Space_Grotesk, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToastListener from "@/components/ToastListener";
import { Toaster } from "react-hot-toast";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata = {
  title: "SkillSphere",
  description: "Modern learning platform for skill-based growth.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ToastListener />
        <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
      </body>
    </html>
  );
}
