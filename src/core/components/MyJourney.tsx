import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import JourneyTabs from "./JourneyTabs";

export default function MyJourney() {

  return (
    <section className="my-12">
      <div className="mb-12 items-center justify-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-center text-black sm:text-5xl">
          My Journey
        </h2>
        <p className="mt-4 text-2xl text-gray-700 text-center">
          A collection of thoughts, achievements, and lessons learned along the
          way.
        </p>
      </div>

     <JourneyTabs/>
    </section>
  );
}
