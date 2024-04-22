import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

export type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
  badge?: {
    text: string;
    color: string;
  };
};
export const SideProject = (props: SideProjectProps) => {
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
        <div className="text-lg font-semibold flex items-center">
          {props.title}
          {props.badge && (
            // List dynamic classes possible results so that Tailwind generate them
            // text-primary text-destructive text-white
            // border-primary border-destructive border-white
            <span
              className={cn(
                `text-${props.badge.color} border-${props.badge.color}`,
                "border ml-2 rounded-md text-xs px-2"
              )}
            >
              {props.badge.text}
            </span>
          )}
        </div>
        {/* https://ui.shadcn.com/docs/components/typography#muted */}
        <p className="text-xs text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};
