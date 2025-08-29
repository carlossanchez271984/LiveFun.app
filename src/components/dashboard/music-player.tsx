'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import {
  generateMusicPlaylist,
  GenerateMusicPlaylistOutput,
} from '@/ai/flows/generate-music-playlist';
import { Music, Play, Pause, SkipForward, Loader2, Lock, Plus, MessageSquare, Mail, Layers, Gift } from 'lucide-react';

const AudioRoom = () => {
    const seats = [
        { id: 1, label: 'Consola', occupied: true, icon: Plus },
        { id: 2, label: 'N.º 2', occupied: false, icon: Lock },
        { id: 3, label: 'N.º 3', occupied: false, icon: Lock },
        { id: 4, label: 'N.º 4', occupied: false, icon: Lock },
        { id: 5, label: 'N.º 5', occupied: false, icon: Lock },
        { id: 6, label: 'N.º 6', occupied: false, icon: Lock },
        { id: 7, label: 'N.º 7', occupied: false, icon: Lock },
        { id: 8, label: 'N.º 8', occupied: false, icon: Lock },
      ];

  return (
    <Card className="bg-card/80 backdrop-blur-sm overflow-hidden">
      <CardHeader>
        <CardTitle className="text-2xl">Sala de Audio</CardTitle>
        <CardDescription>
            RECLUTANDO GENTE FM
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative rounded-lg bg-muted/50 p-4 min-h-[500px] flex flex-col justify-between">
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: "url('https://picsum.photos/seed/audioroom/800/600')" }}
                data-ai-hint="fantasy forest"
            ></div>
            <div className="relative z-10 grid grid-cols-4 gap-4 mb-4">
                {seats.map((seat) => (
                    <div key={seat.id} className="flex flex-col items-center gap-2">
                        <button className={`flex items-center justify-center w-20 h-20 rounded-full border-2 border-dashed transition-colors ${seat.occupied ? 'bg-primary/50 border-primary' : 'border-muted-foreground/50 hover:border-primary'}`}>
                           <seat.icon className={`h-8 w-8 ${seat.occupied ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                        </button>
                        <span className="text-sm font-semibold">{seat.label}</span>
                    </div>
                ))}
            </div>
            
            <div className="relative z-10 space-y-3">
                 <div className="bg-background/70 p-3 rounded-lg border">
                    <p className="font-bold">¡Ya está disponible el evento Día de Suerte y Alegría!</p>
                    <p className="text-sm text-muted-foreground">¡Participa ahora y obtén muchísimas recompensas!</p>
                    <Button size="sm" className="mt-2">Más</Button>
                </div>
                 <div className="bg-yellow-500/20 p-3 rounded-lg border border-yellow-500 text-yellow-200">
                    <p>Comparte tu sala de chat para invitar a más amigos para que se unan</p>
                </div>
                 <div className="bg-background/70 p-3 rounded-lg border">
                    <p className="font-bold">[Paquete de Regalo Diario]</p>
                    <p className="text-sm text-muted-foreground">¡Los paquetes de regalo diarios de súper valor están aquí! ¡Ven a comprarlos ahora!</p>
                    <Button size="sm" variant="outline" className="mt-2">Ver Más</Button>
                </div>
                 <div className="bg-background/70 p-3 rounded-lg border flex justify-between items-center">
                    <div>
                        <p className="font-bold text-amber-400">¡Solo por hoy! Tienes recompensas por reclamar.</p>
                        <p className="text-sm font-bold text-amber-300">EXP x 5</p>
                    </div>
                    <Button size="sm" className="bg-amber-500 hover:bg-amber-600">Reclamar</Button>
                </div>
            </div>

            <div className="relative z-10 mt-4 flex justify-between items-center p-2 bg-background/50 rounded-full">
                <div className="flex gap-2">
                    <Button variant="ghost" size="icon"><MessageSquare/></Button>
                    <Button variant="ghost" size="icon"><Mail/></Button>
                    <Button variant="ghost" size="icon"><Layers/></Button>
                </div>
                <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="relative">
                        <Gift className="text-yellow-400" />
                    </Button>
                </div>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AudioRoom;
