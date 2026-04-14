import DeckCards from "../core/components/MyJourneySection/DeckCards";
import ExperienceSection from "../core/components/ExperienceSection";
import HeroSection from "../core/components/HeroSection";
import MyJourney from "../core/components//MyJourneySection/MyJourney";
import ProjectCardsSlider from "../core/components/ProjectSection/ProjectCardsSlider";
import MyProjectSection from "../core/components/ProjectSection/MyProjectSection";

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
        <MyProjectSection/>
      </div>
    </main>
  );
}
