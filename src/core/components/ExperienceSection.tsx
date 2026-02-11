import React from "react";
import ExperienceCards from "./ExperienceCards";
import { achievementCards } from "../data/achievementCards";

export default function ExperienceSection() {
  return (
    <section>
      <div className="mb-12 items-center justify-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-center text-black sm:text-5xl">
          Experience & Growth
        </h1>
        <p className="mt-4 text-2xl text-gray-700 text-center">
          A collection of thoughts, achievements, and lessons learned along the
          way.
        </p>
      </div>

      <ExperienceCards section="achievements" title="Achievements" description="Milestones that mark my progress" cards={achievementCards}/>
    </section>
  );
}
