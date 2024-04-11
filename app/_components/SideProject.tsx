import { LucideIcon } from "lucide-react";
import Link from "next/link";

export type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
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
        <p className="text-lg font-semibold">{props.title}</p>
        {/* https://ui.shadcn.com/docs/components/typography#muted */}
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};
