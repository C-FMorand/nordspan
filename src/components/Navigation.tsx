import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 p-6">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
          <img 
            src="/lovable-uploads/9ed12069-98c1-47c7-a1e6-97f432279ca8.png" 
            alt="NordSpan" 
            className="h-12 w-auto filter drop-shadow-lg"
          />
        </Link>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-white hover:bg-white/20 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </Button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-warm-accent transition-colors">
            Home
          </Link>
          <Link to="/investeringar" className="text-white hover:text-warm-accent transition-colors">
            Investments
          </Link>
          <Link to="/team" className="text-white hover:text-warm-accent transition-colors">
            Team
          </Link>
          <Button variant="dramatic-outline" size="sm">
            Contact
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm p-6 mt-2 rounded-lg mx-6">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-white hover:text-warm-accent transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/investeringar" 
              className="text-white hover:text-warm-accent transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Investments
            </Link>
            <Link 
              to="/team" 
              className="text-white hover:text-warm-accent transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Team
            </Link>
            <Button variant="dramatic-outline" size="sm" className="mt-4">
              Contact
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};