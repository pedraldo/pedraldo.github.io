/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { Badge } from "@/components/ui/badge";
import { Code } from "./Code";
import { Section } from "./Section";
import { AngularLogo } from "./icons/AngularLogo";
import { NextJsLogo } from "./icons/NextJsLogo";
import { NodeJsLogo } from "./icons/NodeJsLogo";

export const Skills = () => {
  return (
    <Section className="flex flex-col gap-4 items-start">
      <Badge variant="outline">Mes compétences</Badge>
      {/* https://ui.shadcn.com/docs/components/typography#h2 */}
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        J'adore travailler avec ...
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
            Mon principal framework est <Code>Angular</Code>. J'aime aussi
            utiliser{" "}
            <Code className="inline-flex items-center gap-1">
              {" "}
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                alt="React logo"
                style={{ width: 16, height: "auto" }}
              />
              React
            </Code>{" "}
            et{" "}
            <Code className="inline-flex items-center gap-1">
              {" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/9/95/20170919082556%21Vue.js_Logo_2.svg/120px-Vue.js_Logo_2.svg.png"
                alt="Vue.JS logo"
                style={{ width: 16, height: "auto" }}
              />
              VueJS
            </Code>
            .
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
            Côté backend, j'utilise <Code>NodeJS</Code> avec notamment le
            framework{" "}
            <Code className="inline-flex items-center gap-1">
              {" "}
              <img
                src="https://static-00.iconduck.com/assets.00/nestjs-icon-512x510-9nvpcyc3.png"
                alt="NestJS logo"
                style={{ width: 16, height: "auto" }}
              />
              NestJS
            </Code>
            .
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
            Je suis actuellement en train de découvrir et me perfectionner sur{" "}
            <Code>NextJS</Code> en l'utilisant sur la partie backend et
            frontend.
          </p>
        </div>
      </div>
    </Section>
  );
};
