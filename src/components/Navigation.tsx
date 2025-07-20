import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import dramaticLandscape from "@/assets/dramatic-landscape.jpg";

export const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 p-6">
      <div className="flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          NORDSPAN
        </div>
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
          <Menu />
        </Button>
      </div>
    </nav>
  );
};