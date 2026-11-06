import React, { useState } from 'react';
import { 
  BookOpen, 
  Check, 
  Printer, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  Music, 
  Drum, 
  Waves, 
  Gamepad2,
  X
} from 'lucide-react';
import { 
  REAL_ACTIVITY_SHEETS, 
  CORE_SUBJECTS, 
  WHAT_YOU_CAN_DO 
} from '@/data/guideContent';

export const ContentPreviewSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : REAL_ACTIVITY_SHEETS.length - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < REAL_ACTIVITY_SHEETS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="amostra" className="py-20 sm:py-28 bg-[#FAF6F0] text-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Part: Chega de começar suas atividades musicais do zero! */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-bold text-amber-700 uppercase tracking-wider bg-amber-100/80 px-3.5 py-1.5 rounded-full border border-amber-300">
            <Music className="w-4 h-4 text-amber-700" />
            <span>Praticidade e Variedade</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 tracking-tight leading-tight mb-6 font-display">
            🎵 Chega de começar suas atividades musicais do zero!
          </h2>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-3xl mx-auto mb-6 text-balance">
            Preparar atividades diferentes pode consumir muito tempo. Procurar ideias, organizar conteúdos e pensar no que aplicar nem sempre é simples.
          </p>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-3xl mx-auto mb-8 text-balance">
            Por isso, você pode contar com um material organizado com <strong className="text-amber-800 font-black">mais de 500 atividades musicais</strong>, desenvolvido para facilitar sua rotina e trazer mais variedade às experiências de aprendizagem.
          </p>

          {/* 5 Benefits List */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-lg text-left max-w-2xl mx-auto mb-8">
            <span className="text-xs font-black text-indigo-950 uppercase tracking-wider block mb-4">
              Com ele, você pode:
            </span>
            <ul className="space-y-3">
              {WHAT_YOU_CAN_DO.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-stone-800 font-medium">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Strong Punchline */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-400/20 border border-amber-400/50 max-w-2xl mx-auto">
            <p className="text-sm sm:text-base font-bold text-stone-900">
              Você não precisa criar tudo do zero. Tenha um material organizado para consultar sempre que precisar.
            </p>
          </div>
        </div>

        {/* Real Activity Sheets Interactive Gallery / Carousel */}
        <div id="galeria" className="my-16 pt-8 border-t border-stone-300/70">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-indigo-950 uppercase tracking-widest block mb-2">
              Folheie as Folhas por Dentro
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-stone-950 tracking-tight font-display">
              Veja Exemplos Reais das Páginas do Material
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              Diagramação limpa em padrão A4, traços nítidos e economia inteligente de tinta da sua impressora.
            </p>
          </div>

          {/* Carousel Viewport */}
          <div className="relative max-w-4xl mx-auto">
            {/* Main Featured Image Card */}
            <div className="bg-white rounded-3xl p-4 sm:p-8 border border-stone-300 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
              {/* Image side with zoom trigger */}
              <div className="w-full md:w-1/2 flex flex-col items-center">
                <div 
                  onClick={() => setLightboxImage(REAL_ACTIVITY_SHEETS[currentSlide]!.imageUrl)}
                  className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-stone-200 shadow-md bg-stone-50 max-w-xs w-full transition-transform duration-300 hover:scale-[1.02]"
                >
                  <img
                    src={REAL_ACTIVITY_SHEETS[currentSlide]!.imageUrl}
                    alt={REAL_ACTIVITY_SHEETS[currentSlide]!.title}
                    className="w-full h-auto object-contain block"
                  />
                  <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-stone-950 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                      <ZoomIn className="w-3.5 h-3.5" /> Ampliar
                    </span>
                  </div>
                </div>
                <span className="text-[11px] text-stone-400 mt-2">Clique na imagem para ampliar em tela cheia</span>
              </div>

              {/* Details side */}
              <div className="w-full md:w-1/2 space-y-4 text-left">
                <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                  {REAL_ACTIVITY_SHEETS[currentSlide]!.tag}
                </div>

                <h4 className="text-2xl sm:text-3xl font-black text-stone-950 font-display">
                  {REAL_ACTIVITY_SHEETS[currentSlide]!.title}
                </h4>

                <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                  {REAL_ACTIVITY_SHEETS[currentSlide]!.desc}
                </p>

                <div className="pt-4 border-t border-stone-200 space-y-2 text-xs text-stone-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Arquivo digital em PDF de alta qualidade (300 DPI)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Pronto para imprimir na impressora comum de casa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Imprima quantas cópias quiser</span>
                  </div>
                </div>

                {/* Nav buttons */}
                <div className="flex items-center gap-3 pt-4">
                  <button
                    onClick={prevSlide}
                    className="p-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors cursor-pointer"
                    aria-label="Atividade anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs font-bold text-stone-500">
                    {currentSlide + 1} de {REAL_ACTIVITY_SHEETS.length}
                  </span>
                  <button
                    onClick={nextSlide}
                    className="p-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors cursor-pointer"
                    aria-label="Próxima atividade"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Thumbnails row */}
            <div className="grid grid-cols-6 gap-2 sm:gap-4 mt-6">
              {REAL_ACTIVITY_SHEETS.map((sheet, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`rounded-xl overflow-hidden border-2 transition-all cursor-pointer p-1 bg-white ${
                    currentSlide === index
                      ? 'border-amber-500 shadow-md scale-105 ring-2 ring-amber-400/30'
                      : 'border-stone-300 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={sheet.imageUrl}
                    alt={sheet.title}
                    className="w-full h-14 sm:h-20 object-contain rounded-lg"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2: O que você vai encontrar dentro do material? */}
        <div id="conteudo" className="mt-20 pt-16 border-t border-stone-300/70">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-2">
              Estrutura Pedagógica
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 tracking-tight leading-tight mb-4 font-display">
              O que você vai encontrar dentro do material?
            </h2>
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
              São mais de 500 atividades organizadas para explorar diferentes aspectos da educação musical.
            </p>
          </div>

          {/* 4 Core Subject Cards from user prompt */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {CORE_SUBJECTS.map((subj, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-stone-200/90 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                      {subj.badge}
                    </span>
                    <span className="text-xs text-stone-400 font-bold">0{idx + 1}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-stone-950 mb-3 group-hover:text-amber-700 transition-colors font-display">
                    {subj.title}
                  </h3>

                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                    {subj.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Printer className="w-4 h-4 text-stone-400" /> Formato A4 Pronto
                  </span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Incluso no Acesso
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-2xl w-full bg-white p-2 rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-stone-800 shadow-lg cursor-pointer"
              aria-label="Fechar ampliação"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={lightboxImage}
              alt="Atividade musical ampliada"
              className="w-full h-auto object-contain rounded-xl max-h-[85vh]"
            />
          </div>
        </div>
      )}
    </section>
  );
};