import React from 'react';
import { 
  Printer,
  Music, 
  BookMarked, 
  Users, 
  Baby, 
  GraduationCap, 
  Church, 
  HeartHandshake, 
  CheckCircle2, 
  Award 
} from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const differentials = [
    {
      icon: Printer,
      title: 'Economia Inteligente de Tinta',
      desc: 'Folhas desenhadas com traços pretos nítidos em alta definição. Não gastam cartuchos de cor da sua impressora desnecessariamente.',
    },
    {
      icon: BookMarked,
      title: 'Alinhado aos Princípios Pedagógicos da BNCC',
      desc: 'Trabalha os campos de experiências essenciais: "Corpo, Gestos e Movimentos", "Traços, Sons, Cores e Formas" e "Escuta, Fala e Pensamento".',
    },
    {
      icon: Baby,
      title: 'Calibrado para a Idade de 3 a 6 Anos',
      desc: 'Atividades nem fáceis demais que causem tédio, nem difíceis demais que gerem frustração. O nível exato de desafio lúdico.',
    },
    {
      icon: Music,
      title: '100% Visual e Sem Teorias Chatas',
      desc: 'A criança aprende o que é grave, agudo, ritmo e notas sem perceber que está estudando — é uma grande brincadeira de pintar e cantar.',
    },
    {
      icon: Users,
      title: 'Versátil para Casa, Escola e Igreja',
      desc: 'Seja para uma tarde tranquila em família, uma aula do maternal ou a salinha de crianças no domingo, o acervo atende todas as necessidades.',
    },
    {
      icon: Award,
      title: 'Acesso Vitalício sem Mensalidades',
      desc: 'Baixe todos os arquivos para o seu computador ou nuvem e tenha o acervo para sempre, podendo imprimir novos cadernos a qualquer momento.',
    },
  ];

  const targetAudiences = [
    {
      icon: Users,
      title: 'Mães e Pais Preocupados com o Futuro',
      desc: 'Que desejam substituir as telas por momentos ricos de afeto, criatividade e desenvolvimento saudável na sala de estar.',
    },
    {
      icon: GraduationCap,
      title: 'Professoras da Educação Infantil & Maternal',
      desc: 'Que precisam de um acervo confiável, pronto e testado em sala de aula para enriquecer o plano pedagógico sem perder finais de semana.',
    },
    {
      icon: Church,
      title: 'Tias e Voluntários do Ministério Infantil',
      desc: 'Que buscam atividades musicais e cantigas educativas com valores limpos e dinâmicas que envolvem até as crianças mais agitadas.',
    },
    {
      icon: HeartHandshake,
      title: 'Terapeutas, Fonoaudiólogos & Escolinhas de Música',
      desc: 'Profissionais que utilizam a musicalização como ferramenta de estimulação da fala, controle inibitório e integração sensorial.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF6F0] text-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-bold text-indigo-950 uppercase tracking-wider">
            <Award className="w-4 h-4 text-amber-600" />
            <span>Por Que Este Material é Único</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 tracking-tight leading-tight mb-5 font-display">
            Diferenciais Que Fazem do Pequenos Músicos a Escolha Nº 1 de Famílias e Escolas
          </h2>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed text-balance">
            Desenvolvido por educadores apaixonados por musicalização infantil para oferecer a máxima riqueza pedagógica com a maior simplicidade de aplicação.
          </p>
        </div>

        {/* 6 Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {differentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white border border-stone-200 shadow-md shadow-stone-900/5 hover:border-amber-400 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="text-lg font-bold text-stone-950 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* For Whom is this Product (4 Target Profiles) */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-stone-200 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-indigo-950 uppercase tracking-wider block mb-2">
              Público Indicado
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-stone-950 font-display">
              Para Quem Este Acervo Foi Especialmente Criado?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudiences.map((aud, i) => {
              const AudIcon = aud.icon;
              return (
                <div key={i} className="bg-amber-50/50 p-6 rounded-2xl border border-amber-200/80 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-indigo-950 text-amber-400 flex items-center justify-center mb-4">
                      <AudIcon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-stone-900 text-base mb-2 leading-snug">{aud.title}</h4>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{aud.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-amber-200/60 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>100% Recomendado</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};