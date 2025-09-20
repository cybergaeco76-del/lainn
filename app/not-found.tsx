"use client"

import { useEffect, useState } from "react"

export default function NotFound() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background GIF with subtle effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/edfaeab6144d547b09e310e027a606d5-Qrxyi1Ikihzq6Q8T2wueq76mSkXlL8.gif"
          alt=""
          className="w-96 h-96 object-contain opacity-60 blur-[1px] grayscale-[20%]"
        />
      </div>

      {/* Glitched text */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-mono text-white glitch-text mb-8">
          {"looking for something?".split("").map((char, i) => (
            <span
              key={i}
              className={`inline-block ${char === "?" ? "glitch-question" : ""}`}
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <div className="text-sm text-gray-400 font-mono tracking-wider">404 - page not found</div>
      </div>

      {/* Subtle scan lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="scan-lines-404"></div>
      </div>
    </div>
  )
}
