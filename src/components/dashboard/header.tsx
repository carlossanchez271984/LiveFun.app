import { Button } from '@/components/ui/button';
import { Crown, Gem, PlayCircle, RadioTower } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <RadioTower className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            LiveFun
          </h1>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="outline" className="rounded-full border-blue-400/50 text-blue-300 hover:bg-blue-400/10 hover:text-blue-200">
            <Gem className="mr-2 h-4 w-4" /> 2,450
          </Button>
          <Button variant="outline" className="rounded-full border-yellow-400/50 text-yellow-300 hover:bg-yellow-400/10 hover:text-yellow-200">
            <Crown className="mr-2 h-4 w-4" /> Nivel 65
          </Button>
          <Button className="rounded-full bg-red-600 text-white shadow-lg shadow-red-600/30 hover:bg-red-700 animate-pulse">
            <PlayCircle className="mr-2 h-4 w-4" /> En Vivo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
