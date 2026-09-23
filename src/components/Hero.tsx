import React from 'react';
import { OFFICIAL_IMAGES, FARM_CONTACT_INFO } from '../data/mockData';

interface HeroProps {
  onExploreProducts: () => void;
  onOpenSurvey: () => void;
  lineUrl?: string;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onOpenSurvey,
  lineUrl = FARM_CONTACT_INFO.lineUrl,
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f2f3ff] via-[#faf8ff] to-[#faf8ff] px-4 pt-3 pb-6 flex flex-col gap-4">
      <div className="max-w-4xl mx-auto w-full flex flex-col gap-4">
        {/* Banner with Aquaculture Pond Photo */}
        <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-lg bg-[#283044] aspect-[16/10] sm:aspect-[21/9]">
          <img
            src={OFFICIAL_IMAGES.heroPond}
            alt="กุ้งน้อยโปรไบโอติก เพื่อกุ้งแข็งแรง โตไว น้ำใส ไร้กลิ่น"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e]/95 via-[#131b2e]/45 to-transparent flex flex-col justify-end p-4 md:p-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#85f8c4] text-[#002114] self-start mb-2 backdrop-blur-md shadow-sm">
              <span className="material-symbols-outlined text-[16px] text-[#006948]">verified</span>
              <span className="text-[12px] font-bold">ดูแลกุ้งง่ายขึ้น เติมการดูแลที่ฟาร์มคุณมั่นใจ</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-black tracking-tight leading-snug">
              กุ้งน้อยโปรไบโอติก
            </h1>
            
            <p className="text-xs sm:text-sm text-slate-200 mt-1.5 line-clamp-2 max-w-xl font-normal leading-relaxed">
              ผลิตภัณฑ์น้ำหมักชีวภาพเข้มข้นผสมอาหารกุ้ง และสปอร์โปรไบโอติกบำบัดน้ำ เพื่อการดูแลกุ้งและการจัดการฟาร์มอย่างยั่งยืน
            </p>
          </div>
        </div>

        {/* Key Benefit Badges */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#eaedff] text-[#131b2e] whitespace-nowrap shadow-xs text-xs font-semibold">
            <span className="material-symbols-outlined text-[17px] text-[#006948]">biotech</span>
            <span>จุลินทรีย์คัดสรรคุณภาพ</span>
          </div>
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#eaedff] text-[#131b2e] whitespace-nowrap shadow-xs text-xs font-semibold">
            <span className="material-symbols-outlined text-[17px] text-[#006948]">savings</span>
            <span>ใช้งานง่าย ประหยัดต้นทุน</span>
          </div>
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#eaedff] text-[#131b2e] whitespace-nowrap shadow-xs text-xs font-semibold">
            <span className="material-symbols-outlined text-[17px] text-[#006948]">water</span>
            <span>สำหรับฟาร์มกุ้งทุกระยะ</span>
          </div>
          <button
            type="button"
            onClick={onOpenSurvey}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 hover:bg-amber-200 whitespace-nowrap shadow-xs text-xs font-bold transition-colors"
          >
            <span className="material-symbols-outlined text-[17px] text-amber-700">card_giftcard</span>
            <span>ทำแบบสอบถามรับส่วนลด ฿50</span>
          </button>
        </div>

        {/* Hero CTA Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          <button
            type="button"
            onClick={onExploreProducts}
            className="h-12 sm:h-13 py-3 px-4 rounded-full bg-[#2d6197] hover:bg-[#234c77] text-white text-sm sm:text-base font-bold flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            <span>เลือกซื้อสินค้า</span>
          </button>
          
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 sm:h-13 py-3 px-4 rounded-full bg-[#dae2fd] hover:bg-[#cbd6fb] text-[#2d6197] text-sm sm:text-base font-bold flex items-center justify-center gap-2 active:scale-95 transition-all shadow-xs"
          >
            <span className="material-symbols-outlined text-[20px] text-[#006948]">chat_bubble</span>
            <span>สอบถามแอดมิน LINE</span>
          </a>
        </div>
      </div>
    </section>
  );
};
