import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { OFFICIAL_TESTIMONIAL_CARDS } from '@/data/guideContent';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 sm:py-28 bg-[#FAF6F0] text-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header exact from user prompt */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-bold text-amber-700 tracking-wider uppercase bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-300">
            <MessageSquareQuote className="w-4 h-4 text-amber-700" />
            <span>Depoimentos Reais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 tracking-tight leading-tight mb-4 font-display">
            💬 O que dizem quem já utiliza o material
          </h2>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed text-balance">
            Depoimentos reais de professores e educadores que transformaram suas aulas com as atividades musicais.
          </p>
        </div>

        {/* 3 Real Testimonial Cards from mundobuba.com */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14 max-w-6xl mx-auto">
          {OFFICIAL_TESTIMONIAL_CARDS.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-xl flex flex-col justify-between group hover:border-amber-400 transition-all hover:shadow-2xl"
            >
              <div>
                {/* Rating Stars & Verified Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verificado</span>
                  </div>
                </div>

                {/* Real screenshot from mundobuba.com */}
                <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm mb-4 bg-stone-50">
                  <img
                    src={t.imageUrl}
                    alt={`Depoimento de ${t.name}`}
                    className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <p className="text-xs sm:text-sm text-stone-600 italic leading-relaxed mb-4">
                  "{t.highlight}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-stone-900 leading-tight">{t.name}</h4>
                  <p className="text-xs text-stone-500">{t.role}</p>
                </div>
                <span className="text-xs font-semibold text-emerald-700">★ 5.0</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-center pt-8 border-t border-stone-300/70">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-amber-600 font-display">+500</div>
            <div className="text-xs text-stone-600 uppercase tracking-wider mt-1">Atividades Prontas</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-stone-900 font-display">4.9★</div>
            <div className="text-xs text-stone-600 uppercase tracking-wider mt-1">Avaliação dos Educadores</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-amber-600 font-display">100%</div>
            <div className="text-xs text-stone-600 uppercase tracking-wider mt-1">Livre de Telas</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-stone-900 font-display">Vitalício</div>
            <div className="text-xs text-stone-600 uppercase tracking-wider mt-1">Sem Mensalidades</div>
          </div>
        </div>
      </div>
    </section>
  );
};