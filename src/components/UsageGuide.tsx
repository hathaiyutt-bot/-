import React from 'react';

export const UsageGuide: React.FC = () => {
  const steps = [
    {
      step: '1',
      title: 'เตรียมอาหารกุ้ง',
      desc: 'ชั่งน้ำหนักอาหารกุ้งตามปริมาณที่ต้องการให้อาหารในแต่ละมื้อ วางในภาชนะคลุกหรือกะละมังที่สะอาดแห้ง',
    },
    {
      step: '2',
      title: 'ผสมน้ำหมักตามอัตราที่แนะนำ',
      desc: 'ผสมน้ำหมักกุ้งน้อยกับน้ำสะอาดตามสัดส่วนที่ระบุบนฉลากสินค้า (เช่น 20-30 มล. ต่อน้ำ 100 มล.) คนให้ละลายเข้ากันดี',
    },
    {
      step: '3',
      title: 'นำไปคลุกเคล้าและให้อาหาร',
      desc: 'คลุกเคล้าให้ทั่วเม็ดอาหาร ผึ่งลมในที่ร่ม 10-15 นาที เพื่อให้น้ำหมักซึมเคลือบผิวเม็ดอาหารก่อนนำไปหว่านให้กุ้งตามรอบปกติ',
    },
  ];

  return (
    <section className="w-full px-4 py-8 bg-[#f2f3ff]" id="howtouse">
      <div className="max-w-4xl mx-auto flex flex-col gap-5">
        <div className="flex flex-col">
          <span className="text-[11px] font-bold text-[#2d6197] uppercase tracking-wider">
            Application Guide
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-[#131b2e]">
            วิธีการใช้งาน 3 ขั้นตอนง่ายๆ
          </h2>
          <p className="text-xs sm:text-sm text-[#3d4a42] mt-0.5">
            คลุกเคล้าสะดวก ไม่เปลืองแรงงาน เสริมประสิทธิภาพการเลี้ยงสูงสุด
          </p>
        </div>

        {/* Timeline steps */}
        <div className="grid md:grid-cols-3 gap-3.5">
          {steps.map((st) => (
            <div
              key={st.step}
              className="p-5 rounded-2xl bg-white shadow-xs flex flex-col gap-2 relative border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="w-9 h-9 rounded-full bg-[#006948] text-white text-sm font-bold flex items-center justify-center shadow-xs">
                {st.step}
              </div>
              <h3 className="text-base font-bold text-[#131b2e]">
                {st.title}
              </h3>
              <p className="text-xs text-[#3d4a42] leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Warning / Compliance banner */}
        <div className="p-4 rounded-2xl bg-[#eaedff] border border-blue-200/60 text-[#131b2e] flex items-start gap-3 shadow-2xs">
          <span className="material-symbols-outlined text-[24px] text-[#00628d] shrink-0 mt-0.5">
            info
          </span>
          <div className="text-xs sm:text-sm text-[#3d4a42] leading-relaxed">
            <strong className="text-[#131b2e] font-bold">หมายเหตุ:</strong> โปรดศึกษาและปฏิบัติตามอัตราส่วนและคำแนะนำการใช้งานที่ระบุไว้บนฉลากผลิตภัณฑ์อย่างละเอียด หรือสอบถามเจ้าหน้าที่ทาง LINE เพื่อคำแนะนำที่เหมาะกับสภาพน้ำและขนาดบ่อของท่าน
          </div>
        </div>
      </div>
    </section>
  );
};
