import React from 'react';
import { REVIEWS } from '../data/mockData';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="w-full px-4 py-8 bg-[#faf8ff]" id="reviews">
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        <div className="flex flex-col">
          <span className="text-[11px] font-bold text-[#006948] uppercase tracking-wider">
            Farm Feedback
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-[#131b2e]">
            เสียงตอบรับจากเกษตรกร
          </h2>
          <span className="text-xs text-[#3d4a42]">
            ความคิดเห็นจากผู้ใช้งานจริงในฟาร์มเพาะเลี้ยงกุ้ง
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-4 rounded-2xl bg-[#f2f3ff] hover:bg-[#eaedff] transition-colors flex flex-col gap-2.5 shadow-xs"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${rev.badgeBg} ${rev.badgeText} shadow-2xs`}
                  >
                    {rev.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-[#131b2e]">
                      {rev.author}
                    </span>
                    <span className="text-[11px] text-[#3d4a42]">
                      {rev.province} · {rev.farmType}
                    </span>
                  </div>
                </div>

                <div className="flex text-[#006948]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#131b2e] bg-white p-3 rounded-xl border border-slate-100/80 leading-relaxed">
                "{rev.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
