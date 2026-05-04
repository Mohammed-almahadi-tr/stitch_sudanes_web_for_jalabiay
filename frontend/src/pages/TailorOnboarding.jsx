import React from 'react';

export default function TailorOnboarding() {
  return (
    <>
<div className="fixed inset-0 pattern-overlay pointer-events-none z-0"></div>
<main className="relative z-10 max-w-md mx-auto min-h-screen flex flex-col justify-between p-6 pb-12">

<header className="mt-8 space-y-6">
<div className="flex justify-center">
<div className="w-16 h-1 w-24 bg-primary-container rounded-full opacity-30"></div>
</div>
<div className="space-y-2 text-center">
<h1 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface">
                    بوابة الخياط المحترف
                </h1>
<p className="font-body text-tertiary text-lg">
                    انضم إلى نخبة الحرفيين السودانيين
                </p>
</div>
</header>

<section className="relative mt-12 mb-12">
<div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden editorial-shadow bg-[#FAFAF8]-container-low">
<img alt="Sudanese tailor at work" className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" data-alt="Close-up of skilled artisan hands working on intricate gold Sudanese Jellabiya embroidery with traditional sewing tools in a warm sunlit workshop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3tHosdwY9zfxM05EyS3XjgkfA98d44FaIGClxJFWnAxZn0QT-2fea3pr3JMqALfRJ3NL0OyoqBZADXVinal9thqTXRnScmJTH6reFcFG8HrFpIVEz0DheCNQCs6AcSzxejalb20V2k5xp7geBhiJZzl9exLoQO4AN5FQf-Y0ZPzU5bxti8VJdYemlNxkwMT-rUOzTes_EnQEuwbpFfb7ogQFbxuqjdeBw9RLbjOnzOsQjwY14O6c0a-Ygj39_OLXCLhuvCUA1o4bc"/>

<div className="absolute bottom-4 left-4 right-4 p-5 backdrop-blur-xl bg-[#FAFAF8]-container-lowest/60 rounded-2xl border-0 bg-white shadow-sm">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary" >workspace_premium</span>
<span className="text-sm font-semibold text-on-surface uppercase tracking-wider">الجودة السودانية الأصيلة</span>
</div>
</div>
</div>

<div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-primary-container/10 rounded-full blur-2xl"></div>
</section>

<div className="space-y-8">

<div className="grid grid-cols-2 gap-4">
<button className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-[#FAFAF8]-container-lowest border-0 bg-white shadow-sm editorial-shadow transition-transform active:scale-95">
<div className="w-12 h-12 rounded-full signature-gradient flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined" >architecture</span>
</div>
<span className="font-headline font-bold text-primary">خياط</span>
</button>
<button className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-[#FAFAF8]-container-low border-0 bg-white shadow-sm opacity-60 transition-transform active:scale-95">
<div className="w-12 h-12 rounded-full bg-[#FAFAF8]-variant flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">person</span>
</div>
<span className="font-headline font-bold text-on-surface-variant">عميل</span>
</button>
</div>

<div className="flex flex-col gap-4">
<button className="w-full signature-gradient text-on-primary font-headline font-bold py-5 rounded-xl editorial-shadow transition-all hover:opacity-90 active:scale-[0.98]">
                    إنشاء حساب جديد
                </button>
<button className="w-full bg-transparent border-0 bg-white shadow-sm text-primary font-headline font-bold py-5 rounded-xl transition-all hover:bg-primary-container/5 active:scale-[0.98]">
                    تسجيل الدخول
                </button>
</div>

<p className="text-center text-sm text-tertiary px-8 leading-relaxed">
                بالتسجيل، أنت توافق على <a className="text-primary underline underline-offset-4" href="#">شروط الخدمة</a> و <a className="text-primary underline underline-offset-4" href="#">سياسة الخصوصية</a> الخاصة بـ Heritage Digital
            </p>
</div>
</main>
    </>
  );
}