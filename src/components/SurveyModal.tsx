import React, { useState } from 'react';
import { OFFICIAL_IMAGES } from '../data/mockData';

interface SurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyRewardCoupon: (code: string) => void;
}

export const SurveyModal: React.FC<SurveyModalProps> = ({
  isOpen,
  onClose,
  onApplyRewardCoupon,
}) => {
  const [shrimpType, setShrimpType] = useState<string>('กุ้งขาวแวนนาไม');
  const [pondCount, setPondCount] = useState<string>('3-5 บ่อ');
  const [challenge, setChallenge] = useState<string>('น้ำขุ่น มีตะกอนพื้นบ่อ');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    onApplyRewardCoupon('KUNG50');
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#131b2e]/60 backdrop-blur-xs flex flex-col justify-end sm:justify-center items-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div
        className="w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl p-5 flex flex-col gap-4 shadow-2xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-amber-600 text-[22px]">assignment</span>
            <h2 className="text-base font-bold text-[#131b2e]">
              แบบสอบถามข้อมูลฟาร์มกุ้ง
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

        {isSubmitted ? (
          <div className="flex flex-col items-center text-center gap-3 py-4">
            <div className="w-14 h-14 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shadow-xs">
              <span className="material-symbols-outlined text-[32px]">card_giftcard</span>
            </div>
            <h3 className="text-lg font-bold text-slate-800">
              ขอบคุณสำหรับความคิดเห็นครับ!
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed max-w-xs">
              คุณได้รับโค้ดส่วนลดพิเศษ <strong>KUNG50</strong> มูลค่า ฿50 (ระบบได้นำไปกรอกในตะกร้าสินค้าให้คุณเรียบร้อยแล้ว)
            </p>

            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-center">
              <span className="text-xs text-amber-800 block">โค้ดส่วนลดของคุณ:</span>
              <span className="text-xl font-black text-amber-900 tracking-wider">KUNG50</span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full h-11 rounded-full bg-[#006948] text-white text-xs font-bold hover:bg-[#005137] transition-all shadow-md mt-2"
            >
              รับโค้ดและเลือกซื้อสินค้า
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
            <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
              <img
                src={OFFICIAL_IMAGES.mascotSticker}
                alt="กุ้งน้อย"
                className="w-10 h-10 object-contain"
              />
              <span>ตอบเพียง 3 คำถามง่ายๆ รับโค้ดส่วนลด ฿50 ทันที!</span>
            </div>

            {/* Q1: สายพันธุ์กุ้ง */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-700">
                1. ฟาร์มของคุณเลี้ยงกุ้งชนิดใดเป็นหลัก?
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {['กุ้งขาวแวนนาไม', 'กุ้งกุลาดำ', 'กุ้งก้ามกราม'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setShrimpType(type)}
                    className={`py-2 px-2 rounded-xl text-xs font-semibold border transition-all text-center ${
                      shrimpType === type
                        ? 'bg-[#006948] text-white border-[#006948]'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Q2: จำนวนบ่อ */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-700">
                2. ขนาดฟาร์มปัจจุบันของคุณ?
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {['1-2 บ่อ', '3-5 บ่อ', '6 บ่อขึ้นไป'].map((cnt) => (
                  <button
                    key={cnt}
                    type="button"
                    onClick={() => setPondCount(cnt)}
                    className={`py-2 px-2 rounded-xl text-xs font-semibold border transition-all text-center ${
                      pondCount === cnt
                        ? 'bg-[#2d6197] text-white border-[#2d6197]'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {cnt}
                  </button>
                ))}
              </div>
            </div>

            {/* Q3: ปัญหาที่พบบ่อย */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-700">
                3. ปัญหาในการเลี้ยงที่ต้องการแก้ไขมากที่สุด?
              </label>
              <div className="grid gap-1.5">
                {[
                  'น้ำขุ่น มีตะกอนพื้นบ่อและแก๊สแอมโมเนีย',
                  'กุ้งกินอาหารช้า กินไม่หมดรอบ อาหารเหลือ',
                  'ต้องการลดต้นทุนการใช้สารเคมีและยาปฏิชีวนะ',
                ].map((ch) => (
                  <button
                    key={ch}
                    type="button"
                    onClick={() => setChallenge(ch)}
                    className={`p-2.5 rounded-xl text-xs font-semibold border text-left flex items-center justify-between transition-all ${
                      challenge === ch
                        ? 'bg-[#e2e7ff] text-[#131b2e] border-[#2d6197]'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span>{ch}</span>
                    {challenge === ch && (
                      <span className="material-symbols-outlined text-[16px] text-[#2d6197]">
                        check_circle
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-11 rounded-full bg-[#006948] hover:bg-[#005137] text-white text-xs sm:text-sm font-bold active:scale-95 transition-all shadow-md mt-2"
            >
              ส่งแบบสอบถาม &amp; รับโค้ดส่วนลด ฿50
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
