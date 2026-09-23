import React from 'react';
import { ActiveTab } from '../types';
import { FARM_CONTACT_INFO } from '../data/mockData';

interface BottomNavProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  cartCount: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onTabChange,
  cartCount,
}) => {
  return (
    <>
      {/* Floating Quick Action Button: ทักแชต LINE สั่งด่วน */}
      {activeTab !== 'cart' && (
        <aside className="fixed bottom-20 right-4 z-30 animate-in fade-in zoom-in-95 duration-300">
          <a
            href={FARM_CONTACT_INFO.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 px-4 rounded-full bg-[#006948] hover:bg-[#005137] text-white text-xs font-bold flex items-center gap-1.5 shadow-[0_8px_20px_rgba(0,105,72,0.35)] active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>ทักแชต LINE สั่งด่วน</span>
          </a>
        </aside>
      )}

      {/* Fixed Bottom Navigation Bar */}
      <nav className="fixed bottom-0 inset-x-0 z-40 pb-safe bg-[#faf8ff]/95 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.06)] border-t border-slate-100">
        <div className="max-w-md mx-auto flex justify-around items-center h-16 px-2">
          {/* Home */}
          <button
            type="button"
            onClick={() => onTabChange('home')}
            className={`flex flex-col items-center justify-center min-w-[56px] h-12 gap-0.5 transition-colors ${
              activeTab === 'home'
                ? 'text-[#006948] font-bold'
                : 'text-[#3d4a42] hover:text-[#131b2e]'
            }`}
          >
            <span
              className="material-symbols-outlined text-[22px]"
              style={{
                fontVariationSettings: activeTab === 'home' ? "'FILL' 1" : "'FILL' 0",
              }}
            >
              home
            </span>
            <span className="text-[11px] leading-none">หน้าแรก</span>
          </button>

          {/* Products */}
          <button
            type="button"
            onClick={() => onTabChange('products')}
            className={`flex flex-col items-center justify-center min-w-[56px] h-12 gap-0.5 transition-colors ${
              activeTab === 'products'
                ? 'text-[#006948] font-bold'
                : 'text-[#3d4a42] hover:text-[#131b2e]'
            }`}
          >
            <span
              className="material-symbols-outlined text-[22px]"
              style={{
                fontVariationSettings: activeTab === 'products' ? "'FILL' 1" : "'FILL' 0",
              }}
            >
              water_drop
            </span>
            <span className="text-[11px] leading-none">สินค้า</span>
          </button>

          {/* Cart */}
          <button
            type="button"
            onClick={() => onTabChange('cart')}
            className={`flex flex-col items-center justify-center min-w-[56px] h-12 gap-0.5 transition-colors relative ${
              activeTab === 'cart'
                ? 'text-[#006948] font-bold'
                : 'text-[#3d4a42] hover:text-[#131b2e]'
            }`}
          >
            <span
              className="material-symbols-outlined text-[22px]"
              style={{
                fontVariationSettings: activeTab === 'cart' ? "'FILL' 1" : "'FILL' 0",
              }}
            >
              shopping_basket
            </span>
            <span className="text-[11px] leading-none">ตะกร้า</span>
            {cartCount > 0 && (
              <span className="absolute top-1.5 right-3 w-4 h-4 rounded-full bg-[#006948] text-white text-[9px] font-bold flex items-center justify-center shadow-xs">
                {cartCount}
              </span>
            )}
          </button>

          {/* Articles */}
          <button
            type="button"
            onClick={() => onTabChange('articles')}
            className={`flex flex-col items-center justify-center min-w-[56px] h-12 gap-0.5 transition-colors ${
              activeTab === 'articles'
                ? 'text-[#006948] font-bold'
                : 'text-[#3d4a42] hover:text-[#131b2e]'
            }`}
          >
            <span
              className="material-symbols-outlined text-[22px]"
              style={{
                fontVariationSettings: activeTab === 'articles' ? "'FILL' 1" : "'FILL' 0",
              }}
            >
              menu_book
            </span>
            <span className="text-[11px] leading-none">บทความ</span>
          </button>

          {/* Contact */}
          <button
            type="button"
            onClick={() => onTabChange('contact')}
            className={`flex flex-col items-center justify-center min-w-[56px] h-12 gap-0.5 transition-colors ${
              activeTab === 'contact'
                ? 'text-[#006948] font-bold'
                : 'text-[#3d4a42] hover:text-[#131b2e]'
            }`}
          >
            <span
              className="material-symbols-outlined text-[22px]"
              style={{
                fontVariationSettings: activeTab === 'contact' ? "'FILL' 1" : "'FILL' 0",
              }}
            >
              support_agent
            </span>
            <span className="text-[11px] leading-none">ติดต่อ</span>
          </button>
        </div>
      </nav>
    </>
  );
};
