/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Camera, Gift, Grid3X3 } from "lucide-react";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";
import { SideProject, SideProjectProps } from "./SideProject";
import { Work, WorkProps } from "./Work";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2">
          {/* https://ui.shadcn.com/docs/components/typography#muted */}
          <p className="text-lg text-muted-foreground">Side fun projects</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject key={index} {...project} />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="flex-1 p-4">
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card className="flex-1 p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Contact me</p>
          <ContactCard
            name="Email"
            image="images/pierre.png"
            mediumImage="https://upload.wikimedia.org/wikipedia/fr/a/a7/Mail_%28Apple%29_logo.png"
            description="ppeinadop@gmail.com"
            url="mailto:ppeinadop@gmail.com"
          />
          <ContactCard
            name="Phone"
            image="images/pierre.png"
            mediumImage="images/phone.png"
            description="+33 6 62 88 10 24"
          />
          <ContactCard
            name="LinkedIn"
            image="images/pierre.png"
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
            description="Pierre Peinado"
            url="https://www.linkedin.com/in/pierre-peinado-a0626172/"
          />
        </Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Gift,
    title: "Regalo",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    url: "https://github.com/pedraldo",
  },
  {
    Logo: Camera,
    title: "Hygge",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    url: "https://github.com/pedraldo",
  },
  {
    Logo: Grid3X3,
    title: "2048",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    url: "https://github.com/pedraldo",
  },
];

const WORKS: WorkProps[] = [
  {
    image: "images/hlc.png",
    title: "Hector Le Collector",
    role: "Fullstack developer, Operations manager",
    date: "July 2022 - Oct 2023",
    url: "https://hectorlecollector.fr/",
  },
  {
    image: "images/wbg.png",
    title: "Webinage",
    role: "Fullstack developer, Scrum Master",
    date: "Sept 2017 - June 2022",
    url: "https://www.webinage.fr/",
  },
  {
    image:
      "https://livingobjects.com/wp-content/uploads/2019/09/lo__logo_lo_medium-1.svg",
    title: "Living Objects",
    role: "Frontend Developer",
    date: "Sept 2016 - June 20217",
    url: "https://livingobjects.com/",
  },
];
