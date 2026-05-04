import React from 'react';

export default function Screen6() {
  return (
    <>
<div className="flex h-screen overflow-hidden">

<aside className="h-screen w-64 bg-[#f4f4f2] dark:bg-stone-900 flex flex-col py-8 px-4 font-headline antialiased tracking-tight border-none shrink-0 z-50">
<div className="mb-10 px-2 flex items-center gap-3">
<div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center text-on-primary-container">
<span className="material-symbols-outlined" data-icon="architecture">architecture</span>
</div>
<div>
<h1 className="text-xl font-bold text-[#1a1c1b] dark:text-[#f9f9f7] leading-none">هيريتيج ديجيتال</h1>
<p className="text-[10px] text-tertiary mt-1 uppercase tracking-widest">أتيليه الخياطة الحديث</p>
</div>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#5f5e5c] dark:text-stone-400 hover:bg-[#e8e8e6] dark:hover:bg-stone-800 transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="text-sm">لوحة القيادة</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#5f5e5c] dark:text-stone-400 hover:bg-[#e8e8e6] dark:hover:bg-stone-800 transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="straighten">straighten</span>
<span className="text-sm">القياسات</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#755b00] dark:text-[#c9a84c] font-bold border-l-4 rtl:border-l-0 rtl:border-r-4 border-[#755b00] dark:border-[#c9a84c] bg-[#FAFAF8]/50 dark:bg-stone-800/50 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="group" >group</span>
<span className="text-sm">العملاء</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#5f5e5c] dark:text-stone-400 hover:bg-[#e8e8e6] dark:hover:bg-stone-800 transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
<span className="text-sm">الطلبات</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#5f5e5c] dark:text-stone-400 hover:bg-[#e8e8e6] dark:hover:bg-stone-800 transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="text-sm">الإعدادات</span>
</a>
</nav>
<div className="mt-auto px-2">
<button className="w-full flex items-center justify-center gap-2 bg-gradient-to-br from-primary to-primary-container text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-primary/10 hover:opacity-90 active:scale-[0.98] transition-all">
<span className="material-symbols-outlined" data-icon="add_circle">add_circle</span>
                    قياس جديد
                </button>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden pattern-bg">

<header className="flex justify-between items-center w-full px-8 py-4 h-16 bg-[#FAFAF8]/80 dark:bg-stone-950/80 backdrop-blur-md sticky top-0 z-40 border-b border-stone-200/15 dark:border-stone-800/15">
<div className="flex items-center gap-4 flex-1 max-w-xl">
<div className="relative w-full group">
<span className="material-symbols-outlined absolute left-auto right-3 top-1/2 -translate-y-1/2 text-tertiary text-lg">search</span>
<input className="w-full bg-[#FAFAF8]-container-high border-none rounded-xl py-2 pr-10 pl-4 text-sm focus:ring-2 focus:ring-[#c9a84c]/20 placeholder-tertiary/60 transition-all" placeholder="البحث عن العملاء أو الأقمشة أو الطلبات..." type="text"/>
</div>
</div>
<div className="flex items-center gap-6 mr-8 ml-0">
<div className="flex items-center gap-3">
<button className="text-tertiary hover:text-[#755b00] transition-all">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="text-tertiary hover:text-[#755b00] transition-all">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
</button>
</div>
<div className="h-8 w-[1px] bg-stone-200/50"></div>
<div className="flex items-center gap-3">
<div className="text-left rtl:text-right hidden sm:block">
<p className="text-xs font-bold leading-none">أحمد البشير</p>
<p className="text-[10px] text-tertiary mt-1">رئيس الخياطين</p>
</div>
<img alt="صورة شخصية لخياط محترف" className="w-10 h-10 rounded-full border-0 bg-white shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM9szFoLAxzY2whGHW8sZbISKWtsVeeGDWMGQiqMzjTibelVrsz-EaBYlBu91JJawlbAyKDdPZqT0OcDH-xuSKNHdSY1rtqLDumHWm1ZNMpqFpI-cKdh2vNLMnAYxwhJR3pVABjvxet6OxsW0aog7XujaDMa4ZhiUswpvY8J2Jw0oDS6KpC0TqolJ6h1FkHO0Pedxn2eqB-XZPAofrfNYj2D9DUa95c1ANZ2d6xf7ryXbhPV9G8MxFF-EHRPGUDRzV6q6FX_VPYM9b"/>
</div>
</div>
</header>

<section className="flex-1 overflow-y-auto p-8 space-y-10">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">علاقات العملاء</h2>
<p className="text-tertiary mt-1 font-body">إدارة قاعدة عملائك وخدمات التفصيل المخصصة</p>
</div>
<div className="flex gap-4">
<div className="bg-[#FAFAF8]-container-lowest px-6 py-3 rounded-2xl shadow-sm border-r-4 border-primary border-l-0">
<p className="text-[10px] uppercase tracking-widest text-tertiary font-bold">إجمالي العملاء</p>
<p className="text-2xl font-headline font-bold">1,284</p>
</div>
<div className="bg-[#FAFAF8]-container-lowest px-6 py-3 rounded-2xl shadow-sm border-r-4 border-secondary border-l-0">
<p className="text-[10px] uppercase tracking-widest text-tertiary font-bold">الطلبـات النشطة</p>
<p className="text-2xl font-headline font-bold">42</p>
</div>
</div>
</div>

<div className="grid grid-cols-12 gap-8">

<div className="col-span-12 xl:col-span-8 space-y-6">
<div className="flex items-center justify-between mb-2">
<h3 className="font-headline text-xl font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-primary">recent_actors</span>
                                دليل العملاء
                            </h3>
<div className="flex items-center gap-2">
<button className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#FAFAF8]-container-high text-tertiary hover:bg-[#FAFAF8]-container-highest transition-all">
<span className="material-symbols-outlined text-sm">filter_list</span>
                                    تصفية
                                </button>
<button className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#FAFAF8]-container-high text-tertiary hover:bg-[#FAFAF8]-container-highest transition-all">
<span className="material-symbols-outlined text-sm">sort</span>
                                    ترتيب
                                </button>
</div>
</div>
<div className="bg-[#FAFAF8]-container-lowest rounded-3xl overflow-hidden shadow-sm">
<div className="overflow-x-auto">
<table className="w-full text-right border-collapse">
<thead>
<tr className="bg-[#FAFAF8]-container-low/50">
<th className="px-6 py-4 text-[10px] uppercase tracking-wider text-tertiary font-bold">العميل</th>
<th className="px-6 py-4 text-[10px] uppercase tracking-wider text-tertiary font-bold">فئة الولاء</th>
<th className="px-6 py-4 text-[10px] uppercase tracking-wider text-tertiary font-bold text-center">الطلبات</th>
<th className="px-6 py-4 text-[10px] uppercase tracking-wider text-tertiary font-bold">إجمالي الإنفاق</th>
<th className="px-6 py-4 text-[10px] uppercase tracking-wider text-tertiary font-bold">آخر تفاعل</th>
<th className="px-6 py-4 text-[10px] uppercase tracking-wider text-tertiary font-bold text-left">إجراءات</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-100">

<tr className="hover:bg-[#FAFAF8]-container-low/30 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img alt="عمر محمود" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkgBjiwQQ8jqxOadH8mukV7wK-FPtGfwdBDfa8KHPQ3FcbLdepnndGYEQGSO60i4wwufhMRImNpU2QyOnn_-7jKuO5mUMp5ao21mkUArRlgajcNueVbXNIwC-jf-DRcPEOIsOq9PgcRkPrdtwnQOux3U1pnbJB9xohhZOMuQCvlNbUSv-KL07ixMM-MxR59Puruxhkj6wOEi3FgNm_VzoD7oW6Mff6v6c4ctYtQlDDy2J7WWKwC9wUs4OKhyxGQgBWyf0jc-14CbiU"/>
<div>
<p className="font-bold text-sm">عمر محمود</p>
<p className="text-xs text-tertiary">الخرطوم، السودان</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#ffe08f]/30 text-[#755b00] border border-[#755b00]/10 uppercase">عضو ذهبي</span>
</td>
<td className="px-6 py-4 text-center font-bold text-sm">18</td>
<td className="px-6 py-4 font-bold text-sm text-primary">SDG 425,000</td>
<td className="px-6 py-4 text-xs text-tertiary">24 أكتوبر 2023<br/><span className="text-[10px]">تحديث القياسات</span></td>
<td className="px-6 py-4 text-left">
<button className="bg-[#FAFAF8]-container-high p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-primary/10 hover:text-primary">
<span className="material-symbols-outlined text-lg">chat_bubble</span>
</button>
<button className="bg-[#FAFAF8]-container-high p-2 rounded-lg mr-1 opacity-0 group-hover:opacity-100 transition-all hover:bg-primary/10 hover:text-primary">
<span className="material-symbols-outlined text-lg">more_horiz</span>
</button>
</td>
</tr>

<tr className="hover:bg-[#FAFAF8]-container-low/30 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img alt="زينب إدريس" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqH9akpfThXG9eSk_DgDIjkJN3WnuRxUoLS8f3rNdcLOd7JvX8bkwvhYXl9Oy1LR6wxkZ4Ys70NyThsgsINWd9sc8E34xNkrLZydFwfW0aiEXfq8UcGnBsbpdyLj3KLn-jDKf1mLbZcqscv_A4vGEwOJZLKovyGLce2pLWC_JjYI7iFDdBZdfhgf43mj7W5W2QdBj_c-ZZ7_P2TIsaIKEdS1jekMVQcRd8zbRPAfbXkTYTwtG6F1g_xRdu6-FLmr2sw8tdXmAgmAz-"/>
<div>
<p className="font-bold text-sm">زينب إدريس</p>
<p className="text-xs text-tertiary">أم درمان، السودان</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="px-3 py-1 rounded-full text-[10px] font-bold bg-stone-100 text-stone-600 border-0 bg-white shadow-sm uppercase">عضو فضي</span>
</td>
<td className="px-6 py-4 text-center font-bold text-sm">7</td>
<td className="px-6 py-4 font-bold text-sm text-primary">SDG 112,500</td>
<td className="px-6 py-4 text-xs text-tertiary">02 نوفمبر 2023<br/><span className="text-[10px]">اختيار القماش</span></td>
<td className="px-6 py-4 text-left">
<button className="bg-[#FAFAF8]-container-high p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-primary/10 hover:text-primary">
<span className="material-symbols-outlined text-lg">chat_bubble</span>
</button>
<button className="bg-[#FAFAF8]-container-high p-2 rounded-lg mr-1 opacity-0 group-hover:opacity-100 transition-all hover:bg-primary/10 hover:text-primary">
<span className="material-symbols-outlined text-lg">more_horiz</span>
</button>
</td>
</tr>

<tr className="hover:bg-[#FAFAF8]-container-low/30 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img alt="د. حسن علي" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4O2fFw1rfuZmW3SZrDLuMPY5vwYwiUSuxxVV62KnaWjuJ9akT9YlT3zKNWRHscmpf2iAUMzCZZBNsnyGHOEOZ76Fv5wWn8A3isnMD7OPdFAEHrcvrHyDzEi0vx-kV7vfyxAGClLq4xsNHS736atoErbX3CZ0s8eFWovL6-LuznK0skHfAQbFcXQLipALH5oaqT69NInJbKFkqKauxiuW-UhC0V1nJqF6KKyXeyz_-YZgniQVeqgKoaYGJ_lTY61_zgsLa9TV8NScR"/>
<div>
<p className="font-bold text-sm">د. حسن علي</p>
<p className="text-xs text-tertiary">بحري، السودان</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="px-3 py-1 rounded-full text-[10px] font-bold bg-orange-50 text-orange-700 border-0 bg-white shadow-sm uppercase">عضو برونزي</span>
</td>
<td className="px-6 py-4 text-center font-bold text-sm">3</td>
<td className="px-6 py-4 font-bold text-sm text-primary">SDG 68,000</td>
<td className="px-6 py-4 text-xs text-tertiary">15 أكتوبر 2023<br/><span className="text-[10px]">تسليم الطلب</span></td>
<td className="px-6 py-4 text-left">
<button className="bg-[#FAFAF8]-container-high p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-primary/10 hover:text-primary">
<span className="material-symbols-outlined text-lg">chat_bubble</span>
</button>
<button className="bg-[#FAFAF8]-container-high p-2 rounded-lg mr-1 opacity-0 group-hover:opacity-100 transition-all hover:bg-primary/10 hover:text-primary">
<span className="material-symbols-outlined text-lg">more_horiz</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 bg-[#FAFAF8]-container-low/30 flex items-center justify-between border-t border-stone-100">
<p className="text-xs text-tertiary font-medium">عرض 3 من أصل 1,284 عميلاً</p>
<div className="flex gap-2">
<button className="w-8 h-8 flex items-center justify-center rounded-lg border-0 bg-white shadow-sm text-tertiary hover:bg-[#FAFAF8] transition-all">
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg border-0 bg-white shadow-sm text-tertiary hover:bg-[#FAFAF8] transition-all">
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>
</div>
</div>
</div>
</div>

<div className="col-span-12 xl:col-span-4 space-y-8">

<div className="bg-[#FAFAF8]-container-lowest p-6 rounded-3xl shadow-sm border-0 bg-white shadow-sm">
<h3 className="font-headline text-lg font-bold mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary" >star</span>
                                كبار العملاء
                            </h3>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 rounded-2xl hover:bg-[#FAFAF8]-container-low transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<div className="relative">
<img alt="إبراهيم موسى" className="w-12 h-12 rounded-2xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjqmGqgw9DJzTqMhK6P11waIbqZ2Qc8I1a_9ZkeHPj1ixrlZqNeFxV9vIIZq-C91i_3v30pIGy29r7FlNmEa3qCyfDqotUgWTkclhMn9XkL5L-jM3awoODcTBSJjVKtNE_ChK_oBCcHHxLwNuDFwkPCzhloen5YzlD6WL-0TH5rDyM4D4anCUE9TCivitT3N3l-1T8BLG0Lccj-1FjlPSRrmtxHzWfEzLp8meFICte9T50tzRzJlDqA7fLZ3evKA7z1YgjSPGLrCzw"/>
<span className="absolute -top-1 -left-1 w-5 h-5 bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white text-white text-[10px] flex items-center justify-center rounded-full font-bold">1</span>
</div>
<div>
<p className="font-bold text-sm">إبراهيم موسى</p>
<p className="text-[10px] text-primary font-bold">إجمالي SDG 1.2M</p>
</div>
</div>
<span className="material-symbols-outlined text-tertiary group-hover:-translate-x-1 transition-transform">chevron_left</span>
</div>
<div className="flex items-center justify-between p-3 rounded-2xl hover:bg-[#FAFAF8]-container-low transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<div className="relative">
<img alt="فاطمة صلاح" className="w-12 h-12 rounded-2xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5R9sbEl8dG8sBdugc79pn825zXKtXQiQm2pkPT9VwbmyiijrVqO_YkdDW9Yiz5QnLafbT3EP3585ntQQqIVJs4n_d0rAKpnoLqHUNAVrZyZADQ2bj2Xg6JMmIxaGq1LTMttUOzohXe4Rcxd3Ndk6e0CWq2NKjKq8gK5VFPNCqLaH3s-WX4PVnzQ02eReBmT2a_8siItHaWlbzgBsQPJSNScKp3zOwmuz4EDf7xMHaH2Vw0SGoaFNNTC7_Bg0AFIZKoi6MAXaM7Rd_"/>
<span className="absolute -top-1 -left-1 w-5 h-5 bg-stone-400 text-white text-[10px] flex items-center justify-center rounded-full font-bold">2</span>
</div>
<div>
<p className="font-bold text-sm">فاطمة صلاح</p>
<p className="text-[10px] text-primary font-bold">إجمالي SDG 980K</p>
</div>
</div>
<span className="material-symbols-outlined text-tertiary group-hover:-translate-x-1 transition-transform">chevron_left</span>
</div>
</div>
<button className="w-full mt-6 py-3 text-xs font-bold text-primary border-0 bg-white shadow-sm rounded-xl hover:bg-primary/5 transition-all">عرض جميع العملاء المميزين</button>
</div>

<div className="bg-[#2f3130] text-white p-6 rounded-3xl shadow-lg relative overflow-hidden group">
<div className="absolute top-0 left-0 p-8 opacity-10 scale-150 -rotate-12 group-hover:rotate-0 transition-transform duration-500">
<span className="material-symbols-outlined text-8xl" >history</span>
</div>
<h3 className="font-headline text-lg font-bold mb-2 relative z-10">إعادة تنشيط العملاء</h3>
<p className="text-stone-400 text-xs mb-6 relative z-10">12 عميلاً لم يطلبوا منذ 6 أشهر. أرسل خصماً خاصاً.</p>
<div className="flex items-center gap-4 relative z-10 bg-white/5 p-4 rounded-2xl border-0 bg-white shadow-sm">
<div className="flex -space-x-3 rtl:space-x-reverse">
<img alt="عميل" className="w-8 h-8 rounded-full border-2 border-[#2f3130]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA8VMo035NBnlLKEEQupKOYkLGAvDZWCtKGEKfNNPaFM3SBTHRp-ThbHQrg5KgpERPW8Lik0HvnMg2ZJLxMmrj6sInXGV5zCKiOiSzEC1NzF27rGOMktq0X6dHtJ-0A0frrZw4hUS93BVk0OQXt5hcrKyYvFFCwVSNu57C9D9iwibA_JI0Kw96Hni1mIu-vniEZKjKPgy9O1ANGCScFgMrzEiKDEySI0jgTKOfdTocF7b9-26fJa-A-ltxZLP8tEVAG5TU8MsY6XdT"/>
<img alt="عميل" className="w-8 h-8 rounded-full border-2 border-[#2f3130]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1KDoc6t_9qNVzffB-HL4yf5f_0_SGXaO8vkfyKbnmVPidKWoIkGhwUw_wIEFrGZnx8iWp9Oqo8qqTYBQoYd3q-xQHYEZ2n_MAITpU1eyi-Q4KtgdUX-M6ggJFaYR3xS8hWYjtl3glOaIP2xT64gHn1xworX_wD4zuUhxxJrwbBjCO94Fun4GnQZQC30i6n6jNGOzA0AsuiGEMFeMXiV9s1AF90OpD7Wr1BDSfifoWBqJVvAJCa737ppn6qXTWFFo9d92C7Fy_voUg"/>
<div className="w-8 h-8 rounded-full border-2 border-[#2f3130] bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white text-[10px] flex items-center justify-center font-bold">+10</div>
</div>
<button className="flex-1 py-2 bg-primary-container text-on-primary-container rounded-lg text-[10px] font-bold uppercase tracking-widest hover:brightness-110 transition-all">
                                    إطلاق الحملة
                                </button>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-[#FAFAF8]-container-low p-4 rounded-2xl text-right">
<p className="text-[10px] font-bold text-tertiary uppercase">متوسط الطلب</p>
<p className="text-xl font-bold mt-1">SDG 14.2K</p>
<div className="mt-2 h-1 w-full bg-stone-200 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white w-2/3"></div>
</div>
</div>
<div className="bg-[#FAFAF8]-container-low p-4 rounded-2xl text-right">
<p className="text-[10px] font-bold text-tertiary uppercase">معدل الولاء</p>
<p className="text-xl font-bold mt-1">74%</p>
<div className="mt-2 h-1 w-full bg-stone-200 rounded-full overflow-hidden">
<div className="h-full bg-secondary w-3/4"></div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
</div>

<div className="md:hidden fixed bottom-8 left-8 right-auto">
<button className="w-14 h-14 bg-gradient-to-br from-primary to-primary-container text-white rounded-full shadow-2xl flex items-center justify-center">
<span className="material-symbols-outlined text-2xl">add</span>
</button>
</div>
    </>
  );
}