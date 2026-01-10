import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface JourneyItem {
  title: string;
  description: string;
  items: string[];
}

export default function MyJourney() {
  const journeyData = {
    current: {
      title: "Where I Am Now",
      description: "My current position in the journey of continuous growth",
      items: [
        "Full-stack developer working on scalable web applications",
        "Actively contributing to open source communities",
        "Mentoring aspiring developers through their learning paths",
        "Building side projects that solve real-world problems",
      ],
    },
    future: {
      title: "Where I Want to Be",
      description: "The vision that drives me forward every day",
      items: [
        "Lead architect on innovative tech solutions",
        "Create products that impact millions of users worldwide",
        "Establish a strong presence as a thought leader in tech",
        "Build a team of passionate, self-driven developers",
      ],
    },
    past: {
      title: "What I've Done to Get Here",
      description: "The journey of self-learning and relentless pursuit",
      items: [
        "Taught myself programming through online resources and practice",
        "Built 50+ projects from scratch to master different technologies",
        "Contributed to 20+ open source projects to learn from others",
        "Attended conferences and workshops to expand my knowledge",
      ],
    },
  };

  return (
    <section className="my-12">
      <div className="mb-12 items-center justify-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-center text-purple-200 sm:text-5xl">
          My Journey
        </h2>
        <p className="mt-4 text-2xl text-gray-400 text-center">
          A collection of thoughts, achievements, and lessons learned along the
          way.
        </p>
      </div>

      <Tabs defaultValue="current" className="w-full ">
        <TabsList className="flex gap-6 mb-8 border-b border-gray-200 overflow-x-auto h-16">
          <TabsTrigger
            value="current"
            className="flex items-center gap-2 px-6 py-3 text-gray-600 border-b-2 border-transparent data-[state=active]:border-emerald-500 data-[state=active]:text-emerald-600 transition-colors whitespace-nowrap"
          >
            Current
          </TabsTrigger>
          <TabsTrigger value="future" className="flex">
            Future
          </TabsTrigger>
          <TabsTrigger value="past" className="flex">
            Past
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </section>
  );
}
