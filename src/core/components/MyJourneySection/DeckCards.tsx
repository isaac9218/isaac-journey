"use client";

import { useEffect, useRef, useState } from "react";

const pastCard = [
  {
    cardType: "Past",
    projectName: "AI in UX Research",
    description: "Investigated how AI can augment user research methodologies.",
  },
  {
    cardType: "Past",
    projectName: "E-commerce Redesign",
    description:
      "Overhauled an online store's UX, resulting in a 15% conversion increase.",
  },
  {
    cardType: "Past",
    projectName: "Design System",
    description:
      "Developed a comprehensive design system for a suite of enterprise applications.",
  },
];

export default function DeckCards() {
  const [activeCard, setActiveCard] = useState<null | number>(null);
  const deckRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (deckRef.current && !deckRef.current.contains(event.target as Node)) {
        setActiveCard(null);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-72 h-80 project-deck" ref={deckRef}>
      {pastCard.map((value, index) => (
        <div
          key={index}
          className={`project-card w-full h-full bg-gray-800 rounded-2xl flex-col justify-between flex shadow-xl border-2 border-gray-50 p-5 ${
            activeCard === index? "cardSelected" : ""
          }`}
          onClick={() => {
            setActiveCard(activeCard === index ? null : index);
            console.log(`card pressed ${index}`);
          }}
        >
          <div>
            <h4 className="text-gray-400 font-bold text-lg mb-4">
              {value.cardType}
            </h4>
            <h4 className="text-white font-extrabold text-xl mb-4">
              {value.projectName}
            </h4>
          </div>
          <p>{value.description}</p>
        </div>
      ))}
    </div>
  );
}
