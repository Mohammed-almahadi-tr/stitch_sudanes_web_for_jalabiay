import React from 'react';

export default function TailorDashboardScreen() {
  return (
    <>
<header className="w-full top-0 sticky z-40 bg-[#FAFAF8] dark:bg-neutral-900 flex justify-between items-center px-6 py-4 w-full">
<div className="flex items-center gap-4">
<button className="text-[#755b00] dark:text-[#C9A84C] hover:opacity-80 transition-opacity active:scale-95 duration-150">
<span className="material-symbols-outlined">menu</span>
</button>
<h1 className="font-headline font-bold text-lg dark:text-white">مرحباً، محمد</h1>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden border-0 bg-white shadow-sm">
<img alt="Tailor Profile" className="w-full h-full object-cover" data-alt="professional portrait of a middle-aged artisan tailor with a warm smile in a well-lit studio environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIaSYrYmhlaSCAPiKRe9IcuqARmA5lfPuj4mPVpaW2KLmuw7N_Eo8vZAZ2HvRz4oo3o_xgWM__g2dpeekUeqfe_0exoXX6Ne3vJBnwRqh7EWw2zD6myMJWwnUlfQQGdP3Xlv_MOvtvLRyMXm4Ym1z2aggxQ4cYsjnlPE_g_cKDoSIDZSDWSY24R4ixdKmH57eYPvNxnu2UYMy7s1Idk5NviD-HaWFdTNG1WEpoD54LxTuKdJ90TUN5AT4xCal9hE2H34Kwt3ZtnOlD"/>
</div>
</div>
</header>
<main className="px-6 pb-32 pt-4 max-w-5xl mx-auto">

<section className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">

<div className="col-span-1 bg-[#FAFAF8]-container-lowest p-5 rounded-xl flex flex-col justify-between h-32 hover:opacity-95 transition-opacity">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-primary text-2xl">pending_actions</span>
<span className="text-xs font-semibold text-tertiary bg-[#FAFAF8]-container-low px-2 py-1 rounded-full">الطلبات</span>
</div>
<div>
<p className="text-2xl font-bold text-on-surface">12</p>
<p className="text-[11px] text-tertiary">قيد الانتظار</p>
</div>
</div>

<div className="col-span-1 bg-[#FAFAF8]-container-lowest p-5 rounded-xl flex flex-col justify-between h-32 hover:opacity-95 transition-opacity">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-secondary text-2xl">check_circle</span>
<span className="text-xs font-semibold text-tertiary bg-[#FAFAF8]-container-low px-2 py-1 rounded-full">المنجز</span>
</div>
<div>
<p className="text-2xl font-bold text-on-surface">148</p>
<p className="text-[11px] text-tertiary">طلبات مكتملة</p>
</div>
</div>

<div className="col-span-2 md:col-span-1 bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white text-on-primary p-5 rounded-xl flex flex-col justify-between h-32 shadow-lg shadow-primary/10">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-on-primary text-2xl" >star</span>
<span className="text-xs font-semibold bg-white/20 px-2 py-1 rounded-full">التقييم</span>
</div>
<div>
<div className="flex items-baseline gap-1">
<p className="text-2xl font-bold">4.9</p>
<p className="text-[11px] opacity-80">/ 5.0</p>
</div>
<p className="text-[11px] opacity-80">من 82 عميل</p>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-6">
<h2 className="font-headline font-bold text-xl text-on-surface">إدارة الطلبات</h2>
<button className="text-primary text-sm font-semibold flex items-center gap-1">
<span>عرض الكل</span>
<span className="material-symbols-outlined text-sm">arrow_back</span>
</button>
</div>
<div className="space-y-3">

<div className="group bg-[#FAFAF8]-container-lowest p-4 rounded-xl flex items-center justify-between transition-all hover:translate-x-[-4px] cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-[#FAFAF8]-container-low rounded-lg flex items-center justify-center overflow-hidden">
<img alt="Garment" className="w-full h-full object-cover" data-alt="close-up of a high-quality white Sudanese Jellabiya fabric with delicate embroidery detail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDujr9UZ1QFjWkISdANnmnlK1_y4aC4FH0IdfrynakYuowDb4r68mKk7VlKqw2qR72c29JZpSG7fEnLIXI9Qlq7wCtKP9ELDdo3I7UKvzYKmbM7KUq_RO8sc_iQ_yV-WikMYumrQ_Fx5kI-Q01kycSzzs5hKbq5p9SeEHf4ucuNMf_k6drl2R6ZYGvA7pa2coTSC93rkoaFeYLR0S18uvdsc6kaIQUKFMa_jLxeEb0zQH1G00HJ89RVLbE4SFyJn90C-p0Dy1jRJaPE"/>
</div>
<div>
<h3 className="font-bold text-on-surface">أحمد عبد الله</h3>
<p className="text-xs text-tertiary">جلابية سودانية - تفصيل كامل</p>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<span className="text-[10px] font-bold px-2 py-1 rounded-full bg-error-container text-on-error-container">قيد الانتظار</span>
<span className="text-[10px] text-tertiary">منذ ساعتين</span>
</div>
</div>

<div className="group bg-[#FAFAF8]-container-lowest p-4 rounded-xl flex items-center justify-between transition-all hover:translate-x-[-4px] cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-[#FAFAF8]-container-low rounded-lg flex items-center justify-center overflow-hidden">
<img alt="Garment" className="w-full h-full object-cover" data-alt="folded premium charcoal grey fabric ready for tailoring on a wooden table" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2ibXox9zK7vKasFpMfvjXm4rnSKERnLkCcDBUt5n7XDtzrD_i82gi7oi3FGi_6iVLFCycGm2qDeucPbK7WdhlaxDLnBxxulgyWwAhKZCDEPizdO-eeVAQ6kdyAVHwN70ZiYUOdByqY8XHOqgqp5VFcwJTApd1L-LaXZyaGfA5300vca-alVZTSBtoo5ON1If_7T-1nOSorMRt2_PAfV7tN-Pam6-U1_wPpEeta4tudppMcF_wwT1HJL17m7sywvsEhKPTapBfTBEQ"/>
</div>
<div>
<h3 className="font-bold text-on-surface">ياسر حسين</h3>
<p className="text-xs text-tertiary">على الله - قماش قطن فاخر</p>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<span className="text-[10px] font-bold px-2 py-1 rounded-full bg-primary-container/20 text-on-primary-container">جاري العمل</span>
<span className="text-[10px] text-tertiary">أمس</span>
</div>
</div>

<div className="group bg-[#FAFAF8]-container-lowest p-4 rounded-xl flex items-center justify-between transition-all hover:translate-x-[-4px] cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-[#FAFAF8]-container-low rounded-lg flex items-center justify-center overflow-hidden">
<img alt="Garment" className="w-full h-full object-cover" data-alt="elegant traditional white garment displayed on a minimalist wooden hanger" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATvTFegc2c0W6FoIMnUU69fTy5a8aOza_xxD7zlIamWEObN5F4T47wTwlPKaNfwx8xHHMjQTn9wAsGDIUndk0fwklotNcHGmBtxXJsiAt4IdhdI8QPfn8ehuqm19hwT7X3etV1DZbum5bdSSzZHp6VS9Su88DJ5CXZJzn9-h8IwsZSAZ2K_zYyGCEi9n9FfoGUk1c3_lUztWv6kWSlemySxF570VdGrfX_fDJbk8k7zRbNhFTD0wuUds6HJ2kH5q1Hy3Pryp1cwW8k"/>
</div>
<div>
<h3 className="font-bold text-on-surface">عمر الفاتح</h3>
<p className="text-xs text-tertiary">صديري مطرز - ملكي</p>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<span className="text-[10px] font-bold px-2 py-1 rounded-full bg-secondary-container text-on-secondary-container">مكتمل</span>
<span className="text-[10px] text-tertiary">3 أيام</span>
</div>
</div>
</div>
</section>

<section className="mt-10">
<div className="bg-[#FAFAF8]-container-low p-6 rounded-2xl relative overflow-hidden">
<div className="relative z-10">
<h3 className="font-headline font-bold text-on-surface mb-2">تحديث القياسات الذكي</h3>
<p className="text-sm text-tertiary leading-relaxed mb-4 max-w-[80%]">استخدم تقنية الذكاء الاصطناعي لمراجعة قياسات العملاء بدقة قبل البدء بالقص.</p>
<button className="bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white text-on-primary px-6 py-2.5 rounded-full text-sm font-bold shadow-md active:scale-95 transition-transform">
                        افتح الماسح الضوئي
                    </button>
</div>
<div className="absolute -left-4 -bottom-4 opacity-10">
<span className="material-symbols-outlined text-[120px]" >straighten</span>
</div>
</div>
</section>
</main>

<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl rounded-t-2xl shadow-[0_-4px_12px_rgba(26,28,27,0.04)]">
<a className="flex flex-col items-center justify-center text-[#C9A84C] bg-[#C9A84C]/10 rounded-xl px-3 py-1 active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" >home</span>
<span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold mt-1">الرئيسية</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-400 dark:text-neutral-500 hover:text-[#C9A84C] transition-colors active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined">straighten</span>
<span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold mt-1">الخياطين</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-400 dark:text-neutral-500 hover:text-[#C9A84C] transition-colors active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined">shopping_bag</span>
<span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold mt-1">طلباتي</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-400 dark:text-neutral-500 hover:text-[#C9A84C] transition-colors active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined">person</span>
<span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold mt-1">حسابي</span>
</a>
</nav>

<button className="fixed bottom-24 left-6 w-14 h-14 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full shadow-xl flex items-center justify-center active:scale-90 transition-transform z-40">
<span className="material-symbols-outlined text-3xl">add</span>
</button>
    </>
  );
}