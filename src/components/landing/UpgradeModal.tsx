import React from 'react';
import { X, Check, ShieldCheck, ArrowRight } from 'lucide-react';
import { CAKTO_CHECKOUT_URL } from '@/data/guideContent';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAcceptUpgrade: () => void;
  onDeclineToBasic: () => void;
}

export const UpgradeModal: React.FC<UpgradeModalProps> = ({
  isOpen,
  onClose,
  onAcceptUpgrade,
  onDeclineToBasic,
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-stone-200 text-stone-900 my-8">
        {/* Close button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 hover:text-stone-900 flex items-center justify-center transition-colors cursor-pointer text-xl"
          aria-label="Fechar oferta de upgrade"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Kicker */}
        <p className="text-xs font-black tracking-widest text-amber-600 uppercase mb-2">
          OFERTA ESPECIAL DE UPGRADE
        </p>

        {/* Modal Title */}
        <h2 className="text-2xl sm:text-3xl font-black text-stone-950 mb-3 tracking-tight font-display leading-tight">
          Leve os 3 bônus por apenas mais R$ 5,00
        </h2>

        {/* Subtitle */}
        <p className="text-sm text-stone-600 mb-6 leading-relaxed">
          Antes de continuar com o Plano Básico, aproveite para receber o pacote completo com os 3 bônus por uma condição especial exclusiva.
        </p>

        {/* Checks */}
        <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700 mb-6 bg-stone-50 p-4 rounded-2xl border border-stone-200/80">
          <li className="flex items-start gap-2.5 font-bold text-stone-900">
            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Mais de 500 Atividades Musicais em PDF</span>
          </li>
          <li className="flex items-start gap-2.5 text-emerald-900 font-semibold bg-emerald-50/60 p-1.5 rounded-lg border border-emerald-200/50">
            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>🎁 BÔNUS 1: 30 Instrumentos com Materiais Recicláveis</span>
          </li>
          <li className="flex items-start gap-2.5 text-emerald-900 font-semibold bg-emerald-50/60 p-1.5 rounded-lg border border-emerald-200/50">
            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>🎁 BÔNUS 2: Calendário de Musicalização Infantil</span>
          </li>
          <li className="flex items-start gap-2.5 text-emerald-900 font-semibold bg-emerald-50/60 p-1.5 rounded-lg border border-emerald-200/50">
            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>🎁 BÔNUS 3: 50 Brincadeiras de Ritmo e Movimento</span>
          </li>
          <li className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Garantia incondicional de 7 dias (Risco Zero)</span>
          </li>
        </ul>

        {/* Price Row with Crossed Price as on mundobuba */}
        <div className="flex items-baseline justify-center gap-3 mb-6">
          <del className="text-base sm:text-lg text-stone-400 font-medium">
            R$ 29,90
          </del>
          <div className="flex items-baseline gap-1 text-emerald-700">
            <span className="text-sm font-bold">R$</span>
            <span className="text-4xl font-black tracking-tight font-display">
              24<span className="text-2xl">,90</span>
            </span>
            <span className="text-xs text-stone-500 ml-1">à vista</span>
          </div>
        </div>

        {/* Direct Link or accept */}
        <div className="flex flex-col gap-2.5 mb-3">
          <a
            href={CAKTO_CHECKOUT_URL}
            className="w-full py-4 px-6 rounded-xl font-black text-sm sm:text-base text-white bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 transition-all cursor-pointer shadow-lg shadow-emerald-600/30 glow-btn active:scale-95 flex items-center justify-center gap-2 text-center"
          >
            <span>SIM, QUERO O UPGRADE NO CHECKOUT CAKTO</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={onAcceptUpgrade}
            className="text-xs text-stone-500 hover:text-emerald-700 underline text-center cursor-pointer"
          >
            (Ou continuar no simulador interativo de pagamento)
          </button>
        </div>

        {/* Decline Button to basic checkout */}
        <div className="flex flex-col items-center gap-2 mt-2 pt-2 border-t border-stone-200">
          <a
            href={CAKTO_CHECKOUT_URL}
            className="text-xs text-stone-600 hover:text-stone-900 underline font-medium cursor-pointer"
          >
            Ir direto para o Checkout Cakto →
          </a>
          <button
            type="button"
            onClick={onDeclineToBasic}
            className="text-[11px] text-stone-400 hover:text-stone-600 underline cursor-pointer"
          >
            Continuar no simulador com Plano Básico
          </button>
        </div>
      </div>
    </div>
  );
};