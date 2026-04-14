import React from "react";
import ProjectCardsSlider from "./ProjectCardsSlider";

export default function MyProjectSection() {
  return (
    <section>
      <div className="my-12 items-center justify-center ">
        <h1 className="font-extrabold tracking-tight text-center text-4xl sm:text-5xl">
          Projects
        </h1>
        <p className="text-2xl text-gray-600 mt-4 text-center">
          Here are some of my recent projects
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <ProjectCardsSlider />
      </div>
    </section>
  );
}
