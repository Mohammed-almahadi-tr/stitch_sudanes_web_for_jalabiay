import React from 'react';

export default function Screen4() {
  return (
    <>
<aside className="fixed right-0 top-0 h-full w-64 border-l border-stone-200/50 bg-[#faf6f0] dark:bg-stone-900 z-50">
<div className="flex flex-col h-full p-6 gap-2">
<div className="mb-8 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
<span className="material-symbols-outlined text-primary text-2xl" data-icon="content_cut">content_cut</span>
</div>
<h2 className="text-lg font-black text-[#4a7c59] tracking-tight">إدارة تيرة</h2>
<p className="text-xs text-stone-500">لوحة التحكم الرئيسية</p>
</div>
<nav className="flex flex-col gap-2 flex-grow">
<a className="flex flex-row-reverse items-center gap-3 text-stone-600 dark:text-stone-400 px-4 py-3 hover:bg-stone-200/50 dark:hover:bg-stone-800 transition-all active:opacity-80" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-medium text-sm">لوحة القيادة</span>
</a>
<a className="flex flex-row-reverse items-center gap-3 text-stone-600 dark:text-stone-400 px-4 py-3 hover:bg-stone-200/50 dark:hover:bg-stone-800 transition-all active:opacity-80" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span className="font-medium text-sm">المستخدمين</span>
</a>

<a className="flex flex-row-reverse items-center gap-3 bg-[#4a7c59]/10 text-[#4a7c59] dark:text-emerald-400 rounded-xl px-4 py-3 font-bold transition-all" href="#">
<span className="material-symbols-outlined" data-icon="content_cut">content_cut</span>
<span className="font-medium text-sm">الخياطين</span>
</a>
<a className="flex flex-row-reverse items-center gap-3 text-stone-600 dark:text-stone-400 px-4 py-3 hover:bg-stone-200/50 dark:hover:bg-stone-800 transition-all active:opacity-80" href="#">
<span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
<span className="font-medium text-sm">الطلبات</span>
</a>
<a className="flex flex-row-reverse items-center gap-3 text-stone-600 dark:text-stone-400 px-4 py-3 hover:bg-stone-200/50 dark:hover:bg-stone-800 transition-all active:opacity-80" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
<span className="font-medium text-sm">التحليلات</span>
</a>
</nav>
<div className="mt-auto pt-6 border-t border-stone-200/50">
<a className="flex flex-row-reverse items-center gap-3 text-stone-600 dark:text-stone-400 px-4 py-3 hover:bg-stone-200/50 dark:hover:bg-stone-800 transition-all active:opacity-80" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span className="font-medium text-sm">تسجيل الخروج</span>
</a>
</div>
</div>
</aside>

<main className="mr-64 flex-1 min-h-screen">

<header className="sticky top-0 z-40 w-full px-8 h-20 bg-[#faf6f0] flex flex-row-reverse justify-between items-center border-b border-stone-200/50 shadow-[0_4px_20px_rgba(46,50,48,0.06)]">
<div className="flex items-center gap-4 flex-row-reverse">
<h1 className="font-['Literata'] font-bold text-2xl text-[#4a7c59]">إدارة الخياطين</h1>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<button className="p-2 rounded-full hover:bg-stone-100 transition-colors text-stone-600 active:scale-95 duration-200">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-2 rounded-full hover:bg-stone-100 transition-colors text-stone-600 active:scale-95 duration-200">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
</div>
<div className="flex items-center gap-3 flex-row-reverse">
<div className="text-left">
<p className="text-sm font-bold text-on-surface">أحمد محمد</p>
<p className="text-[10px] text-stone-500">مدير المنصة</p>
</div>
<img alt="صورة الملف الشخصي للمسؤول" className="w-10 h-10 rounded-full object-cover border-0 bg-white shadow-sm" data-alt="close-up portrait of a professional middle-aged man with a friendly expression in a modern office environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8_cEHn-RH8Syl2g3LrykWe3TXttFfyWL2QbGVyDwhlNpYa4qmIr1JogyMYeDcidSbkU9uIQn7LH4iAqJZphRLxOVrffA065gLHz7sx77V6SNgGSYqxXZ1hyqFcZQbqd-wte3kvHIotdA23zeu2BuRFlzfuWQTL1g-hRc3uqvuXv-hQI0dJpS6xrObcDX00O0FxDK1ir3Ecb18_iw1AeYHIxWVhOj7c2tD0SRrx1GEvt7SaOcel7ZM2j0F6Z6_7cQWbSjC2ElChXCt"/>
</div>
</div>
</header>

<div className="p-8 max-w-7xl mx-auto">

<div className="flex flex-row-reverse justify-between items-center mb-8">
<div>
<h2 className="text-3xl font-bold text-on-surface mb-2">نظرة عامة على الكوادر</h2>
<p className="text-stone-500 font-body">إدارة ومتابعة أداء الخياطين المحترفين على منصة تيرة.</p>
</div>
<button className="bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg hover:brightness-110 transition-all active:scale-95">
<span className="material-symbols-outlined" data-icon="add">add</span>
                    إضافة خياط جديد
                </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
<div className="bg-[#FAFAF8]-container-low p-6 rounded-xl shadow-[0_4px_20px_rgba(46,50,48,0.06)] flex items-center justify-between border-r-4 border-primary">
<div>
<p className="text-sm text-stone-500 mb-1">إجمالي الخياطين</p>
<h3 className="text-3xl font-black text-on-surface">320</h3>
</div>
<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl" data-icon="group">group</span>
</div>
</div>
<div className="bg-[#FAFAF8]-container-low p-6 rounded-xl shadow-[0_4px_20px_rgba(46,50,48,0.06)] flex items-center justify-between border-r-4 border-emerald-400">
<div>
<p className="text-sm text-stone-500 mb-1">الخياطين النشطين</p>
<h3 className="text-3xl font-black text-on-surface">290</h3>
</div>
<div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
<span className="material-symbols-outlined text-3xl" data-icon="check_circle" >check_circle</span>
</div>
</div>
<div className="bg-[#FAFAF8]-container-low p-6 rounded-xl shadow-[0_4px_20px_rgba(46,50,48,0.06)] flex items-center justify-between border-r-4 border-tertiary">
<div>
<p className="text-sm text-stone-500 mb-1">الأعلى أداءً</p>
<h3 className="text-3xl font-black text-on-surface">15</h3>
</div>
<div className="w-12 h-12 bg-tertiary/10 rounded-full flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-3xl" data-icon="star" >star</span>
</div>
</div>
</div>

<div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl mb-6 flex flex-wrap gap-4 items-center">
<div className="relative flex-grow min-w-[300px]">
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-stone-400" data-icon="search">search</span>
<input className="w-full pr-12 pl-4 py-3 bg-white border-stone-200 rounded-xl focus:ring-primary focus:border-primary transition-all" placeholder="ابحث عن خياط بالاسم أو الرقم..." type="text"/>
</div>
<div className="flex gap-2">
<select className="bg-white border-stone-200 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary min-w-[140px]">
<option>كل المدن</option>
<option>الخرطوم</option>
<option>أمدرمان</option>
<option>بحري</option>
</select>
<select className="bg-white border-stone-200 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary min-w-[140px]">
<option>الحالة</option>
<option>نشط</option>
<option>مشغول</option>
</select>
<button className="bg-secondary-container text-on-secondary-container px-4 py-3 rounded-xl hover:bg-stone-200 transition-colors">
<span className="material-symbols-outlined align-middle" data-icon="filter_list">filter_list</span>
                        تصفية متقدمة
                    </button>
</div>
</div>

<div className="bg-[#FAFAF8]-container-lowest rounded-xl shadow-[0_4px_20px_rgba(46,50,48,0.06)] overflow-hidden border-0 bg-white shadow-sm">
<table className="w-full text-right">
<thead className="bg-stone-50/50 border-b border-stone-100">
<tr>
<th className="px-6 py-4 font-bold text-stone-600 text-sm">الخياط</th>
<th className="px-6 py-4 font-bold text-stone-600 text-sm">التقييم</th>
<th className="px-6 py-4 font-bold text-stone-600 text-sm text-center">عدد الطلبات</th>
<th className="px-6 py-4 font-bold text-stone-600 text-sm">المدينة</th>
<th className="px-6 py-4 font-bold text-stone-600 text-sm">الحالة</th>
<th className="px-6 py-4 font-bold text-stone-600 text-sm text-left">الإجراءات</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-100">

<tr className="hover:bg-stone-50/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3 flex-row-reverse">
<img alt="خياط" className="w-10 h-10 rounded-full object-cover" data-alt="medium shot of a male artisan tailor with a measuring tape around his neck in a warm sunlit workshop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq5Iqv9XZiBeqbgHudiRt6NDszJI-Qe73umeYs80hl4eNXYppXWCyubN7jfRW9g5pWrRt0hTyf6jI-VU6N3pmg3Zytp6KadypKyKZSLPm6fzfiR7wMicbDdffqsUibecRLDVfwh0Xa5GRffygszTXSQ5IWjuIQ0JAKmW9J0TfoMycT56vhY5LkqOsSoLvrjJCSJWLLwQVE4a8GHxmsfvMvtou-jtZKXPI6FtcM1EaFVhruI-3Rr1sJUQdjYk4Bfwiy26ELKLT-icS6"/>
<div>
<p className="font-bold text-on-surface">إبراهيم صالح</p>
<p className="text-[10px] text-stone-400">متخصص في البدلات الرسمية</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1 text-tertiary">
<span className="material-symbols-outlined text-sm" data-icon="star" >star</span>
<span className="font-bold">4.9</span>
</div>
</td>
<td className="px-6 py-4 text-center font-bold text-on-surface">1,240</td>
<td className="px-6 py-4 text-stone-600">الخرطوم</td>
<td className="px-6 py-4">
<span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full">نشط</span>
</td>
<td className="px-6 py-4 text-left">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 text-stone-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
</button>
<button className="p-2 text-stone-400 hover:text-stone-600 transition-colors">
<span className="material-symbols-outlined" data-icon="edit">edit</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-stone-50/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3 flex-row-reverse">
<img alt="خياطة" className="w-10 h-10 rounded-full object-cover" data-alt="portrait of a focused female seamstress working on a garment in a bright modern studio with fabrics in the background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBnL2WktUUgUaWKhJF0bQVGaYQpKTuIVnfiwl2QiSY8OhbuaAg2lafE-JADtk6pwZnH3BdsDIu_tHM_TBsicxrFd5T4ntNwvlPuiovsAQHnAVO3dghjgkO5eIMZC9IPh__Y6LGJsMopgSRA0N1nzWCu08zOXPUsEZ6JaHGU7kMoUoygn5W1mJRwLSbFccv0_DqW11L7XFeNzMJe2deHspOJ21F0Y58b9C5nfPcmkgf6FDQZscSTyhn3vFGb2vkN2akadFba8rYGZcF"/>
<div>
<p className="font-bold text-on-surface">سارة عثمان</p>
<p className="text-[10px] text-stone-400">فساتين ومناسبات</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1 text-tertiary">
<span className="material-symbols-outlined text-sm" data-icon="star" >star</span>
<span className="font-bold">4.8</span>
</div>
</td>
<td className="px-6 py-4 text-center font-bold text-on-surface">856</td>
<td className="px-6 py-4 text-stone-600">أمدرمان</td>
<td className="px-6 py-4">
<span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full">مشغول</span>
</td>
<td className="px-6 py-4 text-left">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 text-stone-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
</button>
<button className="p-2 text-stone-400 hover:text-stone-600 transition-colors">
<span className="material-symbols-outlined" data-icon="edit">edit</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-stone-50/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3 flex-row-reverse">
<img alt="خياط" className="w-10 h-10 rounded-full object-cover" data-alt="side profile of a skilled tailor hand-stitching a lapel on a high-quality wool suit jacket" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-XRJjP0Ao3Xb4OjvFADOSjK2XvM08Bflm8lq4U76jC36sVzrFFE0e1DV6s2Dt435zq3kXSdVST3tQidWwzrB-br4Fq9z4g14tZdLniADf1rPLG9Mof-x2kvNsZvKUMi32T2iyOcGUx-mA0QFFsptA3sf6OVnocllmvA6tNwaexrBg8vG66ZAnlOlnKQUfzB1qP8YjC8dUnFs2PNCvStxyKbtWH_i9yFDaAc24xmZSegjDittS8kBVwO-r5r8nZlx2mo-8RlSFl4uE"/>
<div>
<p className="font-bold text-on-surface">خالد حسن</p>
<p className="text-[10px] text-stone-400">خياطة يدوية تقليدية</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1 text-tertiary">
<span className="material-symbols-outlined text-sm" data-icon="star" >star</span>
<span className="font-bold">5.0</span>
</div>
</td>
<td className="px-6 py-4 text-center font-bold text-on-surface">2,105</td>
<td className="px-6 py-4 text-stone-600">بحري</td>
<td className="px-6 py-4">
<span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full">نشط</span>
</td>
<td className="px-6 py-4 text-left">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 text-stone-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
</button>
<button className="p-2 text-stone-400 hover:text-stone-600 transition-colors">
<span className="material-symbols-outlined" data-icon="edit">edit</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-stone-50/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3 flex-row-reverse">
<img alt="خياط" className="w-10 h-10 rounded-full object-cover" data-alt="portrait of an elderly experienced tailor with silver hair smiling gently in his traditional workshop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9k_H83rI1pLJhUsnSt0UlVBnKf9vKRu_oUn_KK1bJ8A1b6CT8C0jXB4oiei26jyhJq5d5XRhuWCU-Jj86tIwX_L9Kp3gtiKR9H5pWTC2Qo36xK1FoWTHnfrwePLY24RwtL3ncpLxT8CgxoVtrziENwPgYbXEkYAYFNIboKwFjh2y1JncaUPW_jF7fW_U93Ne2tOu0PcOHaK7H94WjgD-uArAuwCz9Q5dz30BL0pM94zCnTvSzzBRy7z9y1Dox-QdXpM8WvvQVstoa"/>
<div>
<p className="font-bold text-on-surface">عمر بشير</p>
<p className="text-[10px] text-stone-400">ملابس رجالية فاخرة</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1 text-tertiary">
<span className="material-symbols-outlined text-sm" data-icon="star" >star</span>
<span className="font-bold">4.7</span>
</div>
</td>
<td className="px-6 py-4 text-center font-bold text-on-surface">432</td>
<td className="px-6 py-4 text-stone-600">الخرطوم</td>
<td className="px-6 py-4">
<span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full">نشط</span>
</td>
<td className="px-6 py-4 text-left">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 text-stone-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
</button>
<button className="p-2 text-stone-400 hover:text-stone-600 transition-colors">
<span className="material-symbols-outlined" data-icon="edit">edit</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>

<div className="px-6 py-4 border-t border-stone-100 flex flex-row-reverse justify-between items-center bg-stone-50/30">
<p className="text-xs text-stone-500">عرض 1-10 من أصل 320 خياط</p>
<div className="flex gap-2">
<button className="w-8 h-8 flex items-center justify-center rounded-lg border-0 bg-white shadow-sm text-stone-400 hover:bg-white hover:text-primary transition-all">
<span className="material-symbols-outlined text-lg" data-icon="chevron_right">chevron_right</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white text-white font-bold text-sm">1</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg border-0 bg-white shadow-sm text-stone-600 font-bold text-sm hover:bg-white">2</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg border-0 bg-white shadow-sm text-stone-600 font-bold text-sm hover:bg-white">3</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg border-0 bg-white shadow-sm text-stone-400 hover:bg-white hover:text-primary transition-all">
<span className="material-symbols-outlined text-lg" data-icon="chevron_left">chevron_left</span>
</button>
</div>
</div>
</div>
</div>
</main>
    </>
  );
}