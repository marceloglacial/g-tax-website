import { Badge } from "@/components/ui/badge";
import Heading from "@/components/ui/heading";

interface ServicesProps {
  badge?: string;
  heading?: string;
  description?: string;
  features?: {
    feature1: {
      title: string;
      description: string;
      image: string;
    };
    feature2: {
      title: string;
      description: string;
      image: string;
    };
    feature3: {
      title: string;
      description: string;
      image: string;
    };
    feature4: {
      title: string;
      description: string;
      image: string;
    };
  };
}

const Services = ({
  badge = "Nossos Serviços",
  heading = "A Collection of Components Built With Shadcn & Tailwind",
  description = "Sabemos o quanto é importante garantir que suas obrigações fiscais estejam em dia, e é por isso que estamos aqui para simplificar esse processo para você. Se você é residente no Canadá e precisa de ajuda para lidar com questões fiscais, nossa equipe está pronta para oferecer o suporte necessário, com atendimento dedicado e eficiente.",
  features = {
    feature1: {
      title: "UI/UX Design",
      description:
        "Creating intuitive user experiences with modern interface design principles and user-centered methodologies.",
      image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
    },
    feature2: {
      title: "Responsive Development",
      description:
        "Building websites that look and function perfectly across all devices and screen sizes.",
      image: "https://shadcnblocks.com/images/block/placeholder-2.svg",
    },
    feature3: {
      title: "Brand Integration",
      description:
        "Seamlessly incorporating your brand identity into every aspect of your website's design.",
      image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
    },
    feature4: {
      title: "Performance Optimization",
      description:
        "Ensuring fast loading times and smooth performance through optimized code and assets.",
      image: "https://shadcnblocks.com/images/block/placeholder-2.svg",
    },
  },
}: ServicesProps) => {
  return (
    <section id="servicos" className="py-32 grid gap-16">
      <Heading
        level={1}
        className="max-w-2xl text-center"
        badge={badge}
        description={description}
      >
        {heading}
      </Heading>
      <div className="relative flex justify-center">
        <div className="border-muted2 relative flex w-full flex-col border md:w-1/2 lg:w-full">
          <div className="relative flex flex-col lg:flex-row">
            <div className="border-muted2 flex flex-col justify-between border-b border-solid p-10 lg:w-3/5 lg:border-r lg:border-b-0">
              <Heading level={3}>{features.feature1.title}</Heading>
              <p className="text-muted-foreground">
                {features.feature1.description}
              </p>
              <img
                src={features.feature1.image}
                alt={features.feature1.title}
                className="mt-8 aspect-[1.5] h-full w-full object-cover lg:aspect-[2.4]"
              />
            </div>
            <div className="flex flex-col justify-between p-10 lg:w-2/5">
              <Heading level={3}>{features.feature2.title}</Heading>
              <p className="text-muted-foreground">
                {features.feature2.description}
              </p>
              <img
                src={features.feature2.image}
                alt={features.feature2.title}
                className="mt-8 aspect-[1.45] h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="border-muted2 relative flex flex-col border-t border-solid lg:flex-row">
            <div className="border-muted2 flex flex-col justify-between border-b border-solid p-10 lg:w-2/5 lg:border-r lg:border-b-0">
              <Heading level={3}>{features.feature3.title}</Heading>
              <p className="text-muted-foreground">
                {features.feature3.description}
              </p>
              <img
                src={features.feature3.image}
                alt={features.feature3.title}
                className="mt-8 aspect-[1.45] h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between p-10 lg:w-3/5">
              <Heading level={3}>{features.feature4.title}</Heading>
              <p className="text-muted-foreground">
                {features.feature4.description}
              </p>
              <img
                src={features.feature4.image}
                alt={features.feature4.title}
                className="mt-8 aspect-[1.5] h-full w-full object-cover lg:aspect-[2.4]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Services };
