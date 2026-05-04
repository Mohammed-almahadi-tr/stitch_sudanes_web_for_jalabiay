import React from 'react';

export default function MeasurementsScreen() {
  return (
    <>
<header className="w-full top-0 sticky z-50 bg-[#FAFAF8] dark:bg-neutral-900 flex justify-between items-center px-6 py-4">
<div className="flex items-center gap-4">
<button className="text-[#755b00] dark:text-[#C9A84C] hover:opacity-80 transition-opacity active:scale-95 duration-150">
<span className="material-symbols-outlined">menu</span>
</button>
<h1 className="font-headline font-bold text-lg dark:text-white">مرحباً، محمد</h1>
</div>
<div className="w-10 h-10 rounded-full overflow-hidden border-0 bg-white shadow-sm">
<img alt="User profile photo" className="w-full h-full object-cover" data-alt="close-up portrait of a professional man with a kind expression and warm lighting in a studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAWcqb3h7jZqZdOOzqu5zO7rLfFJytYxPvvtXDMOvzYV9NUnTnlsi_N4yzEn0itQS5LDZTQ9SeioUYUp1EcOu3rzmUzTWgi5wE2hFntYgD61q8e2U1nkOkj76jvMFS9tQmfcRecvnJEITHIKcumaVuiz5ypXndFDgG1mDSTyKc-Qj8hmU8hyKUBnsQ-AbxteXKUgbWwUsJEwcFI3va4c5jICgQDGU60X1ZQNsA8dIP-w8QF4feaPRg7LQoGgvNF1uHiQk5rKLLUeV-"/>
</div>
</header>
<main className="max-w-xl mx-auto px-6 pb-32 pt-4">

<div className="mb-10">
<div className="flex justify-between items-center relative">

<div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#FAFAF8]-container-highest -z-10"></div>

<div className="absolute top-1/2 right-0 w-3/4 h-0.5 bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white -z-10"></div>

<div className="flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white text-on-primary flex items-center justify-center text-sm font-bold">
<span className="material-symbols-outlined text-sm" >check</span>
</div>
<span className="text-[10px] font-bold text-primary">المقاسات</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white text-on-primary flex items-center justify-center text-sm font-bold step-active">
                        3
                    </div>
<span className="text-[10px] font-bold text-primary">الصور</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#FAFAF8]-container-highest text-outline flex items-center justify-center text-sm font-bold">
                        4
                    </div>
<span className="text-[10px] font-bold text-outline">المراجعة</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#FAFAF8]-container-highest text-outline flex items-center justify-center text-sm font-bold">
                        5
                    </div>
<span className="text-[10px] font-bold text-outline">الدفع</span>
</div>
</div>
</div>

<section className="mb-8">
<h2 className="font-headline font-bold text-2xl mb-2 text-on-surface">تحليل المقاسات بالذكاء الاصطناعي</h2>
<p className="text-tertiary text-sm leading-relaxed">للحصول على أدق تفصيل، يرجى تزويدنا بصورتين واضحتين وطولك الحالي.</p>
</section>

<div className="mb-10">
<label className="block text-sm font-bold mb-3 text-on-surface-variant">الطول الإجمالي (سم)</label>
<div className="relative group">
<input className="w-full bg-[#FAFAF8]-container-high border-none rounded-xl py-4 px-6 text-on-surface focus:ring-2 focus:ring-primary-container transition-all outline-none" placeholder="مثلاً: 175" type="number"/>
<span className="absolute left-6 top-1/2 -translate-y-1/2 text-tertiary font-bold text-sm">سم</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

<div className="relative group">
<div className="aspect-[3/4] rounded-2xl border-0 bg-white shadow-sm border-outline-variant bg-[#FAFAF8]-container-lowest flex flex-col items-center justify-center p-8 text-center transition-all group-hover:bg-primary/5 group-hover:border-primary cursor-pointer">
<div className="w-16 h-16 rounded-full bg-[#FAFAF8]-container-low flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-primary text-3xl">photo_camera</span>
</div>
<h3 className="font-bold text-on-surface mb-2">صورة أمامية</h3>
<p className="text-xs text-tertiary leading-normal">التقط صورة لك من الأمام بوضعية مستقيمة</p>
<div className="mt-6 px-4 py-2 rounded-lg bg-[#FAFAF8]-container-high text-[11px] font-bold text-primary group-hover:bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white group-hover:text-white transition-colors">
                        رفع الصورة
                    </div>
</div>
</div>

<div className="relative group">
<div className="aspect-[3/4] rounded-2xl border-0 bg-white shadow-sm border-outline-variant bg-[#FAFAF8]-container-lowest flex flex-col items-center justify-center p-8 text-center transition-all group-hover:bg-primary/5 group-hover:border-primary cursor-pointer">
<div className="w-16 h-16 rounded-full bg-[#FAFAF8]-container-low flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-primary text-3xl">flip_camera_ios</span>
</div>
<h3 className="font-bold text-on-surface mb-2">صورة جانبية</h3>
<p className="text-xs text-tertiary leading-normal">التقط صورة لك من الجانب بوضعية طبيعية</p>
<div className="mt-6 px-4 py-2 rounded-lg bg-[#FAFAF8]-container-high text-[11px] font-bold text-primary group-hover:bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white group-hover:text-white transition-colors">
                        رفع الصورة
                    </div>
</div>
</div>
</div>

<div className="bg-secondary-container/30 p-5 rounded-2xl flex gap-4 items-start mb-12">
<span className="material-symbols-outlined text-secondary" >lightbulb</span>
<div>
<h4 className="font-bold text-on-secondary-container text-sm mb-1">نصيحة للحصول على أفضل النتائج</h4>
<p className="text-xs text-on-secondary-container/80 leading-relaxed">يرجى ارتداء ملابس ضيقة نسبياً والوقوف أمام خلفية سادة مع إضاءة جيدة. سيتم حذف الصور تلقائياً بعد استخراج المقاسات.</p>
</div>
</div>

<button className="w-full py-5 rounded-2xl bg-gradient-to-br from-primary to-primary-container text-white font-bold text-lg shadow-xl shadow-primary/20 hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-3">
            تحليل مقاساتي الآن
            <span className="material-symbols-outlined">auto_awesome</span>
</button>
</main>

<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border-t border-neutral-100 dark:border-neutral-800 shadow-[0_-4px_12px_rgba(26,28,27,0.04)] rounded-t-2xl">
<a className="flex flex-col items-center justify-center text-neutral-400 dark:text-neutral-500 hover:text-[#C9A84C] transition-colors active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined mb-1">home</span>
<span className="font-label text-[11px] font-semibold">الرئيسية</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C9A84C] bg-[#C9A84C]/10 rounded-xl px-3 py-1 active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined mb-1" >straighten</span>
<span className="font-label text-[11px] font-semibold">الخياطين</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-400 dark:text-neutral-500 hover:text-[#C9A84C] transition-colors active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined mb-1">shopping_bag</span>
<span className="font-label text-[11px] font-semibold">طلباتي</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-400 dark:text-neutral-500 hover:text-[#C9A84C] transition-colors active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined mb-1">person</span>
<span className="font-label text-[11px] font-semibold">حسابي</span>
</a>
</nav>

<div className="fixed inset-0 pointer-events-none -z-20 opacity-[0.03]" >
</div>
    </>
  );
}