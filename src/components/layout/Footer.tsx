import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-64 pb-12 overflow-hidden">

      <div className="absolute inset-0 bg-size-[64px_64px] bg-[repeating-linear-gradient(45deg,#4FFFB020_0,#4FFFB020_2px,transparent_0,transparent_50%),repeating-linear-gradient(-45deg,#4FFFB020_0,#4FFFB020_2px,transparent_0,transparent_50%)] blur-[1px] mask-[linear-gradient(to_bottom,transparent,black_50%,black_50%)]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold text-white">
              Noufal <span className="text-primary">Rahman</span>
            </span>
            <p className="text-sm text-text-muted">
              Building digital experiences with code and creativity.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/iamnoufal"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full bg-white/5 p-2 transition-colors hover:bg-white/10"
            >
              <Github className="h-5 w-5 text-text-muted transition-colors group-hover:text-white" />
            </a>
            <a
              href="https://instagram.com/_iam_noufal"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full bg-white/5 p-2 transition-colors hover:bg-white/10"
            >
              <Instagram className="h-5 w-5 text-text-muted transition-colors group-hover:text-pink-600" />
            </a>
            <a
              href="https://linkedin.com/in/iamnoufal"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full bg-white/5 p-2 transition-colors hover:bg-white/10"
            >
              <Linkedin className="h-5 w-5 text-text-muted transition-colors group-hover:text-blue-600" />
            </a>
            <a
              href="mailto:iam@noufal.dev"
              className="group rounded-full bg-white/5 p-2 transition-colors hover:bg-white/10"
            >
              <Mail className="h-5 w-5 text-text-muted transition-colors group-hover:text-secondary" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center text-sm text-text-muted md:text-left">
          <p>&copy; {currentYear} Noufal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
