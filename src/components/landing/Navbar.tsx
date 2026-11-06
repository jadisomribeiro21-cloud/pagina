import React from 'react';
import { Music, Clock } from 'lucide-react';

interface NavbarProps {
  onOpenCheckout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout }) => {
  // Format current date in Portuguese: DD/MM/YYYY
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <>
      {/* Top Urgency / Notification Announcement Ribbon */}
      <div className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-stone-950 font-black text-xs sm:text-sm py-2 px-4 text-center tracking-wide border-b border-amber-500/30 flex items-center justify-center gap-2">
        <Clock className="w-4 h-4 text-stone-950 animate-pulse" />
        <span>CONDIÇÃO ESPECIAL — {formattedDate}</span>
        <span className="hidden md:inline bg-stone-950 text-amber-300 text-[11px] font-black uppercase px-2 py-0.5 rounded-full ml-1">
          A partir de R$ 19,90
        </span>
      </div>

      <header className="sticky top-0 z-40 w-full bg-[#0d162d]/95 backdrop-blur-md border-b border-indigo-900/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
          {/* Zone 1: Brand Wordmark */}
          <a 
            href="#top" 
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 group"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 text-stone-950 font-black shadow-md shadow-amber-400/25 group-hover:scale-105 transition-transform">
              <Music className="w-5 h-5 text-stone-950" />
            </span>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-white text-base leading-tight">Atividades Musicais</span>
              <span className="text-[11px] font-semibold text-amber-400 tracking-wider uppercase">+500 Atividades Infantis</span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#amostra" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Ver Atividades
            </a>
            <a href="#conteudo" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              O Que Você Encontra
            </a>
            <a href="#comparativo" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Sem vs Com Material
            </a>
            <a href="#bonus" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              3 Bônus Especiais
            </a>
            <a href="#depoimentos" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Depoimentos
            </a>
            <a href="#oferta" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 font-bold text-amber-400">
              Planos & Preços
            </a>
            <a href="#faq" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Dúvidas
            </a>
          </nav>

          {/* Zone 3: Primary Action CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#oferta"
              className="px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md shadow-amber-400/20 hover:shadow-amber-400/35 transition-all cursor-pointer whitespace-nowrap shrink-0 active:scale-95"
            >
              Escolher Plano (R$ 19,90)
            </a>
          </div>
        </div>
      </header>
    </>
  );
};