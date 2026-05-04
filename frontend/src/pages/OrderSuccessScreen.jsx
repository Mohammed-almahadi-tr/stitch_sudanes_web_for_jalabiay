import React from 'react';

export default function OrderSuccessScreen() {
  return (
    <>
<main className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">

<div className="absolute inset-0 pointer-events-none opacity-[0.03] asymmetric-pattern bg-primary"></div>

<div className="w-full max-w-md flex flex-col items-center text-center space-y-10">

<div className="relative">

<div className="absolute inset-0 bg-primary-container/20 rounded-full blur-3xl scale-150"></div>

<div className="relative flex items-center justify-center w-32 h-32 rounded-full border-4 border-primary-container">
<span className="material-symbols-outlined text-primary text-6xl" >
                        check_circle
                    </span>

<div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-secondary-fixed"></div>
<div className="absolute top-1/2 -left-4 w-3 h-3 rounded-full bg-primary-fixed"></div>
<div className="absolute -bottom-2 right-1/4 w-2 h-2 rounded-full bg-outline"></div>
</div>
</div>

<div className="space-y-4">
<h1 className="font-headline font-bold text-3xl md:text-4xl text-on-surface tracking-tight">
                    تم تقديم الطلب بنجاح!
                </h1>
<p className="text-tertiary text-lg max-w-xs mx-auto leading-relaxed">
                    طلبك الآن قيد المعالجة من قبل الخياط المختار. سنقوم بإبلاغك بكل جديد.
                </p>
<div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAFAF8]-container-low rounded-full mt-4">
<span className="text-on-surface-variant font-medium">رقم الطلب:</span>
<span className="text-primary font-bold font-headline">#HD-88291</span>
</div>
</div>

<div className="w-full bg-[#FAFAF8]-container-lowest rounded-xl p-6 shadow-[0_8px_32px_rgba(26,28,27,0.04)] text-right space-y-4">
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-[#FAFAF8]-container">
<img alt="Tailor working on a traditional Sudanese Jellabiya with intricate embroidery" className="w-full h-full object-cover" data-alt="close-up of artisan hands sewing intricate golden embroidery on a premium white cotton fabric in a sunlit workshop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW5S7izdtmVICJaFpk5OWth0N9vqf3-n058LKu-SLQzkmENJBfhJEr-TX5GpTyc4L6ldNv3f0VdT3kVaLqJetio-2JRifD-sYI2woHL4U5uah9OiAba3tVf_dppqfZ9Ks2TnpIFfGPby9Vih2WUadYmolkiUCgHWy284yPY-utbBeHb1rYL5OaXWJxBlBiiESBtbJl8Z0cufnM_6HcYHnDkOYu9EMdX455nAEtRl3v1l30LV-EY45Iy-dMg0pd7nHczFlJ2a11tny5"/>
</div>
<div className="flex-1">
<h3 className="font-bold text-on-surface">جلابية سودانية ملكي</h3>
<p className="text-sm text-tertiary">الخياط: محمد عبدالله</p>
</div>
<div className="text-left">
<span className="block text-primary font-bold">450 ج.س</span>
<span className="text-[10px] text-secondary font-semibold bg-secondary-fixed px-2 py-0.5 rounded-full uppercase">مدفوع</span>
</div>
</div>
</div>

<div className="w-full space-y-4 pt-4">
<button className="w-full bg-signature-gradient text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 active:scale-95 transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-xl">shopping_bag</span>
                    عرض طلباتي
                </button>
<div className="grid grid-cols-2 gap-4">
<button className="flex items-center justify-center gap-2 py-3 px-4 border-0 bg-white shadow-sm rounded-xl text-on-surface-variant font-semibold hover:bg-[#FAFAF8]-container-low transition-colors">
<span className="material-symbols-outlined text-lg">star</span>
                        تقييم الخياط
                    </button>
<button className="flex items-center justify-center gap-2 py-3 px-4 border-0 bg-white shadow-sm rounded-xl text-on-surface-variant font-semibold hover:bg-[#FAFAF8]-container-low transition-colors">
<span className="material-symbols-outlined text-lg">home</span>
                        الرئيسية
                    </button>
</div>
</div>

<p className="text-xs text-tertiary italic">
                ستصلك رسالة تأكيد عبر البريد الإلكتروني والرسائل النصية قريباً.
            </p>
</div>
</main>
    </>
  );
}