import React, { useState } from 'react';
import { CartItem } from '../types';
import { OFFICIAL_IMAGES, FARM_CONTACT_INFO } from '../data/mockData';
import { FarmContactConfig } from './LineSettingsModal';

interface CartViewProps {
  cart: CartItem[];
  onUpdateQty: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onBack: () => void;
  onOpenBankTransfer: (orderDetails: {
    total: number;
    subtotal: number;
    discount: number;
    shipping: number;
    items: CartItem[];
    customerName: string;
    customerPhone: string;
    customerAddress: string;
    notes: string;
  }) => void;
  onShowToast: (title: string, desc: string, icon?: string) => void;
  contactConfig?: FarmContactConfig;
  onOpenLineSettings?: () => void;
}

export const CartView: React.FC<CartViewProps> = ({
  cart,
  onUpdateQty,
  onRemoveItem,
  onBack,
  onOpenBankTransfer,
  onShowToast,
  contactConfig = FARM_CONTACT_INFO,
  onOpenLineSettings,
}) => {
  const [deliveryMethod, setDeliveryMethod] = useState<1 | 2>(1); // 1: Express, 2: Truck
  const [couponCode, setCouponCode] = useState<string>('SHRIMP130');
  const [appliedCoupon, setAppliedCoupon] = useState<string>('SHRIMP130');
  const [discountAmount, setDiscountAmount] = useState<number>(130);

  // Form State
  const [customerName, setCustomerName] = useState<string>('สมศักดิ์ วงศ์เจริญฟาร์ม');
  const [customerPhone, setCustomerPhone] = useState<string>('089-456-7890');
  const [customerAddress, setCustomerAddress] = useState<string>(
    '128 หมู่ 4 ถ.เลียบคลองชลประทาน ต.บางเลน อ.สองพี่น้อง จ.สุพรรณบุรี 72110'
  );
  const [notes, setNotes] = useState<string>('วางไว้หน้าอาคารเตรียมอาหารบ่อ 2');

  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  // Free shipping threshold = 2,000 THB
  const freeShippingThreshold = 2000;
  const qualifiesFreeShip = subtotal >= freeShippingThreshold;
  const shippingProgress = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  let shippingCost = 0;
  if (deliveryMethod === 1) {
    shippingCost = qualifiesFreeShip ? 0 : 100;
  } else {
    shippingCost = 350; // Farm Bulk Truck
  }

  const finalDiscount = subtotal > 0 ? discountAmount : 0;
  const grandTotal = Math.max(0, subtotal - finalDiscount + shippingCost);

  const handleApplyCoupon = () => {
    const code = couponCode.trim().toUpperCase();
    if (code === 'SHRIMP130') {
      setAppliedCoupon('SHRIMP130');
      setDiscountAmount(130);
      onShowToast('ใช้งานโค้ดสำเร็จ', 'ส่วนลด ฿130 ถูกหักลบเรียบร้อยแล้ว', 'check_circle');
    } else if (code === 'BIOFARM') {
      setAppliedCoupon('BIOFARM');
      setDiscountAmount(150);
      onShowToast('ใช้งานโค้ดสำเร็จ', 'ส่วนลดพันธมิตรฟาร์ม ฿150 ถูกหักลบแล้ว', 'check_circle');
    } else if (code === 'KUNG50') {
      setAppliedCoupon('KUNG50');
      setDiscountAmount(50);
      onShowToast('ใช้งานโค้ดสำเร็จ', 'ส่วนลดแบบสอบถาม ฿50 ถูกหักลบแล้ว', 'check_circle');
    } else if (code === '') {
      setAppliedCoupon('');
      setDiscountAmount(0);
      onShowToast('ยกเลิกโค้ดส่วนลดแล้ว', '', 'info');
    } else {
      onShowToast('ไม่พบโค้ดนี้', 'โปรดตรวจสอบรหัสส่วนลดอีกครั้ง (เช่น SHRIMP130 หรือ BIOFARM)', 'error');
    }
  };

  const handleOrderViaLine = () => {
    if (cart.length === 0) {
      onShowToast('ตะกร้าสินค้าว่างเปล่า', 'กรุณาเลือกสินค้าก่อนสั่งซื้อ', 'warning');
      return;
    }

    let itemsListText = '';
    cart.forEach((item, idx) => {
      itemsListText += `${idx + 1}. ${item.product.name} (${item.product.size})\n   - จำนวน: ${item.quantity} ${item.product.unit} (฿${(item.product.price * item.quantity).toLocaleString('th-TH')})\n`;
    });

    const deliveryName =
      deliveryMethod === 1
        ? `จัดส่งด่วนเอกชน (Flash/Kerry) [${shippingCost === 0 ? 'ฟรี' : '฿' + shippingCost}]`
        : `รถส่งเฉพาะกิจฟาร์มกุ้ง (+฿350)`;

    const message =
      `🦐 สนใจสั่งซื้อสินค้า กุ้งน้อยโปรไบโอติก 🦐\n\n` +
      `📋 รายการสินค้าที่สั่ง:\n${itemsListText}\n` +
      `💰 ราคาสินค้า: ฿${subtotal.toLocaleString('th-TH')}\n` +
      (finalDiscount > 0 ? `🎟️ ส่วนลดโค้ด (${appliedCoupon}): -฿${finalDiscount}\n` : '') +
      `🚚 การจัดส่ง: ${deliveryName}\n` +
      `-------------------------\n` +
      `💵 ยอดรวมสุทธิ: ฿${grandTotal.toLocaleString('th-TH')}\n\n` +
      `👤 ข้อมูลผู้รับ/ฟาร์ม:\n` +
      `ชื่อ: ${customerName || '-'}\n` +
      `โทร: ${customerPhone || '-'}\n` +
      `ที่อยู่: ${customerAddress || '-'}\n` +
      `หมายเหตุ: ${notes || '-'}\n\n` +
      `รบกวนแอดมินแจ้งเลขที่บัญชีโอนเงินและยืนยันรอบจัดส่งด้วยครับ ขอบคุณครับ!`;

    const encoded = encodeURIComponent(message);
    const targetLineId = contactConfig?.lineId || '@883nmhsl';
    const formattedId = targetLineId.startsWith('@') ? targetLineId : `@${targetLineId}`;

    onShowToast('กำลังนำคุณไปที่ LINE...', `ส่งยอดสั่งซื้อเข้า LINE OA (${formattedId})`, 'chat');
    setTimeout(() => {
      // If user specified custom lineUrl that is lin.ee, or standard line.me
      let destinationUrl = `https://line.me/R/oaMessage/${formattedId}/?text=${encoded}`;
      if (contactConfig?.lineUrl && contactConfig.lineUrl.includes('lin.ee') && formattedId === '@883nmhsl') {
        destinationUrl = contactConfig.lineUrl;
      }
      window.open(destinationUrl, '_blank');
    }, 700);
  };

  const handleOrderViaBank = () => {
    if (cart.length === 0) {
      onShowToast('ตะกร้าสินค้าว่างเปล่า', 'กรุณาเลือกสินค้าก่อนทำรายการ', 'warning');
      return;
    }
    onOpenBankTransfer({
      total: grandTotal,
      subtotal,
      discount: finalDiscount,
      shipping: shippingCost,
      items: cart,
      customerName,
      customerPhone,
      customerAddress,
      notes
    });
  };

  return (
    <div className="flex flex-col relative w-full min-h-screen bg-[#faf8ff] pb-48 pt-16">
      {/* Top Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#faf8ff]/95 backdrop-blur-xl shadow-xs pt-safe border-b border-slate-100">
        <div className="max-w-4xl mx-auto h-16 px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="ย้อนกลับ"
              onClick={onBack}
              className="w-11 h-11 flex items-center justify-center rounded-full text-[#131b2e] hover:bg-[#eaedff] active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </button>
            <h1 className="text-lg font-bold text-[#131b2e]">
              Shopping Cart (ตะกร้าสินค้า)
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10 flex items-center justify-center rounded-full text-[#2d6197]">
              <span className="material-symbols-outlined text-[24px]">shopping_bag</span>
              <span className="absolute top-0 right-0 min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full bg-[#006948] text-white text-[10px] font-bold shadow-xs">
                {totalItemsCount}
              </span>
            </div>
            <img
              src={OFFICIAL_IMAGES.logo}
              alt="กุ้งน้อยโปรไบโอติก"
              className="h-7 w-auto object-contain hidden sm:block"
            />
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto w-full flex flex-col gap-3 pt-3">
        {/* Top Vitality Status & Free Shipping Progress */}
        <div className="px-4">
          <div className="bg-[#eaedff] p-4 rounded-2xl flex flex-col gap-3 shadow-xs border border-blue-200/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#006948] animate-ping"></span>
                <span className="text-sm font-bold text-[#131b2e]">
                  ตะกร้าสินค้าของคุณ
                </span>
              </div>
              <span className="bg-[#85f8c4] text-[#002114] text-xs font-bold px-3 py-1 rounded-full">
                {totalItemsCount} รายการ
              </span>
            </div>

            {/* Free Shipping Goal Indicator */}
            <div className="bg-white p-3 rounded-xl flex flex-col gap-2 shadow-2xs border border-slate-100">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="flex items-center gap-1.5 text-[#006948]">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  ยอดครบ ฿2,000 รับสิทธิ์ส่งฟรีทันที!
                </span>
                <span className={`text-xs font-bold ${qualifiesFreeShip ? 'text-[#006948]' : 'text-[#ea580c]'}`}>
                  {qualifiesFreeShip
                    ? 'ปลดล็อกแล้ว 🎉'
                    : `เพิ่มอีก ฿${(freeShippingThreshold - subtotal).toLocaleString('th-TH')}`}
                </span>
              </div>
              <div className="w-full bg-[#e2e7ff] h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#006948] h-full rounded-full transition-all duration-500"
                  style={{ width: `${shippingProgress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Cart Product List */}
        <section className="px-4 flex flex-col gap-3">
          {cart.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-3xl border border-slate-100 shadow-xs flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                <span className="material-symbols-outlined text-[36px]">remove_shopping_cart</span>
              </div>
              <div className="text-base font-bold text-slate-800">ยังไม่มีสินค้าในตะกร้า</div>
              <p className="text-xs text-slate-500 max-w-xs">
                เลือกซื้อน้ำหมักผสมอาหารกุ้ง หรือ โปรไบโอติกคัดสรรเพื่อเพิ่มลงในรายการสั่งซื้อ
              </p>
              <button
                type="button"
                onClick={onBack}
                className="mt-2 px-6 py-2.5 bg-[#006948] text-white text-xs font-bold rounded-full hover:bg-[#005137] transition-all"
              >
                เลือกซื้อสินค้าทันที
              </button>
            </div>
          ) : (
            cart.map((item) => {
              const itemTotal = item.product.price * item.quantity;
              return (
                <div
                  key={item.product.id}
                  className="bg-white p-4 rounded-2xl flex flex-col gap-3 shadow-xs border border-slate-100 relative overflow-hidden"
                >
                  <div className="flex gap-3.5">
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-slate-100 border border-slate-100">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-1 left-1 bg-white/90 backdrop-blur-xs text-[#006948] text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-2xs">
                        {item.product.size.split(' ')[0]}
                      </span>
                    </div>

                    <div className="flex flex-col flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <div className="min-w-0">
                          <span className="bg-[#d2e4ff] text-[#07497d] text-[10px] font-bold px-2 py-0.5 rounded-full inline-block mb-1">
                            {item.product.categoryLabel}
                          </span>
                          <h2 className="text-sm font-bold text-[#131b2e] truncate">
                            {item.product.name}
                          </h2>
                          <p className="text-xs text-[#6d7a72] mt-0.5">
                            ขนาด: {item.product.size}
                          </p>
                        </div>
                        <button
                          type="button"
                          aria-label="ลบรายการ"
                          onClick={() => onRemoveItem(item.product.id)}
                          className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                          title="ลบรายการออกจากตะกร้า"
                        >
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100">
                        <div>
                          <span className="text-lg font-bold text-[#006948] tabular-nums">
                            ฿{itemTotal.toLocaleString('th-TH')}
                          </span>
                          <span className="text-xs text-[#6d7a72] ml-1">
                            (฿{item.product.price}/ชิ้น)
                          </span>
                        </div>

                        {/* Quantity Stepper */}
                        <div className="flex items-center bg-[#f2f3ff] rounded-full p-1 gap-1 border border-slate-200/80">
                          <button
                            type="button"
                            className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#131b2e] active:scale-95 shadow-2xs hover:bg-slate-50"
                            onClick={() => onUpdateQty(item.product.id, -1)}
                          >
                            <span className="material-symbols-outlined text-[16px]">remove</span>
                          </button>
                          <span className="text-xs font-bold text-[#131b2e] px-2 min-w-[20px] text-center tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#131b2e] active:scale-95 shadow-2xs hover:bg-slate-50"
                            onClick={() => onUpdateQty(item.product.id, 1)}
                          >
                            <span className="material-symbols-outlined text-[16px]">add</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </section>

        {/* Delivery Method Selector */}
        <section className="px-4">
          <div className="bg-white p-4 rounded-2xl flex flex-col gap-3 shadow-xs border border-slate-100">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-[#131b2e] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#2d6197] text-[20px]">local_shipping</span>
                รูปแบบการจัดส่งฟาร์ม
              </h3>
              <span className="text-[11px] font-bold text-[#006948] bg-[#85f8c4] px-2 py-0.5 rounded-full">
                จัดส่งเร็วทั่วไทย
              </span>
            </div>

            <div className="flex flex-col gap-2.5">
              {/* Option 1: Express */}
              <label
                onClick={() => setDeliveryMethod(1)}
                className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-all border-2 ${
                  deliveryMethod === 1
                    ? 'border-[#006948] bg-[#f2f3ff]'
                    : 'border-slate-200 bg-white hover:bg-slate-50'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                    deliveryMethod === 1
                      ? 'bg-[#006948] text-white'
                      : 'bg-slate-200 text-transparent'
                  }`}
                >
                  <span className="material-symbols-outlined text-[14px]">check</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold text-[#131b2e]">
                      จัดส่งด่วนเอกชน (Kerry / Flash Express)
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#006948]">
                      {qualifiesFreeShip ? 'ฟรี' : '฿100'}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#6d7a72] mt-0.5 leading-relaxed">
                    ถึงหน้าฟาร์มภายใน 1-2 วันทำการ {qualifiesFreeShip ? '(ยอดครบรับสิทธิ์ส่งฟรี)' : '(ปกติ ฿100)'}
                  </p>
                </div>
              </label>

              {/* Option 2: Farm Bulk Truck */}
              <label
                onClick={() => setDeliveryMethod(2)}
                className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-all border-2 ${
                  deliveryMethod === 2
                    ? 'border-[#006948] bg-[#f2f3ff]'
                    : 'border-slate-200 bg-white hover:bg-slate-50'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                    deliveryMethod === 2
                      ? 'bg-[#006948] text-white'
                      : 'bg-slate-200 text-transparent'
                  }`}
                >
                  <span className="material-symbols-outlined text-[14px]">check</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold text-[#131b2e]">
                      รถส่งเฉพาะกิจฟาร์มกุ้ง (Bulk Delivery)
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#2d6197]">
                      +฿350
                    </span>
                  </div>
                  <p className="text-[11px] text-[#6d7a72] mt-0.5 leading-relaxed">
                    เหมาะสำหรับการสั่งซื้อยกลัง/ปริมาณมาก มีพนักงานยกเรียงถึงโกดังอาหารหน้าบ่อ
                  </p>
                </div>
              </label>
            </div>
          </div>
        </section>

        {/* Coupon / Farm Discount Box */}
        <section className="px-4">
          <div className="bg-white p-4 rounded-2xl flex flex-col gap-2.5 shadow-xs border border-slate-100">
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-bold text-[#131b2e] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#00628d] text-[20px]">sell</span>
                โค้ดส่วนลดพันธมิตรฟาร์ม
              </span>
              <span className="text-[11px] text-[#6d7a72]">
                โค้ดแนะนำ: SHRIMP130 / BIOFARM
              </span>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="กรอกรหัสส่วนลด เช่น SHRIMP130"
                className="flex-1 h-11 px-4 rounded-full bg-[#f2f3ff] text-[#131b2e] text-xs sm:text-sm font-bold uppercase tracking-wider outline-none border border-transparent focus:border-[#006948]"
              />
              <button
                type="button"
                onClick={handleApplyCoupon}
                className="px-5 h-11 bg-[#2d6197] hover:bg-[#1e4d7d] text-white text-xs sm:text-sm font-bold rounded-full active:scale-95 transition-all"
              >
                ใช้งาน
              </button>
            </div>

            {appliedCoupon && finalDiscount > 0 && (
              <div className="flex items-center gap-1.5 text-[#006948] text-xs font-semibold">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                <span>
                  ใช้โค้ด <b>{appliedCoupon}</b> แล้ว: ลดเพิ่ม ฿{finalDiscount} สำหรับเกษตรกร
                </span>
              </div>
            )}
          </div>
        </section>

        {/* Quick Customer Info Form */}
        <section className="px-4">
          <div className="bg-white p-4 rounded-2xl flex flex-col gap-3 shadow-xs border border-slate-100">
            <div className="flex items-center justify-between pb-1 border-b border-slate-100">
              <h3 className="text-xs sm:text-sm font-bold text-[#131b2e] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#006948] text-[20px]">badge</span>
                ข้อมูลผู้รับและการจัดส่ง
              </h3>
              <span className="text-[10px] text-[#6d7a72] bg-[#eaedff] px-2 py-0.5 rounded-full font-medium">
                ใช้ส่งข้อมูลเข้า LINE
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {/* Name */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#3d4a42] flex items-center gap-1">
                  <span>ชื่อ-นามสกุล / ชื่อฟาร์ม</span>
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center bg-[#f2f3ff] rounded-xl px-3.5 h-11 border border-slate-200/60 focus-within:border-[#006948]">
                  <span className="material-symbols-outlined text-slate-400 text-[18px] mr-2">person</span>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="ระบุชื่อผู้รับ หรือ ชื่อฟาร์มเลี้ยงกุ้ง"
                    className="w-full bg-transparent text-xs sm:text-sm text-[#131b2e] outline-none"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#3d4a42] flex items-center gap-1">
                  <span>เบอร์โทรศัพท์ติดต่อหน้าบ่อ</span>
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center bg-[#f2f3ff] rounded-xl px-3.5 h-11 border border-slate-200/60 focus-within:border-[#006948]">
                  <span className="material-symbols-outlined text-slate-400 text-[18px] mr-2">phone_iphone</span>
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="08X-XXX-XXXX"
                    className="w-full bg-transparent text-xs sm:text-sm text-[#131b2e] outline-none"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#3d4a42] flex items-center gap-1">
                  <span>ที่อยู่จัดส่ง / พิกัดฟาร์ม</span>
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex items-start bg-[#f2f3ff] rounded-xl p-3 border border-slate-200/60 focus-within:border-[#006948]">
                  <span className="material-symbols-outlined text-slate-400 text-[18px] mr-2 mt-0.5">location_on</span>
                  <textarea
                    rows={2}
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    placeholder="บ้านเลขที่ หมู่ ซอย ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"
                    className="w-full bg-transparent text-xs sm:text-sm text-[#131b2e] outline-none resize-none leading-relaxed"
                  />
                </div>
              </div>

              {/* Order Notes */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#3d4a42]">
                  หมายเหตุถึงขนส่ง / ทางร้าน
                </label>
                <div className="flex items-center bg-[#f2f3ff] rounded-xl px-3.5 h-11 border border-slate-200/60 focus-within:border-[#006948]">
                  <span className="material-symbols-outlined text-slate-400 text-[18px] mr-2">edit_note</span>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="เช่น ฝากป้อมยามหน้าฟาร์ม หรือระบุช่วงเวลาส่ง"
                    className="w-full bg-transparent text-xs sm:text-sm text-[#131b2e] outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Order Summary Card */}
        <section className="px-4">
          <div className="bg-white p-4 rounded-2xl flex flex-col gap-3 shadow-xs border border-slate-100">
            <h3 className="text-xs sm:text-sm font-bold text-[#131b2e] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#2d6197] text-[20px]">receipt_long</span>
              สรุปยอดคำนวณราคา
            </h3>

            <div className="flex flex-col gap-2 pt-1 text-xs sm:text-sm">
              <div className="flex items-center justify-between text-[#3d4a42]">
                <span>รวมราคาสินค้า ({totalItemsCount} ชิ้น)</span>
                <span className="font-bold text-[#131b2e] tabular-nums">
                  ฿{subtotal.toLocaleString('th-TH')}
                </span>
              </div>

              {finalDiscount > 0 && (
                <div className="flex items-center justify-between text-[#00628d]">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">local_offer</span>
                    ส่วนลดโปรโมชั่น ({appliedCoupon})
                  </span>
                  <span className="font-bold tabular-nums">
                    -฿{finalDiscount.toLocaleString('th-TH')}
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between text-[#3d4a42]">
                <span className="flex items-center gap-1">
                  <span>ค่าบริการจัดส่ง</span>
                  {shippingCost === 0 && (
                    <span className="text-[10px] bg-[#85f8c4] text-[#002114] px-1.5 py-0.2 rounded font-bold">
                      สิทธิ์ส่งฟรี
                    </span>
                  )}
                </span>
                <span className="font-bold text-[#006948] tabular-nums">
                  {shippingCost === 0 ? 'ฟรี' : `฿${shippingCost.toLocaleString('th-TH')}`}
                </span>
              </div>

              <div className="h-[1px] bg-slate-100 my-1"></div>

              <div className="flex items-baseline justify-between pt-1">
                <div>
                  <span className="text-sm sm:text-base font-black text-[#131b2e] block">
                    ยอดรวมสุทธิ
                  </span>
                  <span className="text-[10px] text-[#6d7a72]">
                    รวมภาษีและค่าจัดส่งแล้ว
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-2xl sm:text-3xl font-black text-[#006948] tabular-nums">
                    ฿{grandTotal.toLocaleString('th-TH')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Guarantee Banner */}
        <section className="px-4">
          <div className="bg-[#f2f3ff] p-3.5 rounded-2xl flex items-center gap-3 border border-slate-200/50">
            <div className="w-10 h-10 rounded-full bg-[#85f8c4] flex items-center justify-center text-[#002114] shrink-0 shadow-2xs">
              <span className="material-symbols-outlined text-[22px]">verified_user</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#131b2e]">
                รับประกันคุณภาพมีชีวิต 100%
              </span>
              <span className="text-[11px] text-[#6d7a72] leading-tight">
                จุลินทรีย์สายพันธุ์แท้ ส่งตรงจากห้องแล็บเพาะเชื้อ มีทีมผู้เชี่ยวชาญดูแลบ่อ
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* Sticky Bottom Checkout Bar */}
      <div className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-xl p-4 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] z-40 flex flex-col gap-2 pb-safe border-t border-slate-100">
        <div className="max-w-4xl mx-auto w-full flex flex-col gap-2">
          {/* Action 1: LINE Instant Order (Direct WhatsApp/LINE style) */}
          <button
            type="button"
            onClick={handleOrderViaLine}
            className="w-full h-12 sm:h-13 py-3 px-4 rounded-full bg-[#06C755] hover:bg-[#05b34c] text-white flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-all cursor-pointer"
          >
            <svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 5.92 2 10.75c0 4.3 3.6 7.9 8.48 8.63.33.07.78.22.89.51.1.26.07.67.03.93l-.15.93c-.05.28-.21 1.11.97.6 1.18-.5 6.38-3.76 8.71-6.44C22.25 13.9 22 10.75 22 10.75 22 5.92 17.52 2 12 2zm-4.7 11.23h-1.5c-.32 0-.58-.26-.58-.58V8.15c0-.32.26-.58.58-.58h1.5c.32 0 .58.26.58.58v4.5c0 .32-.26.58-.58.58zm3.2 0h-1.5c-.32 0-.58-.26-.58-.58V8.15c0-.32.26-.58.58-.58h1.5c.32 0 .58.26.58.58v4.5c0 .32-.26.58-.58.58zm5.2-3.15c0 .32-.26.58-.58.58h-1.7v1.99c0 .32-.26.58-.58.58h-.05c-.32 0-.58-.26-.58-.58V8.15c0-.32.26-.58.58-.58h2.33c.32 0 .58.26.58.58v1.93zm2.95 3.15h-1.5c-.32 0-.58-.26-.58-.58V8.15c0-.32.26-.58.58-.58h1.5c.32 0 .58.26.58.58v4.5c0 .32-.26.58-.58.58z"></path>
            </svg>
            <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
              สั่งซื้อผ่าน LINE ทันที (ส่งเข้า {contactConfig?.lineId || '@883nmhsl'})
            </span>
          </button>

          {onOpenLineSettings && (
            <div className="flex items-center justify-between text-[11px] text-slate-500 px-1">
              <span>ส่งข้อมูลไปยัง LINE OA: <strong>{contactConfig?.lineId || '@883nmhsl'}</strong></span>
              <button
                type="button"
                onClick={onOpenLineSettings}
                className="text-[#006948] font-bold hover:underline"
              >
                เปลี่ยน LINE OA
              </button>
            </div>
          )}

          {/* Action 2: Bank Transfer Checkout */}
          <button
            type="button"
            onClick={handleOrderViaBank}
            className="w-full h-11 py-2.5 px-4 rounded-full bg-[#eaedff] hover:bg-[#dae2fd] text-[#131b2e] text-xs sm:text-sm font-bold flex items-center justify-center gap-2 active:scale-[0.98] transition-all cursor-pointer border border-slate-200"
          >
            <span className="material-symbols-outlined text-[#2d6197] text-[20px]">account_balance</span>
            <span>ดำเนินการสั่งซื้อและโอนเงินผ่านธนาคาร / พร้อมเพย์</span>
          </button>

          <div className="flex items-center justify-center gap-3 text-[#6d7a72] text-[11px] font-medium text-center pt-0.5">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-[#006948]">security</span>
              ชำระเงินปลอดภัย
            </span>
            <span>•</span>
            <span>ออกใบเสร็จ / ใบกำกับภาษีฟาร์มได้</span>
          </div>
        </div>
      </div>
    </div>
  );
};
