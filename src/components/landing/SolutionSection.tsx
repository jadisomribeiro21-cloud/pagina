import React from 'react';
import { CheckCircle, XCircle, Heart, Sparkles, Brain, Music, Smile, ShieldCheck } from 'lucide-react';
import { KIDS_ACTIVITY_PHOTO } from '@/data/guideContent';

export const SolutionSection: React.FC = () => {
  return (
    <section id="solucao" className="py-20 sm:py-28 bg-[#FAF6F0] text-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-bold text-indigo-950 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>A Revolução no Aprendizado Infantil</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 tracking-tight leading-tight mb-5 font-display">
            Pequenos Músicos: O Método Lúdico que Conecta Diversão, Foco e Desenvolvimento Real
          </h2>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed text-balance">
            Em vez de gastar fortunas com brinquedos plásticos que quebram em dias ou deixar a criança refém de vídeos repetitivos, ofereça atividades que estimulam o cérebro através do poder milenar da música.
          </p>
        </div>

        {/* 2-Column Presentation with Warm Kids Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          {/* Left Column: Real Children Photo */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-stone-900/10 border-2 border-stone-200 bg-white">
              <img
                src={KIDS_ACTIVITY_PHOTO}
                alt="Professora e crianças pequenas sorridentes colorindo atividades musicais em mesa de madeira"
                className="w-full h-auto object-cover block"
              />
            </div>
            {/* Small reassurance overlay badge */}
            <div className="absolute -bottom-5 right-6 sm:right-10 bg-white border border-stone-200/90 rounded-2xl p-4 shadow-xl flex items-center gap-3 max-w-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                <Smile className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <p className="text-xs font-bold text-stone-900">100% Desconectado das Telas</p>
                <p className="text-[11px] text-stone-600">Foco, sorrisos e conexão real com o aprendizado.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight font-display">
              Por Que a Musicalização Infantil na Idade de 3 a 6 Anos é Tão Poderosa?
            </h3>
            
            <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
              Estudos da neurociência comprovam que a música é uma das raras atividades capazes de estimular simultaneamente os dois hemisférios cerebrais. Ela ativa as áreas da linguagem, da lógica matemática e do autocontrole emocional na fase em que o cérebro mais forma conexões sinápticas.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-amber-400 text-stone-950 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-stone-950 text-base">Metodologia 100% Prática: Baixe, Imprima e Aplique</h4>
                  <p className="text-stone-600 text-sm leading-relaxed mt-0.5">
                    Sem necessidade de planejar do zero. Basta escolher a folha do dia, entregar o lápis de cor ou giz de cera e assistir a mágica acontecer.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-amber-400 text-stone-950 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-stone-950 text-base">Qualquer Adulto Consegue Conduzir com Facilidade</h4>
                  <p className="text-stone-600 text-sm leading-relaxed mt-0.5">
                    Você não precisa saber tocar teclado, violão ou ler partituras. As ilustrações e comandos são intuitivos e fáceis tanto para a criança quanto para quem está guiando.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-amber-400 text-stone-950 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-stone-950 text-base">Preparação Natural para a Leitura e a Escrita</h4>
                  <p className="text-stone-600 text-sm leading-relaxed mt-0.5">
                    Os labirintos e traçados rítmicos desenvolvem a força dos dedinhos (motricidade fina), facilitando a transição para a alfabetização escolar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-amber-400 text-stone-950 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-stone-950 text-base">Economia Inteligente: Uso Vitalício e Ilimitado</h4>
                  <p className="text-stone-600 text-sm leading-relaxed mt-0.5">
                    Pague apenas uma vez e imprima quantas vezes quiser para todos os filhos, sobrinhos ou turmas inteiras da escola e igreja ao longo dos anos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table: Without vs With Pequenos Músicos */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-xl shadow-stone-900/5 max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-stone-950 tracking-tight font-display">
              Veja a Diferença no Dia a Dia com as Crianças
            </h3>
            <p className="text-sm text-stone-600 mt-1">
              Comparativo entre a rotina comum sem direcionamento e a experiência com o método Pequenos Músicos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* The Old / Frustrating Way */}
            <div className="p-6 rounded-2xl bg-rose-50/60 border border-rose-200/80 space-y-4">
              <div className="flex items-center gap-2.5 text-rose-900 font-bold text-base border-b border-rose-200 pb-3">
                <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>Sem o Pequenos Músicos</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-700">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Criança passando 3 a 5 horas diárias hipnotizada em vídeos no celular ou tablet.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Crises de choro, irritabilidade e birras na hora de desligar as telas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Mães e professoras exaustas caçando atividades em baixa resolução na internet.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Falta de estímulo auditivo e atraso na percepção rítmica e de linguagem.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Mensalidades caras em cursos de música que crianças de 3 a 5 anos não aproveitam.</span>
                </li>
              </ul>
            </div>

            {/* The Pequenos Músicos Way */}
            <div className="p-6 rounded-2xl bg-emerald-50/70 border-2 border-emerald-500/30 space-y-4 shadow-sm">
              <div className="flex items-center gap-2.5 text-emerald-950 font-bold text-base border-b border-emerald-200 pb-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Com o Método Pequenos Músicos</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-800">
                <li className="flex items-start gap-2 font-medium">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>A criança escolhe a atividade e passa tempo de qualidade focada e calma na mesa.</span>
                </li>
                <li className="flex items-start gap-2 font-medium">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Estímulo auditivo e desenvolvimento comprovado da fala, memória e ritmo corporal.</span>
                </li>
                <li className="flex items-start gap-2 font-medium">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Mais de 500 folhas organizadas por categorias, prontas para imprimir com 1 clique.</span>
                </li>
                <li className="flex items-start gap-2 font-medium">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Fortalecimento dos laços afetivos em família e aulas dinâmicas na escola e igreja.</span>
                </li>
                <li className="flex items-start gap-2 font-medium">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Acesso vitalício por apenas R$ 37,00 (sem mensalidades ou taxas ocultas).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};