import React, { useState } from 'react';
import { ARTICLES } from '../data/mockData';
import { Article } from '../types';

interface ArticlesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ArticlesModal: React.FC<ArticlesModalProps> = ({ isOpen, onClose }) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#131b2e]/60 backdrop-blur-xs flex flex-col justify-end sm:justify-center items-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div
        className="w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-3xl p-5 flex flex-col gap-4 shadow-2xl max-h-[88vh] overflow-y-auto animate-in slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            {selectedArticle && (
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-100"
              >
                <span className="material-symbols-outlined text-[20px]">arrow_back</span>
              </button>
            )}
            <h2 className="text-base font-bold text-[#131b2e]">
              {selectedArticle ? 'บทความความรู้' : 'คลังความรู้การเลี้ยงกุ้ง'}
            </h2>
          </div>
          <button
            type="button"
            aria-label="ปิด"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {selectedArticle ? (
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-bold text-[#006948] bg-emerald-50 px-2.5 py-0.5 rounded-full self-start">
              {selectedArticle.category} · {selectedArticle.date}
            </span>
            <h3 className="text-lg font-black text-[#131b2e] leading-snug">
              {selectedArticle.title}
            </h3>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed pt-2">
              {selectedArticle.content.map((p, i) => (
                <p key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  {p}
                </p>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              className="mt-2 py-2 px-4 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 text-center"
            >
              กลับหน้ารายการบทความ
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {ARTICLES.map((art) => (
              <div
                key={art.id}
                onClick={() => setSelectedArticle(art)}
                className="p-4 rounded-2xl bg-[#f2f3ff] hover:bg-[#eaedff] border border-slate-100 transition-all cursor-pointer flex flex-col gap-1.5 shadow-2xs"
              >
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-bold text-[#006948]">{art.category}</span>
                  <span>{art.readTime}</span>
                </div>
                <h3 className="text-sm font-bold text-[#131b2e] leading-snug hover:text-[#006948] transition-colors">
                  {art.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {art.excerpt}
                </p>
                <div className="flex items-center gap-1 text-[11px] font-bold text-[#2d6197] pt-1">
                  <span>อ่านต่อ</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
