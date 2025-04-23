import { Animation } from "@/components/animation/Animation";

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
      className="py-20 lg:py-32 lg:h-screen lg:flex lg:items-center"
    >
      <div className="container flex flex-col items-center gap-24 lg:my-0 lg:flex-row">
        <div className="flex flex-col gap-7 lg:w-2/3">
          <Animation delay={0.7} className="absolute top-0 right-0 w-2/3">
            <img src="hero-bg.png" />
          </Animation>
          <Animation isHidden>
            <div className="text-5xl font-semibold text-foreground md:text-5xl lg:text-8xl text-left mx-0">
              <span>{heading}</span>
              <span className="text-accent">{subheading}</span>
            </div>
          </Animation>
          <Animation delay={0.25} isHidden>
            <p className="text-base text-muted-foreground md:text-lg lg:text-xl">
              {description}
            </p>
          </Animation>
        </div>
        <div className="lg:w-1/3  hidden lg:flex">
          <Animation
            delay={0.5}
            className="bg-white/10 backdrop-blur-md rounded-4xl p-2 border border-white/10 shadow-2xl overflow-hidden"
          >
            <img src={image.src} alt={image.alt} className="w-full h-full" />
          </Animation>
        </div>
      </div>
    </section>
  );
};

export { Hero };
