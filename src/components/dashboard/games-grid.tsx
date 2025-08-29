'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Flame, Search, Gift } from 'lucide-react';
import Image from 'next/image';

const AdIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <path d="M8 12h4m-2-2v4"/>
    <path d="M16 12h-2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h2"/>
  </svg>
)

const GamesGrid = () => {
  const myGames: any[] = [];

  const popularGames: any[] = [];

  const tabs = ['Popular', 'Ludo', 'Dominó', 'Para ti'];

  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-lg">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="text-3xl font-bold">Juegos</CardTitle>
        <div className="flex items-center gap-3 text-foreground/80">
            <Search className="h-6 w-6" />
            <AdIcon className="h-6 w-6" />
            <Gift className="h-6 w-6" />
            <Flame className="h-6 w-6 text-orange-500" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
            <div className="flex items-center gap-2">
                {tabs.map((tab, index) => (
                    <Button key={tab} variant={index === 0 ? 'default': 'secondary'} className={`rounded-full ${index === 0 ? 'bg-yellow-400 text-black hover:bg-yellow-500' : 'bg-muted text-foreground'}`}>
                        {tab}
                    </Button>
                ))}
            </div>
        </div>

        {myGames.length > 0 && (
          <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Mis Juegos</h3>
              <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6">
                  {myGames.map(game => (
                      <div key={game.name} className="flex-shrink-0 w-32 group cursor-pointer">
                          <div className="overflow-hidden rounded-xl mb-2">
                              <Image src={game.image} alt={game.name} width={300} height={400} className="w-full h-auto object-cover transition-transform group-hover:scale-105" data-ai-hint={game.dataAiHint} />
                          </div>
                          <p className="text-sm font-medium truncate">{game.name}</p>
                      </div>
                  ))}
              </div>
          </div>
        )}

        {popularGames.length > 0 && (
          <div>
              <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold">Juegos Populares</h3>
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {popularGames.map((game) => (
                  <div
                    key={game.name}
                    className="group cursor-pointer"
                  >
                      <div className="overflow-hidden rounded-xl mb-2 shadow-lg">
                          <Image src={game.image} alt={game.name} width={300} height={400} className="w-full h-auto object-cover transition-transform group-hover:scale-105" data-ai-hint={game.dataAiHint} />
                      </div>
                      <p className="font-bold">{game.name}</p>
                      <p className="text-xs text-muted-foreground">{game.players} JUGAR</p>
                  </div>
                ))}
              </div>
          </div>
        )}
      </CardContent>
    </div>
  );
};

export default GamesGrid;
