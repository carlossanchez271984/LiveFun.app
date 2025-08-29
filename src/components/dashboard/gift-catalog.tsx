'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Crown, Rocket, Gem, Flame, Car, Castle, HandHeart, Bomb } from 'lucide-react';

const SquirtGunIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14 3h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4.5M9.5 11l-3 3M11 9l-3 3M14 8V5M14 5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4a4 4 0 0 0-4-4h-2M4 14h6"/></svg>
)

const RingsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.77-.77-.77a5.4 5.4 0 0 0-7.65 0C2.46 6.47 2 8.68 2 11s.46 4.53 2.13 6.42a5.4 5.4 0 0 0 7.65 0l.77-.77.77.77a5.4 5.4 0 0 0 7.65 0c1.67-1.89 2.13-4.1 2.13-6.42s-.46-4.53-2.13-6.42Z"/></svg>
);

const ScepterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.2 12.8-5.6-5.6a2 2 0 0 0-2.8 0L3.2 16.8a2 2 0 0 0 0 2.8l5.6 5.6a2 2 0 0 0 2.8 0l9.6-9.6a2 2 0 0 0 0-2.8Z"/><path d="M10 16.5 7.5 19"/><path d="m14 6-1-1"/><path d="m17 9-1-1"/><path d="m8 13-1-1"/><path d="M11 10 9.5 8.5"/><path d="m15 14-1-1"/><path d="m18 11-1-1"/></svg>
);

const FlowerCrownIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 13.77c0-3.15 2.17-5.91 5.12-6.55A3.48 3.48 0 0 1 8 3.5c1.93 0 3.5 1.57 3.5 3.5 0 .58-.14 1.13-.39 1.61a.4.4 0 0 0 .39.59h2c.22 0 .4.18.4.4v.1c0 1.3-1.03 2.4-2.3 2.5a3.3 3.3 0 0 1-3.2-2.5.4.4 0 0 0-.4-.4h-1a.5.5 0 0 0-.5.5c0 2.83 2.17 5.18 4.98 5.44a3.5 3.5 0 0 1 3.52 3.06c.26 1.7-1.02 3.25-2.73 3.5A6.5 6.5 0 0 1 2 13.77Z"/><path d="M12.5 9.17c.52.27 1.14.4 1.8.4 2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4c0 .66.13 1.28.4 1.8"/><path d="M12.5 9.17A4.01 4.01 0 0 0 14.3 15a4 4 0 1 1-5.6-5.6"/></svg>
)

const VipMountIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 13.25a2.5 2.5 0 1 1-5 0"/><path d="M12 2a6.5 6.5 0 0 0-6.23 8.9A5.5 5.5 0 0 0 9 19.33V22h6v-2.67a5.5 5.5 0 0 0 3.23-10.43A6.5 6.5 0 0 0 12 2Z"/><path d="M6 12h.01"/><path d="M18 12h.01"/><path d="M10 16h4"/></svg>
)

const VipNightIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7.5 7.5 0 0 1 7.5 7.5c0 2.06-1.68 4.38-7.5 8.5-5.82-4.12-7.5-6.44-7.5-8.5A7.5 7.5 0 0 1 12 2Z"/><path d="M12 14v8"/><path d="M16 22h-8"/></svg>
)

const GuardianAngelIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20h-4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2Z"/><path d="M12 6V4"/><path d="M12 4a2 2 0 1 0-4 0"/><path d="M12 4a2 2 0 1 1 4 0"/><path d="M10 20v2"/><path d="M14 20v2"/><path d="m4.2 11.5-.9 2.3"/><path d="M3.3 13.8 2 16.1"/><path d="m19.8 11.5.9 2.3"/><path d="m20.7 13.8 1.3 2.3"/></svg>
)

const GiftCatalog = () => {
  const gifts = [
    { name: 'Rosa', price: 1, icon: Heart, color: 'text-red-400', bg: 'bg-red-400/10' },
    { name: 'Anillos de Diamantes', price: 10, icon: RingsIcon, color: 'text-cyan-300', bg: 'bg-cyan-300/10', effect: 'pulse-subtle' },
    { name: 'Bomba', price: 1, icon: Bomb, color: 'text-gray-400', bg: 'bg-gray-400/10' },
    { name: 'Corona', price: 500, icon: Crown, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
    { name: 'Pistola', price: 600, icon: SquirtGunIcon, color: 'text-orange-400', bg: 'bg-orange-400/10' },
    { name: 'Montura VIP', price: 799, icon: VipMountIcon, color: 'text-indigo-400', bg: 'bg-indigo-400/10', effect: 'pulse-subtle' },
    { name: 'Cetro del Rey', price: 999, icon: ScepterIcon, color: 'text-amber-400', bg: 'bg-amber-400/10', effect: 'pulse-subtle' },
    { name: 'Cohete', price: 1200, icon: Rocket, color: 'text-sky-400', bg: 'bg-sky-400/10' },
    { name: 'Pedida de Mano', price: 1999, icon: HandHeart, color: 'text-pink-400', bg: 'bg-pink-400/10', effect: 'pulse-subtle' },
    { name: 'Corona de Flores', price: 1999, icon: FlowerCrownIcon, color: 'text-rose-400', bg: 'bg-rose-400/10', effect: 'pulse-subtle' },
    { name: 'Dragón', price: 2000, icon: Flame, color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { name: 'Fénix', price: 2999, icon: Flame, color: 'text-orange-500', bg: 'bg-orange-500/10', effect: 'pulse-subtle' },
    { name: 'Ángel Guardián', price: 2999, icon: GuardianAngelIcon, color: 'text-yellow-200', bg: 'bg-yellow-200/10', effect: 'pulse-subtle' },
    { name: 'Diamante', price: 5000, icon: Gem, color: 'text-blue-400', bg: 'bg-blue-400/10', effect: 'pulse-subtle' },
    { name: 'Noche VIP', price: 9999, icon: VipNightIcon, color: 'text-purple-400', bg: 'bg-purple-400/10', effect: 'pulse-subtle' },
    { name: 'Deportivo', price: 10000, icon: Car, color: 'text-lime-400', bg: 'bg-lime-400/10', effect: 'pulse-subtle' },
    { name: 'Castillo', price: 25000, icon: Castle, color: 'text-fuchsia-400', bg: 'bg-fuchsia-400/10', effect: 'pulse-subtle' },
  ];

  return (
    <Card className="bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Caja de Regalos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 gap-4">
          {gifts.map((gift) => (
            <div
              key={gift.name}
              className={`group relative flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg p-4 aspect-square transition-all hover:scale-105 hover:-translate-y-1 ${gift.bg} ${gift.effect ? `animate-${gift.effect}` : ''}`}
            >
              <gift.icon className={`h-10 w-10 ${gift.color} transition-transform group-hover:scale-110`} />
              <span className="text-sm font-medium text-foreground text-center">{gift.name}</span>
              <Badge variant="secondary" className="absolute bottom-2 right-2 flex items-center gap-1 bg-black/30 text-white border-0">
                <Gem className="h-3 w-3 text-blue-300" />
                {gift.price}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GiftCatalog;
