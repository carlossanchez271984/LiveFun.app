import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const VipSystem = () => {
  const vipLevel = 65;
  const progress = 65;

  const levels = [
    { level: 1, label: 'Nivel 1' },
    { level: 25, label: 'Nivel 25' },
    { level: 50, label: 'Nivel 50' },
    { level: 75, label: 'Nivel 75' },
    { level: 100, label: 'Nivel 100' },
  ];

  return (
    <Card className="bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Sistema VIP (Nivel {vipLevel}/100)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-2">
            <Progress value={progress} className="h-3 [&>div]:bg-gradient-to-r [&>div]:from-yellow-400 [&>div]:to-orange-500" />
        </div>
        <div className="flex justify-between text-xs text-muted-foreground">
          {levels.map((item, index) => (
            <div key={index} className={`flex flex-col items-center ${vipLevel >= item.level ? 'text-yellow-400 font-bold' : ''}`}>
              <span>{item.label}</span>
              <div className="h-2 w-px bg-border my-1"></div>
            </div>
          ))}
        </div>
        <p className="text-sm text-center mt-4 text-muted-foreground">
          Sigue participando para alcanzar el siguiente nivel y desbloquear recompensas exclusivas.
        </p>
      </CardContent>
    </Card>
  );
};

export default VipSystem;
