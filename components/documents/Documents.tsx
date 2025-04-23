import { ReactNode } from "react";
import { FileInput, FileKey2, FileOutput, FileUser } from "lucide-react";
import Heading from "@/components/ui/heading";
import Animation from "@/components/animation/Animation";

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

const Documents = ({
  badge = "Documentos",
  description = "Guias e outros documentos essenciais para a sua contabilidade. Mantenha suas obrigações em dia com facilidade e segurança.",
  documents = [
    {
      id: "1",
      title: "Income Tax Organizer",
      url: "#",
      icon: <FileInput className="w-6 h-6 lg:w-10 lg:h-10" />,
    },
    {
      id: "2",
      title: "Self-Employed Guide",
      url: "#",
      icon: <FileUser className="w-6 h-6 lg:w-10 lg:h-10" />,
    },
    {
      id: "3",
      title: "Self Employed (Only Rental Property) Guide",
      url: "#",
      icon: <FileKey2 className="w-6 h-6 lg:w-10 lg:h-10" />,
    },
    {
      id: "4",
      title: "T1135 Foreign Income Verification Statement",
      url: "#",
      icon: <FileOutput className="w-6 h-6 lg:w-10 lg:h-10" />,
    },
  ],
}: DocumentsProps) => {
  return (
    <section id="documentos" className="pt-24 lg:pt-48">
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
        <div className="mt-10 lg:mt-20 grid lg:gap-9 lg:grid-cols-2">
          {documents.map((document, index) => (
            <a href={document.url} key={index} download>
              <Animation
                delay={(index + 2) / 3}
                className="flex border-b items-center"
              >
                <div className="text-accent">{document.icon}</div>
                <div className="py-4 pl-4 lg:py-10 lg:pl-8">
                  <h3 className="md:text-4xl">{document.title}</h3>
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
