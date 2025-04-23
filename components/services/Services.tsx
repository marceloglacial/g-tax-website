import Heading from "@/components/ui/heading";
import { Animation } from "../animation/Animation";

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
  };
}

const Services = ({
  badge = "Nossos Serviços",
  heading,
  description = "Sabemos o quanto é importante garantir que suas obrigações fiscais estejam em dia, e é por isso que estamos aqui para simplificar esse processo para você. Se você é residente no Canadá e precisa de ajuda para lidar com questões fiscais, nossa equipe está pronta para oferecer o suporte necessário, com atendimento dedicado e eficiente.",
  features = {
    feature1: {
      title: "Imposto de renda pessoa física",
      description:
        "Assessoria para declaração no Canadá, com precisão e conformidade.",
      image: "imposto.png",
    },
    feature2: {
      title: "Abertura de Empresa",
      description:
        "Suporte completo para abrir sua empresa no Canadá, de forma segura e eficiente.",
      image: "abertura.png",
    },
    feature3: {
      title: "Serviços Contábeis",
      description:
        "Serviços contábeis confiáveis e precisos para você ou sua empresa no Canadá.",
      image: "servicos.png",
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
        Maximize seus <span className="text-accent">retornos</span>, minimize
        seu estresse.
      </Heading>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="grid gap-8">
          <Animation
            delay={0.5}
            className="bg-foreground rounded-4xl shadow-md p-6 grid sm:grid-cols-2 gap-6"
          >
            <div>
              <h3 className="text-secondary text-3xl font-semibold">
                {features.feature1.title}
              </h3>
              <p className="text-muted-foreground mt-4 text-lg">
                {features.feature1.description}
              </p>
            </div>
            <div>
              <img
                src={features.feature1.image}
                alt={features.feature1.title}
                className="rounded-3xl object-cover h-full w-full"
              />
            </div>
          </Animation>
          <Animation
            delay={0.5}
            className="bg-foreground rounded-4xl shadow-md p-6 grid sm:grid-cols-2 gap-6"
          >
            <div>
              <img
                src={features.feature2.image}
                alt={features.feature2.title}
                className="rounded-3xl object-cover h-full w-full"
              />
            </div>
            <div>
              <h3 className="text-secondary text-3xl font-semibold">
                {features.feature2.title}
              </h3>
              <p className="text-muted-foreground mt-4 text-lg">
                {features.feature2.description}
              </p>
            </div>
          </Animation>
        </div>
        <Animation
          delay={0.7}
          className="h-full bg-foreground rounded-3xl shadow-md p-6 flex flex-col gap-6"
        >
          <div>
            <img
              src={features.feature3.image}
              alt={features.feature3.title}
              className=" rounded-3xl object-cover w-full h-[400px]"
            />
          </div>
          <div className="flex gap-4">
            <h3 className="text-secondary text-3xl font-semibold sm:w-1/2">
              {features.feature3.title}
            </h3>
            <p className="text-muted-foreground text-lg sm:w-1/2">
              {features.feature3.description}
            </p>
          </div>
        </Animation>
      </div>
    </section>
  );
};

export { Services };
