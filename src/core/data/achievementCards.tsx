import { ChevronDown, Trophy, Lightbulb, FolderGit, Icon } from "lucide-react";

export interface AchievementCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  link: string;
  icon: React.ReactNode;
}

export const achievementCards: AchievementCardProps[] = [
  { id: "card_1",
    title: "Award-Winning Mobile App",
    description:
      "Received the Best User Experience Award 2025 for a healthcare mobile application serving over 100,000 users.",
    date: "Oct 2025",
    category: "Achievement",
    link: "#",
    icon: <Trophy className="w-6 h-6" />,
  },
  { id: "card_2",
    title: "Successfully Launched SaaS Product",
    description: "Led a team of 8 developers to successfully launch a B2B SaaS platform that reached $1M ARR in 6 months.",
    date: "Nov 2025",
    category: "Achievement",
    link: "#",
    icon: <Trophy className="w-6 h-6" />,
  },
  { id: "card_3",
    title: "Successfully Launched SaaS Product",
    description: "Led a team of 8 developers to successfully launch a B2B SaaS platform that reached $1M ARR in 6 months.",
    date: "Nov 2025",
    category: "Achievement",
    link: "#",
    icon: <Trophy className="w-6 h-6" />,
  },
  { id: "card_4",
    title: "Successfully Launched SaaS Product",
    description: "Led a team of 8 developers to successfully launch a B2B SaaS platform that reached $1M ARR in 6 months.",
    date: "Nov 2025",
    category: "Achievement",
    link: "#",
    icon: <Trophy className="w-6 h-6" />,
  }
];

