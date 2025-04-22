import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";

interface HeroProps {
  heading?: string;
  subheading?: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
}

const Hero = ({
  heading = "Assessoria e consultoria fiscal",
  subheading = " para brasileiros no Canadá.",
  description = "Nossa missão é oferecer soluções completas e personalizadas para o preenchimento e a entrega de sua declaração de imposto de renda, com foco na segurança, agilidade e total conformidade com as normas fiscais canadenses.",
  image = {
    src: "app.png",
    alt: "Placeholder",
  },
}: HeroProps) => {
  return (
    <section
      id="hero"
      className="py-20 lg:py-32 bg-[url(/hero-bg.png)] bg-bottom lg:bg-right bg-[length:100%_auto] lg:bg-[length:50%_auto] bg-no-repeat"
    >
      <div className="container flex flex-col items-center gap-24 lg:my-0 lg:flex-row">
        <div className="flex flex-col gap-7 lg:w-2/3">
          <div className="text-5xl font-semibold text-foreground md:text-5xl lg:text-8xl text-left mx-0">
            <span>{heading}</span>
            <span className="text-accent">{subheading}</span>
          </div>
          <p className="text-base text-muted-foreground md:text-lg lg:text-xl">
            {description}
          </p>
        </div>
        <div className="relative z-10 flex justify-start lg:w-1/3">
          <div className="bg-white/10 backdrop-blur-md rounded-4xl p-2 border border-white/10 shadow-2xl">
            <img src={image.src} alt={image.alt} width={259} height={509} />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
