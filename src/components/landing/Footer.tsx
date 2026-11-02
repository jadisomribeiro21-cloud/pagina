// ============= Simple centered footer (matching reference screenshot) =============

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0d1526] py-16 text-center">
      <div className="max-w-3xl mx-auto px-4 space-y-5">
        <p className="text-white font-bold text-lg">280 Atividades Musicais</p>
        <p className="text-slate-400 text-base">© 2026. Todos os direitos reservados.</p>
        <p className="text-slate-400 text-base">Este é um produto digital. Nenhum material físico será enviado.</p>
      </div>
    </footer>
  );
};