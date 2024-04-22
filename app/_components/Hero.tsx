/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Code } from "./Code";
import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start">
      <div className="flex-[3] flex flex-col gap-2">
        <h2 className="font-caption text-5xl text-primary font-bold">Hey 👋</h2>
        {/* <h3 className="text-3xl font-caption">Développeur Web</h3> */}
        <div className="text-base">
          <p>
            <span className="block mb-4">
              Je m'appelle{" "}
              <span className="text-primary font-black">Pierre Peinado</span>
            </span>
            Je suis un développeur web fullstack enthousiaste 🙂 vivant dans la
            belle ville de{" "}
            <Code className="inline-flex items-center gap-1">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg/110px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg.png"
                alt="France flag"
                style={{ width: 16, height: "auto" }}
              />
              Toulouse
            </Code>
            .
          </p>
          <p>
            Je suis actuellement à la recherche d'un nouveau défi professionnel.
            J'aime résoudre des problèmes grâce au{" "}
            <Code className="inline-flex items-center gap-1">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2920/2920244.png"
                alt="Code logo"
                style={{ width: 16, height: "auto" }}
              />
              code
            </Code>{" "}
            au sein d'une équipe solidaire et fun.
          </p>
          <p>
            Construire des applications permettant d'aider notre{" "}
            <Code className="inline-flex items-center gap-1">
              <img
                src="https://png.pngtree.com/png-vector/20221206/ourmid/pngtree-world-earth-logo-vector-design-png-image_6514310.png"
                alt="Earth logo"
                style={{ width: 16, height: "auto" }}
              />
              planète
            </Code>{" "}
            et/ou ses "locataires" serait mon job parfait.
          </p>
        </div>
      </div>
      <div className="flex-[2] max-md:m-auto flex justify-end max-md:mt-8">
        <img
          src="images/pp-rounded.png"
          className="w-full h-auto max-w-52"
          alt="pedraldo's profile picture"
        />
      </div>
    </Section>
  );
};
