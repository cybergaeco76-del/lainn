"use client"; // necessário para hooks no App Router
import { useEffect } from "react";
import { Geist_Sans, Geist_Mono } from "next/font/google"; // importar fontes

// configurar fontes
const GeistSans = Geist_Sans({ subsets: ["latin"], variable: "--geist-sans" });
const GeistMono = Geist_Mono({ subsets: ["latin"], variable: "--geist-mono" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const phrases = [
      "clyyynical",
      "pcnn",
      "rivotrilll",
      "thats not v0",
      "lsddd de testaa",
      "cretentional"
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let currentText = phrases[phraseIndex];

    const interval = setInterval(() => {
      document.title =
        currentText.slice(charIndex) + " " + currentText.slice(0, charIndex);

      charIndex++;
      if (charIndex > currentText.length) {
        charIndex = 0;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        currentText = phrases[phraseIndex];
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
