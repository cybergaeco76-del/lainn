"use client"; // necessário para hooks no App Router
import { useEffect } from "react";

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
      <body>
        {children}
      </body>
    </html>
  );
}
