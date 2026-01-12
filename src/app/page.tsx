import DeckCards from "../core/components/DeckCards";
import HeroSection from "../core/components/HeroSection";
import MyJourney from "../core/components/MyJourney";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSection />

      {/* My Journey section comes here */}
      <div className="mx-auto max-w-4xl p-3">
        <MyJourney/>

        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <section className="p-6 bg-gray-800/50 rounded-xl shadow-lg hover:border-l-4 border-primary gradient-custom">
              <h3 className="text-2xl font-bold text-white mb-4">
                Achievements
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary">
                    Increased User Engagement
                  </h4>
                  <p className="text-gray-300 mt-1">
                    Led a project that boosted user engagement by 20%.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">
                    Innovator of the Year
                  </h4>
                  <p className="text-gray-300 mt-1">
                    Received the &apos;Innovator of the Year&apos; award for my
                    contributions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Mentorship</h4>
                  <p className="text-gray-300 mt-1">
                    Mentored junior team members who have excelled in their
                    roles.
                  </p>
                </div>
              </div>
            </section>

            <section className="p-6 bg-gray-800/50 rounded-xl shadow-lg hover:border-l-4 border-yellow-500 gradient-custom">
              <h3 className="text-2xl font-bold text-white mb-4">
                Struggles &amp; Lessons
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-yellow-500">
                    Navigating Complexity
                  </h4>
                  <p className="text-gray-300 mt-1">
                    Learned the importance of clear communication and
                    adaptability from a complex project with shifting
                    requirements.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-500">
                    Continuous Learning
                  </h4>
                  <p className="text-gray-300 mt-1">
                    Realized that collaboration, feedback, and curiosity are
                    essential for success in the design field.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

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
