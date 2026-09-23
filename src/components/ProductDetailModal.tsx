import React, { useState } from 'react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  const [qty, setQty] = useState<number>(1);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, qty);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#131b2e]/60 backdrop-blur-xs flex flex-col justify-end sm:justify-center items-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div
        className="w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-3xl p-5 flex flex-col gap-4 shadow-2xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <span className="text-[11px] font-bold text-[#006948] uppercase tracking-wider">
            {product.categoryLabel}
          </span>
          <button
            type="button"
            aria-label="ปิดหน้าต่าง"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Product Image & Size */}
        <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-slate-100 border border-slate-100">
          <img
            src={product.image}
            alt={product.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2.5 right-2.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#131b2e] text-xs font-bold shadow-xs">
            {product.size}
          </div>
        </div>

        {/* Title & Price */}
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold text-[#131b2e] leading-snug">
            {product.name}
          </h2>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-[#006948] tabular-nums">
              ฿{product.price.toLocaleString('th-TH')}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-slate-400 line-through">
                ฿{product.originalPrice.toLocaleString('th-TH')}
              </span>
            )}
            <span className="text-xs text-slate-500">
              / {product.unit}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="p-3.5 rounded-2xl bg-[#f2f3ff] text-xs sm:text-sm text-[#3d4a42] leading-relaxed">
          {product.description}
        </div>

        {/* Mixing Ratio Guide */}
        <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-950 flex flex-col gap-1">
          <div className="flex items-center gap-1.5 font-bold text-xs">
            <span className="material-symbols-outlined text-[18px] text-amber-700">science</span>
            <span>อัตราส่วนการใช้งาน (Mixing Ratio)</span>
          </div>
          <p className="text-xs leading-relaxed text-amber-900">
            {product.mixingRatio}
          </p>
        </div>

        {/* Features list */}
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold text-[#131b2e]">
            คุณสมบัติเด่นของสูตรนี้:
          </span>
          <div className="grid gap-1.5">
            {product.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#3d4a42]">
                <span className="material-symbols-outlined text-[16px] text-[#006948] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stepper & Add to Cart button */}
        <div className="pt-2 border-t border-slate-100 flex items-center gap-3">
          <div className="flex items-center bg-[#f2f3ff] rounded-full p-1 border border-slate-200">
            <button
              type="button"
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-slate-800 active:scale-95 shadow-2xs"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
            >
              <span className="material-symbols-outlined text-[16px]">remove</span>
            </button>
            <span className="w-8 text-center text-sm font-bold text-[#131b2e] tabular-nums">
              {qty}
            </span>
            <button
              type="button"
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-slate-800 active:scale-95 shadow-2xs"
              onClick={() => setQty((q) => Math.min(99, q + 1))}
            >
              <span className="material-symbols-outlined text-[16px]">add</span>
            </button>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="flex-1 h-12 rounded-full bg-[#006948] hover:bg-[#005137] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
            <span>เพิ่มลงในตะกร้า (฿{(product.price * qty).toLocaleString('th-TH')})</span>
          </button>
        </div>
      </div>
    </div>
  );
};
