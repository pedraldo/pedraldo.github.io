import { Badge } from "@/components/ui/badge";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";

export const Contact = () => {
  return (
    <Section className="flex flex-col gap-4 items-start">
      <Badge variant="outline">Contact me</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I will be happy to discuss with you.
      </h2>
      <div className="flex-1 flex justify-start items-center gap-2 w-full max-md:flex-col max-md:items-start">
        <ContactCard
          className="flex-1 max-md:w-64"
          name="LinkedIn"
          image="images/pierre.png"
          mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
          description="Pierre Peinado"
          url="https://www.linkedin.com/in/pierre-peinado-a0626172/"
        />
        <ContactCard
          className="flex-1 max-md:w-64 min-w-64"
          name="Email"
          image="images/pierre.png"
          mediumImage="https://upload.wikimedia.org/wikipedia/fr/a/a7/Mail_%28Apple%29_logo.png"
          description="ppeinadop@gmail.com"
          url="mailto:ppeinadop@gmail.com"
        />
        <ContactCard
          className="flex-1 max-md:w-64"
          name="Phone"
          image="images/pierre.png"
          mediumImage="images/phone.png"
          description="+33 6 62 88 10 24"
        />
      </div>
    </Section>
  );
};
