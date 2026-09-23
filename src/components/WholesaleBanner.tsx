import React from 'react';
import { FARM_CONTACT_INFO } from '../data/mockData';

interface WholesaleBannerProps {
  lineUrl?: string;
  phone?: string;
  phoneDisplay?: string;
}

export const WholesaleBanner: React.FC<WholesaleBannerProps> = ({
  lineUrl = FARM_CONTACT_INFO.lineUrl,
  phone = FARM_CONTACT_INFO.phone,
  phoneDisplay = FARM_CONTACT_INFO.phoneDisplay,
}) => {
  return (
    <section className="w-full px-4 py-4">
      <div className="max-w-4xl mx-auto">
        <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-[#2d6197] via-[#1e4d7d] to-[#144f84] text-white shadow-lg flex flex-col gap-4 relative overflow-hidden">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[24px] text-[#92c1fe]">inventory_2</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#d2e4ff]">
              สิทธิพิเศษสำหรับฟาร์ม
            </span>
          </div>

          <div className="flex flex-col gap-1 max-w-xl">
            <h3 className="text-lg sm:text-2xl font-black text-white leading-snug">
              โปรโมชั่นพิเศษสำหรับเกษตรกรผู้เลี้ยงกุ้ง
            </h3>
            <p className="text-xs sm:text-sm text-[#d2e4ff] leading-relaxed">
              สั่งซื้อยกลัง หรือ สั่งซื้อราคาส่งสำหรับฟาร์มกุ้งขนาดใหญ่ รับราคาพิเศษสุด พร้อมบริการจัดส่งด่วนถึงหน้าบ่อ และคำแนะนำการใช้งานเฉพาะบ่อ
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 rounded-full bg-[#85f8c4] hover:bg-[#68dba9] text-[#002114] text-sm font-bold flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>สอบถามราคาส่งทาง LINE</span>
            </a>

            <a
              href={`tel:${phone}`}
              className="h-12 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white text-sm font-bold flex items-center justify-center gap-2 active:scale-95 transition-all border border-white/20"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
              <span>โทรติดต่อฝ่ายขาย ({phoneDisplay})</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
