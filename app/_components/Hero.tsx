/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { LinkedInIcon } from "./icons/LinkedInIcon";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 hover:bg-accent/50 font-mono border border-accent px-1 py-0.5 rounded-sm text-primary transition-colors",
        className
      )}
      {...props}
    />
  );
};

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[2] flex flex-col gap-2">
        <h2 className="font-caption text-5xl text-primary font-bold">
          Pierre Peinado
        </h2>
        <h3 className="text-3xl font-caption">Software developer</h3>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente id
          cumque sint reiciendis odit aperiam impedit fugiat, sit et commodi
          iste architecto nostrum labore dolorem. Sit quis modi alias accusamus!
          I love creating content on{" "}
          <Link href="https://www.linkedin.com/in/pierre-peinado-a0626172/">
            <Code className="inline-flex items-center gap-1">
              <LinkedInIcon className="inline" size={16} />
              LinkedIn
            </Code>
          </Link>
          . Living in{" "}
          <Code className="inline-flex items-center gap-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg/110px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg.png"
              alt="France flag"
              style={{ width: 16, height: "auto" }}
            />
            France
          </Code>
        </p>
      </div>
      <div className="flex-1 max-md:m-auto flex justify-end">
        <img
          src="images/pierre.png"
          className="w-full h-auto max-w-40"
          alt="pedraldo's profile picture"
        />
      </div>
    </Section>
  );
};
