/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Code } from "./Code";
import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start">
      <div className="flex-[3] flex flex-col gap-2">
        <h2 className="font-caption text-5xl text-primary font-bold">
          Pierre Peinado
        </h2>
        <h3 className="text-3xl font-caption">Software developer</h3>
        <p className="text-base">
          I'm a fullstack enthusiastic web developer living in{" "}
          <Code className="inline-flex items-center gap-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg/110px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg.png"
              alt="France flag"
              style={{ width: 16, height: "auto" }}
            />
            Toulouse
          </Code>
          . I'm currently looking for a new project, a new team to code with. I
          like solving problems with{" "}
          <Code className="inline-flex items-center gap-1">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2920/2920244.png"
              alt="Code logo"
              style={{ width: 16, height: "auto" }}
            />
            code
          </Code>{" "}
          inside a team where everyone helps each other. Building apps allowing
          our{" "}
          <Code className="inline-flex items-center gap-1">
            <img
              src="https://png.pngtree.com/png-vector/20221206/ourmid/pngtree-world-earth-logo-vector-design-png-image_6514310.png"
              alt="Earth logo"
              style={{ width: 16, height: "auto" }}
            />
            planet
          </Code>{" "}
          and/or its residents to get better is my dream work.
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto flex justify-end">
        <img
          src="images/pierre.png"
          className="w-full h-auto max-w-40"
          alt="pedraldo's profile picture"
        />
      </div>
    </Section>
  );
};
