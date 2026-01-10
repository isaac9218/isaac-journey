import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { journeyCards } from "../data/journeyCards";
import { journeyCardClasses } from "../styles/journeyCardsStyles";

export default function JourneyTabs() {
  return (
    <Tabs defaultValue="current" className="w-full ">
        <TabsList className="flex gap-6 mb-4 border-b border-gray-200 overflow-x-auto h-16">
          <TabsTrigger value="current" className="my-journey-tabs-trigger ">
            {journeyCards[0].icon}
            Current
          </TabsTrigger>
          <TabsTrigger value="future" className="my-journey-tabs-trigger ">
            {journeyCards[1].icon}
            Future
          </TabsTrigger>
          <TabsTrigger value="past" className="my-journey-tabs-trigger ">
            {journeyCards[2].icon}
            Past
          </TabsTrigger>
        </TabsList>

        {journeyCards.map((card) => {
          const styles =
            journeyCardClasses[card.key as keyof typeof journeyCardClasses];

          return (
            <TabsContent key={card.key} value={card.key}>
              <div className={`${styles.background} p-8 rounded-2xl border`}>
                <div className="flex items-start gap-4 mb-6 ">
                  <div
                    className={`${styles.icon} items-center justify-center flex w-12 h-12 rounded-xl border`}
                  >
                    {card.icon}
                  </div>

                  <div>
                    <h1 className="font-bold text-2xl">{card.title}</h1>

                    <p>{card.description}</p>
                  </div>
                </div>

                <ul>
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className={`${styles.dot} w-2 h-2 rounded-full mt-2`}/>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
  )
}
