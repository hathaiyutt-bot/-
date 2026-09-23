import React from 'react';
import { OFFICIAL_IMAGES, FARM_CONTACT_INFO } from '../data/mockData';
import { FarmContactConfig } from './LineSettingsModal';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSurvey: () => void;
  contactConfig?: FarmContactConfig;
  onOpenLineSettings?: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  cartCount,
  onOpenCart,
  onOpenSurvey,
  contactConfig = FARM_CONTACT_INFO,
  onOpenLineSettings,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#131b2e]/60 backdrop-blur-xs flex flex-col justify-end sm:justify-center items-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div
        className="w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl p-5 flex flex-col gap-4 shadow-2xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <h2 className="text-base font-bold text-[#131b2e]">
            โปรไฟล์เกษตรกรผู้ใช้งาน
          </h2>
          <button
            type="button"
            aria-label="ปิด"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#f2f3ff] border border-slate-100">
          <img
            src={OFFICIAL_IMAGES.userAvatar}
            alt="โปรไฟล์ฟาร์ม"
            className="w-14 h-14 rounded-full object-cover ring-2 ring-[#006948]"
          />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-900">
              สมศักดิ์ วงศ์เจริญฟาร์ม
            </span>
            <span className="text-xs text-[#006948] font-semibold">
              สมาชิกฟาร์มกุ้งระดับพรีเมียม (Gold Tier)
            </span>
            <span className="text-[11px] text-slate-500">
              สุพรรณบุรี · กุ้งขาวแวนนาไม 4 บ่อ
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-center text-xs">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-slate-400 block text-[10px]">ตะกร้าค้างชำระ</span>
            <span className="text-lg font-bold text-[#006948]">{cartCount} รายการ</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-slate-400 block text-[10px]">คูปองสะสม</span>
            <span className="text-lg font-bold text-[#2d6197]">2 โค้ด</span>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 pt-1">
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenCart();
            }}
            className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#006948] text-[20px]">shopping_bag</span>
              <span>ตรวจสอบตะกร้าสินค้า ({cartCount})</span>
            </div>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenSurvey();
            }}
            className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-amber-600 text-[20px]">assignment</span>
              <span>ทำแบบสอบถามรับคูปอง ฿50</span>
            </div>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>

          {onOpenLineSettings && (
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenLineSettings();
              }}
              className="p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 flex items-center justify-between text-xs font-semibold text-emerald-900 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#006948] text-[20px]">settings</span>
                <span>ตั้งค่า LINE OA ของร้าน ({contactConfig.lineId})</span>
              </div>
              <span className="material-symbols-outlined text-[16px] text-emerald-700">edit</span>
            </button>
          )}

          <a
            href={contactConfig.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#006948] text-[20px]">chat</span>
              <span>ติดต่อแอดมินทาง LINE ({contactConfig.lineId})</span>
            </div>
            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
          </a>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-full py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 text-center transition-colors"
        >
          ปิดหน้าต่าง
        </button>
      </div>
    </div>
  );
};
