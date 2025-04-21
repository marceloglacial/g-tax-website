import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Heading from "@/components/ui/heading";
import {
  ArrowRight,
  Award,
  Building2,
  HeartHandshake,
  Leaf,
  Lightbulb,
  Trophy,
} from "lucide-react";
import React from "react";

interface DocumentsProps {
  badge?: string;
  heading?: string;
  description?: string;
  items?: {
    icon: React.ReactNode;
    title: string;
    category: string;
    description: string;
    link: string;
  }[];
}

const Documents = ({
  badge = "Nossos Serviços",
  heading = "A Collection of Components Built With Shadcn & Tailwind",
  description = "Sabemos o quanto é importante garantir que suas obrigações fiscais estejam em dia, e é por isso que estamos aqui para simplificar esse processo para você. Se você é residente no Canadá e precisa de ajuda para lidar com questões fiscais, nossa equipe está pronta para oferecer o suporte necessário, com atendimento dedicado e eficiente.",
  items = [
    {
      icon: <Trophy />,
      title: "Industry Recognition",
      category: "Achievement",
      description: "Outstanding Performance Award.",
      link: "#",
    },
    {
      icon: <Award />,
      title: "Excellence Award",
      category: "Recognition",
      description: "Best in Category Winner.",
      link: "#",
    },
    {
      icon: <Lightbulb />,
      title: "Innovation Prize",
      category: "Technology",
      description: "Breakthrough Solution of the Year.",
      link: "#",
    },
    {
      icon: <HeartHandshake />,
      title: "Customer Success",
      category: "Service",
      description: "Top-Rated Solution Provider.",
      link: "#",
    },
    {
      icon: <Building2 />,
      title: "Global Leadership",
      category: "Management",
      description: "Executive Team of the Year.",
      link: "#",
    },
    {
      icon: <Leaf />,
      title: "Sustainability Impact",
      category: "Environmental",
      description: "Green Initiative Excellence.",
      link: "#",
    },
  ],
}: DocumentsProps) => {
  return (
    <section className="py-32 grid gap-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline">{badge}</Badge>
          <Heading level={1} className="max-w-2xl text-center">
            {heading}
          </Heading>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
      <div>
        <Separator />
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <div className="grid items-center gap-4 px-4 py-5 md:grid-cols-4">
              <div className="order-2 flex items-center gap-2 md:order-none">
                <span className="flex h-14 w-16 shrink-0 items-center justify-center rounded-md bg-muted">
                  {item.icon}
                </span>
                <div className="flex flex-col gap-1">
                  <Heading level={3}>{item.title}</Heading>
                  <p className="text-sm text-muted-foreground">
                    {item.category}
                  </p>
                </div>
              </div>
              <p className="order-1 text-2xl font-semibold md:order-none md:col-span-2">
                {item.description}
              </p>
              <Button variant="outline" asChild>
                <a
                  className="order-3 ml-auto w-fit gap-2 md:order-none"
                  href={item.link}
                >
                  <span>View project</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <Separator />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export { Documents };
