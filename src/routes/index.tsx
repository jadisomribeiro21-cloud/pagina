import { createFileRoute } from "@tanstack/react-router";
import React, { useState } from 'react';
import { HeroSection } from '@/components/landing/HeroSection';
import { ContentPreviewSection } from '@/components/landing/ContentPreviewSection';
import { PainSection } from '@/components/landing/PainSection';
import { BonusSection } from '@/components/landing/BonusSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { OfferSection } from '@/components/landing/OfferSection';
import { GuaranteeSection } from '@/components/landing/GuaranteeSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { Footer } from '@/components/landing/Footer';
import { CheckoutModal, PlanDetails } from '@/components/landing/CheckoutModal';
import { UpgradeModal } from '@/components/landing/UpgradeModal';

function App() {
  const [selectedPlan, setSelectedPlan] = useState<PlanDetails>({
    name: 'Plano Premium (+500 Atividades + 3 Bônus)',
    price: 29.90,
    priceFormatted: 'R$ 29,90',
    installments: '3x de R$ 10,64',
    isPopular: true,
  });

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  // Directly opens checkout simulator with a specified plan
  const handleSelectPlan = (plan: PlanDetails) => {
    setSelectedPlan(plan);
    setIsCheckoutOpen(true);
  };

  // Called when user clicks "QUERO O PLANO BÁSICO" (triggers mundobuba upgrade flow)
  const handleRequestUpgrade = () => {
    setIsUpgradeModalOpen(true);
  };

  // When user accepts the upgrade for R$ 24,90
  const handleAcceptUpgrade = () => {
    setIsUpgradeModalOpen(false);
    setSelectedPlan({
      name: 'Plano Premium Especial (Oferta de Upgrade)',
      price: 24.90,
      priceFormatted: 'R$ 24,90',
      installments: '2x de R$ 12,95',
      isPopular: true,
    });
    setIsCheckoutOpen(true);
  };

  // When user declines upgrade and stays with Plano Básico R$ 19,90
  const handleDeclineToBasic = () => {
    setIsUpgradeModalOpen(false);
    setSelectedPlan({
      name: 'Plano Básico (+500 Atividades Musicais)',
      price: 19.90,
      priceFormatted: 'R$ 19,90',
      installments: '2x de R$ 10,48',
      isPopular: false,
    });
    setIsCheckoutOpen(true);
  };

  // Default CTA from Hero, Navbar or Final CTA
  const handlePrimaryCta = () => {
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setSelectedPlan({
        name: 'Plano Premium (+500 Atividades + 3 Bônus)',
        price: 29.90,
        priceFormatted: 'R$ 29,90',
        installments: '3x de R$ 10,64',
        isPopular: true,
      });
      setIsCheckoutOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#09152e] text-stone-100 flex flex-col font-sans selection:bg-amber-400 selection:text-stone-950">
      {/* 1. Primeira Dobra — Hero Section */}
      <HeroSection onOpenCheckout={handlePrimaryCta} />

      {/* 2. O que você vai encontrar dentro do material & Galeria Interativa com fotos reais */}
      <ContentPreviewSection />

      {/* 3. Seção de Identificação: Sem o material vs Com o material */}
      <PainSection />

      {/* 4. 3 Bônus Especiais no Plano Premium */}
      <BonusSection onOpenCheckout={handlePrimaryCta} />

      {/* 5. Depoimentos reais de professores e educadores */}
      <TestimonialsSection />

      {/* 6. SEÇÃO OFERTA (#oferta): Plano Básico R$ 19,90 vs Plano Premium R$ 29,90 com Cronômetro */}
      <OfferSection 
        onSelectPlan={handleSelectPlan} 
        onRequestUpgrade={handleRequestUpgrade} 
      />

      {/* 7. Garantia Incondicional de 7 Dias */}
      <GuaranteeSection onOpenCheckout={handlePrimaryCta} />

      {/* 8. Perguntas Frequentes (7 FAQs exatas) */}
      <FaqSection />

      {/* 9. Rodapé Oficial */}
      <Footer />

      {/* Interactive Checkout Modal (PIX, Cartão, Boleto) */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
        plan={selectedPlan}
      />

      {/* Interactive Upgrade Modal (modeled directly on mundobuba.com) */}
      <UpgradeModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
        onAcceptUpgrade={handleAcceptUpgrade}
        onDeclineToBasic={handleDeclineToBasic}
      />
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "+500 Atividades Musicais Infantis — Pequenos Músicos" },
      { name: "description", content: "Tenha +500 atividades musicais prontas para imprimir e aplicar com as crianças, sem passar horas procurando ideias." },
      { property: "og:title", content: "+500 Atividades Musicais Infantis — Material Pronto para Imprimir" },
      { property: "og:description", content: "Aprenda Música Brincando! O acervo de musicalização infantil completo para famílias e professores." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: App,
});