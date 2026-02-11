import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, Trophy, Lightbulb, FolderGit, Icon } from "lucide-react";
import { AchievementCardProps } from "../data/achievementCards";

interface ExperienceCardsHeaderProps {
  section: string;
  title: string;
  description: string;
  cards: AchievementCardProps[];
}

export default function ExperienceCards({
  section,
  title,
  description,
  cards,
}: ExperienceCardsHeaderProps) {
  return (
    <Accordion type="single" className="w-full space-y-4" collapsible>
      <AccordionItem
        value={section}
        className="bg-white rounded-xl p-6 border border-gray-200 overflow-hidden group"
      >
        <AccordionTrigger className="w-full items-center justify-between hover:bg-gray-50 rounded-xl transition-color">
          {
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>

              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            </div>
          }
        </AccordionTrigger>

        <AccordionContent className="justify-between grid grid-cols-2 gap-4 p-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="rounded-xl border border-gray-200 p-6 portfolio-card overflow-visible"
            >
              <div className="flex flex-col gap-1">
                <div className="rounded-xl bg-gradient-to-br from-green-500 to-teal-500 w-12 h-12 flex flex-col items-center justify-center text-white">
                  {card.icon}
                </div>
                <div className="cardLabelText">{card.category}</div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {card.title}
                </h3>
                <p className="text-gray-700">{card.description}</p>
              </div>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
