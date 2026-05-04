import React from 'react';

export default function OrderConfirmationScreen() {
  return (
    <>
<nav className="w-full top-0 sticky bg-[#FAFAF8] dark:bg-neutral-900 z-50">
<div className="flex justify-between items-center px-6 py-4 w-full">
<div className="flex items-center gap-4">
<button className="text-[#755b00] dark:text-[#C9A84C] hover:opacity-80 transition-opacity active:scale-95 duration-150">
<span className="material-symbols-outlined">arrow_forward</span>
</button>
<h1 className="font-headline font-bold text-lg dark:text-white">تأكيد الطلب</h1>
</div>
<div className="text-[#755b00] dark:text-[#C9A84C] font-bold text-xl">Heritage</div>
</div>
</nav>
<main className="max-w-2xl mx-auto px-6 pb-32 pt-4 space-y-8">

<header className="text-center py-6">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-container text-secondary mb-4">
<span className="material-symbols-outlined text-3xl" >check_circle</span>
</div>
<h2 className="font-headline text-2xl font-bold text-on-surface">مراجعة تفاصيل طلبك</h2>
<p className="text-tertiary mt-2">يرجى التحقق من البيانات قبل الانتقال للدفع</p>
</header>

<section className="space-y-4">
<h3 className="text-sm font-bold text-primary tracking-wider uppercase px-2">ملخص التصميم</h3>
<div className="bg-[#FAFAF8]-container-lowest rounded-xl p-4 flex gap-6 shadow-[0_4px_12px_rgba(26,28,27,0.04)] relative overflow-hidden">
<div className="w-24 h-32 rounded-lg overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="close-up of elegant white Sudanese Jellabiya with intricate golden embroidery details on fine cotton fabric" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEfzguvqo_9q1uxj90rf2Wn0t4c1NqSsmeu0QMrtbfTaPthv0hNt1QIen9_cNSVju8YL1bq1ZpzFU1KTXs4L0QT7dCeL82I0bAy-R3V1veO2UIcFY3CKUGfiCTHRNVq6Jla83Z-T3QvmB9sHfScExLlfhRshDzMrKPer3bgNB_lG77R_F_pWHYindWpd4G-B8kypqdTwZHWAnIH-U_pE63crlmcaY6DAnQGdl_hsscgFioDHSCnQqTcHPM7yXQHhbsJsVZbeOWKvsq"/>
</div>
<div className="flex flex-col justify-between py-1">
<div>
<h4 className="font-headline font-bold text-lg">جلابية ملكية مطرزة</h4>
<div className="flex items-center gap-2 mt-1 text-tertiary">
<span className="material-symbols-outlined text-sm">content_cut</span>
<span className="text-sm font-medium">الخياط: محمد عثمان</span>
</div>
</div>
<div className="mt-4">
<span className="text-xs text-tertiary block mb-1">السعر الإجمالي</span>
<span className="text-xl font-bold text-primary">45,000 SDG</span>
</div>
</div>

<div className="absolute top-0 left-0 w-24 h-full opacity-[0.03] pointer-events-none">
<svg fill="none" height="100%" viewbox="0 0 100 100" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M0 20L20 0M10 30L30 10M20 40L40 20M30 50L50 30" stroke="currentColor" stroke-width="2"></path>
</svg>
</div>
</div>
</section>

<section className="space-y-4">
<div className="flex justify-between items-center px-2">
<h3 className="text-sm font-bold text-primary tracking-wider uppercase">بيانات القياس</h3>
<button className="text-primary text-xs font-bold hover:underline">تعديل</button>
</div>
<div className="bg-[#FAFAF8]-container-low rounded-xl overflow-hidden">
<div className="flex items-center justify-between p-4 bg-[#FAFAF8]-container-lowest/50">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">straighten</span>
</div>
<div>
<p className="font-bold text-sm text-on-surface">المقاسات الشخصية</p>
<p className="text-[11px] text-tertiary">آخر تحديث: 12 أكتوبر 2023</p>
</div>
</div>
<button className="text-on-surface-variant">
<span className="material-symbols-outlined">expand_more</span>
</button>
</div>

<div className="px-4 pb-4 pt-2 flex flex-wrap gap-2">
<span className="px-3 py-1 bg-[#FAFAF8]-container-highest rounded-full text-[10px] font-semibold text-on-surface-variant">الكتف: 48 سم</span>
<span className="px-3 py-1 bg-[#FAFAF8]-container-highest rounded-full text-[10px] font-semibold text-on-surface-variant">الطول: 155 سم</span>
<span className="px-3 py-1 bg-[#FAFAF8]-container-highest rounded-full text-[10px] font-semibold text-on-surface-variant">الصدر: 110 سم</span>
</div>
</div>
</section>

<section className="space-y-4">
<h3 className="text-sm font-bold text-primary tracking-wider uppercase px-2">طريقة الدفع</h3>
<div className="bg-[#FAFAF8]-container-lowest rounded-xl p-4 flex items-center justify-between shadow-[0_4px_12px_rgba(26,28,27,0.04)]">
<div className="flex items-center gap-4">
<div className="w-12 h-8 bg-[#FAFAF8]-container-highest rounded flex items-center justify-center">
<span className="material-symbols-outlined text-primary">account_balance_wallet</span>
</div>
<div>
<p className="font-bold text-sm">بنكك (Bankak)</p>
<p className="text-xs text-tertiary">الدفع عبر تطبيق بنك الخرطوم</p>
</div>
</div>
<span className="material-symbols-outlined text-secondary" >check_circle</span>
</div>
</section>

<section className="p-6 bg-[#FAFAF8]-container-low rounded-2xl border-r-4 border-primary">
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-2 h-2 rounded-full bg-primary"></div>
<div className="w-0.5 h-12 bg-outline-variant/30"></div>
<div className="w-2 h-2 rounded-full bg-outline-variant"></div>
</div>
<div className="space-y-6">
<div>
<h4 className="text-sm font-bold text-on-surface">وقت الاستلام المتوقع</h4>
<p className="text-xs text-tertiary mt-1">24 - 28 أكتوبر 2023</p>
</div>
<div>
<h4 className="text-sm font-bold text-on-surface-variant opacity-60">تأكيد الطلب وبدء الخياطة</h4>
<p className="text-xs text-tertiary opacity-60 mt-1">يتم البدء فور إتمام عملية الدفع</p>
</div>
</div>
</div>
</section>
</main>

<div className="fixed bottom-0 left-0 w-full z-50 px-6 pb-8 pt-4 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border-t border-neutral-100 dark:border-neutral-800">
<div className="max-w-2xl mx-auto flex flex-col gap-4">
<div className="flex justify-between items-center px-2">
<span className="text-tertiary font-medium">المبلغ المستحق</span>
<span className="text-2xl font-bold text-on-surface">45,000 <span className="text-sm font-normal text-tertiary">SDG</span></span>
</div>
<button className="signature-gradient w-full py-4 rounded-xl text-white font-bold title-sm shadow-lg active:scale-95 duration-200 flex items-center justify-center gap-2">
<span>تأكيد والدفع</span>
<span className="material-symbols-outlined">payments</span>
</button>
</div>
</div>

<div className="fixed inset-0 pointer-events-none opacity-[0.02] -z-10 overflow-hidden">
<svg className="absolute -top-20 -right-20 w-96 h-96 text-primary" fill="currentColor" viewbox="0 0 100 100">
<rect fill="none" height="80" rx="4" stroke="currentColor" stroke-width="0.5" transform="rotate(45 50 50)" width="80" x="10" y="10"></rect>
<rect fill="none" height="60" rx="4" stroke="currentColor" stroke-width="0.5" transform="rotate(45 50 50)" width="60" x="20" y="20"></rect>
<circle cx="50" cy="50" fill="currentColor" r="5"></circle>
</svg>
</div>
    </>
  );
}