import React from 'react';
import { Clock, AlarmClock, ArrowRight, Palette, Brain, Ear, Music, Lock } from 'lucide-react';
import { MASTER_PRODUCT_MOCKUP } from '@/data/guideContent';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onOpenCheckout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCheckout }) => (
  <section id="top" className="music-hero relative overflow-hidden pt-10 pb-12 sm:pt-11 sm:pb-16">
    <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
      <div className="music-special inline-flex flex-wrap items-center justify-center gap-2 rounded-full border px-4 py-1.5 text-xs sm:text-sm font-extrabold">
        <Clock className="size-4 shrink-0" />
        <AlarmClock className="music-special-alarm size-4 shrink-0" />
        <span>CONDIÇÃO ESPECIAL — 02/11/2026</span>
        <span aria-hidden="true">·</span>
        <span className="music-special-price rounded-full px-2 py-0.5 text-[10px] sm:text-xs">A PARTIR DE R$ 19,90</span>
      </div>

      <div className="mt-8 mb-5 flex justify-center">
        <div className="music-ready inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm font-extrabold">          <span>+500 ATIVIDADES PRONTAS PARA IMPRIMIR</span>
        </div>
      </div>

      <h1 className="music-headline font-display text-[32px] sm:text-[48px] lg:text-[52px] font-black leading-[1.14] mb-6 text-balance">
        Suas aulas de música podem ser muito mais{' '}
        <span className="music-headline-color">práticas, criativas e divertidas!</span>
      </h1>

      <p className="music-subtitle text-lg sm:text-xl font-bold leading-snug max-w-3xl mx-auto">
        Tenha +500 atividades musicais prontas para imprimir e aplicar com as crianças, sem precisar passar horas procurando ideias ou criando tudo do zero.
      </p>
      <p className="music-support text-sm leading-relaxed max-w-lg mx-auto mt-4">
        Pare de perder horas criando atividades do zero. Escolha uma, imprima e leve para a sala de aula em poucos minutos, mesmo sem saber tocar um instrumento.
      </p>

      <Button onClick={onOpenCheckout} className="music-access group mt-8 h-auto min-h-[68px] w-full sm:w-auto max-w-full whitespace-normal rounded-2xl px-5 sm:px-8 py-4 text-base sm:text-xl font-black gap-3">
        <span>QUERO TER ACESSO ÀS +500 ATIVIDADES</span>
        <ArrowRight className="size-6 shrink-0 transition-transform group-hover:translate-x-1" />
      </Button>

      <div className="music-categories grid grid-cols-2 sm:grid-cols-4 gap-2 mt-8 pt-4 border-t text-xs font-semibold text-left">
        <div className="music-category music-creativity"><Palette className="size-4 shrink-0" /><span>Criatividade</span></div>
        <div className="music-category music-cognition"><Brain className="size-4 shrink-0" /><span>Cognição</span></div>
        <div className="music-category music-hearing"><Ear className="size-4 shrink-0" /><span>Audição</span></div>
        <div className="music-category music-rhythm"><Music className="size-4 shrink-0" /><span>Ritmo</span></div>
      </div>

      <div className="music-cover max-w-md mx-auto mt-8 rounded-3xl border-2 p-3">
        <img src={MASTER_PRODUCT_MOCKUP} alt="Pequenos Músicos — +500 Atividades Musicais Infantis para imprimir" className="w-full h-auto rounded-2xl block" loading="eager" />
      </div>
      <div className="music-support flex flex-wrap items-center justify-center gap-2 text-xs mt-4">
        <Lock className="size-3.5" /><span>Pagamento seguro</span><span aria-hidden="true">•</span><span>Acesso imediato</span><span aria-hidden="true">•</span><span>Garantia de 7 dias</span>
      </div>
    </div>
  </section>
);