import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

interface GuaranteeSectionProps {
  onOpenCheckout: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="garantia" className="py-20 sm:py-24 bg-[#0a1224] text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#13203f] border-2 border-amber-400/50 p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center">
          {/* Subtle amber ambient behind badge */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-400/10 blur-[90px] rounded-full pointer-events-none" />

          {/* Guarantee Seal Crest */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-300 text-stone-950 flex flex-col items-center justify-center shadow-xl shadow-amber-400/20 mb-6 border-4 border-amber-200">
            <span className="text-xl sm:text-2xl font-black leading-none font-display">7</span>
            <span className="text-[10px] font-black uppercase tracking-tight">DIAS</span>
            <ShieldCheck className="w-4 h-4 text-stone-950" />
          </div>

          <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-bold text-amber-400 tracking-wider uppercase bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
            <span>Risco Zero Para Você</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-5 font-display">
            🛡️ Garantia incondicional de 7 dias
          </h3>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto mb-3">
            Você tem 7 dias para conhecer o material. Se por qualquer motivo achar que ele não atendeu às suas expectativas, basta solicitar o reembolso e você receberá 100% do seu dinheiro de volta.
          </p>

          <p className="text-sm sm:text-base font-bold text-amber-300 max-w-md mx-auto mb-8">
            Sem burocracia, sem perguntas.
          </p>

          <a
            href="#oferta"
            className="px-8 py-4 text-sm sm:text-base font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg hover:shadow-amber-400/30 transition-all cursor-pointer inline-flex items-center gap-2 active:scale-95"
          >
            <span>Experimentar Sem Nenhum Risco</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};