"use client"

import { useState, useEffect } from "react"

export default function HomePage() {
  const [currentStage, setCurrentStage] = useState<"loading" | "question" | "vhs">("loading")
  const [questionText, setQuestionText] = useState("how you feel?")
  const [showVhsContent, setShowVhsContent] = useState(false)
  const [showDisturbingGif, setShowDisturbingGif] = useState(false)

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setCurrentStage("question")
    }, 3000)

    return () => clearTimeout(loadingTimer)
  }, [])

  useEffect(() => {
    if (currentStage === "question") {
      const glitchTexts = [
        "how you feel?",
        "h0w y0u f33l?",
        "h@w y@u f##l¿",
        "HOW YOU FEEL?",
        "how y∅u feel?",
        "h◊w ¥◊u f∑∑l?",
        "how you feel?",
      ]

      let glitchIndex = 0
      const glitchInterval = setInterval(() => {
        setQuestionText(glitchTexts[glitchIndex % glitchTexts.length])
        glitchIndex++
      }, 200)

      const questionTimer = setTimeout(() => {
        setCurrentStage("vhs")
        setTimeout(() => setShowVhsContent(true), 500)
      }, 5000)

      return () => {
        clearInterval(glitchInterval)
        clearTimeout(questionTimer)
      }
    }
  }, [currentStage])

  const handleClickIt = () => {
    setShowDisturbingGif(true)
  }

  if (currentStage === "loading") {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center vhs-lines">
        <div className="text-center">
          <div className="mb-8 loading-animation">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/37qjly9b90dy-OfcTe71Q8AgVkndm85BYgmUNen8rZQ.gif"
              alt="Lain loading"
              className="w-64 h-64 mx-auto object-contain"
            />
          </div>

          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full loading-animation"></div>
            <div
              className="w-2 h-2 bg-purple-500 rounded-full loading-animation"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 bg-purple-500 rounded-full loading-animation"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>
    )
  }

  if (currentStage === "question") {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center vhs-lines">
        <div className="text-center">
          <h1
            className="text-6xl md:text-8xl font-bold text-white broken-text glitch-text relative"
            data-text={questionText}
          >
            {questionText}
          </h1>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {showDisturbingGif && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="relative">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ezgif-71e4ff3582eda1-K6SF5BC1K2BWc6gOzcgKX9Dvx3NHYg.gif"
              alt=""
              className="w-screen h-screen object-cover disturbing-gif"
              style={{
                filter: "contrast(1.3) saturate(0.8) hue-rotate(10deg)",
                animation: "disturbing-flicker 0.1s infinite alternate, subtle-shake 0.05s infinite",
              }}
            />
            <div className="absolute inset-0 bg-red-900 opacity-10 animate-pulse"></div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
                animation: "scan-lines 0.1s linear infinite",
              }}
            ></div>
          </div>
        </div>
      )}

      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-white"
              style={{
                top: `${i * 12}%`,
                animation: `vhs-flicker ${4 + i * 0.2}s infinite alternate`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/171468-Mq8CK8syGwreJ5t4iwKk80OiN25sD7.gif"
          alt="Lain silhouette"
          className="w-96 h-96 object-contain blur-sm"
        />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        {showVhsContent && !showDisturbingGif && (
          <div className="text-center space-y-16 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-light text-white font-mono tracking-wide">you are here now</h1>

              <div className="text-base md:text-lg text-gray-400 font-mono space-y-2 opacity-70">
                <p>everything is connected</p>
                <p>everyone is watching</p>
              </div>
            </div>

            <div className="mt-12">
              <button
                onClick={handleClickIt}
                className="px-6 py-3 bg-transparent border border-white text-white font-mono text-sm hover:bg-white hover:text-black transition-all duration-500 tracking-wide"
              >
                click it
              </button>
            </div>

            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-gray-600 font-mono text-xs opacity-40">
              <p>you've been here before</p>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
