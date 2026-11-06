import React from 'react';
import { Gift, Check, Music, Calendar, Activity, Zap, ArrowRight } from 'lucide-react';
import { BONUSES_LIST, BONUS_MOCKUP_IMAGE } from '@/data/guideContent';

interface BonusSectionProps {
  onOpenCheckout: () => void;
}

export const BonusSection: React.FC<BonusSectionProps> = ({ onOpenCheckout }) => {
  const bonusIcons = [Music, Calendar, Activity];

  return (
    <section id="bonus" className="py-20 sm:py-28 bg-[#0b1428] text-white relative overflow-hidden border-t border-indigo-900/40">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-400/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header exact from user prompt */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-bold text-amber-400 tracking-wider uppercase bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
            <Gift className="w-4 h-4 text-amber-400" />
            <span>Materiais Complementares</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-5 font-display">
            🎁 E tem mais: 3 bônus especiais no Plano Premium!
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
            Além das mais de 500 atividades, você também pode receber três materiais complementares para ampliar suas possibilidades de musicalização.
          </p>
        </div>

        {/* 3 Bonus Cards exact from user prompt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {BONUSES_LIST.map((bonus, idx) => {
            const Icon = bonusIcons[idx % bonusIcons.length];
            return (
              <div
                key={bonus.id}
                className="rounded-3xl bg-[#142245] border border-indigo-800/60 p-7 shadow-2xl flex flex-col justify-between relative group hover:border-amber-400 transition-all"
              >
                <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 text-xs font-black px-3.5 py-1 rounded-full shadow-md">
                  BÔNUS #{bonus.id}
                </div>

                <div>
                  {idx === 0 && (
                    <div className="w-full flex justify-center mb-6 pt-2">
                      <div className="w-[150px] sm:w-[170px] rounded-xl overflow-hidden shadow-2xl border border-indigo-400/30 group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={BONUS_MOCKUP_IMAGE}
                          alt={bonus.title}
                          className="w-full h-auto object-cover block"
                        />
                      </div>
                    </div>
                  )}

                  {idx !== 0 && (
                    <div className="w-14 h-14 rounded-2xl bg-indigo-900/60 border border-indigo-700/60 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-105 transition-transform">
                      {Icon && <Icon className="w-7 h-7 text-amber-400" />}
                    </div>
                  )}

                  <div className="text-xs font-semibold text-slate-300 mb-1">
                    <span>(Vendido separadamente por </span>
                    <span className="line-through text-slate-400 font-bold">{bonus.originalPrice}</span>
                    <span className="text-amber-400 font-bold">)</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug">
                    {bonus.title.replace(/BÔNUS \d+: /, '')}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {bonus.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-indigo-800/40">
                    {bonus.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-indigo-800/40 flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400">Incluso no Plano Premium</span>
                  <span className="text-xs font-black text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-500/30">
                    GRÁTIS HOJE
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bonus Value Summary & CTA */}
        <div className="max-w-3xl mx-auto text-center bg-[#15244a] p-8 rounded-3xl border border-amber-400/30 shadow-xl">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-300 uppercase tracking-wider mb-2">            <span>Total de R$ 75,00 em Bônus Gratuitos no Plano Premium</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 font-display">
            Leve Todos os 3 Bônus no Plano Premium por Apenas R$ 29,90!
          </h3>
          <a
            href="#oferta"
            className="px-8 py-4 text-base sm:text-lg font-black text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg shadow-amber-400/25 glow-btn transition-all cursor-pointer active:scale-95 inline-flex items-center gap-2"
          >
            <Zap className="w-5 h-5 text-stone-950 fill-stone-950" />
            <span>QUERO O PLANO PREMIUM COM BÔNUS</span>
            <ArrowRight className="w-5 h-5 text-stone-950" />
          </a>
        </div>
      </div>
    </section>
  );
};