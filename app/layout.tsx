import React, { Suspense, useEffect } from "react"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Efeito de textos rolantes no título da aba
  useEffect(() => {
    const phrases = [
      "clyyynical",
      "pcnn", 
      "rivotrilll"
    ]

    let phraseIndex = 0
    let charIndex = 0
    let currentText = phrases[phraseIndex]

    const interval = setInterval(() => {
      document.title =
        currentText.slice(charIndex) + " " + currentText.slice(0, charIndex)

      charIndex++
      if (charIndex > currentText.length) {
        charIndex = 0
        phraseIndex = (phraseIndex + 1) % phrases.length
        currentText = phrases[phraseIndex]
      }
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <html lang="en" className="dark">
      <body className="font-sans">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
