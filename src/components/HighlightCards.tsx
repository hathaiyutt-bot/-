import React from 'react';

export const HighlightCards: React.FC = () => {
  return (
    <section className="w-full px-4 py-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-[#006948] uppercase tracking-wider">
              Quality Assurance
            </span>
            <h2 className="text-xl font-bold text-[#131b2e]">
              จุดเด่นของผลิตภัณฑ์
            </h2>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#85f8c4] flex items-center justify-center text-[#002114] shadow-xs">
            <span className="material-symbols-outlined text-[22px]">eco</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Card 1 */}
          <div className="p-4 rounded-2xl bg-[#f2f3ff] hover:bg-[#eaedff] transition-colors flex flex-col gap-2 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#92c1fe] text-[#144f84] flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">set_meal</span>
            </div>
            <h3 className="text-sm font-bold text-[#131b2e] leading-snug">
              สำหรับเลี้ยงกุ้งโดยเฉพาะ
            </h3>
            <p className="text-xs text-[#3d4a42] leading-relaxed">
              คัดสรรสูตรเพื่อการใช้งานร่วมกับเม็ดอาหารกุ้งโดยเฉพาะ
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-4 rounded-2xl bg-[#f2f3ff] hover:bg-[#eaedff] transition-colors flex flex-col gap-2 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#85f8c4] text-[#002114] flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">water_voc</span>
            </div>
            <h3 className="text-sm font-bold text-[#131b2e] leading-snug">
              คลุกเคล้าง่าย สะดวก
            </h3>
            <p className="text-xs text-[#3d4a42] leading-relaxed">
              ละลายน้ำง่าย เคลือบอาหารดี ประหยัดแรงงานในบ่อเลี้ยง
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-4 rounded-2xl bg-[#f2f3ff] hover:bg-[#eaedff] transition-colors flex flex-col gap-2 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#c9e6ff] text-[#004c6e] flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">waves</span>
            </div>
            <h3 className="text-sm font-bold text-[#131b2e] leading-snug">
              เป็นมิตรต่อระบบน้ำ
            </h3>
            <p className="text-xs text-[#3d4a42] leading-relaxed">
              ปลอดภัยต่อระบบนิเวศและสมดุลธรรมชาติในบ่อกุ้ง
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-4 rounded-2xl bg-[#f2f3ff] hover:bg-[#eaedff] transition-colors flex flex-col gap-2 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#dae2fd] text-[#3d4a42] flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">menu_book</span>
            </div>
            <h3 className="text-sm font-bold text-[#131b2e] leading-snug">
              คำแนะนำชัดเจน
            </h3>
            <p className="text-xs text-[#3d4a42] leading-relaxed">
              มีทีมงานพร้อมให้ข้อมูลตารางการใช้อย่างถูกต้องเหมาะสม
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
