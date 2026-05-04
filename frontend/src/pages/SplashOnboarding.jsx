import React from 'react';

export default function SplashOnboarding() {
  return (
    <>
<main className="min-h-screen relative flex flex-col items-center justify-between px-6 py-12 embroidery-pattern overflow-hidden">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

<section className="flex flex-col items-center justify-center flex-grow w-full max-w-md text-center">
<div className="mb-8 relative">

<div className="w-24 h-24 signature-gradient rounded-xl flex items-center justify-center shadow-lg transform -rotate-3">
<span className="material-symbols-outlined text-white text-5xl" >straighten</span>
</div>

<div className="absolute -bottom-2 -right-2 w-10 h-10 bg-secondary-container rounded-lg flex items-center justify-center border-4 border-surface">
<span className="material-symbols-outlined text-secondary text-xl" >architecture</span>
</div>
</div>
<h1 className="font-headline font-bold text-4xl text-on-surface leading-tight tracking-tight mb-3" >
                منصة الدشداشة والجلابية
            </h1>
<p className="text-tertiary text-lg max-w-[280px] leading-relaxed" >
                الفخامة السودانية الأصيلة في تجربة رقمية عصرية
            </p>
</section>

<section className="w-full max-w-sm space-y-8 relative z-10">

<div className="space-y-4">
<p className="text-center text-sm font-semibold text-outline tracking-wider uppercase" >اختر هويتك</p>
<div className="grid grid-cols-2 gap-3 p-1.5 bg-[#FAFAF8]-container-low rounded-xl">
<button className="flex flex-col items-center justify-center py-4 px-2 rounded-lg bg-[#FAFAF8]-container-lowest shadow-sm border-0 bg-white shadow-sm transition-all duration-300" >
<span className="material-symbols-outlined text-primary mb-1" >person</span>
<span className="text-sm font-bold" >عميل</span>
</button>
<button className="flex flex-col items-center justify-center py-4 px-2 rounded-lg text-tertiary hover:bg-[#FAFAF8]-container-high transition-all duration-300" >
<span className="material-symbols-outlined mb-1" >design_services</span>
<span className="text-sm font-medium" >خياط</span>
</button>
</div>
</div>

<div className="flex flex-col gap-4">
<button className="signature-gradient text-white py-5 px-8 rounded-xl font-headline font-bold text-lg shadow-xl shadow-primary/10 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group" >
                    إنشاء حساب جديد
                    <span className="material-symbols-outlined text-white/80 group-hover:translate-x-[-4px] transition-transform" >arrow_back</span>
</button>
<button className="bg-transparent border-0 bg-white shadow-sm text-primary py-5 px-8 rounded-xl font-headline font-bold text-lg hover:bg-[#FAFAF8]-container-high active:scale-[0.98] transition-all flex items-center justify-center" >
                    تسجيل الدخول
                </button>
</div>

<div className="text-center pt-4">
<a className="text-primary text-sm font-medium hover:underline underline-offset-4 decoration-primary/30" href="#" >
                    استكشف أحدث التصاميم كضيف&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</a>
</div>
</section>

<div className="absolute -bottom-10 -left-10 w-48 h-48 opacity-20 pointer-events-none">
<img className="w-full h-full object-cover rounded-full grayscale mix-blend-multiply" data-alt="close-up detail of white Sudanese cotton fabric with intricate traditional embroidery patterns and golden threads" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwr_dWagv1R7YiSnVHrcCHRrKo2KFIHWv_LFdIdCt9wH_f-muu0-M5fr_rm-bGaEfHFBE2tRCRpuMM6ykDexwmExPBOdSH6HyGqgvp_myq1Cqq0WIZYJt_AjgN49N5_k7vnh3s4FvuGysYP4bMV2nZhVnYLuaoQZB4WHEVVOZeBrEY_Wham5qd02Ggtk1xI_EPL2L0tH33OEgkOsnlf6RNpXBc7XaCw8Fr_0hLOmONtguitSjWTUTFzGsbfuFhSDC0HNE3H8okk436"  />
</div>
</main>
    </>
  );
}