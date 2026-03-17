import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function HeroSectionV2() {
  return (
    <section className="xl:min-h-[95%] bg-linear-to-t from-[#22418F] via-30% to-[#0A1838]">
      <div
        id="outer-container"
        className="w-full md:max-w-3/4 xl:max-w-3/5 px-6 sm:px-10 py-20 md:py-40 mx-auto overflow-hidden"
      >
        <div className="flex flex-col gap-4 items-center">
          {/* Badge + Lottie: badge stays centered, Lottie floats beside it */}
          <div className="relative flex items-center justify-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full text-blue-100 text-sm font-medium shadow-lg">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              World&apos;s First Venture Capability Ecosystem
            </div>

            {/* Absolutely anchored to the right of the badge row, doesn't affect centering */}
            <div className="absolute left-9/10 sm:left-full ml-2 top-1/2 -translate-y-1/2 size-35 md:size-50 xl:size-60 shrink-0">
              <DotLottieReact src="Paperplane.lottie" loop autoplay />
            </div>
          </div>

          {/* Title and Subtitle */}
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl xl:text-[7rem] font-bold text-white leading-tight">
              <span className="block whitespace-nowrap">Build Resilient</span>
              <span className="block whitespace-nowrap text-transparent bg-clip-text bg-linear-to-r from-cyan-300 to-blue-200">
                High-Growth
              </span>
              <span className="block whitespace-nowrap">Ventures</span>
            </h1>

            <p className="text-sm md:text-lg text-blue-100 leading-relaxed my-8 max-w-3xl">
              We support founders in their <span>0-100 Crore</span> journey. A
              structured, milestone-driven approach bridging critical gaps in
              execution, expertise, governance, and capital.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-red-500 hover:bg-red-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-xl shadow-red-900/30 flex items-center justify-center gap-2">
              Start Scaling <ArrowRight size={20} />
            </button>

            <button className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group">
              Explore Ecosystem{" "}
              <ChevronRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
