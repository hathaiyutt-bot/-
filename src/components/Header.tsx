import React from 'react';
import { OFFICIAL_IMAGES } from '../data/mockData';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenRichMenu: () => void;
  onOpenProfile: () => void;
  lineId?: string;
  onOpenLineSettings?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenRichMenu,
  onOpenProfile,
  lineId = '@883nmhsl',
  onOpenLineSettings,
}) => {
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-[#faf8ff]/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.05)] pt-safe border-b border-slate-100">
      <div className="max-w-4xl mx-auto h-16 px-4 flex items-center justify-between gap-2">
        {/* Left: Menu & Brand Logo */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="เปิดเมนูทางลัด LINE"
            onClick={onOpenRichMenu}
            className="w-10 h-10 flex items-center justify-center rounded-full text-[#131b2e] hover:bg-[#eaedff] active:scale-95 transition-all"
            title="เปิดเมนูทางลัด LINE"
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>

          <a href="#" className="flex items-center gap-2 group">
            <img
              src={OFFICIAL_IMAGES.logo}
              alt="กุ้งน้อยโปรไบโอติก"
              className="h-9 w-auto object-contain drop-shadow-sm transition-transform group-hover:scale-105"
            />
          </a>
        </div>

        {/* Right: Quick Rich Menu Pill, LINE Settings, Cart & Profile */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {onOpenLineSettings && (
            <button
              type="button"
              onClick={onOpenLineSettings}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] sm:text-xs font-semibold border border-emerald-200/80 hover:bg-emerald-100 transition-colors shadow-2xs"
              title="คลิกเพื่อเปลี่ยนลิงก์ LINE OA ของคุณ"
            >
              <span className="w-2 h-2 rounded-full bg-[#06c755] animate-pulse"></span>
              <span className="hidden xs:inline text-emerald-700">LINE:</span>
              <span className="font-bold text-[#006948] max-w-[85px] sm:max-w-[110px] truncate">{lineId}</span>
              <span className="material-symbols-outlined text-[14px] text-emerald-600">settings</span>
            </button>
          )}

          <button
            type="button"
            onClick={onOpenRichMenu}
            className="hidden md:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 hover:bg-slate-200 transition-colors"
          >
            <span>เมนู LINE ▾</span>
          </button>

          <button
            type="button"
            aria-label="เปิดตะกร้าสินค้า"
            onClick={onOpenCart}
            className="relative w-11 h-11 flex items-center justify-center rounded-full bg-[#f2f3ff] text-[#2d6197] hover:bg-[#e2e7ff] active:scale-95 transition-all shadow-sm"
          >
            <span className="material-symbols-outlined text-[24px]">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 min-w-[20px] h-5 px-1 flex items-center justify-center rounded-full bg-[#006948] text-white text-[11px] font-bold shadow-[0_2px_6px_rgba(0,105,72,0.35)] animate-in fade-in zoom-in duration-200">
                {cartCount}
              </span>
            )}
          </button>

          <button
            type="button"
            aria-label="โปรไฟล์ผู้ใช้งาน"
            onClick={onOpenProfile}
            className="w-9 h-9 rounded-full ring-2 ring-emerald-500/30 overflow-hidden hover:opacity-90 active:scale-95 transition-all shrink-0"
          >
            <img
              src={OFFICIAL_IMAGES.userAvatar}
              alt="โปรไฟล์ฟาร์ม"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>
    </header>
  );
};
