import React, { useState } from 'react';
import { X, ShieldCheck, Lock, QrCode, CreditCard, FileText, CheckCircle2, Copy, Download, Check } from 'lucide-react';
import { MASTER_PRODUCT_MOCKUP, CAKTO_CHECKOUT_URL } from '@/data/guideContent';


export interface PlanDetails {
  name: string;
  price: number;
  priceFormatted: string;
  installments?: string;
  isPopular?: boolean;
}

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan?: PlanDetails;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ 
  isOpen, 
  onClose,
  plan = {
    name: 'Plano Premium (500+ Atividades + 3 Bônus)',
    price: 29.90,
    priceFormatted: 'R$ 29,90',
    installments: '3x de R$ 10,60',
  }
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card' | 'boleto'>('pix');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [installments, setInstallments] = useState('1');
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    setIsSuccess(true);
  };

  const simulatedPixCode = `00020126580014br.gov.bcb.pix0136pequenosmusicos@pagamentos.com.br520400005303986540${plan.price.toFixed(2)}5802BR5925PEQUENOS MUSICOS ATIVIDADES6009SAO PAULO62070503***6304E8A2`;

  const copyPixCode = () => {
    navigator.clipboard.writeText(simulatedPixCode);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-[#0f1b38] border border-amber-400/40 rounded-3xl shadow-2xl text-white overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Bar */}
        <div className="bg-gradient-to-r from-[#0d162d] via-[#142347] to-[#0d162d] p-4 sm:p-5 flex items-center justify-between border-b border-indigo-900/60">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-bold">🎵</span>
            <span className="text-sm sm:text-base font-bold text-white font-display">
              Checkout Seguro · {plan.name}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fechar janela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[82vh] overflow-y-auto">
          {isSuccess ? (
            /* Purchase Success State */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border-2 border-emerald-500/40 shadow-lg shadow-emerald-500/20">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                  Pagamento Confirmado com Sucesso!
                </span>
                <h3 className="text-2xl font-black text-white font-display">
                  Parabéns, {name || 'Educador(a)'}! Seu Acesso Foi Liberado!
                </h3>
                <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
                  Enviamos o link de download de todos os arquivos em PDF do <strong className="text-white">{plan.name}</strong> diretamente para o e-mail: <strong className="text-amber-300">{email || 'seu e-mail'}</strong>.
                </p>
              </div>

              {/* Instant download button */}
              <div className="p-6 rounded-2xl bg-[#14244a] border border-amber-400/40 max-w-md mx-auto space-y-4">
                <div className="text-xs font-semibold text-slate-300">
                  Ou baixe agora mesmo no seu dispositivo:
                </div>
                <a
                  href="/assets/aistudio/Pequenos_M_sicos__Atividades_Musicais_Infantis_d94bb9af.png"
                  download="Pequenos_Musicos_500_Atividades.png"
                  className="w-full py-4 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>BAIXAR ACERVO COMPLETO EM PDF</span>
                </a>
                <span className="text-[11px] text-slate-400 block">
                  Tamanho: Pacote Completo (500+ Atividades em Alta Resolução A4)
                </span>
              </div>

              <button
                onClick={onClose}
                className="text-xs text-slate-400 hover:text-white transition-colors underline cursor-pointer"
              >
                Voltar à página principal
              </button>
            </div>
          ) : (
            /* Checkout Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Direct Cakto Checkout Option */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/80 to-teal-950/80 border border-emerald-400/50 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm shrink-0 border border-emerald-500/40">
                    💳
                  </div>
                  <div>
                    <span className="text-xs font-black text-emerald-300 uppercase tracking-wider block">Checkout Oficial Cakto</span>
                    <p className="text-xs text-slate-300">Pague com PIX ou Cartão com aprovação imediata no Cakto</p>
                  </div>
                </div>
                <a
                  href={CAKTO_CHECKOUT_URL}
                  className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-white font-black text-xs rounded-xl shadow-md transition-all active:scale-95 text-center whitespace-nowrap"
                >
                  Pagar no Cakto Agora →
                </a>
              </div>

              {/* Product mini summary box */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#14244a] border border-indigo-800/60">
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-indigo-400/40 bg-slate-900 p-1">
                  <img
                    src={MASTER_PRODUCT_MOCKUP}
                    alt="Pequenos Músicos"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white truncate">{plan.name}</h4>
                    <span className="text-amber-400 font-black text-base">{plan.priceFormatted}</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Arquivos em PDF de Alta Definição · Acesso Imediato & Vitalício
                  </p>
                  <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1">
                    <Check className="w-3 h-3" />
                    <span>Garantia Incondicional de 7 Dias Inclusa</span>
                  </div>
                </div>
              </div>

              {/* Step 1: Customer Personal Details */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                  1. Seus Dados de Acesso (Para envio imediato do PDF)
                </span>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Nome Completo</label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#091122] border border-indigo-800/80 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Seu Melhor E-mail</label>
                    <input
                      type="email"
                      required
                      placeholder="seuemail@exemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#091122] border border-indigo-800/80 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">WhatsApp / Telefone</label>
                    <input
                      type="tel"
                      placeholder="(00) 00000-0000"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#091122] border border-indigo-800/80 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Payment Method Selector */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                  2. Escolha a Forma de Pagamento
                </span>

                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
                      paymentMethod === 'pix'
                        ? 'bg-amber-400 text-stone-950 font-bold border-amber-300 shadow-md'
                        : 'bg-[#14244a] text-slate-300 border-indigo-900 hover:border-slate-600'
                    }`}
                  >
                    <QrCode className="w-5 h-5" />
                    <span className="text-xs">PIX (Imediato)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
                      paymentMethod === 'card'
                        ? 'bg-amber-400 text-stone-950 font-bold border-amber-300 shadow-md'
                        : 'bg-[#14244a] text-slate-300 border-indigo-900 hover:border-slate-600'
                    }`}
                  >
                    <CreditCard className="w-5 h-5" />
                    <span className="text-xs">Cartão de Crédito</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('boleto')}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
                      paymentMethod === 'boleto'
                        ? 'bg-amber-400 text-stone-950 font-bold border-amber-300 shadow-md'
                        : 'bg-[#14244a] text-slate-300 border-indigo-900 hover:border-slate-600'
                    }`}
                  >
                    <FileText className="w-5 h-5" />
                    <span className="text-xs">Boleto</span>
                  </button>
                </div>

                {/* Conditional Payment Content */}
                {paymentMethod === 'pix' && (
                  <div className="p-4 rounded-2xl bg-[#0b1428] border border-amber-400/30 text-center space-y-3">
                    <div className="text-xs font-semibold text-emerald-400 flex items-center justify-center gap-1.5">                      Aprovação instantânea e envio imediato no seu e-mail!
                    </div>
                    
                    <div className="bg-white p-3 rounded-xl inline-block shadow-md">
                      <div className="w-32 h-32 bg-stone-100 flex items-center justify-center border border-stone-300 text-stone-900 text-xs font-mono text-center p-2 rounded">
                        [ QR CODE PIX {plan.priceFormatted} ]
                      </div>
                    </div>

                    <div className="text-xs text-slate-300">
                      Chave Copia e Cola ({plan.priceFormatted}):
                    </div>

                    <div className="flex items-center gap-2 max-w-md mx-auto">
                      <input
                        type="text"
                        readOnly
                        value={simulatedPixCode}
                        className="w-full text-xs px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 font-mono select-all truncate"
                      />
                      <button
                        type="button"
                        onClick={copyPixCode}
                        className="px-3 py-2 bg-amber-400 hover:bg-amber-300 text-stone-950 rounded-lg text-xs font-bold shrink-0 flex items-center gap-1.5 cursor-pointer"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>{copiedPix ? 'Copiado!' : 'Copiar'}</span>
                      </button>
                    </div>
                  </div>
                )}

                {paymentMethod === 'card' && (
                  <div className="p-4 rounded-2xl bg-[#0b1428] border border-indigo-900/60 space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Número do Cartão</label>
                      <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#091122] border border-indigo-800/80 text-white text-sm focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">Validade</label>
                        <input
                          type="text"
                          placeholder="MM/AA"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#091122] border border-indigo-800/80 text-white text-sm focus:outline-none focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#091122] border border-indigo-800/80 text-white text-sm focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Parcelamento</label>
                      <select
                        value={installments}
                        onChange={(e) => setInstallments(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#091122] border border-indigo-800/80 text-white text-sm focus:outline-none focus:border-amber-400"
                      >
                        <option value="1">1x de {plan.priceFormatted} (Sem juros)</option>
                        <option value="2">2x de R$ {(plan.price / 2 * 1.04).toFixed(2).replace('.', ',')}</option>
                        <option value="3">3x de R$ {(plan.price / 3 * 1.06).toFixed(2).replace('.', ',')}</option>
                      </select>
                    </div>
                  </div>
                )}

                {paymentMethod === 'boleto' && (
                  <div className="p-4 rounded-2xl bg-[#0b1428] border border-indigo-900/60 text-center text-xs text-slate-300">
                    O boleto bancário será emitido no valor de {plan.priceFormatted} e pode levar até 3 dias úteis para compensar. Para liberação imediata, utilize PIX ou Cartão de Crédito.
                  </div>
                )}
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 text-base font-black text-stone-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 rounded-xl shadow-lg shadow-amber-400/25 glow-btn transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
              >
                <Lock className="w-4 h-4 text-stone-950" />
                <span>FINALIZAR PEDIDO SEGURO ({plan.priceFormatted})</span>
              </button>

              <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Dados protegidos por criptografia de 256 bits · Garantia de 7 dias</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};