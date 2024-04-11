/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Camera, Gift, Grid3X3, LucideIcon } from "lucide-react";
import Link from "next/link";
import { Section } from "./Section";

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
        <Card className="flex-1 p-4">
          <p className="text-lg text-muted-foreground">Contact me</p>
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

type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={20} />
      </span>
      <div>
        {/* https://ui.shadcn.com/docs/components/typography#large */}
        <p className="text-lg font-semibold">{props.title}</p>
        {/* https://ui.shadcn.com/docs/components/typography#muted */}
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};

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

type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  freelance?: boolean;
};

const Work = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-8 h-8 object-contain rounded-md"
      />
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          {/* https://ui.shadcn.com/docs/components/typography#large */}
          <p className="text-lg font-semibold">{props.title}</p>
          {props.freelance && <Badge variant="outline">Mission</Badge>}
        </div>
        {/* https://ui.shadcn.com/docs/components/typography#muted */}
        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
      <p className="text-xs text-end text-muted-foreground">{props.date}</p>
    </Link>
  );
};
