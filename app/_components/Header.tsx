import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedInIcon } from "./icons/LinkedInIcon";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4 bg-card">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">pedraldo.fr</h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/pedraldo"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <GithubIcon size={18} className="text-foreground" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/pierre-peinado-a0626172/"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <LinkedInIcon size={18} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
