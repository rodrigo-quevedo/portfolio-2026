import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-plus-jakarta"
});

export const metadata: Metadata = {
  title: "Rodrigo Quevedo - Portfolio",
  description: "Desarrollador Full Stack | System Architect",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${plusJakarta.variable} font-sans antialiased bg-[#050505] text-slate-300 relative overflow-x-hidden`}>
        {/* Orbes de luz de fondo para el efecto Glassmorphism */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-indigo-900/20 blur-[100px]"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
