import { Building, Phone } from "lucide-react";
import Heading from "@/components/ui/heading";
import Animation from "@/components/animation/Animation";
import { Separator } from "../ui/separator";

const Contact = () => {
  return (
    <section id="contato" className="grid gap-8 lg:gap-0 pt-24 lg:pt-48">
      <Heading
        level={1}
        badge="Contate-nos"
        description="Tem dúvidas ou só quer dar um oi? Estamos aqui para ajudar! Preencha o formulário abaixo e entraremos em contato com você o mais breve possível."
      >
        <span className="text-accent">Fale</span> Conosco
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full mx-auto md:p-20">
        <div className="grid gap-8 lg:gap-0">
          <Animation delay={0.6} className="hidden lg:text-xl">
            Descubra como podemos ajudá-lo a manter sua vida financeira em ordem
            enquanto você aproveita as oportunidades que o Canadá oferece!
          </Animation>
          <Animation delay={0.7} className="flex flex-col gap-2 lg:text-2xl">
            <div className="flex gap-2 items-center">
              <Building className=" text-accent" />
              <span className="font-semibold">Our Team</span>
            </div>
            <div>
              <h3 className="font-bold">Gabriela Asfora</h3>
              <p className="text-sm">Chief Financial Officer</p>
            </div>
          </Animation>
          <Separator />
          <Animation delay={0.8} className="flex flex-col gap-2 lg:text-2xl">
            <div className="flex gap-2 items-center">
              <Phone className=" text-accent" />
              <span className="font-semibold">Telefone</span>
            </div>
            <div>
              <h3 className="font-bold hover:text-accent">
                <a href="tel:+16138895894">(613) 889.5894</a>
              </h3>
            </div>
          </Animation>
          <Separator />
          <Animation delay={0.9} className="flex flex-col gap-2 lg:text-2xl">
            <div className="flex gap-2 items-center">
              <Building className=" text-accent" />
              <span className="font-semibold">E-mail</span>
            </div>
            <div>
              <h3 className="font-bold hover:text-accent">
                <a href="mailto:gtax.ca@hotmail.com">gtax.ca@hotmail.com</a>
              </h3>
            </div>
          </Animation>
        </div>
        <Animation
          delay={0.7}
          className="bg-white/10 backdrop-blur-md rounded-4xl p-2 border border-white/10 shadow-2xl overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d359536.97780813486!2d-76.12988290337805!3d45.25016593749807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x8a6a51e131dd15ed!2sOttawa%2C%20ON!5e0!3m2!1sen!2sca!4v1745372687688!5m2!1sen!2sca"
            width="100%"
            loading="lazy"
            className="rounded-3xl h-72 lg:h-[500px]"
          ></iframe>
        </Animation>
      </div>
    </section>
  );
};

export { Contact };
