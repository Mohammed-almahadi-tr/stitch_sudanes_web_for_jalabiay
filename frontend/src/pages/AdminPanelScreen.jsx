import React from 'react';

export default function AdminPanelScreen() {
  return (
    <>
<header className="w-full top-0 sticky z-40 bg-[#FAFAF8] dark:bg-neutral-900 flex justify-between items-center px-6 py-4 w-full">
<div className="flex items-center gap-4">
<button className="text-[#755b00] dark:text-[#C9A84C] hover:opacity-80 transition-opacity active:scale-95 duration-150">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
<h1 className="font-['Be_Vietnam_Pro'] font-bold text-lg dark:text-white">مرحباً، محمد</h1>
</div>
<div className="flex items-center gap-6">
<nav className="hidden md:flex items-center gap-8 font-label font-semibold text-sm">
<a className="text-[#755b00] dark:text-[#C9A84C] hover:opacity-80 transition-opacity" href="#">الرئيسية</a>
<a className="text-neutral-500 hover:opacity-80 transition-opacity" href="#">الخياطين</a>
<a className="text-neutral-500 hover:opacity-80 transition-opacity" href="#">طلباتي</a>
<a className="text-neutral-500 hover:opacity-80 transition-opacity" href="#">حسابي</a>
</nav>
<div className="w-10 h-10 rounded-full overflow-hidden border-0 bg-white shadow-sm">
<img alt="User profile photo" className="w-full h-full object-cover" data-alt="professional portrait of a middle-aged man with a friendly expression in a clean studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5BlBVCjRdauKvU-15XQGmea47af_G2SJIYhrdA-hie192hln3L63PvbzrTD6sDzfhRVbX91jn6_N3y7id7w7QXTxYvkluytI13Pd-84a4z_XLfVrHH-cUtfrjdJgHWaB1_b_h7BkUReN2GKWVgvsX-5jxWgGSH0-bszdUMuEZjRJq77dKxDIfSFGddLEsEazkWzzpOQSYJkY2RDCS5RpEYbgUBl3YWSQHmLlSOxkF9cDY3mKfJblCevl5CzNJHLVgP1YBoQObB2aT"/>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-6 py-8 pb-32">

<section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

<div className="bg-[#FAFAF8]-container-lowest p-6 rounded-xl editorial-shadow flex flex-col justify-between group hover:translate-y-[-4px] transition-transform duration-300">
<div className="flex justify-between items-start">
<div className="p-3 rounded-lg bg-primary-container/10 text-primary">
<span className="material-symbols-outlined" data-icon="group">group</span>
</div>
<span className="text-secondary font-bold text-xs bg-secondary-container/30 px-2 py-1 rounded">+12%</span>
</div>
<div className="mt-4">
<p className="text-tertiary text-sm font-label mb-1">إجمالي المستخدمين</p>
<h2 className="text-3xl font-headline font-extrabold text-on-surface">1,284</h2>
</div>
</div>

<div className="bg-[#FAFAF8]-container-lowest p-6 rounded-xl editorial-shadow flex flex-col justify-between group hover:translate-y-[-4px] transition-transform duration-300">
<div className="flex justify-between items-start">
<div className="p-3 rounded-lg bg-secondary-container/20 text-secondary">
<span className="material-symbols-outlined" data-icon="straighten">straighten</span>
</div>
<span className="text-secondary font-bold text-xs bg-secondary-container/30 px-2 py-1 rounded">+5%</span>
</div>
<div className="mt-4">
<p className="text-tertiary text-sm font-label mb-1">الخياطين النشطين</p>
<h2 className="text-3xl font-headline font-extrabold text-on-surface">156</h2>
</div>
</div>

<div className="bg-[#FAFAF8]-container-lowest p-6 rounded-xl editorial-shadow flex flex-col justify-between group hover:translate-y-[-4px] transition-transform duration-300">
<div className="flex justify-between items-start">
<div className="p-3 rounded-lg bg-primary-container/10 text-primary">
<span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
</div>
<span className="text-error font-bold text-xs bg-error-container/30 px-2 py-1 rounded">-2%</span>
</div>
<div className="mt-4">
<p className="text-tertiary text-sm font-label mb-1">طلبات اليوم</p>
<h2 className="text-3xl font-headline font-extrabold text-on-surface">42</h2>
</div>
</div>
</section>

<section className="bg-[#FAFAF8]-container-low rounded-xl p-1 overflow-hidden">
<div className="bg-[#FAFAF8]-container-lowest rounded-lg overflow-hidden">
<div className="px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
<h3 className="text-xl font-headline font-bold text-on-surface">إدارة المستخدمين</h3>
<div className="flex gap-3 w-full md:w-auto">
<div className="relative flex-grow md:flex-grow-0">
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-tertiary text-sm" data-icon="search">search</span>
<input className="bg-[#FAFAF8]-container-high border-none rounded-lg pr-10 pl-4 py-2 text-sm w-full focus:ring-2 focus:ring-primary-container/50" placeholder="البحث عن مستخدم..." type="text"/>
</div>
<button className="bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white text-on-primary px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
                            إضافة جديد
                        </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-right border-collapse">
<thead>
<tr className="bg-[#FAFAF8]-container-low/50 text-tertiary text-sm font-label border-b border-surface-container">
<th className="px-6 py-4 font-semibold">المستخدم</th>
<th className="px-6 py-4 font-semibold">الدور</th>
<th className="px-6 py-4 font-semibold">تاريخ الانضمام</th>
<th className="px-6 py-4 font-semibold">الحالة</th>
<th className="px-6 py-4 font-semibold">الإجراءات</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container">

<tr className="hover:bg-[#FAFAF8]-container-low/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#FAFAF8]-container-high flex items-center justify-center overflow-hidden">
<img alt="Ahmed Profile" className="w-full h-full object-cover" data-alt="headshot of a young professional smiling mildly at the camera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr7bMblcWVwJmLpN7XQNAtyi7Ql7ZgL40yFQkJSHX4p3axa1CQXuTo9dlZosywoGGSkwLsxXhcF3X0dfegaPKOGNmyvJg8ecTMwRl8X55PjQeIpwuykZNFsUZrOi3Uza-AnBDhoeB_6xBerk4fIwJkcVXLAqaCcHW04ejR4UlgrcEEE2YBKMPc38Q2eEjM38iUGBHk0zMkorS1I0XO5QDsCgk0KBceV9eHEdpD0L87TpOHcpTAiNkEjxxdcwBp-VNK_f7fMZGaNC1A"/>
</div>
<div>
<p className="font-bold text-on-surface text-sm">أحمد الفاضل</p>
<p className="text-tertiary text-xs">ahmed.f@example.com</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-container/10 text-on-primary-container">
                                        خياط رئيسي
                                    </span>
</td>
<td className="px-6 py-4 text-sm text-tertiary">12 أكتوبر 2023</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-secondary"></div>
<span className="text-xs text-on-surface font-medium">نشط</span>
</div>
</td>
<td className="px-6 py-4">
<button className="text-tertiary hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-[#FAFAF8]-container-low/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#FAFAF8]-container-high flex items-center justify-center overflow-hidden">
<img alt="Sara Profile" className="w-full h-full object-cover" data-alt="close up of a professional woman wearing traditional modest attire" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3EPe43MqU9OgnwzBDqk6KKjf-LlZg830u-ltet4c3ZBxnXjM_vH_g0D6eYY3tQPoLFDRM40iK9bjAg6gc8faZlNDFxriuuax_-Ugckwx7koIfaDxGjmSr1iuKs5Xa1xDDKNndW4P6LfbZhFqryDQ3qXohOCrQJfjTrt17UsSd8tglLJw8M03EEKUNSIyGP6TBkzAsWhq9jVpbF4LDhundAWeZG0c4nYBMLamPXE3yrtSkcKfdBDOd-bJdQV-pbg_OlkaYVIJNSegF"/>
</div>
<div>
<p className="font-bold text-on-surface text-sm">سارة إبراهيم</p>
<p className="text-tertiary text-xs">sara.i@example.com</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-container/40 text-on-secondary-container">
                                        عميل مميز
                                    </span>
</td>
<td className="px-6 py-4 text-sm text-tertiary">15 أكتوبر 2023</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-secondary"></div>
<span className="text-xs text-on-surface font-medium">نشط</span>
</div>
</td>
<td className="px-6 py-4">
<button className="text-tertiary hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-[#FAFAF8]-container-low/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#FAFAF8]-container-high flex items-center justify-center overflow-hidden">
<img alt="Khaled Profile" className="w-full h-full object-cover" data-alt="middle aged man with glasses looking directly into the camera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpCJ9ATWyDI5NtQIe7o4uYg5E0ldez0vn9ZnInENHgmgeXjXDS2H2jzD5a68EwJV1Jo3K457EQbVAeEqxreoqtVGmTLOvciwIa6E7VPa51Wi5rYozO1oa8daZ_rvyZWBHLi04VmQg-XLOZoXKxKpmmdYNGyecr9l5Om4CRx6je0ZvcnU0GWiTmgW164iaJWBJEuSGnHWDEoNexN5ajgix0Ymg99gtss7F9-VzyZfW_8tw1q4DvBiNX1Kxfr1gYAmam2QfVrJCIWAmr"/>
</div>
<div>
<p className="font-bold text-on-surface text-sm">خالد منصور</p>
<p className="text-tertiary text-xs">khaled.m@example.com</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-tertiary-fixed text-on-tertiary-fixed-variant">
                                        مدير نظام
                                    </span>
</td>
<td className="px-6 py-4 text-sm text-tertiary">01 سبتمبر 2023</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-tertiary-container"></div>
<span className="text-xs text-on-surface font-medium">غير نشط</span>
</div>
</td>
<td className="px-6 py-4">
<button className="text-tertiary hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-6 py-4 bg-[#FAFAF8]-container-low/20 flex justify-between items-center">
<p className="text-xs text-tertiary font-label">عرض 3 من أصل 1,284 مستخدم</p>
<div className="flex gap-2">
<button className="p-1 rounded bg-[#FAFAF8]-container border-0 bg-white shadow-sm text-tertiary hover:bg-[#FAFAF8]-container-high transition-colors">
<span className="material-symbols-outlined text-[18px]" data-icon="chevron_right">chevron_right</span>
</button>
<button className="p-1 rounded bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white text-on-primary hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-[18px]" data-icon="chevron_left">chevron_left</span>
</button>
</div>
</div>
</div>
</section>
</main>

<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border-t border-neutral-100 dark:border-neutral-800 shadow-[0_-4px_12px_rgba(26,28,27,0.04)] rounded-t-2xl">
<a className="flex flex-col items-center justify-center text-[#C9A84C] bg-[#C9A84C]/10 rounded-xl px-3 py-1 scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="home" >home</span>
<span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold mt-1">الرئيسية</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-400 dark:text-neutral-500 hover:text-[#C9A84C] transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="straighten">straighten</span>
<span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold mt-1">الخياطين</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-400 dark:text-neutral-500 hover:text-[#C9A84C] transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
<span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold mt-1">طلباتي</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-400 dark:text-neutral-500 hover:text-[#C9A84C] transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold mt-1">حسابي</span>
</a>
</nav>
    </>
  );
}