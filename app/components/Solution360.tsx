"use client";

import {
  Code2,
  Megaphone,
  Scale,
  Coins,
  Settings,
  LineChart,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const solutions = [
  {
    id: 0,
    title: "Tech & Product",
    icon: Code2,
    desc: "Full-stack development & MVP architecture tailored to your vision.",
  },
  {
    id: 1,
    title: "Marketing",
    icon: Megaphone,
    desc: "Go-to-market strategy & growth hacking to reach your audience fast.",
  },
  {
    id: 2,
    title: "Legal & IP",
    icon: Scale,
    desc: "Incorporation, contracts & patent filing to protect what you build.",
  },
  {
    id: 3,
    title: "Funding",
    icon: Coins,
    desc: "Pitch deck prep & investor matching to fuel your growth.",
  },
  {
    id: 4,
    title: "Operations",
    icon: Settings,
    desc: "Scalable processes & team structure for sustainable execution.",
  },
  {
    id: 5,
    title: "Strategy",
    icon: LineChart,
    desc: "Business modeling & pivot planning to keep you ahead of the curve.",
  },
];

// Spacing configuration
const ORBIT_RADIUS = 340; // Outer track for icons
const TITLE_RADIUS = 240; // Inner track for fixed titles
const ICON_SIZE = 80; // Hardcoded size to prevent pill-shapes

export default function Solution360() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const active =
    activeId !== null ? solutions.find((s) => s.id === activeId) : null;

  return (
    <section className="py-18 bg-white overflow-hidden relative" id="solution">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[24px_24px]" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-24">
          <span className="text-lg md:text-xl  text-[#21428E] -rotate-2 mb-4 block">
            360° Support
          </span>
          <h3 className="text-4xl md:text-5xl font-bold text-[#2A2A2A]">
            Everything You Need to Scale
          </h3>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg md:text-xl">
            A robust ecosystem to orchestrate your startup&apos;s success — all
            in one place.
          </p>
        </div>

        {/* ── Mobile: stacked cards ─────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-6">
          {solutions.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-start gap-5"
              >
                <div className="p-4 bg-white text-[#21428E] rounded-xl shadow-sm border border-gray-100 shrink-0">
                  <Icon size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-[#2A2A2A] text-lg">
                    {s.title}
                  </h4>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Desktop: Orbit Diagram ────────────────────────── */}
        <div
          className="hidden lg:flex justify-center items-center relative mx-auto"
          style={{ height: 800, width: "100%", maxWidth: 1000 }}
        >
          {/* Orbit track rings */}
          <div
            className="absolute rounded-full border border-gray-200 pointer-events-none"
            style={{ width: ORBIT_RADIUS * 2, height: ORBIT_RADIUS * 2 }}
          />
          <div
            className="absolute rounded-full border-2 border-dashed border-gray-100 pointer-events-none"
            style={{ width: TITLE_RADIUS * 2, height: TITLE_RADIUS * 2 }}
          />

          {/* ── Central Core ── */}
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-30 w-72 h-72 bg-[#21428E] rounded-full shadow-2xl flex flex-col items-center justify-center text-center p-8 border-8 border-white ring-8 ring-[#21428E]/10"
          >
            {active ? (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col items-center gap-3"
              >
                <active.icon size={48} className="text-[#EF3F3C]" />
                <span className="text-white font-bold text-2xl leading-tight mt-2">
                  {active.title}
                </span>
                <div className="w-12 h-1 bg-[#EF3F3C] rounded-full my-1" />
                <p className="text-white/80 text-sm leading-snug px-2">
                  {active.desc}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center"
              >
                <span className="text-white font-bold text-4xl leading-tight">
                  Your
                  <br />
                  Venture
                </span>
                <div className="w-12 h-1.5 bg-[#EF3F3C] my-4 rounded-full" />
                <span className="text-white/70 text-base font-medium">
                  Hover an orbit
                </span>
              </motion.div>
            )}
          </motion.div>

          {/* ── Fixed Titles Layer (Inner Circle) ── */}
          <div
            className="absolute z-20 pointer-events-none"
            style={{ width: TITLE_RADIUS * 2, height: TITLE_RADIUS * 2 }}
          >
            {solutions.map((s, i) => {
              // Calculate fixed X, Y positions for titles
              const angle = (i * 360) / solutions.length - 90;
              const rad = (angle * Math.PI) / 180;
              const x = Math.cos(rad) * TITLE_RADIUS;
              const y = Math.sin(rad) * TITLE_RADIUS;
              const isActive = activeId === s.id;

              return (
                <div
                  key={`title-${s.id}`}
                  className="absolute pointer-events-auto cursor-pointer flex items-center justify-center transition-transform duration-300"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: `translate(-50%, -50%) ${isActive ? "scale(1.1)" : "scale(1)"}`,
                  }}
                  onMouseEnter={() => {
                    setIsPaused(true);
                    setActiveId(s.id);
                  }}
                  onMouseLeave={() => {
                    setIsPaused(false);
                    setActiveId(null);
                  }}
                >
                  <span
                    className={`text-base font-bold tracking-wide whitespace-nowrap px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border transition-colors duration-300 ${
                      isActive
                        ? "text-[#EF3F3C] border-[#EF3F3C]/30 shadow-md"
                        : "text-[#2A2A2A] border-transparent shadow-sm"
                    }`}
                  >
                    {s.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* ── Rotating Icons Layer (Outer Orbit) ── */}
          <div
            className="absolute z-10"
            style={{
              width: ORBIT_RADIUS * 2,
              height: ORBIT_RADIUS * 2,
              animation: "orbitSpin 40s linear infinite",
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {solutions.map((s, i) => {
              const angle = (i * 360) / solutions.length - 90;
              const isActive = activeId === s.id;
              const Icon = s.icon;

              return (
                <div
                  key={`icon-${s.id}`}
                  className="absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    width: ICON_SIZE,
                    height: ICON_SIZE,
                    marginTop: -ICON_SIZE / 2,
                    marginLeft: -ICON_SIZE / 2,
                    transform: `rotate(${angle}deg) translateX(${ORBIT_RADIUS}px)`,
                  }}
                >
                  {/* Counter-rotate whole wrapper so icons stay upright */}
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      animation: "orbitSpinReverse 40s linear infinite",
                      animationPlayState: isPaused ? "paused" : "running",
                    }}
                  >
                    {/* Reverse initial angle so it sits completely flat */}
                    <div
                      style={{
                        transform: `rotate(${-angle}deg)`,
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <motion.button
                        animate={isActive ? { scale: 1.15 } : { scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        // Explicit strict sizing prevents pill shapes!
                        style={{ width: ICON_SIZE, height: ICON_SIZE }}
                        className={`rounded-full shadow-xl border-4 flex items-center justify-center cursor-pointer transition-colors duration-300
                          ${
                            isActive
                              ? "bg-[#21428E] border-[#EF3F3C] text-white"
                              : "bg-white border-[#21428E] text-[#21428E] hover:border-[#EF3F3C] hover:text-[#EF3F3C]"
                          }`}
                        onMouseEnter={() => {
                          setIsPaused(true);
                          setActiveId(s.id);
                        }}
                        onMouseLeave={() => {
                          setIsPaused(false);
                          setActiveId(null);
                        }}
                      >
                        <Icon size={32} />
                      </motion.button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Animations */}
          <style>{`
            @keyframes orbitSpin {
              from { transform: rotate(0deg); }
              to   { transform: rotate(360deg); }
            }
            @keyframes orbitSpinReverse {
              from { transform: rotate(0deg); }
              to   { transform: rotate(-360deg); }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
