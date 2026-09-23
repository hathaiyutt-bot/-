/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ARTICLES, FAQS, PRODUCTS, REVIEWS, FARM_CONTACT_INFO } from './data/mockData';
import { CartItem, Product, ActiveTab } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HighlightCards } from './components/HighlightCards';
import { ProductCatalog } from './components/ProductCatalog';
import { MascotBanner } from './components/MascotBanner';
import { WhyChooseUs } from './components/WhyChooseUs';
import { UsageGuide } from './components/UsageGuide';
import { ReviewsSection } from './components/ReviewsSection';
import { WholesaleBanner } from './components/WholesaleBanner';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { CartView } from './components/CartView';
import { ProductDetailModal } from './components/ProductDetailModal';
import { BankTransferModal } from './components/BankTransferModal';
import { LineRichMenuModal } from './components/LineRichMenuModal';
import { LineSettingsModal, FarmContactConfig } from './components/LineSettingsModal';
import { SurveyModal } from './components/SurveyModal';
import { ArticlesModal } from './components/ArticlesModal';
import { ProfileModal } from './components/ProfileModal';
import { BottomNav } from './components/BottomNav';
import { Toast } from './components/Toast';

export default function App() {
  // Initialize contact configuration (supports custom LINE OA)
  const [contactConfig, setContactConfig] = useState<FarmContactConfig>(() => {
    try {
      const saved = localStorage.getItem('custom_farm_contact_info');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return FARM_CONTACT_INFO;
  });

  const [isLineSettingsOpen, setIsLineSettingsOpen] = useState<boolean>(false);

  // Initialize cart with the 2 default items as showcased in the user's mockup
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: PRODUCTS[0], // น้ำหมักผสมอาหารกุ้ง (สูตรเข้มข้น)
      quantity: 2,
    },
    {
      product: PRODUCTS[1], // โปรไบโอติกชนิดผงสำหรับบ่อกุ้ง
      quantity: 1,
    },
  ]);

  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isRichMenuOpen, setIsRichMenuOpen] = useState<boolean>(false);
  const [isSurveyOpen, setIsSurveyOpen] = useState<boolean>(false);
  const [isArticlesOpen, setIsArticlesOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [bankTransferOrder, setBankTransferOrder] = useState<any | null>(null);

  const [toast, setToast] = useState<{
    show: boolean;
    title: string;
    desc: string;
    icon?: string;
  } | null>(null);

  const showToast = (title: string, desc: string, icon = 'check_circle') => {
    setToast({ show: true, title, desc, icon });
    setTimeout(() => {
      setToast(null);
    }, 2800);
  };

  const handleAddToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`เพิ่ม "${product.name}"`, `จำนวน ${quantity} ${product.unit} ลงในตะกร้าแล้ว`);
  };

  const handleUpdateQty = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('ลบสินค้าสำเร็จ', 'อัปเดตรายการในตะกร้าเรียบร้อย', 'delete');
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleTabChange = (tab: ActiveTab) => {
    if (tab === 'articles') {
      setIsArticlesOpen(true);
      return;
    }
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveContactConfig = (newConfig: FarmContactConfig) => {
    setContactConfig(newConfig);
    try {
      localStorage.setItem('custom_farm_contact_info', JSON.stringify(newConfig));
    } catch {
      // ignore
    }
    showToast('บันทึกการตั้งค่า LINE สำเร็จ!', `ลิงก์เชื่อมต่อกับ ${newConfig.lineId} เรียบร้อยแล้ว`, 'verified');
  };

  const handleResetContactConfig = () => {
    setContactConfig(FARM_CONTACT_INFO);
    try {
      localStorage.removeItem('custom_farm_contact_info');
    } catch {
      // ignore
    }
    showToast('คืนค่าเริ่มต้นสำเร็จ', `ใช้ LINE OA: ${FARM_CONTACT_INFO.lineId}`, 'refresh');
  };

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#131b2e] flex flex-col font-sans selection:bg-emerald-200">
      {/* If Cart tab is active, render full CartView screen */}
      {activeTab === 'cart' ? (
        <CartView
          cart={cart}
          onUpdateQty={handleUpdateQty}
          onRemoveItem={handleRemoveItem}
          onBack={() => setActiveTab('home')}
          onOpenBankTransfer={(details) => setBankTransferOrder(details)}
          onShowToast={showToast}
          contactConfig={contactConfig}
          onOpenLineSettings={() => setIsLineSettingsOpen(true)}
        />
      ) : (
        <>
          {/* Top Header */}
          <Header
            cartCount={totalCartCount}
            onOpenCart={() => setActiveTab('cart')}
            onOpenRichMenu={() => setIsRichMenuOpen(true)}
            onOpenProfile={() => setIsProfileOpen(true)}
            lineId={contactConfig.lineId}
            onOpenLineSettings={() => setIsLineSettingsOpen(true)}
          />

          <main className="flex-1 w-full pt-16 pb-24">
            {activeTab === 'home' && (
              <>
                <Hero
                  onExploreProducts={() => {
                    const el = document.getElementById('featured-products');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  onOpenSurvey={() => setIsSurveyOpen(true)}
                  lineUrl={contactConfig.lineUrl}
                />
                <HighlightCards />
                <ProductCatalog
                  onAddToCart={handleAddToCart}
                  onSelectProduct={(p) => setSelectedProduct(p)}
                />
                <MascotBanner />
                <WhyChooseUs />
                <UsageGuide />
                <ReviewsSection />
                <WholesaleBanner
                  lineUrl={contactConfig.lineUrl}
                  phone={contactConfig.phone}
                  phoneDisplay={contactConfig.phoneDisplay}
                />
                <AboutSection />
                <FaqSection />
                <ContactSection
                  contactConfig={contactConfig}
                  onOpenLineSettings={() => setIsLineSettingsOpen(true)}
                />
              </>
            )}

            {activeTab === 'products' && (
              <>
                <div className="pt-2">
                  <ProductCatalog
                    onAddToCart={handleAddToCart}
                    onSelectProduct={(p) => setSelectedProduct(p)}
                  />
                  <WholesaleBanner
                    lineUrl={contactConfig.lineUrl}
                    phone={contactConfig.phone}
                    phoneDisplay={contactConfig.phoneDisplay}
                  />
                  <UsageGuide />
                </div>
              </>
            )}

            {activeTab === 'contact' && (
              <>
                <div className="pt-2">
                  <ContactSection
                    contactConfig={contactConfig}
                    onOpenLineSettings={() => setIsLineSettingsOpen(true)}
                  />
                  <WholesaleBanner
                    lineUrl={contactConfig.lineUrl}
                    phone={contactConfig.phone}
                    phoneDisplay={contactConfig.phoneDisplay}
                  />
                  <FaqSection />
                  <AboutSection />
                </div>
              </>
            )}

            {activeTab === 'faq' && (
              <>
                <div className="pt-2">
                  <FaqSection />
                  <ContactSection
                    contactConfig={contactConfig}
                    onOpenLineSettings={() => setIsLineSettingsOpen(true)}
                  />
                </div>
              </>
            )}
          </main>

          {/* Bottom Navigation */}
          <BottomNav
            activeTab={activeTab}
            onTabChange={handleTabChange}
            cartCount={totalCartCount}
          />
        </>
      )}

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Bank Transfer Modal */}
      <BankTransferModal
        orderDetails={bankTransferOrder}
        onClose={() => setBankTransferOrder(null)}
        onOrderCompleted={() => {
          setCart([]);
          setActiveTab('home');
          showToast('บันทึกคำสั่งซื้อแล้ว', 'ขอบคุณที่ไว้วางใจกุ้งน้อยโปรไบโอติก', 'verified');
        }}
      />

      {/* LINE Rich Menu Modal */}
      <LineRichMenuModal
        isOpen={isRichMenuOpen}
        onClose={() => setIsRichMenuOpen(false)}
        onNavigateTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSurvey={() => setIsSurveyOpen(true)}
        onOpenArticles={() => setIsArticlesOpen(true)}
        contactConfig={contactConfig}
        onOpenLineSettings={() => setIsLineSettingsOpen(true)}
      />

      {/* LINE OA Settings Modal */}
      <LineSettingsModal
        isOpen={isLineSettingsOpen}
        onClose={() => setIsLineSettingsOpen(false)}
        contactConfig={contactConfig}
        onSaveConfig={handleSaveContactConfig}
        onResetDefault={handleResetContactConfig}
      />

      {/* Survey Modal */}
      <SurveyModal
        isOpen={isSurveyOpen}
        onClose={() => setIsSurveyOpen(false)}
        onApplyRewardCoupon={(code) => {
          showToast(`รับโค้ดส่วนลด ${code} สำเร็จ!`, 'มูลค่า ฿50 สำหรับใช้ในตะกร้าสินค้า', 'card_giftcard');
        }}
      />

      {/* Aquaculture Articles Modal */}
      <ArticlesModal
        isOpen={isArticlesOpen}
        onClose={() => setIsArticlesOpen(false)}
      />

      {/* Farm User Profile Modal */}
      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        cartCount={totalCartCount}
        onOpenCart={() => setActiveTab('cart')}
        onOpenSurvey={() => setIsSurveyOpen(true)}
        contactConfig={contactConfig}
        onOpenLineSettings={() => setIsLineSettingsOpen(true)}
      />

      {/* Toast Notification */}
      <Toast toast={toast} onOpenCart={() => setActiveTab('cart')} />
    </div>
  );
}
