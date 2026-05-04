import React from 'react';

export default function Screen1() {
  return (
    <>
<aside className="fixed right-0 top-0 h-screen w-64 flex flex-col p-4 z-50 overflow-y-auto bg-[#faf6f0] border-l border-stone-200 font-['Nunito_Sans'] text-right">
<div className="mb-10 px-2 flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
<span className="material-symbols-outlined text-primary text-3xl" data-icon="architecture">architecture</span>
</div>
<h1 className="font-['Literata'] text-xl text-[#4a7c59] font-bold">ترا للملابس</h1>
<p className="text-xs text-stone-500 mt-1">إدارة الخياطة</p>
</div>
<nav className="flex-1 space-y-2">

<a className="flex items-center gap-3 px-4 py-3 bg-[#4a7c59]/10 text-[#4a7c59] font-bold rounded-xl transition-all duration-300" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>لوحة القيادة</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-600 hover:bg-stone-100 hover:pr-2 transition-all duration-300" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span>المستخدمين</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-600 hover:bg-stone-100 hover:pr-2 transition-all duration-300" href="#">
<span className="material-symbols-outlined" data-icon="architecture">architecture</span>
<span>الخياطين</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-600 hover:bg-stone-100 hover:pr-2 transition-all duration-300" href="#">
<span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
<span>الطلبات</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-600 hover:bg-stone-100 hover:pr-2 transition-all duration-300" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
<span>التحليلات</span>
</a>
</nav>
<div className="mt-auto pt-4 border-t border-stone-200 space-y-2">
<button className="w-full bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 mb-4 hover:shadow-lg transition-all active:scale-95">
<span className="material-symbols-outlined" data-icon="add">add</span>
<span>طلب جديد</span>
</button>
<a className="flex items-center gap-3 px-4 py-3 text-stone-600 hover:bg-stone-100 hover:pr-2 transition-all duration-300" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span>الإعدادات</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-error hover:bg-error-container/20 hover:pr-2 transition-all duration-300" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span>تسجيل الخروج</span>
</a>
</div>
</aside>

<main className="mr-64 min-h-screen p-8">

<header className="flex items-center justify-between mb-10 h-16">
<div className="flex items-center gap-4">
<h2 className="text-2xl font-['Literata'] font-bold text-on-surface">مرحباً، أدمن ترا</h2>
<span className="text-stone-500 text-sm">الأحد، 24 مايو 2024</span>
</div>
<div className="flex items-center gap-6">
<div className="relative flex items-center bg-[#FAFAF8]-container-high rounded-full px-4 py-2 w-80">
<span className="material-symbols-outlined text-stone-400 text-xl" data-icon="search">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm w-full font-body placeholder:text-stone-400" placeholder="بحث عن طلبات أو خياطين..." type="text"/>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-full hover:bg-stone-100 text-stone-600 transition-colors">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-2 rounded-full hover:bg-stone-100 text-stone-600 transition-colors">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<div className="w-10 h-10 rounded-full border-0 bg-white shadow-sm overflow-hidden">
<img alt="Admin Profile" className="w-full h-full object-cover" data-alt="close up headshot portrait of middle aged professional man with friendly expression and slight stubble" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBCklfzQUZyEflV1wA0Z-GSO7Ch9nIJIM0pMBD7zet6zAmxgJfExNM7gx_1Vlcg5OsRRmUmVdGW_tiTtv3XRrK0rN6fyYWgbAhyrhEkJgb5s6FdMA-o0hAJDnn1BVElVciZzcQL3hPF4ifG2nq8k25IW2x9D3PjoDxDatEwtFJyoi0lTejX8B7Z-COlFfMVh2udu2pNs-UE86NmUpbk5OJIRm5ST--7aFb9gabRMSsTDjQmzRGq5-rNcLs8JebaltPAkmxcRINcu0y"/>
</div>
</div>
</div>
</header>

<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

<div className="bg-[#FAFAF8]-container-low p-6 rounded-xl border-0 bg-white shadow-sm flex items-center justify-between group hover:bg-white transition-all shadow-sm">
<div>
<p className="text-stone-500 text-sm font-label mb-1">إجمالي الإيرادات</p>
<h3 className="text-2xl font-bold font-headline text-on-surface">2,450,000 <span className="text-xs font-normal">SDG</span></h3>
<p className="text-emerald-600 text-xs mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-xs" data-icon="trending_up">trending_up</span>
                        12%+ عن الشهر الماضي
                    </p>
</div>
<div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
</div>
</div>

<div className="bg-[#FAFAF8]-container-low p-6 rounded-xl border-0 bg-white shadow-sm flex items-center justify-between group hover:bg-white transition-all shadow-sm">
<div>
<p className="text-stone-500 text-sm font-label mb-1">طلبات الشهر</p>
<h3 className="text-2xl font-bold font-headline text-on-surface">184</h3>
<p className="text-emerald-600 text-xs mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-xs" data-icon="trending_up">trending_up</span>
                        8%+ عن الشهر الماضي
                    </p>
</div>
<div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
<span className="material-symbols-outlined" data-icon="shopping_basket">shopping_basket</span>
</div>
</div>

<div className="bg-[#FAFAF8]-container-low p-6 rounded-xl border-0 bg-white shadow-sm flex items-center justify-between group hover:bg-white transition-all shadow-sm">
<div>
<p className="text-stone-500 text-sm font-label mb-1">الخياطين النشطين</p>
<h3 className="text-2xl font-bold font-headline text-on-surface">24</h3>
<p className="text-tertiary text-xs mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-xs" data-icon="check_circle">check_circle</span>
                        جميعهم متاحون حالياً
                    </p>
</div>
<div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
<span className="material-symbols-outlined" data-icon="person_search">person_search</span>
</div>
</div>

<div className="bg-[#FAFAF8]-container-low p-6 rounded-xl border-0 bg-white shadow-sm flex items-center justify-between group hover:bg-white transition-all shadow-sm">
<div>
<p className="text-stone-500 text-sm font-label mb-1">نمو العملاء</p>
<h3 className="text-2xl font-bold font-headline text-on-surface">1.2k</h3>
<p className="text-emerald-600 text-xs mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-xs" data-icon="trending_up">trending_up</span>
                        5%+ عملاء جدد
                    </p>
</div>
<div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
<span className="material-symbols-outlined" data-icon="group_add">group_add</span>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">

<div className="lg:col-span-2 bg-white p-8 rounded-xl border-0 bg-white shadow-sm shadow-sm relative overflow-hidden">
<div className="flex justify-between items-center mb-8">
<div>
<h3 className="text-lg font-bold font-headline text-on-surface">اتجاهات الطلبات (30 يوماً)</h3>
<p className="text-xs text-stone-400">تحليل المبيعات اليومية لشهر مايو</p>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 bg-[#FAFAF8]-container-low rounded-full text-xs font-medium text-stone-600">تحميل PDF</span>
<span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium text-primary">مفصل</span>
</div>
</div>

<div className="h-64 flex items-end justify-between gap-1 relative">
<div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none">
<div className="w-full border-b border-stone-50 opacity-100"></div>
<div className="w-full border-b border-stone-50 opacity-100"></div>
<div className="w-full border-b border-stone-50 opacity-100"></div>
<div className="w-full border-b border-stone-100 opacity-100"></div>
</div>
<div className="w-4 bg-primary/20 h-[40%] rounded-t-sm"></div>
<div className="w-4 bg-primary/30 h-[55%] rounded-t-sm"></div>
<div className="w-4 bg-primary/20 h-[30%] rounded-t-sm"></div>
<div className="w-4 bg-primary/40 h-[70%] rounded-t-sm"></div>
<div className="w-4 bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white h-[85%] rounded-t-sm"></div>
<div className="w-4 bg-primary/60 h-[50%] rounded-t-sm"></div>
<div className="w-4 bg-primary/40 h-[65%] rounded-t-sm"></div>
<div className="w-4 bg-primary/20 h-[45%] rounded-t-sm"></div>
<div className="w-4 bg-primary/50 h-[80%] rounded-t-sm"></div>
<div className="w-4 bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white h-[95%] rounded-t-sm"></div>
<div className="w-4 bg-primary/70 h-[60%] rounded-t-sm"></div>
<div className="w-4 bg-primary/30 h-[40%] rounded-t-sm"></div>
<div className="w-4 bg-primary/80 h-[75%] rounded-t-sm"></div>
</div>
<div className="flex justify-between mt-4 text-[10px] text-stone-400 px-2 font-body uppercase tracking-wider">
<span>1 مايو</span>
<span>10 مايو</span>
<span>20 مايو</span>
<span>30 مايو</span>
</div>
</div>

<div className="bg-white p-8 rounded-xl border-0 bg-white shadow-sm shadow-sm flex flex-col">
<h3 className="text-lg font-bold font-headline text-on-surface mb-2">توزيع الأصناف</h3>
<p className="text-xs text-stone-400 mb-8">الجلابية مقابل الدشداشة</p>
<div className="relative w-48 h-48 mx-auto flex items-center justify-center">
<div className="absolute inset-0 rounded-full border-[18px] border-primary-container"></div>
<div className="absolute inset-0 rounded-full border-[18px] border-tertiary-container border-r-transparent border-b-transparent rotate-[45deg]"></div>
<div className="text-center z-10">
<span className="block text-2xl font-bold font-headline text-primary">72%</span>
<span className="text-[10px] text-stone-500 uppercase tracking-tighter">جلابية</span>
</div>
</div>
<div className="mt-auto space-y-3">
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-primary"></span>
<span className="text-stone-600">الجلابية السودانية</span>
</div>
<span className="font-bold">72%</span>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-tertiary"></span>
<span className="text-stone-600">الدشداشة الخليجية</span>
</div>
<span className="font-bold">28%</span>
</div>
</div>
</div>
</section>

<section className="bg-white rounded-xl border-0 bg-white shadow-sm shadow-sm overflow-hidden">
<div className="px-8 py-6 border-b border-stone-100 flex items-center justify-between">
<h3 className="text-lg font-bold font-headline text-on-surface">آخر الطلبات</h3>
<button className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                    عرض جميع الطلبات
                    <span className="material-symbols-outlined text-sm" data-icon="chevron_left">chevron_left</span>
</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-right font-body">
<thead className="bg-[#FAFAF8]-container-low text-on-surface-variant text-xs font-bold">
<tr>
<th className="px-8 py-4">اسم العميل</th>
<th className="px-8 py-4">نوع الزي</th>
<th className="px-8 py-4">الخياط</th>
<th className="px-8 py-4">الحالة</th>
<th className="px-8 py-4">السعر</th>
<th className="px-8 py-4"></th>
</tr>
</thead>
<tbody className="divide-y divide-stone-100">

<tr className="hover:bg-stone-50 transition-colors">
<td className="px-8 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#FAFAF8]-variant flex items-center justify-center font-bold text-xs text-on-surface-variant">م ع</div>
<span className="font-medium">محمد علي البشير</span>
</div>
</td>
<td className="px-8 py-4">جلابية سودانية (قطن)</td>
<td className="px-8 py-4">أحمد الترزي</td>
<td className="px-8 py-4">
<span className="px-3 py-1 rounded-full text-[10px] font-bold bg-primary-container/20 text-on-primary-fixed-variant">في التنفيذ</span>
</td>
<td className="px-8 py-4 font-bold text-on-surface">45,000 SDG</td>
<td className="px-8 py-4">
<button className="p-1 hover:bg-stone-100 rounded">
<span className="material-symbols-outlined text-stone-400" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-stone-50 transition-colors">
<td className="px-8 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#FAFAF8]-variant flex items-center justify-center font-bold text-xs text-on-surface-variant">أ ص</div>
<span className="font-medium">أسامة صالح</span>
</div>
</td>
<td className="px-8 py-4">دشداشة شتوية</td>
<td className="px-8 py-4">عثمان الخياط</td>
<td className="px-8 py-4">
<span className="px-3 py-1 rounded-full text-[10px] font-bold bg-tertiary-container/20 text-on-tertiary-fixed-variant">تم التوصيل</span>
</td>
<td className="px-8 py-4 font-bold text-on-surface">52,000 SDG</td>
<td className="px-8 py-4">
<button className="p-1 hover:bg-stone-100 rounded">
<span className="material-symbols-outlined text-stone-400" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-stone-50 transition-colors">
<td className="px-8 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#FAFAF8]-variant flex items-center justify-center font-bold text-xs text-on-surface-variant">ي م</div>
<span className="font-medium">ياسر محمود</span>
</div>
</td>
<td className="px-8 py-4">جلابية (كتان)</td>
<td className="px-8 py-4">أحمد الترزي</td>
<td className="px-8 py-4">
<span className="px-3 py-1 rounded-full text-[10px] font-bold bg-error-container/20 text-error">متأخر</span>
</td>
<td className="px-8 py-4 font-bold text-on-surface">48,500 SDG</td>
<td className="px-8 py-4">
<button className="p-1 hover:bg-stone-100 rounded">
<span className="material-symbols-outlined text-stone-400" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-stone-50 transition-colors">
<td className="px-8 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#FAFAF8]-variant flex items-center justify-center font-bold text-xs text-on-surface-variant">خ ك</div>
<span className="font-medium">خالد كمال</span>
</div>
</td>
<td className="px-8 py-4">جلابية رسمية</td>
<td className="px-8 py-4">سيف الدين</td>
<td className="px-8 py-4">
<span className="px-3 py-1 rounded-full text-[10px] font-bold bg-stone-100 text-stone-500">تم الاستلام</span>
</td>
<td className="px-8 py-4 font-bold text-on-surface">60,000 SDG</td>
<td className="px-8 py-4">
<button className="p-1 hover:bg-stone-100 rounded">
<span className="material-symbols-outlined text-stone-400" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
<div className="md:col-span-1 bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white text-white p-8 rounded-xl shadow-lg relative overflow-hidden flex flex-col justify-between min-h-[320px]">
<div className="relative z-10">
<h3 className="text-2xl font-bold font-headline mb-2 leading-tight">خياط الشهر المتميز</h3>
<p className="text-primary-fixed text-sm">أحمد الترزي - 48 طلب مكتمل</p>
</div>
<div className="relative z-10 mt-auto">
<button className="bg-white text-primary px-6 py-2 rounded-full font-bold text-sm hover:bg-primary-fixed transition-colors">عرض السيرة الذاتية</button>
</div>

<div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary-container/20 rounded-full blur-3xl"></div>
<div className="absolute top-0 right-0 p-4 opacity-20">
<span className="material-symbols-outlined text-9xl" data-icon="military_tech" >military_tech</span>
</div>
</div>
<div className="md:col-span-2 bg-[#FAFAF8]-container-highest/30 p-8 rounded-xl border-0 bg-white shadow-sm flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<h3 className="text-xl font-bold font-headline text-on-surface mb-4">إدارة مخزون الأقمشة</h3>
<p className="text-stone-600 text-sm mb-6 leading-relaxed">تتبع كميات القطن، الكتان، والأقمشة المستوردة لضمان استمرارية العمل في الورش.</p>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs mb-1">
<span>قطن سوداني (أبيض)</span>
<span className="text-primary font-bold">120 متر متبقي</span>
</div>
<div className="w-full h-2 bg-stone-200 rounded-full">
<div className="bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white h-full w-[85%] rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span>كتان مستورد</span>
<span className="text-tertiary font-bold">15 متر متبقي</span>
</div>
<div className="w-full h-2 bg-stone-200 rounded-full">
<div className="bg-tertiary h-full w-[15%] rounded-full"></div>
</div>
</div>
</div>
</div>
<div className="w-48 h-48 rounded-xl overflow-hidden shadow-sm flex-shrink-0 border-0 bg-white shadow-sm">
<img alt="Fabric Inventory" className="w-full h-full object-cover" data-alt="close up of stacked folded high quality white cotton fabrics with soft natural textures and light shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ0OTv1k7glLHW_AS4dxFCk3itKL28v7KoCHWcG3yeyOZF8H-Y_yBnEFQBM5-yxaAcxMbs3_t0R4KnJkTCjN6cb9CL-Gs8jAgzbxFBG_u1OVxnWhkqaB7pA5XtZWqMzfNvAu-T28GAPEsmKnLkwrCc2kFHz4WZmFrLKpIS0RQTsagqopBqSALE-3YMDGAHsJojI0Ax_1tiISQm2fV3mOd2VdTbGOwiLBLKmZRolLYb0PHl30KfyhDkGANeekR26fLnwd-7WXgjYKuP"/>
</div>
</div>
</section>
</main>
    </>
  );
}