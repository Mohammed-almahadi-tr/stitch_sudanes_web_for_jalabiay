import React from 'react';

export default function Screen2() {
  return (
    <>
<aside className="fixed right-0 top-0 h-screen w-64 flex flex-col p-4 z-50 overflow-y-auto bg-[#faf6f0] dark:bg-stone-900 border-l border-stone-200 dark:border-stone-800 font-['Nunito_Sans'] text-right">
<div className="flex items-center gap-3 mb-10 px-2">
<div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined" data-icon="architecture">architecture</span>
</div>
<div>
<h2 className="font-['Literata'] text-xl text-[#4a7c59]">ترا للملابس</h2>
<p className="text-xs text-stone-500">إدارة الخياطة</p>
</div>
</div>
<nav className="flex-1 space-y-2">
<a className="flex items-center gap-3 p-3 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 hover:pr-2 transition-all duration-300 transition-transform duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-medium text-sm">لوحة القيادة</span>
</a>
<a className="flex items-center gap-3 p-3 bg-[#4a7c59]/10 text-[#4a7c59] font-bold rounded-xl hover:pr-2 transition-all duration-300 transition-transform duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span className="font-medium text-sm">المستخدمين</span>
</a>
<a className="flex items-center gap-3 p-3 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 hover:pr-2 transition-all duration-300 transition-transform duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="architecture">architecture</span>
<span className="font-medium text-sm">الخياطين</span>
</a>
<a className="flex items-center gap-3 p-3 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 hover:pr-2 transition-all duration-300 transition-transform duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
<span className="font-medium text-sm">الطلبات</span>
</a>
<a className="flex items-center gap-3 p-3 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 hover:pr-2 transition-all duration-300 transition-transform duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
<span className="font-medium text-sm">التحليلات</span>
</a>
</nav>
<div className="mt-auto space-y-2 border-t border-stone-200 dark:border-stone-800 pt-4">
<button className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white text-on-primary rounded-xl font-bold shadow-sm active:scale-95 transition-transform">
<span className="material-symbols-outlined" data-icon="add">add</span>
<span>طلب جديد</span>
</button>
<a className="flex items-center gap-3 p-3 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 hover:pr-2 transition-all duration-300 transition-transform duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-medium text-sm">الإعدادات</span>
</a>
<a className="flex items-center gap-3 p-3 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 hover:pr-2 transition-all duration-300 transition-transform duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span className="font-medium text-sm">تسجيل الخروج</span>
</a>
</div>
</aside>

<header className="fixed top-0 right-64 left-0 h-16 flex items-center justify-between px-8 z-40 bg-[#faf6f0] dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 shadow-sm flex-row-reverse">
<div className="flex items-center gap-4">
<div className="relative group cursor-pointer active:scale-95 duration-200">
<span className="material-symbols-outlined text-stone-600 dark:text-stone-400" data-icon="notifications">notifications</span>
<span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full border-0 bg-white shadow-sm"></span>
</div>
<div className="relative group cursor-pointer active:scale-95 duration-200">
<span className="material-symbols-outlined text-stone-600 dark:text-stone-400" data-icon="settings">settings</span>
</div>
<div className="flex items-center gap-3 pr-4 border-r border-stone-200">
<img alt="Admin Profile" className="w-8 h-8 rounded-full object-cover" data-alt="headshot of a mature sudanese man with a warm smile wearing a traditional white jalabiya against a soft focus earthy background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvZiXXFOplnqqYyo1wQMobJ7QlFgB-xBP3e4cPVESNlYY-r7QiOPQCcjINGaV-0_54kof0Xzw6A7xWDCoAdmsxzx1kEOaoUZ49GPLcs6hBR4vuQX9dkjxopWbtP8T3uXe5mYrowEZ_KAgY2JA0QXhhHSm86h0YB_wyDsAs62NxZe2tbHm8mgL59HTgJt-s9SJSfcSE9BQ8fM9NEo-0jovtaWFWs-uPyHQaayBRIl87WYfFQgwytw2BrYn_PDq24_8JzLeKBSp9jkxe"/>
<span className="font-['Literata'] font-semibold text-sm text-[#4a7c59]">أحمد عثمان</span>
</div>
</div>
<div className="flex-1 max-w-md mx-8">
<div className="relative">
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-stone-400" data-icon="search">search</span>
<input className="w-full bg-[#FAFAF8]-container-low border-none rounded-full py-2 pr-10 pl-4 text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-stone-400" placeholder="البحث في النظام..." type="text"/>
</div>
</div>
<div className="text-2xl font-bold text-[#4a7c59] dark:text-emerald-500 font-['Literata']">
            Terra Tailors
        </div>
</header>

<main className="mr-64 pt-24 pb-12 px-8">

<div className="flex items-center justify-between mb-8">
<div>
<h1 className="text-3xl font-bold text-on-background mb-2">إدارة المستخدمين</h1>
<p className="text-on-surface-variant font-body">نظرة عامة والتحكم في وصول المستخدمين، الخياطين، والمدراء.</p>
</div>
<button className="bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white text-on-primary px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-sm hover:bg-opacity-90 transition-all active:scale-95">
<span className="material-symbols-outlined" data-icon="person_add">person_add</span>
<span>إضافة مستخدم جديد</span>
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
<div className="md:col-span-2 bg-[#FAFAF8]-container-low p-6 rounded-xl border-0 bg-white shadow-sm">
<div className="flex flex-col gap-4">
<label className="text-sm font-bold text-tertiary">بحث سريع بالاسم أو البريد</label>
<div className="relative">
<input className="w-full bg-[#FAFAF8] border-outline-variant/40 rounded-lg py-3 pr-4 pl-10 focus:ring-primary focus:border-primary" placeholder="أدخل اسم المستخدم..." type="text"/>
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" data-icon="filter_list">filter_list</span>
</div>
</div>
</div>
<div className="bg-[#FAFAF8]-container-low p-6 rounded-xl border-0 bg-white shadow-sm">
<label className="block text-sm font-bold text-tertiary mb-3">الدور الوظيفي</label>
<select className="w-full bg-[#FAFAF8] border-outline-variant/40 rounded-lg py-3 px-4 focus:ring-primary focus:border-primary">
<option>الكل</option>
<option>خياط</option>
<option>عميل</option>
<option>مدير</option>
</select>
</div>
<div className="bg-[#FAFAF8]-container-low p-6 rounded-xl border-0 bg-white shadow-sm flex items-center justify-between">
<div>
<p className="text-xs text-on-surface-variant mb-1">إجمالي المستخدمين</p>
<p className="text-2xl font-headline font-bold text-primary">1,284</p>
</div>
<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
<span className="material-symbols-outlined" data-icon="groups">groups</span>
</div>
</div>
</div>

<div className="bg-[#FAFAF8]-container-lowest rounded-xl shadow-[0_4px_20px_rgba(46,50,48,0.06)] overflow-hidden border-0 bg-white shadow-sm">
<table className="w-full text-right border-collapse">
<thead>
<tr className="bg-[#FAFAF8]-container-low text-on-surface-variant text-sm border-b border-outline-variant/30">
<th className="px-6 py-4 font-bold">المستخدم</th>
<th className="px-6 py-4 font-bold">البريد الإلكتروني</th>
<th className="px-6 py-4 font-bold">الدور</th>
<th className="px-6 py-4 font-bold">تاريخ الانضمام</th>
<th className="px-6 py-4 font-bold">الحالة</th>
<th className="px-6 py-4 font-bold text-left">الإجراءات</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/20">

<tr className="hover:bg-[#FAFAF8]-container-low/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img alt="Fatima Profile" className="w-10 h-10 rounded-full object-cover border-0 bg-white shadow-sm" data-alt="portrait of a young sudanese woman wearing a stylish colorful tobe and a warm friendly expression in a naturally lit studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRkCQHi1Has218sKKcgdHq8g1FS2uzn0vTtx9sSJJVH6DfKdXhjAvsY5OIJthzK3JnjAckHnmpOgPcwvoYVgifS552XwN4PjqGoL0IiVE3fN9H9flYDnzHGUHx0wQz3AR-hHBN1tJB1tg-wF9zs3GJ6z1em5pZM8mP2CgiG-bahJx5XSRTLOdbzz5NWM16igf3iYG_XhwFf4MCVpuX_nFZx1uNwcT0RMHUorkVciWTrTU_uwf6AKYdCFy-RLQXaQuS99yky7F_X6sn"/>
<span className="font-bold text-on-surface">فاطمة محمد إبراهيم</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-on-surface-variant">fatima.m@terratailors.sd</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-tertiary-fixed text-on-tertiary-fixed-variant">
                                خياط
                            </span>
</td>
<td className="px-6 py-4 text-sm text-on-surface-variant">12 يناير 2024</td>
<td className="px-6 py-4">
<span className="flex items-center gap-1.5 text-xs text-primary font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                نشط
                            </span>
</td>
<td className="px-6 py-4 text-left">
<div className="flex items-center justify-end gap-2">
<button className="p-2 hover:bg-[#FAFAF8]-container-high rounded-lg text-stone-500 transition-colors">
<span className="material-symbols-outlined" data-icon="edit">edit</span>
</button>
<button className="p-2 hover:bg-error/10 rounded-lg text-error transition-colors">
<span className="material-symbols-outlined" data-icon="block">block</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-[#FAFAF8]-container-low/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img alt="Omer Profile" className="w-10 h-10 rounded-full object-cover border-0 bg-white shadow-sm" data-alt="portrait of a handsome sudanese man in a casual earth-toned shirt with a confident gaze and soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdt28s7ObBphczwtCIw0x-PR4LQMgVR6BEdy138yTz4A75Bu-t03YMQiq7Hv9e7Fox3r2ymNefoeV593Dg0naofOZW6HQj4aoKi2jZK3WPGyy83dHgTrmVJjOC6yCBMDM8yiiiQehPdoUrvIoU1m_-LUCxF5hPvp-rS5vERrig5Zcl8NpAWA6F1MBI9pStlTHVfr2_8ZqDPPolEhIyT9E7SqVbSkZQXIUUNRni9ScYJYkOAvBVhGJx3zxxlsA3MUxWK_8_vX8WeJhO"/>
<span className="font-bold text-on-surface">عمر يوسف الطيب</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-on-surface-variant">omer.tayeb@outlook.com</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-container text-on-secondary-container">
                                عميل
                            </span>
</td>
<td className="px-6 py-4 text-sm text-on-surface-variant">05 فبراير 2024</td>
<td className="px-6 py-4">
<span className="flex items-center gap-1.5 text-xs text-primary font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                نشط
                            </span>
</td>
<td className="px-6 py-4 text-left">
<div className="flex items-center justify-end gap-2">
<button className="p-2 hover:bg-[#FAFAF8]-container-high rounded-lg text-stone-500 transition-colors">
<span className="material-symbols-outlined" data-icon="edit">edit</span>
</button>
<button className="p-2 hover:bg-error/10 rounded-lg text-error transition-colors">
<span className="material-symbols-outlined" data-icon="block">block</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-[#FAFAF8]-container-low/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img alt="Hassan Profile" className="w-10 h-10 rounded-full object-cover border-0 bg-white shadow-sm" data-alt="close up headshot of an elder sudanese man with salt and pepper beard wearing a white cap and traditional attire, gentle and wise look" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1qBV3EM8Mmr4O94E-_HoxO0-57vQzi02U375cYAFFDVBmJzKWOkVWQJrDUNNgnD0oP7XX8tcjssK72SExifLefkwIbc5JHMemmOWOHoZNrUSn2InA1MfrwKMQfbYsMZmIIwTHLVFZM-PwX6tehuXWZe4DhHeyVoAR-dgRUpC5mBkX1cLKnyqvzAKGcVE3PhwiieClyk2dcTrwE4OAdX6uypvbttM6hAKJ-qx7YJv7NUIKX_K9HBz3A1m40hpS8mrG_IBGAi8KYEyM"/>
<span className="font-bold text-on-surface">حسن عبد القادر</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-on-surface-variant">hassan.q@admin.terra.sd</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-container text-on-primary-container">
                                مدير
                            </span>
</td>
<td className="px-6 py-4 text-sm text-on-surface-variant">20 ديسمبر 2023</td>
<td className="px-6 py-4">
<span className="flex items-center gap-1.5 text-xs text-primary font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                نشط
                            </span>
</td>
<td className="px-6 py-4 text-left">
<div className="flex items-center justify-end gap-2">
<button className="p-2 hover:bg-[#FAFAF8]-container-high rounded-lg text-stone-500 transition-colors">
<span className="material-symbols-outlined" data-icon="edit">edit</span>
</button>
<button className="p-2 hover:bg-error/10 rounded-lg text-error transition-colors">
<span className="material-symbols-outlined" data-icon="block">block</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-[#FAFAF8]-container-low/50 transition-colors opacity-60">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img alt="Sara Profile" className="w-10 h-10 rounded-full object-cover border-0 bg-white shadow-sm" data-alt="portrait of a young sudanese woman looking thoughtfully away, soft desert sunset lighting with warm shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6B99lSHiGwudASTi6aP7a5mmy2ntygecfIjOgKG3Dd3PW27RHcArBK8nPtHPumjxnuwsbKGLCv6765VsGa2JBZSg2uMeqsMm9rK7XrbydvK1P976w0NTFKF49jRJBKZyEJcu1XWlvFCzQmvt3-um7kuyQtILUuJh1ZtsVCkhfL_CHRgiACTv7E_ORGjIa3jusLvIorRUqxb8AqObjB3B4KpAxJD2xjZzrLE8CBLGPxTKJmUermUCV8HaJct7SOT-c2uWECjwjLOyQ"/>
<span className="font-bold text-on-surface">سارة مصطفى</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-on-surface-variant">sara.m@gmail.com</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-container text-on-secondary-container">
                                عميل
                            </span>
</td>
<td className="px-6 py-4 text-sm text-on-surface-variant">15 مارس 2024</td>
<td className="px-6 py-4">
<span className="flex items-center gap-1.5 text-xs text-stone-400 font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                                غير نشط
                            </span>
</td>
<td className="px-6 py-4 text-left">
<div className="flex items-center justify-end gap-2">
<button className="p-2 hover:bg-[#FAFAF8]-container-high rounded-lg text-stone-500 transition-colors">
<span className="material-symbols-outlined" data-icon="edit">edit</span>
</button>
<button className="p-2 hover:bg-primary/10 rounded-lg text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="check_circle">check_circle</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>

<div className="px-6 py-4 bg-[#FAFAF8]-container-low flex items-center justify-between border-t border-outline-variant/30">
<span className="text-xs text-on-surface-variant">عرض 1-10 من أصل 1,284 مستخدم</span>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg border-0 bg-white shadow-sm hover:bg-[#FAFAF8] transition-colors disabled={true}:opacity-30">
<span className="material-symbols-outlined scale-x-[-1]" data-icon="chevron_right">chevron_right</span>
</button>
<button className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white text-on-primary font-bold text-xs">1</button>
<button className="w-8 h-8 rounded-lg hover:bg-[#FAFAF8]-container-high text-xs font-bold transition-colors">2</button>
<button className="w-8 h-8 rounded-lg hover:bg-[#FAFAF8]-container-high text-xs font-bold transition-colors">3</button>
<span className="text-stone-400">...</span>
<button className="w-8 h-8 rounded-lg hover:bg-[#FAFAF8]-container-high text-xs font-bold transition-colors">128</button>
<button className="p-2 rounded-lg border-0 bg-white shadow-sm hover:bg-[#FAFAF8] transition-colors">
<span className="material-symbols-outlined scale-x-[-1]" data-icon="chevron_left">chevron_left</span>
</button>
</div>
</div>
</div>
</main>
    </>
  );
}