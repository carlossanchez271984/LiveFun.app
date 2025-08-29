'use client';
import {
  Home,
  Compass,
  MessageSquare,
  User,
  Gamepad2,
} from 'lucide-react';
import Header from '@/components/dashboard/header';
import GamesGrid from '@/components/dashboard/games-grid';

export default function DashboardPage() {
  const navItems = [
    { icon: Home, label: 'Fiesta' },
    { icon: Gamepad2, label: 'Juegos', active: true },
    { icon: Compass, label: 'Descubrir' },
    { icon: MessageSquare, label: 'Mensajes' },
    { icon: User, label: 'Yo' },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1 p-4 md:p-6">
        <GamesGrid />
      </main>
      <footer className="sticky bottom-0 z-30 flex h-16 items-center justify-around border-t bg-background/95 backdrop-blur-sm md:hidden">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex flex-col items-center gap-1 text-xs transition-colors ${
                item.active ? 'text-yellow-400' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              <item.icon className={`h-6 w-6 ${item.active ? 'text-yellow-400' : ''}`} />
              {item.label}
            </a>
          ))}
      </footer>
    </div>
  );
}
