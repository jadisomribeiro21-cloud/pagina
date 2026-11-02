import React, { useState, useEffect } from 'react';
import { ShieldCheck, Check, Sparkles, Clock, Lock, ArrowRight, Zap, Star } from 'lucide-react';
import { CAKTO_CHECKOUT_URL, MASTER_PRODUCT_MOCKUP } from '@/data/guideContent';

interface SelectedPlanInfo {
  name: string;
  price: number;
  priceFormatted: string;
  installments?: string;
  isPopular?: boolean;
}

interface OfferSectionProps {
  onSelectPlan: (plan: SelectedPlanInfo) => void;
  onRequestUpgrade: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onSelectPlan, onRequestUpgrade }) => {
  // 15-minute countdown timer matching mundobuba
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 15 * 60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTimer = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const handleChooseBasic = (e: React.MouseEvent) => {
    // Triggers mundobuba.com upgrade modal flow
    onRequestUpgrade();
  };

  const handleChoosePremium = () => {
    onSelectPlan({
      name: 'Plano Premium (+500 Atividades + 3 Bônus)',
      price: 29.90,
      priceFormatted: 'R$ 29,90',
      installments: '3x de R$ 10,64',
      isPopular: true,
    });
  };

  return (
    <section id="oferta" className="py-24 sm:py-32 bg-[#111c3c] text-white relative overflow-hidden border-t border-indigo-900/40">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(20,184,166,0.22),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(99,102,241,0.22),transparent_38%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Countdown Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-2 text-xs sm:text-sm font-bold text-amber-300 uppercase tracking-wider">
            <Clock className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>Esta condição especial termina em:</span>
          </div>

          <div 
            className="text-4xl sm:text-5xl font-black text-amber-400 tracking-wider font-mono my-2 text-shadow-amber"
            role="timer"
            aria-live="polite"
          >
            {formattedTimer}
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mt-4 mb-3 font-display">
            🏷️ Escolha a melhor opção para você
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-balance">
            Aproveite a condição especial por tempo limitado.
          </p>
        </div>

        {/* 2 Offer Plans (Plano Básico vs Plano Premium) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto items-stretch">
          
          {/* 1. PLANO BÁSICO */}
          <article className="rounded-3xl bg-white text-stone-900 p-7 sm:p-9 shadow-xl border border-stone-200 flex flex-col justify-between relative hover:shadow-2xl transition-all">
            <div>
              <p className="text-xs font-black tracking-widest text-slate-500 uppercase mb-1">
                PLANO BÁSICO
              </p>
              <h3 className="text-2xl font-black text-stone-950 mb-2 font-display">
                Plano Básico
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
                Ideal para quem deseja o material principal de atividades musicais.
              </p>

              {/* Checklist from prompt */}
              <ul className="space-y-3 pt-2 border-t border-stone-100 text-xs sm:text-sm text-stone-700 mb-8">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Mais de 500 atividades</strong> musicais em PDF</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Acesso imediato para download</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Material organizado por temas</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Pronto para imprimir</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Suporte para dúvidas</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-xs text-stone-400 mb-1">
                De <span className="line-through font-semibold text-stone-500">R$ 97,00</span> por apenas
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-sm font-bold text-stone-600">R$</span>
                <span className="text-4xl sm:text-5xl font-black text-stone-950 tracking-tight font-display">
                  19<span className="text-2xl">,90</span>
                </span>
                <span className="text-xs text-stone-500 ml-2">à vista</span>
              </div>
              <p className="text-xs text-stone-500 mb-5">ou 2x de R$ 10,48</p>

              {/* Basic CTA Button */}
              <button
                type="button"
                onClick={handleChooseBasic}
                className="w-full py-4 px-6 rounded-xl font-bold text-sm sm:text-base text-stone-900 bg-stone-100 hover:bg-stone-200 border-2 border-stone-300 transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2 mb-3 shadow-xs"
              >
                <span>QUERO O PLANO BÁSICO</span>
                <ArrowRight className="w-4 h-4 text-stone-700" />
              </button>

              <div className="text-center text-[11px] text-stone-500 flex items-center justify-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Compra 100% segura • Acesso imediato</span>
              </div>
            </div>
          </article>

          {/* 2. PLANO PREMIUM (MAIS ESCOLHIDO) */}
          <article className="rounded-3xl bg-white text-stone-900 p-7 sm:p-9 shadow-2xl border-2 border-emerald-500 flex flex-col justify-between relative transform md:-translate-y-2 hover:shadow-emerald-500/10 transition-all">
            {/* Tag from prompt: ⭐ MAIS ESCOLHIDO */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-teal-500 text-white text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              <span>MAIS ESCOLHIDO</span>
            </div>

            <div>
              <p className="text-xs font-black tracking-widest text-emerald-700 uppercase mb-1">
                PLANO PREMIUM
              </p>
              <h3 className="text-2xl font-black text-stone-950 mb-2 font-display">
                Plano Premium
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-4 leading-relaxed">
                A experiência completa com atividades e todos os materiais complementares.
              </p>

              {/* Mockup do material completo + bônus perfeitamente encaixado */}
              <div className="mb-6 rounded-2xl overflow-hidden border border-emerald-200/90 bg-gradient-to-b from-emerald-50/50 via-white to-amber-50/20 p-2 sm:p-2.5 shadow-sm transition-all duration-300 hover:shadow-md">
                <img
                  src={MASTER_PRODUCT_MOCKUP}
                  alt="Plano Premium - 500+ Atividades Musicais Infantis + Bônus"
                  className="w-full h-auto object-contain rounded-xl max-h-56 sm:max-h-64 mx-auto"
                  loading="lazy"
                />
              </div>

              {/* Checklist from prompt */}
              <ul className="space-y-2.5 pt-2 border-t border-stone-100 text-xs sm:text-sm text-stone-700 mb-8">
                <li className="flex items-start gap-2.5 font-bold text-stone-900">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Mais de 500 atividades musicais em PDF</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Acesso imediato para download</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Material organizado por temas</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Pronto para imprimir</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Suporte para dúvidas</span>
                </li>
                <li className="flex items-start gap-2.5 text-emerald-900 font-semibold bg-emerald-50/70 p-2 rounded-lg border border-emerald-200">
                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>🎁 BÔNUS 1: 30 Instrumentos com Materiais Recicláveis</span>
                </li>
                <li className="flex items-start gap-2.5 text-emerald-900 font-semibold bg-emerald-50/70 p-2 rounded-lg border border-emerald-200">
                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>🎁 BÔNUS 2: Calendário de Musicalização Infantil</span>
                </li>
                <li className="flex items-start gap-2.5 text-emerald-900 font-semibold bg-emerald-50/70 p-2 rounded-lg border border-emerald-200">
                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>🎁 BÔNUS 3: 50 Brincadeiras de Ritmo e Movimento</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-xs text-stone-400 mb-1">
                De <span className="line-through font-semibold text-stone-500">R$ 172,00</span> por apenas
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-sm font-bold text-stone-600">R$</span>
                <span className="text-4xl sm:text-5xl font-black text-emerald-700 tracking-tight font-display">
                  29<span className="text-2xl">,90</span>
                </span>
                <span className="text-xs text-stone-500 ml-2">à vista</span>
              </div>
              <p className="text-xs text-stone-500 mb-5">ou 3x de R$ 10,64</p>

              {/* Premium CTA Button */}
              <div className="flex flex-col gap-2 mb-3">
                <a
                  href={CAKTO_CHECKOUT_URL}
                  className="w-full py-4 px-6 rounded-xl font-black text-sm sm:text-base text-white bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 glow-btn"
                >
                  <Zap className="w-5 h-5 text-white fill-white" />
                  <span>QUERO O PLANO PREMIUM COM BÔNUS</span>
                </a>

                <button
                  type="button"
                  onClick={handleChoosePremium}
                  className="text-xs text-stone-500 hover:text-emerald-700 underline text-center cursor-pointer py-1"
                >
                  (Ou testar no simulador interativo de checkout)
                </button>
              </div>

              <div className="text-center text-[11px] text-stone-500 flex items-center justify-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Compra 100% segura • Acesso imediato</span>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};