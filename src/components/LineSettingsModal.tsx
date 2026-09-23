import React, { useState, useEffect } from 'react';

export interface FarmContactConfig {
  name: string;
  phone: string;
  phoneDisplay: string;
  lineId: string;
  lineUrl: string;
  facebook?: string;
  tiktok?: string;
  address?: string;
  bankName?: string;
  bankAccount?: string;
  accountName?: string;
  promptPay?: string;
}

interface LineSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  contactConfig: FarmContactConfig;
  onSaveConfig: (newConfig: FarmContactConfig) => void;
  onResetDefault: () => void;
}

export const LineSettingsModal: React.FC<LineSettingsModalProps> = ({
  isOpen,
  onClose,
  contactConfig,
  onSaveConfig,
  onResetDefault,
}) => {
  const [lineId, setLineId] = useState(contactConfig.lineId);
  const [lineUrl, setLineUrl] = useState(contactConfig.lineUrl);
  const [testStatus, setTestStatus] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setLineId(contactConfig.lineId);
      setLineUrl(contactConfig.lineUrl);
      setTestStatus(null);
    }
  }, [isOpen, contactConfig]);

  if (!isOpen) return null;

  // Auto-generate lin.ee or line.me URL when LINE ID changes if URL is standard
  const handleLineIdChange = (newId: string) => {
    setLineId(newId);
    const cleanId = newId.trim();
    if (cleanId) {
      const formattedId = cleanId.startsWith('@') ? cleanId : `@${cleanId}`;
      // Suggest standard LINE OA message/ti URL
      setLineUrl(`https://line.me/R/ti/p/${formattedId}`);
    }
  };

  const handleTestLink = () => {
    const targetUrl = lineUrl.trim() || `https://line.me/R/ti/p/${lineId.startsWith('@') ? lineId : '@' + lineId}`;
    try {
      window.open(targetUrl, '_blank');
      setTestStatus('เปิดลิงก์ทดสอบสำเร็จ! โปรดตรวจสอบว่าเบราว์เซอร์เปิดไปยัง LINE OA ของคุณแล้วหรือไม่');
    } catch {
      setTestStatus('ไม่สามารถเปิดลิงก์ได้ กรุณาตรวจสอบรูปแบบ URL');
    }
  };

  const handleTestOrderMessage = () => {
    const formattedId = lineId.startsWith('@') ? lineId : `@${lineId}`;
    const testText = encodeURIComponent('สวัสดีครับ สอบถามข้อมูลสินค้า กุ้งน้อยโปรไบโอติก ครับ');
    const targetUrl = `https://line.me/R/oaMessage/${formattedId}/?text=${testText}`;
    window.open(targetUrl, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = lineId.trim() || '@883nmhsl';
    const formattedId = cleanId.startsWith('@') ? cleanId : `@${cleanId}`;
    const cleanUrl = lineUrl.trim() || `https://line.me/R/ti/p/${formattedId}`;

    onSaveConfig({
      ...contactConfig,
      lineId: formattedId,
      lineUrl: cleanUrl,
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#131b2e]/60 backdrop-blur-xs flex flex-col justify-end sm:justify-center items-center p-0 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-3xl p-5 sm:p-6 flex flex-col gap-4 shadow-2xl max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#06c755]/15 text-[#06c755] flex items-center justify-center font-bold text-lg">
              💬
            </div>
            <div>
              <h2 className="text-base font-bold text-[#131b2e]">
                ตั้งค่า LINE Official Account (LINE OA)
              </h2>
              <p className="text-xs text-slate-500">
                เปลี่ยนลิงก์ปลายทางให้ชี้ไปยัง LINE OA ของคุณเอง
              </p>
            </div>
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

        {/* Info Callout */}
        <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-start gap-3 text-xs text-emerald-900 leading-relaxed">
          <span className="material-symbols-outlined text-emerald-600 text-[20px] shrink-0 mt-0.5">
            verified
          </span>
          <div>
            <strong>สามารถเปลี่ยนได้ทันที!</strong> เมื่อคุณกรอก LINE ID หรือลิงก์ LINE OA แล้วกดบันทึก ทุกปุ่มในระบบ (ปุ่มสั่งซื้อผ่าน LINE ในตะกร้า, ปุ่มสอบถามแอดมิน, ปุ่มติดต่อ ฯลฯ) จะเปลี่ยนไปเปิด LINE OA ของคุณทันที
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Field 1: LINE ID */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-800 flex items-center justify-between">
              <span>LINE OA ID (ไอดีไลน์ร้าน)</span>
              <span className="text-[11px] text-slate-400 font-normal">เช่น @myfarm หรือ @kungnoi</span>
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-semibold">
                @
              </span>
              <input
                type="text"
                value={lineId.replace(/^@/, '')}
                onChange={(e) => handleLineIdChange('@' + e.target.value.replace(/^@/, ''))}
                placeholder="ชื่อไอดีไลน์ของคุณ (มีหรือไม่มี @ ก็ได้)"
                className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#006948] focus:ring-2 focus:ring-[#006948]/20 outline-none text-sm text-slate-900 font-medium"
              />
            </div>
            <p className="text-[11px] text-slate-500">
              * ไอดีนี้จะแสดงบนหน้าเว็บให้ลูกค้าเห็น เช่น &quot;LINE OA: {lineId}&quot;
            </p>
          </div>

          {/* Field 2: LINE URL */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-800 flex items-center justify-between">
              <span>ลิงก์เปิด LINE หรือ ลิงก์เพิ่มเพื่อน (URL)</span>
              <span className="text-[11px] text-[#006948] font-medium">รองรับ https://lin.ee/...</span>
            </label>
            <input
              type="url"
              value={lineUrl}
              onChange={(e) => setLineUrl(e.target.value)}
              placeholder="https://lin.ee/xxxxxxx หรือ https://line.me/R/ti/p/@xxxx"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#006948] focus:ring-2 focus:ring-[#006948]/20 outline-none text-xs text-slate-900 font-mono"
            />
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              <span className="text-[10px] text-slate-500">ตัวอย่างรูปแบบที่ใช้ได้:</span>
              <button
                type="button"
                onClick={() => setLineUrl(`https://line.me/R/ti/p/${lineId.startsWith('@') ? lineId : '@' + lineId}`)}
                className="text-[10px] text-blue-600 hover:underline bg-blue-50 px-2 py-0.5 rounded"
              >
                line.me/R/ti/p/{lineId}
              </button>
              <button
                type="button"
                onClick={() => setLineUrl(`https://line.me/R/oaMessage/${lineId.startsWith('@') ? lineId : '@' + lineId}/`)}
                className="text-[10px] text-emerald-600 hover:underline bg-emerald-50 px-2 py-0.5 rounded"
              >
                line.me/R/oaMessage/{lineId}/
              </button>
            </div>
          </div>

          {/* Testing tools */}
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col gap-2">
            <span className="text-xs font-bold text-slate-700">ทดสอบการทำงานของลิงก์:</span>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleTestLink}
                className="py-2 px-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
              >
                <span className="material-symbols-outlined text-[16px] text-[#06c755]">open_in_new</span>
                <span>ทดสอบเปิดหน้า LINE</span>
              </button>
              <button
                type="button"
                onClick={handleTestOrderMessage}
                className="py-2 px-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
              >
                <span className="material-symbols-outlined text-[16px] text-emerald-600">send</span>
                <span>ทดสอบส่งข้อความแชต</span>
              </button>
            </div>
            {testStatus && (
              <p className="text-[11px] text-emerald-700 bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                {testStatus}
              </p>
            )}
          </div>

          {/* Permanent code location tip */}
          <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-200/60 text-xs text-amber-900 flex items-start gap-2">
            <span className="material-symbols-outlined text-amber-600 text-[18px] shrink-0 mt-0.5">code</span>
            <div>
              <p className="font-bold">หากต้องการแก้ไขถาวรในโค้ดต้นฉบับ:</p>
              <p className="text-[11px] text-amber-800 font-mono mt-0.5">
                /src/data/mockData.ts &rarr; FARM_CONTACT_INFO
              </p>
              <p className="text-[11px] text-amber-800 mt-1">
                หรือสามารถพิมพ์บอก LINE ID / ลิงก์ของคุณในช่องแชตนี้ เพื่อให้ AI อัปเดตไฟล์ให้ทันทีได้เช่นกันครับ!
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 pt-2">
            <button
              type="button"
              onClick={() => {
                onResetDefault();
                onClose();
              }}
              className="py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
            >
              คืนค่าเริ่มต้น
            </button>
            <div className="flex-1 flex gap-2 justify-end">
              <button
                type="button"
                onClick={onClose}
                className="py-2.5 px-4 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                ยกเลิก
              </button>
              <button
                type="submit"
                className="py-2.5 px-5 rounded-xl bg-[#006948] hover:bg-[#005137] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[16px]">check</span>
                <span>บันทึกการตั้งค่า</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
