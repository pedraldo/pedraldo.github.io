/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  url?: string;
}) => {
  return (
    <Link href={props.url || "/"} className="w-full">
      <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors flex items-center gap-4 group">
        <div className="relative">
          <img
            src={props.image}
            alt={props.name}
            className="w-10 h-10 rounded-full object-container"
          />
          <img
            src={props.mediumImage}
            alt={props.name}
            className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-container"
          />
        </div>
        <div className="mr-auto">
          <div className="flex items-center gap-2">
            {/* https://ui.shadcn.com/docs/components/typography#large */}
            <p className="text-lg font-semibold">{props.name}</p>
          </div>
          {/* https://ui.shadcn.com/docs/components/typography#muted */}
          <p className="text-xs text-muted-foreground">{props.description}</p>
        </div>
        <ArrowUpRight
          size={16}
          className="mr-2 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"
        />
      </Card>
    </Link>
  );
};