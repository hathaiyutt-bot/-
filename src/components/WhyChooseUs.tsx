import React from 'react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      title: 'คัดสรรผลิตภัณฑ์สำหรับผู้เลี้ยงกุ้งโดยเฉพาะ',
      desc: 'พัฒนาและปรับสูตรจากความต้องการจริงของผู้เลี้ยงในพื้นที่น้ำจืดและน้ำกร่อย ทั้งบ่อดินและบ่อ PE',
    },
    {
      title: 'มีคำแนะนำและตารางการใช้งานตามฉลากชัดเจน',
      desc: 'มีเอกสารสัดส่วนการผสมตามขนาดบ่อและรอบการให้อาหารอย่างละเอียด เข้าใจง่าย ไม่ยุ่งยาก',
    },
    {
      title: 'เหมาะสำหรับการใช้งานจริงในฟาร์มทุกระบบ',
      desc: 'เข้ากันได้ดีกับระบบการจัดการน้ำหลากหลายรูปแบบ ไม่รบกวนระบบออกซิเจนและการทำงานของเครื่องตีน้ำ',
    },
    {
      title: 'ยินดีให้คำปรึกษาก่อนและหลังการสั่งซื้อ',
      desc: 'มีแอดมินและทีมนักวิชาการสัตว์น้ำพร้อมตอบแชต ให้ข้อมูลการใช้งานและเทคนิคการคลุกอาหารตรงจุด',
    },
  ];

  return (
    <section className="w-full px-4 py-6 bg-[#faf8ff]">
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        <div className="flex flex-col">
          <span className="text-[11px] font-bold text-[#006948] uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-[#131b2e]">
            ทำไมต้องเลือก กุ้งน้อยโปรไบโอติก
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#f2f3ff] hover:bg-[#eaedff] transition-colors flex items-start gap-3 shadow-xs"
            >
              <div className="w-8 h-8 rounded-full bg-[#85f8c4] text-[#002114] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                <span className="material-symbols-outlined text-[18px]">check</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <h3 className="text-sm font-bold text-[#131b2e] leading-snug">
                  {pt.title}
                </h3>
                <p className="text-xs text-[#3d4a42] leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
