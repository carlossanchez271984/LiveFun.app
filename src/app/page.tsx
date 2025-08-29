'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Lock, Eye } from 'lucide-react';
import Link from 'next/link';

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10z" />
    <path d="M12 22v-4" />
    <path d="M12 2v4" />
    <path d="M22 12h-4" />
    <path d="M2 12h4" />
    <path d="M19.07 4.93l-2.83 2.83" />
    <path d="M4.93 19.07l2.83-2.83" />
    <path d="M19.07 19.07l-2.83-2.83" />
    <path d="M4.93 4.93l2.83 2.83" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);


const LiveFunLogo = () => (
    <div className="relative inline-block">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center">
            <div className="w-8 h-12 rounded-lg border-2 border-white flex items-end justify-center pb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            </div>
        </div>
    </div>
)


export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-gray-900 p-4 text-white">
      <div className="w-full max-w-sm rounded-2xl bg-gray-800/50 p-8 shadow-2xl backdrop-blur-lg border border-white/10">
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <LiveFunLogo />
          </div>
          <h1 className="text-3xl font-bold text-white">
            LiveFun
          </h1>
          <p className="text-gray-400">Transmisiones en vivo y diversión</p>
        </div>

        <div className="space-y-4">
            <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input placeholder="Correo electrónico" type="email" className="pl-10 bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:ring-pink-500 focus:border-pink-500" />
            </div>
            <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input placeholder="Contraseña" type="password" className="pl-10 bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:ring-pink-500 focus:border-pink-500" />
                <Eye className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 cursor-pointer" />
            </div>
          <Link href="/dashboard" passHref>
             <Button
                variant="default"
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white h-12 text-base"
              >
                Iniciar Sesión
              </Button>
          </Link>
        </div>
        
        <div className="my-6 flex items-center">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="mx-4 text-gray-400 text-sm">O continúa con</span>
            <div className="flex-grow border-t border-gray-600"></div>
        </div>

        <div className="flex justify-center gap-6">
          <Link href="/dashboard" passHref>
              <Button
                variant="link"
                className="text-gray-300 hover:text-white"
              >
                <GoogleIcon className="mr-2 h-5 w-5" />
                Google
              </Button>
          </Link>
          <Link href="/dashboard" passHref>
              <Button
                variant="link"
                className="text-gray-300 hover:text-white"
              >
                <FacebookIcon className="mr-2 h-5 w-5" />
                Facebook
              </Button>
          </Link>
        </div>

        <p className="mt-8 text-center text-sm text-gray-400">
          ¿No tienes cuenta?{' '}
          <Link href="#" className="font-semibold text-pink-400 hover:text-pink-300">
             Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}
