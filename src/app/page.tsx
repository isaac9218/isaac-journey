import DeckCards from "../core/components/MyJourneySection/DeckCards";
import ExperienceSection from "../core/components/ExperienceSection";
import HeroSection from "../core/components/HeroSection";
import MyJourney from "../core/components//MyJourneySection/MyJourney";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSection />

      {/* My Journey section comes here */}
      <div className="mx-auto max-w-4xl p-3">
        <MyJourney/>

        {/* Experience & growth section */}
        <ExperienceSection/>

        {/* Project's section */}
        <div
          id="projects-section"
          className="my-8 gradient-custom container rounded-2xl shadow-2xl mx-auto"
        >
          <h1 className="font-bold text-2xl text-center text-white">
            Projects
          </h1>
          <div className="space-y-24">
            <div className="my-8 flex flex-col items-center">
              <h2 className="mb-8 font-sans text-2xl text-center text-primary">
                Past Projects
              </h2>
              <DeckCards />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
