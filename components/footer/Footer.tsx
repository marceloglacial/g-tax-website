import Animation from "@/components/animation/Animation";
import Logo from "@/components/logo/Logo";

const Footer = () => {
  return (
    <section id="footer" className="max-w-7xl mx-auto py-8">
      <Animation>
        <footer className="flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
          <a href="#">
            <Logo size="sm" />
          </a>
          <p>
            desenvolvido por{" "}
            <a
              className="text-accent hover:underline"
              href="https://github.com/marceloglacial"
              target="_blank"
            >
              marcelo glacial
            </a>
          </p>
        </footer>
      </Animation>
    </section>
  );
};

export { Footer };
