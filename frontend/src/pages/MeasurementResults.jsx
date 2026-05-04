import React from 'react';

export default function MeasurementResults() {
  return (
    <>
<header className="w-full top-0 sticky z-50 bg-[#FAFAF8] dark:bg-neutral-900 flex justify-between items-center px-6 py-4">
<div className="flex items-center gap-4">
<button className="text-[#755b00] dark:text-[#C9A84C] hover:opacity-80 transition-opacity active:scale-95 duration-150">
<span className="material-symbols-outlined">close</span>
</button>
<h1 className="font-headline font-bold text-lg dark:text-white">نتائج القياس</h1>
</div>
<div className="w-8 h-8 rounded-full overflow-hidden border-0 bg-white shadow-sm">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="close-up portrait of a professional man with a friendly expression in a modern studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa82hJNeIC0eziEJfp24p57GDeMJASitzpS5EInehr5r8XijgsvJ5rTtiFyO-bnZIDwENxkp4nZ9U_7rNwN4gnV80RDEO9cwKOzspVunUuCDzsD6iLBcgNQrNF91DB3QOpDz-2QFS5BynoTqAhQps4wg_hdEQHZ6tyB7nBTmPnNIAHib8LtdpE4rEAn7LLMTK21SIcrN8nJI6JFuhNgkiu_g8e0bezQs6chw0Sox6a3Eg-cYs2n_lslqr35zh1XDAfOKHOT-gJofIj"/>
</div>
</header>
<main className="max-w-2xl mx-auto px-6 pt-4 space-y-8">

<section className="relative overflow-hidden rounded-xl bg-success-sage/10 p-6 flex items-center gap-4">
<div className="flex-shrink-0 w-12 h-12 bg-success-sage rounded-full flex items-center justify-center text-white shadow-lg shadow-success-sage/20">
<span className="material-symbols-outlined" >check_circle</span>
</div>
<div>
<h2 className="font-headline font-bold text-lg text-success-sage">تم اكتمال تحليل الذكاء الاصطناعي</h2>
<p className="text-on-surface-variant text-sm mt-1">تمت معالجة بياناتك بدقة عالية لضمان مقاس مثالي.</p>
</div>

<div className="absolute -right-4 -bottom-4 opacity-10">
<span className="material-symbols-outlined text-8xl text-success-sage">straighten</span>
</div>
</section>

<section className="space-y-4">
<div className="flex justify-between items-end px-2">
<h3 className="font-headline font-bold text-xl text-on-surface">تفاصيل المقاسات</h3>
<span className="text-xs font-semibold uppercase tracking-wider text-tertiary">وحدة القياس: سم</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="bg-[#FAFAF8]-container-lowest p-5 rounded-xl flex items-center justify-between group hover:bg-white transition-all duration-300">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-[#FAFAF8]-container-low flex items-center justify-center text-primary group-hover:bg-primary-container/20">
<span className="material-symbols-outlined">accessibility_new</span>
</div>
<div>
<p className="text-tertiary text-xs font-semibold">الصدر</p>
<p className="font-headline font-bold text-on-surface">Chest</p>
</div>
</div>
<div className="text-right">
<span className="text-2xl font-bold font-headline text-primary">102</span>
<span className="text-xs text-tertiary font-bold mr-1">سم</span>
</div>
</div>

<div className="bg-[#FAFAF8]-container-lowest p-5 rounded-xl flex items-center justify-between group hover:bg-white transition-all duration-300">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-[#FAFAF8]-container-low flex items-center justify-center text-primary group-hover:bg-primary-container/20">
<span className="material-symbols-outlined">straighten</span>
</div>
<div>
<p className="text-tertiary text-xs font-semibold">الخصر</p>
<p className="font-headline font-bold text-on-surface">Waist</p>
</div>
</div>
<div className="text-right">
<span className="text-2xl font-bold font-headline text-primary">88</span>
<span className="text-xs text-tertiary font-bold mr-1">سم</span>
</div>
</div>

<div className="bg-[#FAFAF8]-container-lowest p-5 rounded-xl flex items-center justify-between group hover:bg-white transition-all duration-300">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-[#FAFAF8]-container-low flex items-center justify-center text-primary group-hover:bg-primary-container/20">
<span className="material-symbols-outlined">width</span>
</div>
<div>
<p className="text-tertiary text-xs font-semibold">الأرداف</p>
<p className="font-headline font-bold text-on-surface">Hips</p>
</div>
</div>
<div className="text-right">
<span className="text-2xl font-bold font-headline text-primary">110</span>
<span className="text-xs text-tertiary font-bold mr-1">سم</span>
</div>
</div>

<div className="bg-[#FAFAF8]-container-lowest p-5 rounded-xl flex items-center justify-between group hover:bg-white transition-all duration-300">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-[#FAFAF8]-container-low flex items-center justify-center text-primary group-hover:bg-primary-container/20">
<span className="material-symbols-outlined">dry_cleaning</span>
</div>
<div>
<p className="text-tertiary text-xs font-semibold">عرض الكتف</p>
<p className="font-headline font-bold text-on-surface">Shoulder Width</p>
</div>
</div>
<div className="text-right">
<span className="text-2xl font-bold font-headline text-primary">46</span>
<span className="text-xs text-tertiary font-bold mr-1">سم</span>
</div>
</div>

<div className="md:col-span-2 bg-[#FAFAF8]-container-lowest p-5 rounded-xl flex items-center justify-between group hover:bg-white transition-all duration-300">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-[#FAFAF8]-container-low flex items-center justify-center text-primary group-hover:bg-primary-container/20">
<span className="material-symbols-outlined">height</span>
</div>
<div>
<p className="text-tertiary text-xs font-semibold">الطول الكلي</p>
<p className="font-headline font-bold text-on-surface">Total Height</p>
</div>
</div>
<div className="text-right">
<span className="text-2xl font-bold font-headline text-primary">178</span>
<span className="text-xs text-tertiary font-bold mr-1">سم</span>
</div>
</div>
</div>
</section>

<section className="bg-[#FAFAF8]-container-low p-6 rounded-2xl border-r-4 border-primary/40 relative overflow-hidden">
<div className="relative z-10 flex gap-4">
<span className="material-symbols-outlined text-primary" >info</span>
<p className="text-on-surface-variant text-sm leading-relaxed">
                    سيتم إرسال هذه القياسات مباشرة إلى خياطك المختص لضمان دقة التنفيذ. يمكنك دائماً مراجعة أو تحديث هذه البيانات من ملفك الشخصي قبل تأكيد الطلب.
                </p>
</div>

<div className="absolute inset-0 opacity-[0.03] pointer-events-none pattern-bg"></div>
</section>

<div className="pt-4">
<button className="w-full bg-gradient-to-br from-primary to-primary-container text-white py-5 rounded-xl font-headline font-bold text-lg shadow-xl shadow-primary/20 hover:opacity-90 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2">
<span>المتابعة لإتمام الطلب</span>
<span className="material-symbols-outlined">arrow_back</span>
</button>
<button className="w-full mt-4 py-4 text-primary font-semibold text-sm hover:underline transition-all">
                إعادة القياس مرة أخرى
            </button>
</div>
</main>
    </>
  );
}