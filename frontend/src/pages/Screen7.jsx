import React from 'react';

export default function Screen7() {
  return (
    <>
<div className="flex min-h-screen">

<aside className="hidden md:flex flex-col h-screen w-64 border-l-0 border-r border-outline-variant/10 bg-[#f4f4f2] dark:bg-stone-900 font-['Noto_Sans_Arabic'] antialiased tracking-tight sticky top-0">
<div className="flex flex-col h-full py-8 px-4">
<div className="mb-10 px-2">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined" data-icon="architecture">architecture</span>
</div>
<div>
<h1 className="text-xl font-bold text-[#1a1c1b] dark:text-[#f9f9f7]">Heritage Digital</h1>
<p className="text-xs text-tertiary">مشغل الخياطة الحديث</p>
</div>
</div>
</div>
<nav className="flex-1 space-y-2">
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#5f5e5c] dark:text-stone-400 hover:bg-[#e8e8e6] dark:hover:bg-stone-800 transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="text-sm font-medium">لوحة القيادة</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#755b00] dark:text-[#c9a84c] font-bold border-l-4 border-[#755b00] dark:border-[#c9a84c] bg-[#FAFAF8]/50 dark:bg-stone-800/50" href="#">
<span className="material-symbols-outlined" data-icon="straighten">straighten</span>
<span className="text-sm font-medium">القياسات</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#5f5e5c] dark:text-stone-400 hover:bg-[#e8e8e6] dark:hover:bg-stone-800 transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span className="text-sm font-medium">العملاء</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#5f5e5c] dark:text-stone-400 hover:bg-[#e8e8e6] dark:hover:bg-stone-800 transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
<span className="text-sm font-medium">الطلبات</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#5f5e5c] dark:text-stone-400 hover:bg-[#e8e8e6] dark:hover:bg-stone-800 transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="text-sm font-medium">الإعدادات</span>
</a>
</nav>
<div className="mt-auto px-2">
<button className="w-full py-3 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/10 hover:opacity-90 transition-all">
<span className="material-symbols-outlined text-sm" data-icon="add">add</span>
<span>قياس جديد</span>
</button>
</div>
</div>
</aside>
<main className="flex-1 flex flex-col min-w-0 bg-[#FAFAF8]">

<header className="flex justify-between items-center w-full px-8 py-4 h-16 bg-[#FAFAF8]/80 dark:bg-stone-950/80 backdrop-blur-md sticky top-0 z-40 border-b border-stone-200/15 dark:border-stone-800/15">
<div className="flex items-center flex-1 max-w-xl">
<div className="relative w-full focus-within:ring-2 focus-within:ring-[#c9a84c]/20 rounded-lg">
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-tertiary" data-icon="search">search</span>
<input className="w-full pr-10 pl-4 py-2 bg-[#FAFAF8]-container-low border-none rounded-lg text-sm focus:ring-0 placeholder:text-tertiary/60" placeholder="ابحث عن عميل بالاسم أو الهوية..." type="text"/>
</div>
</div>
<div className="flex items-center gap-6 mr-4">
<div className="flex items-center gap-4 text-tertiary">
<button className="hover:text-[#755b00] transition-all">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="hover:text-[#755b00] transition-all">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
</button>
</div>
<div className="h-8 w-8 rounded-full overflow-hidden bg-[#FAFAF8]-container-high border-0 bg-white shadow-sm">
<img className="w-full h-full object-cover" data-alt="professional male tailor wearing a measuring tape around his neck in a well-lit studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5yM5sPRCMG6HoU5q0COMp8iph5jnBWqmxrvMhd9IIGmwV2xyP3dtOAZHGyQnT7y3oVWMNG3LWpV4abdwaFcfZQfDgzOZ-eDmOnfZiOv7ljwyBBPRJS6v03QSZnTo_HG1brpFUxq4mUx_hRTFivUi5FE-mild89X82vQmz6OYHShi9_w2dBfr-TuA4c44rGss0oBqhQSPuBQDbWN3bvFv3u6rRuhYLkYKH-5iRkJth25S4y8rGQ1jwJGdph-cyXCGobUoi_-ZbE27i"/>
</div>
</div>
</header>
<div className="p-8 space-y-8">

<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
<div>
<h2 className="text-3xl font-extrabold text-on-surface tracking-tight">قاعدة بيانات القياسات</h2>
<p className="text-tertiary mt-1">إدارة وتحديث ملفات القياس البدنية للعملاء.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full lg:w-auto">
<div className="bg-[#FAFAF8]-container-lowest p-6 rounded-xl flex items-center gap-4 min-w-[240px]">
<div className="w-12 h-12 rounded-full bg-secondary-container/30 text-secondary flex items-center justify-center">
<span className="material-symbols-outlined" data-icon="group">group</span>
</div>
<div>
<p className="text-xs font-semibold text-tertiary uppercase tracking-wider">إجمالي العملاء</p>
<p className="text-2xl font-bold">1,284</p>
</div>
</div>
<div className="bg-[#FAFAF8]-container-lowest p-6 rounded-xl flex items-center gap-4 min-w-[240px]">
<div className="w-12 h-12 rounded-full bg-primary-container/20 text-primary flex items-center justify-center">
<span className="material-symbols-outlined" data-icon="update">update</span>
</div>
<div>
<p className="text-xs font-semibold text-tertiary uppercase tracking-wider">تم التحديث هذا الأسبوع</p>
<p className="text-2xl font-bold">42</p>
</div>
</div>
</div>
</div>

<div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2">
<button className="px-6 py-2 rounded-full bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white text-on-primary text-sm font-semibold whitespace-nowrap">جميع الملفات</button>
<button className="px-6 py-2 rounded-full bg-[#FAFAF8]-container-low text-on-surface hover:bg-[#FAFAF8]-container-high transition-colors text-sm font-medium whitespace-nowrap">رجال</button>
<button className="px-6 py-2 rounded-full bg-[#FAFAF8]-container-low text-on-surface hover:bg-[#FAFAF8]-container-high transition-colors text-sm font-medium whitespace-nowrap">نساء</button>
<button className="px-6 py-2 rounded-full bg-[#FAFAF8]-container-low text-on-surface hover:bg-[#FAFAF8]-container-high transition-colors text-sm font-medium whitespace-nowrap">أطفال</button>
<button className="px-6 py-2 rounded-full bg-[#FAFAF8]-container-low text-on-surface hover:bg-[#FAFAF8]-container-high transition-colors text-sm font-medium whitespace-nowrap flex items-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="history">history</span>
                        تحديثات حديثة
                    </button>
</div>

<div className="bg-[#FAFAF8]-container-low rounded-2xl overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-right border-collapse">
<thead>
<tr className="text-tertiary border-b border-outline-variant/10">
<th className="px-6 py-5 font-semibold text-xs uppercase tracking-widest">ملف العميل</th>
<th className="px-6 py-5 font-semibold text-xs uppercase tracking-widest text-center">آخر تحديث</th>
<th className="px-6 py-5 font-semibold text-xs uppercase tracking-widest text-center">الطول</th>
<th className="px-6 py-5 font-semibold text-xs uppercase tracking-widest text-center">الصدر</th>
<th className="px-6 py-5 font-semibold text-xs uppercase tracking-widest text-center">الكتف</th>
<th className="px-6 py-5 font-semibold text-xs uppercase tracking-widest text-center">الخصر</th>
<th className="px-6 py-5 font-semibold text-xs uppercase tracking-widest text-center">الحالة</th>
<th className="px-6 py-5 font-semibold text-xs uppercase tracking-widest text-left">إجراء</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/5">

<tr className="bg-[#FAFAF8]-container-lowest hover:bg-[#FAFAF8]-container/30 transition-colors">
<td className="px-6 py-5">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#FAFAF8]-container overflow-hidden">
<img className="w-full h-full object-cover" data-alt="close up headshot of a distinguished man with sharp facial features and professional look" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdxO6TQmVevdmk-R5R2MVSZp252X-AWhz1U5DUIM_6t6cjTEkqxhaHbL8PtAYu61g0pQVHbhnsS8bDTN1I3CJ_0Y3kohuZasRzN-1eQDDEV7rlsgRUenPkD4Ck6OOqVz9z-WnkaC2YU3Ay2ej0Htk4_oGhwfxoKxdqtWg0eiK9kcrIcbQ4biFXd2-YtNnz04ked52GhizTlSFvUGbLiTdiimE0uWFoLTh6e9xzEv-eNy6DPI3lvcVkjyqK8LU-E7JCLGJEd8qfnbtj"/>
</div>
<div>
<p className="font-bold text-on-surface">أحمد التيجاني</p>
<p className="text-xs text-tertiary">ID: #HT-8821</p>
</div>
</div>
</td>
<td className="px-6 py-5 text-center text-sm">12 أكتوبر 2023</td>
<td className="px-6 py-5 text-center text-sm font-medium">178 سم</td>
<td className="px-6 py-5 text-center text-sm font-medium">102 سم</td>
<td className="px-6 py-5 text-center text-sm font-medium">48 سم</td>
<td className="px-6 py-5 text-center text-sm font-medium">92 سم</td>
<td className="px-6 py-5 text-center">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/20 text-secondary text-xs font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                            موثق
                                        </span>
</td>
<td className="px-6 py-5">
<div className="flex items-center justify-start gap-2">
<button className="p-2 text-tertiary hover:text-primary transition-colors" title="عرض التفاصيل">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
</button>
<button className="p-2 text-tertiary hover:text-primary transition-colors" title="تعديل">
<span className="material-symbols-outlined" data-icon="edit">edit</span>
</button>
<button className="p-2 text-primary hover:bg-primary-container/10 rounded-lg transition-colors" title="طلب جديد">
<span className="material-symbols-outlined" data-icon="shopping_basket">shopping_basket</span>
</button>
</div>
</td>
</tr>

<tr className="bg-[#FAFAF8]-container-lowest hover:bg-[#FAFAF8]-container/30 transition-colors">
<td className="px-6 py-5">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#FAFAF8]-container overflow-hidden">
<img className="w-full h-full object-cover" data-alt="portrait of a woman with elegant style against a neutral studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfIr3GRDECJxRMkyHVl_kMTr5DFFacyPgOOKWx0iaEpm4tRr58DkdDQBqkG-qoZ7-i949iDOOs1qkGWt4veuaY_4lA6d6WslX5dygWH61XvjZ-5SdbYR2brOFIOU8fy2cU-FRLmgSO4_weJadTHnTNkumSBgjPnQ0QiC_GTi-Zcugo9JXt-o7jZD-Ig5t1r9NEeSSyBcI05yruTnn_mc7IlV4SdKyE4v3ayfdSg7RtNw6Vpn5GKdv5sp8hZ-GF0Hyx-7xVuk0OjBaB"/>
</div>
<div>
<p className="font-bold text-on-surface">ليلى عثمان</p>
<p className="text-xs text-tertiary">ID: #HT-9014</p>
</div>
</div>
</td>
<td className="px-6 py-5 text-center text-sm">05 يناير 2023</td>
<td className="px-6 py-5 text-center text-sm font-medium">164 سم</td>
<td className="px-6 py-5 text-center text-sm font-medium">94 سم</td>
<td className="px-6 py-5 text-center text-sm font-medium">39 سم</td>
<td className="px-6 py-5 text-center text-sm font-medium">78 سم</td>
<td className="px-6 py-5 text-center">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-error-container/20 text-error text-xs font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                                            تحديث مطلوب
                                        </span>
</td>
<td className="px-6 py-5">
<div className="flex items-center justify-start gap-2">
<button className="p-2 text-tertiary hover:text-primary transition-colors"><span className="material-symbols-outlined" data-icon="visibility">visibility</span></button>
<button className="p-2 text-tertiary hover:text-primary transition-colors"><span className="material-symbols-outlined" data-icon="edit">edit</span></button>
<button className="p-2 text-primary hover:bg-primary-container/10 rounded-lg transition-colors"><span className="material-symbols-outlined" data-icon="shopping_basket">shopping_basket</span></button>
</div>
</td>
</tr>

<tr className="bg-[#FAFAF8]-container-lowest hover:bg-[#FAFAF8]-container/30 transition-colors">
<td className="px-6 py-5">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#FAFAF8]-container overflow-hidden">
<img className="w-full h-full object-cover" data-alt="candid portrait of a smiling young man in casual attire" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0IDpmxWQbzWK0CuMq4lvSnmI1Fhp7WBF_JteMl7T7PYpLelmOncWngeB1NFroS85Kjhdoc9K1zSkBIYW-R6ovmyAgYswye-ojRRcGw5-Bb3EVKUxPoJHTSNU0sAkLYZ4HLrNrmtD4SuwY7suIweZFD82UcxUTaGeeBU2B-oJcXGJQpxkH_Nb_VpxoXY1f-sZzoT057SG5XcHoNMbgrY4J_dt1wkq08kq4oF8o4LwBBY9lg3zkJH2lw5D4r0bs-5ZkMtxSXDQgkv1Z"/>
</div>
<div>
<p className="font-bold text-on-surface">مصطفى إدريس</p>
<p className="text-xs text-tertiary">ID: #HT-8756</p>
</div>
</div>
</td>
<td className="px-6 py-5 text-center text-sm">18 نوفمبر 2023</td>
<td className="px-6 py-5 text-center text-sm font-medium">182 سم</td>
<td className="px-6 py-5 text-center text-sm font-medium">110 سم</td>
<td className="px-6 py-5 text-center text-sm font-medium">51 سم</td>
<td className="px-6 py-5 text-center text-sm font-medium">98 سم</td>
<td className="px-6 py-5 text-center">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/20 text-secondary text-xs font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                            موثق
                                        </span>
</td>
<td className="px-6 py-5">
<div className="flex items-center justify-start gap-2">
<button className="p-2 text-tertiary hover:text-primary transition-colors"><span className="material-symbols-outlined" data-icon="visibility">visibility</span></button>
<button className="p-2 text-tertiary hover:text-primary transition-colors"><span className="material-symbols-outlined" data-icon="edit">edit</span></button>
<button className="p-2 text-primary hover:bg-primary-container/10 rounded-lg transition-colors"><span className="material-symbols-outlined" data-icon="shopping_basket">shopping_basket</span></button>
</div>
</td>
</tr>

<tr className="bg-[#FAFAF8]-container-lowest hover:bg-[#FAFAF8]-container/30 transition-colors">
<td className="px-6 py-5">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#FAFAF8]-container overflow-hidden">
<img className="w-full h-full object-cover" data-alt="soft focused portrait of a woman with natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXP3FYpW3ITZR0Lh1eiLpX79cP6BRZzDCw5T5YURv1pE0Jox80ShuOkiEKMSXKhJ1YjSeC0_LxU1Wyf8jBjTU_viE53ywK2S60nVeEJhd7y-uU7k_PPZ4Sy7d75B2ZzVyjUTAKxxr9-jhmz7c0R3UrW-vEOexMdY-UbgqpOZTzZwKJbEhkBYXwXqeaJrZVt0hV_6lbW9UnA2HLEp0PDpLJGa0vMu07wgvn4MKl4e6M63VYD-GqWqEoFGS1bd3NqeMR10HFRBLU5V9m"/>
</div>
<div>
<p className="font-bold text-on-surface">زينب بشير</p>
<p className="text-xs text-tertiary">ID: #HT-9122</p>
</div>
</div>
</td>
<td className="px-6 py-5 text-center text-sm">01 ديسمبر 2023</td>
<td className="px-6 py-5 text-center text-sm font-medium">159 سم</td>
<td className="px-6 py-5 text-center text-sm font-medium">88 سم</td>
<td className="px-6 py-5 text-center text-sm font-medium">36 سم</td>
<td className="px-6 py-5 text-center text-sm font-medium">72 سم</td>
<td className="px-6 py-5 text-center">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/20 text-secondary text-xs font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                            موثق
                                        </span>
</td>
<td className="px-6 py-5">
<div className="flex items-center justify-start gap-2">
<button className="p-2 text-tertiary hover:text-primary transition-colors"><span className="material-symbols-outlined" data-icon="visibility">visibility</span></button>
<button className="p-2 text-tertiary hover:text-primary transition-colors"><span className="material-symbols-outlined" data-icon="edit">edit</span></button>
<button className="p-2 text-primary hover:bg-primary-container/10 rounded-lg transition-colors"><span className="material-symbols-outlined" data-icon="shopping_basket">shopping_basket</span></button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-6 py-4 bg-[#FAFAF8]-container border-t border-outline-variant/10 flex items-center justify-between">
<p className="text-xs font-medium text-tertiary tracking-wide uppercase">عرض 1 إلى 10 من أصل 1,284 إدخال</p>
<div className="flex items-center gap-1">
<button className="p-2 text-tertiary hover:bg-[#FAFAF8]-container-high rounded-lg transition-colors">
<span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</button>
<button className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white text-on-primary rounded-lg text-xs font-bold">1</button>
<button className="w-8 h-8 flex items-center justify-center hover:bg-[#FAFAF8]-container-high rounded-lg text-xs font-bold">2</button>
<button className="w-8 h-8 flex items-center justify-center hover:bg-[#FAFAF8]-container-high rounded-lg text-xs font-bold">3</button>
<button className="p-2 text-tertiary hover:bg-[#FAFAF8]-container-high rounded-lg transition-colors">
<span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="md:col-span-2 bg-[#FAFAF8]-container-low p-8 rounded-2xl relative overflow-hidden">
<div className="relative z-10 max-w-md">
<h3 className="text-xl font-bold mb-4">دليل دقة القياسات</h3>
<p className="text-tertiary mb-6 leading-relaxed">تأكد من أن جميع القياسات تتبع معايير Heritage Digital. السجلات الرقمية تكون أكثر دقة عندما يتم التحقق منها بواسطة أداة القياس الذكية الخاصة بنا.</p>
<button className="px-6 py-3 bg-on-surface text-surface rounded-xl font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-sm" data-icon="menu_book">menu_book</span>
                                قراءة بروتوكولات القياس
                            </button>
</div>
<div className="absolute left-0 bottom-0 opacity-10">
<span className="material-symbols-outlined text-[180px]" data-icon="straighten">straighten</span>
</div>
</div>
<div className="bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white text-on-primary p-8 rounded-2xl flex flex-col justify-between">
<div>
<span className="material-symbols-outlined mb-4" data-icon="bolt" >bolt</span>
<h3 className="text-xl font-bold mb-2">تحقق سريع</h3>
<p className="text-on-primary/70 text-sm leading-relaxed">قم تلقائياً بتمييز الملفات الشخصية التي لم يتم تحديثها منذ أكثر من 12 شهراً لإجراء التعديلات الموسمية.</p>
</div>
<button className="mt-6 w-full py-3 bg-[#FAFAF8]-container-lowest text-primary rounded-xl font-bold text-sm shadow-xl shadow-black/10">بدء الفحص الآن</button>
</div>
</div>
</div>
</main>
</div>
    </>
  );
}