import React from 'react';
import { FARM_CONTACT_INFO } from '../data/mockData';
import { FarmContactConfig } from './LineSettingsModal';

interface ContactSectionProps {
  contactConfig?: FarmContactConfig;
  onOpenLineSettings?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  contactConfig = FARM_CONTACT_INFO,
  onOpenLineSettings,
}) => {
  return (
    <section className="w-full px-4 py-8 bg-[#faf8ff]" id="contact">
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        <div className="flex flex-col">
          <span className="text-[11px] font-bold text-[#006948] uppercase tracking-wider">
            Direct Support
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-[#131b2e]">
            ช่องทางติดต่อเรา
          </h2>
          <p className="text-xs text-[#3d4a42]">
            ติดต่อสอบถามข้อมูล สั่งซื้อสินค้า หรือขอรับคำปรึกษาปัญหาบ่อกุ้ง
          </p>
        </div>

        <div className="p-5 sm:p-6 rounded-3xl bg-[#f2f3ff] flex flex-col gap-4 shadow-xs border border-slate-100">
          <div className="flex flex-col gap-3.5">
            {/* Phone */}
            <a
              href={`tel:${contactConfig.phone}`}
              className="flex items-center gap-3 text-[#131b2e] hover:text-[#006948] transition-colors p-2 rounded-xl hover:bg-white"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#006948] shrink-0 shadow-2xs">
                <span className="material-symbols-outlined text-[20px]">call</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-[#3d4a42]">เบอร์โทรศัพท์ติดต่อ</span>
                <span className="text-sm sm:text-base font-bold text-[#131b2e]">
                  {contactConfig.phoneDisplay}
                </span>
              </div>
            </a>

            {/* LINE with Quick Edit Button */}
            <div className="flex items-center justify-between p-2 rounded-xl hover:bg-white transition-colors">
              <a
                href={contactConfig.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#131b2e] hover:text-[#006948] flex-1"
              >
                <div className="w-10 h-10 rounded-full bg-[#85f8c4] flex items-center justify-center text-[#002114] shrink-0 shadow-2xs">
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-[#3d4a42] flex items-center gap-1">
                    <span>LINE Official Account</span>
                    <span className="text-[10px] text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded font-medium">เชื่อมต่อแล้ว</span>
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[#131b2e]">
                    {contactConfig.lineId}
                  </span>
                </div>
              </a>

              {onOpenLineSettings && (
                <button
                  type="button"
                  onClick={onOpenLineSettings}
                  className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-200 flex items-center gap-1 transition-colors shadow-2xs"
                  title="คลิกเพื่อตั้งค่า LINE OA ของคุณ"
                >
                  <span className="material-symbols-outlined text-[15px]">edit</span>
                  <span className="hidden sm:inline">เปลี่ยนไอดี</span>
                </button>
              )}
            </div>

            {/* Facebook */}
            <div className="flex items-center gap-3 text-[#131b2e] p-2 rounded-xl hover:bg-white">
              <div className="w-10 h-10 rounded-full bg-[#d2e4ff] flex items-center justify-center text-[#07497d] shrink-0 shadow-2xs">
                <span className="material-symbols-outlined text-[20px]">thumb_up</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-[#3d4a42]">Facebook Fanpage</span>
                <span className="text-sm sm:text-base font-bold text-[#131b2e]">
                  {FARM_CONTACT_INFO.facebook}
                </span>
              </div>
            </div>

            {/* TikTok */}
            <div className="flex items-center gap-3 text-[#131b2e] p-2 rounded-xl hover:bg-white">
              <div className="w-10 h-10 rounded-full bg-[#c9e6ff] flex items-center justify-center text-[#004c6e] shrink-0 shadow-2xs">
                <span className="material-symbols-outlined text-[20px]">play_arrow</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-[#3d4a42]">TikTok</span>
                <span className="text-sm sm:text-base font-bold text-[#131b2e]">
                  {FARM_CONTACT_INFO.tiktok}
                </span>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 text-[#131b2e] p-2 pt-1">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#6d7a72] shrink-0 mt-0.5 shadow-2xs">
                <span className="material-symbols-outlined text-[20px]">location_on</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-[#3d4a42]">ศูนย์บริการและกระจายสินค้า</span>
                <span className="text-xs sm:text-sm font-semibold text-[#131b2e] leading-relaxed">
                  {FARM_CONTACT_INFO.address}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200/60">
            <a
              href={`tel:${FARM_CONTACT_INFO.phone}`}
              className="h-11 rounded-full bg-white hover:bg-slate-100 text-[#131b2e] text-xs font-bold flex items-center justify-center active:scale-95 transition-all text-center border border-slate-200"
            >
              <span>โทรออก</span>
            </a>
            <a
              href={FARM_CONTACT_INFO.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 rounded-full bg-[#006948] hover:bg-[#005137] text-white text-xs font-bold flex items-center justify-center active:scale-95 transition-all text-center shadow-xs"
            >
              <span>แอด LINE</span>
            </a>
            <a
              href={FARM_CONTACT_INFO.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 rounded-full bg-[#2d6197] hover:bg-[#1e4d7d] text-white text-xs font-bold flex items-center justify-center active:scale-95 transition-all text-center shadow-xs"
            >
              <span>ทักเพจ</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
