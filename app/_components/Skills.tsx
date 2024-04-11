import { Badge } from "@/components/ui/badge";
import { Code } from "./Code";
import { Section } from "./Section";
import { AngularLogo } from "./icons/AngularLogo";
import { NextJsLogo } from "./icons/NextJsLogo";
import { NodeJsLogo } from "./icons/NodeJsLogo";

export const Skills = () => {
  return (
    <Section className="flex flex-col gap-4 items-start">
      <Badge variant="outline">Skills</Badge>
      {/* https://ui.shadcn.com/docs/components/typography#h2 */}
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I love working on ...
      </h2>
      <div className="flex max-md:flex-col gap-4 max-md:gap-8">
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex flex-col max-md:flex-row gap-2">
            <AngularLogo size={42} />

            {/* https://ui.shadcn.com/docs/components/typography#h3 */}
            <h3 className="text-2xl font-semibold tracking-tight max-md:pt-1">
              Angular
            </h3>
          </div>
          <p className="text-sm text-muted-foreground">
            My main framework is <Code>Angular</Code>. I also like using{" "}
            <Code>React</Code> and <Code>VueJS</Code>.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex flex-col max-md:flex-row gap-2">
            <NodeJsLogo size={42} />

            {/* https://ui.shadcn.com/docs/components/typography#h3 */}
            <h3 className="text-2xl font-semibold tracking-tight max-md:pt-1">
              NodeJS
            </h3>
          </div>
          <p className="text-sm text-muted-foreground">
            I like using <Code>NodeJS</Code> for the backend part. I love using{" "}
            <Code>NestJS</Code> framework.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex flex-col max-md:flex-row gap-2">
            <NextJsLogo size={42} />

            {/* https://ui.shadcn.com/docs/components/typography#h3 */}
            <h3 className="text-2xl font-semibold tracking-tight max-md:pt-1">
              NextJS
            </h3>
          </div>
          <p className="text-sm text-muted-foreground">
            I am currently discovering and enjoying <Code>NextJS</Code>{" "}
            framework as backend and frontend.
          </p>
        </div>
      </div>
    </Section>
  );
};
