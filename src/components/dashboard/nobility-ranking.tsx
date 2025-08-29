import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Gem, Star, ShieldCheck, Axe } from 'lucide-react';

const NobilityRanking = () => {
  const nobilityTiers = [
     {
      name: 'Vizconde',
      icon: ShieldCheck,
      price: 60,
      refund: 2700,
      renewalPrice: 25,
      renewalRefund: 1125,
      color: 'from-purple-500 to-indigo-600',
      shadow: 'shadow-purple-500/30',
      featured: false,
    },
    {
      name: 'Caballero',
      icon: Star,
      price: 6,
      refund: 270,
      renewalPrice: 2,
      renewalRefund: 100,
      color: 'from-sky-500 to-cyan-600',
      shadow: 'shadow-sky-500/30',
      featured: false,
    },
    {
      name: 'Comandante',
      icon: Axe,
      price: 90,
      refund: 3000,
      renewalPrice: 50,
      renewalRefund: null,
      color: 'from-rose-500 to-red-600',
      shadow: 'shadow-rose-500/30',
      featured: true,
    },
  ];

  return (
    <Card className="bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Shield className="text-primary" />
          Adquirir Nobleza
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nobilityTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-xl p-6 flex flex-col bg-gradient-to-br ${tier.color} text-white shadow-lg ${tier.shadow} border-2 ${tier.featured ? 'border-yellow-300' : 'border-transparent'}`}
            >
              {tier.featured && (
                <div className="absolute top-0 right-4 -mt-3 bg-yellow-300 text-yellow-900 font-bold text-xs py-1 px-3 rounded-full">
                  OFERTA
                </div>
              )}
              <div className="flex items-center gap-4 mb-4">
                 <tier.icon className="h-10 w-10" />
                 <h3 className="text-2xl font-bold">{tier.name}</h3>
              </div>
              
              <div className="mb-6 space-y-3 text-sm">
                  <p className="text-lg font-semibold">USD ${tier.price} <span className="text-base font-normal opacity-80">/ primer mes</span></p>
                  <p className="flex items-center gap-2 bg-white/10 p-2 rounded-md">
                    <Gem className="h-5 w-5 text-cyan-300"/> 
                    <span className="font-bold">Devolución de 💎{tier.refund.toLocaleString()}</span>
                  </p>
                  <p className="opacity-90">Renueva por solo ${tier.renewalPrice}/mes{tier.renewalRefund ? ` y recupera 💎${tier.renewalRefund.toLocaleString()}`: ''}</p>
              </div>

              <Button className="mt-auto w-full bg-white/90 text-primary font-bold hover:bg-white">
                Adquirir {tier.name}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NobilityRanking;
