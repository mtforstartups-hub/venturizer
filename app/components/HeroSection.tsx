"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function HeroSection() {
  // 1. Setup our rotating words in React State
  const [index, setIndex] = useState(0);
  const words = [
    { text: "Build", color: "text-blue-200" },
    { text: "Invest In", color: "text-blue-200" },
    { text: "Support", color: "text-blue-200" },
  ];

  // 2. Cycle to the next word every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>
        {`
            /* 3. A single, clean 3-second animation cycle */
            @keyframes singleFlip {
                0% { opacity: 0; transform: rotateX(-90deg); }
                15%, 85% { opacity: 1; transform: rotateX(0deg); }
                100% { opacity: 0; transform: rotateX(90deg); }
            }
            .animate-flip-single {
                display: inline-block;
                transform-origin: 50% 50%;
                /* The animation lasts exactly as long as our setInterval (3s) */
                animation: singleFlip 3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
            }
        `}
      </style>

      <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden bg-[#22418F] text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-t from-[#22418F] to-[#0A1838]"></div>

          {/* ====================================================================
            MARKER: DROP YOUR LOTTIE ANIMATION HERE
            ====================================================================
            I placed this inside the z-0 background wrapper so it floats 
            behind the text safely without blocking clicks. 
            Adjust top/right/w/h values to position it perfectly on your screen.
          */}
          {/* <div className="absolute top-20 right-10 md:top-22 md:right-20 xl:right-100 w-64 h-64 md:w-96 md:h-96 opacity-80 pointer-events-none"> */}
          {/* <Lottie animationData={yourPaperPlaneAnimation} loop={true} /> */}
          {/* <DotLottieReact src="Paperplane.lottie" loop autoplay /> */}
          {/* </div> */}
          {/* ================================================================== */}
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full text-blue-100 text-sm font-medium mb-10 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            World&apos;s First Venture Capability Ecosystem
            <div className="absolute opacity-80 -right-50">
              <DotLottieReact src="Paperplane.lottie" loop autoplay />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight mb-8 flex flex-col items-center">
            {/* 4. This container now perfectly shrink-wraps and centers automatically! */}
            <span className="flex items-center gap-3 md:gap-4 min-h-[1.2em]">
              <span
                key={
                  index
                } /* The key forces React to trigger the CSS animation on every word swap */
                className={`animate-flip-single ${words[index].color}`}
              >
                {words[index].text}
              </span>
              <span>Resilient</span>
            </span>

            <span className="mt-2 md:mt-4 block text-transparent bg-clip-text bg-linear-to-r from-cyan-300 to-blue-200">
              High-Growth
            </span>
            <span className="block mt-2">Ventures</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-12 max-w-3xl mx-auto">
            <span className="block mt-4 text-blue-200 text-lg">
              We support founders in their{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-300 to-blue-200 font-semibold">
                0-100 Crore
              </span>{" "}
              journey. A structured, milestone-driven approach bridging critical
              gaps in execution, expertise, governance, and capital.
            </span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-xl shadow-red-900/30 flex items-center justify-center gap-2">
              Start Scaling <ArrowRight size={20} />
            </button>

            <button className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group">
              Explore Ecosystem{" "}
              <ChevronRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
              <div className="absolute w-80 h-40 -right-65 -top-45 -z-10 opacity-60">
                <DotLottieReact src="Startup.lottie" loop autoplay />
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
