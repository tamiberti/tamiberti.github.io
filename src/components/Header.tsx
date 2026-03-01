import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/40 backdrop-blur-md border-b border-border/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center h-12">
          {/* Simple centered navigation - Alice Abadi style */}
          <nav className="flex space-x-3 md:space-x-12 text-[11px] md:text-base overflow-x-auto whitespace-nowrap">
            <button onClick={() => window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })} className="text-foreground hover:text-foreground/70 transition-colors font-light">
              Início
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-foreground/70 transition-colors font-light">
              Sobre
            </button>
            <button onClick={() => scrollToSection('psicoterapia')} className="text-foreground hover:text-foreground/70 transition-colors font-light">
              Psicoterapia
            </button>
            <button onClick={() => scrollToSection('duvidas')} className="text-foreground hover:text-foreground/70 transition-colors font-light">
              Dúvidas
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-foreground/70 transition-colors font-light">
              Contato
            </button>
          </nav>
        </div>
      </div>
    </header>;
};
export default Header;