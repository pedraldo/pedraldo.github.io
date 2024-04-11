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
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="flex-1 p-4">Work</Card>
        <Card className="flex-1 p-4">Contact me</Card>
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
        <props.Logo size={16} />
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
