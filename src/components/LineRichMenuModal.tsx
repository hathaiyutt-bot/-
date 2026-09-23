import React from 'react';
import { OFFICIAL_IMAGES, FARM_CONTACT_INFO } from '../data/mockData';
import { FarmContactConfig } from './LineSettingsModal';

interface LineRichMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateTab: (tab: 'home' | 'products' | 'cart' | 'articles' | 'contact') => void;
  onOpenSurvey: () => void;
  onOpenArticles: () => void;
  contactConfig?: FarmContactConfig;
  onOpenLineSettings?: () => void;
}

export const LineRichMenuModal: React.FC<LineRichMenuModalProps> = ({
  isOpen,
  onClose,
  onNavigateTab,
  onOpenSurvey,
  onOpenArticles,
  contactConfig = FARM_CONTACT_INFO,
  onOpenLineSettings,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#131b2e]/60 backdrop-blur-xs flex flex-col justify-end sm:justify-center items-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div
        className="w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-3xl p-5 flex flex-col gap-4 shadow-2xl max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-bold text-[#006948] uppercase tracking-wider">
              LINE Official Rich Menu
            </span>
          </div>
          <button
            type="button"
            aria-label="ปิดเมนู"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Mascot Banner in Rich Menu */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 text-white flex items-center justify-between relative overflow-hidden shadow-md">
          <div className="flex flex-col gap-1 z-10">
            <div className="text-xs font-bold bg-white/20 text-white px-2.5 py-0.5 rounded-full self-start backdrop-blur-xs">
              เมนูลัดฟาร์มกุ้ง
            </div>
            <h3 className="text-lg font-black tracking-tight leading-snug">
              กุ้งน้อย โปรไบโอติก
            </h3>
            <p className="text-[11px] text-emerald-100">
              เพื่อกุ้งแข็งแรง โตไว น้ำใส ไร้กลิ่น 💧
            </p>
          </div>
          <div className="w-16 h-16 shrink-0 relative z-10">
            <img
              src={OFFICIAL_IMAGES.mascotSticker}
              alt="มาสคอต"
              className="w-full h-full object-contain drop-shadow-md"
            />
          </div>
        </div>

        {/* 6 Rich Menu Tiles Grid */}
        <div className="grid grid-cols-3 gap-2.5">
          {/* Tile 1: เว็บไซต์ */}
          <button
            type="button"
            onClick={() => {
              onNavigateTab('home');
              onClose();
            }}
            className="p-3 rounded-2xl bg-[#f0fdf4] hover:bg-[#dcfce7] border border-emerald-100 flex flex-col items-center text-center gap-1.5 active:scale-95 transition-all shadow-2xs group"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[22px]">language</span>
            </div>
            <span className="text-xs font-bold text-slate-800">เว็บไซต์</span>
            <span className="text-[10px] text-slate-500 leading-tight">หน้าแรกของฟาร์ม</span>
          </button>

          {/* Tile 2: แบบสอบถาม */}
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenSurvey();
            }}
            className="p-3 rounded-2xl bg-[#fffbeb] hover:bg-[#fef3c7] border border-amber-100 flex flex-col items-center text-center gap-1.5 active:scale-95 transition-all shadow-2xs group"
          >
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[22px]">assignment</span>
            </div>
            <span className="text-xs font-bold text-slate-800">แบบสอบถาม</span>
            <span className="text-[10px] text-amber-700 font-bold leading-tight">รับคูปอง ฿50</span>
          </button>

          {/* Tile 3: สินค้า */}
          <button
            type="button"
            onClick={() => {
              onNavigateTab('products');
              onClose();
            }}
            className="p-3 rounded-2xl bg-[#f0f9ff] hover:bg-[#e0f2fe] border border-sky-100 flex flex-col items-center text-center gap-1.5 active:scale-95 transition-all shadow-2xs group"
          >
            <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
            </div>
            <span className="text-xs font-bold text-slate-800">สินค้า</span>
            <span className="text-[10px] text-slate-500 leading-tight">สูตรผสมอาหาร</span>
          </button>

          {/* Tile 4: ติดต่อเรา */}
          <button
            type="button"
            onClick={() => {
              onNavigateTab('contact');
              onClose();
            }}
            className="p-3 rounded-2xl bg-[#fdf2f8] hover:bg-[#fce7f3] border border-pink-100 flex flex-col items-center text-center gap-1.5 active:scale-95 transition-all shadow-2xs group"
          >
            <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[22px]">support_agent</span>
            </div>
            <span className="text-xs font-bold text-slate-800">ติดต่อเรา</span>
            <span className="text-[10px] text-slate-500 leading-tight">ปรึกษาผู้เชี่ยวชาญ</span>
          </button>

          {/* Tile 5: บทความ */}
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenArticles();
            }}
            className="p-3 rounded-2xl bg-[#faf5ff] hover:bg-[#f3e8ff] border border-purple-100 flex flex-col items-center text-center gap-1.5 active:scale-95 transition-all shadow-2xs group"
          >
            <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[22px]">menu_book</span>
            </div>
            <span className="text-xs font-bold text-slate-800">บทความ</span>
            <span className="text-[10px] text-slate-500 leading-tight">เทคนิคการเลี้ยง</span>
          </button>

          {/* Tile 6: ข่าวสาร/กิจกรรม */}
          <a
            href={contactConfig.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-2xl bg-[#f8fafc] hover:bg-[#f1f5f9] border border-slate-200 flex flex-col items-center text-center gap-1.5 active:scale-95 transition-all shadow-2xs group"
          >
            <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[22px]">campaign</span>
            </div>
            <span className="text-xs font-bold text-slate-800">ข่าวสาร</span>
            <span className="text-[10px] text-slate-500 leading-tight">โปรโมชั่นฟาร์ม</span>
          </a>
        </div>

        {/* Direct LINE Action & Settings */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span>LINE OA: <strong>{contactConfig.lineId}</strong></span>
            {onOpenLineSettings && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenLineSettings();
                }}
                className="text-[11px] text-[#006948] hover:underline bg-emerald-50 px-2 py-0.5 rounded font-semibold"
              >
                เปลี่ยนไอดี
              </button>
            )}
          </div>
          <a
            href={contactConfig.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#006948] hover:underline flex items-center gap-1"
          >
            <span>เปิดใน LINE</span>
            <span className="material-symbols-outlined text-[14px]">open_in_new</span>
          </a>
        </div>
      </div>
    </div>
  );
};
