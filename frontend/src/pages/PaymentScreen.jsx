import React from 'react';

export default function PaymentScreen() {
  return (
    <>
<header className="w-full top-0 sticky z-50 bg-[#FAFAF8] dark:bg-neutral-900 flex justify-between items-center px-6 py-4">
<div className="flex items-center gap-4">
<button className="text-on-surface hover:opacity-80 transition-opacity active:scale-95 duration-150">
<span className="material-symbols-outlined">arrow_forward</span>
</button>
<h1 className="font-headline font-bold text-lg dark:text-white">إتمام الدفع</h1>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-semibold px-2 py-1 bg-secondary-container text-on-secondary-container rounded-lg">خطوة 3 من 3</span>
</div>
</header>
<main className="max-w-xl mx-auto px-6 pb-24 pt-4 fabric-bg-pattern min-h-screen">

<section className="mb-10 animate-fade-in">
<div className="bg-[#FAFAF8]-container-low p-8 rounded-2xl flex flex-col items-center text-center">
<span className="text-tertiary text-sm font-medium mb-2">إجمالي الطلب</span>
<div className="flex items-baseline gap-2">
<span className="text-4xl font-headline font-extrabold text-on-surface tracking-tight">4,250</span>
<span className="text-lg font-bold text-primary">ج.س</span>
</div>
<div className="mt-4 flex gap-2 items-center text-xs text-tertiary">
<span className="material-symbols-outlined text-sm">shopping_bag</span>
<span>خياطة جلابية سودانية فاخرة</span>
</div>
</div>
</section>

<section className="bg-[#FAFAF8]-container-lowest rounded-3xl p-6 shadow-[0_-4px_12px_rgba(26,28,27,0.04)]">
<div className="flex items-center justify-between mb-8">
<h2 className="text-lg font-bold font-headline">بيانات البطاقة</h2>
<div className="flex gap-1">
<img alt="Visa" className="h-5 opacity-60" data-alt="visa credit card logo icon minimal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEiw9TPoa_yn6Nb_NC65H8tIiUf0tABk2oHpW-YK2cbCBedsB510kxsjSFiunFz2qMJVHQtqUJOAKxMNYveLWhZKNCEK1mypd6WAp3P5KqwoKJfHVnfkSqM7Sp9LOb7qm9H_yVKuCLMavXcNdCh_mV5s4-20T41me1GpvJubRbqiqj_kgS8NHXyWKMoMs8Jn5GOxgqav7zffxK0qwMPthcZ1_qxfN1Oz4ScUi2pdqoqukx-KJLetR4DdJ8Mwvs8yoRPvLXzf1Stkya"/>
<img alt="Mastercard" className="h-5 opacity-60" data-alt="mastercard credit card logo icon minimal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaN-iS39QEDwHpSOPLw7CG986Ykdkz_i9hpoWNwtXoseujiUS9wH22tygUPk1eSwnGZTZYe0qTUoBbq-0dmOu9Fi-3IvlAhblellhx7rpvs-XhYD2zzeBxG8JwazbNVMt0oLCQzws8Z_DCAwigQGMlKcX3sh-ogsunybj3tydDszPrhFSiVYDzwqlLsQ268zue_QgphJ-fD_CuZhAaSTw9HFPoT5UyTDha1VuGbGg7gu5FnizZJvIMD4UorE1zZnuKaAh_b1poJLjz"/>
</div>
</div>
<form className="space-y-6">

<div className="space-y-2">
<label className="text-xs font-bold text-tertiary mr-1">رقم البطاقة</label>
<div className="relative group">
<input className="w-full bg-[#FAFAF8]-container-high border-none rounded-xl py-4 px-12 focus:ring-2 focus:ring-primary-container transition-all text-on-surface font-mono placeholder:text-outline-variant" placeholder="0000 0000 0000 0000" type="text"/>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline">credit_card</span>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs font-bold text-tertiary mr-1">تاريخ الانتهاء</label>
<div className="relative">
<input className="w-full bg-[#FAFAF8]-container-high border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-primary-container transition-all text-on-surface font-mono placeholder:text-outline-variant text-center" placeholder="MM / YY" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold text-tertiary mr-1">رمز التحقق (CVC)</label>
<div className="relative group">
<input className="w-full bg-[#FAFAF8]-container-high border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-primary-container transition-all text-on-surface font-mono placeholder:text-outline-variant text-center" placeholder="•••" type="password"/>
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-sm">help</span>
</div>
</div>
</div>

<div className="space-y-2">
<label className="text-xs font-bold text-tertiary mr-1">اسم صاحب البطاقة</label>
<input className="w-full bg-[#FAFAF8]-container-high border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-primary-container transition-all text-on-surface placeholder:text-outline-variant" placeholder="الاسم كما يظهر على البطاقة" type="text"/>
</div>

<div className="flex items-center gap-3 py-2">
<input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" id="save-card" type="checkbox"/>
<label className="text-sm text-tertiary" for="save-card">حفظ بيانات البطاقة لعمليات الدفع القادمة</label>
</div>

<button className="w-full bg-gradient-to-r from-primary to-primary-container text-white font-bold py-5 rounded-xl shadow-lg shadow-primary/20 hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-lg" type="submit">
<span>ادفع الآن</span>
<span className="material-symbols-outlined" >lock</span>
</button>
</form>
</section>

<footer className="mt-12 flex flex-col items-center justify-center space-y-4">
<div className="flex items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
<span className="material-symbols-outlined text-base">verified_user</span>
<span className="text-[11px] font-bold tracking-widest uppercase">Secured by Stripe</span>
</div>
<div className="flex gap-4 opacity-30">
<span className="material-symbols-outlined">shield_lock</span>
<span className="material-symbols-outlined">encrypted</span>
<span className="material-symbols-outlined">security</span>
</div>
<p className="text-[10px] text-center text-outline-variant max-w-[200px] leading-relaxed">
                يتم تشفير جميع معاملاتك المالية وحمايتها بأعلى معايير الأمان العالمية.
            </p>
</footer>
</main>

<div className="hidden fixed inset-0 z-[100] flex items-center justify-center p-6 bg-on-surface/40 backdrop-blur-sm">
<div className="bg-[#FAFAF8]-container-lowest rounded-[2rem] w-full max-w-sm overflow-hidden shadow-2xl">
<div className="h-32 bg-secondary flex items-center justify-center">
<div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-secondary shadow-xl">
<span className="material-symbols-outlined text-4xl" >check</span>
</div>
</div>
<div className="p-8 text-center">
<h3 className="font-headline font-bold text-2xl mb-2">تم الدفع بنجاح</h3>
<p className="text-tertiary mb-8">تم تأكيد طلبك بنجاح، يمكنك متابعة حالة التفصيل من خلال لوحة التحكم.</p>
<button className="w-full bg-[#FAFAF8]-container-high text-on-surface font-bold py-4 rounded-xl hover:bg-[#FAFAF8]-container-highest transition-colors">
                    الذهاب لطلباتي
                </button>
</div>
</div>
</div>
    </>
  );
}