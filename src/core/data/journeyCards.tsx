import { MapPin, Rocket, Route } from "lucide-react";

export const journeyCards = [
    {
      key: "current",
      title: "Where I Am Now",
      description: "My current position in the journey of continuous growth",
      items: [
        "Full-stack developer working on scalable web applications",
        "Actively contributing to open source communities",
        "Mentoring aspiring developers through their learning paths",
        "Building side projects that solve real-world problems",
      ],
      icon: <MapPin/>,
    },
    {
      key: "future",
      title: "Where I Want to Be",
      description: "The vision that drives me forward every day",
      items: [
        "Lead architect on innovative tech solutions",
        "Create products that impact millions of users worldwide",
        "Establish a strong presence as a thought leader in tech",
        "Build a team of passionate, self-driven developers",
      ],
      icon: <Rocket/>,
    },
    {
      key: "past",
      title: "What I've Done to Get Here",
      description: "The journey of self-learning and relentless pursuit",
      items: [
        "Taught myself programming through online resources and practice",
        "Built 50+ projects from scratch to master different technologies",
        "Contributed to 20+ open source projects to learn from others",
        "Attended conferences and workshops to expand my knowledge",
      ],
      icon: <Route/>,
    },
  ];

  