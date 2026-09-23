import React from 'react';
import { OFFICIAL_IMAGES } from '../data/mockData';

export const MascotBanner: React.FC = () => {
  return (
    <section className="w-full px-4 py-4">
      <div className="max-w-4xl mx-auto">
        <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-[#eaedff] via-[#e2e7ff] to-[#d2e4ff] border border-sky-200/60 flex items-center gap-4 relative overflow-hidden shadow-sm">
          {/* Cute mascot sticker */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 relative group">
            <img
              src={OFFICIAL_IMAGES.mascotSticker}
              alt="น้องกุ้งน้อย มาสคอตฟาร์ม"
              className="w-full h-full object-contain -rotate-3 group-hover:rotate-0 transition-transform duration-300 drop-shadow-md"
            />
          </div>

          {/* Speech / Value proposition */}
          <div className="flex flex-col gap-1.5 flex-1">
            <div className="inline-flex items-center gap-1 self-start px-2.5 py-0.5 rounded-full bg-[#85f8c4] text-[#002114] text-xs font-bold shadow-2xs">
              <span className="material-symbols-outlined text-[14px] text-[#006948]">verified</span>
              <span>สูตรการันตีจากฟาร์ม</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-[#131b2e] leading-snug">
              "น้องกุ้งโตไว แข็งแรง น้ำโปร่งสะอาด ฟาร์มมั่นใจได้เลยครับ!"
            </p>
            <p className="text-xs text-[#2d6197] font-medium hidden sm:block">
              สอบถามสูตรการคลุกอาหารกุ้งตามขนาดบ่อและระยะการเลี้ยงได้ฟรี มีทีมผู้เชี่ยวชาญดูแลตลอดรอบ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
