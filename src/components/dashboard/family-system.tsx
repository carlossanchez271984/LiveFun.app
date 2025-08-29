import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users, Building, BarChart3, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FamilySystem = () => {
  const members = [
    { name: 'Ana', avatar: 'https://i.pravatar.cc/150?u=ana' },
    { name: 'Carlos', avatar: 'https://i.pravatar.cc/150?u=carlos' },
    { name: 'Sofia', avatar: 'https://i.pravatar.cc/150?u=sofia' },
    { name: 'Luis', avatar: 'https://i.pravatar.cc/150?u=luis' },
    { name: 'Maria', avatar: 'https://i.pravatar.cc/150?u=maria' },
  ];

  return (
    <Card className="bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Sistema de Familias</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 mb-6">
            <Button variant="outline" className="w-full">
                <Building className="mr-2 h-5 w-5"/>
                Plaza Familiar
            </Button>
            <Button variant="outline" className="w-full">
                <BarChart3 className="mr-2 h-5 w-5" />
                Clasificación Familiar
            </Button>
        </div>

        <div className="rounded-lg bg-muted/50 p-6">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className='flex items-center gap-4'>
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-600 text-primary-foreground">
                  <Users className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Familia Dragons</h4>
                  <p className="text-muted-foreground">Nivel 12</p>
                </div>
            </div>
            <Button>
                <Plus className="mr-2 h-5 w-5" />
                Crear una familia
            </Button>
          </div>
          <h5 className="font-semibold mb-4">Miembros</h5>
          <div className="flex flex-wrap gap-4">
            {members.map((member, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <Avatar className="h-12 w-12 border-2 border-purple-500">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <span className="text-xs text-muted-foreground">{member.name}</span>
              </div>
            ))}
            <div className="flex flex-col items-center gap-2">
                <button className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-muted-foreground text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                    <Users className="h-5 w-5" />
                </button>
                 <span className="text-xs text-muted-foreground">Invitar</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FamilySystem;
