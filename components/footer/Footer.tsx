import { Animation } from "../animation/Animation";
import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <section id="footer" className="py-8">
      <Animation className="container">
        <footer className="flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
          <Logo size="sm" />
          <p>
            desenvolvido por{" "}
            <a
              className="text-accent hover:underline"
              href="https://github.com/marceloglacial"
              target="_blank"
            >
              marcelo glacial
            </a>{" "}
            - © {new Date().getFullYear()}
          </p>
        </footer>
      </Animation>
    </section>
  );
};

export { Footer };
