import React from 'react';
import { XCircle, CheckCircle, Clock, Sparkles, ArrowRight } from 'lucide-react';
import { WITHOUT_VS_WITH } from '@/data/guideContent';

export const PainSection: React.FC = () => {
  return (
    <section id="comparativo" className="py-20 sm:py-28 bg-[#0b1428] text-white relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-semibold text-amber-400 tracking-wide uppercase bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Rotina & Planejamento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-5 font-display">
            Você se identifica com alguma dessas situações?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
            Veja a comparação clara entre tentar fazer tudo por conta própria e contar com um material pronto e testado.
          </p>
        </div>

        {/* 2 Side-by-Side Comparison Cards exact from user prompt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto items-stretch mb-14">
          
          {/* Card 1: Sem o material */}
          <div className="rounded-3xl bg-[#141b2f] border border-rose-500/30 p-7 sm:p-9 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 border-b border-rose-500/20 pb-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-rose-500/15 border border-rose-500/40 flex items-center justify-center text-rose-400 shrink-0 font-bold">
                  ✕
                </div>
                <div>
                  <span className="text-xs font-bold text-rose-400 uppercase tracking-widest block">Antes</span>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-display">Sem o material</h3>
                </div>
              </div>

              <ul className="space-y-4 text-sm sm:text-base text-slate-300">
                {WITHOUT_VS_WITH.without.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-rose-500/20 text-xs text-rose-300 font-medium">
              Horas perdidas em busca de ideias dispersas pela internet.
            </div>
          </div>

          {/* Card 2: Com o material */}
          <div className="rounded-3xl bg-[#132342] border-2 border-emerald-400/50 p-7 sm:p-9 shadow-2xl flex flex-col justify-between relative shadow-emerald-950/40">
            <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-emerald-500 to-teal-400 text-stone-950 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
              MUITO MAIS PRÁTICO
            </div>

            <div>
              <div className="flex items-center gap-3 border-b border-emerald-500/20 pb-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 font-bold">
                  ✓
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">Depois</span>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-display">Com o material</h3>
                </div>
              </div>

              <ul className="space-y-4 text-sm sm:text-base text-slate-100 font-medium">
                {WITHOUT_VS_WITH.with.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-500/20 text-xs text-emerald-300 font-bold">
              Tudo pronto para imprimir e aplicar imediatamente.
            </div>
          </div>

        </div>

        {/* Punchline exact from user prompt */}
        <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-amber-400/20 via-amber-300/15 to-amber-400/20 border border-amber-400/40 text-center shadow-lg">
          <p className="text-base sm:text-lg font-black text-amber-300 leading-relaxed font-display">
            Seu tempo é valioso. Aproveite melhor sua preparação com atividades que já estão organizadas.
          </p>
        </div>
      </div>
    </section>
  );
};