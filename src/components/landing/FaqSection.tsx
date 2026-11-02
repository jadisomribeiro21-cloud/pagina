import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQ_LIST } from '@/data/guideContent';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FAF6F0] text-stone-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-bold text-amber-700 uppercase tracking-wider bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-300">
            <HelpCircle className="w-4 h-4 text-amber-700" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 tracking-tight leading-tight mb-4 font-display">
            ❓ Perguntas frequentes
          </h2>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed text-balance">
            Respostas diretas e transparentes sobre as atividades, formatos de entrega e formas de pagamento.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all border ${
                  isOpen
                    ? 'bg-white border-amber-400/80 shadow-md'
                    : 'bg-white/80 hover:bg-white border-stone-200/90 shadow-xs'
                }`}
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-stone-950">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-stone-100 text-stone-800 flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 bg-stone-900 text-amber-400' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-stone-700 leading-relaxed border-t border-stone-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};