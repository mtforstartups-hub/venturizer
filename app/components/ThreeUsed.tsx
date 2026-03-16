"use client";

import { useState } from "react";
import { motion } from "motion/react";

const cardsData = [
  {
    id: 1,
    title: "Alamo Heights by Homebound",
    subtitle: "THE DRIPPING SPRINGS",
    // Placeholder matching the light house in the video
    color: "bg-slate-200",
  },
  {
    id: 2,
    title: "Custom Home",
    subtitle: "SONOMA, CA",
    // Placeholder matching the warm/wood interior in the video
    color: "bg-amber-100",
  },
  {
    id: 3,
    title: "The Clifford by Homebound",
    subtitle: "THE AUSTIN",
    // Placeholder matching the dark exterior house in the video
    color: "bg-zinc-800",
  },
];

export default function ExpandingGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex w-full max-w-7xl h-[500px] gap-2 p-4 mx-auto">
      {cardsData.map((card, index) => {
        const isActive = hoveredIndex === index;
        const isAnyActive = hoveredIndex !== null;

        return (
          <motion.div
            key={card.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`relative overflow-hidden cursor-pointer ${card.color}`}
            // Initial state: all elements take equal width
            initial={{ flex: 1 }}
            // Animate flex-grow based on hover state
            animate={{
              flex: isAnyActive ? (isActive ? 3 : 1) : 1,
            }}
            // Using a spring transition for that perfectly smoothed, natural feel
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 25,
              mass: 0.8,
            }}
          >
            {/* Dark gradient overlay so text is always readable over any background */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />

            {/* Text Content */}
            {/* whitespace-nowrap ensures text clips nicely when the card shrinks instead of wrapping awkwardly */}
            <div className="absolute bottom-0 left-0 p-6 whitespace-nowrap text-white">
              <h3 className="text-xl font-medium tracking-tight mb-1">
                {card.title}
              </h3>
              <p className="text-sm font-semibold tracking-wider text-gray-300 uppercase">
                {card.subtitle}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
