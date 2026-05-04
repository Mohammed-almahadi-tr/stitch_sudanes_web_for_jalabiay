import React from 'react';

export default function OrdersManagement() {
  return (
    <>
<aside className="h-screen w-64 fixed right-0 top-0 border-l-0 bg-[#f4f4f2] dark:bg-stone-900 shadow-[1px_0_0_0_rgba(0,0,0,0.05)] flex flex-col py-8 px-4 z-50">
<div className="text-xl font-bold text-[#1a1c1b] dark:text-[#f9f9f7] mb-8 font-['Be_Vietnam_Pro'] tracking-wide">
            Heritage Digital
            <div className="text-[10px] font-medium opacity-60 uppercase tracking-widest mt-1">Premium Tailoring</div>
</div>
<nav className="flex-1 space-y-2">
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#5f5e5c] hover:bg-[#e8e8e6] transition-colors duration-200 font-medium text-sm" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#755b00] font-bold border-l-4 border-[#755b00] bg-white/50 transition-colors duration-200 font-medium text-sm" href="#">
<span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
<span>Orders</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#5f5e5c] hover:bg-[#e8e8e6] transition-colors duration-200 font-medium text-sm" href="#">
<span className="material-symbols-outlined" data-icon="straighten">straighten</span>
<span>Measurements</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#5f5e5c] hover:bg-[#e8e8e6] transition-colors duration-200 font-medium text-sm" href="#">
<span className="material-symbols-outlined" data-icon="groups">groups</span>
<span>Customers</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#5f5e5c] hover:bg-[#e8e8e6] transition-colors duration-200 font-medium text-sm" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span>Settings</span>
</a>
</nav>
<button className="mt-auto w-full bg-gradient-to-br from-primary to-primary-container text-white py-3 rounded-xl font-bold text-sm shadow-sm hover:opacity-90 active:scale-[0.98] transition-all">
            New Commission
        </button>
</aside>

<main className="mr-64 min-h-screen">

<header className="fixed top-0 left-0 w-[calc(100%-16rem)] z-40 bg-[#FAFAF8]/80 backdrop-blur-xl border-b border-[#e8e8e6] flex justify-between items-center h-20 px-10">
<div className="flex items-center gap-4 flex-1">
<div className="relative w-full max-w-md focus-within:ring-1 focus-within:ring-[#c9a84c] rounded-full overflow-hidden">
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-tertiary">search</span>
<input className="w-full bg-[#FAFAF8]-container-high border-none py-2.5 pr-12 pl-4 text-sm focus:ring-0 placeholder:text-tertiary/60" placeholder="بحث عن اسم العميل أو رقم الطلب..." type="text"/>
</div>
</div>
<div className="flex items-center gap-6">
<button className="text-tertiary hover:text-primary transition-all">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="text-tertiary hover:text-primary transition-all">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
</button>
<div className="flex items-center gap-3 border-r pr-6 border-outline-variant/30">
<div className="text-left">
<p className="text-xs font-bold text-on-surface">أحمد الخياط</p>
<p className="text-[10px] text-tertiary">رئيس المشغل</p>
</div>
<img alt="Profile" className="w-10 h-10 rounded-full bg-[#FAFAF8]-container-highest object-cover" data-alt="close-up portrait of a professional tailor wearing a subtle linen shirt in a brightly lit modern studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwmkvyMFyrtRlrwfJHO3gigVXan-QBEH9XAa93PDnPmrirRHyPRqme1iW6Pew2W9263eYddYfKiawUtN4tmlK1CEsVee4OSQR_CxJcB4E9LpRITqXJF6Wom2h6GQ6911biJ_fEzI60wdZqDWuugN9Am5A2vM9hPEvo4L18egwTrje3eoeJqazyH_udjCfTn6upwoVKrnjrd2njhmApEVHLBJfrW3GB8a-XNKi4Wd-qI6R4EKv04CnRNJFGOHnXSfk4FbVg3paHsRJQ"/>
</div>
</div>
</header>

<section className="pt-28 px-10 pb-12">

<div className="mb-10 flex justify-between items-end">
<div>
<h1 className="text-4xl font-extrabold text-on-surface tracking-tight mb-2">إدارة الطلبات</h1>
<p className="text-tertiary max-w-lg">تتبع جميع التكليفات الجارية، الطلبات الجديدة، وحالات التسليم في مكان واحد.</p>
</div>
<div className="flex gap-3">
<button className="px-6 py-2.5 bg-[#FAFAF8]-container-lowest text-on-surface border-0 bg-white shadow-sm rounded-xl text-sm font-semibold hover:bg-[#FAFAF8]-container-high transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-sm">filter_list</span>
                        تصفية متقدمة
                    </button>
</div>
</div>

<div className="flex gap-1 mb-8 p-1.5 bg-[#FAFAF8]-container-low rounded-2xl w-fit">
<button className="px-8 py-3 rounded-xl text-sm font-bold bg-[#FAFAF8]-container-lowest text-primary shadow-sm transition-all">الكل</button>
<button className="px-8 py-3 rounded-xl text-sm font-medium text-tertiary hover:bg-[#FAFAF8]-container-high transition-all">جديد</button>
<button className="px-8 py-3 rounded-xl text-sm font-medium text-tertiary hover:bg-[#FAFAF8]-container-high transition-all">قيد التنفيذ</button>
<button className="px-8 py-3 rounded-xl text-sm font-medium text-tertiary hover:bg-[#FAFAF8]-container-high transition-all">جاهز للاستلام</button>
<button className="px-8 py-3 rounded-xl text-sm font-medium text-tertiary hover:bg-[#FAFAF8]-container-high transition-all">مكتمل</button>
</div>

<div className="bg-[#FAFAF8]-container-low rounded-3xl overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
<table className="w-full text-right border-collapse">
<thead>
<tr className="bg-[#FAFAF8]-container-high/50 text-tertiary text-xs font-bold uppercase tracking-widest">
<th className="px-8 py-6">رقم الطلب</th>
<th className="px-8 py-6">العميل</th>
<th className="px-8 py-6">نوع القطعة</th>
<th className="px-8 py-6">الحالة</th>
<th className="px-8 py-6">الموعد النهائي</th>
<th className="px-8 py-6 text-left">الإجراءات</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/10">

<tr className="bg-[#FAFAF8]-container-lowest hover:bg-[#FAFAF8]-container-low transition-all group">
<td className="px-8 py-6 font-mono text-sm font-bold text-on-surface">#ORD-8821</td>
<td className="px-8 py-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center text-primary font-bold text-xs">محمد</div>
<span className="font-semibold">محمد عبد الرحمن</span>
</div>
</td>
<td className="px-8 py-6 text-tertiary text-sm">جلابية سودانية مطرزة</td>
<td className="px-8 py-6">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[11px] font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                    قيد التنفيذ
                                </span>
</td>
<td className="px-8 py-6 text-sm text-tertiary">14 أكتوبر 2023</td>
<td className="px-8 py-6 text-left">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 hover:bg-[#FAFAF8]-container-high rounded-lg text-primary transition-all">
<span className="material-symbols-outlined text-lg">visibility</span>
</button>
<button className="p-2 hover:bg-[#FAFAF8]-container-high rounded-lg text-tertiary transition-all">
<span className="material-symbols-outlined text-lg">edit</span>
</button>
</div>
</td>
</tr>

<tr className="bg-[#FAFAF8]-container-lowest hover:bg-[#FAFAF8]-container-low transition-all group border-t border-outline-variant/5">
<td className="px-8 py-6 font-mono text-sm font-bold text-on-surface">#ORD-8819</td>
<td className="px-8 py-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary font-bold text-xs">ياسر</div>
<span className="font-semibold">ياسر عثمان</span>
</div>
</td>
<td className="px-8 py-6 text-tertiary text-sm">دشداشة رسمية</td>
<td className="px-8 py-6">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/30 text-on-primary-container text-[11px] font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                    بانتظار القياس
                                </span>
</td>
<td className="px-8 py-6 text-sm text-tertiary">18 أكتوبر 2023</td>
<td className="px-8 py-6 text-left">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 hover:bg-[#FAFAF8]-container-high rounded-lg text-primary transition-all">
<span className="material-symbols-outlined text-lg">visibility</span>
</button>
<button className="p-2 hover:bg-[#FAFAF8]-container-high rounded-lg text-tertiary transition-all">
<span className="material-symbols-outlined text-lg">edit</span>
</button>
</div>
</td>
</tr>

<tr className="bg-[#FAFAF8]-container-lowest hover:bg-[#FAFAF8]-container-low transition-all group border-t border-outline-variant/5">
<td className="px-8 py-6 font-mono text-sm font-bold text-on-surface">#ORD-8815</td>
<td className="px-8 py-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary font-bold text-xs">خالد</div>
<span className="font-semibold">خالد الفاتح</span>
</div>
</td>
<td className="px-8 py-6 text-tertiary text-sm">طقم كامل 3 قطع</td>
<td className="px-8 py-6">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8e8e6] text-on-surface text-[11px] font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                                    جاهز للاستلام
                                </span>
</td>
<td className="px-8 py-6 text-sm text-secondary font-bold">مكتمل</td>
<td className="px-8 py-6 text-left">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 hover:bg-[#FAFAF8]-container-high rounded-lg text-primary transition-all">
<span className="material-symbols-outlined text-lg">visibility</span>
</button>
<button className="p-2 hover:bg-[#FAFAF8]-container-high rounded-lg text-tertiary transition-all">
<span className="material-symbols-outlined text-lg">edit</span>
</button>
</div>
</td>
</tr>

<tr className="bg-[#FAFAF8]-container-lowest hover:bg-[#FAFAF8]-container-low transition-all group border-t border-outline-variant/5">
<td className="px-8 py-6 font-mono text-sm font-bold text-on-surface">#ORD-8812</td>
<td className="px-8 py-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-error-container/20 flex items-center justify-center text-error font-bold text-xs">عمر</div>
<span className="font-semibold">عمر حسن</span>
</div>
</td>
<td className="px-8 py-6 text-tertiary text-sm">جلابية حرير</td>
<td className="px-8 py-6">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-error-container text-on-error-container text-[11px] font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                                    تأخير في التوريد
                                </span>
</td>
<td className="px-8 py-6 text-sm text-error font-bold">08 أكتوبر 2023</td>
<td className="px-8 py-6 text-left">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 hover:bg-[#FAFAF8]-container-high rounded-lg text-primary transition-all">
<span className="material-symbols-outlined text-lg">visibility</span>
</button>
<button className="p-2 hover:bg-[#FAFAF8]-container-high rounded-lg text-tertiary transition-all">
<span className="material-symbols-outlined text-lg">edit</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>

<div className="px-8 py-6 bg-[#FAFAF8]-container-lowest flex justify-between items-center border-t border-outline-variant/10">
<span className="text-xs text-tertiary font-medium">عرض 1-4 من أصل 84 طلباً</span>
<div className="flex gap-1">
<button className="p-2 rounded-lg hover:bg-[#FAFAF8]-container-low transition-all">
<span className="material-symbols-outlined rotate-180">chevron_left</span>
</button>
<button className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white text-white text-xs font-bold">1</button>
<button className="w-8 h-8 rounded-lg hover:bg-[#FAFAF8]-container-low text-xs font-medium">2</button>
<button className="w-8 h-8 rounded-lg hover:bg-[#FAFAF8]-container-low text-xs font-medium">3</button>
<button className="p-2 rounded-lg hover:bg-[#FAFAF8]-container-low transition-all">
<span className="material-symbols-outlined rotate-180">chevron_right</span>
</button>
</div>
</div>
</div>

<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 bg-[#FAFAF8]-container-lowest rounded-[2rem] shadow-sm relative overflow-hidden group">
<div className="relative z-10">
<p className="text-tertiary text-xs font-bold uppercase tracking-widest mb-4">الطلبات النشطة اليوم</p>
<h3 className="text-5xl font-extrabold text-on-surface">24</h3>
<p className="mt-4 text-[10px] text-secondary font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-sm">trending_up</span>
                            +12% عن الأسبوع الماضي
                        </p>
</div>
<div className="absolute -bottom-4 -left-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110">
<span className="material-symbols-outlined text-9xl">inventory_2</span>
</div>
</div>
<div className="p-8 bg-[#FAFAF8]-container-lowest rounded-[2rem] shadow-sm relative overflow-hidden group">
<div className="relative z-10">
<p className="text-tertiary text-xs font-bold uppercase tracking-widest mb-4">متوسط وقت الإنجاز</p>
<h3 className="text-5xl font-extrabold text-on-surface">4.2</h3>
<p className="text-lg font-medium text-tertiary">أيام</p>
</div>
<div className="absolute -bottom-4 -left-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110">
<span className="material-symbols-outlined text-9xl">schedule</span>
</div>
</div>
<div className="p-1 bg-gradient-to-br from-primary to-primary-container rounded-[2.25rem]">
<div className="p-8 bg-[#FAFAF8]-container-lowest h-full w-full rounded-[2rem] relative overflow-hidden">
<div className="relative z-10">
<p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">الإيرادات المتوقعة</p>
<h3 className="text-4xl font-extrabold text-on-primary-container">12,450</h3>
<p className="text-sm font-bold text-on-primary-container">جنية سوداني</p>
<button className="mt-6 flex items-center gap-2 text-xs font-extrabold text-primary hover:gap-3 transition-all">
                                عرض التقارير المالية
                                <span className="material-symbols-outlined text-sm">arrow_back</span>
</button>
</div>
</div>
</div>
</div>
</section>
</main>
    </>
  );
}