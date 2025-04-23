import Heading from "@/components/ui/heading";
import { FileInput, FileKey2, FileOutput, FileUser } from "lucide-react";
import { ReactNode } from "react";
import { Animation } from "../animation/Animation";

interface Document {
  id: string;
  title: string;
  url: string;
  icon: ReactNode;
}

interface DocumentsProps {
  heading?: string;
  documents?: Document[];
  badge?: string;
  description?: string;
}

const IconSize: number = 56;

const Documents = ({
  badge = "Documentos",
  description = "Guias e outros documentos essenciais para a sua contabilidade. Mantenha suas obrigações em dia com facilidade e segurança.",
  documents = [
    {
      id: "1",
      title: "Income Tax Organizer",
      url: "#",
      icon: <FileInput size={IconSize} />,
    },
    {
      id: "2",
      title: "Self-Employed Guide",
      url: "#",
      icon: <FileUser size={IconSize} />,
    },
    {
      id: "3",
      title: "Self Employed (Only Rental Property) Guide",
      url: "#",
      icon: <FileKey2 size={IconSize} />,
    },
    {
      id: "4",
      title: "T1135 Foreign Income Verification Statement",
      url: "#",
      icon: <FileOutput size={IconSize} />,
    },
  ],
}: DocumentsProps) => {
  return (
    <section id="documentos" className="py-20 lg:py-32">
      <Heading
        level={1}
        className="max-w-2xl text-center"
        badge={badge}
        description={description}
      >
        Baixe Seus <span className="text-accent">Documentos</span> Fiscais e
        Contábeis
      </Heading>
      <div className="container max-w-7xl">
        <div className="mt-20 grid gap-9 lg:grid-cols-2">
          {documents.map((document, index) => (
            <a href={document.url} key={index} download>
              <Animation
                delay={(index + 2) / 3}
                className="flex border-b items-center"
              >
                <div className="text-accent">{document.icon}</div>
                <div className="flex flex-col justify-between gap-14 py-6 pl-4 md:py-10 md:pl-8 lg:justify-normal">
                  <h3 className="text-2xl md:text-4xl">{document.title}</h3>
                </div>
              </Animation>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Documents };
