import React, { useState } from 'react';
import { FAQS } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full px-4 py-8 bg-[#f2f3ff]" id="faq">
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        <div className="flex flex-col">
          <span className="text-[11px] font-bold text-[#006948] uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-[#131b2e]">
            คำถามที่พบบ่อย
          </h2>
          <p className="text-xs text-[#3d4a42]">
            ข้อสงสัยยอดนิยมเกี่ยวกับการใช้จุลินทรีย์และการสั่งซื้อ
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white overflow-hidden shadow-xs border border-slate-100 transition-all"
              >
                <button
                  type="button"
                  className="w-full p-4 flex items-center justify-between text-left gap-3 text-[#131b2e] hover:bg-slate-50 transition-colors"
                  onClick={() => toggle(faq.id)}
                >
                  <span className="text-sm sm:text-base font-bold text-[#131b2e]">
                    {faq.question}
                  </span>
                  <span
                    className={`material-symbols-outlined text-[20px] text-[#6d7a72] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#006948]' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="pt-2 border-t border-slate-100 text-xs sm:text-sm text-[#3d4a42] leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
