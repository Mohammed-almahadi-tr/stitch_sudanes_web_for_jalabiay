import React from 'react';

export default function RateTailorScreen() {
  return (
    <>
<header className="w-full top-0 sticky z-50 bg-[#f4f4f2] dark:bg-neutral-800 flex justify-between items-center px-6 py-4">
<div className="flex items-center gap-4">
<button className="text-[#755b00] dark:text-[#C9A84C] hover:opacity-80 transition-opacity active:scale-95 duration-150">
<span className="material-symbols-outlined" data-icon="close">close</span>
</button>
</div>
<h1 className="font-headline font-bold text-lg dark:text-white text-center">تقييم الخياط</h1>
<div className="w-10 h-10 rounded-full bg-[#FAFAF8]-container-high overflow-hidden">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="professional headshot of a person with a friendly expression in a clean studio setting with soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHSDVgNsd1ShvklG4xUIa8-ZITJ0dQNh7Kxos_uM8r5ctfPFJzRpaX7C0b37sP3txEbF7SveJbhRJR6nEMo003-P14U84Awa76VakvmpEhNywqSxezi-CwED6QA01Olt_EtKANJtZA9Jx51L--XK5irdzycOw0nZsI20BBQhX2VIfF3dbdvZXMImVOGUjDEUEaTpqM-DEkyCGm9GeFNu7U-CowqTM-Sh5TGMzO-X0Ep12zA_4na3mHRWRLg8bhbbjyvB0863DH_Yl2"/>
</div>
</header>
<main className="max-w-md mx-auto px-6 pt-12 pb-32">

<div className="flex flex-col items-center mb-12">
<div className="relative mb-6">
<div className="w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-primary to-primary-container">
<div className="w-full h-full rounded-full border-4 border-surface overflow-hidden">
<img alt="Tailor Avatar" className="w-full h-full object-cover" data-alt="portrait of an experienced middle-aged male tailor in a workshop environment with warm ambient lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbdiy9VnPpvIhG4Hyej7Q8_UeAeJd3vxr2cjh2srKFAikD-qImBBsn5wflzMGr0cSKEwW8-Ee5gflvyO50J8SCz28rQVw1ORMNbPHbd_GXEsCSYhiQqFeL66Kctf5M-Jccmo4uXbONfQ8t75-5euNHAotVfpGesTXlx_swdyze5QhcOGGVlLHDpKVAhOBVHCYdGrg8gHNvhCNzahPXZFFAzikRX3r42Ojy-GCE0PfbzgM5GyODbVDNlL0VR63xuQ1KUDSPNBD-Tcp9"/>
</div>
</div>
<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    خياط معتمد
                </div>
</div>
<h2 className="font-headline text-2xl font-extrabold text-on-surface tracking-tight mb-1">أحمد المنصور</h2>
<p className="text-tertiary text-sm">متخصص في الجلابيات السودانية الفاخرة</p>
</div>

<section className="mb-10 text-center">
<h3 className="font-headline text-lg font-bold mb-6 text-on-surface-variant">كيف كانت تجربتك؟</h3>
<div className="flex justify-center gap-2 mb-4">
<button className="text-primary-container hover:scale-110 transition-transform active:scale-90">
<span className="material-symbols-outlined text-5xl star-active" data-icon="star" >star</span>
</button>
<button className="text-primary-container hover:scale-110 transition-transform active:scale-90">
<span className="material-symbols-outlined text-5xl star-active" data-icon="star" >star</span>
</button>
<button className="text-primary-container hover:scale-110 transition-transform active:scale-90">
<span className="material-symbols-outlined text-5xl star-active" data-icon="star" >star</span>
</button>
<button className="text-primary-container hover:scale-110 transition-transform active:scale-90">
<span className="material-symbols-outlined text-5xl star-active" data-icon="star" >star</span>
</button>
<button className="text-outline-variant hover:scale-110 transition-transform active:scale-90">
<span className="material-symbols-outlined text-5xl" data-icon="star">star</span>
</button>
</div>
<p className="text-primary font-bold text-sm">جيد جداً</p>
</section>

<section className="space-y-4">
<label className="block font-headline text-sm font-bold text-on-surface-variant px-1" for="review">أضف تعليقك (اختياري)</label>
<div className="relative">
<textarea className="w-full p-4 bg-[#FAFAF8]-container-high border-none rounded-xl text-on-surface placeholder:text-neutral-400 focus:ring-2 focus:ring-primary-container transition-all resize-none" id="review" placeholder="اكتب عن جودة القماش، دقة المقاسات، أو سرعة التوصيل..." rows="5"></textarea>
<div className="absolute bottom-3 left-3 opacity-5 pointer-events-none">
<svg fill="currentColor" height="40" viewbox="0 0 40 40" width="40">
<path d="M0 0h10v10H0zM20 0h10v10H20zM10 10h10v10H10zM0 20h10v10H0zM20 20h10v10H20zM30 10h10v10H30z"></path>
</svg>
</div>
</div>
</section>

<div className="mt-12">
<button className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-white font-headline font-bold rounded-xl shadow-lg shadow-primary/20 active:scale-[0.98] transition-all hover:opacity-95">
                إرسال التقييم
            </button>
<button className="w-full mt-4 py-3 text-tertiary font-bold text-sm hover:text-on-surface transition-colors">
                تخطي الآن
            </button>
</div>
</main>



<div className="fixed top-20 right-0 w-32 h-64 opacity-[0.03] pointer-events-none select-none overflow-hidden">
<svg className="w-full h-full text-on-surface" viewbox="0 0 100 200">
<pattern height="20" id="pattern-embroidery" patternunits="userSpaceOnUse" width="20" x="0" y="0">
<path d="M10 0 L20 10 L10 20 L0 10 Z" fill="none" stroke="currentColor" stroke-width="0.5"></path>
<circle cx="10" cy="10" fill="currentColor" r="2"></circle>
</pattern>
<rect fill="url(#pattern-embroidery)" height="200" width="100"></rect>
</svg>
</div>
    </>
  );
}