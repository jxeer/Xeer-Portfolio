export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/10 py-8" role="contentinfo">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm" data-testid="text-copyright">
            © {currentYear} Julian Xeer. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors text-sm"
              data-testid="link-footer-about"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors text-sm"
              data-testid="link-footer-projects"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors text-sm"
              data-testid="link-footer-contact"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
