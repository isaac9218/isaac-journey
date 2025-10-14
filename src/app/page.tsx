export default function Home() {
  const nowAndThen = [
    {
      title: "Where you are now",
      message:
        "Currently focused on developing a new application to streamline team workflows and researching AIs impact on UX design",
    },
    {
      title: "Where you want to be",
      message:
        "Aspiring to lead innovative dessign projects, mentor emerging talent, and contribute to technologies that enhance useer experiences",
    },
  ];

  const previousAction = [
    {
      message:
        "Worked in various design roles, from freelance to in-hourse positions at the tech companies, gaining diverse perspectivees and skills",
    },
    {
      message:
        " Embraced continuos learning by reading books like 'The Design of Everyday Things' and staying updated on emerging technologies",
    },
    {
      message:
        "Navigated complex projects, which taught valuable lessons in communication, adaptability, and collaboration.",
    },
  ];

  return (
    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mx-auto max-w-4xl p-3">
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            My Journey
          </h2>
          <p className="mt-4 text-2xl text-gray-400 flex">
            A collection of thoughts, achievements, and lessons learned along
            the way.
          </p>
        </div>

        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            {nowAndThen.map((value, index) => (
              <section
                key={index}
                className="p-6 gradient-custom rounded-xl shadow-lg btn-hover-animate"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{value.message}</p>
              </section>
            ))}
          </div>
        </div>

        <div className="space-y-8 my-8">
          <section className="p-6 gradient-custom rounded-xl shadow-lg btn-hover-animate">
            <h3 className="text-white font-bold text-2xl mb-4">
              What I&apos;ve done to get here
            </h3>
            <div className="space-y-8">
              {previousAction.map((value, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="text-gray-300">{value.message}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <section className="p-6 bg-gray-800/50 rounded-xl shadow-lg hover:border-l-4 border-primary">
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

            <section className="p-6 bg-gray-800/50 rounded-xl shadow-lg hover:border-l-4 border-yellow-500">
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
      </div>
    </main>
  );
}
