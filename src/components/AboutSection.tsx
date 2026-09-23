import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="w-full px-4 py-6 bg-[#faf8ff]" id="about">
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        <div className="p-5 sm:p-6 rounded-3xl bg-[#f2f3ff] flex flex-col gap-3 shadow-xs border border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-[#85f8c4] text-[#002114] flex items-center justify-center shadow-xs">
              <span className="material-symbols-outlined text-[22px]">water_ec</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-[#006948] uppercase tracking-wider">
                About Our Mission
              </span>
              <h2 className="text-base sm:text-lg font-bold text-[#131b2e]">
                เกี่ยวกับ "กุ้งน้อยโปรไบโอติก" (Kung Noi Bio-Aqua)
              </h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#3d4a42] leading-relaxed">
            เราคือทีมงานที่มีความมุ่งมั่นในการสนับสนุนพี่น้องเกษตรกรผู้เลี้ยงกุ้งไทย ด้วยผลิตภัณฑ์ชีวภาพคุณภาพสูง สะอาด ปลอดภัย ใส่ใจในสิ่งแวดล้อม และให้บริการด้วยความซื่อสัตย์จริงใจ เพื่อช่วยยกระดับการจัดการฟาร์มกุ้งให้เกิดประสิทธิภาพสูงสุด ลดต้นทุนยาปฏิชีวนะ และสร้างผลผลิตกุ้งไซส์สวย แข็งแรง ในทุกลูปการเลี้ยง
          </p>

          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200/60 text-center">
            <div className="p-2 rounded-xl bg-white">
              <div className="text-lg sm:text-xl font-black text-[#006948]">100%</div>
              <div className="text-[10px] text-[#3d4a42]">สารชีวภาพธรรมชาติ</div>
            </div>
            <div className="p-2 rounded-xl bg-white">
              <div className="text-lg sm:text-xl font-black text-[#2d6197]">500+</div>
              <div className="text-[10px] text-[#3d4a42]">ฟาร์มไว้วางใจ</div>
            </div>
            <div className="p-2 rounded-xl bg-white">
              <div className="text-lg sm:text-xl font-black text-[#ea580c]">24/7</div>
              <div className="text-[10px] text-[#3d4a42]">ให้คำปรึกษาดูแล</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
