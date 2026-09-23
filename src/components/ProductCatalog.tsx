import React, { useState } from 'react';
import { PRODUCTS } from '../data/mockData';
import { Product } from '../types';

interface ProductCatalogProps {
  onAddToCart: (product: Product, quantity: number) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onAddToCart,
  onSelectProduct,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [quantities, setQuantities] = useState<Record<string, number>>({
    'prod-ferment': 1,
    'prod-powder': 1,
    'prod-bio': 1,
    'prod-starter': 1,
  });

  const categories = [
    { id: 'all', label: 'ทั้งหมด' },
    { id: 'ferment', label: 'น้ำหมักผสมอาหาร' },
    { id: 'powder', label: 'โปรไบโอติก' },
    { id: 'starter', label: 'ชุดทดลองสำหรับฟาร์ม' },
  ];

  const filteredProducts = PRODUCTS.filter((item) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'ferment') return item.category === 'ferment' || item.category === 'bio';
    return item.category === selectedCategory;
  });

  const handleAdjustQty = (productId: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[productId] || 1;
      const next = Math.max(1, Math.min(99, current + delta));
      return { ...prev, [productId]: next };
    });
  };

  return (
    <section className="w-full px-4 py-6 bg-white border-y border-slate-100" id="featured-products">
      <div className="max-w-4xl mx-auto flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-[#006948] uppercase tracking-wider">
              Farm Catalog
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#131b2e]">
              สินค้าแนะนำสำหรับฟาร์ม
            </h2>
          </div>
          <span className="px-3 py-1 rounded-full bg-[#eaedff] text-[#3d4a42] text-xs font-semibold">
            {filteredProducts.length} รายการ
          </span>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#006948] text-white shadow-sm scale-100'
                    : 'bg-[#f2f3ff] text-[#131b2e] hover:bg-[#eaedff]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {filteredProducts.map((prod) => {
            const qty = quantities[prod.id] || 1;
            return (
              <article
                key={prod.id}
                className="p-4 rounded-3xl bg-[#f2f3ff] hover:bg-[#ebf0fe] transition-all flex flex-col gap-3 shadow-xs relative border border-slate-200/60"
              >
                {/* Product Image Box */}
                <div
                  className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden bg-white cursor-pointer group"
                  onClick={() => onSelectProduct(prod)}
                >
                  <img
                    src={prod.image}
                    alt={prod.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Badge */}
                  {prod.badge && (
                    <div
                      className={`absolute top-2.5 left-2.5 px-3 py-1 rounded-full text-white text-[11px] font-bold shadow-md flex items-center gap-1 ${
                        prod.badgeColor === 'primary'
                          ? 'bg-[#006948]'
                          : prod.badgeColor === 'secondary'
                          ? 'bg-[#2d6197]'
                          : prod.badgeColor === 'orange'
                          ? 'bg-[#ea580c]'
                          : 'bg-[#007cb1]'
                      }`}
                    >
                      {prod.badgeColor === 'primary' && (
                        <span className="material-symbols-outlined text-[13px]">local_fire_department</span>
                      )}
                      {prod.badgeColor === 'secondary' && (
                        <span className="material-symbols-outlined text-[13px]">star</span>
                      )}
                      {prod.badgeColor === 'orange' && (
                        <span className="material-symbols-outlined text-[13px]">verified</span>
                      )}
                      <span>{prod.badge}</span>
                    </div>
                  )}

                  {/* Size Label */}
                  <div className="absolute bottom-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[#131b2e] text-[11px] font-semibold shadow-xs">
                    {prod.size}
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col gap-1">
                  <h3
                    className="text-base sm:text-lg font-bold text-[#131b2e] hover:text-[#006948] transition-colors cursor-pointer"
                    onClick={() => onSelectProduct(prod)}
                  >
                    {prod.name}
                  </h3>
                  <p className="text-xs text-[#3d4a42] line-clamp-2 leading-relaxed">
                    {prod.subtitle}
                  </p>
                </div>

                {/* Price & Quantity Stepper */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex flex-col">
                    {prod.originalPrice && (
                      <span className="text-xs text-[#6d7a72] line-through font-medium">
                        ฿{prod.originalPrice.toLocaleString('th-TH')}
                      </span>
                    )}
                    <span className="text-2xl font-black text-[#006948] tabular-nums">
                      ฿{prod.price.toLocaleString('th-TH')}
                    </span>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center bg-white rounded-full p-1 border border-slate-200 shadow-2xs">
                    <button
                      type="button"
                      aria-label="ลดจำนวน"
                      className="w-8 h-8 rounded-full bg-[#f2f3ff] hover:bg-[#eaedff] flex items-center justify-center text-[#131b2e] active:scale-95 transition-all"
                      onClick={() => handleAdjustQty(prod.id, -1)}
                    >
                      <span className="material-symbols-outlined text-[16px]">remove</span>
                    </button>
                    <span className="w-8 text-center text-sm font-bold text-[#131b2e] tabular-nums">
                      {qty}
                    </span>
                    <button
                      type="button"
                      aria-label="เพิ่มจำนวน"
                      className="w-8 h-8 rounded-full bg-[#f2f3ff] hover:bg-[#eaedff] flex items-center justify-center text-[#131b2e] active:scale-95 transition-all"
                      onClick={() => handleAdjustQty(prod.id, 1)}
                    >
                      <span className="material-symbols-outlined text-[16px]">add</span>
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    type="button"
                    className="h-11 rounded-full bg-[#006948] hover:bg-[#005137] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 shadow-xs active:scale-95 transition-all"
                    onClick={() => onAddToCart(prod, qty)}
                  >
                    <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                    <span>สั่งซื้อ (฿{(prod.price * qty).toLocaleString('th-TH')})</span>
                  </button>

                  <button
                    type="button"
                    className="h-11 rounded-full bg-white hover:bg-slate-100 text-[#2d6197] text-xs sm:text-sm font-bold flex items-center justify-center border border-slate-200 active:scale-95 transition-all"
                    onClick={() => onSelectProduct(prod)}
                  >
                    ดูรายละเอียด
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
