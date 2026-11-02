import React, { useState } from 'react';
import { Layers, Check, ChevronDown, Sparkles, Printer, Music, Award } from 'lucide-react';
import { MODULES_LIST, MASTER_PRODUCT_MOCKUP } from '@/data/guideContent';

export const ModulesSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="modulos" className="py-20 sm:py-28 bg-[#0d162d] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-bold text-amber-400 tracking-wider uppercase">
            <Layers className="w-4 h-4 text-amber-400" />
            <span>Estrutura Completa do Material</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-5 font-display">
            Mais de 500 Atividades Organizadas em 5 Módulos Pedagógicos
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
            Cada módulo foi cuidadosamente elaborado respeitando o tempo de atenção e as etapas motoras e cognitivas de crianças de 3 a 6 anos.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main Product Showcase Card (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#142245] border border-indigo-800/60 shadow-2xl shadow-indigo-950/80 flex flex-col items-center text-center">
              <div className="w-[220px] sm:w-[260px] rounded-2xl overflow-hidden shadow-2xl mb-6 border border-indigo-400/40 bg-slate-900/60 p-2">
                <img
                  src={MASTER_PRODUCT_MOCKUP}
                  alt="Acervo Completo - Pequenos Músicos 500+ Atividades"
                  className="w-full h-auto object-contain rounded-xl block"
                />
              </div>

              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                Acervo Pedagógico Completo
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2 font-display">
                Pequenos Músicos · 500+ Atividades
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                Mais de 500 páginas diagramadas em formato A4, com ilustrações nítidas, partituras simplificadas, labirintos e jogos rítmicos.
              </p>

              <div className="w-full pt-4 border-t border-indigo-800/50 space-y-2.5 text-xs text-left text-slate-200">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Formato PDF universal (abra no celular, tablet ou computador)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Acesso vitalício com impressão ilimitada</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Traços otimizados para gastar pouca tinta da impressora</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Inclui Certificado de Pequeno Músico para a criança!</span>
                </div>
              </div>
            </div>
          </div>

          {/* Expandable Accordion Modules (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {MODULES_LIST.map((module) => {
              const isExpanded = expandedId === module.id;
              return (
                <div
                  key={module.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? 'bg-[#15244a] border-amber-400/60 shadow-xl shadow-indigo-950/50'
                      : 'bg-[#111c38] border-indigo-900/60 hover:border-indigo-700'
                  }`}
                >
                  {/* Module Accordion Header */}
                  <button
                    onClick={() => toggleExpand(module.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-10 h-10 rounded-xl bg-amber-400 text-stone-950 flex items-center justify-center font-black text-sm shrink-0 shadow-md shadow-amber-400/20">
                        0{module.id}
                      </span>
                      <div>
                        <div className="flex items-center gap-2.5">
                          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                            {module.activitiesCount}
                          </span>
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-white mt-0.5 leading-snug">
                          {module.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-300/80 mt-0.5">
                          {module.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-300 shrink-0">
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180 text-amber-400' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {/* Expanded Content Drawer */}
                  {isExpanded && (
                    <div className="px-5 pb-6 sm:px-6 pt-1 border-t border-indigo-800/40 space-y-4">
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        {module.description}
                      </p>

                      <div className="space-y-2 pt-2">
                        <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                          Algumas das atividades deste módulo:
                        </span>
                        {module.topics.map((topic, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};