import React from 'react';

interface ToastProps {
  toast: {
    show: boolean;
    title: string;
    desc: string;
    icon?: string;
  } | null;
  onOpenCart?: () => void;
}

export const Toast: React.FC<ToastProps> = ({ toast, onOpenCart }) => {
  if (!toast || !toast.show) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 z-50 max-w-sm mx-auto bg-[#131b2e] text-white rounded-2xl p-3.5 shadow-2xl flex items-center justify-between animate-in slide-in-from-bottom-5 fade-in duration-300 border border-slate-700">
      <div className="flex items-center gap-2.5 min-w-0">
        <span className="material-symbols-outlined text-[22px] text-[#85f8c4] shrink-0">
          {toast.icon || 'check_circle'}
        </span>
        <div className="flex flex-col min-w-0">
          <span className="text-xs font-bold truncate">{toast.title}</span>
          {toast.desc && (
            <span className="text-[11px] text-slate-300 truncate">{toast.desc}</span>
          )}
        </div>
      </div>

      {onOpenCart && (
        <button
          type="button"
          onClick={onOpenCart}
          className="text-xs font-bold text-[#85f8c4] hover:underline pl-2 shrink-0 cursor-pointer"
        >
          ดูตะกร้า
        </button>
      )}
    </div>
  );
};
