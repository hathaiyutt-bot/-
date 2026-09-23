import React, { useState } from 'react';
import { FARM_CONTACT_INFO, OFFICIAL_IMAGES } from '../data/mockData';
import { CartItem } from '../types';

interface BankTransferModalProps {
  orderDetails: {
    total: number;
    subtotal: number;
    discount: number;
    shipping: number;
    items: CartItem[];
    customerName: string;
    customerPhone: string;
    customerAddress: string;
    notes: string;
  } | null;
  onClose: () => void;
  onOrderCompleted: () => void;
}

export const BankTransferModal: React.FC<BankTransferModalProps> = ({
  orderDetails,
  onClose,
  onOrderCompleted,
}) => {
  const [hasUploadedSlip, setHasUploadedSlip] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [orderNumber] = useState<string>(() => 'KNB-' + Math.floor(100000 + Math.random() * 900000));

  if (!orderDetails) return null;

  const handleSimulateUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setHasUploadedSlip(true);
    }
  };

  const handleConfirmPayment = () => {
    setIsSuccess(true);
  };

  const handleFinish = () => {
    onOrderCompleted();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#131b2e]/60 backdrop-blur-xs flex flex-col justify-end sm:justify-center items-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div
        className="w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl p-5 flex flex-col gap-4 shadow-2xl max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {isSuccess ? (
          <div className="flex flex-col items-center text-center gap-3 py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#006948] flex items-center justify-center shadow-md animate-bounce">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-black text-[#131b2e]">
                สั่งซื้อและแจ้งชำระเงินสำเร็จ!
              </h2>
              <span className="text-xs text-slate-500">
                รหัสคำสั่งซื้อ: <strong className="text-[#006948]">{orderNumber}</strong>
              </span>
            </div>

            <div className="w-full p-4 rounded-2xl bg-[#f2f3ff] text-left text-xs space-y-2 border border-slate-100">
              <div className="flex justify-between font-bold text-slate-800">
                <span>ยอดเงินที่ชำระ:</span>
                <span className="text-[#006948] text-sm">
                  ฿{orderDetails.total.toLocaleString('th-TH')}
                </span>
              </div>
              <div className="text-slate-600">
                <strong>ผู้รับ:</strong> {orderDetails.customerName} ({orderDetails.customerPhone})
              </div>
              <div className="text-slate-600">
                <strong>ที่อยู่จัดส่ง:</strong> {orderDetails.customerAddress}
              </div>
              <div className="text-slate-600">
                <strong>สถานะ:</strong> รอเจ้าหน้าที่ตรวจสอบสลิปและเตรียมพัสดุ (1-2 วันทำการ)
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              ทางร้านได้รับข้อมูลคำสั่งซื้อแล้ว และจะทำการจัดส่งสินค้าไปยังฟาร์มของท่านโดยเร็วที่สุด
            </p>

            <button
              type="button"
              onClick={handleFinish}
              className="w-full h-12 rounded-full bg-[#006948] hover:bg-[#005137] text-white text-sm font-bold flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md mt-2"
            >
              <span>เสร็จสิ้นและกลับสู่หน้าหลัก</span>
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#2d6197] text-[22px]">account_balance</span>
                <h2 className="text-base font-bold text-[#131b2e]">
                  โอนเงินผ่านธนาคาร / พร้อมเพย์
                </h2>
              </div>
              <button
                type="button"
                aria-label="ปิดหน้าต่าง"
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Total to pay banner */}
            <div className="p-4 rounded-2xl bg-[#eaedff] border border-blue-200 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-slate-600 block">ยอดรวมที่ต้องชำระ:</span>
                <span className="text-2xl font-black text-[#006948] tabular-nums">
                  ฿{orderDetails.total.toLocaleString('th-TH')}
                </span>
              </div>
              <div className="text-right text-[11px] text-slate-500">
                สินค้า {orderDetails.items.length} รายการ
              </div>
            </div>

            {/* Bank Accounts */}
            <div className="flex flex-col gap-2.5">
              {/* Kasikorn Bank */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                      KB
                    </div>
                    <span className="text-xs font-bold text-slate-800">
                      {FARM_CONTACT_INFO.bankName}
                    </span>
                  </div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                    บัญชีหลัก
                  </span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <div className="text-sm font-black text-slate-900 tracking-wider">
                      {FARM_CONTACT_INFO.bankAccount}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      ชื่อบัญชี: {FARM_CONTACT_INFO.accountName}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(FARM_CONTACT_INFO.bankAccount);
                      alert('คัดลอกเลขบัญชีแล้ว: ' + FARM_CONTACT_INFO.bankAccount);
                    }}
                    className="px-2.5 py-1 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100"
                  >
                    คัดลอก
                  </button>
                </div>
              </div>

              {/* PromptPay */}
              <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sky-700 text-[20px]">qr_code_2</span>
                    <span className="text-xs font-bold text-sky-900">
                      พร้อมเพย์ (PromptPay)
                    </span>
                  </div>
                  <span className="text-[10px] bg-sky-200 text-sky-900 px-2 py-0.5 rounded-full font-bold">
                    สแกน QR
                  </span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <div className="text-sm font-black text-slate-900 tracking-wider">
                      {FARM_CONTACT_INFO.promptPay}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      บจก. กุ้งน้อย ไบโอ-อควา
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(FARM_CONTACT_INFO.promptPay);
                      alert('คัดลอกเบอร์พร้อมเพย์แล้ว: ' + FARM_CONTACT_INFO.promptPay);
                    }}
                    className="px-2.5 py-1 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100"
                  >
                    คัดลอก
                  </button>
                </div>
              </div>
            </div>

            {/* Slip Upload Area */}
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-slate-800">
                แนบสลิปการโอนเงิน:
              </span>
              <label className="border-2 border-dashed border-slate-300 hover:border-[#006948] rounded-2xl p-4 flex flex-col items-center justify-center gap-1.5 cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleSimulateUpload}
                  className="hidden"
                />
                {hasUploadedSlip ? (
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs">
                    <span className="material-symbols-outlined text-[20px]">task_alt</span>
                    <span>แนบรูปสลิปเรียบร้อยแล้ว (คลิกเพื่อเปลี่ยน)</span>
                  </div>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-slate-400 text-[28px]">
                      cloud_upload
                    </span>
                    <span className="text-xs font-bold text-slate-700">
                      คลิกเพื่ออัปโหลดสลิปหลักฐาน
                    </span>
                    <span className="text-[10px] text-slate-400">
                      รองรับไฟล์ JPG, PNG จากแอปธนาคาร
                    </span>
                  </>
                )}
              </label>
            </div>

            {/* Submit button */}
            <div className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={handleConfirmPayment}
                className="w-full h-12 rounded-full bg-[#006948] hover:bg-[#005137] text-white text-sm font-bold flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md"
              >
                <span className="material-symbols-outlined text-[20px]">check</span>
                <span>ยืนยันการโอนเงินและแจ้งคำสั่งซื้อ</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 text-center"
              >
                ยกเลิก / ชำระภายหลัง
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
